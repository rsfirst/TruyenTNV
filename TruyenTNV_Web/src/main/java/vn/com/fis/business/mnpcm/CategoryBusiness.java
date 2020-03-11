package vn.com.fis.business.mnpcm;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.ftu.vnm.wrapper.entity.PrepaidEntityFields;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.*;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * The Class PerPaidBusiness.
 */
@Service
public class CategoryBusiness implements PrepaidEntityFields {

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(CategoryBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> getListCosReject(HttpServletRequest request, MnpCosRejectModel cosRejectModel) {
        String nomeMetodo = ".getListCosReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : cos = " + cosRejectModel.getCos() + " cosName = "
                + cosRejectModel.getCosName());

        JMessage jMsg = new JMessage();
        List<MnpCosRejectModel> listCosReject = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(cosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_LIST_COS_REJECT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCosReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpCosRejectModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<MnpCosRejectModel>>(listCosReject, HttpStatus.OK);
    }

    public ResponseEntity<?> createMnpCosRejectDB(HttpServletRequest request, MnpCosRejectModel mnpCosRejectModel) {
        String nomeMetodo = ".createMnpCosRejectDB() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_CREATE_COS_REJECT;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> deleteCosReject(HttpServletRequest request, MnpCosRejectModel mnpCosRejectModel) {
        String nomeMetodo = ".deleteCosReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_DELETE_COS_REJECT;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> getListSpecNumGroup(HttpServletRequest request) {
        String nomeMetodo = ".getListSpecNumGroup() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<SpecNumGroupModel> listCosReject = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_LIST_SPEC_NUM_GROUP;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCosReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<SpecNumGroupModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<SpecNumGroupModel>>(listCosReject, HttpStatus.OK);
    }

    public ResponseEntity<?> getListGroupMdnReject(HttpServletRequest request, MnpMsisdnGroupRejectModel cosRejectModel) {
        String nomeMetodo = ".getListGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : getGroupId = " + cosRejectModel.getGroupId() + " getMsisndGroup = "
                + cosRejectModel.getMsisdnGroup());

        int fase = 0;
        JMessage jMsg = new JMessage();
        List<MnpMsisdnGroupRejectModel> listCosReject = new ArrayList<>();
        try {
            fase = 10;
            Gson gson = new Gson();
            String dataString = gson.toJson(cosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_LIST_GROUP_MDN_REJECT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCosReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpMsisdnGroupRejectModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }

            fase = 20;
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<MnpMsisdnGroupRejectModel>>(listCosReject, HttpStatus.OK);
        } catch (Exception e2) {
            fase = 30;
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> createGroupMdnReject(HttpServletRequest request, MnpMsisdnGroupRejectModel mnpMsisdnGroupRejectModel) {
        String nomeMetodo = ".createGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpMsisdnGroupRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_CREATE_GROUP_MDN_REJECT;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> deleteGroupMdnReject(HttpServletRequest request, MnpMsisdnGroupRejectModel mnpCosRejectModel) {
        String nomeMetodo = ".deleteGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_DELETE_GROUP_MDN_REJECT;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> getListMissdnRejectFromFileTemplate(MultipartHttpServletRequest request) throws Exception {
        String nomeMetodo = ".getListMissdnRejectFromFileTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Iterator<String> itr = request.getFileNames();
        MultipartFile file = request.getFile(itr.next());
        InputStream fileInput = new ByteArrayInputStream(file.getBytes());

        List<MnpMsisdnRejectModel> listMsisdnReject = new ArrayList<MnpMsisdnRejectModel>();

        try {
            // Read file excel
            Workbook workbook = WorkbookFactory.create(fileInput);
            Sheet sheet = workbook.getSheetAt(0);

            Iterator<Row> iteratorRow = sheet.iterator();
            // next cursor to row three
            iteratorRow.next();

            while (iteratorRow.hasNext()) {
                Row row = iteratorRow.next();
                Iterator<Cell> iteratorCell = row.cellIterator();
                MnpMsisdnRejectModel msisdnReject = new MnpMsisdnRejectModel();

                boolean checkCellNull = false;
                while (iteratorCell.hasNext()) {
                    Cell cell = iteratorCell.next();
                    String cellValue = CommonUtils.getCellValue(cell);

                    int columnIndex = cell.getColumnIndex() + 1;
                    if (cellValue != null) {
                        checkCellNull = true;
                        if (columnIndex == Constants.CATEGORY_ITEM_MSISDN_INDEX) {
                            msisdnReject.setMsisdn(cellValue);
                        }

                        if (columnIndex == Constants.CATEGORY_ITEM_MSISDN_TYPE_INDEX) {
                            if (Constants.ACCOUNT_TYPE_PREPAID_STR.equalsIgnoreCase(cellValue)) {
                                msisdnReject.setMsisdnType(Constants.MSISDN_TYPE_PREPAID);
                                msisdnReject.setMsisdnTypeStr(Constants.ACCOUNT_TYPE_PREPAID_STR);
                            } else if (Constants.ACCOUNT_TYPE_POSTPAID_STR.equalsIgnoreCase(cellValue)) {
                                msisdnReject.setMsisdnType(Constants.MSISDN_TYPE_POSTPAID);
                                msisdnReject.setMsisdnTypeStr(Constants.ACCOUNT_TYPE_POSTPAID_STR);
                            } else {
                                msisdnReject.setMsisdnType("");
                                msisdnReject.setMsisdnTypeStr(cellValue);
                            }

                        }

                        if (columnIndex == Constants.CATEGORY_ITEM_DEPARTMENT_INDEX) {
                            msisdnReject.setDepartment(cellValue);
                        }

                        if (columnIndex == Constants.CATEGORY_ITEM_COMMENT_INDEX) {
                            msisdnReject.setComments(cellValue);
                        }
                    }
                }
                if (checkCellNull) {
                    listMsisdnReject.add(msisdnReject);
                }
                checkCellNull = false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOG.error(e.getMessage());
            throw e;
        } finally {
            if (fileInput != null) {
                try {
                    fileInput.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    LOG.error(e.getMessage());
                    throw e;
                }
            }
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<MnpMsisdnRejectModel>>(listMsisdnReject, HttpStatus.OK);
    }

    public ResponseEntity<?> getListMsisdnReject(HttpServletRequest request, MnpMsisdnRejectModel msisdnReject) {
        String nomeMetodo = ".getListMsisdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : msisdn type = " + msisdnReject.getMsisdnType() + " msisdn = "
                + msisdnReject.getMsisdn());

        JMessage jMsg = new JMessage();
        List<MnpMsisdnRejectModel> listMsisdnReject = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(msisdnReject);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_LIST_MSISDN_REJECT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listMsisdnReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpMsisdnRejectModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<MnpMsisdnRejectModel>>(listMsisdnReject, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> createMsisdnReject(HttpServletRequest request, List<MnpMsisdnRejectModel> listMsisdnReject) {
        String nomeMetodo = ".createMsisdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        try {

            Gson gson = new Gson();
            String dataString = gson.toJson(listMsisdnReject);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_CREATE_MSISDN_REJECT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }

        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> deleteMsisdnReject(HttpServletRequest request, MnpMsisdnRejectModel mnpCosRejectModel) {
        String nomeMetodo = ".deleteMsisdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_DELETE_MSISDN_REJECT;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        }
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    // DatBD2 update
    public ResponseEntity<?> getListVipWhiteList(HttpServletRequest request, MnpVipWhiteListModel input) {
        String nomeMetodo = ".getListVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input :msisdn = " + input.getMsisdn());

        JMessage jMsg = new JMessage();
        List<MnpVipWhiteListModel> listVipWhiteList = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_LIST_VIP_WHITE_LIST;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listVipWhiteList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpVipWhiteListModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<MnpVipWhiteListModel>>(listVipWhiteList, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> deleteVipWhiteList(HttpServletRequest request, List<MnpVipWhiteListModel> input) {
        String nomeMetodo = ".deleteVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_DELETE_VIP_WHITE_LIST;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + " " + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }
    // end

    // DatBD2 update
    public ResponseEntity<?> getListMsisdnWhiteList(HttpServletRequest request, MnpMsisdnWhiteListModel msisdnReject) {
        String nomeMetodo = ".getListMsisdnWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : msisdn type = " + msisdnReject.getMsisdnType() + " msisdn = "
                + msisdnReject.getMsisdn());

        JMessage jMsg = new JMessage();
        List<MnpMsisdnWhiteListModel> listMsisdnReject = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(msisdnReject);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_LIST_MSISDN_WHITE_LIST;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listMsisdnReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpMsisdnWhiteListModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<MnpMsisdnWhiteListModel>>(listMsisdnReject, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> createMsisdnWhiteList(HttpServletRequest request, List<MnpMsisdnWhiteListModel> listMsisdnReject) {
        String nomeMetodo = ".createMsisdnWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(listMsisdnReject);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_CREATE_MSISDN_WHITE_LIST;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> deleteMsisdnWhiteList(HttpServletRequest request, MnpMsisdnWhiteListModel mnpCosRejectModel) {
        String nomeMetodo = ".deleteMsisdnWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCosRejectModel);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_DELETE_MSISDN_WHITE_LIST;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> createVipWhiteList(HttpServletRequest request, List<MnpVipWhiteListModel> listInput) {
        String nomeMetodo = ".createVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(listInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_CREATE_VIP_WHITE_LIST;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.COMMON_ERROR.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        }
    }

    // DatBD2 update pcr208
    public ResponseEntity<?> getListVipListFromFileTemplate(MultipartHttpServletRequest request) throws Exception {
        String nomeMetodo = ".getListVipListFromFileTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Iterator<String> itr = request.getFileNames();
        MultipartFile file = request.getFile(itr.next());
        InputStream fileInput = new ByteArrayInputStream(file.getBytes());

        List<MnpVipWhiteListModel> listVipWhiteList = new ArrayList<MnpVipWhiteListModel>();

        try {
            // Read file excel
            Workbook workbook = WorkbookFactory.create(fileInput);
            Sheet sheet = workbook.getSheetAt(0);

            Iterator<Row> iteratorRow = sheet.iterator();
            // next cursor to row three
            iteratorRow.next();

            while (iteratorRow.hasNext()) {
                Row row = iteratorRow.next();
                Iterator<Cell> iteratorCell = row.cellIterator();
                MnpVipWhiteListModel vipWhiteList = new MnpVipWhiteListModel();

                boolean checkCellNull = false;
                while (iteratorCell.hasNext()) {
                    Cell cell = iteratorCell.next();
                    String cellValue = CommonUtils.getCellValue(cell);

                    int columnIndex = cell.getColumnIndex() + 1;
                    if (cellValue != null) {
                        checkCellNull = true;
                        if (columnIndex == Constants.CATEGORY_ITEM_MSISDN_INDEX_VIP_WHITE_LIST) {
                            vipWhiteList.setMsisdn(cellValue);
                        }

                        if (columnIndex == Constants.CATEGORY_ITEM_STATUS_INDEX_VIP_WHITE_LIST) {
                            vipWhiteList.setStatus(cellValue);
                        }

                    }
                }
                if (checkCellNull) {
                    listVipWhiteList.add(vipWhiteList);
                }
                checkCellNull = false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOG.error(e.getMessage());
            throw e;
        } finally {
            if (fileInput != null) {
                try {
                    fileInput.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    LOG.error(e.getMessage());
                    throw e;
                }
            }
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<MnpVipWhiteListModel>>(listVipWhiteList, HttpStatus.OK);
    }

    // end
    // DatBD2 update
    public ResponseEntity<?> reIssueVipWhiteList(HttpServletRequest request, List<MnpVipWhiteListModel> input) {
        String nomeMetodo = ".reIssueVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_CATEGORY_ITEM_RE_ISSUE_VIP_WHITE_LIST;
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
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(Constants.COMMON_ERROR_MESSAGE);
            LOG.error(
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }
    // end

}
