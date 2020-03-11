package vn.com.fis.controller.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import vn.com.fis.business.css.CInvoiceBusiness;
import vn.com.fis.model.cinvoice.FormInvoiceApproveObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
public class CInvoiceFormInvoiceApproveController {

    private static final Logger LOG = LoggerFactory.getLogger(CInvoiceFormInvoiceApproveController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Autowired
    CInvoiceBusiness cInvoiceBusiness;

    @RequestMapping(value = Constants.CINVOICE_FORMINVOICEAPPROVE_INITDATA, method = RequestMethod.POST)
    public ResponseEntity<?> initData(HttpServletRequest request, @RequestParam(name = "shopId") String shopId) throws Exception {
        String nomeMetodo = ".listProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Map<String, Object> responseData = new HashMap();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopId", shopId);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMINVOICEAPPROVE_INITDATA;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                responseData = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<Map<String, Object>>(responseData, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Map<String, Object>>(responseData, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_FORMINVOICEAPPROVE_SEARCH, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> formInvoiceApproveSearch(HttpServletRequest request, @RequestBody Map<String, String> model) throws Exception {
        String nomeMetodo = ".formInvoiceApproveSearch() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<FormInvoiceApproveObject> lstBillInvoiceObject = cInvoiceBusiness.getListBillingInvoiceObject(request, model);
        return new ResponseEntity<List<FormInvoiceApproveObject>>(lstBillInvoiceObject, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_FORMINVOICEAPPROVE_CANCEL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> formInvoiceApproveCancel(HttpServletRequest request, @RequestBody Map<String, Object> model) throws Exception {
        String nomeMetodo = ".formInvoiceApproveCancel() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Map<String, Object> response = new HashMap<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(model);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMINVOICEAPPROVE_CANCEL;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_FORMINVOICEAPPROVE_PRINT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> formInvoiceApprovePrint(HttpServletRequest request, @RequestBody Map<String, Object> model) throws Exception {
        String nomeMetodo = ".formInvoiceApprovePrint() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Map<String, String> response = new HashMap<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(model);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMINVOICEAPPROVE_PRINT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, String>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_FORMINVOICEAPPROVE_GETUSER, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> formInvoiceApproveGetUserByShop(HttpServletRequest request, @RequestBody Map<String, Object> model) throws
            Exception {
        String nomeMetodo = ".formInvoiceApproveGetUserByShop() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Map<String, Object> response = new HashMap<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(model);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMINVOICEAPPROVE_GETUSER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.CINVOICE_FORMINVOICEAPPROVE_APPROVE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> formInvoiceApproveApproveInvoice(HttpServletRequest request, @RequestBody Map<String, Object> model) throws
            Exception {
        String nomeMetodo = ".formInvoiceApproveApproveInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Map<String, Object> response = new HashMap<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(model);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMINVOICEAPPROVE_APPROVE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);

    }


}
