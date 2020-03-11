package vn.com.fis.controller.epos;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
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

import vn.com.fis.business.epos.CommonBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.AttachmentData;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StaffObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class CommonController
{
	private static final Logger LOG = LoggerFactory.getLogger(LoggerFactory.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	CommonBusiness commonBusiness;

	@Autowired
	private ResourceLoader resourceLoader;
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.DOWNLOAD_FILE_TEMPLATE, method = RequestMethod.POST)
	public ResponseEntity<?> downLoadFileTemplate(HttpServletRequest request, @RequestBody AttachmentData attachMentIn) throws Exception
	{
		String nomeMetodo = ".downLoadFileTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		response.set("Content-Type", "text/xml; charset=utf-8");
		File file = null;
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(attachMentIn);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.DOWNLOAD_FILE_TEMPLATE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			MessagesResponse message = null;
			MessagesResponse messageReturn = new MessagesResponse();
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if ("0".equalsIgnoreCase(message.getStatus()))
			{
				messageReturn.setMessages(message.getMessages());
				messageReturn.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
				return new ResponseEntity<MessagesResponse>(messageReturn, HttpStatus.OK);
			} else
			{
				file = resourceLoader.getResource("file:" + message.getMessages()).getFile();
			}

		} catch (Exception e)
		{
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		FileSystemResource fileSystemResource = new FileSystemResource(file);
		response.set("FileNameDownload", attachMentIn.getFileName());

		List<String> listOfAccessControl = new ArrayList<String>();
		listOfAccessControl.add("FileNameDownload");
		listOfAccessControl.add("FileType");

		response.setAccessControlExposeHeaders(listOfAccessControl);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<Resource>(fileSystemResource, response, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_VALUE_DOMAIN_BY_TYPE, method = RequestMethod.POST)
	public ResponseEntity<?> getListDomain(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getListDomain() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> lstDomain = new ArrayList<>();
		try
		{
			lstDomain = commonBusiness.getListApDomainBusiness(request, input);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(lstDomain, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_COMMON_LIST_REASON, method = RequestMethod.POST)
	public ResponseEntity<?> getListReason(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getListReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReasonObject> lstReason = new ArrayList<>();
		try
		{
			lstReason = commonBusiness.getCommonReasonListBusiness(request, input);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReasonObject>>(lstReason, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LIST_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> getListStaff(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getListStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> lstReason = new ArrayList<>();
		try
		{
			lstReason = commonBusiness.getListStaff(request, input);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(lstReason, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LIST_STAFF_STATUS, method = RequestMethod.POST)
	public ResponseEntity<?> getListStaffStatus(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getListStaffStatus() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> lstReason = new ArrayList<>();
		try
		{
			lstReason = commonBusiness.getListStaffStatus(request, input);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(lstReason, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SHOP_NAME, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getShopNameByStockId(HttpServletRequest request, @RequestBody String stockId)
	{
		String nomeMetodo = ".getShopNameByStockId() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String shopName = "";
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SHOP_NAME;
			shopName = webService.apiServiceMethodPOST(request, url, "", stockId);
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
		return new ResponseEntity<String>(shopName, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_LIST_SHOP)
	public String dialogListShop()
	{
		return "epos/common/dialogListShop";
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_LIST_STOCK)
	public String dialogListStock()
	{
		return "epos/common/dialogListStock";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_LIST_GOODS)
	public String dialogListGoods()
	{
		return "epos/common/dialogListGoods";
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_LIST_STAFF)
	public String dealogListStaff()
	{
		return "epos/common/dialogListStaff";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_AS_FROM_LIST_SERIAL)
	public String dialogASFromListSerial()
	{
		return "epos/common/dialogASFromListSerial";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_AS_TO_LIST_SERIAL)
	public String dialogASToListSerial()
	{
		return "epos/common/dialogASToListSerial";
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.NO_ACCESS_IMPORT)
	public String noAccessImport()
	{
		return "noAccessImport";
	}
}
