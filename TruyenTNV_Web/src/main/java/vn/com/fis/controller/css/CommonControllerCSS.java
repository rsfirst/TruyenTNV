package vn.com.fis.controller.css;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.mnpcm.AttachmentData;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.report.epos.ReportRequestObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "*")
public class CommonControllerCSS {
	@Autowired
	private ResourceLoader resourceLoader;
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Value("${upload.path}")
	private String FOLDER_IMANGE = "";

	@Value("${upload.path.template}")
	private String FOLDER_IMANGE_TEMPLATE = "";

	private static final Logger LOG = LoggerFactory.getLogger(CommonControllerCSS.class);

	@PostMapping(value = "/bs/downloadFile")
	public ResponseEntity<?> downLoadFile(HttpServletRequest request,@RequestBody AttachmentData attachMentIn) {
		String nomeMetodo = ".downLoadFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		response.set("Content-Type", "text/xml; charset=utf-8");
		File file = null;
		Gson gson = new Gson();
		try {

			String dataString = gson.toJson(attachMentIn);

			String url = ev.getProperty("login.url") + "/bs/downloadFile";
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			MessagesResponse message = null;
			MessagesResponse messageReturn = new MessagesResponse();
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (String.valueOf(CommonConstant.STATUS_DEFAULT).equalsIgnoreCase(message.getStatus())) {
				messageReturn.setMessages(message.getMessages());
				messageReturn.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
				return new ResponseEntity<MessagesResponse>(messageReturn, response, HttpStatus.EXPECTATION_FAILED);
			} else {
				file = resourceLoader.getResource("file:" + message.getMessages()).getFile();
			}

		} catch (Exception e) {
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, response, HttpStatus.EXPECTATION_FAILED);
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

	@PostMapping(value = "/bs/downLoadFileTemplate")
	public ResponseEntity<?> downLoadFileTemplate(HttpServletRequest request,
			@RequestBody AttachmentData attachMentIn) {
		String nomeMetodo = ".downLoadFileTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		response.set("Content-Type", "text/xml; charset=utf-8");
		File file = null;
		Gson gson = new Gson();
		try {

			String dataString = gson.toJson(attachMentIn);

			String url = ev.getProperty("login.url") + "/bs/downLoadFileTemplate";
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			MessagesResponse message = null;
			MessagesResponse messageReturn = new MessagesResponse();
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if ("0".equalsIgnoreCase(message.getStatus())) {
				messageReturn.setMessages(message.getMessages());
				messageReturn.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
				return new ResponseEntity<MessagesResponse>(messageReturn, HttpStatus.OK);
			} else {
				file = resourceLoader.getResource("file:" + message.getMessages()).getFile();
			}

		} catch (Exception e) {
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
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

	@PostMapping(value = "/bs/downLoadFileFromUrl")
	public ResponseEntity<?> downLoadFileFromUrl(@RequestBody AttachmentData attachMentIn) {
		String nomeMetodo = ".downLoadFileFromUrl() ";
		int fase = 0;
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		JMessage jMsg = new JMessage();

		LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + attachMentIn.toString());

		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		response.set("Content-Type", "text/xml; charset=utf-8");
		File file = null;
		try {
			// String fileLocation = FOLDER_IMANGE_TEMPLATE +Constants.SLASH +
			// attachMentIn.getFolder();
			String fileLocation = attachMentIn.getFolder();
			int lastSlash = fileLocation.lastIndexOf("/");
			String fileName = fileLocation.substring(lastSlash + 1, fileLocation.length());
			attachMentIn.setFileName(fileName);
			System.out.println("FileName = " + fileName);

			LOG.info(LOG.getName() + nomeMetodo + "LINK FILE DOWLOAD : " + fileLocation);

			List<AttachmentData> listAttachMentNPR = new ArrayList<AttachmentData>();
			listAttachMentNPR.add(attachMentIn);

			InputStream is;
			is = new URL(fileLocation).openStream();
			file = File.createTempFile(attachMentIn.getFileName(), ".tmp");
			file.deleteOnExit();
			FileOutputStream out = new FileOutputStream(file);
			IOUtils.copy(is, out);

		} catch (Exception e) {
			JMessage msg = new JMessage();
			msg.setCode(500);
			msg.setMessage("Lỗi trong quá trình download file");
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(msg, response, HttpStatus.EXPECTATION_FAILED);
		}

		FileSystemResource fileSystemResource = new FileSystemResource(file);
		response.set("FileNameDownload", attachMentIn.getFileName());

		List<String> listOfAccessControl = new ArrayList<String>();
		listOfAccessControl.add("FileNameDownload");
		listOfAccessControl.add("FileType");

		response.setAccessControlExposeHeaders(listOfAccessControl);
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		return new ResponseEntity<Resource>(fileSystemResource, response, HttpStatus.OK);

	}

}
