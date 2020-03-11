package vn.com.fis.business.mnpcm;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import vn.com.fis.common.css.CommonUtil;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.AttachmentData;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.MNPRegistrationListMultipart;
import vn.com.fis.model.mnpcm.MNPRegistrationListTSMultipart;
import vn.com.fis.model.mnpcm.MnpChildrenInforType;
import vn.com.fis.model.mnpcm.MnpPreOrderTransType;
import vn.com.fis.model.mnpcm.MnpPreRequest;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.model.mnpcm.ProvisioningCustomerInfo;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;


@Controller
public class NPRBusiness {
    @Value("${upload.path}")
    private String FOLDER_IMANGE = "";

    private static final Logger LOG = LoggerFactory.getLogger(NPRBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> UploadFile(MultipartHttpServletRequest request) {
        String nomeMetodo = ".UploadFile() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        Iterator<String> itr = request.getFileNames();

        String documentType = request.getParameter("identityDocType");
        String documentNote = request.getParameter("identityDocNote");
        String attachMentIdClient = request.getParameter("attachMentIdClient");
        String fileNameInput = request.getParameter("fileNameInput");
        fase = 10;
        MultipartFile file = request.getFile(itr.next());

        String fileNameUnique = CommonUtils.buildFileNameAttachMent(documentType, attachMentIdClient, fileNameInput);
        fase = 20;
        String currentDate = CommonUtils.getDateToStringDDMMYYYY(new Date());
        fase = 30;

        String[] listDate = currentDate.split(Constants.SLASH);// splits the string based on whitespace \
        String dayFolder = "";
        String monthFolder = "";
        String yearFolder = "";

        if (listDate.length == 3) {
            dayFolder = listDate[0];
            monthFolder = listDate[1];
            yearFolder = listDate[2];
        }

        String folderSaveLocation = yearFolder + Constants.SLASH + monthFolder + "-" + yearFolder + Constants.SLASH + dayFolder + "-" + monthFolder + "-"
                + yearFolder;

        String dirTempStr = FOLDER_IMANGE + Constants.SLASH + folderSaveLocation;

        LOG.info(LOG.getName() + nomeMetodo + " Folder Upload File: " + dirTempStr);
        fase = 40;
        File dir = new File(dirTempStr);
        fase = 50;
        if (!dir.isDirectory()) {
            dir.mkdirs();
        }

        AttachmentData temp = new AttachmentData();
        if (dir.isDirectory()) {
            fase = 60;
            File serverFile = new File(dir, fileNameUnique);
            BufferedOutputStream stream = null;
            try {
                fase = 70;
                stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                stream.write(file.getBytes());
                stream.close();
                CommonUtil.checkLengthAndResize(serverFile.toString());
            } catch (Exception e) {
                JMessage msg = new JMessage();
                msg.setCode(500);
                msg.setMessage("Lỗi trong quá trình upload file");
                LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + e.getMessage(), e);
                LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                return new ResponseEntity<JMessage>(msg, response, HttpStatus.EXPECTATION_FAILED);
            } finally {
                if (stream != null) {
                    try {
                        stream.close();
                    } catch (IOException e) {
                        JMessage msg = new JMessage();
                        msg.setCode(500);
                        msg.setMessage("Lỗi trong quá trình upload file");
                        fase = 80;
                        LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + e.getMessage(), e);
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        return new ResponseEntity<JMessage>(msg, response, HttpStatus.EXPECTATION_FAILED);
                    }
                }
            }

            LOG.info(LOG.getName() + nomeMetodo + " File Name: " + fileNameUnique);
            temp.setFolder(folderSaveLocation + "/" + fileNameUnique);
            temp.setFileName(fileNameInput);

            temp.setNote(documentNote);
            temp.setAttachmentType(documentType);
            temp.setAttachMentIdClient(attachMentIdClient);
            fase = 90;
        }
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<AttachmentData>(temp, response, HttpStatus.OK);
    }

    public ResponseEntity<?> UploadFileImage(MultipartHttpServletRequest request) {
        String nomeMetodo = ".UploadFileImage() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        Iterator<String> itr = request.getFileNames();

        String documentType = request.getParameter("identityDocType");
        String documentNote = request.getParameter("identityDocNote");
        String attachMentIdClient = request.getParameter("attachMentIdClient");
        String fileNameInput = request.getParameter("fileNameInput");
        fase = 10;
        MultipartFile file = request.getFile(itr.next());

        String fileNameUnique = CommonUtils.buildFileNameAttachMent(documentType, attachMentIdClient, fileNameInput);
        fase = 20;
        String currentDate = CommonUtils.getDateToStringDDMMYYYY(new Date());
        fase = 30;

        String[] listDate = currentDate.split(Constants.SLASH);// splits the string based on whitespace \
        String dayFolder = "";
        String monthFolder = "";
        String yearFolder = "";

        if (listDate.length == 3) {
            dayFolder = listDate[0];
            monthFolder = listDate[1];
            yearFolder = listDate[2];
        }

        String folderSaveLocation = yearFolder + Constants.SLASH + monthFolder + "-" + yearFolder + Constants.SLASH + dayFolder + "-" + monthFolder + "-"
                + yearFolder;

        String dirTempStr = FOLDER_IMANGE + Constants.SLASH + folderSaveLocation;

        LOG.info(LOG.getName() + nomeMetodo + " Folder Upload File: " + dirTempStr);
        fase = 40;
        File dir = new File(dirTempStr);
        fase = 50;
        if (!dir.isDirectory()) {
            dir.mkdirs();
        }

        String fileName = file.getOriginalFilename();
        if (!CommonUtil.checkFileIsImage(file)) {
            LOG.info(LOG.getName() + nomeMetodo + "Check dịnh dạng file upload :" + fileName + " không hợp lệ");
            MessagesResponse mess = new MessagesResponse();
            mess.setCode(CommonConstant.FILE_IMAGE_CONTENT_ERROR);
            mess.setMessages(fileName);
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.EXPECTATION_FAILED);
        }

        AttachmentData temp = new AttachmentData();
        if (dir.isDirectory()) {
            fase = 60;
            File serverFile = new File(dir, fileNameUnique);
            BufferedOutputStream stream = null;
            try {
                fase = 70;
                stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                stream.write(file.getBytes());
                stream.close();
                CommonUtil.checkLengthAndResize(serverFile.toString());
            } catch (Exception e) {
                JMessage msg = new JMessage();
                msg.setCode(500);
                msg.setMessage("Lỗi trong quá trình upload file");
                LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + e.getMessage(), e);
                LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                return new ResponseEntity<JMessage>(msg, response, HttpStatus.EXPECTATION_FAILED);
            } finally {
                if (stream != null) {
                    try {
                        stream.close();
                    } catch (IOException e) {
                        JMessage msg = new JMessage();
                        msg.setCode(500);
                        msg.setMessage("Lỗi trong quá trình upload file");
                        fase = 80;
                        LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + e.getMessage(), e);
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        return new ResponseEntity<JMessage>(msg, response, HttpStatus.EXPECTATION_FAILED);
                    }
                }
            }

            temp.setFolder(folderSaveLocation + "/" + fileNameUnique);
            LOG.info(LOG.getName() + nomeMetodo + " File Name: " + fileNameUnique);
            temp.setFileName(fileNameInput);

            temp.setNote(documentNote);
            temp.setAttachmentType(documentType);
            temp.setAttachMentIdClient(attachMentIdClient);
            fase = 90;
        }
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<AttachmentData>(temp, response, HttpStatus.OK);
    }

    public ResponseEntity<?> createTicketNPRPrepaid(HttpServletRequest request, NPR nprRequest) {
        String nomeMetodo = ".createTicketNPRPrepaid() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + "Data NPR INPUT : " + nprRequest.toStringNPRPrepaid());

        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(nprRequest);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_NPR_PREPAID;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            if (Constants.SEND_CCH_CREATE_NPR_OK.equals(jMsg.getCode())) {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
            } else {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
            }
            
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> createTicketNPRPostpaid(HttpServletRequest request, NPR nprRequest) {
        String nomeMetodo = ".createTicketNPRPostpaid() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + "Data NPR INPUT : " + nprRequest.toStringNPRPostpaid());

        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(nprRequest);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_NPR_POSTPAID;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            if (Constants.SEND_CCH_CREATE_NPR_OK.equals(jMsg.getCode())) {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
            } else {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
            }
            
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    //DatBD2
    public ResponseEntity<?> createTicketNprListPrepaid(HttpServletRequest request, NPR nprRequest) {
        String nomeMetodo = ".createTicketNprListPrepaid() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + "fase: " + fase + " " + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + "Data NPR INPUT : " + nprRequest.toStringNPRPrepaid());

        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(nprRequest);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_NPR_LIST_PREPAID;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            if (Constants.SEND_CCH_CREATE_NPR_OK.equals(jMsg.getCode())) {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
            } else {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
            }
        } catch (Exception e2) {
            fase = 110;
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    //End

    public ResponseEntity<?> createTicketNprListPostpaid(HttpServletRequest request, NPR nprRequest) {
        String nomeMetodo = ".createTicketNprListPostpaid() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + "Data NPR INPUT : " + nprRequest.toStringNPRPostpaid());
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(nprRequest);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_NPR_LIST_POSTPAID;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            if (Constants.SEND_CCH_CREATE_NPR_OK.equals(jMsg.getCode())) {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
            } else {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> getListSubscriberTemplatePrepaid(MultipartHttpServletRequest request) throws IOException {
        String nomeMetodo = ".getListSubscriberTemplatePrepaid() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMessage = new JMessage();
        List<ProvisioningCustomerInfo> listProvisioningCustomerInfo = new ArrayList<ProvisioningCustomerInfo>();

        try {
        	MNPRegistrationListMultipart inputObj = new MNPRegistrationListMultipart();
			
			File convFile = new File(request.getFile(request.getFileNames().next()).getOriginalFilename());
			convFile.createNewFile();
			FileOutputStream fos = new FileOutputStream(convFile);
			fos.write(request.getFile(request.getFileNames().next()).getBytes());
			fos.close();
			String encodedBase64 = null;
			try
			{
				FileInputStream fileInputStreamReader = new FileInputStream(convFile);
				byte[] bytes = new byte[(int) convFile.length()];
				fileInputStreamReader.read(bytes);
				encodedBase64 = new String(Base64.encodeBase64(bytes));
				if (convFile != null) {
					fileInputStreamReader.close();
					if (!convFile.delete()) {
						throw new IOException("Unable to delete file: " + convFile.getAbsolutePath());
					}
				}
			} catch (FileNotFoundException e)
			{
				e.printStackTrace();
			} catch (IOException e)
			{
				e.printStackTrace();
			}
			
			inputObj.setFile(encodedBase64);
			String [] tnp = convFile.getPath().split("\\.");
			inputObj.setFileName(tnp[0]);
			inputObj.setFileType(tnp[1]);
			inputObj.setProvince(request.getParameter("province"));
			inputObj.setDistrict(request.getParameter("district"));
			inputObj.setCustomerType(request.getParameter("customerType"));
			inputObj.setSubUseType(request.getParameter("subUseType"));
			inputObj.setTypeCardCompany(request.getParameter("typeCardCompany"));
			inputObj.setTaxCode(request.getParameter("taxCode"));
			inputObj.setShopCode(request.getParameter("shopCode"));
			inputObj.setStaffCode(request.getParameter("staffCode"));
			inputObj.setSubPaymentType(request.getParameter("subPaymentType"));
			inputObj.setAccountType(request.getParameter("accountTypeRequest"));
			inputObj.setPackageType(request.getParameter("packageTypeRequest"));
			
			Gson gson = new Gson();
			String dataString = gson.toJson(inputObj);
			String url = ev.getProperty("login.url") + Constants.URL_NPR_LIST_SUBSCRIBER_FILE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listProvisioningCustomerInfo = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProvisioningCustomerInfo>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMessage = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        
                        if (jMessage.getCode().equals(Constants.VALIDATE_LIST_CUSTOMER_KO)) {
                        	return new ResponseEntity<JMessage>(jMessage, response, HttpStatus.OK);
                        } else {
                        	return new ResponseEntity<JMessage>(jMessage, response, HttpStatus.EXPECTATION_FAILED);
                        }
                        
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMessage.setCode(Constants.KO_FILE_ERROR_CODE);
            jMessage.setMessage(Constants.KO_FILE_ERROR_STR);

            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + Constants.SERVICE_SOAP_ERROR_CODE + " " + Constants.SERVICE_SOAP_ERROR_STR + " "
                    + e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMessage, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<ProvisioningCustomerInfo>>(listProvisioningCustomerInfo, response, HttpStatus.OK);
    }

    public ResponseEntity<?> getListSubscriberTemplatePostpaid(MultipartHttpServletRequest request) throws IOException {
        String nomeMetodo = ".getListSubscriberTemplatePostpaid() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        List<MnpChildrenInforType> listMnpChildrenInforType = new ArrayList<MnpChildrenInforType>();
        JMessage jMsg = new JMessage();
        try {
        	MNPRegistrationListTSMultipart inputObj = new MNPRegistrationListTSMultipart();
			
			File convFile = new File(request.getFile(request.getFileNames().next()).getOriginalFilename());
			convFile.createNewFile();
			FileOutputStream fos = new FileOutputStream(convFile);
			fos.write(request.getFile(request.getFileNames().next()).getBytes());
			fos.close();
			String encodedBase64 = null;
			try
			{
				FileInputStream fileInputStreamReader = new FileInputStream(convFile);
				byte[] bytes = new byte[(int) convFile.length()];
				fileInputStreamReader.read(bytes);
				encodedBase64 = new String(Base64.encodeBase64(bytes));
				if (convFile != null) {
					fileInputStreamReader.close();
					if (!convFile.delete()) {
						throw new IOException("Unable to delete file: " + convFile.getAbsolutePath());
					}
				}
			} catch (FileNotFoundException e)
			{
				e.printStackTrace();
			} catch (IOException e)
			{
				e.printStackTrace();
			}
			
			inputObj.setFile(encodedBase64);
			String [] tnp = convFile.getPath().split("\\.");
			inputObj.setFileName(tnp[0]);
			inputObj.setFileType(tnp[1]);
			inputObj.setAccountTypeRequest(request.getParameter("accountTypeRequest"));
			inputObj.setPackageTypeRequest(request.getParameter("packageTypeRequest"));
			inputObj.setCustomerType(request.getParameter("customerType"));
			inputObj.setCustomerSegment(request.getParameter("customerSegment"));
			inputObj.setParentPhoneNumber(request.getParameter("parentPhoneNumber"));
			inputObj.setParentBirthDay(request.getParameter("parentBirthDay"));
			inputObj.setParentDocumentNumber(request.getParameter("parentDocumentNumber"));
			inputObj.setParentDocumentIssuePlace(request.getParameter("parentDocumentIssuePlace"));
			inputObj.setParentDocumentIssueDate(request.getParameter("parentDocumentIssueDate"));
			inputObj.setParentCountry(request.getParameter("parentCountry"));
			inputObj.setParentCountryText(request.getParameter("parentCountryText"));
			inputObj.setParentEmail(request.getParameter("parentEmail"));
			inputObj.setParentTaxcode(request.getParameter("parentTaxcode"));
			inputObj.setParentCompanyName(request.getParameter("parentCompanyName"));
			inputObj.setParGenderType(request.getParameter("parGenderType"));
			inputObj.setBillProvince(request.getParameter("billProvince"));
			inputObj.setBillDistrict(request.getParameter("billDistrict"));
			inputObj.setBillTown(request.getParameter("billTown"));
			inputObj.setBillRoad(request.getParameter("billRoad"));
			inputObj.setBillNumberHome(request.getParameter("billNumberHome"));
			inputObj.setBillBuildingName(request.getParameter("billBuildingName"));
			inputObj.setBillRoomNumber(request.getParameter("billRoomNumber"));
			inputObj.setPostaProvince(request.getParameter("postaProvince"));
			inputObj.setPostaDistrict(request.getParameter("postaDistrict"));
			inputObj.setPostaTown(request.getParameter("postaTown"));
			inputObj.setPostaRoad(request.getParameter("postaRoad"));
			inputObj.setPostaNumberHome(request.getParameter("postaNumberHome"));
			inputObj.setPostaBuildingName(request.getParameter("postaBuildingName"));
			inputObj.setPostaRoomNumber(request.getParameter("postaRoomNumber"));

			Gson gson = new Gson();
			String dataString = gson.toJson(inputObj);
            String url = ev.getProperty("login.url") + Constants.URL_NPR_LIST_SUBSCRIBER_POST_FILE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listMnpChildrenInforType = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpChildrenInforType>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        if (Constants.VALIDATE_LIST_CUSTOMER_KO == jMsg.getCode()) {
                        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<MnpChildrenInforType>>(listMnpChildrenInforType, response, HttpStatus.OK);
    }

    public ResponseEntity<?> checkCustomerExistInEpos(HttpServletRequest request, String docNumberCustomer, String customerTypeIn, String typeCard) {
        String nomeMetodo = ".checkCustomerExistInEpos() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;
        CommonUtils commontUtils = new CommonUtils();
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();

        fase = 10;
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("docNumberCustomer", docNumberCustomer);
            params.put("customerTypeIn", customerTypeIn);
            params.put("typeCard", typeCard);
            String url = ev.getProperty("login.url") + Constants.CHECK_CUSTOMER_EXIST_EPOS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> checkCustomerExistPostpaid(HttpServletRequest request, String customerType, String idNum, String taxCode) {
        String nomeMetodo = ".checkCustomerExistPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;
        CommonUtils commontUtils = new CommonUtils();
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();

        fase = 10;
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("customerTypeIn", customerType);
            params.put("idNum", idNum);
            params.put("taxCode", taxCode);
            String url = ev.getProperty("login.url") + Constants.CHECK_CUSTOMER_EXIST_TIBCO;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.MES_DOCUMENT_LENGTH_ERROR_CODE == jMsg.getCode() ||
        		Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> checkCompanyExistEpos(HttpServletRequest request, String taxcode) {
        String nomeMetodo = ".checkCompanyExistEpos() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;
        CommonUtils commontUtils = new CommonUtils();
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();

        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("taxcode", taxcode);
            String url = ev.getProperty("login.url") + Constants.CHECK_COMPANY_EXIST_EPOS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> checkCompanyExistPostpaid(HttpServletRequest request, String customerType, String idNum, String taxCode) {
        String nomeMetodo = ".checkCompanyExistPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
    }

    public ResponseEntity<?> checkSubscriberNumberActiveEpos(HttpServletRequest request, String msisdnIn) {
        String nomeMetodo = ".checkSubscriberNumberActiveEpos() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;

        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("msisdn", msisdnIn);
            String url = ev.getProperty("login.url") + Constants.CHECK_SUBSCRIBER_NUMBER_ACTIVE_EPOS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> createTicketNPRPrepaidBundle(HttpServletRequest request, NPR nprRequest) {
        String nomeMetodo = ".createTicketNPRPrepaidBundle() ";
        int fase = 0;
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + "Data NPR INPUT : " + nprRequest.toStringNPRPrepaid());
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(nprRequest);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_NPR_PREPAID_BUNDLE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            if (Constants.SEND_CCH_CREATE_NPR_OK.equals(jMsg.getCode())) {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
            } else {
            	return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    //duytk10--------------//
    public ResponseEntity<?> searchGroupMnpOrderPrepay(HttpServletRequest request, MnpPreRequest cosRejectModel) {
        String nomeMetodo = ".searchGroupMnpOrderPrepay() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        List<MnpPreRequest> listCosReject = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(cosRejectModel);
            String url = ev.getProperty("login.url") + Constants.URL_SEARCH_GROUP_MNP_ORDER_PREPAY;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCosReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpPreRequest>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<MnpPreRequest>>(listCosReject, response, HttpStatus.OK);
        } catch (Exception e2) {
            fase = 30;
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> updateGroupMnpOrderPrepay(HttpServletRequest request, String transStatus, String isdn) {
        String nomeMetodo = ".updatePreOrderTrans() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;
        int resultUpdate = 0;
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("TRANS_STATUS", transStatus);
            params.put("ISDN", isdn);
            String url = ev.getProperty("login.url") + Constants.URL_UPDATE_GROUP_MNP_ORDER_PREPAY;
            String tmp = webService.apiServiceMethodPOSTWithPara(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e2) {
            fase = 30;
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, response, HttpStatus.OK);
    }

    public ResponseEntity<?> insertGroupMnpOrderPrepay(HttpServletRequest request, MnpPreOrderTransType cosRejectModel) {
        String nomeMetodo = ".insertGroupMnpOrderPrepay() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        int fase = 0;
        HttpHeaders response = new HttpHeaders();
        response.set("Access-Control-Allow-Origin", "*");
        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(cosRejectModel);
            String url = ev.getProperty("login.url") + Constants.URL_INSERT_GROUP_MNP_ORDER_PREPAY;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e2) {
            fase = 30;
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, response, HttpStatus.OK);
    }
    //-------------------//

}
