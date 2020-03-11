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
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.business.mnpcm.CategoryBusiness;
import vn.com.fis.model.mnpcm.*;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class CategoryController {

    @Autowired
    CategoryBusiness categoryBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(CategoryController.class);

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_LIST_COS_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_COS_REJECT + "')")
    public ResponseEntity<?> getListCosReject(HttpServletRequest request, @RequestBody MnpCosRejectModel input) {
        String nomeMetodo = ".getListCosReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListCosReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_CREATE_COS_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_COS_REJECT + "')")
    public ResponseEntity<?> createMnpCosRejectDB(HttpServletRequest request, @RequestBody MnpCosRejectModel input) {
        String nomeMetodo = ".createMnpCosRejectDB() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.createMnpCosRejectDB(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_DELETE_COS_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_COS_REJECT + "')")
    public ResponseEntity<?> deleteCosReject(HttpServletRequest request, @RequestBody MnpCosRejectModel input) {
        String nomeMetodo = ".deleteCosReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.deleteCosReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_LIST_SPEC_NUM_GROUP}, method = RequestMethod.GET)
    public ResponseEntity<?> getListSpecNumGroup(HttpServletRequest request) {
        String nomeMetodo = ".getListSpecNumGroup() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListSpecNumGroup(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_LIST_GROUP_MDN_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_GROUP_MDN_REJECT + "')")
    public ResponseEntity<?> getGroupMdnReject(HttpServletRequest request, @RequestBody MnpMsisdnGroupRejectModel input) {
        String nomeMetodo = ".getGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListGroupMdnReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_CREATE_GROUP_MDN_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_GROUP_MDN_REJECT + "')")
    public ResponseEntity<?> createGroupMdnReject(HttpServletRequest request, @RequestBody MnpMsisdnGroupRejectModel input) {
        String nomeMetodo = ".createGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.createGroupMdnReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_DELETE_GROUP_MDN_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_GROUP_MDN_REJECT + "')")
    public ResponseEntity<?> deleteGroupMdnReject(HttpServletRequest request, @RequestBody MnpMsisdnGroupRejectModel input) {
        String nomeMetodo = ".deleteGroupMdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.deleteGroupMdnReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_MSISDN_REJECT_LIST_TEMPLATE}, method = RequestMethod.POST)
    public ResponseEntity<?> getListMissdnRejectFromFileTemplate(MultipartHttpServletRequest request) throws Exception {
        String nomeMetodo = ".getListMissdnRejectFromFileTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListMissdnRejectFromFileTemplate(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_LIST_MSISDN_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_MDN_REJECT + "')")
    public ResponseEntity<?> getListMsisdnReject(HttpServletRequest request, @RequestBody MnpMsisdnRejectModel input) {
        String nomeMetodo = ".getListMsisdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListMsisdnReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_CREATE_MSISDN_REJECT}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_MDN_REJECT + "')")
    public ResponseEntity<?> createMsisdnReject(HttpServletRequest request, @RequestBody List<MnpMsisdnRejectModel> listMsisdnReject) {
        String nomeMetodo = ".createMsisdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.createMsisdnReject(request, listMsisdnReject);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_DELETE_MSISDN_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_MDN_REJECT + "')")
    public ResponseEntity<?> deleteMsisdnReject(HttpServletRequest request, @RequestBody MnpMsisdnRejectModel input) {
        String nomeMetodo = ".deleteMsisdnReject() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.deleteMsisdnReject(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    //DatBD2 update
    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_LIST_MSISDN_WHITE_LIST}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_MDN_WHITELIST + "')")
    public ResponseEntity<?> getListMsisdnWhiteList(HttpServletRequest request, @RequestBody MnpMsisdnWhiteListModel input) {
        String nomeMetodo = ".getListMsisdnWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListMsisdnWhiteList(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_CREATE_MSISDN_WHITE_LIST}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_MDN_WHITELIST + "')")
    public ResponseEntity<?> createMsisdnWhiteList(HttpServletRequest request, @RequestBody List<MnpMsisdnWhiteListModel> listMsisdnReject) {
        String nomeMetodo = ".createMsisdnWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.createMsisdnWhiteList(request, listMsisdnReject);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_DELETE_MSISDN_WHITE_LIST}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_MDN_WHITELIST + "')")
    public ResponseEntity<?> deleteMsisdnWhiteList(HttpServletRequest request, @RequestBody MnpMsisdnWhiteListModel input) {
        String nomeMetodo = ".deleteMsisdnWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.deleteMsisdnWhiteList(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
    //end

    //DatBD2 update PCR208
    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_LIST_VIP_WHITE_LIST}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_VIP_WHITELIST + "')")
    public ResponseEntity<?> getListVipWhiteList(HttpServletRequest request, @RequestBody MnpVipWhiteListModel input) {
        String nomeMetodo = ".getListVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListVipWhiteList(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_CREATE_VIP_WHITE_LIST}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_VIP_WHITELIST + "')")
    public ResponseEntity<?> createVipWhiteList(HttpServletRequest request, @RequestBody List<MnpVipWhiteListModel> listInput) {
        String nomeMetodo = ".createVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.createVipWhiteList(request, listInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_DELETE_VIP_WHITE_LIST}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_VIP_WHITELIST + "')")
    public ResponseEntity<?> deleteVipWhiteList(HttpServletRequest request, @RequestBody List<MnpVipWhiteListModel> input) {
        String nomeMetodo = ".deleteVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.deleteVipWhiteList(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }


    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_RE_ISSUE_VIP_WHITE_LIST}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.CATEGORY_VIP_WHITELIST + "')")
    public ResponseEntity<?> reIssueVipWhiteList(HttpServletRequest request, @RequestBody List<MnpVipWhiteListModel> input) {
        String nomeMetodo = ".reIssueVipWhiteList() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.reIssueVipWhiteList(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
    //end

    @RequestMapping(value = {Constants.URL_CATEGORY_ITEM_VIP_WHITE_LIST_TEMPLATE}, method = RequestMethod.POST)
    public ResponseEntity<?> getListVipWhiteListFromFileTemplate(MultipartHttpServletRequest request) throws Exception {
        String nomeMetodo = ".getListVipWhiteListFromFileTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = categoryBusiness.getListVipListFromFileTemplate(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
    

	@RequestMapping("/bs/categoryMsisdnReject")
	public String categoryMsisdnReject()
	{
		return "css/category/categoryMsisdnReject";
	}
	
	@RequestMapping("/bs/categoryCosReject")
	public String categoryCosReject()
	{
		return "css/category/categoryCosReject";
	}
	
	@RequestMapping("/bs/categoryGroupMdnReject")
	public String categoryGroupMdnReject()
	{
		return "css/category/categoryGroupMdnReject";
	}
	@RequestMapping("/bs/category/MapAgentStockBatchFile")
	public String MapAgentStockBatchFile()
	{
		return "css/category/MapAgentStockBatchFile";
	}
	
	
	//DatBD2 update
	@RequestMapping(value="/bs/categoryMsisdnWhiteList")
	public String categoryMsisdnWhiteList()
	{
		return "css/category/categoryMsisdnWhiteList";
	}
	//end DatBD2
	@RequestMapping(value="/bs/categoryVipWhiteList")
	public String categoryVipWhiteList()
	{
		return "css/category/categoryVipWhiteList";
	}
    
}
