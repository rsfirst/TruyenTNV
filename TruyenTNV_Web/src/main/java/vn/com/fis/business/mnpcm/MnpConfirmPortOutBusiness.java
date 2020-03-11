package vn.com.fis.business.mnpcm;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.model.mnpcm.NPRPortOut;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MnpConfirmPortOutBusiness {

    private static final Logger LOG = LoggerFactory.getLogger(MnpConfirmPortOutBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Value("${upload.path}")
    private String FOLDER_IMANGE = "";

    public ResponseEntity<?> listSubscriberPortOutNormal(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".listSubscriberPortOutNormal() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPRPortOut> listNPROutputResult = new ArrayList<NPRPortOut>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_PORT_OUT_LIST_SUBSCRIBER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPROutputResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPRPortOut>>() {
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
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<NPRPortOut>>(listNPROutputResult, HttpStatus.OK);
    }

    // 1190 So dep NPR
    public ResponseEntity<?> listSubscriberPortOutNiceNumber(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".listSubscriberPortOutNiceNumber() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPRPortOut> listNPROutputResult = new ArrayList<NPRPortOut>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_PORT_OUT_LIST_SUBSCRIBER_NICE_NUMBER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPROutputResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPRPortOut>>() {
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
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<NPRPortOut>>(listNPROutputResult, HttpStatus.OK);
    }

    public ResponseEntity<?> sendConfirmAcceptPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".sendConfirmAcceptPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_PORT_OUT_ACCEPT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.NPR_MESSAGE_ACCEPT_CODE.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> sendConfirmRejectPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".sendConfirmRejectPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_PORT_OUT_REJECT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.NPR_MESSAGE_REJECT_CODE.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> listSubscriberConfirmReversalOut(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".listSubscriberConfirmReversalOut() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPR> listTransferNetworkPortOut = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_CONFIRM_REVERSAL_LIST_SUBSCRIBER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listTransferNetworkPortOut = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
                    });
                } catch (Exception e) {
                    try {
                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e2) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<List<NPR>>(listTransferNetworkPortOut, HttpStatus.OK);
    }

    // 1190
    public ResponseEntity<?> sendConfirmAcceptReversal(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".sendConfirmAcceptReversal() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_CONFIRM_REVERSAL_ACCEPT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.NPR_MESSAGE_ACCEPT_CODE.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> sendConfirmRejectReversal(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".sendConfirmRejectReversal() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_MNP_CONFIRM_REVERSAL_REJECT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            }
        } catch (Exception e2) {
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " " + Constants.COMMON_ERROR + " "
                    + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        if (Constants.NPR_MESSAGE_REJECT_CODE.equals(jMsg.getCode())) {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        } else {
        	return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

}
