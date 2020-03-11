package vn.com.fis.business.mnpcm;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import vn.com.fis.model.mnpcm.ActionSubscriberRerverSalModel;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class ActionReturnToOriginalBusiness {
    private static final Logger LOG = LoggerFactory.getLogger(ActionReturnToOriginalBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> getListReturnNotification(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getListReturnNotification() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        List<NPR> listNPRReceiveAfterViolation = new ArrayList<>();
        JMessage jMsg = new JMessage();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_NPR_RETURN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRReceiveAfterViolation = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.EMPTY_VALUE_MESSAGE_CODE.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
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
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NPR>>(listNPRReceiveAfterViolation, HttpStatus.OK);
    }

    public ResponseEntity<?> getListSubscriberNotification(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getListSubscriberNotification() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        List<ActionSubscriberRerverSalModel> listActoinReversal = new ArrayList<>();
        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_SUBSCRIBER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listActoinReversal = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ActionSubscriberRerverSalModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        if (Constants.EMPTY_VALUE_MESSAGE_CODE.equals(jMsg.getCode())) {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                        } else {
                        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
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
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ActionSubscriberRerverSalModel>>(listActoinReversal, HttpStatus.OK);
    }

    public ResponseEntity<?> checkSusbcriberReversedCompleted(HttpServletRequest request, String msisdn) {
        String nomeMetodo = ".checkSusbcriberReversedCompleted() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RETURN_NOTIFICATION_ORIGINAL_CHECK_SUBSCRIBER_REVERSED;
            String tmp = webService.apiServiceMethodPOST(request, url, "", msisdn);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
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

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        if (Constants.SUBSCRIBER_NONE_REVERSED_COMPLETED.equals(jMsg.getCode()) ||
        		Constants.SUBSCRIBER_REVERSED_COMPLETED.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> sendReturnRequest(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".sendReturnRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RETURN_NOTIFICATION_NETWORK_SEND_RETURN_REQUEST;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
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

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        if (Constants.EMPTY_VALUE_MESSAGE_CODE.equals(jMsg.getCode()) ||
        		Constants.HTTP_STATUS_CODE_OK.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

}
