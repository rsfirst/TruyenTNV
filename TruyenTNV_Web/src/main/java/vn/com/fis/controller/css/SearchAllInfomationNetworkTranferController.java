package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.com.fis.business.mnpcm.SearchAllInfomationNetworkTranferBusiness;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
public class SearchAllInfomationNetworkTranferController {

    private static final Logger LOG = LoggerFactory.getLogger(SearchAllInfomationNetworkTranferController.class);

    @Autowired
    SearchAllInfomationNetworkTranferBusiness searchAllInfomationNetworkTranferBusiness;

    @RequestMapping(value = Constants.URL_LIST_TRANSFER_NETWORK_PORT_IN)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listTransferNetworkPortIn(HttpServletRequest request, @RequestBody SearchDataInputModel searchDataInput) {
        String nomeMetodo = ".listTransferNetworkPortIn() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getDataNPRPortInBusiness(request, searchDataInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_TRANSFER_NETWORK_PORT_OUT)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listTransferNetworkPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listTransferNetworkPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getDataNPRPortOut(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_NPR_CANCEL_RNO)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listNPRCancelRNO(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listNPRCancelRNO() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.listNPRCancelRNO(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_NPR_CANCEL_DNO)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listNPRCancelDNO(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listNPRCancelDNO() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.listNPRCancelDNO(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_NPR_CANCEL_DETAIL)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getNPRCancelDetail(HttpServletRequest request, @RequestParam("cchTransId") String cchTransId) {
        String nomeMetodo = ".getNPRCancelDetail() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getNPRCancelDetail(request, cchTransId);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_REVERSAL_SUBSCRIBER_DNO)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListReversalDNO(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".getListReversalDNO() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getListReversalDNO(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_REVERSAL_SUBCRIBER_VNM)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListReversalSubscriberVNM(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".getListReversalSubscriberVNM() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getListReversalSubscriberVNM(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_RETURN_ORIGINAL_NETWORK)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListReturnOrginalNetwork(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".getListReturnOrginalNetwork() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getListReturnOrginalNetwork(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_RETURN_SUBSCRIBER_VNM)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListReturnSubscriberVNM(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".getListReturnSubscriberVNM() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getListReturnSubscriberVNM(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_NPR_ACTION_AUDIT)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListNPRActionAuidtByNprId(HttpServletRequest request, @RequestParam("nprId") String nprId) {
        String nomeMetodo = ".getListNPRActionAuidtByNprId() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getListNPRActionAuidtByNprId(request, nprId);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.URL_LIST_ATTACHMENT_DATA)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getListAttachMentByNprId(HttpServletRequest request, @RequestParam("nprId") String nprId) {
        String nomeMetodo = ".getListAttachMentByNprId() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getListAttachMentByNprId(request, nprId);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

}
