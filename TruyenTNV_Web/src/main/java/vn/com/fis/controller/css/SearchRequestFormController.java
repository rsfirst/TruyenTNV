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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
@RequestMapping("/bs/SearchRequestForm")
public class SearchRequestFormController {

    private static final Logger LOG = LoggerFactory.getLogger(SearchRequestFormController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = {"/checkExist"}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.POSTPAID_MANAGER +
            "')")
    public @ResponseBody
    ResponseEntity<?> checkExist(HttpServletRequest request,
                                 @RequestParam(value = "mdn") String mdn) {
        String nomeMetodo = ".checkExist() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        MessagesResponse msgResponse = new MessagesResponse();
        List lstReturn = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("mdn", mdn);
            String url = ev.getProperty("login.url") + "/bs/SearchRequestForm/checkExist";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstReturn = jsonMapper.readValue(tmp.toString(), new TypeReference<List>() {
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
        return new ResponseEntity<List>(lstReturn, HttpStatus.OK);
    }

    @RequestMapping(value = {"/onCancel"}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.POSTPAID_MANAGER +
            "')")
    public @ResponseBody
    ResponseEntity<?> onCancel(HttpServletRequest request,
                               @RequestParam(value = "msisdn") String msisdn, @RequestParam(value = "executer") String executer) {
        String nomeMetodo = ".onCancel() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse msgResponse = new MessagesResponse();
        Integer intReturn = 0;
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("msisdn", msisdn);
            params.put("executer", executer);
            String url = ev.getProperty("login.url") + "/bs/SearchRequestForm/onCancel";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    intReturn = jsonMapper.readValue(tmp.toString(), new TypeReference<Integer>() {
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
        return new ResponseEntity<Integer>(intReturn, HttpStatus.OK);
    }

}
