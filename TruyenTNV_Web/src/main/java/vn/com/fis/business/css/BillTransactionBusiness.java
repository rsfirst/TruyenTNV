package vn.com.fis.business.css;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.cinvoice.bean.CInvoiceOutput;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.BillInvoiceObjectPr;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Service
public class BillTransactionBusiness {

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(BillTransactionBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public List<BillInvoiceObject> getListBillTransaction(HttpServletRequest request, String status, String mdn, String cusName, String fromDate, String toDate, String staffId,
                                                          String shopId) throws Exception {
        String nomeMetodo = ".getListBillTransaction()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<BillInvoiceObject> invoiceList = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("status", status);
            params.put("mdn", mdn);
            params.put("cusName", cusName);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            params.put("staffId", staffId);
            params.put("shopId", shopId);
            String url = ev.getProperty("login.url") + Constants.ACTION_GET_BILL_TRANSACTION_INVOICE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    invoiceList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(mess.getMessages());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return invoiceList;
    }

    public List<BillInvoiceObject> getListBillTransactionCinvoice(HttpServletRequest request, String status, String mdn, String cusName, String fromDate, String toDate, String staffId,
                                                                  String shopId) throws Exception {
        String nomeMetodo = ".getListBillTransactionCinvoice()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<BillInvoiceObject> invoiceList = new ArrayList<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("status", status);
            params.put("mdn", mdn);
            params.put("cusName", cusName);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            params.put("staffId", staffId);
            params.put("shopId", shopId);
            String url = ev.getProperty("login.url") + Constants.ACTION_GET_BILL_TRANSACTION_C_INVOICE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    invoiceList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(mess.getMessages());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return invoiceList;
    }

    public CInvoiceOutput printBillCInvoice(HttpServletRequest request, BillInvoiceObject itemBillInvoice, String shopCode) throws Exception {
        String nomeMetodo = ".printBillCInvoice()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        CInvoiceOutput cInvoiceOutput = new CInvoiceOutput();
        try {
        	BillInvoiceObjectPr input = new BillInvoiceObjectPr();
        	input.setItemBillInvoice(itemBillInvoice);
        	input.setShopCode(shopCode);
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRINT_BILL_TRANSACTION_C_INVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    cInvoiceOutput = jsonMapper.readValue(tmp.toString(), new TypeReference<CInvoiceOutput>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(mess.getMessages());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return cInvoiceOutput;
    }

    public CInvoiceOutput printBillCInvoiceChange(HttpServletRequest request, BillInvoiceObject itemBillInvoice, String shopCode) throws Exception {
        String nomeMetodo = ".printBillCInvoiceChange()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        CInvoiceOutput cInvoiceOutput = new CInvoiceOutput();
        try {
        	BillInvoiceObjectPr input = new BillInvoiceObjectPr();
        	input.setItemBillInvoice(itemBillInvoice);
        	input.setShopCode(shopCode);
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRINT_BILL_TRANSACTION_C_INVOICE_CHANGE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    cInvoiceOutput = jsonMapper.readValue(tmp.toString(), new TypeReference<CInvoiceOutput>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(mess.getMessages());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return cInvoiceOutput;
    }

    public void destroyBillCInvoice(HttpServletRequest request, BillInvoiceObject itemBillInvoice, String shopCode, String shopType, String shopId) throws Exception {
        String nomeMetodo = ".destroyBillCInvoice()";
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        LOG.info(LOG.getName() + nomeMetodo + " user: " + userName + CommonConstant.BEGIN_LOG);
        try {
        	BillInvoiceObjectPr input = new BillInvoiceObjectPr();
        	input.setItemBillInvoice(itemBillInvoice);
        	input.setShopCode(shopCode);
        	input.setShopType(shopType);
        	input.setShopId(shopId);
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.ACTION_DESTROY_BILL_TRANSACTION_C_INVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
    }

    public MessagesResponse createBillCInvoice(HttpServletRequest request, BillInvoiceObject itemBillInvoice, String shopCode, String shopId) throws Exception {
        String nomeMetodo = ".createBillCInvoice()";
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        LOG.info(LOG.getName() + nomeMetodo + " user: " + userName + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
        	BillInvoiceObjectPr input = new BillInvoiceObjectPr();
        	input.setItemBillInvoice(itemBillInvoice);
        	input.setShopCode(shopCode);
        	input.setShopId(shopId);
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.ACTION_CREATE_BILL_TRANSACTION_C_INVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            mess.setMessages(ex.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return mess;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return mess;
    }
}
