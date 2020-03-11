package vn.com.fis.controller.css;

import java.util.ArrayList;
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

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ServiceType;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
@RequestMapping("/bs/VasTable")
public class VasTableController {

    private static final Logger LOG = LoggerFactory.getLogger(VasTableController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = {"/getServiceType"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER +
            "')")
    public ResponseEntity<?> getServiceType(HttpServletRequest request) {
        String nomeMetodo = ".getServiceType() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ServiceType> objList = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + "/bs/VasTable/getServiceType";
            String tmp = webService.apiServiceMethodGET(request, url, "", "");
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ServiceType>>() {
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
            mess.setCode("ERROR_get_Service_Type");
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ServiceType>>(objList, HttpStatus.OK);
    }

}
