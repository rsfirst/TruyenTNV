package vn.com.fis.controller.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.core.io.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.business.css.ProductOrderBusiness;
import vn.com.fis.common.css.CommonErrorcode;
import vn.com.fis.common.css.CommonResponse;
import vn.com.fis.common.css.CommonUtil;
import vn.com.fis.entity.ProductOrderEnrity.Bank;
import vn.com.fis.entity.ProductOrderEnrity.BankPaymentMapping;
import vn.com.fis.entity.ProductOrderEnrity.GoodDiscount;
import vn.com.fis.entity.ProductOrderEnrity.ProductOrder;
import vn.com.fis.model.ProductOrder.*;
import vn.com.fis.model.css.AttachmentDataObject;
import vn.com.fis.model.css.ProvinceResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

/**
 * The Class PerPaidController.
 */

@Controller
public class ProductOrderController {
    private static final Logger LOG = LoggerFactory.getLogger(ProductOrderController.class);

    @Autowired
    ProductOrderBusiness poBusiness;

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @Autowired
    private ResourceLoader resourceLoader;

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_ADD_MANUAL, method = RequestMethod.POST)
    public long addProductOrderManual(HttpServletRequest request) {
        String nomeMetodo = ".addProductOrderManual() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        long result = 0;
        try {
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            result = poBusiness.addPOManual(request);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return 0;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return result;
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_INIT, method = RequestMethod.GET)
    
    public @ResponseBody ProductOrderInitResponse addProductOrderInit(HttpServletRequest request, @RequestParam(name = "shopCode") String shopCode, @RequestParam(name = "shopId") long shopId) {
        String nomeMetodo = ".addProductOrderInit() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Parmeter addProductOrderInit shopCode = " + shopCode + " ; shopId = " + shopId);

        ProductOrderInitResponse response = new ProductOrderInitResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopCode", shopCode);
            params.put("shopId", String.valueOf(shopId));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_INIT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<ProductOrderInitResponse>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            return response;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_BANK, method = RequestMethod.GET)
    public @ResponseBody List<BankPaymentMapping> getBank(HttpServletRequest request, @RequestParam(name = "paymentType") String paymentType) {
        String nomeMetodo = ".getBank() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Start getBank paymentType = " + paymentType);

        List<BankPaymentMapping> response = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("paymentType", paymentType);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_BANK;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BankPaymentMapping>>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            return response;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_ALL_BANK, method = RequestMethod.GET)
    public @ResponseBody List<Bank> getAllBank(HttpServletRequest request) {
        String nomeMetodo = ".getAllBank() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<Bank> response = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_ALL_BANK;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<List<Bank>>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            return response;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    //////////////////////// goodPriceManager////////////////////////////////////

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_ERP_GOODS, method = RequestMethod.GET)
    public @ResponseBody List<GoodPriceInfo> getERPGoods(HttpServletRequest request) {
        String nomeMetodo = ".getERPGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<GoodPriceInfo> result = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_ERP_GOODS;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodPriceInfo>>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            return result;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return result;
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_BS_GOODS, method = RequestMethod.GET)
    public @ResponseBody List<GoodPriceInfo> getBSGoods(HttpServletRequest request) {
        String nomeMetodo = ".getBSGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<GoodPriceInfo> result = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_BS_GOODS;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodPriceInfo>>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            return result;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return result;
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_ADD_GOOD_PRICE, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.GOOD_PRICE_MANAGER + "')")
    public ResponseEntity<?> addGoodPrice(HttpServletRequest request, @RequestBody GoodPriceInfo goodPrice) {
        String nomeMetodo = ".addGoodPrice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method addGoodPrice, goodPrice: " + goodPrice.toString());

        CommonResponse comm = new CommonResponse();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(goodPrice);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_ADD_GOOD_PRICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<CommonResponse>(comm, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            comm = new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
            return new ResponseEntity<CommonResponse>(comm, HttpStatus.OK);
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_SAVE_GOOD_PRICE, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.GOOD_PRICE_MANAGER + "')")
    public @ResponseBody CommonResponse saveGoodPrice(HttpServletRequest request, @RequestBody GoodPriceInfo goodPrice) {
        String nomeMetodo = ".saveGoodPrice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method saveGoodPrice, goodPrice: " + goodPrice.toString());

        CommonResponse comm = new CommonResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(goodPrice);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_SAVE_GOOD_PRICE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DEL_GOOD_PRICE, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.GOOD_PRICE_MANAGER + "')")
    public @ResponseBody CommonResponse delGoodPrice(HttpServletRequest request, @RequestParam(name = "goodCode") String goodCode) {
        String nomeMetodo = ".delGoodPrice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method delGoodPrice, goodCode: " + goodCode);

        CommonResponse comm = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodCode", goodCode);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_DEL_GOOD_PRICE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_GOOD_PRICE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.GOOD_PRICE_MANAGER + "')")
    public @ResponseBody List<GoodPriceInfo> getGoodPrice(HttpServletRequest request, @RequestParam(name = "goodCode") String goodCode) {
        String nomeMetodo = ".getGoodPrice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method getGoodPrice, goodCode: " + goodCode);

        List<GoodPriceInfo> result = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodCode", goodCode);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_GOOD_PRICE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodPriceInfo>>() {
                });
            }
        } catch (Exception exp) {
            exp.printStackTrace();
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return result;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return result;
    }

    /////////////////////////////////////////////////////////////////////////////////

    // for User
    @RequestMapping(value = {Constants.ACTION_PRODUCT_ORDER_GET_ALL_GOOD}, method = RequestMethod.GET)
    public @ResponseBody List<GoodInfo> getGoods(HttpServletRequest request, @RequestParam(name = "goodType") String goodType) {
        String nomeMetodo = ".getGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.debug(LOG.getName() + " goodType = " + goodType);

        List<GoodInfo> listResult = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodType", goodType);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_ALL_GOOD;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                listResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfo>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return listResult;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return listResult;
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_DISCOUNT, method = RequestMethod.GET)
    public @ResponseBody List<GoodDiscount> getDiscount(HttpServletRequest request, @RequestParam(name = "goodCode") String goodCode, @RequestParam(name = "quantity") long quantity,
                                          @RequestParam(name = "poType") String poType) {
        String nomeMetodo = ".getDiscount() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " goodCode=" + goodCode + ", poType = " + poType + ", quantity= " + quantity);

        List<GoodDiscount> listResult = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodCode", goodCode);
            params.put("quantity", String.valueOf(quantity));
            params.put("poType", poType);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_DISCOUNT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                listResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodDiscount>>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return listResult;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return listResult;
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_ADD, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CREATE_PURCHASE_ORDER + "')")
    public @ResponseBody CommonResponse addProductOrder(HttpServletRequest request, @RequestBody ProductOrder requestInput) {
        String nomeMetodo = ".addProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " ProductOrder =" + request.toString());

        CommonResponse response = new CommonResponse();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_ADD;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    // luu dang nhap, co the sua
    // chua cho vao danh sach phe duyet
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_SAVE, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CREATE_PURCHASE_ORDER + "')")
    public @ResponseBody CommonResponse saveProductOrder(HttpServletRequest request, @RequestBody ProductOrder requestInput) {
        String nomeMetodo = ".saveProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " ProductOrder =" + request.toString());

        CommonResponse response = new CommonResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_SAVE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_UPDATE, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CREATE_PURCHASE_ORDER + "')")
    public @ResponseBody CommonResponse updateProductOrder(HttpServletRequest request, @RequestBody ProductOrder requestInput) {
        String nomeMetodo = ".updateProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " ProductOrder =" + request.toString());

        CommonResponse response = new CommonResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_UPDATE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_UPDATE_FROM_VIEW, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.VIEW_PURCHASE_ORDER + "')")
    public @ResponseBody CommonResponse updateFromViewProductOrder(HttpServletRequest request, @RequestBody ProductOrder requestInput) {
        String nomeMetodo = ".updateFromViewProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " ProductOrder =" + request.toString());

        CommonResponse response = new CommonResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_UPDATE_FROM_VIEW;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    // for User, SA
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_ALL_PO, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.VIEW_PURCHASE_ORDER + "')")
    public @ResponseBody List<ProductOrder> getAllProductOrder(HttpServletRequest request) {
        String nomeMetodo = ".getAllProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<ProductOrder> lstPO = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_ALL_PO;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstPO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProductOrder>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstPO;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<ProductOrder>();
        }
    }

    // for User, SA
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_REJECT_REASON, method = RequestMethod.GET)
    public  @ResponseBody List<String> getRejectReason(HttpServletRequest request) {
        String nomeMetodo = ".getRejectReason() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<String> lstReason = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_REJECT_REASON;
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstReason;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<String>();
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_UPLOAD, method = RequestMethod.POST)
    public ResponseEntity<?> uploadFile(MultipartHttpServletRequest request) {
        String nomeMetodo = ".uploadFile() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Iterator<String> itr = request.getFileNames();

        String documentType = request.getParameter("identityDocType");
        String attachMentIdClient = request.getParameter("attachMentIdClient");

        MultipartFile file = request.getFile(itr.next());
        String fileName = file.getOriginalFilename();
        String fileNameUnique = fileName.substring(0, fileName.indexOf(".")) + "_" + attachMentIdClient
                + fileName.substring(fileName.indexOf("."), fileName.length());

        File dir = new File(ev.getProperty("upload.path.temp") + CommonUtil.getDate());
        if (!dir.exists()) {
            if (!dir.mkdirs()) {
                return new ResponseEntity<String>(Constants.CREATE_FOLDER, HttpStatus.FAILED_DEPENDENCY);
            }
        }

        File serverFile = new File(dir, fileNameUnique);
        try {
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
            stream.write(file.getBytes());
            stream.close();
            // resize
            // CommonUtil.checkLengthAndResize(serverFile.toString());
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }

        AttachmentDataObject temp = new AttachmentDataObject();
        temp.setFileName(serverFile.toString());
        temp.setAttachmentType(documentType);
        temp.setSize(String.valueOf(serverFile.length()));
        temp.setAttachMentIdClient(attachMentIdClient);

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<AttachmentDataObject>(temp, HttpStatus.OK);
    }

    // for User, SA
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_PO, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.VIEW_PURCHASE_ORDER + "')")
    public @ResponseBody List<ProductOrder> getPO(HttpServletRequest request, @RequestParam(name = "shopCode") String shopCode, @RequestParam(name = "bankCode") String bankCode,
                                    @RequestParam(name = "status") int status, @RequestParam(name = "poCode") String poCode, @RequestParam(name = "fromDate") String fromDate,
                                    @RequestParam(name = "toDate") String toDate) {

        String nomeMetodo = ".getPO() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " shopCode = " + shopCode + " bankCode = " + bankCode + " status = " + status + " poCode = " + poCode + " fromDate = "
                + fromDate + " toDate = " + toDate);

        List<ProductOrder> lstPO = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopCode", shopCode);
            params.put("bankCode", bankCode);
            params.put("status", String.valueOf(status));
            params.put("poCode", poCode);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_PO;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstPO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProductOrder>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstPO;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<ProductOrder>();
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_GET_PO_APPROVE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER + "')")
    public @ResponseBody List<ProductOrder> getPOApprove(HttpServletRequest request, @RequestParam(name = "shopCode") String shopCode, @RequestParam(name = "bankCode") String bankCode,
                                           @RequestParam(name = "status") int status, @RequestParam(name = "poCode") String poCode, @RequestParam(name = "fromDate") String fromDate,
                                           @RequestParam(name = "toDate") String toDate) {
        String nomeMetodo = ".getPOApprove() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " shopCode = " + shopCode + " bankCode = " + bankCode + " status = " + status + " poCode = " + poCode + " fromDate = "
                + fromDate + " toDate = " + toDate);

        List<ProductOrder> lstPO = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopCode", shopCode);
            params.put("bankCode", bankCode);
            params.put("status", String.valueOf(status));
            params.put("poCode", poCode);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_PO_APPROVE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstPO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProductOrder>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstPO;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<ProductOrder>();
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_LOAD_PROVINCE, method = RequestMethod.GET)
    public @ResponseBody List<ProvinceResponse> loadProvince(HttpServletRequest request, @RequestParam(name = "region") String region) {
        String nomeMetodo = ".loadProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " region = " + region);

        List<ProvinceResponse> lstPRO = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("region", region);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_LOAD_PROVINCE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstPRO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProvinceResponse>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstPRO;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<ProvinceResponse>();
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_LOAD_SA_PROVINCE, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SA_PROVINCE_MANAGER + "')")
    public @ResponseBody List<SAProvinceReponse> getSAProvince(HttpServletRequest request, @RequestParam(name = "staffCode") String staffCode, @RequestParam(name = "proId") String proId) {
        String nomeMetodo = ".getSAProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " staffCode = " + staffCode + " ; proId = " + proId);

        List<SAProvinceReponse> list = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("staffCode", staffCode);
            params.put("proId", proId);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_LOAD_SA_PROVINCE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<SAProvinceReponse>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return list;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<SAProvinceReponse>();
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DEL_SA_PROVINCE, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SA_PROVINCE_MANAGER + "')")
    public @ResponseBody CommonResponse delSAProvince(HttpServletRequest request, @RequestParam(name = "staffCode") String staffCode, @RequestParam(name = "provinceId") String provinceId,
                                        @RequestParam(name = "status") int status) {
        String nomeMetodo = ".delSAProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " staffCode = " + staffCode + " ; provinceId = " + provinceId + " ; status = " + status);

        CommonResponse comm = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("staffCode", staffCode);
            params.put("provinceId", provinceId);
            params.put("status", String.valueOf(status));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_DEL_SA_PROVINCE;
            String tmp = webService.apiServiceMethodPOSTWithPara(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DEL_ALL_SA_PROVINCE, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SA_PROVINCE_MANAGER + "')")
    public @ResponseBody CommonResponse delAllSAProvince(HttpServletRequest request, @RequestParam(name = "staffCode") String staffCode, @RequestParam(name = "proId") String proId) {
        String nomeMetodo = ".delAllSAProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " staffCode = " + staffCode + " ; proId = " + proId);

        CommonResponse comm = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("staffCode", staffCode);
            params.put("proId", proId);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_DEL_ALL_SA_PROVINCE;
            String tmp = webService.apiServiceMethodPOSTWithPara(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_ADD_SA_PROVINCE, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SA_PROVINCE_MANAGER + "')")
    public @ResponseBody CommonResponse addSAProvince(HttpServletRequest request, @RequestBody SAProvinceRequest requestInput) {
        String nomeMetodo = ".addSAProvince() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + " SAProvinceRequest = " + request.toString());

        CommonResponse comm = new CommonResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_ADD_SA_PROVINCE;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = {Constants.ACTION_PRODUCT_ADD_GOODS_DISCOUNT}, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.DISCOUNT_MANAGER + "')")
    public @ResponseBody CommonResponse addGoodDiscount(HttpServletRequest request, @RequestBody List<GoodDiscount> requestInput) {
        String nomeMetodo = ".addGoodDiscount() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        CommonResponse comm = new CommonResponse();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ADD_GOODS_DISCOUNT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = {Constants.ACTION_PRODUCT_SAVE_GOOD_DISCOUNT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.DISCOUNT_MANAGER + "')")
    public @ResponseBody CommonResponse saveGoodDiscount(HttpServletRequest request, @RequestBody GoodDiscount requestInput) {
        String nomeMetodo = ".saveGoodDiscount() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        CommonResponse comm = new CommonResponse();
        try {
        	Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_SAVE_GOOD_DISCOUNT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = {Constants.ACTION_PRODUCT_ORDER_GET_GOOD_DISCOUNT}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.DISCOUNT_MANAGER + "')")
    public @ResponseBody List<GoodDiscount> getGoodDiscount(HttpServletRequest request, @RequestParam(name = "goodCode") String
            goodCode, @RequestParam(name = "poType") String poType,
                                              @RequestParam(name = "goodType") String goodType) {
        String nomeMetodo = ".getGoodDiscount() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.debug(LOG.getName() + " goodCode : " + goodCode + "; poType = " + poType + "; goodType = " + goodType);

        List<GoodDiscount> listGoodDiscount = new ArrayList<GoodDiscount>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodCode", goodCode);
            params.put("poType", poType);
            params.put("goodType", goodType);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_GOOD_DISCOUNT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                listGoodDiscount = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodDiscount>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return listGoodDiscount;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<GoodDiscount>();
        }
    }

    @RequestMapping(value = {Constants.ACTION_PRODUCT_ORDER_GET_DISCOUNT_INFO}, method = RequestMethod.GET)
    public @ResponseBody GoodDiscount getDiscountInfo(HttpServletRequest request, @RequestParam(name = "goodCode") String goodCode,
                                        @RequestParam(name = "discountId") long discountId) {

        String nomeMetodo = ".getDiscountInfo() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Start getDiscountInfo goodCode = " + goodCode + ", discountId = " + discountId);

        GoodDiscount goodDiscount = new GoodDiscount();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("goodCode", goodCode);
            params.put("discountId", String.valueOf(discountId));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_DISCOUNT_INFO;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                goodDiscount = jsonMapper.readValue(tmp.toString(), new TypeReference<GoodDiscount>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return goodDiscount;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new GoodDiscount();
        }
    }

    @RequestMapping(value = {Constants.ACTION_PRODUCT_ORDER_DEL_GOOD_DISCOUNT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.DISCOUNT_MANAGER + "')")
    public @ResponseBody CommonResponse delGoodDiscount(HttpServletRequest request, @RequestParam(name = "discountId") long discountId) {
        String nomeMetodo = ".delGoodDiscount() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Start delGoodDiscount discountId = " + discountId);

        CommonResponse comm = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("discountId", String.valueOf(discountId));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_DEL_GOOD_DISCOUNT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                comm = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return comm;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DEL_PO_BY_ID, method = RequestMethod.GET)
    public @ResponseBody
    ProductOrder getPObyID(HttpServletRequest request, @RequestParam(name = "poCode") String poCode,
                           @RequestParam(name = "orderId") long orderId) {
        String nomeMetodo = ".getPObyID() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method getPObyID poCode = " + poCode + " ; orderId = " + orderId);

        ProductOrder lstPO = new ProductOrder();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("poCode", poCode);
            params.put("orderId", String.valueOf(orderId));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_DEL_PO_BY_ID;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstPO = jsonMapper.readValue(tmp.toString(), new TypeReference<ProductOrder>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstPO;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ProductOrder();
        }
    }

    // for SA
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_APPROVE, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER + "')")
    public @ResponseBody CommonResponse aprroveProductOrder(HttpServletRequest request, @RequestParam(name = "order_id") long order_id,
                                              @RequestParam(name = "poCode") String poCode) {
        String nomeMetodo = ".aprroveProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method aprroveProductOrder order_id = " + order_id + " ; poCode = " + poCode);

        CommonResponse response = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("order_id", String.valueOf(order_id));
            params.put("poCode", poCode);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_APPROVE;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_APPROVE_BS, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER_FOR_BS + "')")
    public @ResponseBody CommonResponse aprroveProductOrderForBs(HttpServletRequest request, @RequestParam(name = "order_id") long order_id,
                                                   @RequestParam(name = "poCode") String poCode) {
        String nomeMetodo = ".aprroveProductOrderForBs() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method aprroveProductOrder order_id = " + order_id + " ; poCode = " + poCode);

        CommonResponse response = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("order_id", String.valueOf(order_id));
            params.put("poCode", poCode);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_APPROVE_BS;
            String tmp = webService.apiServiceMethodPOSTWithPara(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    // for User, SA
    @RequestMapping(value = {Constants.ACTION_PRODUCT_ORDER_GET_DO}, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.VIEW_DELIVER_ORDER + "')")
    public @ResponseBody List<DOResponse> getDO(HttpServletRequest request, @RequestParam(name = "shopCode") String
            shopCode, @RequestParam(name = "soCode") String soCode,
                                  @RequestParam(name = "status") int status, @RequestParam(name = "doCode") String doCode,
                                  @RequestParam(name = "fromDate") String fromDate,
                                  @RequestParam(name = "toDate") String toDate, @RequestParam(name = "productCode") String productCode) {

        String nomeMetodo = ".getDO() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method getDO shopCode = " + shopCode + " ; soCode = " + soCode + " ; status = " + status + " ; doCode = " + doCode + " ; fromDate = "
                + fromDate + " ; toDate = " + toDate + " ; productCode = " + productCode);

        List<DOResponse> lstPO = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopCode", shopCode);
            params.put("soCode", soCode);
            params.put("status", String.valueOf(status));
            params.put("doCode", doCode);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            params.put("productCode", productCode);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_GET_DO;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                lstPO = jsonMapper.readValue(tmp.toString(), new TypeReference<List<DOResponse>>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return lstPO;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ArrayList<DOResponse>();
        }
    }

    // for SA
    @RequestMapping(value = {Constants.ACTION_PRODUCT_ORDER_REJECT}, method = RequestMethod.PUT)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER + "')")
    public @ResponseBody CommonResponse rejectProductOrder(HttpServletRequest request, @RequestParam(name = "order_id") long order_id,
                                             @RequestParam(name = "poCode") String poCode,
                                             @RequestParam(name = "rejectReason") String rejectReason) {
        String nomeMetodo = ".rejectProductOrder() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method rejectProductOrder order_id = " + order_id + " ; poCode = " + poCode + " ; rejectReason = " + rejectReason);

        CommonResponse response = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("order_id", String.valueOf(order_id));
            params.put("poCode", poCode);
            params.put("rejectReason", rejectReason);
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_REJECT;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    // for User
    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_CONFIRM_RECEIVE_RED_SHIP, method = RequestMethod.PUT)
    public @ResponseBody CommonResponse confirmreceiveredship(HttpServletRequest request, @RequestParam(name = "exTransId") long exTransId,
                                                @RequestParam(name = "shipmentNo") String shipmentNo,
                                                @RequestParam(name = "shopId") long shopId) {
        String nomeMetodo = ".confirmreceiveredship() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method confirmreceiveredship exTransId = " + exTransId + " ; shipmentNo = " + shipmentNo + " ; shopId = " + shopId);

        CommonResponse response = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("exTransId", String.valueOf(exTransId));
            params.put("shipmentNo", shipmentNo);
            params.put("shopId", String.valueOf(shopId));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_CONFIRM_RECEIVE_RED_SHIP;
            String tmp = webService.apiServiceMethodPOSTWithPara(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_RETURN_SHIP_MENT_TO_CENTRE, method = RequestMethod.PUT)
    public @ResponseBody CommonResponse returnShipmentToCentre(HttpServletRequest request, @RequestParam(name = "fromDate") String
            fromDate, @RequestParam(name = "errorCode") String errorCode,
                                                 @RequestParam(name = "errorDetail") long errorDetail) {
        String nomeMetodo = ".returnShipmentToCentre() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method returnShipmentToCentre fromDate = " + fromDate + " ; errorCode = " + errorCode + " ; errorDetail = " + errorDetail);

        CommonResponse response = new CommonResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("fromDate", fromDate);
            params.put("errorCode", errorCode);
            params.put("errorDetail", String.valueOf(errorDetail));
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_RETURN_SHIP_MENT_TO_CENTRE;
            String tmp = webService.apiServiceMethodPOSTWithPara(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return response;
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage());
        }
    }

    @RequestMapping(value = "/ProductOrder/download/{fileName:.+}", method = RequestMethod.GET, produces = "application/pdf")
    public ResponseEntity<InputStreamResource> download(@PathVariable("fileName") String fileName) throws
            IOException {
        System.out.println("Calling Download:- " + fileName);

        String nomeMetodo = ".download() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info("Method download fileName = " + fileName);

        ClassPathResource pdfFile = new ClassPathResource("D:/upload/product20171028/" + fileName);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("application/pdf"));
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.add("Access-Control-Allow-Headers", "Content-Type");
        headers.add("Content-Disposition", "filename=" + fileName);
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        headers.setContentLength(pdfFile.contentLength());
        ResponseEntity<InputStreamResource> response = new ResponseEntity<InputStreamResource>(new InputStreamResource(pdfFile.getInputStream()), headers,
                HttpStatus.OK);

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return response;
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DOWNLOAD_PDF, method = RequestMethod.GET)
    public ResponseEntity<Resource> downloadPDFFile() {
        String nomeMetodo = ".downloadPDFFile() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("application/pdf"));

        File file = null;
        try {
            file = resourceLoader.getResource("file:" + ev.getProperty("upload.path.template") + "/DO2.pdf").getFile();
            LOG.info("Method download fileName = " + file.getName());
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
        }

        FileSystemResource fileSystemResource = new FileSystemResource(file);

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DOWNLOAD_VIEW_IMG, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.VIEW_PURCHASE_ORDER + "')")
    public ResponseEntity<Resource> downloadViewIMG(@RequestParam(name = "path") String path) {
        String nomeMetodo = ".downloadViewIMG() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        LOG.info("path: " + path);

        HttpHeaders headers = new HttpHeaders();
        LOG.info("FilenameUtils.getExtension(path)=" + FilenameUtils.getExtension(path));
        headers.setContentType(MediaType.parseMediaType("image/" + FilenameUtils.getExtension(path)));

        File file = null;
        try {
            file = resourceLoader.getResource("file:" + path).getFile();
            LOG.info("Filename : " + file.getName());
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
        }

        FileSystemResource fileSystemResource = new FileSystemResource(file);

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);

        return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);

    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DOWNLOAD_APPROVE_IMG, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER + "')")
    public ResponseEntity<Resource> downloadApproveIMG(@RequestParam(name = "path") String path) {
        String nomeMetodo = ".downloadApproveIMG() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        LOG.info("path: " + path);

        HttpHeaders headers = new HttpHeaders();
        LOG.info("FilenameUtils.getExtension(path)=" + FilenameUtils.getExtension(path));
        headers.setContentType(MediaType.parseMediaType("image/" + FilenameUtils.getExtension(path)));

        // File file = new File("D:\\upload\\gvRowData.pdf");
        File file = null;
        try {
            file = resourceLoader.getResource("file:" + path).getFile();
            LOG.info("Filename : " + file.getName());
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
        }

        FileSystemResource fileSystemResource = new FileSystemResource(file);

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.ACTION_PRODUCT_ORDER_DOWNLOAD_BS_IMG, method = RequestMethod.GET)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER_FOR_BS + "')")
    public ResponseEntity<Resource> downloadBSIMG(@RequestParam(name = "path") String path) {
        String nomeMetodo = ".downloadBSIMG() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        LOG.info("path: " + path);

        HttpHeaders headers = new HttpHeaders();
        LOG.info("FilenameUtils.getExtension(path)=" + FilenameUtils.getExtension(path));
        headers.setContentType(MediaType.parseMediaType("image/" + FilenameUtils.getExtension(path)));

        File file = null;
        try {
            file = resourceLoader.getResource("file:" + path).getFile();
            LOG.info("Filename : " + file.getName());
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
        }

        FileSystemResource fileSystemResource = new FileSystemResource(file);

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<>(fileSystemResource, headers, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_CHECK_FRIEND_VNM}, method = RequestMethod.GET)
    public ResponseEntity<?> checkFriendVnmVald(HttpServletRequest request, @RequestParam(name = "shopId") Long shopId) {
        String nomeMetodo = ".checkFriendVnmVald() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        CommonResponse response = new CommonResponse("0", "0");
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopId", String.valueOf(shopId));
            String url = ev.getProperty("login.url") + Constants.ACTION_CHECK_FRIEND_VNM;
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                response = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonResponse>() {
                });
            }

            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<CommonResponse>(response, HttpStatus.OK);
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return new ResponseEntity<CommonResponse>(new CommonResponse(CommonErrorcode.ERROR_UNKNOW, e.getMessage()), HttpStatus.OK);
        }
    }
}
