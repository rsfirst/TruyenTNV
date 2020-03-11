package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.business.css.AgentBusiness;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/bs/agent")
public class AgentController {
    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    AgentBusiness agentBusiness;

    @RequestMapping(value = {"/getListFromFileTemplate"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getListFromFileTemplate(MultipartHttpServletRequest request) {
        String nomeMetodo = ".getListFromFileTemplate() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(agentBusiness.getListFromFileTemplate(request), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/submitData"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> submitData(HttpServletRequest request, @RequestBody List<String> requestInput) {
        String nomeMetodo = ".submitData() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(agentBusiness.submitData(request, requestInput), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

}
