package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import vn.com.fis.business.mnpcm.PreOrderChannelBusiness;
import vn.com.fis.model.mnpcm.MnpPreOrderChannelType;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MnpPreOrderChannelController {

    @Autowired
    PreOrderChannelBusiness channelBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(MnpPreOrderChannelController.class);

    @RequestMapping(value = {Constants.URL_CHANNEL_ITEM_LIST_GROUP_MNP_ORDER_STATUS}, method = RequestMethod.GET)
    public ResponseEntity<?> getListSpecNumGroupOrderStatus(HttpServletRequest request) {
        String nomeMetodo = ".getListNumberSpecTypeOrderStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = channelBusiness.getListSpecNumGroupOrderStatus(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CHANNEL_ITEM_SEARCH_GROUP_MNP_ORDER_STATUS}, method = RequestMethod.PUT)
    public ResponseEntity<?> searchSpecNumGroupOrderStatus(HttpServletRequest request, @RequestBody MnpPreOrderChannelType input) {
        String nomeMetodo = ".searchGroupMnpOrderStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = channelBusiness.searchSpecNumGroupOrderStatus(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CHANNEL_ITEM_CREATE_GROUP_MNP_ORDER_STATUS}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_GROUP_MDN_REJECT + "')")
    public ResponseEntity<?> createGroupMnpOrderStatus(HttpServletRequest request, @RequestBody MnpPreOrderChannelType input) {
        String nomeMetodo = ".createGroupMnpOrderStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = channelBusiness.createGroupMnpOrderStatus(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CHANNEL_ITEM_UPDATE_GROUP_MNP_ORDER_STATUS}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_GROUP_MDN_REJECT + "')")
    public ResponseEntity<?> updateGroupMnpOrderStatus(HttpServletRequest request, @RequestBody MnpPreOrderChannelType input) {
        String nomeMetodo = ".onUpdateMnpOrderChannel() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = channelBusiness.onUpdateMnpOrderChannel(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CHANNEL_ITEM_DELETE_GROUP_MNP_ORDER_STATUS}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_GROUP_MDN_REJECT + "')")
    public ResponseEntity<?> deleteGroupMnpOrderStatus(HttpServletRequest request, @RequestBody MnpPreOrderChannelType input) {
        String nomeMetodo = ".deleteGroupMnpOrderStatus() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = channelBusiness.deleteGroupMdnReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
}
