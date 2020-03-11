package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vn.com.fis.business.mnpcm.MnpAssignStaffBusiness;
import vn.com.fis.model.mnpcm.MnpPreRequest;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class MnpAssignStaffController {

    @Autowired
    private MnpAssignStaffBusiness mnpAssignStaffBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(MnpAssignStaffController.class);

    @RequestMapping(value = {Constants.URL_ASSIGN_LIST_PREORDER}, method = RequestMethod.PUT)
    public ResponseEntity<?> getListPreOrder(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".getListPreOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpAssignStaffBusiness.getListPreRequest(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @GetMapping(value = {Constants.URL_STAFF_LIST})
    @ResponseBody
    public ResponseEntity<?> getListStaff(HttpServletRequest request) {
        String nomeMetodo = ".getListStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpAssignStaffBusiness.getListStaff(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_ASSIGN_STAFF}, method = RequestMethod.PUT)
    public ResponseEntity<?> assignStaff(HttpServletRequest request, @RequestBody List<MnpPreRequest> listMnpPreRequest) {
        String nomeMetodo = ".assignStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpAssignStaffBusiness.assignStaff(request, listMnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_STAFF_LIST_LOCATION}, method = RequestMethod.PUT)
    public ResponseEntity<?> getListStaffLocation(HttpServletRequest request, @RequestBody MnpPreRequest mnpPreRequest) {
        String nomeMetodo = ".assignStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = mnpAssignStaffBusiness.getListStaffLocation(request, mnpPreRequest);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
}
