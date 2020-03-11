package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.CInvoiceModel.InvoiceHeaderOb;
import vn.com.fis.model.cinvoice.FormInvoiceApproveObject;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.CInvoiceObject;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by vumin on 12/10/2018.
 */
@Service
@Transactional
public class CInvoiceBusiness {
    private static final Logger LOG = LoggerFactory.getLogger(CInvoiceBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public List<FormInvoiceApproveObject> getListBillingInvoiceObject(HttpServletRequest request, Map<String, String> model) throws Exception {
        String nomeMetodo = ".getListBillingInvoiceObject() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<FormInvoiceApproveObject> list = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(model);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMINVOICEAPPROVE_SEARCH;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<FormInvoiceApproveObject>>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return list;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return list;
    }

    public CInvoiceObject createCInvoiceSale(HttpServletRequest request, InvoiceHeaderOb invoiceHeaderOb) throws Exception {
        String nomeMetodo = ".createCInvoiceSale() ";

        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        CInvoiceObject cInvoiceOb = new CInvoiceObject();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(invoiceHeaderOb);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_CREATE_C_INVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    cInvoiceOb = jsonMapper.readValue(tmp.toString(), new TypeReference<CInvoiceObject>() {
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
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            throw new Exception(ex.getMessage());
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return cInvoiceOb;
    }

    public CInvoiceObject onPrintCInvoice(HttpServletRequest request, CInvoiceObject input) throws Exception {
        String nomeMetodo = ".onPrintCInvoice() ";

        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        CInvoiceObject cInvoiceOb = new CInvoiceObject();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_PRINT_INVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    cInvoiceOb = jsonMapper.readValue(tmp.toString(), new TypeReference<CInvoiceObject>() {
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
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            throw new Exception(ex.getMessage());
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return cInvoiceOb;
    }

    public CInvoiceObject onPrintCInvoiceCD(HttpServletRequest request, CInvoiceObject input) throws Exception {
        String nomeMetodo = ".onPrintCInvoiceCD() ";

        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        CInvoiceObject cInvoiceOb = new CInvoiceObject();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_PRINT_INVOICE_CD;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    cInvoiceOb = jsonMapper.readValue(tmp.toString(), new TypeReference<CInvoiceObject>() {
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
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            throw new Exception(ex.getMessage());
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return cInvoiceOb;
    }

    public MessagesResponse updateBillInvoiceAdjust(HttpServletRequest request, BillInvoiceObject bill_invoice_ob) throws Exception {
        String nomeMetodo = ".updateBillInvoiceAdjust() ";

        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(bill_invoice_ob);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_ADUSTMENT_UPDATE_BILL_INVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            throw new Exception(ex.getMessage());
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return mess;
    }

}
