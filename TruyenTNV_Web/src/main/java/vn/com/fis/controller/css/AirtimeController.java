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
import vn.com.fis.business.css.AirtimeBusiness;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * vn.com.fis.branded_shop.controller.AirtimeController
 * by sondt18
 * at 19/02/2019 4:33 PM
 */
@Controller
@RequestMapping("/bs/airtime")
public class AirtimeController {
    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    AirtimeBusiness airtimeBusiness;

    @RequestMapping(value = {"/getListISDNFromFileTemplate"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getListISDNFromFileTemplate(MultipartHttpServletRequest request) {
        String nomeMetodo = ".getListISDNFromFileTemplate() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(airtimeBusiness.getListISDNFromFileTemplate(request), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/retailAirtime"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> retailAirtime(HttpServletRequest request, @RequestBody Map<String, String> requestInput) {
        String nomeMetodo = ".retailAirtime() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(airtimeBusiness.retailAirtime(request, requestInput), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/rechargeByBatch"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> rechargeByBatch(HttpServletRequest request, @RequestBody Map<String, Object> requestInput) {
        String nomeMetodo = ".rechargeByBatch() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(airtimeBusiness.rechargeByBatch(request, requestInput), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }
}
