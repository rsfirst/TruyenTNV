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
import vn.com.fis.business.css.CashTransferVNMBusiness;
import vn.com.fis.model.css.CashTransferModel;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ObjectTwoField;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * The Class PerPaidController.
 */
@Controller
public class CashTransferVNMController {

    private static final Logger LOG = LoggerFactory.getLogger(CashTransferVNMController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Autowired
    CashTransferVNMBusiness cashTransferVNMBusiness;

    @RequestMapping(value = {Constants.ACTION_LIST_CENTER}, method = RequestMethod.POST)
    public ResponseEntity<?> getCenterList(HttpServletRequest request) {
        String nomeMetodo = ".getCenterList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ObjectTwoField> listCenter = new ArrayList<ObjectTwoField>();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_LIST_CENTER;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listCenter = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ObjectTwoField>>() {
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
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ObjectTwoField>>(listCenter, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_SEARCH_LIST_CASH_TRANSFER_VNM}, method = RequestMethod.POST)
    public ResponseEntity<?> listCashTransfer(HttpServletRequest request, @RequestBody CashTransferModel requestSearchIn) {
        String nomeMetodo = ".listCashTransfer() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<CashTransferModel> list = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestSearchIn);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARCH_LIST_CASH_TRANSFER_VNM;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception e) {
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    private void validateSearchListCashTransfer(CashTransferModel requestSearchIn) throws Exception {
        if (!CommonUtils.StringUtilIsNotEmpty(requestSearchIn.getFromDate())) {
            throw new Exception(Constants.TRANSFER_VNM_FROM_DATE_REQUIRED);
        }
        if (!CommonUtils.StringUtilIsNotEmpty(requestSearchIn.getToDate())) {
            throw new Exception(Constants.TRANSFER_VNM_TO_DATE_REQUIRED);
        }
    }

    @RequestMapping(value = {Constants.ACTION_GET_AGENCY_INFO}, method = RequestMethod.POST)
    public ResponseEntity<?> getAgencyInfo(HttpServletRequest request, @RequestBody CashTransferModel requestSearchIn) {
        String nomeMetodo = ".getAgencyInfo() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        CashTransferModel agencyInfo = null;
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestSearchIn);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_AGENCY_INFO;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    agencyInfo = jsonMapper.readValue(tmp.toString(), new TypeReference<CashTransferModel>() {
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
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<CashTransferModel>(agencyInfo, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_CREATE_CASH_TRANSFER}, method = RequestMethod.POST)
    public ResponseEntity<?> createCashTransfer(HttpServletRequest request, @RequestBody CashTransferModel requestSearchIn) {
        String nomeMetodo = ".createCashTransfer() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        MessagesResponse mess = new MessagesResponse();
        try {
            mess = cashTransferVNMBusiness.createCashTransfer(request, requestSearchIn);
        } catch (Exception e) {
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_APPROVE_CASH_TRANSFER}, method = RequestMethod.POST)
    public ResponseEntity<?> approveCashTranferMoney(HttpServletRequest request, @RequestBody CashTransferModel requestSearchIn) {
        String nomeMetodo = ".approveCashTranferMoney() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        ResponseEntity<?> response = null;
        try {
            response = cashTransferVNMBusiness.approveCashTranferMoney(request, requestSearchIn);
        } catch (Exception e) {
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.ACTION_REJECT_CASH_TRANSFER}, method = RequestMethod.POST)
    public ResponseEntity<?> rejectCashTranferMoney(HttpServletRequest request, @RequestBody CashTransferModel requestSearchIn) {
        String nomeMetodo = ".rejectCashTranferMoney() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        ResponseEntity<?> response = cashTransferVNMBusiness.rejectCashTranferMoney(request, requestSearchIn);
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

}
