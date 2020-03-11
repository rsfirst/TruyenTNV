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
import vn.com.fis.business.mnpcm.SearchAllInfomationNetworkTranferBusiness;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MnpNprControllerPortOut {


    private static final Logger LOG = LoggerFactory.getLogger(MnpNprControllerPortOut.class);

    @Autowired
    SearchAllInfomationNetworkTranferBusiness searchAllInfomationNetworkTranferBusiness;

    @RequestMapping(value = Constants.URL_LIST_NPR_PORT_OUT)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> listTransferNetworkPortOut(HttpServletRequest request, @RequestBody SearchDataInputModel violationInput) {
        String nomeMetodo = ".listTransferNetworkPortOut() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = searchAllInfomationNetworkTranferBusiness.getDataNPRPortOut(request, violationInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

}
