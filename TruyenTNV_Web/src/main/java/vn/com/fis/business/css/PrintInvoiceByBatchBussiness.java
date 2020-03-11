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
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.CInvoiceObject;
import vn.com.fis.model.css.ResponseModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class PrintInvoiceByBatchBussiness {
    private static final Logger LOG = LoggerFactory.getLogger(PrintInvoiceByBatchBussiness.class);

    @Autowired
    Environment ev;

    @Autowired
    WebService webService;

    public ResponseModel enqueryTransaction(HttpServletRequest request, BillInvoiceObject billInput) {
        String nomeMetodo = ".enqueryTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        ResponseModel responseModel = new ResponseModel();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(billInput);
            String url = ev.getProperty("login.url") + Constants.CINVOICE_PRINT_BY_BATCH_ROOT + Constants.CINVOICE_SUB_PRINT_BY_BATCH_SEARCH;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                responseModel = jsonMapper.readValue(tmp.toString(), new TypeReference<ResponseModel>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            responseModel.setCode("C9999");
            responseModel.setDescription("Exception: " + exp.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return responseModel;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return responseModel;
    }

    public ResponseModel onCreateCInvoice(HttpServletRequest request, List<BillInvoiceObject> billList) {
        String nomeMetodo = ".onCreateCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        ResponseModel response = new ResponseModel();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(billList);
            String url = ev.getProperty("login.url") + Constants.CINVOICE_PRINT_BY_BATCH_ROOT + Constants.CINVOICE_SUB_PRINT_BY_BATCH_ONCREATE_CINVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<ResponseModel>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            response.setCode("C9999");
            response.setDescription("Exception: " + exp.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    public ResponseModel onPrintCInvoice(HttpServletRequest request, List<CInvoiceObject> cInvoiceList) {
        String nomeMetodo = ".onPrintCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        ResponseModel response = new ResponseModel();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(cInvoiceList);
            String url = ev.getProperty("login.url") + Constants.CINVOICE_PRINT_BY_BATCH_ROOT + Constants.CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_CINVOICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<ResponseModel>() {
                });
            }
        } catch (Exception exp) {
            response.setCode("C9999");
            response.setDescription("Exception: " + exp.getMessage());
            exp.printStackTrace();
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }
}
