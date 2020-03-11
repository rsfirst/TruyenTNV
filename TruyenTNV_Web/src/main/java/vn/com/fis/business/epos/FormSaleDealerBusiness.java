package vn.com.fis.business.epos;

import java.net.InetAddress;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.AttachGoodsObj;
import vn.com.fis.model.epos.FSDGoods;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.GoodsSaleTransaction;
import vn.com.fis.model.epos.GoodsSaveTransaction;
import vn.com.fis.model.epos.GoodsVectorId;
import vn.com.fis.model.epos.InputSerialModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectForDoSomething;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.utils.epos.SMStringUtil;
import vn.com.fis.utils.epos.StringUtil;
import vn.com.fis.ws.WebService;

@RestController
public class FormSaleDealerBusiness
{

	private static final Logger LOG = LoggerFactory.getLogger(FormSaleDealerBusiness.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	String mstrGoodCode = "";
	String mstrQuantity = "";
	String mstrPrice = "";
	String mstrPriceID = "";
	String mstrProm = "";
	String mstrPromCode = "";
	String mstrPromID = "";
	String mstrGoodID = "";
	String mstrVAT = "";
	String mstrUnit = "";
	String mstrCheckSerial = "";
	String mstrMaxQuantity = "";
	String mstrGoodsGroupCode = "";
	String mstrPriceTypeID = "";
	String mstrResourceCode = "";
	String mstrGoodsType = "";
	String mstrDiscount = "";
	String mstrDiscountID = "";

	String mstrMoneyNoTax = "";
	String mstrMoneyTax = "";
	String mstrMoneyTaxSum = "";
	String mstrMoneyDiscount = "";
	String mstrMoneyProm = "";
	String mstrMoney = "";
	String mstrMoneySum = "";

	Double mlngSUMMoneyNoTax;
	Double mlngSUMMoneyTax;
	Double mlngSUMMoneyTaxSum;
	Double mlngSUMMoneyDiscount;
	Double mlngSUMMoneyProm;
	Double mlngSUMMoney;
	Double mlngSUMMoneySum;

	// Them vao danh sach
	public FSDGoods addGoods(HttpServletRequest request, FSDGoods goodsSelected) throws Exception
	{
		String nomeMetodo = ".addGoods()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		FSDGoods fsdGoods = (FSDGoods) goodsSelected.clone();
		mlngSUMMoneyNoTax = 0.0D;
		mlngSUMMoneyTax = 0.0D;
		mlngSUMMoneyTaxSum = 0.0D;
		mlngSUMMoneyDiscount = 0.0D;
		mlngSUMMoneyProm = 0.0D;
		mlngSUMMoney = 0.0D;
		mlngSUMMoneySum = 0.0D;

		try
		{
			validInputAdd(request, goodsSelected);
			calculate(request, goodsSelected);
			GoodsSaleTransaction goodsSaleTransaction = addRowGood(null);

			mstrPriceTypeID = StringUtil.nvl(goodsSelected.getPrice().getType(), "");
			if (!mstrPriceTypeID.equals("7"))
			{
				MessagesResponse message = new MessagesResponse();
				List<GoodsList> lst = new ArrayList<GoodsList>();
				List<GoodsList> result = new ArrayList<GoodsList>();
				GoodsList input = new GoodsList();
				input.setGoodsId(goodsSelected.getGoods().getGoodsId());
				input.setStrPriceType(goodsSelected.getPrice().getPriceId());

				String dataString = new Gson().toJson(input);
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ATTACH_GOODS;
				String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

				if (!"".equals(tmp))
				{
					ObjectMapper jsonMapper = new ObjectMapper();
					message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
					});
				}
				if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
				{
					throw new Exception(message.getMessages());
				} else
				{
					ObjectMapper jsonMapper = new ObjectMapper();
					jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
					lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<GoodsList>>() {
					});
					String strAttachGroupTemp = "";
					for (int i = 0; i < lst.size(); i++)
					{
						if (i == 0 && "0".equals(lst.get(i).getGroupAttach()))
						{
							GoodsList good = new GoodsList();
							good.setGoodsCode("Nhóm hàng rỗng");
							good.setStr1("FALSE");
							result.add(good);
						} else
							if (!strAttachGroupTemp.equals(lst.get(i).getGroupAttach()))
							{
								GoodsList good = new GoodsList();
								good.setGoodsCode("Nhóm hàng " + lst.get(i).getGroupAttach());
								good.setStr1("FALSE");
								result.add(good);
							}
						result.add(lst.get(i));
						strAttachGroupTemp = lst.get(i).getGroupAttach();
					}
				}

				if (result.size() > 0)
				{
					goodsSaleTransaction.setAttachGoods(convertGoodsListToAttachGoods(result));
					goodsSaleTransaction.setAttachRequire("1");
					goodsSaleTransaction.setAttachGoodsCode(mstrGoodCode);
				}
			}

			List<GoodsSaleTransaction> lstGoodsSale = fsdGoods.getLstGoodsSaleTransaction();
			if (lstGoodsSale == null)
			{
				lstGoodsSale = new ArrayList<>();
			}
			lstGoodsSale.add(goodsSaleTransaction);
			fsdGoods.setLstGoodsSaleTransaction(lstGoodsSale);

			// HazyFlame
			DecimalFormat df = new DecimalFormat("#");
			df.setMaximumFractionDigits(0);
			fsdGoods.setMlngSUMMoney(df.format(mlngSUMMoney));
			fsdGoods.setMlngSUMMoneyDiscount(df.format(mlngSUMMoneyDiscount));
			fsdGoods.setMlngSUMMoneyNoTax(df.format(mlngSUMMoneyNoTax));
			fsdGoods.setMlngSUMMoneyProm(df.format(mlngSUMMoneyProm));
			fsdGoods.setMlngSUMMoneySum(df.format(mlngSUMMoneySum));
			fsdGoods.setMlngSUMMoneyTax(df.format(mlngSUMMoneyTax));
			fsdGoods.setMlngSUMMoneyTaxSum(df.format(mlngSUMMoneyTaxSum));
			fsdGoods.setMlngSUMMoneySumWithProm(df.format(mlngSUMMoneySum - mlngSUMMoneyProm));
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return fsdGoods;
	}

	// convertGoodsListToAttachGoods
	public List<AttachGoodsObj> convertGoodsListToAttachGoods(List<GoodsList> lstGoods) throws Exception
	{
		String nomeMetodo = ".convertGoodsListToAttachGoods()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<AttachGoodsObj> lst = new ArrayList<>();
		try
		{
			if (lstGoods != null && lstGoods.size() > 0)
			{
				for (int i = 0; i < lstGoods.size(); i++)
				{
					GoodsList goods = lstGoods.get(i);
					AttachGoodsObj obj = new AttachGoodsObj();
					obj.setGoodsCode(goods.getGoodsCode());
					obj.setGoodsId(goods.getGoodsId());
					obj.setGroupAttach(goods.getGroupAttach());
					obj.setType(goods.getType());
					obj.setPriceType(goods.getStrPriceType());
					obj.setQuantity(goods.getQuantity());
					obj.setBl(goods.getStr1());
					obj.setGoodsSale(null);
					obj.setQuantityAffect(goods.getQuantityAffect());
					obj.setPrice(goods.getPrice());
					obj.setPriceId(goods.getPriceId());
					obj.setPromotionId(goods.getPromotionId());
					obj.setPromotionTotal(goods.getPromotionTotal());
					obj.setVectorSerial(new ArrayList<>());
					lst.add(obj);
				}
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lst;
	}

	// valid thong tin mat hang
	public void validInputAdd(HttpServletRequest request, FSDGoods goodsSelected) throws Exception
	{
		String nomeMetodo = ".validInputAdd()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			mstrGoodCode = goodsSelected.getGoods().getGoodsCode();
			mstrQuantity = goodsSelected.getQuantity();
			mstrPrice = goodsSelected.getPrice().getPrice();
			mstrPriceID = goodsSelected.getPrice().getPriceId();

			mstrProm = "0";
			mstrPromCode = "";
			mstrPromID = "";
			if (goodsSelected.getPromotion() != null)
			{
				mstrPromID = StringUtil.nvl(goodsSelected.getPromotion().getPromotionId(), "");
				mstrProm = StringUtil.nvl(goodsSelected.getPromotion().getPromAmount(), "");
				String mstrPromotionType = StringUtil.nvl(goodsSelected.getPromotion().getPromType(), "");

				if (mstrProm.trim().equals(""))
				{
					mstrProm = "0";
				}
				mstrProm = String
						.valueOf(calculatePromotion(Integer.parseInt(mstrQuantity), Long.parseLong(mstrPrice), Long.parseLong(mstrProm), mstrPromotionType));
				mstrPromCode = goodsSelected.getPromotion().getPromProgramCode();
			}
			checkExistGood(mstrGoodCode, mstrPriceID, mstrPromID);

			mstrGoodID = goodsSelected.getGoods().getGoodsId();
			mstrVAT = goodsSelected.getVat();
			mstrUnit = goodsSelected.getGoods().getUnit();
			mstrCheckSerial = goodsSelected.getGoods().getCheckSerial();
			mstrMaxQuantity = goodsSelected.getGoods().getMaxQuantity();
			mstrGoodsGroupCode = "";

			MessagesResponse re = new MessagesResponse();
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_PRICE_TYPE_ID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", goodsSelected.getPrice().getPriceId());
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				mstrPriceTypeID = re.getCode();
			}

			mstrResourceCode = goodsSelected.getGoods().getResourceCode();
			mstrGoodsType = goodsSelected.getGoods().getType();

			checkQuantity(goodsSelected);
			if (mstrVAT.trim().equals(""))
			{
				mstrVAT = "0";
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	// Tinh thong tin khuyen mai
	public long calculatePromotion(int strQuantity, long strPrice, long strValue, String strType)
	{
		String nomeMetodo = ".calculatePromotion()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		long lngReturn = 0l;

		if (strType.equals("1"))
		{
			lngReturn = strQuantity * strPrice * strValue / 100;
		} else
			if (strType.equals("2"))
			{
				lngReturn = strQuantity * strValue;
			}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lngReturn;
	}

	// Kiem tra mat hang da ton tai chua
	public void checkExistGood(String pstrGoodCode, String pstrPriceID, String pstrPromotionID) throws Exception
	{

	}

	// Kiem tra so luong co hop le khong
	public void checkQuantity(FSDGoods goodsSelected) throws Exception
	{

		if (Integer.parseInt(mstrQuantity) <= 0)
		{
			throw new Exception("FSS-30012");
		} else
			if (goodsSelected.getGoods().getCheckQuantity().equals("1"))
			{
				if (Integer.parseInt(mstrQuantity) > Integer.parseInt(mstrMaxQuantity) - getUsageQuantity(goodsSelected, mstrGoodCode))
				{
					throw new Exception("FSS-30011___" + mstrGoodCode + ","
							+ String.valueOf(Integer.parseInt(mstrMaxQuantity) - getUsageQuantity(goodsSelected, mstrGoodCode)));
				}
			}
	}

	// Kiem tra so luong co hop le khong (voi mat hang di kem)
	public void checkQuantity(FSDGoods goodsSelected, String isCheckQuantity) throws Exception
	{

		if (Integer.parseInt(mstrQuantity) <= 0)
		{
			throw new Exception("FSS-30012");
		} else
			if (isCheckQuantity.equals("1"))
			{
				if (Integer.parseInt(mstrQuantity) > Integer.parseInt(mstrMaxQuantity) - getUsageQuantity(goodsSelected, mstrGoodCode))
				{
					throw new Exception("FSS-30011___" + mstrGoodCode + ","
							+ String.valueOf(Integer.parseInt(mstrMaxQuantity) - getUsageQuantity(goodsSelected, mstrGoodCode)));
				}
			}
	}

	// Lay so luong hop le cua mat hang
	public int getUsageQuantity(FSDGoods goodsSelected, String pstrGoodsCode)
	{
		int intUsageQuantity = 0;

		if (goodsSelected.getLstGoodsSaleTransaction() != null && goodsSelected.getLstGoodsSaleTransaction().size() > 0)
		{
			for (int i = 0; i < goodsSelected.getLstGoodsSaleTransaction().size(); i++)
			{
				GoodsSaleTransaction vtRow = goodsSelected.getLstGoodsSaleTransaction().get(i);

				String strGoodsCode = vtRow.getGoodsCode();
				String strQuantity = vtRow.getGoodsQuantity();

				if (strGoodsCode.equals(pstrGoodsCode))
				{
					intUsageQuantity += Integer.parseInt(strQuantity);
				}
			}
		}

		return intUsageQuantity;
	}

	// Tinh chiet khau
	public void calculate(HttpServletRequest request, FSDGoods goodsSelected) throws Exception
	{
		String nomeMetodo = ".calculate()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			MessagesResponse re = new MessagesResponse();
			ObjectForDoSomething requestObj = new ObjectForDoSomething();
			requestObj.setMstrGoodID(mstrGoodID);
			requestObj.setMstrQuantity(mstrQuantity);
			requestObj.setMstrPrice(mstrPrice);
			requestObj.setMstrPriceTypeID(mstrPriceTypeID);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_CALCULATE_DISCOUNT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", new Gson().toJson(requestObj));
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				List<ObjectForDoSomething> list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ObjectForDoSomething>>() {
				});
				ObjectForDoSomething discountObj = list.get(0);

				double dbl = Double.parseDouble(StringUtil.nvl(discountObj.getDiscountTotal(), "0"));
				mstrDiscount = String.valueOf(Math.round(dbl));
				mstrDiscountID = StringUtil.nvl(discountObj.getDiscountId(), "");
				calculateAdd(goodsSelected);
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	// Tinh tong tien sau khi them mat hang
	public void calculateAdd(FSDGoods goodsSelected)
	{
		DecimalFormat df = new DecimalFormat("#.###");
		double intmstrMoneyTax = Double.parseDouble(df.format(Double.parseDouble(mstrPrice) * Double.parseDouble(mstrQuantity)));
		double intmstrMoneyTaxSum = Double
				.parseDouble(df.format(intmstrMoneyTax * ((double) Double.parseDouble(mstrVAT) / 100) / ((double) Double.parseDouble(mstrVAT) / 100 + 1)));
		double intmstrMoneyNoTax = Double.parseDouble(df.format(intmstrMoneyTax - intmstrMoneyTaxSum));
		double intmstrMoneyDiscount = Double.parseDouble(df.format(Double.parseDouble(mstrDiscount)));
		double intmstrMoneyProm = Double.parseDouble(df.format(Double.parseDouble(mstrProm)));
		double intmstrMoneySum = Double.parseDouble(df.format(intmstrMoneyTax - intmstrMoneyDiscount)); // - intmstrMoneyProm;
		double intmstrMoney = 0;
		if (intmstrMoneySum % Long.parseLong(goodsSelected.getRate()) == 0)
		{
			intmstrMoney = Double.parseDouble(df.format(intmstrMoneySum / Double.parseDouble(goodsSelected.getRate())));
		} else
		{
			intmstrMoney = Double.parseDouble(df.format(intmstrMoneySum / Double.parseDouble(goodsSelected.getRate()) + 1));
		}

		DecimalFormat dfx = new DecimalFormat("#");
		df.setMaximumFractionDigits(0);
		mstrMoneyNoTax = dfx.format(intmstrMoneyNoTax);
		mstrMoneyTax = dfx.format(intmstrMoneyTax);
		mstrMoneyTaxSum = dfx.format(intmstrMoneyTaxSum);
		mstrMoneyDiscount = dfx.format(intmstrMoneyDiscount);
		mstrMoneyProm = dfx.format(intmstrMoneyProm);
		mstrMoney = dfx.format(intmstrMoney);
		mstrMoneySum = dfx.format(intmstrMoneySum);

		mlngSUMMoneyNoTax += intmstrMoneyNoTax;
		mlngSUMMoneyTax += intmstrMoneyTax;
		mlngSUMMoneyTaxSum += intmstrMoneyTaxSum;
		mlngSUMMoneyDiscount += intmstrMoneyDiscount;
		mlngSUMMoneyProm += intmstrMoneyProm;
		mlngSUMMoney += intmstrMoney;
		mlngSUMMoneySum += intmstrMoneySum;

		if (goodsSelected.getLstGoodsSaleTransaction() != null && goodsSelected.getLstGoodsSaleTransaction().size() > 0)
		{
			for (int i = 0; i < goodsSelected.getLstGoodsSaleTransaction().size(); i++)
			{
				mlngSUMMoneyNoTax += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyNoTax());
				mlngSUMMoneyTax += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyTax());
				mlngSUMMoneyTaxSum += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyTaxSum());
				mlngSUMMoneyDiscount += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyDiscount());
				mlngSUMMoneyProm += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyPromotion());
				mlngSUMMoney += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoney());
				mlngSUMMoneySum += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneySum1());
			}
		}
	}

	// Them mat hang vao danh sach
	public GoodsSaleTransaction addRowGood(GoodsSaleTransaction goodsSale) throws Exception
	{
		GoodsSaleTransaction vvctRow = new GoodsSaleTransaction();
		vvctRow.setRowId(StringUtil.nvl(new Date().getTime(), ""));
		vvctRow.setGoodsCode(mstrGoodCode);
		vvctRow.setGoodsQuantity(mstrQuantity);
		vvctRow.setGoodsPrice(mstrPrice);
		vvctRow.setGoodsDiscount(mstrDiscount);
		vvctRow.setGoodsPromotion(mstrProm);
		vvctRow.setGoodsUnit(mstrUnit);
		vvctRow.setMoneySum1(mstrMoneySum);
		vvctRow.setMoneyNoTax(mstrMoneyNoTax);
		vvctRow.setMoneyTax(mstrMoneyTax);
		vvctRow.setMoneyTaxSum(mstrMoneyTaxSum);
		vvctRow.setMoneyDiscount(mstrMoneyDiscount);
		vvctRow.setMoneyPromotion(mstrMoneyProm);
		vvctRow.setMoney(mstrMoney);
		vvctRow.setMoneySum2(mstrMoneySum);
		vvctRow.setPromotionCode(mstrPromCode);
		vvctRow.setVat(mstrVAT);
		GoodsVectorId vvctID = new GoodsVectorId();
		vvctID.setMstrGoodID(mstrGoodID);
		vvctID.setMstrPriceID(mstrPriceID);
		vvctID.setMstrDiscountID(mstrDiscountID);
		vvctID.setMstrPromID(mstrPromID);
		vvctRow.setVectorId(vvctID);
		vvctRow.setVectorSerial(new ArrayList<>());

		vvctRow.setCheckSerial(mstrCheckSerial);
		vvctRow.setAttachRequire("0");
		vvctRow.setAttachGoodsCode("");
		vvctRow.setAttachGoods(new ArrayList<>());
		vvctRow.setGoodsGroupCode(mstrGoodsGroupCode);
		vvctRow.setPriceTypeId(mstrPriceTypeID);
		vvctRow.setResourceCode(mstrResourceCode);
		vvctRow.setPrimaryGoodsCode("");
		vvctRow.setPrimaryPriceId("");
		vvctRow.setTransDetailId("");
		vvctRow.setGoodsType(mstrGoodsType);
		vvctRow.setPrimaryPromotionId("");

		if (goodsSale != null)
		{
			vvctRow.setVectorSerial(goodsSale.getVectorSerial());
			vvctRow.setPrimaryGoodsCode(goodsSale.getPrimaryGoodsCode());
			vvctRow.setPrimaryPriceId(goodsSale.getPrimaryPriceId());
			vvctRow.setPrimaryPromotionId(goodsSale.getPrimaryPromotionId());
		}

		return vvctRow;
	}

	// Khoi tao thong tin khi mo dialog serial
	public List<InputSerialModel> initASData(HttpServletRequest request, ObjectForDoSomething input) throws Exception
	{
		String nomeMetodo = ".initASData()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputSerialModel> list = new ArrayList<>();
		List<InputSerialModel> listTemp = new ArrayList<>();

		try
		{
			if ("FormSaleDealer".equals(input.getFormName()))
			{
				listTemp = callAPIgetSerial(request, input);
			} else
			{
				if (input.getTransType().equals("1") || input.getTransType().equals("2") || input.getTransType().equals("6"))
				{
					listTemp = callAPIgetSerial(request, input);
				} else
					if (input.getTransType().equals("3"))
					{
						listTemp = callAPIgetSerial(request, input);
					}
			}

			if (input.getFlag().equals("MODIFY"))
			{
				list = getRealSerial(listTemp, input.getMvctUsageSerial());
			} else
			{
				list = getRealSerial(listTemp, getUsageVectorSerial(input));
			}

		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return list;
	}

	// Lay danh sach serial hop le
	public List<InputSerialModel> getUsageVectorSerial(ObjectForDoSomething input) throws Exception
	{
		String nomeMetodo = ".getUsageVectorSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InputSerialModel> list = new ArrayList<>();

		try
		{
			String pstrGoodsCode = input.getGoodsCode();
			for (int i = 0; i < input.getLstTableGoods().size(); i++)
			{
				GoodsSaleTransaction rowListGoods = input.getLstTableGoods().get(i);
				String strSameGoodsCode = rowListGoods.getGoodsCode();

				if (pstrGoodsCode.equals(strSameGoodsCode))
				{
					List<InputSerialModel> vtSerialList = rowListGoods.getVectorSerial();
					for (int m = 0; m < vtSerialList.size(); m++)
					{
						InputSerialModel vtRow = vtSerialList.get(m);
						list.add(vtRow);
					}
				}
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return list;
	}

	// Lay danh sach serial tu DB
	public List<InputSerialModel> callAPIgetSerial(HttpServletRequest request, ObjectForDoSomething input) throws Exception
	{
		String nomeMetodo = ".callAPIgetSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InputSerialModel> list = new ArrayList<>();

		try
		{
			MessagesResponse re = new MessagesResponse();
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_SERIAL;
			String tmp = webService.apiServiceMethodPOST(request, url, "", new Gson().toJson(input));
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<InputSerialModel>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return list;
	}

	// Lay danh sach serial hop le
	public List<InputSerialModel> getRealSerial(List<InputSerialModel> vtFromSerial, List<InputSerialModel> pvctUsageSerial)
	{
		String nomeMetodo = ".getRealSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputSerialModel> vtRealSerial = new ArrayList<>();

		if (pvctUsageSerial == null || pvctUsageSerial.isEmpty())
		{
			return vtFromSerial;
		}

		for (int i = 0; i < vtFromSerial.size(); i++)
		{
			InputSerialModel vvctRow = vtFromSerial.get(i);
			String vstrSerial = StringUtil.nvl(vvctRow.getSerial(), "");
			boolean blnIsExisting = false;

			for (int j = 0; j < pvctUsageSerial.size(); j++)
			{
				InputSerialModel vvctRowJ = pvctUsageSerial.get(j);
				String vstrSerialJ = StringUtil.nvl(vvctRowJ.getSerial(), "");

				if (vstrSerial.equals(vstrSerialJ))
				{
					blnIsExisting = true;
					continue;
				}
			}

			if (!blnIsExisting)
			{
				vtRealSerial.add(vvctRow);
			}
		}
		return vtRealSerial;
	}

	// Them vao danh sach
	public FSDGoods deleteGoods(FSDGoods goodsSelected) throws Exception
	{
		String nomeMetodo = ".deleteGoods()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		FSDGoods fsdGoods = (FSDGoods) goodsSelected.clone();
		mlngSUMMoneyNoTax = 0.0D;
		mlngSUMMoneyTax = 0.0D;
		mlngSUMMoneyTaxSum = 0.0D;
		mlngSUMMoneyDiscount = 0.0D;
		mlngSUMMoneyProm = 0.0D;
		mlngSUMMoney = 0.0D;
		mlngSUMMoneySum = 0.0D;

		try
		{
			GoodsSaleTransaction vctRowListGood = goodsSelected.getGoodsSaleSelected();
			String vstrPrimaryGoodsCode = StringUtil.nvl(vctRowListGood.getPrimaryGoodsCode(), "");
			String vstrPrimaryPriceID = StringUtil.nvl(vctRowListGood.getPrimaryPriceId(), "");
			String vstrPrimaryPromotionID = StringUtil.nvl(vctRowListGood.getPrimaryPromotionId(), "");

			if (goodsSelected.getLstGoodsSaleTransaction() != null && goodsSelected.getLstGoodsSaleTransaction().size() > 0)
			{
				for (int i = 0; i < goodsSelected.getLstGoodsSaleTransaction().size(); i++)
				{
					mlngSUMMoneyNoTax += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyNoTax());
					mlngSUMMoneyTax += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyTax());
					mlngSUMMoneyTaxSum += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyTaxSum());
					mlngSUMMoneyDiscount += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyDiscount());
					mlngSUMMoneyProm += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneyPromotion());
					mlngSUMMoney += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoney());
					mlngSUMMoneySum += Double.parseDouble(goodsSelected.getLstGoodsSaleTransaction().get(i).getMoneySum1());
				}
			}

			calculateSub(goodsSelected);
			for (Iterator<GoodsSaleTransaction> iter = goodsSelected.getLstGoodsSaleTransaction().listIterator(); iter.hasNext();)
			{
				GoodsSaleTransaction a = iter.next();
				if (a.getRowId().equals(vctRowListGood.getRowId()))
				{
					iter.remove();
				}
			}
			deleteAttachGood(goodsSelected);
			deletePrimaryGood(goodsSelected, vstrPrimaryGoodsCode, vstrPrimaryPriceID, vstrPrimaryPromotionID);

			// HazyFlame
			DecimalFormat df = new DecimalFormat("#");
			df.setMaximumFractionDigits(0);
			fsdGoods.setMlngSUMMoney(df.format(mlngSUMMoney));
			fsdGoods.setMlngSUMMoneyDiscount(df.format(mlngSUMMoneyDiscount));
			fsdGoods.setMlngSUMMoneyNoTax(df.format(mlngSUMMoneyNoTax));
			fsdGoods.setMlngSUMMoneyProm(df.format(mlngSUMMoneyProm));
			fsdGoods.setMlngSUMMoneySum(df.format(mlngSUMMoneySum));
			fsdGoods.setMlngSUMMoneyTax(df.format(mlngSUMMoneyTax));
			fsdGoods.setMlngSUMMoneyTaxSum(df.format(mlngSUMMoneyTaxSum));
			fsdGoods.setMlngSUMMoneySumWithProm(df.format(mlngSUMMoneySum - mlngSUMMoneyProm));
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return fsdGoods;
	}

	// Xoa mat hang chinh
	public void deletePrimaryGood(FSDGoods goodsSelected, String pstrGoodsCode, String pstrPrimaryPriceID, String pstrPrimaryPromotionID) throws Exception
	{
		for (int i = 0; i < goodsSelected.getLstGoodsSaleTransaction().size(); i++)
		{
			GoodsSaleTransaction vvctRow = goodsSelected.getLstGoodsSaleTransaction().get(i);
			GoodsVectorId vtID = vvctRow.getVectorId();
			String vstrGoodsCode = StringUtil.nvl(vvctRow.getGoodsCode(), "");
			String vstrPrimaryPriceID = StringUtil.nvl(vtID.getMstrPriceID(), "");
			String vstrPromotionID = StringUtil.nvl(vtID.getMstrPromID().toString(), "");

			if (vstrGoodsCode.equals(pstrGoodsCode) && vstrPrimaryPriceID.equals(pstrPrimaryPriceID) && pstrPrimaryPromotionID.equals(vstrPromotionID))
			{
				goodsSelected.setGoodsSaleSelected(vvctRow);
				deleteGoods(goodsSelected);
			}
		}
	}

	// Xoa mat hang di kem
	private void deleteAttachGood(FSDGoods goodsSelected) throws Exception
	{
		try
		{
			GoodsSaleTransaction vctRowListGood = goodsSelected.getGoodsSaleSelected();
			List<AttachGoodsObj> pvtAttachGoods = vctRowListGood.getAttachGoods();
			for (int j = 0; j < pvtAttachGoods.size(); j++)
			{
				AttachGoodsObj vvctAttachRow = pvtAttachGoods.get(j);
				if (vvctAttachRow.getQuantity() == null || vvctAttachRow.getQuantity().equals(""))
				{
					continue;
				}

				String vstrGoodsCodeJ = vvctAttachRow.getGoodsCode().trim();
				String vstrGoodsPrice = vvctAttachRow.getPrice();

				for (int i = 0; i < goodsSelected.getLstGoodsSaleTransaction().size(); i++)
				{
					GoodsSaleTransaction vvctRow = goodsSelected.getLstGoodsSaleTransaction().get(i);
					String strGoodsCode = vvctRow.getGoodsCode();
					String strGoodsPrice = vvctRow.getGoodsPrice();

					if (strGoodsCode.equals(vstrGoodsCodeJ) && strGoodsPrice.equals(vstrGoodsPrice))
					{
						goodsSelected.setGoodsSaleSelected(vvctRow);
						deleteGoods(goodsSelected);
					}
				}
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}
	}

	// Tinh tong tien sau khi xoa mat hang
	private void calculateSub(FSDGoods goodsSelected)
	{

		GoodsSaleTransaction pvvctRow = goodsSelected.getGoodsSaleSelected();
		String vstrPrice = pvvctRow.getGoodsPrice();
		String vstrQuantity = pvvctRow.getGoodsQuantity();
		String vstrVAT = pvvctRow.getVat();
		String vstrDiscount = pvvctRow.getGoodsDiscount();
		String vstrProm = pvvctRow.getGoodsPromotion();

		DecimalFormat df = new DecimalFormat("#.###");
		double intmstrMoneyTax = Float.parseFloat(vstrPrice) * Float.parseFloat(vstrQuantity);
		double intmstrMoneyTaxSum = Double
				.parseDouble(df.format(intmstrMoneyTax * ((double) Float.parseFloat(vstrVAT) / 100) / ((double) Float.parseFloat(vstrVAT) / 100 + 1)));
		double intmstrMoneyNoTax = intmstrMoneyTax - intmstrMoneyTaxSum;
		double intmstrMoneyDiscount = Float.parseFloat(vstrDiscount);
		double intmstrMoneyProm = Float.parseFloat(vstrProm);
		double intmstrMoneySum = intmstrMoneyTax - intmstrMoneyDiscount; // - intmstrMoneyProm;
		double intmstrMoney = 0;
		if (intmstrMoneySum % Long.parseLong(goodsSelected.getRate()) == 0)
		{
			intmstrMoney = Math.round(intmstrMoneySum / Float.parseFloat(goodsSelected.getRate()));
		} else
		{
			intmstrMoney = Math.round(intmstrMoneySum / Float.parseFloat(goodsSelected.getRate()) + 1);
		}

		mlngSUMMoneyNoTax -= intmstrMoneyNoTax;
		mlngSUMMoneyTax -= intmstrMoneyTax;
		mlngSUMMoneyTaxSum -= intmstrMoneyTaxSum;
		mlngSUMMoneyDiscount -= intmstrMoneyDiscount;
		mlngSUMMoneyProm -= intmstrMoneyProm;
		mlngSUMMoney -= intmstrMoney;
		mlngSUMMoneySum -= intmstrMoneySum;
	}

	// Ghi thong tin giao dich
	public String writeInfo(HttpServletRequest request, FSDGoods input) throws Exception
	{
		String nomeMetodo = ".writeInfo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String mstrAccountType = "";

		try
		{
			validInputWriteInfo(input);
			mstrAccountType = checkShopCredit(request, input);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return mstrAccountType;
	}

	// valid thong tin ghi giao dich
	public void validInputWriteInfo(FSDGoods input) throws Exception
	{
		String nomeMetodo = ".validInputWriteInfo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			checkResourceCode(input);
			checkAttachGood(input);
			checkExistSerial(input);
			checkMoney(input);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	// valid thong tin ghi giao dich
	public void checkResourceCode(FSDGoods input) throws Exception
	{
		String nomeMetodo = ".checkResourceCode()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			String strCurrentResourceCode = "";
			if ("7".equals(input.getTransType().getCode()) || "1".equals(input.getTransType().getCode()) || "9".equals(input.getTransType().getCode()))
			{
				strCurrentResourceCode = "HT";
			} else
			{
				strCurrentResourceCode = "HM";
			}

			for (int i = 0; i < input.getLstGoodsSaleTransaction().size(); i++)
			{
				GoodsSaleTransaction vtRow = input.getLstGoodsSaleTransaction().get(i);
				String strResourceCode = vtRow.getResourceCode();
				if (!strCurrentResourceCode.equals(strResourceCode))
				{
					String strPrice = vtRow.getGoodsPrice();
					String strGoodsCode = vtRow.getGoodsCode();

					if (Double.parseDouble(strPrice) > 0)
					{
						throw new Exception("OOM-10005___" + strGoodsCode + "#" + strCurrentResourceCode);
					}
				}
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	// valid thong tin ghi giao dich
	public void checkAttachGood(FSDGoods input) throws Exception
	{
		String nomeMetodo = ".checkAttachGood()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodsSaleTransaction> vvctData = new ArrayList<>();
		GoodsSaleTransaction vvctRow = new GoodsSaleTransaction();
		List<AttachGoodsObj> vvctAttachGood = new ArrayList<>();
		List<GoodsSaleTransaction> vvctListGoodsData = new ArrayList<>();
		AttachGoodsObj vvctAttachGoodRow = new AttachGoodsObj();
		vvctData = input.getLstGoodsSaleTransaction();
		String vstrGroupAttach = "";
		String vstrGroupAttachTemp = "";

		String vstrGoodCode = "";
		String strGoodsQuantity = "0";

		List<AttachGoodsObj> vtCurrentAttachGroup = new ArrayList<>();
		int intState = 0;
		String vstrAttachRequire = "0";

		vvctListGoodsData = input.getLstGoodsSaleTransaction() == null ? new ArrayList<>() : input.getLstGoodsSaleTransaction();
		try
		{
			for (int i = 0; i < input.getLstGoodsSaleTransaction().size(); i++)
			{
				vvctRow = vvctData.get(i);
				vstrGoodCode = vvctRow.getGoodsCode();
				strGoodsQuantity = vvctRow.getGoodsQuantity();

				vstrAttachRequire = vvctRow.getAttachRequire();
				if (vstrAttachRequire.equals("0"))
				{
					continue;
				}

				vvctAttachGood = getRightAttachGoods(vvctRow.getAttachGoods());
				if (vvctAttachGood == null || vvctAttachGood.size() <= 0)
				{
					continue;
				}

				vtCurrentAttachGroup = new ArrayList<>();
				for (int j = 0; j < vvctAttachGood.size(); j++)
				{
					vvctAttachGoodRow = vvctAttachGood.get(j);
					vstrGroupAttach = vvctAttachGoodRow.getGroupAttach();

					if (vstrGroupAttach.equals(vstrGroupAttachTemp))
					{
						vtCurrentAttachGroup.add(vvctAttachGoodRow);
					} else
					{
						// Kiem tra attch goods
						intState = checkAttachGroupAndListGoods(vtCurrentAttachGroup, vvctListGoodsData, strGoodsQuantity, vstrGoodCode);
						if (intState != CommonConstant.STATE_PASS)
						{
							break;
						}

						vtCurrentAttachGroup = new ArrayList<>();
						vtCurrentAttachGroup.add(vvctAttachGoodRow);
					}

					vstrGroupAttachTemp = vstrGroupAttach;
				}

				intState = checkAttachGroupAndListGoods(vtCurrentAttachGroup, vvctListGoodsData, strGoodsQuantity, vstrGoodCode);

				if (intState == CommonConstant.STATE_FAIL) // Neu khong pass qua, thong bao loi
				{
					if (vtCurrentAttachGroup.size() == 1)
					{
						throw new Exception("FSS-30014___" + getMessage(vtCurrentAttachGroup) + "#" + vstrGoodCode);
					} else
					{
						throw new Exception("FSS-30019___" + getMessage(vtCurrentAttachGroup) + "#" + vstrGoodCode);
					}
				}
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	protected String getMessage(List<AttachGoodsObj> pvctGood)
	{
		AttachGoodsObj vvctRow = new AttachGoodsObj();
		String vstrMsg = "";
		for (int i = 0; i < pvctGood.size(); i++)
		{
			vvctRow = pvctGood.get(i);
			vstrMsg = vstrMsg + ";" + StringUtil.nvl(vvctRow.getGoodsCode(), "");
		}
		vstrMsg = vstrMsg.substring(1);
		return vstrMsg;
	}

	// Lay mat hang di kem, loai bo nhung ban ghi la nhom hang (chi de show)
	public List<AttachGoodsObj> getRightAttachGoods(List<AttachGoodsObj> pvtAttachGoods) throws CloneNotSupportedException
	{
		List<AttachGoodsObj> vtRightAttachGoods = new ArrayList<>();
		for (int i = 0; i < pvtAttachGoods.size(); i++)
		{
			AttachGoodsObj vtRow = (AttachGoodsObj) pvtAttachGoods.get(i).clone();
			if (!"".equals(StringUtil.nvl(vtRow.getQuantity(), "")))
			{
				vtRow.setGoodsCode(vtRow.getGoodsCode());
				vtRightAttachGoods.add(vtRow);
			}
		}
		return vtRightAttachGoods;
	}

	private int checkAttachGroupAndListGoods(List<AttachGoodsObj> vtAttachGroup, List<GoodsSaleTransaction> vtListGoods, String strGoodsQuantity,
			String strCurrentGoods) throws Exception
	{
		// Khong attach_group thi pass luon
		if (vtAttachGroup.isEmpty())
		{
			return CommonConstant.STATE_PASS;
		}

		for (int i = 0; i < vtAttachGroup.size(); i++)
		{
			AttachGoodsObj vtGoodAttachCode = vtAttachGroup.get(i);
			String vstrGoodAttachCode = vtGoodAttachCode.getGoodsCode();
			String vstrGoodAttachAmount = vtGoodAttachCode.getQuantity();

			for (int j = 0; j < vtListGoods.size(); j++)
			{
				GoodsSaleTransaction vtRowGoods = vtListGoods.get(j);
				String strRowGoodsCode = vtRowGoods.getGoodsCode();

				String strRowGoodsAmount = StringUtil.nvl(vtRowGoods.getGoodsQuantity(), "0");

				if (Double.parseDouble(strGoodsQuantity) * Double.parseDouble(vstrGoodAttachAmount) < 1)
				{
					return CommonConstant.STATE_PASS;
				}
				// Neu so luong khong khop
				int intTotalAttachGoodsInAGroup = getTotalAttachGoodsInAGroup(vtAttachGroup, vtListGoods);
				if (intTotalAttachGoodsInAGroup == 0)
				{
					return CommonConstant.STATE_FAIL;
				}

				if (Double.parseDouble(strGoodsQuantity) * Double.parseDouble(vstrGoodAttachAmount) > Double.parseDouble(vstrGoodAttachAmount)
						* Double.parseDouble(String.valueOf(intTotalAttachGoodsInAGroup)))
				{
					String strTotalQuantityAttach = String
							.valueOf(Math.round(Double.parseDouble(strGoodsQuantity) * Double.parseDouble(String.valueOf(vstrGoodAttachAmount))));
					throw new Exception("OOM-10001___" + getMessage(vtAttachGroup) + "#" + strTotalQuantityAttach + "#" + strCurrentGoods);
				}

				// Pass
				if ((vstrGoodAttachCode.equals(strRowGoodsCode)) && (Double.parseDouble(strGoodsQuantity)
						* Double.parseDouble(vstrGoodAttachAmount) <= Double.parseDouble(strGoodsQuantity) * Double.parseDouble(strRowGoodsAmount)))
				{
					return CommonConstant.STATE_PASS;
				}
			}
		}

		return CommonConstant.STATE_FAIL;
	}

	private int getTotalAttachGoodsInAGroup(List<AttachGoodsObj> vtAttachGroup, List<GoodsSaleTransaction> vtListGoods)
	{
		int mintAttachGoodsCount = 0;
		for (int i = 0; i < vtAttachGroup.size(); i++)
		{
			AttachGoodsObj vtGoodAttachCode = vtAttachGroup.get(i);
			String vstrGoodAttachCode = vtGoodAttachCode.getGoodsCode();

			for (int j = 0; j < vtListGoods.size(); j++)
			{
				GoodsSaleTransaction vtRow = vtListGoods.get(j);
				String strRowGoodsCode = vtRow.getGoodsCode();
				if (vstrGoodAttachCode.equals(strRowGoodsCode))
				{
					int intRowGoodsAmount = Integer.parseInt(StringUtil.nvl(vtRow.getGoodsQuantity(), "0"));
					mintAttachGoodsCount += intRowGoodsAmount;
				}
			}
		}

		return mintAttachGoodsCount;
	}

	public void checkExistSerial(FSDGoods input) throws Exception
	{
		String nomeMetodo = ".checkExistSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			List<GoodsSaleTransaction> vvctData = new ArrayList<>();
			GoodsSaleTransaction vvctRow = new GoodsSaleTransaction();
			vvctData = input.getLstGoodsSaleTransaction();
			List<InputSerialModel> vvctSerial = new ArrayList<>();
			for (int i = 0; i < input.getLstGoodsSaleTransaction().size(); i++)
			{
				vvctRow = vvctData.get(i);
				if (vvctRow.getCheckSerial().equals("1"))
				{
					vvctSerial = vvctRow.getVectorSerial();
					if (vvctSerial == null || vvctSerial.size() <= 0)
					{
						throw new Exception("FSS-30001___" + vvctRow.getGoodsCode());
					} else
						if (vvctSerial.size() != Integer.parseInt(vvctRow.getGoodsQuantity()))
						{
							throw new Exception("FSS-30000___");
						}
				}
			}
		} catch (NumberFormatException ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	public void checkMoney(FSDGoods input) throws Exception, NumberFormatException
	{
		String nomeMetodo = ".checkMoney()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Double mlngSUMMoneyProm = 0D;
		Double mlngSUMMoneySum = 0D;
		if (input.getLstGoodsSaleTransaction() != null && input.getLstGoodsSaleTransaction().size() > 0)
		{
			for (int i = 0; i < input.getLstGoodsSaleTransaction().size(); i++)
			{
				mlngSUMMoneyProm += Double.parseDouble(input.getLstGoodsSaleTransaction().get(i).getMoneyPromotion());
				mlngSUMMoneySum += Double.parseDouble(input.getLstGoodsSaleTransaction().get(i).getMoneySum1());
			}
		}

		if (mlngSUMMoneySum - mlngSUMMoneyProm < 0)
		{
			throw new Exception("FSS-30017___");
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	// Kiem tra han muc cua hang
	private String checkShopCredit(HttpServletRequest request, FSDGoods input) throws Exception
	{
		String nomeMetodo = ".checkShopCredit()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String mstrAccountType = "";

		try
		{
			MessagesResponse re = new MessagesResponse();
			ObjectForDoSomething obj = new ObjectForDoSomething();
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_CHECK_SHOP_CREDIT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", new Gson().toJson(input));

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				List<ObjectForDoSomething> list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ObjectForDoSomething>>() {
				});
				obj = list.get(0);

				int intReturn = obj.getIntReturn();
				String strAlertAmount = SMStringUtil.formatNumber(obj.getAlertAmount());
				String strLimitAmount = SMStringUtil.formatNumber(obj.getLimitAmount());
				String strBalance = SMStringUtil.formatNumber(obj.getBalance());
				mstrAccountType = obj.getStrAccountCode();
				String totalBalance = SMStringUtil.formatNumber(Double.parseDouble(obj.getBalance()) + Double.parseDouble(input.getMlngSUMMoneySum()));

				if (intReturn == 0)
				{
					throw new Exception("DebtInfo___" + mstrAccountType + "#" + strBalance + "#" + strAlertAmount + "#" + strLimitAmount);
				} else
					if (intReturn == 1)
					{
						throw new Exception("DebtInfo_AlertReached___" + mstrAccountType + "#" + strBalance + "#" + strAlertAmount + "#" + strLimitAmount + "#"
								+ totalBalance);
					} else
						if (intReturn == 2)
						{
							throw new Exception("DebtInfo_LimitedReached___" + mstrAccountType + "#" + strBalance + "#" + strAlertAmount + "#" + strLimitAmount
									+ "#" + totalBalance);
						}
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return mstrAccountType;
	}

	// ghi thong tin giao dich vao DB
	public String saveTransaction(HttpServletRequest request, FSDGoods input) throws Exception
	{
		String nomeMetodo = ".saveTransaction()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String strTransId = "";

		try
		{
			// Init request
			GoodsSaveTransaction requestObj = new GoodsSaveTransaction();
			initDDTP(input, requestObj);

			// writeDataToDatabase
			String ip = request.getRemoteAddr();
			if (ip.equalsIgnoreCase("0:0:0:0:0:0:0:1"))
			{
				InetAddress inetAddress = InetAddress.getLocalHost();
				String ipAddress = inetAddress.getHostAddress();
				ip = ipAddress;
			}
			requestObj.setSessionClientIp(ip);

			MessagesResponse re = new MessagesResponse();
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_WRITE_DATA_TO_DATABASE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", new Gson().toJson(requestObj));

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				strTransId = re.getCode();
			}

		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return strTransId;
	}

	public void initDDTP(FSDGoods fsdGoods, GoodsSaveTransaction request)
	{
		String nomeMetodo = ".initDDTP()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		mlngSUMMoneyNoTax = 0.0D;
		mlngSUMMoneyTax = 0.0D;
		mlngSUMMoneyTaxSum = 0.0D;
		mlngSUMMoneyDiscount = 0.0D;
		mlngSUMMoneyProm = 0.0D;
		mlngSUMMoney = 0.0D;
		mlngSUMMoneySum = 0.0D;

		if (fsdGoods.getLstGoodsSaleTransaction() != null && fsdGoods.getLstGoodsSaleTransaction().size() > 0)
		{
			for (int i = 0; i < fsdGoods.getLstGoodsSaleTransaction().size(); i++)
			{
				mlngSUMMoneyNoTax += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoneyNoTax());
				mlngSUMMoneyTax += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoneyTax());
				mlngSUMMoneyTaxSum += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoneyTaxSum());
				mlngSUMMoneyDiscount += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoneyDiscount());
				mlngSUMMoneyProm += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoneyPromotion());
				mlngSUMMoney += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoney());
				mlngSUMMoneySum += Double.parseDouble(fsdGoods.getLstGoodsSaleTransaction().get(i).getMoneySum1());
			}
		}

		request.setVectorGoods(fsdGoods.getLstGoodsSaleTransaction());
		request.setStockId(StringUtil.nvl(fsdGoods.getMstrStockStaffID(), ""));

		request.setShopId(StringUtil.nvl(fsdGoods.getMstrShopID(), ""));
		request.setStaffId(StringUtil.nvl(fsdGoods.getMstrStaffID(), ""));
		request.setPayMethod(fsdGoods.getPaymentMethod().getCode());
		request.setAmount(String.valueOf(mlngSUMMoneyNoTax));
		request.setAmountTax(String.valueOf(mlngSUMMoneyTax));
		request.setTax(String.valueOf(mlngSUMMoneyTaxSum));
		request.setOrgTotal(String.valueOf(mlngSUMMoney));
		request.setGrandTotal(String.valueOf(mlngSUMMoneySum));
		request.setDiscountAmount(String.valueOf(mlngSUMMoneyDiscount));
		request.setPromotionAmount(String.valueOf(mlngSUMMoneyProm));
		request.setCreateDatetime(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
		request.setStatus("2");
		request.setUserName(fsdGoods.getStaffCode());
		request.setCustAddress("");
		request.setTaxCode("");
		request.setBillAccount("");
		request.setCompany("");

		request.setDeliverer(fsdGoods.getAgent().getStockId());
		request.setCustType(fsdGoods.getTransType().getCode());
		request.setCustName(fsdGoods.getAgent().getCode());
		request.setAccount(fsdGoods.getMstrAccountType());
		request.setDelivererShopId(fsdGoods.getAgent().getShopStaffId());
		request.setReasonId(fsdGoods.getReasonId());
		request.setSoCode(fsdGoods.getReceiptCode());
		request.setCustId("");

		request.setCurrentStockId(fsdGoods.getMstrStockID());

		GoodsSaleTransaction temp = new GoodsSaleTransaction();
		float t = 0;
		for (int i = 0; i < fsdGoods.getLstGoodsSaleTransaction().size(); i++)
		{
			temp = fsdGoods.getLstGoodsSaleTransaction().get(i);
			if ((Float.parseFloat(temp.getVat())) > t)
			{
				t = Float.parseFloat(temp.getVat().toString());
			}
		}
		request.setTaxRate(Double.toString(t));
		request.setCreditNumber(fsdGoods.getLstCardNo());

		request.setHandsetICCIDList(new ArrayList<>());
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	// Lay danh sach serial cua mat hang di kem
	public List<InputSerialModel> getListSerialAttachGoods(HttpServletRequest request, ObjectForDoSomething input) throws Exception
	{
		String nomeMetodo = ".getListSerialAttachGoods()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InputSerialModel> list = new ArrayList<>();

		try
		{
			List<InputSerialModel> listTemp = callAPIgetSerial(request, input);
			list = getRealSerial(listTemp, getUsageVectorSerial(input));
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return list;
	}

	// Them mat hang di kem vao form
	public FSDGoods addAttachGoodsToForm(HttpServletRequest request, FSDGoods goodsSelected) throws Exception
	{
		String nomeMetodo = ".addAttachGoodsToForm()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		FSDGoods fsdGoods = (FSDGoods) goodsSelected.clone();
		List<GoodsSaleTransaction> lstGoodsSale = fsdGoods.getLstGoodsSaleTransaction();
		GoodsSaleTransaction goodsSaleTransaction = null;

		try
		{
			for (int j = 0; j < goodsSelected.getLstGoodsSaleAt().size(); j++)
			{
				GoodsSaleTransaction goodsSale = goodsSelected.getLstGoodsSaleAt().get(j);
				mlngSUMMoneyNoTax = 0.0D;
				mlngSUMMoneyTax = 0.0D;
				mlngSUMMoneyTaxSum = 0.0D;
				mlngSUMMoneyDiscount = 0.0D;
				mlngSUMMoneyProm = 0.0D;
				mlngSUMMoney = 0.0D;
				mlngSUMMoneySum = 0.0D;

				validAddAttachGoodsToForm(request, goodsSelected, goodsSale);
				calculate(request, goodsSelected);
				goodsSaleTransaction = addRowGood(goodsSale);
				
				for (int i = 0; i < goodsSelected.getLstAttachGoodsTemp().size(); i++)
				{
					for (int x = 0; x < lstGoodsSale.size(); x++)
					{
						if (goodsSelected.getLstAttachGoodsTemp().get(i) != null && lstGoodsSale.get(x) != null
								&& goodsSelected.getLstAttachGoodsTemp().get(i).getGoodsSale().getPrimaryGoodsCode().equals(lstGoodsSale.get(x).getGoodsCode()))
						{
							if (lstGoodsSale.get(x).getAttachGoods() != null && lstGoodsSale.get(x).getAttachGoods().size() > 0)
							{
								for (int k = 0; k < lstGoodsSale.get(x).getAttachGoods().size(); k++)
								{
									if (lstGoodsSale.get(x).getAttachGoods().get(k).getGoodsCode().equals(goodsSelected.getLstAttachGoodsTemp().get(i).getGoodsCode())) {
										lstGoodsSale.get(x).getAttachGoods().get(k).setQuantityAffect(goodsSelected.getLstAttachGoodsTemp().get(i).getQuantityAffect());
										lstGoodsSale.get(x).getAttachGoods().get(k).setPrice(goodsSelected.getLstAttachGoodsTemp().get(i).getPrice());
										lstGoodsSale.get(x).getAttachGoods().get(k).setPriceId(goodsSelected.getLstAttachGoodsTemp().get(i).getPriceId());
										lstGoodsSale.get(x).getAttachGoods().get(k).setPromotionId(goodsSelected.getLstAttachGoodsTemp().get(i).getPromotionId());
										lstGoodsSale.get(x).getAttachGoods().get(k).setPromotionTotal(goodsSelected.getLstAttachGoodsTemp().get(i).getPromotionTotal());
									}
								}
							}
						}
					}
				}

				mstrPriceTypeID = StringUtil.nvl(goodsSale.getPriceType(), "");
				if (!mstrPriceTypeID.equals("7"))
				{
					MessagesResponse message = new MessagesResponse();
					List<GoodsList> lst = new ArrayList<GoodsList>();
					List<GoodsList> result = new ArrayList<GoodsList>();
					GoodsList input = new GoodsList();
					input.setGoodsId(goodsSale.getGoodsId());
					input.setStrPriceType(goodsSale.getPriceId());

					String dataString = new Gson().toJson(input);
					String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ATTACH_GOODS;
					String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

					if (!"".equals(tmp))
					{
						ObjectMapper jsonMapper = new ObjectMapper();
						message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
					}
					if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
					{
						throw new Exception(message.getMessages());
					} else
					{
						ObjectMapper jsonMapper = new ObjectMapper();
						jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
						lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<GoodsList>>() {
						});
						String strAttachGroupTemp = "";
						for (int i = 0; i < lst.size(); i++)
						{
							if (i == 0 && "0".equals(lst.get(i).getGroupAttach()))
							{
								GoodsList good = new GoodsList();
								good.setGoodsCode("Nhóm hàng rỗng");
								good.setStr1("FALSE");
								result.add(good);
							} else
								if (!strAttachGroupTemp.equals(lst.get(i).getGroupAttach()))
								{
									GoodsList good = new GoodsList();
									good.setGoodsCode("Nhóm hàng " + lst.get(i).getGroupAttach());
									good.setStr1("FALSE");
									result.add(good);
								}
							result.add(lst.get(i));
							strAttachGroupTemp = lst.get(i).getGroupAttach();
						}
					}

					if (result.size() > 0)
					{
						goodsSaleTransaction.setAttachGoods(convertGoodsListToAttachGoods(result));
						goodsSaleTransaction.setAttachRequire("1");
						goodsSaleTransaction.setAttachGoodsCode(mstrGoodCode);
					}
				}

				if (lstGoodsSale == null)
				{
					lstGoodsSale = new ArrayList<>();
				}
				lstGoodsSale.add(goodsSaleTransaction);
			}
			fsdGoods.setLstGoodsSaleTransaction(lstGoodsSale);

			// HazyFlame
			DecimalFormat df = new DecimalFormat("#");
			df.setMaximumFractionDigits(0);
			fsdGoods.setMlngSUMMoney(df.format(mlngSUMMoney));
			fsdGoods.setMlngSUMMoneyDiscount(df.format(mlngSUMMoneyDiscount));
			fsdGoods.setMlngSUMMoneyNoTax(df.format(mlngSUMMoneyNoTax));
			fsdGoods.setMlngSUMMoneyProm(df.format(mlngSUMMoneyProm));
			fsdGoods.setMlngSUMMoneySum(df.format(mlngSUMMoneySum));
			fsdGoods.setMlngSUMMoneyTax(df.format(mlngSUMMoneyTax));
			fsdGoods.setMlngSUMMoneyTaxSum(df.format(mlngSUMMoneyTaxSum));
			fsdGoods.setMlngSUMMoneySumWithProm(df.format(mlngSUMMoneySum - mlngSUMMoneyProm));
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return fsdGoods;
	}

	// valid mat hang di kem
	public void validAddAttachGoodsToForm(HttpServletRequest request, FSDGoods goodsSelected, GoodsSaleTransaction goodsSale) throws Exception
	{
		String nomeMetodo = ".validAddAttachGoodsToForm()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			// valid
			mstrGoodCode = goodsSale.getGoodsCode();
			mstrQuantity = goodsSale.getGoodsQuantity();
			mstrPrice = goodsSale.getGoodsPrice();
			mstrPriceID = goodsSale.getPriceId();
			checkExistGood(mstrGoodCode, mstrPriceID, "");

			mstrGoodID = goodsSale.getGoodsId();
			mstrVAT = goodsSale.getVat();
			mstrUnit = goodsSale.getUnit();
			mstrCheckSerial = goodsSale.getCheckSerial();
			mstrMaxQuantity = goodsSale.getMaxQuantity();
			mstrGoodsGroupCode = goodsSale.getGoodsGroupCode();

			MessagesResponse re = new MessagesResponse();
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_SALE_DEALER_GET_PRICE_TYPE_ID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", mstrPriceID);
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				mstrPriceTypeID = re.getCode();
			}

			mstrResourceCode = goodsSale.getResourceCode();
			mstrGoodsType = goodsSale.getGoodsType();

			checkQuantity(goodsSelected, goodsSale.getCheckQuantity());
			if (mstrVAT.trim().equals(""))
			{
				mstrVAT = "0";
			}
			mstrProm = StringUtil.nvl(goodsSale.getGoodsPromotion(), "0");
			mstrPromCode = StringUtil.nvl(goodsSale.getPromotionCode(), "");
			mstrPromID = StringUtil.nvl(goodsSale.getPromotionId(), "");
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

}
