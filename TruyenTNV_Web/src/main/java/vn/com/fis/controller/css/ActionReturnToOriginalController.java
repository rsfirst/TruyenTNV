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
import vn.com.fis.business.mnpcm.ActionReturnToOriginalBusiness;
import vn.com.fis.model.mnpcm.NprRerverSalOutput;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;


@Controller
public class ActionReturnToOriginalController {

    private static final Logger LOG = LoggerFactory.getLogger(ActionReturnToOriginalController.class);

    @Autowired
    ActionReturnToOriginalBusiness actionReversalToOriginalBusiness;

    @RequestMapping(value = Constants.RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_NPR_RETURN)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListReversalNotification(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInputModel) {
        String nomeMetodo = ".getListReversalNotification() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = actionReversalToOriginalBusiness.getListReturnNotification(request, searchDataInputModel);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_SUBSCRIBER)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListSubscriberNotification(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInputModel) {
        String nomeMetodo = ".getListSubscriberNotification() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = actionReversalToOriginalBusiness.getListSubscriberNotification(request, searchDataInputModel);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.RETURN_NOTIFICATION_ORIGINAL_CHECK_SUBSCRIBER_REVERSED)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> checkSusbcriberReversedCompleted(HttpServletRequest request, @RequestBody NprRerverSalOutput searchDataInputModel) {
        String nomeMetodo = ".checkSusbcriberReversedCompleted() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        String msisdn = CommonUtils.StringUtilNVL(searchDataInputModel.getMsisdn());
        ResponseEntity<?> response = actionReversalToOriginalBusiness.checkSusbcriberReversedCompleted(request, msisdn);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.RETURN_NOTIFICATION_NETWORK_SEND_RETURN_REQUEST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> sendReturnRequest(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInputModel) {
        String nomeMetodo = ".sendReturnRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = actionReversalToOriginalBusiness.sendReturnRequest(request, searchDataInputModel);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

}
