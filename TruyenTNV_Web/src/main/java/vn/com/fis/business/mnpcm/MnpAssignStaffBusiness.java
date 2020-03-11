package vn.com.fis.business.mnpcm;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.StaffObject;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.MnpPreRequest;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class MnpAssignStaffBusiness {

    private static final Logger LOG = LoggerFactory.getLogger(MnpAssignStaffBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> getListPreRequest(HttpServletRequest request, MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".getListPreRequest() ";

        JMessage jMsg = new JMessage();
        List<MnpPreRequest> listPreRequest = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpPreRequest);
            String url = ev.getProperty("login.url") + Constants.URL_ASSIGN_LIST_PREORDER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPreRequest = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpPreRequest>>() {
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
            return new ResponseEntity<List<MnpPreRequest>>(listPreRequest, HttpStatus.OK);
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

    public ResponseEntity<?> getListStaff(HttpServletRequest request) {
        String nomeMetodo = ".getListStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<StaffObject> listStaffs = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.URL_STAFF_LIST;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listStaffs = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
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
            return new ResponseEntity<List<StaffObject>>(listStaffs, HttpStatus.OK);
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

    public ResponseEntity<?> assignStaff(HttpServletRequest request, List<MnpPreRequest> listMnpPreRequest) {
        String nomeMetodo = ".assignStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(listMnpPreRequest);
            String url = ev.getProperty("login.url") + Constants.URL_ASSIGN_STAFF;
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

    public ResponseEntity<?> getListStaffLocation(HttpServletRequest request, MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".getListStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<StaffObject> listStaffs = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpPreRequest);
            String url = ev.getProperty("login.url") + Constants.URL_STAFF_LIST_LOCATION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listStaffs = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
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
            return new ResponseEntity<List<StaffObject>>(listStaffs, HttpStatus.OK);
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
}
