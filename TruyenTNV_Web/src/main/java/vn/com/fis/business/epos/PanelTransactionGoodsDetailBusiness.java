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
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.BlockList;
import vn.com.fis.model.epos.GoodQuantitiesList;
import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.TransactionGoodsDetailObject;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.CommonErrorcode;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@RestController
public class PanelTransactionGoodsDetailBusiness
{

	private static final Logger LOG = LoggerFactory.getLogger(PanelTransactionGoodsDetailBusiness.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public List<GoodTransactionsModel> onAction(HttpServletRequest request, TransactionGoodsDetailObject input) throws Exception
	{
		String nomeMetodo = ".onAction()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodTransactionsModel> goodTransList = input.getLstGoodsTransaction();
		try
		{
			validateInput(request, input);

			// Them tam thoi 1 mat hang vao bang danh muc hang
			if ("ADD".equals(input.getTypeAction()))
			{
				GoodTransactionsModel vGoodTransaction = new GoodTransactionsModel();
				vGoodTransaction.setLstTransSerial(input.getGoods().getLstTransactionSerial());
				vGoodTransaction.setLstBlockList(new ArrayList<BlockList>());
				vGoodTransaction.setGoodsId(input.getGoods().getGoodsId());
				vGoodTransaction.setGoodsCode(input.getGoods().getGoodsCode());
				vGoodTransaction.setName(input.getGoods().getName());
				vGoodTransaction.setStateId(input.getState().getStateId());
				vGoodTransaction.setStateName(input.getState().getName());
				vGoodTransaction.setInternalStockId(input.getInternalStock().getCode());
				vGoodTransaction.setType(input.getType());
				vGoodTransaction.setResourceCode(input.getGoods().getResourceCode());
				vGoodTransaction.setUnitName(input.getGoods().getUnitName());
				vGoodTransaction.setQuantity(input.getGoodsQuantity());
				vGoodTransaction.setCheckSerial(input.getGoods().getCheckSerial());
				vGoodTransaction.setBeginQuantity(input.getGoodsQuantity());
				vGoodTransaction.setGoodsGroupId(input.getGoods().getGoodsGroupId());
				vGoodTransaction.setQuantityEffect(input.getGoods().getQuantityEffect());
				vGoodTransaction.setQuantityIssue(input.getGoods().getQuantityIssue());

				vGoodTransaction.setGoodsSelected(input.getGoods());
				vGoodTransaction.setStateSelected(input.getState());
				vGoodTransaction.setInternalStockSelected(input.getInternalStock());
				vGoodTransaction.setResourceSelected(input.getResourceSelected());

				if (input.isMblnInputToIssue())
				{
					vGoodTransaction.setQuantityIssue(input.getGoodsQuantity());
				} else
				{
					vGoodTransaction.setQuantityEffect(input.getGoodsQuantity());
				}

				vGoodTransaction.setNotes(input.getNotes());
				vGoodTransaction
						.setLstTransSerial(input.getGoods().getLstTransactionSerial() == null ? new ArrayList<>() : input.getGoods().getLstTransactionSerial());

				if (input.getBlExecute() == null || "".equals(input.getBlExecute()))
				{
					boolean isExist = false;
					if (goodTransList != null && goodTransList.size() > 0)
					{
						for (int i = 0; i < goodTransList.size(); i++)
						{
							if (vGoodTransaction.getGoodsId().equals(goodTransList.get(i).getGoodsId()))
							{
								isExist = true;
								break;
							}
						}
					}
					if (isExist)
					{
						throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputOther);
					} else
					{
						goodTransList.add(vGoodTransaction);
					}
				}
			} else
				if ("EDIT".equals(input.getTypeAction()))
				{
					if (input.getLstGoodsTransaction() != null && input.getLstGoodsTransaction().size() > 0)
					{
						goodTransList = new ArrayList<>();
						for (int i = 0; i < input.getLstGoodsTransaction().size(); i++)
						{
							if (input.getLstGoodsTransaction().get(i).getGoodsId().equals(input.getGoodTransSelected().getGoodsId())
									&& input.getLstGoodsTransaction().get(i).getStateId().equals(input.getGoodTransSelected().getStateId()))
							{
								GoodTransactionsModel vGoodTransaction = new GoodTransactionsModel();
								vGoodTransaction.setLstTransSerial(input.getGoods().getLstTransactionSerial());
								vGoodTransaction.setLstBlockList(new ArrayList<BlockList>());
								vGoodTransaction.setGoodsId(input.getGoods().getGoodsId());
								vGoodTransaction.setGoodsCode(input.getGoods().getGoodsCode());
								vGoodTransaction.setName(input.getGoods().getName());
								vGoodTransaction.setStateId(input.getState().getStateId());
								vGoodTransaction.setStateName(input.getState().getName());
								vGoodTransaction.setInternalStockId(input.getInternalStock().getCode());
								vGoodTransaction.setType(input.getType());
								vGoodTransaction.setResourceCode(input.getGoods().getResourceCode());
								vGoodTransaction.setUnitName(input.getGoods().getUnitName());
								vGoodTransaction.setQuantity(input.getGoodsQuantity());
								vGoodTransaction.setCheckSerial(input.getGoods().getCheckSerial());
								vGoodTransaction.setGoodsGroupId(input.getGoods().getGoodsGroupId());
								vGoodTransaction.setQuantityEffect(input.getGoods().getQuantityEffect());
								vGoodTransaction.setQuantityIssue(input.getGoods().getQuantityIssue());
								vGoodTransaction.setBeginQuantity(input.getGoodsQuantity());

								vGoodTransaction.setGoodsSelected(input.getGoods());
								vGoodTransaction.setStateSelected(input.getState());
								vGoodTransaction.setInternalStockSelected(input.getInternalStock());
								vGoodTransaction.setResourceSelected(input.getResourceSelected());

								if (input.isMblnInputToIssue())
								{
									vGoodTransaction.setQuantityIssue(input.getGoodsQuantity());
								} else
								{
									vGoodTransaction.setQuantityEffect(input.getGoodsQuantity());
								}

								vGoodTransaction.setNotes(input.getNotes());
								vGoodTransaction.setLstTransSerial(
										input.getGoods().getLstTransactionSerial() == null ? new ArrayList<>() : input.getGoods().getLstTransactionSerial());
								goodTransList.add(vGoodTransaction);
							} else
							{
								goodTransList.add(input.getLstGoodsTransaction().get(i));
							}
						}
					}
				}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return goodTransList;
	}

	public void validateInput(HttpServletRequest request, TransactionGoodsDetailObject input) throws Exception
	{
		String nomeMetodo = ".validateInput()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try
		{
			if ("ADD".equals(input.getTypeAction()) || "EDIT".equals(input.getTypeAction()))
			{
				if (input.getGoods() == null || input.getGoods().getGoodsId() == null || "".equals(input.getGoods().getGoodsId()))
				{
					throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputLovProduct);
				}

				if (input.getGoodsQuantity() == null || "".equals(input.getGoodsQuantity()))
				{
					throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputAmount);
				}
				if (Long.parseLong(input.getGoodsQuantity()) <= 0)
				{
					throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputAmountNoZero);
				}
				// Kiem tra so luong phai trung voi so block hoac serial
				validBlockOrSerial(input);

				// Kiem tra xem co du hang trong kho khong
				validQuantity(request, input);

				// So luong phai lon hon 0

			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	private void validBlockOrSerial(TransactionGoodsDetailObject input) throws Exception
	{
		String nomeMetodo = ".validBlockOrSerial()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Long quantity = Long.parseLong(input.getGoodsQuantity());
		if (CommonConstant.EXPORT_COMMAND.equals(input.getStrFromSerialClicked()))
		{
			if (CommonConstant.ISDN_TYPE.equals(input.getGoods().getGoodsType()))
			{
				List<BlockList> mBlocklist = new ArrayList<>();
				if (!(calculateSum(mBlocklist, true) + "").equals(quantity.toString()))
				{
					throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputBlock);
				}
			}
		} else
			if (CommonConstant.EXPORT_EXECUTE.equals(input.getStrFromSerialClicked()))
			{
				if (!CommonConstant.ISDN_TYPE.equals(input.getGoods().getGoodsType()) && "1".equals(input.getGoods().getCheckSerial()))
				{
					if (!(calculateSum(input.getGoods().getLstTransactionSerial()) + "").equals(quantity.toString()))
					{
						throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputSerial);
					}
				}
			} else
				if (isCheckSerialOnly(input.getStrFromSerialClicked(), input.isMblnIsFormStockImport()))
				{
					if ("1".equals(input.getGoods().getCheckSerial()))
					{
						if (!(calculateSum(input.getGoods().getLstTransactionSerial()) + "").equals(quantity.toString()))
						{
							throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.inputSerial);
						}
					}
				}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	private boolean isCheckSerialOnly(String strFromSerialClicked, boolean mblnIsFormStockImport)
	{
		return (strFromSerialClicked.equals(CommonConstant.EXPORT_STAFF) || strFromSerialClicked.equals(CommonConstant.IMPORT_STAFF)
				|| (strFromSerialClicked.equals(CommonConstant.IMPORT_COMMAND) && (!mblnIsFormStockImport))
				|| strFromSerialClicked.equals(CommonConstant.EXPORT_ABOVE_STOCK) || strFromSerialClicked.equals(CommonConstant.EXPORT_PARTNER)
				|| strFromSerialClicked.equals(CommonConstant.EXPORT_CUSTOMER) || strFromSerialClicked.equals(CommonConstant.IMPORT_PARTNER)
				|| strFromSerialClicked.equals(CommonConstant.IMPORT_CUSTOMER) || strFromSerialClicked.equals(CommonConstant.CONVERT_TO_DAMAGED_GOODS)
				|| strFromSerialClicked.equals(CommonConstant.NEW_WARRANTY_NO));
	}

	private int calculateSum(List<BlockList> lstBlockList, boolean isCheckBlockList)
	{
		int quantity = -1;
		return quantity;
	}

	private int calculateSum(List<TransactionSerialList> lstTransactionSerial)
	{
		String nomeMetodo = ".calculateSum()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		int quantity = -1;
		if (lstTransactionSerial != null && lstTransactionSerial.size() > 0)
		{
			quantity = 0;
			for (int i = 0; i < lstTransactionSerial.size(); i++)
			{
				TransactionSerialList transSerial = lstTransactionSerial.get(i);
				int iQuantity = Integer.parseInt((transSerial.getQuantity() == null || "".equals(transSerial.getQuantity())) ? "0" : transSerial.getQuantity());
				quantity += iQuantity;
			}
			if (quantity == 0)
			{
				quantity = lstTransactionSerial.size();
			}
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return quantity;
	}

	private void validQuantity(HttpServletRequest request, TransactionGoodsDetailObject input) throws Exception
	{
		String nomeMetodo = ".validQuantity()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		if (CommonConstant.EXPORT_COMMAND.equals(input.getStrFromSerialClicked()))
		{
			boolean err = validateQuantity(request, input, true);
			if (!err)
			{
				throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.notEnoughAmount);
			}
		} else
			if (input.getStrFromSerialClicked().equals(CommonConstant.EXPORT_STAFF) || input.getStrFromSerialClicked().equals(CommonConstant.IMPORT_STAFF)
					|| (input.getStrFromSerialClicked().equals(CommonConstant.IMPORT_COMMAND) && (!input.isMblnIsFormStockImport())
							|| input.getStrFromSerialClicked().equals(CommonConstant.EXPORT_ABOVE_STOCK)
							|| input.getStrFromSerialClicked().equals(CommonConstant.EXPORT_PARTNER)
							|| input.getStrFromSerialClicked().equals(CommonConstant.EXPORT_CUSTOMER)
							|| input.getStrFromSerialClicked().equals(CommonConstant.CONVERT_TO_DAMAGED_GOODS)
							|| input.getStrFromSerialClicked().equals(CommonConstant.NEW_WARRANTY_NO)))
			{
				boolean err = validateQuantity(request, input, true);
				if (!err)
				{
					throw new Exception(CommonErrorcode.PANEL_TRANSACTIONG_GOODS_SETAIL.notEnoughAmount);
				}
			}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	}

	private boolean validateQuantity(HttpServletRequest request, TransactionGoodsDetailObject input, boolean pblnCheckIssue) throws Exception
	{
		String nomeMetodo = ".validateQuantity()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		if (!"1".equals(input.getGoods().getCheckQuantity()))
		{
			return true;
		}

		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		List<GoodQuantitiesList> list = new ArrayList<GoodQuantitiesList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_GOODS_QUANTITY_BY_STATE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", gson.toJson(input));

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodQuantitiesList>>() {
				});
			}

			if (list != null && !list.isEmpty())
			{
				GoodQuantitiesList goodsQuantityCheck = list.get(0);
				int quantityEffect = (goodsQuantityCheck == null || "".equals(goodsQuantityCheck.getQuantityEffect())) ? 0
						: Integer.parseInt(goodsQuantityCheck.getQuantityEffect());
				int quantityIssue = (goodsQuantityCheck == null || "".equals(goodsQuantityCheck.getQuantityIssue())) ? 0
						: Integer.parseInt(goodsQuantityCheck.getQuantityIssue());
				if (pblnCheckIssue)
				{
					quantityIssue += Integer.parseInt(input.getGoodsQuantity());
					LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
					return ((quantityEffect - quantityIssue) >= 0);
				} else
				{
					quantityEffect -= Integer.parseInt(input.getGoodsQuantity());
					LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
					return ((quantityEffect >= 0) && ((quantityEffect - quantityIssue) >= 0));
				}
			} else
			{
				return false;
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}
	}

}
