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

import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormStockImportFromCustomerController {
	private static final Logger LOG = LoggerFactory.getLogger(FormStockImportFromCustomerController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	

	
	@RequestMapping(Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_CUSTOMER)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_STOCK_IMPORT_FROM_CUSTOMER + "')")
	public String formStockImportFromCustomer()
	{
		return Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_CUSTOMER_LINK;
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SOLD_ALL_SERIAL_SINGLE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllStockInShopSerialSingle(HttpServletRequest request, @RequestBody TransactionSerialList input)
	{
		String nomeMetodo = ".getAllStockInShopSerialSingle() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STOCK_SOLD_ALL_SERIAL_SINGLE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_ALL_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllGoods(HttpServletRequest request)
	{
		String nomeMetodo = ".getAllGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<GoodsList> list = new ArrayList<GoodsList>();
		Gson gson = new Gson();
		try
		{
			
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ALL_GOODS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodsList>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodsList>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.CREATE_CUSTOMER_TRANS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createCustomerTrans(HttpServletRequest request, @RequestBody StockTransObject input)
	{
		String nomeMetodo = ".createCustomerTrans() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String strID = "";
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CREATE_CUSTOMER_TRANS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

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
				strID = jsonMapper.readValue(re.getMessages(), new TypeReference<String>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(strID, HttpStatus.OK);
	}
}
