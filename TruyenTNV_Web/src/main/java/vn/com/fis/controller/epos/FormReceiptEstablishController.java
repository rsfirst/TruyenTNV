package vn.com.fis.controller.epos;

import java.net.InetAddress;
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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.InputEstablishEntity;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjCreateInvoice;
import vn.com.fis.model.epos.ReceiptEstablishObjectSearch;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormReceiptEstablishController {

	private static final Logger LOG = LoggerFactory.getLogger(FormStockTransEnqueryController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_LINK)
	public String FormStockTransEnquery()
	{
		return Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_VIEW;
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_GET_INVOICE_TYPE, method = RequestMethod.POST)
	public ResponseEntity<?> getInvoiceType(HttpServletRequest request)
	{
		String nomeMetodo = ".getInvoiceType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_GET_INVOICE_TYPE;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
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
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_GET_PAYMENT_METHOD, method = RequestMethod.POST)
	public ResponseEntity<?> getPaymentMethod(HttpServletRequest request)
	{
		String nomeMetodo = ".getInvoiceType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_GET_PAYMENT_METHOD;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
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
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_SEARCH_INVOICE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> searchInvoice(HttpServletRequest request, @RequestBody ReceiptEstablishObjectSearch input)
	{
		String nomeMetodo = ".searchInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<InputEstablishEntity> list = new ArrayList<InputEstablishEntity>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_SEARCH_INVOICE;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<InputEstablishEntity>>() {
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
		return new ResponseEntity<List<InputEstablishEntity>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_ENQUERY_INVOICE_BILL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> enqueryInvoiceBill(HttpServletRequest request, @RequestBody ReceiptEstablishObjectSearch input)
	{
		String nomeMetodo = ".enqueryInvoiceBill()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<InputEstablishEntity> list = new ArrayList<InputEstablishEntity>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_ESTABLISH_ENQUERY_INVOICE_BILL;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<InputEstablishEntity>>() {
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
		return new ResponseEntity<List<InputEstablishEntity>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_RECEIPT_CREATE_INVOICE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> destroyTransaction(HttpServletRequest request, @RequestBody ObjCreateInvoice input)
	{
		String nomeMetodo = ".createInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String result = "";
		Gson gson = new Gson();
		try
		{
			String ip = request.getRemoteAddr();
			if (ip.equalsIgnoreCase("0:0:0:0:0:0:0:1")) {
			    InetAddress inetAddress = InetAddress.getLocalHost();
			    String ipAddress = inetAddress.getHostAddress();
			    ip = ipAddress;
			}
			input.setStrPC(ip);
			
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_RECEIPT_CREATE_INVOICE;
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
				result = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}


}
