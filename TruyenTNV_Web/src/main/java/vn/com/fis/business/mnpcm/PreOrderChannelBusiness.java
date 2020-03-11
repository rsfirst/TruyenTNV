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
import vn.com.fis.ftu.vnm.wrapper.entity.PrepaidEntityFields;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.MnpPreOrderChannelType;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * The Class PerPaidBusiness.
 */
@Service
public class PreOrderChannelBusiness implements PrepaidEntityFields {
    private static final Logger LOG = LoggerFactory.getLogger(PreOrderChannelBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> searchSpecNumGroupOrderStatus(HttpServletRequest request, MnpPreOrderChannelType cosRejectModel) {
        String nomeMetodo = ".searchGroupMnpOrderStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<MnpPreOrderChannelType> listCosReject = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(cosRejectModel);
            String url = ev.getProperty("login.url") + Constants.URL_CHANNEL_ITEM_SEARCH_GROUP_MNP_ORDER_STATUS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCosReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpPreOrderChannelType>>() {
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
            return new ResponseEntity<List<MnpPreOrderChannelType>>(listCosReject, HttpStatus.OK);
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

    public ResponseEntity<?> getListSpecNumGroupOrderStatus(HttpServletRequest request) {
        String nomeMetodo = ".getListSpecNumGroup() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<MnpPreOrderChannelType> listCosReject = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.URL_CHANNEL_ITEM_LIST_GROUP_MNP_ORDER_STATUS;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCosReject = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpPreOrderChannelType>>() {
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
            return new ResponseEntity<List<MnpPreOrderChannelType>>(listCosReject, HttpStatus.OK);
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

    public ResponseEntity<?> createGroupMnpOrderStatus(HttpServletRequest request, MnpPreOrderChannelType mnpMsisdnGroupRejectModel) {
        String nomeMetodo = ".createGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpMsisdnGroupRejectModel);
            String url = ev.getProperty("login.url") + Constants.URL_CHANNEL_ITEM_CREATE_GROUP_MNP_ORDER_STATUS;
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
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> onUpdateMnpOrderChannel(HttpServletRequest request, MnpPreOrderChannelType mnpMsisdnGroupRejectModel) {
        String nomeMetodo = ".onUpdateMnpOrderChannel() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpMsisdnGroupRejectModel);
            String url = ev.getProperty("login.url") + Constants.URL_CHANNEL_ITEM_UPDATE_GROUP_MNP_ORDER_STATUS;
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
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    public ResponseEntity<?> deleteGroupMdnReject(HttpServletRequest request, MnpPreOrderChannelType mnpCosRejectModel) {
        String nomeMetodo = ".deleteGroupMnpOrderStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + " " + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCosRejectModel);
            String url = ev.getProperty("login.url") + Constants.URL_CHANNEL_ITEM_DELETE_GROUP_MNP_ORDER_STATUS;
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
                    LOG.getName() + nomeMetodo + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE + " " + e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

}
