package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.model.mnpcm.NpgRequestLog;
import vn.com.fis.model.mnpcm.NprActionAudit;
import vn.com.fis.model.mnpcm.NprSubscriberDataOutput;
import vn.com.fis.model.mnpcm.ViolationInput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ViolationController {

    private static final Logger LOG = LoggerFactory.getLogger(ViolationController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = vn.com.fis.utils.mnpcm.Constants.REQUEST_MAPPING.URL_DATA_VIOLATION_PORT_OUT, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.MNP_VIOLATION_PORT_OUT + "')")
    @ResponseBody
    public ResponseEntity<?> getDataViolationPortOut(HttpServletRequest request,
                                                     @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getDataViolationPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NPR> listNPRViolation = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_DATA_VIOLATION_PORT_OUT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRViolation = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NPR>>(listNPRViolation, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_DATA_SUBSCRIBER_PORT_OUT, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getDataSubscriberInfo(HttpServletRequest request,
                                                   @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getDataSubscriberInfo() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NprSubscriberDataOutput> listSubscriberViolation = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_DATA_SUBSCRIBER_PORT_OUT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSubscriberViolation = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<NprSubscriberDataOutput>>() {
                            });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NprSubscriberDataOutput>>(listSubscriberViolation, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_DATA_LIST_NPR_NEWS, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListNPRActionAuditPortOut(HttpServletRequest request,
                                                          @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getListNPRActionAuditPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NprActionAudit> listNPRActionAudit = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_DATA_LIST_NPR_NEWS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRActionAudit = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<NprActionAudit>>() {
                            });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NprActionAudit>>(listNPRActionAudit, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_UPDATE_VIOLATION_PORTOUT, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> updateNprViolationPortOut(HttpServletRequest request, @RequestBody NPR nprViolationIn) {
        String nomeMetodo = ".updateNprViolationPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(nprViolationIn);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_UPDATE_VIOLATION_PORTOUT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_VIOLATION_COMMITMENT_CHECKING, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> sendNPCommitmentCheckingPortOut(HttpServletRequest request, @RequestBody NPR nprInput) {
        String nomeMetodo = ".sendNPCommitmentCheckingPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(nprInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_VIOLATION_COMMITMENT_CHECKING;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_VIOLATION_VIOLATION_CHECKING, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> sendNPViolationCheckingPortOut(HttpServletRequest request, @RequestBody NPR nprInput) {
        String nomeMetodo = ".sendNPViolationCheckingPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(nprInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_VIOLATION_VIOLATION_CHECKING;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_DATA_VIOLATION_PORT_IN, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getDataViolationPortIn(HttpServletRequest request,
                                                    @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getDataViolationPortIn() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NPR> listNPRViolation = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_DATA_VIOLATION_PORT_IN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRViolation = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NPR>>(listNPRViolation, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_DATA_SUBSCRIBER_PORT_IN, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getSubscriberViolationPortIn(HttpServletRequest request,
                                                          @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getSubscriberViolationPortIn() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NprSubscriberDataOutput> listSubscriberViolation = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_DATA_SUBSCRIBER_PORT_IN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSubscriberViolation = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<NprSubscriberDataOutput>>() {
                            });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NprSubscriberDataOutput>>(listSubscriberViolation, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_DATA_LIST_NPR_NEWS_PORTIN, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListNPRActionAuditPortIn(HttpServletRequest request,
                                                         @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getListNPRActionAuditPortIn() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NprActionAudit> listNPRActionAudit = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_DATA_LIST_NPR_NEWS_PORTIN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNPRActionAudit = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<NprActionAudit>>() {
                            });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NprActionAudit>>(listNPRActionAudit, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_UPDATE_VIOLATION_PORTIN, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> updateNprViolationPortIn(HttpServletRequest request, @RequestBody NPR nprViolationIn) {
        String nomeMetodo = ".updateNprViolationPortIn() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        try {
        	Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(nprViolationIn);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_UPDATE_VIOLATION_PORTIN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_COMMITMENT_RESPONSE_PORT_IN, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> sendCommitmentResponsePortIn(HttpServletRequest request, @RequestBody NPR nprInput) {
        String nomeMetodo = ".sendCommitmentResponsePortIn() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(nprInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_COMMITMENT_RESPONSE_PORT_IN;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                    });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_LIST_NPG_REQUEST_LOG_VIOLATION, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListNpgRequestLog(HttpServletRequest request, @RequestBody ViolationInput violationInput) {
        String nomeMetodo = ".getListNpgRequestLog() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        JMessage jmsValidate = new JMessage();
        List<NpgRequestLog> listNpgRequestLog = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(violationInput);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_LIST_NPG_REQUEST_LOG_VIOLATION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listNpgRequestLog = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<NpgRequestLog>>() {
                            });
                } catch (Exception e) {
                    try {
                        jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {

            jmsValidate.setCode(Constants.COMMON_ERROR);
            jmsValidate.setMessage(e.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NpgRequestLog>>(listNpgRequestLog, HttpStatus.OK);
    }
}
