package vn.com.fis.controller.css;

import com.fss.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vn.com.fis.business.css.PostPaidCommonBusiness;
import vn.com.fis.hcwml.telecom.intec.Customer;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.Subscriber;
import vn.com.fis.tibco.model.entity.Product;
import vn.com.fis.tibco.model.entity.Service;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * vn.com.fis.branded_shop.controller.PostPaidCommonController
 * by sondt18
 * at 07/01/2019 5:36 PM
 */
@Controller
@RequestMapping("/bs/PostPaidCommon")
public class PostPaidCommonController {
    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    PostPaidCommonBusiness postPaidCommonBusiness;

    @RequestMapping(value = {"/getGl_Code"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> getGl_Code(HttpServletRequest request, Object[][] oParam) {
        String nomeMetodo = ".getGl_Code() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(postPaidCommonBusiness.getGl_Code(request, oParam), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/getPackageClass"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> getPackageClass(HttpServletRequest request) {
        String nomeMetodo = ".getPackageClass() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(postPaidCommonBusiness.getPackageClass(request), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/checkExistRequest"}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> checkExistRequest(HttpServletRequest request, @RequestParam(value = "mdn") String mdn) {
        String nomeMetodo = ".checkExistRequest() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(postPaidCommonBusiness.checkExistRequest(request, mdn), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/checkPersonIDISDN"}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> checkPersonIDISDN(HttpServletRequest request, @RequestParam(value = "strPer") String strPer, @RequestParam(value = "strISDN") String strISDN) {
        String nomeMetodo = ".checkPersonIDISDN() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(postPaidCommonBusiness.checkPersonIDISDN(request, strPer, strISDN), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/getApParam"}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> getApParam(HttpServletRequest request, @RequestParam(value = "paramType") String paramType, @RequestParam(value = "paramName") String paramName) {
        String nomeMetodo = ".getApParam() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            return new ResponseEntity(postPaidCommonBusiness.getApParam(request, paramType, paramName), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<>(mess, HttpStatus.OK);
        }
    }

    @RequestMapping(value = {"/updateExistReqPre"}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> updateExistReqPre(HttpServletRequest request, @RequestParam(value = "mdn") String mdn, @RequestParam(value = "staffCode") String staffCode) {
        String nomeMetodo = ".updateExistReqPre()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            mess = postPaidCommonBusiness.updateExistRequestPrepaid(request, mdn, staffCode);
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
        }
        return new ResponseEntity<>(mess, HttpStatus.OK);
    }

    @RequestMapping(value = {"/addNewConnect"}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public @ResponseBody
    ResponseEntity<?> addNewConnect(HttpServletRequest request, @RequestBody Map<String, Object> mapParam) {
        String nomeMetodo = ".addNewConnect()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        Product product = new Product();
        ResponseEntity respone=null;
        try {
        	respone = postPaidCommonBusiness.addNewConnect(request, mapParam);
            return respone;
        } catch (Exception e) {
            logger.error(logger.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
        }
        return new ResponseEntity<>(mess, HttpStatus.OK);
    }
}
