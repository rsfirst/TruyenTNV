package vn.com.fis.business.epos;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.ReportInput;
import vn.com.fis.report.epos.ReportRequestObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

/**
 * The Class FormStockViewBusiness.
 */
@RestController
public class ReportEngineBusiness
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ReportEngineBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	/** The web service. */
	@Autowired
	WebService webService;

	@Autowired
	private ResourceLoader resourceLoader;

	public ResponseEntity<?> exportSearchInfomationShopAndStaffFile(HttpServletRequest request, String reportInput) throws Exception
	{
		String nomeMetodo = ".exportSearchInfomationShopAndStaffFile()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ReportRequestObject responseFile = new ReportRequestObject();
		HttpHeaders headers = new HttpHeaders();
		File file = null;
		FileSystemResource fileSystemResource = null;
		try
		{
			// call api
			/* responseFile = exportFileCommon(reportInput); */

			CommonValuesInput inputReport = new CommonValuesInput();
			inputReport.setStaffName(reportInput);

			Gson gson = new Gson();
			String dataString = gson.toJson(inputReport);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				responseFile = jsonMapper.readValue(tmp.toString(), new TypeReference<ReportRequestObject>() {
				});
			}

			file = resourceLoader.getResource("file:" + responseFile.getDownloadLink()).getFile();
			fileSystemResource = new FileSystemResource(file);
			headers.setContentType(MediaType.parseMediaType(responseFile.getMimeType()));
			headers.set("MyDownloadFile", responseFile.getFileName());
			headers.set("FileType", responseFile.getFileType());

			List<String> listOfAccessControl = new ArrayList<String>();
			listOfAccessControl.add("MyDownloadFile");
			listOfAccessControl.add("FileType");

			headers.setAccessControlExposeHeaders(listOfAccessControl);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
	}

	public ResponseEntity<?> exportMultiFileCommon(HttpServletRequest request, String reportInput) throws Exception
	{
		String nomeMetodo = ".exportMultiFileCommon()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ReportRequestObject responseFile = new ReportRequestObject();
		HttpHeaders headers = new HttpHeaders();
		File file = null;
		FileSystemResource fileSystemResource = null;
		try
		{
			// call api
			/* responseFile = exportFileCommon(reportInput); */

			CommonValuesInput inputReport = new CommonValuesInput();
			inputReport.setStaffName(reportInput);

			Gson gson = new Gson();
			String dataString = gson.toJson(inputReport);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_EXPORT_MULTI_FILE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				responseFile = jsonMapper.readValue(tmp.toString(), new TypeReference<ReportRequestObject>() {
				});
			}

			file = resourceLoader.getResource("file:" + responseFile.getDownloadLink()).getFile();
			fileSystemResource = new FileSystemResource(file);
			headers.setContentType(MediaType.parseMediaType(responseFile.getMimeType()));
			headers.set("MyDownloadFile", responseFile.getFileName());
			headers.set("FileType", responseFile.getFileType());

			List<String> listOfAccessControl = new ArrayList<String>();
			listOfAccessControl.add("MyDownloadFile");
			listOfAccessControl.add("FileType");

			headers.setAccessControlExposeHeaders(listOfAccessControl);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
	}

	public ResponseEntity<?> exportSearchInInputFromCenter(HttpServletRequest request, String reportInput) throws Exception
	{
		String nomeMetodo = ".exportSearchInInputFromCenter()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ReportRequestObject responseFile = new ReportRequestObject();
		HttpHeaders headers = new HttpHeaders();
		File file = null;
		FileSystemResource fileSystemResource = null;
		try
		{
			// call api
			/* responseFile = exportFileCommon(reportInput); */

			CommonValuesInput inputReport = new CommonValuesInput();
			inputReport.setStaffName(reportInput);

			Gson gson = new Gson();
			String dataString = gson.toJson(inputReport);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_EXPORT_SEARCH_InputFromCenter;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				responseFile = jsonMapper.readValue(tmp.toString(), new TypeReference<ReportRequestObject>() {
				});
			}

			file = resourceLoader.getResource("file:" + responseFile.getDownloadLink()).getFile();
			fileSystemResource = new FileSystemResource(file);
			headers.setContentType(MediaType.parseMediaType(responseFile.getMimeType()));
			headers.set("MyDownloadFile", responseFile.getFileName());
			headers.set("FileType", responseFile.getFileType());

			List<String> listOfAccessControl = new ArrayList<String>();
			listOfAccessControl.add("MyDownloadFile");
			listOfAccessControl.add("FileType");

			headers.setAccessControlExposeHeaders(listOfAccessControl);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
	}

	public ResponseEntity<?> exportFileFromDatasource(HttpServletRequest request, ReportInput reportInput, String apiCall) throws Exception
	{
		String nomeMetodo = ".exportFileFromDatasource()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ReportRequestObject responseFile = new ReportRequestObject();
		HttpHeaders headers = new HttpHeaders();
		File file = null;
		FileSystemResource fileSystemResource = null;
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(reportInput);
			String url = ev.getProperty("login.url") + apiCall;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				responseFile = jsonMapper.readValue(tmp.toString(), new TypeReference<ReportRequestObject>() {
				});
			}

			file = resourceLoader.getResource("file:" + responseFile.getDownloadLink()).getFile();
			fileSystemResource = new FileSystemResource(file);
			headers.setContentType(MediaType.parseMediaType(responseFile.getMimeType()));
			headers.set("MyDownloadFile", responseFile.getFileName());
			headers.set("FileType", responseFile.getFileType());

			List<String> listOfAccessControl = new ArrayList<String>();
			listOfAccessControl.add("MyDownloadFile");
			listOfAccessControl.add("FileType");

			headers.setAccessControlExposeHeaders(listOfAccessControl);
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
	}

}
