package vn.com.fis.controller.css;

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
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import vn.com.fis.business.css.CInvoiceBusiness;
import vn.com.fis.model.CInvoiceModel.*;
import vn.com.fis.model.css.*;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by vumin on 12/7/2018.
 */

@Controller
public class CInvoiceController {

    private static final Logger LOG = LoggerFactory.getLogger(CInvoiceController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Autowired
    CInvoiceBusiness cInvoiceBusiness;

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_SEARCH_TRANSACTION_BY_ID}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceSearchTransactionById(HttpServletRequest request, @RequestBody Transaction requestSearchIn) {
        String nomeMetodo = ".cInvoiceSearchTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<Transaction> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestSearchIn);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_SEARCH_TRANSACTION_BY_ID;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<Transaction>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<Transaction>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_SEARCH_TRANSACTION}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceSearchTransaction(HttpServletRequest request, @RequestBody Transaction requestSearchIn) {
        String nomeMetodo = ".cInvoiceSearchTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<Transaction> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestSearchIn);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_SEARCH_TRANSACTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<Transaction>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<Transaction>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_GOODS}, method = RequestMethod.POST)
    public ResponseEntity<?> actionGetListGoods(HttpServletRequest request, @RequestParam(name = "transId") String transId) {
        String nomeMetodo = ".actionGetListGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ListGoodOb> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("transId", transId);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_GOODS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ListGoodOb>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ListGoodOb>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_GOOD_DETAIL}, method = RequestMethod.POST)
    public ResponseEntity<?> actionGetListGoodDetail(HttpServletRequest request, @RequestParam(name = "transDetailID") String transDetailID) {
        String nomeMetodo = ".actionGetListGoodDetail() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<TransactionSerialOb> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("transDetailID", transDetailID);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_GOOD_DETAIL;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<TransactionSerialOb>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<TransactionSerialOb>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_SHOP}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceGetListShop(HttpServletRequest request, @RequestBody ShopObject shopOb) {
        String nomeMetodo = ".cInvoiceGetListShop() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ShopObject> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(shopOb);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_SHOP;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopObject>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_STAFF}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceGetListStaff(HttpServletRequest request, @RequestBody ShopObject shopOb) {
        String nomeMetodo = ".cInvoiceGetListStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<StaffObject> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(shopOb);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_STAFF;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<StaffObject>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_PAY_METHOD}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceGetListPayMethod(HttpServletRequest request) {
        String nomeMetodo = ".cInvoiceGetListPayMethod() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ApDomainModel> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_PAY_METHOD;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_TY_GIA}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceGetTyGia(HttpServletRequest request) {
        String nomeMetodo = ".cInvoiceGetTyGia() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ExcRateOb> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_TY_GIA;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ExcRateOb>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ExcRateOb>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_TRANSACTION}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceGetListTransaction(HttpServletRequest request) {
        String nomeMetodo = ".cInvoiceGetListTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ApDomainModel> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_TRANSACTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_C_INVOICE_GET_LIST_INVOICE_STATUS}, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceGetListInvoiceStatus(HttpServletRequest request) {
        String nomeMetodo = ".cInvoiceGetListInvoiceStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ApDomainModel> list = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_C_INVOICE_GET_LIST_INVOICE_STATUS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_CREATE_C_INVOICE}, method = RequestMethod.POST)
    public ResponseEntity<?> actionCreateCInvoice(HttpServletRequest request, @RequestBody InvoiceHeaderOb invoiceHeaderOb) {
        String nomeMetodo = ".actionCreateCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        CInvoiceObject cInvoiceOb = new CInvoiceObject();
        try {
            invoiceHeaderOb.setInvoiceNo("0");
            cInvoiceOb = cInvoiceBusiness.createCInvoiceSale(request, invoiceHeaderOb);
            LOG.info("soHoaDon = " + cInvoiceOb.getInvoiceFull());
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<CInvoiceObject>(cInvoiceOb, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_PRINT_INVOICE}, method = RequestMethod.POST)
    public ResponseEntity<?> actionPrintInvoice(HttpServletRequest request, @RequestBody CInvoiceObject input) {
        String nomeMetodo = ".actionPrintInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        CInvoiceObject cInvoiceOb = new CInvoiceObject();
        try {
            String invoiceFull = input.getInvoiceFull();
            String shopCode = input.getShopCode();
            LOG.info("invoiceFull = " + invoiceFull + "; shopCode = " + shopCode);
            cInvoiceOb = cInvoiceBusiness.onPrintCInvoice(request, input);

            LOG.info("linkDownload = " + cInvoiceOb.getLinkPrint());
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<CInvoiceObject>(cInvoiceOb, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_PRINT_INVOICE_CD}, method = RequestMethod.POST)
    public ResponseEntity<?> actionPrintInvoiceCD(HttpServletRequest request, @RequestBody CInvoiceObject input) {
        String nomeMetodo = ".actionPrintInvoiceCD() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        CInvoiceObject cInvoiceOb = new CInvoiceObject();
        try {

            String invoiceFull = input.getInvoiceFull();
            String shopCode = input.getShopCode();
            LOG.info(LOG.getName() + nomeMetodo + "invoiceFull = " + invoiceFull + "; shopCode = " + shopCode);
            cInvoiceOb = cInvoiceBusiness.onPrintCInvoiceCD(request, input);
            LOG.info(LOG.getName() + nomeMetodo + "linkDownload = " + cInvoiceOb.getLinkPrint());
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<CInvoiceObject>(cInvoiceOb, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_ADUSTMENT_INITDATA, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceAdustmentInitdata(HttpServletRequest request, @RequestParam(name = "shopId") String shopId) throws Exception {
        String nomeMetodo = ".cInvoiceAdustmentInitdata() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Map<String, Object> responseData = new HashMap();
        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopId", shopId);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_ADUSTMENT_INITDATA;
            String tmp = webService.apiServiceMethodGETWithParam(request, url,"","",params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    responseData = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Map<String, Object>>(responseData, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_ADUSTMENT_SEARCH, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceAdustmentSearch(HttpServletRequest request, @RequestBody BillInvoiceObject input) throws Exception {
        String nomeMetodo = ".cInvoiceAdustmentSearch() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<BillInvoiceObject> list = null;
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_ADUSTMENT_SEARCH;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
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
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<BillInvoiceObject>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_ADUSTMENT_UPDATE_BILL_INVOICE, method = RequestMethod.POST)
    public ResponseEntity<?> cInvoiceAdustmentUpdateAdustment(HttpServletRequest request, @RequestBody BillInvoiceObject billInvoiceObject) throws Exception {
        String nomeMetodo = ".cInvoiceAdustmentUpdateAdustment() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
        try {
            LOG.info("BillInvoiceOB.String = " + billInvoiceObject.logData());
			mess = cInvoiceBusiness.updateBillInvoiceAdjust(request, billInvoiceObject);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

}
