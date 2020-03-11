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
import vn.com.fis.model.epos.DataSearchFormLookUpTransaction;
import vn.com.fis.model.epos.ObjectFormLookUpTransaction;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller

public class FormLookUpTransactionController {
	private static final Logger LOG = LoggerFactory.getLogger(StockExportToCenterController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	ExportToDealerBusiness exportToDealerBusiness;

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LINK_FORM_LOOK_UP_TRANSACTION, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_GET_LINK_FORM_LOOK_UP_TRANSACTION + "')")
	public String ExportToDealerAction()
	{
		return "epos/sales/formLookUpTransaction";
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_LOOKUP_TRANSACTION_ON_SEARCH, method = RequestMethod.POST)
	public ResponseEntity<?> onSearch(HttpServletRequest request,@RequestBody DataSearchFormLookUpTransaction input)
	{
		String nomeMetodo = ".onSearch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ObjectFormLookUpTransaction> result= new ArrayList();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_LOOKUP_TRANSACTION_ON_SEARCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectFormLookUpTransaction>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ObjectFormLookUpTransaction>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_LOOKUP_TRANSACTION_ENQUERY_TRANSACTION_DETAIL, method = RequestMethod.POST)
	public ResponseEntity<?> enqueryTransactionDetail(HttpServletRequest request,@RequestBody String input)
	{
		String nomeMetodo = ".enqueryTransactionDetail() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ObjectFormLookUpTransaction> result= new ArrayList();
		

		try
		{
		
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_LOOKUP_TRANSACTION_ENQUERY_TRANSACTION_DETAIL;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectFormLookUpTransaction>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ObjectFormLookUpTransaction>>(result, HttpStatus.OK);
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_LOOKUP_TRANSACTION_GET_SERIAL_INFOR, method = RequestMethod.POST)
	public ResponseEntity<?> getSerialInfor(HttpServletRequest request,@RequestBody String input)
	{
		String nomeMetodo = ".getSerialInfor() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ObjectFormLookUpTransaction> result= new ArrayList();
		

		try
		{
		
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_LOOKUP_TRANSACTION_GET_SERIAL_INFOR;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectFormLookUpTransaction>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ObjectFormLookUpTransaction>>(result, HttpStatus.OK);
	}
}
