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

import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StaffObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

/**
 * The Class FormStockViewBusiness.
 */
@RestController
public class CommonBusiness
{
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(CommonBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	/** The web service. */
	@Autowired
	WebService webService;

	public List<ReasonObject> getCommonReasonListBusiness(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getCommonReasonListBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReasonObject> lstReason = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_COMMON_LIST_REASON;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonObject>>() {
				});
			}

		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReason;
	}
	
	
	public List<ApDomainModel> getListApDomainBusiness(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getListApDomainBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> lstReason = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_VALUE_DOMAIN_BY_TYPE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}

		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReason;
	}
	
	public ReasonObject getReasonByReasonId(List<ReasonObject> listReason, Long reasonId) {
		ReasonObject result = new ReasonObject();
		for(ReasonObject reasonElement  : listReason) {
			if(reasonElement!=null) {
				if(reasonId.equals(reasonElement.getReasonId())) {
					result = reasonElement;
					break;
				}
			}
		}
		
		return result;
	}
	
	public List<StaffObject> getListStaff(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getListStaff()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> lstReason = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_LIST_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}

		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReason;
	}

	public List<StaffObject> getListStaffShopIdAndType(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getListStaffShopIdAndType()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> lstReason = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_LIST_STAFF_WITH_TYPE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}

		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReason;
	}
	
	public List<StaffObject> getListStaffStatus(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getListStaffStatus()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> lstReason = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_LIST_STAFF_STATUS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}

		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return lstReason;
	}
}
