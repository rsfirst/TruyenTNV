package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.com.fis.business.mnpcm.MnpConfirmPortOutBusiness;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MnpConfirmPortOutController {


    private static final Logger LOG = LoggerFactory.getLogger(MnpConfirmPortOutController.class);

    @Autowired
    MnpConfirmPortOutBusiness mnpConfirmPortOutBusiness;


    @RequestMapping(value = Constants.URL_MNP_PORT_OUT_LIST_SUBSCRIBER)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listSubscriberPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listSubscriberPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.listSubscriberPortOutNormal(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_MNP_PORT_OUT_LIST_SUBSCRIBER_NICE_NUMBER)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listSubscriberPortOutNiceNumber(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listSubscriberPortOutNiceNumber() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.listSubscriberPortOutNiceNumber(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_MNP_PORT_OUT_ACCEPT)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> sendConfirmAcceptPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".sendConfirmAcceptPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.sendConfirmAcceptPortOut(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_MNP_PORT_OUT_REJECT)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> sendConfirmRejectPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".sendConfirmRejectPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.sendConfirmRejectPortOut(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_MNP_CONFIRM_REVERSAL_LIST_SUBSCRIBER)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.MNP_CONFIRM_REVERSAL + "')")
    @ResponseBody
    public ResponseEntity<?> listSubscriberConfirmReversalOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listSubscriberConfirmReversalOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.listSubscriberConfirmReversalOut(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_MNP_CONFIRM_REVERSAL_ACCEPT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.MNP_CONFIRM_REVERSAL + "')")
    @ResponseBody
    public ResponseEntity<?> sendAcceptReversalPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".sendAcceptReversalPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.sendConfirmAcceptReversal(request, searchDataInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_MNP_CONFIRM_REVERSAL_REJECT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.MNP_CONFIRM_REVERSAL + "')")
    @ResponseBody
    public ResponseEntity<?> sendRejectReversalPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".sendRejectReversalPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpConfirmPortOutBusiness.sendConfirmRejectReversal(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

}
