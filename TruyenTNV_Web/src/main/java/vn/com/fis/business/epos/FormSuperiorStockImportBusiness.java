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

import vn.com.fis.model.epos.CommonStockTransSearch;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockTransDetailObject;
import vn.com.fis.model.epos.StockTransactionModel;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

/**
 * The Class FormStockViewBusiness.
 */
@RestController
public class FormSuperiorStockImportBusiness
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(FormSuperiorStockImportBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	/** The web service. */
	@Autowired
	WebService webService;

	/** The common business. */
	@Autowired
	CommonBusiness commonBusiness;

	/**
	 * Lay danh sach phieu
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the stock tree service business
	 * @throws Exception
	 *             the exception
	 */
	public List<StockTransactionModel> getStockTransExecBusiness(HttpServletRequest request, CommonStockTransSearch input) throws Exception
	{
		String nomeMetodo = ".getStockTransExecBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockTransactionModel> lstStockTransaction = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUPERIOR_STOCK_IMPORT_LIST_STOCK_TRANSACTIONS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstStockTransaction = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockTransactionModel>>() {
				});
			}

			CommonValuesInput inputReason = new CommonValuesInput();
			inputReason.setStatus(CommonConstant.STATUS_ACTIVE);
			inputReason.setType("6");
			List<ReasonObject> listReason = commonBusiness.getCommonReasonListBusiness(request, inputReason);
			// set reason id
			for (StockTransactionModel stockElement : lstStockTransaction)
			{
				ReasonObject reasonObj = commonBusiness.getReasonByReasonId(listReason, Long.valueOf(stockElement.getReasonId()));
				LOG.info("reason 1190: " + reasonObj.getName() + " : " + reasonObj.getReasonId());
				stockElement.setReasonStr(reasonObj.getName());
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstStockTransaction;
	}

	/**
	 * Lay danh sach stock trans theo transid
	 *
	 * @param request the request
	 * @param input the input
	 * @return the stock trans detail by stock trans id
	 * @throws Exception the exception
	 */
	public List<StockTransDetailObject> getStockTransDetailByStockTransId(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getStockTransDetailByStockTransId()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockTransDetailObject> lstStockTransaction = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUPERIOR_STOCK_IMPORT_STOCK_TRANS_DETAIL;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstStockTransaction = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockTransDetailObject>>() {
				});
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstStockTransaction;
	}
	
	/**
	 * Lay list serial theo good
	 *
	 * @param request the request
	 * @param input the input
	 * @return the list serial intransaction
	 * @throws Exception the exception
	 */
	public List<TransactionSerialList> getListSerialIntransaction(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getListSerialIntransaction()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> lstStockTransaction = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUPERIOR_STOCK_GET_LIST_SERIAL_IN_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstStockTransaction = jsonMapper.readValue(tmp.toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstStockTransaction;
	}
	
	/**
	 * Import transaction good
	 *
	 * @param request the request
	 * @param input the input
	 * @return the list
	 * @throws Exception the exception
	 */
	public MessagesResponse importSuperiorTransaction(HttpServletRequest request, StockTransactionModel input) throws Exception
	{
		String nomeMetodo = ".importSuperiorTransaction()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUPERIOR_STOCK_IMPORT_SUPERIOR_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return messagesResponse;
	}
	
}
