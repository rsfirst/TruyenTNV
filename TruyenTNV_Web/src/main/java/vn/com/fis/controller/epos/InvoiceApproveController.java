package vn.com.fis.controller.epos;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
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

import vn.com.fis.business.epos.ExportToDealerBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.DataSearchInVoiceApprove;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectInvoiceApproveModel;
import vn.com.fis.model.epos.ObjectSearch;
import vn.com.fis.model.epos.ShopObject;
import vn.com.fis.model.epos.StaffObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class InvoiceApproveController {
	private static final Logger LOG = LoggerFactory.getLogger(StockExportToCenterController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	ExportToDealerBusiness exportToDealerBusiness;

	@RequestMapping(value = Constants.REQUEST_MAPPING.IN_VOICE_APPROVE, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_IN_VOICE_APPROVE + "')")
	public String ExportToDealerAction()
	{
		return "epos/sales/invoiceApprove";
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_SHOP, method = RequestMethod.POST)
	public ResponseEntity<?> getShop(HttpServletRequest request,@RequestBody ObjectSearch input)
	{
		String nomeMetodo = ".getShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ShopObject> result= new ArrayList();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopObject>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ShopObject>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> getStaff(HttpServletRequest request,@RequestBody String input)
	{
		String nomeMetodo = ".getStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<StaffObject> result= new ArrayList();
		

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_INVOICE_STATUS, method = RequestMethod.POST)
	public ResponseEntity<?> getInvoiceStatus(HttpServletRequest request)
	{
		String nomeMetodo = ".getInvoiceStatus() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ApDomainModel> result= new ArrayList();
		

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_INVOICE_STATUS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_TYPE_TRANSACTION, method = RequestMethod.POST)
	public ResponseEntity<?> getTypeTransaction(HttpServletRequest request)
	{
		String nomeMetodo = ".getTypeTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ApDomainModel> result= new ArrayList();
		

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_TYPE_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_PAY_METHOD, method = RequestMethod.POST)
	public ResponseEntity<?> getPayMethod(HttpServletRequest request)
	{
		String nomeMetodo = ".getPayMethod() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ApDomainModel> result= new ArrayList();
		

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_GET_PAY_METHOD;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_ENQUERY_INVOICE, method = RequestMethod.POST)
	public ResponseEntity<?> enqueryInvoice(HttpServletRequest request,@RequestBody DataSearchInVoiceApprove input)
	{
		String nomeMetodo = ".enqueryInvoice() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ObjectInvoiceApproveModel> result= new ArrayList();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_ENQUERY_INVOICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectInvoiceApproveModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ObjectInvoiceApproveModel>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_SUCCESS_APPROVE, method = RequestMethod.POST)
	public ResponseEntity<?> approveInvoice(HttpServletRequest request,@RequestBody DataSearchInVoiceApprove input)
	{
		String nomeMetodo = ".approveInvoice() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse result= new MessagesResponse();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_SUCCESS_APPROVE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(result, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_SUCCESS_DESTROY, method = RequestMethod.POST)
	public ResponseEntity<?> destroyInvoice(HttpServletRequest request,@RequestBody DataSearchInVoiceApprove input)
	{
		String nomeMetodo = ".approveInvoice() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse result= new MessagesResponse();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_SUCCESS_DESTROY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.INVOICE_APPROVE_FORM_INVOICE_APPROVE_PRINT, method = RequestMethod.POST)
	public ResponseEntity<?> formInvoiceApprovePrint(HttpServletRequest request,@RequestBody DataSearchInVoiceApprove input ) {
		String nomeMetodo = ".formInvoiceApprovePrint() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
	
		MessagesResponse result= new MessagesResponse();

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INVOICE_APPROVE_FORM_INVOICE_APPROVE_PRINT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
//				ObjectMapper jsonMapper = new ObjectMapper();
				result.setValueReturn(tmp);
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(result, HttpStatus.OK);
	}



}
