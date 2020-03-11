package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import vn.com.fis.business.mnpcm.MnpPreRequestBusiness;
import vn.com.fis.model.mnpcm.MnpPreRequest;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MnpPreRequestController {

    @Autowired
    MnpPreRequestBusiness mnpPreRequestBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(MnpPreRequestController.class);

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_LIST}, method = RequestMethod.PUT)
    public ResponseEntity<?> getListPreRequest(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".getListPreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.getListPreRequest(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_DETAIL}, method = RequestMethod.PUT)
    public ResponseEntity<?> getPreRequestById(HttpServletRequest request, @RequestParam("preId") String preId) {
        String nomeMetodo = ".getPreRequestById() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.getPreRequestById(request, preId);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_CREATE}, method = RequestMethod.PUT)
    public ResponseEntity<?> createPreRequest(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".createPreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.createMnpPreRequestDB(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_UPDATE}, method = RequestMethod.PUT)
    public ResponseEntity<?> updatePreRequest(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".updatePreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.updateMnpPreRequestDB(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_CHECK_FINAL}, method = RequestMethod.PUT)
    public ResponseEntity<?> checkFinalPreRequest(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".checkFinalPreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.checkMnpPreRequestDB(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_DELETE}, method = RequestMethod.PUT)
    public ResponseEntity<?> deletePreRequest(HttpServletRequest request, @RequestBody String preId) {
        String nomeMetodo = ".deletePreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.deleteMnpPreRequestDB(request, preId);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_UPDATE_STAFF_PREORDER}, method = RequestMethod.PUT)
    public ResponseEntity<?> updateStaffPreRequest(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".updateStaffPreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.updateStaffPreRequestDB(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.ACTION_LOAD_STAFF}, method = RequestMethod.PUT)
    public ResponseEntity<?> loadStaff(HttpServletRequest request) {
        String nomeMetodo = ".loadStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);

        ResponseEntity<?> listSource = mnpPreRequestBusiness.loadStaffMicrosite(request);

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return listSource;
    }

    @RequestMapping(value = {Constants.URL_PREORDER_INFORMATION_CHECK_TRAN_STATUS}, method = RequestMethod.PUT)
    public ResponseEntity<?> checkTranStatusPreRequest(HttpServletRequest request, @RequestBody String preId) {
        String nomeMetodo = ".checkTranStatusPreRequest() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpPreRequestBusiness.checkMnpPreRequestTranStatus(request, preId);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
}
