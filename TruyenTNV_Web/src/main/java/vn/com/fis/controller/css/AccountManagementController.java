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
import vn.com.fis.model.css.ChangeAgentAccountIn;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.PretupBasicOut;
import vn.com.fis.model.css.ReasonObject;
import vn.com.fis.utils.css.*;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
public class AccountManagementController {

    private static final Logger LOG = LoggerFactory.getLogger(AccountManagementController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;
	@RequestMapping("/bs/formChangeAccount")
	public String formChangeAccount()
	{
		
		return "css/accountManagement/formChangeAccount";
	}
	
	@RequestMapping("/bs/formTransferMoney")
	public String formTransferMoney()
	{
		
		return "css/accountManagement/formTransferMoney";
	}
    @RequestMapping(value = {Constants.ACCOUNT_MANAGEMENT_LOAD_REASON}, method = RequestMethod.POST)
    public ResponseEntity<?> getReason(HttpServletRequest request) {
        String nomeMetodo = "ACCOUNT_MANAGEMENT_LOAD_REASON() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ReasonObject> listReason = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACCOUNT_MANAGEMENT_LOAD_REASON;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonObject>>() {
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
            mess.setMessages("ERROR: " + e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ReasonObject>>(listReason, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACCOUNT_MANAGEMENT_EXECUTE_CHANGE_ACCOUNT}, method = RequestMethod.PUT)
    public ResponseEntity<?> executeChangeAccount(HttpServletRequest request, @RequestBody ChangeAgentAccountIn input) {
        String nomeMetodo = "ACCOUNT_MANAGEMENT_EXECUTE_CHANGE_ACCOUNT() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PretupBasicOut pretupOutout = new PretupBasicOut();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACCOUNT_MANAGEMENT_EXECUTE_CHANGE_ACCOUNT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    pretupOutout = jsonMapper.readValue(tmp.toString(), new TypeReference<PretupBasicOut>() {
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
            mess.setMessages("ERROR: " + e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<PretupBasicOut>(pretupOutout, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACCOUNT_MANAGEMENT_TRANSFER_MONEY}, method = RequestMethod.GET)
    public ResponseEntity<?> transferMoney(HttpServletRequest request, @RequestParam(name = "sourceIsdn") String sourceIsdn,
                                           @RequestParam(name = "mpin") String mpin, @RequestParam(name = "targetIsdn") String targetIsdn,
                                           @RequestParam(name = "amount") String amount) {
        String nomeMetodo = ".transferMoney() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + " Input " + " sourceIsdn = " + sourceIsdn + "; mpin = " + mpin
                + "; targetIsdn = " + targetIsdn + "; amount = " + amount);

        MessagesResponse mess = new MessagesResponse();
        PretupBasicOut pretupOutout = new PretupBasicOut();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("sourceIsdn", sourceIsdn);
            params.put("mpin", mpin);
            params.put("targetIsdn", targetIsdn);
            params.put("amount", amount);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACCOUNT_MANAGEMENT_TRANSFER_MONEY;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    pretupOutout = jsonMapper.readValue(tmp.toString(), new TypeReference<PretupBasicOut>() {
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
            mess.setMessages("ERROR: " + e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

            LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<PretupBasicOut>(pretupOutout, HttpStatus.OK);
    }
}
