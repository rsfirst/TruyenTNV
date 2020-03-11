package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReceiptExpenseModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormReceiptExpenseFromShopController
{

	private static final Logger LOG = LoggerFactory.getLogger(FormReceiptExpenseFromShopController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.URL_FORM_RECEIPT_EXPENSE_FROM_SHOP)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_RECEIPT_EXPENSE_FROM_SHOP + "')")
	public String formReceiptExpenseFromShop()
	{
		return "epos/sales/FormReceiptExpenseFromShop";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_LIST_RECEIPT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListReceiptExpenseFromShop(HttpServletRequest request, @RequestBody ReceiptExpenseModel searchInput) throws Exception
	{
		String nomeMetodo = ".getListReceiptExpenseFromShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ReceiptExpenseModel> listResult = new ArrayList<ReceiptExpenseModel>();
		try
		{
			Gson gson = new Gson();
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_LIST_RECEIPT;
			String dataString = gson.toJson(searchInput);
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
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listResult = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ReceiptExpenseModel>>() {
				});
			}

			if (!listResult.isEmpty())
			{
				for (ReceiptExpenseModel receiptExpenseModel : listResult)
				{
					double vdblRate = 0;
					vdblRate = Double.parseDouble(String.valueOf(receiptExpenseModel.getOrgAmount()))
							/ Double.parseDouble(String.valueOf(receiptExpenseModel.getAmount()));

					receiptExpenseModel.setRate("" + (double) Math.round(vdblRate * 100000) / 100000);
				}

			}
		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReceiptExpenseModel>>(listResult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_UPDATE_RECEIPT_INFO, method = RequestMethod.POST)
	public ResponseEntity<?> updateReceiptExpenseInfo(HttpServletRequest request, @RequestBody ReceiptExpenseModel warrantyInput)
	{
		String nomeMetodo = ".updateReceiptExpenseInfo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(warrantyInput);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_UPDATE_RECEIPT_INFO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_CREATE_RECEIPT_INFO, method = RequestMethod.POST)
	public ResponseEntity<?> createReceiptExpenseInfo(HttpServletRequest request, @RequestBody ReceiptExpenseModel warrantyInput)
	{
		String nomeMetodo = ".createReceiptExpenseInfo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(warrantyInput);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_CREATE_RECEIPT_INFO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_APPROVE_RECEIPT_INFO, method = RequestMethod.POST)
	public ResponseEntity<?> approveReceiptExpense(HttpServletRequest request, @RequestBody CommonValuesInput approveInput)
	{
		String nomeMetodo = ".approveReceiptExpense()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(approveInput);

			Double ammoutCompared = null;
			
			//check ammount if type = 2
			if("2".equalsIgnoreCase(approveInput.getType())){
				String urlAmmount = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_COMPARE_EXPENSE_WITH_CURRENT_AMOUNT;
				String tmpAmmount = webService.apiServiceMethodPOST(request, urlAmmount, "", dataString);
				if (!"".equals(tmpAmmount))
				{
					ObjectMapper jsonMapper = new ObjectMapper();
					ammoutCompared = jsonMapper.readValue(tmpAmmount.toString(), new TypeReference<Double>() {
					});
				}
				if(ammoutCompared != null) {
					if(ammoutCompared>0) {
						messagesResponse.setStatus(CommonConstant.STATUS_UN_SUCCESS);
						messagesResponse.setCode(Constants.SERVER_MESS.RECEIPT_EXPENSE_AMOUNT_GREATER_REZO);
						return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
					}
				}
			}
			
			//call approve request
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_APPROVE_RECEIPT_INFO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_DESTROY_RECEIPT_INFO, method = RequestMethod.POST)
	public ResponseEntity<?> destroyReceiptExpense(HttpServletRequest request, @RequestBody CommonValuesInput approveInput)
	{
		String nomeMetodo = ".destroyReceiptExpense()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(approveInput);

			//call approve request
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_DESTROY_RECEIPT_INFO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_RECEIPT_NO, method = RequestMethod.POST)
	public ResponseEntity<?> getReceipNo(HttpServletRequest request, @RequestBody ReceiptExpenseModel receiptInput)
	{
		String nomeMetodo = ".getReceipNo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		ReceiptExpenseModel receiptResult = new ReceiptExpenseModel();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(receiptInput);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_RECEIPT_NO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
				receiptResult.setReceiptNo(messagesResponse.getValueReturn());
			}

			String mstrVourcherType = receiptInput.getType();
			if("2".equalsIgnoreCase(mstrVourcherType))
			{
				url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_AMOUNT_ORIGINAL;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
				if (!"".equals(tmp))
				{
					ObjectMapper jsonMapper = new ObjectMapper();
					messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
					});
					String amount = messagesResponse.getValueReturn();
					receiptResult.setOrgAmount(amount);
					receiptResult.setAmount(amount);
				}
			}
			
		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		messagesResponse.setObjectReturn(receiptResult);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_PAYMENT_INFO, method = RequestMethod.POST)
	public ResponseEntity<?> getPaymentInfo(HttpServletRequest request, @RequestBody String receiptId)
	{
		String nomeMetodo = ".getPaymentInfo()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_PAYMENT_INFO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", receiptId);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		}
		catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}
	
}
