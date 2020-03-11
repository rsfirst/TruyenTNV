package vn.com.fis.business.css;

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
import vn.com.fis.model.css.*;
import vn.com.fis.model.mnpcm.GoodModel;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

// TODO: Auto-generated Javadoc

/**
 * The Class CreateExchangeBusiness.
 */
@Service
@Transactional
public class CreateExchangeBusiness {

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(CreateExchangeBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public ResponseEntity<?> loadPrice(HttpServletRequest request, ObjectTwoField input) {
        String nomeMetodo = ".loadPrice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<GoodPriceModel> listPrice = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_EXCHANGE_LOAD_PRICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPrice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodPriceModel>>() {
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
            return new ResponseEntity<List<GoodPriceModel>>(listPrice, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> loadPromotion(HttpServletRequest request) {
        String nomeMetodo = ".loadPromotion() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<PromotionModel> listPrice = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_EXCHANGE_LOAD_PROMOTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPrice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PromotionModel>>() {
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
            return new ResponseEntity<List<PromotionModel>>(listPrice, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> loadGoods(HttpServletRequest request, ObjectTwoField input) {
        String nomeMetodo = ".loadGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<GoodModel> listGood = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_EXCHANGE_LOAD_GOODS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listGood = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodModel>>() {
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
            return new ResponseEntity<List<GoodModel>>(listGood, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> calculate(HttpServletRequest request, CalculateObject input) {
        String nomeMetodo = ".calculate() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<ObjectTwoField> lstDiscounts = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_EXCHANGE_CALCULATE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstDiscounts = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectTwoField>>() {
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
            return new ResponseEntity<List<ObjectTwoField>>(lstDiscounts, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> loadSerial(HttpServletRequest request, SerialSearchModel input) {
        String nomeMetodo = ".loadSerial() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<SerialModel> lstSerials = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_EXCHANGE_LOAD_SERIAL;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstSerials = jsonMapper.readValue(tmp.toString(), new TypeReference<List<SerialModel>>() {
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
            return new ResponseEntity<List<SerialModel>>(lstSerials, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> getAttachGoods(HttpServletRequest request, ObjectTwoField input) {
        String nomeMetodo = ".getAttachGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<AttachGoodModel> listGood = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_SOURCE_ATTACH_GOODS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listGood = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AttachGoodModel>>() {
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
            return new ResponseEntity<List<AttachGoodModel>>(listGood, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> getPriceTypeAndBundle(HttpServletRequest request) {
        String nomeMetodo = ".getPriceTypeAndBundle()";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<ObjectTwoField> listPrice = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.URL_CREATE_EXCHANGE_LOAD_PRICE_AND_BUNDLE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPrice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectTwoField>>() {
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
            return new ResponseEntity<List<ObjectTwoField>>(listPrice, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> saveTransaction(HttpServletRequest request, TransactionModel input) {
        String nomeMetodo = ".saveTransaction()";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<String> lstTransId = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_SOURCE_SAVE_TRANSACTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstTransId = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
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
            return new ResponseEntity<List<String>>(lstTransId, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> saveMGMPromotion(HttpServletRequest request, MGMPromotionModel input) {
        String nomeMetodo = ".saveTransaction()";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<String> lstTransId = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_SAVE_MGM_PROMOTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstTransId = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
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
            return new ResponseEntity<List<String>>(lstTransId, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

    public ResponseEntity<?> getCurrentInvoiceNo(HttpServletRequest request, InvoiceNoRequest input) {
        String nomeMetodo = ".getCurrentInvoiceNo()";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        List<InvoiceNoResponse> lstInvoiceNo = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.URL_SOURCE_GET_CURRENT_INVOICE_NO;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstInvoiceNo = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InvoiceNoResponse>>() {
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
            return new ResponseEntity<List<InvoiceNoResponse>>(lstInvoiceNo, HttpStatus.OK);
        } catch (Exception e2) {
            LOG.error(e2.getMessage(), e2);
            jMsg.setCode(Constants.COMMON_ERROR);
            jMsg.setMessage(e2.getMessage());
            LOG.error(LOG.getName() + nomeMetodo + " " + e2.getMessage() + " "
                    + Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
    }

}
