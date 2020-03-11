package vn.com.fis.controller.epos;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.com.fis.business.epos.ReportEngineBusiness;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;

@CrossOrigin(origins = "*")
@RestController
public class ReportEngineController
{

	private static final Logger LOG = LoggerFactory.getLogger(ReportEngineController.class);

	@Autowired
	ReportEngineBusiness reportEngineBusiness;

	@RequestMapping(value = { Constants.REQUEST_MAPPING.ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE }, method = RequestMethod.GET)
	public ResponseEntity<?> exportSearchInfomationShopAndStaffFile(HttpServletRequest request, @RequestParam(value = "reportInput") String reportInput)
	{
		String nomeMetodo = ".exportSearchInfomationShopAndStaffFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try
		{
			response = reportEngineBusiness.exportSearchInfomationShopAndStaffFile(request, reportInput);
		} catch (Exception e)
		{
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
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
		return response;
	}

	@RequestMapping(value = { Constants.REQUEST_MAPPING.ACTION_EXPORT_MULTI_FILE }, method = RequestMethod.GET)
	public ResponseEntity<?> exportMultiFileCommon(HttpServletRequest request, @RequestParam(value = "reportInput") String reportInput)
	{
		String nomeMetodo = ".exportMultiFileCommon() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try
		{
			response = reportEngineBusiness.exportMultiFileCommon(request, reportInput);
		} catch (Exception e)
		{
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
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
		return response;
	}

	@RequestMapping(value = { Constants.REQUEST_MAPPING.ACTION_EXPORT_SEARCH_InputFromCenter }, method = RequestMethod.GET)
	public ResponseEntity<?> exportSearchInInputFromCenter(HttpServletRequest request, @RequestParam(value = "reportInput") String reportInput)
	{
		String nomeMetodo = ".exportSearchInInputFromCenter() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try
		{
			response = reportEngineBusiness.exportSearchInInputFromCenter(request, reportInput);
		} catch (Exception e)
		{
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

}
