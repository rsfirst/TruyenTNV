package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import vn.com.fis.business.mnpcm.PreOrderSraffLocationBusiness;
import vn.com.fis.model.mnpcm.MnpStaffLocationType;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class MnpPreOrderSraffLocationController {

    @Autowired
    PreOrderSraffLocationBusiness sraffLocationBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(MnpPreOrderSraffLocationController.class);

    @RequestMapping(value = {Constants.URL_Staff_ITEM_LIST_GROUP_MNP}, method = RequestMethod.GET)
    public ResponseEntity<?> getListSraffLocation(HttpServletRequest request) {
        String nomeMetodo = ".getListStaffLocation() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = sraffLocationBusiness.getListSraffLocation(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_Staff_ITEM_SEARCH_GROUP_MNP}, method = RequestMethod.PUT)
    public ResponseEntity<?> searchListSraffLocation(HttpServletRequest request, @RequestBody MnpStaffLocationType input) {
        String nomeMetodo = ".onSearchStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = sraffLocationBusiness.searchListSraffLocation(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_Staff_ITEM_INSERT_GROUP_MNP}, method = RequestMethod.PUT)
    public ResponseEntity<?> insertListSraffLocation(HttpServletRequest request, @RequestBody List<MnpStaffLocationType> input) {
        String nomeMetodo = ".insertstafflocation() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = sraffLocationBusiness.insertListSraffLocation(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_Staff_ITEM_DELETE_GROUP_MNP}, method = RequestMethod.PUT)
    public ResponseEntity<?> deleteGroupMnpOrderStatus(HttpServletRequest request, @RequestBody List<MnpStaffLocationType> input) {
        String nomeMetodo = ".deleteStafflocation() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = sraffLocationBusiness.deleteListSraffLocation(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

}
