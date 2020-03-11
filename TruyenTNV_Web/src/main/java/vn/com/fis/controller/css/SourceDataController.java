package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.HashMap;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.AppDomainModel;
import vn.com.fis.model.mnpcm.CmGlCodeModel;
import vn.com.fis.model.mnpcm.Country;
import vn.com.fis.model.mnpcm.CustomerType;
import vn.com.fis.model.mnpcm.District;
import vn.com.fis.model.mnpcm.ExcRateModel;
import vn.com.fis.model.mnpcm.NprDocumentType;
import vn.com.fis.model.mnpcm.NprNetworkType;
import vn.com.fis.model.mnpcm.PackageType;
import vn.com.fis.model.mnpcm.Province;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class SourceDataController {

    private static final Logger LOG = LoggerFactory.getLogger(SourceDataController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = Constants.URL_SOURCE_PROVINCE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListProvince(HttpServletRequest request) {

        String nomeMetodo = ".getListProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<Province> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PROVINCE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<Province>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListProvince");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<Province>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_DISTRICT, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListDistrict(HttpServletRequest request,
                                             @RequestParam("provinceId") String provinceId) {
        String nomeMetodo = ".getListDistrict() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<District> listSource = new ArrayList<>();
        MessagesResponse msgResponse = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("provinceId", provinceId);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_DISTRICT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<District>>() {
                    });
                } catch (Exception e) {
                    try {
                        msgResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
            msgResponse.setMessages(ex.getMessage());
            return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<District>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_COUNTRY, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListCounry(HttpServletRequest request) {
        String nomeMetodo = ".getListCounry() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<Country> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_COUNTRY;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<Country>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListCounry");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<Country>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PACKAGETYPE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListPackageType(HttpServletRequest request) {
        String nomeMetodo = ".getListPackageType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<PackageType> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PACKAGETYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PackageType>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPackageType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<PackageType>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PACKAGETYPE_PREPAID_COS_REJECT, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListPackageTypePrepaidCosReject(HttpServletRequest request) {
        String nomeMetodo = ".getListPackageTypePrepaidCosReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<PackageType> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url")
                    + Constants.REQUEST_MAPPING.URL_SOURCE_PACKAGETYPE_PREPAID_COS_REJECT;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PackageType>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPackageTypePrepaidCosReject");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<PackageType>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PACKAGETYPE_AP_DOMAIN, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListPackageTypePrepaidApDomain(HttpServletRequest request) {
        String nomeMetodo = ".getListPackageTypePrepaidApDomain() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<PackageType> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PACKAGETYPE_AP_DOMAIN;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PackageType>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPackageTypePrepaidApDomain");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<PackageType>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_CUSTOMER_TYPE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListCustomerType(HttpServletRequest request) {
        String nomeMetodo = ".getListCustomerType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<CustomerType> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_CUSTOMER_TYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CustomerType>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListCustomerType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<CustomerType>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_NETWORK_TYPE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListNetworkType(HttpServletRequest request) {
        String nomeMetodo = ".getListNetworkType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<NprNetworkType> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_NETWORK_TYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NprNetworkType>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListNetworkType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NprNetworkType>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_DOCUMENT_TYPE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListDocumentType(HttpServletRequest request) {
        String nomeMetodo = ".getListDocumentType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<NprDocumentType> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_DOCUMENT_TYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NprDocumentType>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListDocumentType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<NprDocumentType>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_LEVEL_CUSTOMER, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListLevelCustomer(HttpServletRequest request) {

        String nomeMetodo = ".getListLevelCustomer() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<AppDomainModel> listmpayment = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_LEVEL_CUSTOMER;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listmpayment = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListLevelCustomer");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<AppDomainModel>>(listmpayment, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PAYMENT_METHOD, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListPaymentMethod(HttpServletRequest request) {

        String nomeMetodo = ".getListPaymentMethod() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<CmGlCodeModel> listPaymentMethod = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PAYMENT_METHOD;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPaymentMethod = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CmGlCodeModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPaymentMethod");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<CmGlCodeModel>>(listPaymentMethod, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_BILL_TYPE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListBillType(HttpServletRequest request) {

        String nomeMetodo = ".getListBillType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<CmGlCodeModel> listPaymentMethod = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_BILL_TYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPaymentMethod = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CmGlCodeModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListBillType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<CmGlCodeModel>>(listPaymentMethod, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PAYMENT_TYPE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListPaymentType(HttpServletRequest request) {

        String nomeMetodo = ".getListPaymentType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<CmGlCodeModel> listPaymentMethod = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PAYMENT_TYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPaymentMethod = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CmGlCodeModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPaymentType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<CmGlCodeModel>>(listPaymentMethod, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PACKAGE_POSPAID, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListPackagePostpaid(HttpServletRequest request) {

        String nomeMetodo = ".getListPackagePostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<AppDomainModel> listPackagePostpaid = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PACKAGE_POSPAID;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPackagePostpaid = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<AppDomainModel>>() {
                            });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPackagePostpaid");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<AppDomainModel>>(listPackagePostpaid, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_COUNTRY_POSPAID, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListCountryPostpaid(HttpServletRequest request) {

        String nomeMetodo = ".getListCountryPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<CmGlCodeModel> listPaymentMethod = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_COUNTRY_POSPAID;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listPaymentMethod = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CmGlCodeModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListCountryPostpaid");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<CmGlCodeModel>>(listPaymentMethod, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_CUST_INFOR, method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getListCustInfor(HttpServletRequest request) {
        String nomeMetodo = ".getListCustInfor() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<AppDomainModel> listReturn = new ArrayList<AppDomainModel>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_CUST_INFOR;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listReturn = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListCustInfor");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<AppDomainModel>>(listReturn, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_PAY_METHOD, method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getListPayMethod(HttpServletRequest request) {
        String nomeMetodo = ".getListPayMethod() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<AppDomainModel> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_PAY_METHOD;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListPayMethodr");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<AppDomainModel>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_EXC_RATE, method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getListExcRate(HttpServletRequest request) {
        String nomeMetodo = ".getListExcRate() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<ExcRateModel> listSource = new ArrayList<>();

        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_EXC_RATE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ExcRateModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListExcRate");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ExcRateModel>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_DVT, method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getListDVT(HttpServletRequest request) {
        String nomeMetodo = ".getListDVT() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<AppDomainModel> listSource = new ArrayList<>();

        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_DVT;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_getListDVT");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<AppDomainModel>>(listSource, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_SOURCE_INVOICE_TYPE, method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> loadInvoiceType(HttpServletRequest request) {
        String nomeMetodo = ".loadInvoiceType() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        List<AppDomainModel> listSource = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.URL_SOURCE_INVOICE_TYPE;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listSource = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setCode("ERROR_loadInvoiceType");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<AppDomainModel>>(listSource, HttpStatus.OK);
    }
}
