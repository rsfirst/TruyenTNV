package vn.com.fis.controller.epos;


import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.epos.FormStockExportForCustomerByBatchBusiness;
import vn.com.fis.model.epos.CheckDataUploadCustomerByBatEntity;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.UploadCustomerByBatEntity;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormStockExportForCustomerByBatchController {
	
	private static final Logger LOG = LoggerFactory.getLogger(AccountController.class);
	
	@Autowired
	private Environment ev;
	
	@Autowired
	WebService webService;
	
	@Autowired
	FormStockExportForCustomerByBatchBusiness formStockExportForCustomerByBatchBusiness ;
	
	@RequestMapping(Constants.REQUEST_MAPPING.FormStockExportForCustomerByBatch_link)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORMSTOCKEXPORTFORCUSTOMERBYBATCH_LINK + "')")
	public String preOrderStatus() {
		return Constants.REQUEST_MAPPING.FormStockExportForCustomerByBatch_views;
	}
	
	@RequestMapping(value = { Constants.REQUEST_MAPPING.Upload_File }, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> UploadFile(MultipartHttpServletRequest request) throws IOException
	{
		String nomeMetodo = ".UploadFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<UploadCustomerByBatEntity> listSerian = new ArrayList<UploadCustomerByBatEntity>();
		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		InputStream fileInput = new ByteArrayInputStream(file.getBytes());
		try
		{
			listSerian = formStockExportForCustomerByBatchBusiness.UploadFile(fileInput);

		} catch (Exception ex)
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
		return new ResponseEntity<List<UploadCustomerByBatEntity>>(listSerian, HttpStatus.OK);
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.Check_Data_Upload_File, method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> checkDataUploadFile(HttpServletRequest request, @RequestBody CheckDataUploadCustomerByBatEntity input) {
		String nomeMetodo = ".checkDataUploadFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<UploadCustomerByBatEntity> list = new ArrayList<UploadCustomerByBatEntity>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.Check_Data_Upload_File;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
				throw new Exception(re.getMessages());
			} else {
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<UploadCustomerByBatEntity>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<UploadCustomerByBatEntity>>(list, HttpStatus.OK);
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.Insert_Data_Upload_File, method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> onInsert(HttpServletRequest request, @RequestBody CheckDataUploadCustomerByBatEntity input) {
		String nomeMetodo = ".onInsert() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<UploadCustomerByBatEntity> list = new ArrayList<UploadCustomerByBatEntity>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.Insert_Data_Upload_File;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
				throw new Exception(re.getMessages());
			} else {
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<UploadCustomerByBatEntity>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<UploadCustomerByBatEntity>>(list, HttpStatus.OK);
	}
}
