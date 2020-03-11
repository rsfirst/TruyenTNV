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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vn.com.fis.model.mnpcm.*;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SearchAllInfomationNetworkTranferBusiness {

    private static final Logger LOG = LoggerFactory.getLogger(SearchAllInfomationNetworkTranferBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> getDataNPRPortInBusiness(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getDataNPRPortInBusiness() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPR> listTransferNetworkPortIn = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_TRANSFER_NETWORK_PORT_IN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listTransferNetworkPortIn = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<NPR>>(listTransferNetworkPortIn, HttpStatus.OK);
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

    public ResponseEntity<?> getDataNPRPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getDataNPRPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPR> listTransferNetworkPortOut = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_NPR_PORT_OUT;
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<NPR>>(listTransferNetworkPortOut, HttpStatus.OK);
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

    public ResponseEntity<?> listNPRCancelRNO(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".listNPRCancelRNO() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPR> listNPRCancelRNO = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_NPR_CANCEL_RNO;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRCancelRNO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<NPR>>(listNPRCancelRNO, HttpStatus.OK);
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

    public ResponseEntity<?> listNPRCancelDNO(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".listNPRCancelDNO() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<NPR> listNPRCancelDNO = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_NPR_CANCEL_DNO;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRCancelDNO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<NPR>>(listNPRCancelDNO, HttpStatus.OK);
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

    public ResponseEntity<?> getNPRCancelDetail(HttpServletRequest request, String cchTransId) {
        String nomeMetodo = ".getNPRCancelDetail() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " CCH_TRAN_ID  : " + cchTransId);

        JMessage jMsg = new JMessage();
        MnpCancelDetail listNPRCancelDetail = new MnpCancelDetail();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("cchTransId", cchTransId);
            String url = ev.getProperty("login.url") + Constants.URL_NPR_CANCEL_DETAIL;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRCancelDetail = jsonMapper.readValue(tmp.toString(), new TypeReference<MnpCancelDetail>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<MnpCancelDetail>(listNPRCancelDetail, HttpStatus.OK);
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

    public ResponseEntity<?> getListReversalDNO(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getListReversalDNO() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<ReversalDNOOutputModel> listTransferNetworkReversalDNO = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_REVERSAL_SUBSCRIBER_DNO;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listTransferNetworkReversalDNO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReversalDNOOutputModel>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<ReversalDNOOutputModel>>(listTransferNetworkReversalDNO, HttpStatus.OK);
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

    public ResponseEntity<?> getListReversalSubscriberVNM(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getListReversalSubscriberVNM() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<ReversalOutputModal> listReversalSubscriberVNM = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_REVERSAL_SUBCRIBER_VNM;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listReversalSubscriberVNM = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReversalOutputModal>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<ReversalOutputModal>>(listReversalSubscriberVNM, HttpStatus.OK);
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

    public ResponseEntity<?> getListReturnOrginalNetwork(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getListReturnOrginalNetwork() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<ReversalOutputModal> listTransferNetworkOriginalNetwork = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_RETURN_ORIGINAL_NETWORK;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listTransferNetworkOriginalNetwork = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReversalOutputModal>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<ReversalOutputModal>>(listTransferNetworkOriginalNetwork, HttpStatus.OK);
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

    public ResponseEntity<?> getListReturnSubscriberVNM(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".getListReturnSubscriberVNM() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

        JMessage jMsg = new JMessage();
        List<ReversalOutputModal> listTransferNetworkRetreiveSubscriberVNM = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(searchDataInput);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_RETURN_SUBSCRIBER_VNM;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listTransferNetworkRetreiveSubscriberVNM = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReversalOutputModal>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<ReversalOutputModal>>(listTransferNetworkRetreiveSubscriberVNM, HttpStatus.OK);
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

    public ResponseEntity<?> getListNPRActionAuidtByNprId(HttpServletRequest request, String nprId) {
        String nomeMetodo = ".getListNPRActionAuidtByNprId() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " nprId = " + nprId);

        JMessage jMsg = new JMessage();
        List<NprActionAudit> listNPRActionAudit = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("nprId", nprId);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_NPR_ACTION_AUDIT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRActionAudit = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NprActionAudit>>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<NprActionAudit>>(listNPRActionAudit, HttpStatus.OK);
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

    public ResponseEntity<?> getListAttachMentByNprId(HttpServletRequest request, String nprId) {
        String nomeMetodo = ".getListAttachMentByNprId() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " nprId = " + nprId);

        JMessage jMsg = new JMessage();
        List<AttachmentData> listAttachMentData = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("nprId", nprId);
            String url = ev.getProperty("login.url") + Constants.URL_LIST_ATTACHMENT_DATA;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listAttachMentData = jsonMapper.readValue(tmp.toString(), new TypeReference<AttachmentData>() {
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

            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<List<AttachmentData>>(listAttachMentData, HttpStatus.OK);
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
