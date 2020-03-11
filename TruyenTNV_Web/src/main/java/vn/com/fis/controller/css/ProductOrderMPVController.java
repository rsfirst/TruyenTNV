package vn.com.fis.controller.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import vn.com.fis.business.css.ProductOrderBusiness;
import vn.com.fis.common.css.CommonErrorcode;
import vn.com.fis.common.css.CommonResponse;
import vn.com.fis.entity.ProductOrderEnrity.ProductOrderDetailMPV;
import vn.com.fis.entity.ProductOrderEnrity.ProductOrderMPV;
import vn.com.fis.model.ProductOrder.GoodInfoNew;
import vn.com.fis.model.ProductOrder.ProductOrderInitResponse;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
public class ProductOrderMPVController {
    private static final Logger LOG = LoggerFactory.getLogger(ProductOrderMPVController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Autowired
    ProductOrderBusiness poBusiness;

    @RequestMapping(value = {Constants.ACTION_ADD_PO_FOR_BS}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CREATE_PURCHASE_ORDER_FOR_BS + "')")
    public CommonResponse addProductOrderMPV(HttpServletRequest request, @RequestBody ProductOrderMPV requestInput) {
        String nomeMetodo = ".addProductOrderMPV()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("request: " + request.toString());

        CommonResponse comm = new CommonResponse();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_ADD_PO_FOR_BS;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }


            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    // for User
    @RequestMapping(value = "/bs/ProductOrderMPV/getAllGoods", method = RequestMethod.GET)
    public List<GoodInfoNew> getGoods(HttpServletRequest request, @RequestParam(name = "goodType") String goodType, @RequestParam(name = "shopId") String shopId) {
        String nomeMetodo = ".getGoods()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("goodType=" + goodType + ", shopId = " + shopId);

        List<GoodInfoNew> list = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodType", goodType);
            params.put("shopId", shopId);
            String url = ev.getProperty("login.url") + "/bs/ProductOrderMPV/getAllGoods";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return list;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return list;
    }

    @RequestMapping(value = "/bs/ProductOrderMPV/init", method = RequestMethod.GET)
    public @ResponseBody ProductOrderInitResponse addProductOrderInit(HttpServletRequest request, @RequestParam(name = "shopCode") String shopCode, @RequestParam(name = "shopId") long shopId) {
        String nomeMetodo = ".addProductOrderInit()";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        ProductOrderInitResponse response = new ProductOrderInitResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopCode", shopCode);
            params.put("shopId", String.valueOf(shopId));
            String url = ev.getProperty("login.url") + "/bs/ProductOrderMPV/init";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<ProductOrderInitResponse>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.ACTION_SEARCH_PO_FOR_BS}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER_FOR_BS + "')")
    public ResponseEntity<?> searchPoForBS(HttpServletRequest request, @RequestParam(name = "shopCodeBS") String shopCodeBS, @RequestParam(name = "statusCode") String statusCode,
                                           @RequestParam(name = "pOCode") String pOCode, @RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate,
                                           @RequestParam(name = "staffId") String staffId, @RequestParam(name = "shopId") String shopId) {
        String nomeMetodo = ".searchPoForBS() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + " Input " + " shopCodeBS = " + shopCodeBS + "; statusCode = " + statusCode + "; pOCode = " + pOCode
                + "; fromDate = " + fromDate + "; toDate = " + toDate + "; staffId = " + staffId + "; shopId = " + shopId);

        MessagesResponse mess = new MessagesResponse();
        List<ProductOrderMPV> lstPo = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopCodeBS", shopCodeBS);
            params.put("statusCode", statusCode);
            params.put("pOCode", pOCode);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            params.put("staffId", staffId);
            params.put("shopId", shopId);
            String url = ev.getProperty("login.url") + Constants.ACTION_SEARCH_PO_FOR_BS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstPo = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProductOrderMPV>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ProductOrderMPV>>(lstPo, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_SEARCH_PO_DETAIL_FOR_BS}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER_FOR_BS + "')")
    public ResponseEntity<?> searchPoDetailForBS(HttpServletRequest request, @RequestParam(name = "poId") Long poId) {
        String nomeMetodo = ".searchPoDetailForBS() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + nomeMetodo + " Controller Input " + " poId = " + poId);

        MessagesResponse mess = new MessagesResponse();
        List<ProductOrderDetailMPV> lstPoD = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("poId", String.valueOf(poId));
            String url = ev.getProperty("login.url") + Constants.ACTION_SEARCH_PO_DETAIL_FOR_BS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstPoD = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProductOrderDetailMPV>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ProductOrderDetailMPV>>(lstPoD, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_REJECT_PO_FOR_BS}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER_FOR_BS + "')")
    public ResponseEntity<?> rejectPoBs(HttpServletRequest request, @RequestParam(name = "poId") Long poId, @RequestParam(name = "poCode") String poCode,
                                        @RequestParam(name = "reason") String reason, @RequestParam(name = "approver_staffId") Long approver_staffId) {
        String nomeMetodo = ".rejectPoBs() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("poId", String.valueOf(poId));
            params.put("poCode", poCode);
            params.put("reason", reason);
            params.put("approver_staffId", String.valueOf(approver_staffId));
            String url = ev.getProperty("login.url") + Constants.ACTION_REJECT_PO_FOR_BS;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

}
