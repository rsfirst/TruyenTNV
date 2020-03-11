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
import vn.com.fis.model.epos.DataSearchFormEnqueryWar;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.ObjectFormEnqueryWar;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormEnqueryWarController {
	private static final Logger LOG = LoggerFactory.getLogger(StockExportToCenterController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	ExportToDealerBusiness exportToDealerBusiness;

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LINK_FORM_ENQUERY_WAR, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_GET_LINK_FORM_ENQUERY_WAR + "')")
	public String ExportToDealerAction()
	{
		return "epos/sales/FormEnqueryWar";
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_ON_SEARCH, method = RequestMethod.POST)
	public ResponseEntity<?> onSearch(HttpServletRequest request,@RequestBody DataSearchFormEnqueryWar input)
	{
		String nomeMetodo = ".onSearch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ObjectFormEnqueryWar> result= new ArrayList();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_ON_SEARCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectFormEnqueryWar>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ObjectFormEnqueryWar>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_GET_APDOMAIN, method = RequestMethod.POST)
	public ResponseEntity<?> getApDomain(HttpServletRequest request,@RequestBody String input)
	{
		String nomeMetodo = ".getApDomain() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ApDomainModel> result= new ArrayList();
		

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_GET_APDOMAIN;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

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
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_GET_ENQUERY_GOODSLIST, method = RequestMethod.POST)
	public ResponseEntity<?> getEnqueryGoods(HttpServletRequest request)
	{
		String nomeMetodo = ".getEnqueryGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodsList> result= new ArrayList();
		

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_GET_ENQUERY_GOODSLIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodsList>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodsList>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_SEARCH_WARRANTY_DETAIL, method = RequestMethod.POST)
	public ResponseEntity<?> onSearchWarrantyDetail(HttpServletRequest request, @RequestBody DataSearchFormEnqueryWar input)
	{
		String nomeMetodo = ".onSearchWarrantyDetail() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ObjectFormEnqueryWar result= new ObjectFormEnqueryWar();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_SEARCH_WARRANTY_DETAIL;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<ObjectFormEnqueryWar>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<ObjectFormEnqueryWar>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_GET_TEM_PLATE_VALUE, method = RequestMethod.POST)
	public ResponseEntity<?> getTemPlateValue(HttpServletRequest request,@RequestBody DataSearchFormEnqueryWar input)
	{
		String nomeMetodo = ".getTemPlateValue() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ObjectFormEnqueryWar> result= new ArrayList();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_GET_TEM_PLATE_VALUE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectFormEnqueryWar>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ObjectFormEnqueryWar>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_UPDATE_PRINT_OK, method = RequestMethod.POST)
	public ResponseEntity<?> updatePrintNumber(HttpServletRequest request,@RequestBody List<ObjectFormEnqueryWar>  input)
	{
		String nomeMetodo = ".updatePrintNumber() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String result= "";
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_WAR_UPDATE_PRINT_OK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}
	


}
