package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.business.mnpcm.NPRBusiness;
import vn.com.fis.model.mnpcm.MnpPreOrderTransType;
import vn.com.fis.model.mnpcm.MnpPreRequest;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
public class NPRController {

    @Autowired
    NPRBusiness nprBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(NPRController.class);

    @PostMapping(value = Constants.URL_NPR_UPLOAD)
    @ResponseBody
    public ResponseEntity<?> UploadFile(MultipartHttpServletRequest request) {
        String nomeMetodo = ".UploadFile() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.UploadFile(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @PostMapping(value = Constants.URL_NPR_UPLOAD_IMAGE)
    @ResponseBody
    public ResponseEntity<?> UploadFileImage(MultipartHttpServletRequest request) {

        String nomeMetodo = ".UploadFileImage() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.UploadFileImage(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @PostMapping(value = Constants.URL_CREATE_NPR_PREPAID)
    public ResponseEntity<?> createTicketNPRPrepaid(HttpServletRequest request, @RequestBody NPR nprRequest) {
        String nomeMetodo = ".createTicketNPRPrepaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.createTicketNPRPrepaid(request, nprRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;

    }

    @PostMapping(value = Constants.URL_CREATE_NPR_POSTPAID)
    public ResponseEntity<?> createTicketNPRPostpaid(HttpServletRequest request, @RequestBody NPR nprRequest) {
        String nomeMetodo = ".createTicketNPRPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.createTicketNPRPostpaid(request, nprRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;

    }

    //DatBD2 update DKCM theo danh sach
    @PostMapping(value = Constants.URL_CREATE_NPR_LIST_PREPAID)
    public ResponseEntity<?> createTicketNprListPrepaid(HttpServletRequest request, @RequestBody NPR nprRequest) {
        String nomeMetodo = ".createTicketNprListPrepaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.createTicketNprListPrepaid(request, nprRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @PostMapping(value = Constants.URL_CREATE_NPR_LIST_POSTPAID)
    public ResponseEntity<?> createTicketNprListPostpaid(HttpServletRequest request, @RequestBody NPR nprRequest) {
        String nomeMetodo = ".createTicketNprListPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.createTicketNprListPostpaid(request, nprRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @PostMapping(value = Constants.URL_NPR_LIST_SUBSCRIBER_FILE)
    @ResponseBody
    public ResponseEntity<?> getListSubscriberTemplate(MultipartHttpServletRequest request) throws IOException {
        String nomeMetodo = ".getListSubscriberTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.getListSubscriberTemplatePrepaid(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @PostMapping(value = Constants.URL_NPR_LIST_SUBSCRIBER_POST_FILE)
    @ResponseBody
    public ResponseEntity<?> getListSubscriberTemplatePostpaid(MultipartHttpServletRequest request) throws IOException {
        String nomeMetodo = ".getListSubscriberTemplatePostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.getListSubscriberTemplatePostpaid(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.CHECK_CUSTOMER_EXIST_EPOS)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    //DatBD2
    public ResponseEntity<?> checkCustomerExistInEpos(HttpServletRequest request, @RequestParam("docNumberCustomer") String docNumberCustomer,
                                                      @RequestParam("customerTypeIn") String customerTypeIn, @RequestParam("typeCard") String typeCard) {
        String nomeMetodo = ".checkCustomerExistInEpos() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.checkCustomerExistInEpos(request, docNumberCustomer, customerTypeIn, typeCard);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.CHECK_CUSTOMER_EXIST_TIBCO)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> checkCustomerExistPostpaid(HttpServletRequest request, @RequestParam("customerTypeIn") String customerTypeIn, @RequestParam("idNum") String idNum,
                                                        @RequestParam("taxCode") String taxCode) {
        String nomeMetodo = ".checkCustomerExistPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.checkCustomerExistPostpaid(request, customerTypeIn, idNum, taxCode);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.CHECK_COMPANY_EXIST_EPOS)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> checkCompanyExistEpos(HttpServletRequest request, @RequestParam("taxcode") String taxcode) {
        String nomeMetodo = ".checkCompanyExistEpos() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.checkCompanyExistEpos(request, taxcode);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.CHECK_COMPANY_EXIST_TIBCO)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> checkCompanyExistPostpaid(HttpServletRequest request, @RequestParam("customerTypeIn") String customerTypeIn, @RequestParam("idNum") String idNum,
                                                       @RequestParam("taxCode") String taxCode) {
        String nomeMetodo = ".checkCompanyExistPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.checkCompanyExistPostpaid(request, customerTypeIn, idNum, taxCode);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.CHECK_SUBSCRIBER_NUMBER_ACTIVE_EPOS)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> checkSubscriberNumberActiveEpos(HttpServletRequest request, @RequestParam("msisdn") String msisdnIn) {
        String nomeMetodo = ".checkSubscriberNumberActiveEpos() ";

        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.checkSubscriberNumberActiveEpos(request, msisdnIn);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @PostMapping(value = Constants.URL_CREATE_NPR_PREPAID_BUNDLE)
    public ResponseEntity<?> createTicketNPRPrepaidBundle(HttpServletRequest request, @RequestBody NPR nprRequest) {
        String nomeMetodo = ".createTicketNPRPrepaidBundle() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.createTicketNPRPrepaidBundle(request, nprRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_SEARCH_GROUP_MNP_ORDER_PREPAY}, method = RequestMethod.PUT)
    public ResponseEntity<?> searchGroupMnpOrderTrans(HttpServletRequest request, @RequestBody MnpPreRequest input) {
        String nomeMetodo = ".searchGroupMnpOrderPrepay() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.searchGroupMnpOrderPrepay(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_UPDATE_GROUP_MNP_ORDER_PREPAY}, method = RequestMethod.PUT)
    public ResponseEntity<?> updateGroupMnpOrderTrans(HttpServletRequest request, @RequestParam("TRANS_STATUS") String transStatus, @RequestParam("ISDN") String isdn) {
        String nomeMetodo = ".updatePreOrderTrans() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.updateGroupMnpOrderPrepay(request, transStatus, isdn);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_INSERT_GROUP_MNP_ORDER_PREPAY}, method = RequestMethod.PUT)
    public ResponseEntity<?> insertGroupMnpOrderTrans(HttpServletRequest request, @RequestBody MnpPreOrderTransType input) {
        String nomeMetodo = ".insertPreOrderTrans() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = nprBusiness.insertGroupMnpOrderPrepay(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

}
