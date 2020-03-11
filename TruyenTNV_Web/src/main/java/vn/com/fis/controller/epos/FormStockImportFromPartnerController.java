package vn.com.fis.controller.epos;

import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileWriter;
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
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
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

import vn.com.fis.business.epos.StockImportFromPartnerBusiness;
import vn.com.fis.business.epos.StockViewInfoBusiness;
import vn.com.fis.model.epos.FileErrorObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormStockImportFromPartnerController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormStockImportFromPartnerController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;
	@Autowired
	private StockImportFromPartnerBusiness stockImportFromPartnerBusiness;

	/**
	 * LinkForm() in Controller
	 * 
	 * @param
	 * @return
	 * @throws @Author:
	 *             FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_LINK, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_STOCK_IMPORT_FROM_PARTNER_LINK + "')")
	public String formStockImportFromPartner()
	{
		return "epos/inventory/formStockImportFromPartner";
	}

	/**
	 * getReceiptNoSeq() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<String>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_GET_REECEIP_NO_SEQ, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReceiptNoSeq(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getReceiptNoSeq() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<String> lstReceipNoSeq = new ArrayList<>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_GET_REECEIP_NO_SEQ;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReceipNoSeq = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<String>>() {
				});
			}
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
		return new ResponseEntity<List<String>>(lstReceipNoSeq, HttpStatus.OK);
	}

	/**
	 * getListReason() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<ReasonObject>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_GET_LIST_REASON, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListReason(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getListReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ReasonObject> lstReasonReturn = new ArrayList<ReasonObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_GET_LIST_REASON;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReasonReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ReasonObject>>() {
				});
			}
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
		return new ResponseEntity<List<ReasonObject>>(lstReasonReturn, HttpStatus.OK);
	}

	/**
	 * getListSerianFromFile() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<TransactionSerialList>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = { Constants.REQUEST_MAPPING.ACTION_LIST_SERIAN_TEMPLATE }, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListSerianFromFile(MultipartHttpServletRequest request) throws IOException
	{
		String nomeMetodo = ".getListSerianFromFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + " Paramneter Input getListSerianFromFile: " + request.toString());

		List<TransactionSerialList> listSerian = new ArrayList<TransactionSerialList>();

		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		InputStream fileInput = new ByteArrayInputStream(file.getBytes());
		try
		{
			listSerian = stockImportFromPartnerBusiness.getListChangeCardFromTemplate(fileInput);
			// listSerian.sort(Comparator.comparing(TransactionSerialList::getFromSerial));

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
		return new ResponseEntity<List<TransactionSerialList>>(listSerian, HttpStatus.OK);
	}

	/**
	 * downLoadFileError() in Controller
	 * 
	 * @param request,errorMessage
	 * @return ResponseEntity<Resource>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.DOWNLOAD_FILE_ERROR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> downLoadFileError(HttpServletRequest request, @RequestBody FileErrorObj objError) throws Exception
	{
		String nomeMetodo = ".downLoadFileError() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		response.set("Content-Type", "text/xml; charset=utf-8");
		File file = null;
		String fileName = "";
		BufferedWriter output = null;
		try
		{
			fileName = objError.getFormName() + new java.text.SimpleDateFormat("yyyyMMddHHmmss").format(new java.util.Date());
			file = new File(ev.getProperty("DestinationPath") + fileName);
			file.createNewFile();
			output = new BufferedWriter(new FileWriter(file));
			output.write(objError.getMessage());
			output.flush();
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
		} finally
		{
			if (output != null)
			{
				output.close();
			}
		}

		FileSystemResource fileSystemResource = new FileSystemResource(file);
		response.set("FileNameDownload", fileName);

		List<String> listOfAccessControl = new ArrayList<String>();
		listOfAccessControl.add("FileNameDownload");
		listOfAccessControl.add("FileType");

		response.setAccessControlExposeHeaders(listOfAccessControl);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<Resource>(fileSystemResource, response, HttpStatus.OK);
	}

	/**
	 * onSave() in Controller
	 * 
	 * @param request,stockTrans
	 * @return ResponseEntity<MessagesResponse>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_ON_SAVE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSave(HttpServletRequest request, @RequestBody StockTransObject stockTrans)
	{
		String nomeMetodo = "FormStockImportFromPartnerController.onSave() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse message = new MessagesResponse();
		Gson gson = new Gson();
		String mstrStockTransID = "";
		try
		{
			String dataString = gson.toJson(stockTrans);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_PARTNER_ON_SAVE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				mstrStockTransID = message.getCode();
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
		return new ResponseEntity<String>(gson.toJson(mstrStockTransID), HttpStatus.OK);
	}
	
	@RequestMapping(value = { Constants.REQUEST_MAPPING.ACTION_LIST_SERIAL_TEMPLATE_WARRANTY }, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListSerianFromFileWarranty(MultipartHttpServletRequest request) throws IOException
	{
		String nomeMetodo = ".getListSerianFromFileWarranty() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + " Paramneter Input getListSerianFromFile: " + request.toString());

		List<TransactionSerialList> listSerian = new ArrayList<TransactionSerialList>();

		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		InputStream fileInput = new ByteArrayInputStream(file.getBytes());
		try
		{
			listSerian = stockImportFromPartnerBusiness.getListSerialTemplateWarranty(fileInput);
			// listSerian.sort(Comparator.comparing(TransactionSerialList::getFromSerial));

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
		return new ResponseEntity<List<TransactionSerialList>>(listSerian, HttpStatus.OK);
	}
}
