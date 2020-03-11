package vn.com.fis.business.epos;

import java.util.ArrayList;
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

import vn.com.fis.model.epos.GoodsMGMGModel;
import vn.com.fis.model.epos.GoodsSaleTransaction;
import vn.com.fis.model.epos.GoodsSaveTransaction;
import vn.com.fis.model.epos.InputSerialModel;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectForDoSomething;
import vn.com.fis.model.epos.ObjectFormSaleTransactionModel;
import vn.com.fis.model.epos.SerialPromotionModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@RestController
public class FormSaleTransactionBusiness {

	private static final Logger LOG = LoggerFactory.getLogger(FormSaleTransactionBusiness.class);
	
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	/*
	 * public GoodsList updateAttachGoods(GoodsList good) { String nomeMetodo =
	 * ".updateAttachGoods()"; LOG.info(LOG.getName() + nomeMetodo + " user: " +
	 * SecurityContextHolder.getContext().getAuthentication().getName() +
	 * CommonConstant.BEGIN_LOG); GoodsSaleTransaction goodSale = good.getGodSale();
	 * goodSale.setGoodsCode(good.getGoodsCode()); return good; }
	 */
	List<GoodsMGMGModel> mgmgGoodsSerial = null;
	List<String> mvtHandsetPromotionSerial = null;
	List<GoodsSaleTransaction> lstGoodsSaleTransaction = null;

	Double mlngSUMMoneyNoTax;
	Double mlngSUMMoneyTax;
	Double mlngSUMMoneyTaxSum;
	Double mlngSUMMoneyDiscount;
	Double mlngSUMMoneyProm;
	Double mlngSUMMoney;
	Double mlngSUMMoneySum;
	public List<GoodsMGMGModel> getMGMGGoodsSerial(ObjectForDoSomething input) throws Exception {
		String nomeMetodo = ".getMGMGGoodsSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		mgmgGoodsSerial=input.getMgmgGoodsSerialOld();
		if (checkOldGoodsList(input)) {
			return mgmgGoodsSerial;
		}
		mgmgGoodsSerial = new ArrayList<>();
		for (GoodsSaleTransaction goods : input.getLstGoodsSaleTransaction()) {
			if ("7".equals(goods.getPriceTypeId()) && "1".equals(goods.getCheckSerial())) {
				String strGoodsId = goods.getVectorId().getMstrGoodID();
				String strGoodsCode = goods.getGoodsCode();
				List<InputSerialModel> vctSerial = goods.getVectorSerial();
				for (InputSerialModel obj : vctSerial) {
					GoodsMGMGModel mgmg = new GoodsMGMGModel();
					mgmg.setStrGoodsId(strGoodsId);
					mgmg.setStrGoodsCode(strGoodsCode);
					mgmg.setStrSerial(obj.getSerial());
					mgmg.setStaffCode("");
					mgmg.setStaffName("");
					mgmg.setStaffIDCard("");
					mgmg.setStaffAddress("");
					mgmg.setCustCode("");
					mgmg.setCustName("");
					mgmg.setCustIDCard("");
					mgmg.setCustAddress("");
					mgmg.setMdnNum("");
					mgmg.setMdnProfile("");
					mgmg.setCompany("");
					mgmgGoodsSerial.add(mgmg);
				}
			}
		}
		return mgmgGoodsSerial;
	}

	public boolean checkOldGoodsList(ObjectForDoSomething input) {
		if (mgmgGoodsSerial == null || mgmgGoodsSerial.isEmpty()) {
			return false;
		}
		int intCountPromotion = 0;
		for (int i = 0; i < input.getLstGoodsSaleTransaction().size(); i++) {
			GoodsSaleTransaction goods = input.getLstGoodsSaleTransaction().get(i);
			if ("7".equals(goods.getPriceTypeId()) && "1".equals(goods.getCheckSerial())) {
				intCountPromotion += goods.getVectorSerial().size();
			}
		}
		if (mgmgGoodsSerial.size() != intCountPromotion) {
			return false;
		}
		for (int i = 0; i < input.getLstGoodsSaleTransaction().size(); i++) {
			GoodsSaleTransaction goods = input.getLstGoodsSaleTransaction().get(i);
			if ("7".equals(goods.getPriceTypeId()) && "1".equals(goods.getCheckSerial())) {
				String strGoodsId = goods.getVectorId().getMstrGoodID();
				String strGoodsCode = goods.getGoodsCode();
				List<InputSerialModel> vctSerial = goods.getVectorSerial();
				for (InputSerialModel obj : vctSerial) {
					if (!equalOldList(strGoodsId, strGoodsCode, obj.getSerial())) {
						return false;
					}
				}
			}
		}
		return true;
	}

	public boolean equalOldList(String goodsId, String goodsCode, String serial) {
		for (GoodsMGMGModel goods : mgmgGoodsSerial) {
			if (goodsId.equals(goods.getStrGoodsId()) && goodsCode.equals(goods.getStrGoodsCode())
					&& serial.equals(goods.getStrSerial())) {
				return true;
			}
		}
		return false;
	}

	public ObjectFormSaleTransactionModel addPromotionSerial(HttpServletRequest request,ObjectFormSaleTransactionModel input) throws Exception {
		String nomeMetodo = ".addPromotionSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ObjectFormSaleTransactionModel objReturn = new ObjectFormSaleTransactionModel();
		List<InputSerialModel> lstSerialSoldInput = input.getLstSoldSerial();
		List<SerialPromotionModel> lstSerialPromotion = input.getLstSerialPromotion();
		String strPriceType = input.getStrPriceType();
		List<InputSerialModel> lstSerialSoldOut = new ArrayList<InputSerialModel>();
		for(int i = 0; i < lstSerialSoldInput.size(); i++) {
			if(lstSerialPromotion.size() >= Integer.parseInt(input.getMintHandsetCount())) {
				objReturn.setMessage("vnm.dialogInputSerialPromotion.message.full.promotion");
				break;
			}
			SerialPromotionModel result = null;
			if(lstSerialPromotion.size() > 0) {
				for(int j = 0; j < lstSerialPromotion.size(); j++) {
					if(!lstSerialSoldInput.get(i).getSerial().equals(lstSerialPromotion.get(j).getSerial())) {
						result = getProfileFromNMS(request, lstSerialSoldInput.get(i).getSerial(), strPriceType);
					}
				}
			}else {
				result = getProfileFromNMS(request, lstSerialSoldInput.get(i).getSerial(), strPriceType);
			}
			if(result != null) {
				if(!"ADD".equals(input.getType())) {
					lstSerialSoldOut.add(lstSerialSoldInput.get(i));
				}
				lstSerialPromotion.add(result);
			}
			
		}
		objReturn.setLstSoldSerial(lstSerialSoldOut);
		objReturn.setLstSerialPromotion(lstSerialPromotion);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return objReturn;
	}
	
	public SerialPromotionModel getProfileFromNMS(HttpServletRequest request, String serial, String strPriceType) throws Exception{
		String nomeMetodo = ".getProfileFromNMS()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		SerialPromotionModel result = null;
		KeyValueObj obj = new KeyValueObj();
		obj.setCode(serial);
		obj.setName(strPriceType);
		MessagesResponse message = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(obj);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_PROFILE_FROM_NMS;
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
				result = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<SerialPromotionModel>() {
				});
				
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			throw ex;
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return result;
	}

	public GoodsSaveTransaction getMoney(ObjectForDoSomething input) throws Exception{
		String nomeMetodo = ".getMoney()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		GoodsSaveTransaction result = new GoodsSaveTransaction();
		List<GoodsSaleTransaction> lstGoodsSaleTransction = input.getLstGoodsSaleTransaction();
		mlngSUMMoneyNoTax = 0.0D;
		mlngSUMMoneyTax = 0.0D;
		mlngSUMMoneyTaxSum = 0.0D;
		mlngSUMMoneyDiscount = 0.0D;
		mlngSUMMoneyProm = 0.0D;
		mlngSUMMoney = 0.0D;
		mlngSUMMoneySum = 0.0D;
		if (lstGoodsSaleTransction != null && lstGoodsSaleTransction.size() > 0) {
			for(int i = 0; i < lstGoodsSaleTransction.size(); i++) {
				mlngSUMMoneyNoTax += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoneyNoTax());
				mlngSUMMoneyTax += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoneyTax());
				mlngSUMMoneyTaxSum += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoneyTaxSum());
				mlngSUMMoneyDiscount += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoneyDiscount());
				mlngSUMMoneyProm += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoneyPromotion());
				mlngSUMMoney += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoney());
				mlngSUMMoneySum += Double.parseDouble(lstGoodsSaleTransction.get(i).getMoneySum1());
			}
		}
		result.setAmount(String.valueOf(mlngSUMMoneyNoTax));
		result.setAmountTax(String.valueOf(mlngSUMMoneyTax));
		result.setTax(String.valueOf(mlngSUMMoneyTaxSum));
		result.setOrgTotal(String.valueOf(mlngSUMMoney));
		result.setGrandTotal(String.valueOf(mlngSUMMoneySum));
		result.setDiscountAmount(String.valueOf(mlngSUMMoneyDiscount));
		result.setPromotionAmount(String.valueOf(mlngSUMMoneyProm));
		
		return result;
	}
}
