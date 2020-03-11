package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import vn.com.fis.business.css.PostpaidBusiness;
import vn.com.fis.model.css.*;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class PostpaidController {

    @Autowired
    PostpaidBusiness postpaidBusiness;

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(PostpaidController.class);

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_GL_CODE}, method = RequestMethod.GET)
	//@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getListGLCode(HttpServletRequest request, @RequestParam(name = "codeName") String codeName) {
        String nomeMetodo = ".getListGLCode() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<GLCodeObject> listGLCode = new ArrayList<>();
        try {
            listGLCode = postpaidBusiness.getListGLCode(request, codeName);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<GLCodeObject>>(listGLCode, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_TYPE_CUST}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getPostpaidTypeCustomer(HttpServletRequest request) {
        String nomeMetodo = ".getPostpaidTypeCustomer() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ApDomainModel> listCustType = new ArrayList<>();
        try {
            listCustType = postpaidBusiness.getPostpaidTypeCustomer(request);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<ApDomainModel>>(listCustType, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_SERVICE_TYPE}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getPostpaidServiceType(HttpServletRequest request) {
        String nomeMetodo = ".getPostpaidServiceType() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ServiceTypeObject> listServiceType = new ArrayList<>();
        try {
            listServiceType = postpaidBusiness.getPostpaidServiceType(request);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<ServiceTypeObject>>(listServiceType, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_PERSON_TYPE}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getPostpaidPersonType(HttpServletRequest request) {
        String nomeMetodo = ".getPostpaidPersonType() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<PersonTypeObject> listPersonType = new ArrayList<>();
        try {
            listPersonType = postpaidBusiness.getPostpaidPersonType(request);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<PersonTypeObject>>(listPersonType, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_CUST_SEG}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getPostpaidCustomerSeg(HttpServletRequest request, @RequestParam(name = "customerSegCode") String customerSegCode) {
        String nomeMetodo = ".getPostpaidCustomerSeg() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ApDomainModel> listCustSeg = new ArrayList<>();
        try {
            listCustSeg = postpaidBusiness.getPostpaidCustomerSeg(request, customerSegCode);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<ApDomainModel>>(listCustSeg, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_PROVINCE}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getProvince(HttpServletRequest request) {
        String nomeMetodo = ".getProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ProvinceObject> listProvince = new ArrayList<>();
        try {
            listProvince = postpaidBusiness.getProvince(request);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<ProvinceObject>>(listProvince, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_DISTRICT}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getDistrict(HttpServletRequest request, @RequestParam(name = "provinceId") String provinceId) {
        String nomeMetodo = ".getDistrict() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<DistrictObject> listDistrict = new ArrayList<>();
        try {
            listDistrict = postpaidBusiness.getDistrict(request, provinceId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<DistrictObject>>(listDistrict, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_SEARCH_PERSON_PARENT}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getPersonPostpaidParent(HttpServletRequest request, @RequestParam(name = "companyName") String companyName, @RequestParam(name = "genderCode") String genderCode,
                                                     @RequestParam(name = "personType") String personType, @RequestParam(name = "idNum") String idNum, @RequestParam(name = "birthDate") String birthDate, @RequestParam(name = "taxCode") String taxCode) {
        String nomeMetodo = ".getPersonPostpaidParent() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<PostpaidPersonObject> resultListPerson = new ArrayList<>();
        try {
            resultListPerson = postpaidBusiness.getPersonPostpaidParent(request, companyName, genderCode, personType, idNum, birthDate, taxCode);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<PostpaidPersonObject>>(resultListPerson, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_SEARCH_PERSON_PARENT_BY_IDNUM_OR_TAXCODE}, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> searchPersonByTaxCodeOrIDNum(HttpServletRequest request, @RequestParam(name = "valueSearch") String valueSearch, @RequestParam(name = "isIdNum") boolean isIdNum) {
        String nomeMetodo = ".searchPersonByTaxCodeOrIDNum() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<PostpaidPersonObject> resultListPerson = new ArrayList<>();
        try {
            resultListPerson = postpaidBusiness.searchPersonByTaxCodeOrIDNum(request, valueSearch, isIdNum);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<PostpaidPersonObject>>(resultListPerson, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_ADD_NEW_PERSON_PARENT}, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> addNewPersonPostpaidParent(HttpServletRequest request, @RequestParam(name = "staffId") String staffId,
                                                        @RequestParam(name = "shopId") String shopId, @RequestBody List<PostpaidPersonObject> lstPerson) {
        String nomeMetodo = ".addNewPersonPostpaidParent() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PostpaidPersonObject resultPerson = new PostpaidPersonObject();
        try {
            resultPerson = postpaidBusiness.addNewPersonPostpaidParent(request, lstPerson, staffId, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<PostpaidPersonObject>(resultPerson, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_UPDATE_PERSON_PARENT}, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> updatePersonPostpaidParent(HttpServletRequest request, @RequestParam(name = "staffId") String staffId,
                                                        @RequestParam(name = "shopId") String shopId, @RequestBody List<PostpaidPersonObject> lstPerson) {
        String nomeMetodo = ".updatePersonPostpaidParent() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PostpaidPersonObject resultPerson = new PostpaidPersonObject();
        try {
            resultPerson = postpaidBusiness.updatePersonPostpaidParent(request, lstPerson, staffId, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<PostpaidPersonObject>(resultPerson, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_ADD_NEW_PERSON_CHILD}, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> addNewPersonPostpaidChild(HttpServletRequest request, @RequestParam(name = "staffId") String staffId,
                                                       @RequestParam(name = "shopId") String shopId, @RequestBody List<PostpaidPersonObject> lstPerson) {
        String nomeMetodo = ".addNewPersonPostpaidChild() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PostpaidPersonObject resultPerson = new PostpaidPersonObject();
        try {
            resultPerson = postpaidBusiness.addNewPersonPostpaidChild(request, lstPerson, staffId, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<PostpaidPersonObject>(resultPerson, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_UPDATE_PERSON_CHILD}, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> updatePersonPostpaidChild(HttpServletRequest request, @RequestParam(name = "staffId") String staffId,
                                                       @RequestParam(name = "shopId") String shopId, @RequestBody List<PostpaidPersonObject> lstPerson) {
        String nomeMetodo = ".updatePersonPostpaidChild() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PostpaidPersonObject resultPerson = new PostpaidPersonObject();
        try {
            resultPerson = postpaidBusiness.updatePersonPostpaidChild(request, lstPerson, staffId, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<PostpaidPersonObject>(resultPerson, HttpStatus.OK);
    }


    @RequestMapping(value = Constants.POSTPAID_SEARCH_PARENT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> searchParent(HttpServletRequest request, @RequestBody Map<String, String> searchConditions) {
        Map<String, Object> data = new HashMap<>();
        try {
            data = postpaidBusiness.searchPostPaidPeople(request, searchConditions);
        } catch (Exception e) {
            e.printStackTrace();
            data.put("error", e.getMessage());
        }
        return new ResponseEntity<Map<String, Object>>(data, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.POSTPAID_PERSON_DETAIL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getPostPaidPersonObject(HttpServletRequest request, @RequestBody Map<String, String> queryData) {
        Map<String, Object> data = new HashMap<>();
        try {
            data = postpaidBusiness.getPostPaidPersonObject(request, queryData);
        } catch (Exception e) {
            e.printStackTrace();
            data.put("error", e.getMessage());
        }
        return new ResponseEntity<Map<String, Object>>(data, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_SEARCH_PERSON_PARENT_BY_ACCOUNT_NO}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> searchPostpaidPersonByAccountNo(HttpServletRequest request, @RequestParam(name = "accountNo") String accountNo) {
        String nomeMetodo = ".searchPostpaidPersonByAccountNo() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PostpaidPersonObject resultPerson = new PostpaidPersonObject();
        try {
            resultPerson = postpaidBusiness.searchPostpaidPersonByAccountNo(request, accountNo);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<PostpaidPersonObject>(resultPerson, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.POSTPAID_SEARCH_HISTORY, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> searchHistory(HttpServletRequest request, @RequestBody Map<String, String> searchCondition) {
        Map<String, Object> data = new HashMap<>();
        try {
            data = postpaidBusiness.searchHistory(request, searchCondition);
        } catch (Exception e) {
            e.printStackTrace();
            data.put("error", e.getMessage());
        }
        return new ResponseEntity<Map<String, Object>>(data, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_GET_LIST_REASON_CHANGE_SIM_POSTPAID}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> getListResonChangeSimPostpaid(HttpServletRequest request) {
        String nomeMetodo = ".getListResonChangeSimPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<ApDomainModel> reasonChangeSimList = new ArrayList<>();
        try {
            reasonChangeSimList = postpaidBusiness.getListResonChangeSimPostpaid(request);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<ApDomainModel>>(reasonChangeSimList, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.POSTPAID_ACTION_CHANGE_SIM_POSTPAID}, method = RequestMethod.POST)
   	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
    public ResponseEntity<?> actionChangeSimPostpaid(HttpServletRequest request, @RequestParam(name = "newSerial") String newSerial, @RequestParam(name = "staffId") String staffId,
                                                     @RequestParam(name = "shopId") String shopId, @RequestParam(name = "strComment") String strComment, @RequestBody PostpaidPersonObject currCust) {
        String nomeMetodo = ".actionChangeSimPostpaid() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        PostpaidPersonObject resultPerson = new PostpaidPersonObject();
        try {
            resultPerson = postpaidBusiness.actionChangeSimPostpaid(request, newSerial, currCust, staffId, shopId, strComment);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            if (e.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<PostpaidPersonObject>(resultPerson, HttpStatus.OK);
    }
}
