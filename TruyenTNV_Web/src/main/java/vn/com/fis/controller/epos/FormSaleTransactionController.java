package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.epos.FormSaleDealerBusiness;
import vn.com.fis.business.epos.FormSaleTransactionBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.FSDGoods;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.GoodsMGMGModel;
import vn.com.fis.model.epos.GoodsSaveTransaction;
import vn.com.fis.model.epos.GoodsSearchObj;
import vn.com.fis.model.epos.InputSerialModel;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectForDoSomething;
import vn.com.fis.model.epos.ObjectFormSaleTransactionModel;
import vn.com.fis.model.epos.SalesTransaction;
import vn.com.fis.model.epos.SerialPromotionModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormSaleTransactionController {
    private static final Logger LOG = LoggerFactory.getLogger(FormSaleTransactionController.class);
    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Autowired
    FormSaleTransactionBusiness formSaleTransactionBusiness;

    @Autowired
    FormSaleDealerBusiness formSaleDealerBusiness;

    @RequestMapping(Constants.REQUEST_MAPPING.FORM_SALE_TRANSACTION)
//	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_SALE_TRANSACTION + "')")
    public String formPrintWarrantyByBatch() {
        return Constants.REQUEST_MAPPING.FORM_SALE_TRANSACION_LINK;
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_SHOP_STOCK_ID, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getShopStockID(HttpServletRequest request, @RequestBody KeyValueObj input) throws Exception {
        String nomeMetodo = ".getShopStockID() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        String result = "";
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SHOP_STOCK_ID;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                result = jsonMapper.readValue(message.getValueReturn().toString(), new TypeReference<String>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<String>(result, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_TRANS_TYPE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getTransType(HttpServletRequest request) throws Exception {
        String nomeMetodo = ".getTransType() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        List<ApDomainModel> lst = new ArrayList<ApDomainModel>();
        List<ApDomainModel> result = new ArrayList<ApDomainModel>();
        try {
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_TRANS_TYPE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
                });
                for (ApDomainModel app : lst) {
                    if ("1".equals(app.getCode()) || "6".equals(app.getCode())) {
                        result.add(app);
                    }
                }
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ApDomainModel>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_CURRENT_GOODS_STAFF, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getCurrentGoodsStaff(HttpServletRequest request, @RequestBody GoodsSearchObj input) throws Exception {
        String nomeMetodo = ".getCurrentGoodsStaff() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        List<GoodsList> lst = new ArrayList<GoodsList>();
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_CURRENT_GOODS_STAFF;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<GoodsList>>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<GoodsList>>(lst, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_ATTACH_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> getAttachGoods(HttpServletRequest request, @RequestBody GoodsList input) throws Exception {
        String nomeMetodo = ".getAttachGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        List<GoodsList> lst = new ArrayList<GoodsList>();
        List<GoodsList> result = new ArrayList<GoodsList>();
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ATTACH_GOODS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<GoodsList>>() {
                });
                String strAttachGroupTemp = "";
                for (int i = 0; i < lst.size(); i++) {
                    if (i == 0 && "0".equals(lst.get(i).getGroupAttach())) {
                        GoodsList good = new GoodsList();
                        good.setGoodsCode("Nhóm hàng rỗng");
                        good.setStr1("FALSE");
                        result.add(good);
                    } else if (!strAttachGroupTemp.equals(lst.get(i).getGroupAttach())) {
                        GoodsList good = new GoodsList();
                        good.setGoodsCode("Nhóm hàng " + lst.get(i).getGroupAttach());
                        good.setStr1("FALSE");
                        result.add(good);
                    }
                    result.add(lst.get(i));
                    strAttachGroupTemp = lst.get(i).getGroupAttach();
                }
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<GoodsList>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_SERIAL_ATTACH_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getListSerialAttachGoods(HttpServletRequest request, @RequestBody ObjectForDoSomething input) throws Exception {
        String nomeMetodo = ".getListSerialAttachGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        List<InputSerialModel> lst = new ArrayList<InputSerialModel>();
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SERIAL_ATTACH_GOODS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<InputSerialModel>>() {
                });

            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<InputSerialModel>>(lst, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_CALCULATE_DISCOUNT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> calculateDiscount(HttpServletRequest request, @RequestBody ObjectForDoSomething input) throws Exception {
        String nomeMetodo = ".calculateDiscount() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_CALCULATE_DISCOUNT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_MGMG_GOODS_SERIAL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMGMGGoodsSerial(HttpServletRequest request, @RequestBody ObjectForDoSomething input) throws Exception {
        String nomeMetodo = ".getMGMGGoodsSerial() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<GoodsMGMGModel> lst = new ArrayList<GoodsMGMGModel>();

        try {
            lst = formSaleTransactionBusiness.getMGMGGoodsSerial(input);
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<GoodsMGMGModel>>(lst, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.VALID_INPUT_WRITE_INFO, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> validInputWriteInfo(HttpServletRequest request, @RequestBody FSDGoods input) throws Exception {
        String nomeMetodo = ".validInputWriteInfo() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        try {
            formSaleDealerBusiness.validInputWriteInfo(input);
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_ALL_SOLD_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> searchAllSoldGoods(HttpServletRequest request, @RequestBody ObjectForDoSomething input) throws Exception {
        String nomeMetodo = ".searchAllSoldGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        List<InputSerialModel> lst = new ArrayList<InputSerialModel>();
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ALL_SOLD_GOODS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<InputSerialModel>>() {
                });

            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<InputSerialModel>>(lst, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_PROFILE_FROM_NMS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getProfileFromNMS(HttpServletRequest request, @RequestBody KeyValueObj input) throws Exception {
        String nomeMetodo = ".getProfileFromNMS() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        SerialPromotionModel result = null;
        Gson gson = new Gson();
        try {
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_PROFILE_FROM_NMS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
            if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
                result = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<SerialPromotionModel>() {
                });

            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<SerialPromotionModel>(result, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.WRITE_INFO_TRANS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> writeInfo(HttpServletRequest request, @RequestBody FSDGoods input) throws Exception {
        String nomeMetodo = ".writeInfo() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        try {
            formSaleDealerBusiness.validInputWriteInfo(input);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            if (e.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.ADD_PROMOTION_SERIAL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addPromotionSerial(HttpServletRequest request, @RequestBody ObjectFormSaleTransactionModel input) throws Exception {
        String nomeMetodo = ".addPromotionSerial() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        ObjectFormSaleTransactionModel obj = null;
        try {
            obj = formSaleTransactionBusiness.addPromotionSerial(request, input);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            if (e.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<ObjectFormSaleTransactionModel>(obj, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.FLAG_CLOSE_DIALOG, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> closeDialog(HttpServletRequest request, @RequestBody String input) throws Exception {
        String nomeMetodo = ".closeDialog() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        String result = "";
        try {
//			Thread.sleep(5000);
            result = "close";
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            if (e.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<String>(new Gson().toJson(result), HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.SAVE_MGM_PROMOTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveMGMPPromotion(HttpServletRequest request, @RequestBody ObjectForDoSomething input) throws Exception {
        String nomeMetodo = ".saveMGMPPromotion() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SAVE_MGM_PROMOTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

                });
            }
            if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus())) {
                throw new Exception(message.getMessages());
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
    }


    @RequestMapping(value = Constants.REQUEST_MAPPING.SAVE_SALE_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveTransaction(HttpServletRequest request, @RequestBody SalesTransaction input) throws Exception {
        String nomeMetodo = ".saveTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse message = new MessagesResponse();
        String ip = request.getRemoteAddr();
        input.setSessionClientIp(ip);
        int result = 0;
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SAVE_SALE_TRANSACTION;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

                });
            }
            if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus())) {
                throw new Exception(message.getMessages());
            } else {
                ObjectMapper jsonMapper = new ObjectMapper();
                result = jsonMapper.readValue(message.getValueReturn(), new TypeReference<Integer>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(ex.getMessage());
            if (ex.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Integer>(result, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.REQUEST_MAPPING.GET_MONEY, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getMoney(HttpServletRequest request, @RequestBody ObjectForDoSomething input) throws Exception {
        String nomeMetodo = ".getMoney() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        GoodsSaveTransaction result = new GoodsSaveTransaction();
        try {
            result = formSaleTransactionBusiness.getMoney(input);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            MessagesResponse mess = new MessagesResponse();
            mess.setMessages(e.getMessage());
            if (e.getMessage() == null) {
                mess.setMessages("java.lang.NullPointerException");
            }
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<GoodsSaveTransaction>(result, HttpStatus.OK);
    }
}
