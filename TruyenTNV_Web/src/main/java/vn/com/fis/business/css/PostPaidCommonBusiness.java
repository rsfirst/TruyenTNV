package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.css.GlCode;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.AppParam;
import vn.com.fis.model.mnpcm.PackageType;
import vn.com.fis.tibco.model.entity.Product;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * vn.com.fis.branded_shop.business.PostPaidCommonBusiness
 * by sondt18
 * at 07/01/2019 5:34 PM
 */
@Service
public class PostPaidCommonBusiness {
    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;


    public List<GlCode> getGl_Code(HttpServletRequest request, Object[][] oParam) throws Exception {
        String nomeMetodo = ".getGl_Code()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<GlCode> objList = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(oParam);
            String url = ev.getProperty("login.url") + "/PostPaidCommon/getGl_Code";
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GlCode>>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(e.getMessage());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }

        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return objList;
    }

    public List<PackageType> getPackageClass(HttpServletRequest request) throws Exception {
        String nomeMetodo = ".getPackageClass()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<PackageType> objList = new ArrayList<>();
        try {
            String url = ev.getProperty("login.url") + "/bs/PostPaidCommon/getPackageClass";
            String tmp = webService.apiServiceMethodGET(request, url, "", "");

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PackageType>>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(e.getMessage());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }

        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return objList;
    }

    public Boolean checkExistRequest(HttpServletRequest request, String mdn) throws Exception {
        String nomeMetodo = ".checkExistRequest()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        Boolean objRet = false;
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("mdn", mdn);
            String url = ev.getProperty("login.url") + "/bs/PostPaidCommon/checkExistRequest";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objRet = jsonMapper.readValue(tmp.toString(), new TypeReference<Boolean>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(e.getMessage());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return objRet;
    }

    public Boolean checkPersonIDISDN(HttpServletRequest request, String strPer, String strISDN) throws Exception {
        String nomeMetodo = ".checkPersonIDISDN()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        Boolean objRet = false;
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("strPer", strPer);
            params.put("strISDN", strISDN);
            String url = ev.getProperty("login.url") + "/bs/PostPaidCommon/checkPersonIDISDN";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objRet = jsonMapper.readValue(tmp.toString(), new TypeReference<Boolean>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(e.getMessage());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return objRet;
    }

    public List<AppParam> getApParam(HttpServletRequest request, String paramType, String paramName) throws Exception {
        String nomeMetodo = ".getApParam()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<AppParam> objRet = new ArrayList<>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("paramType", paramType);
            params.put("paramName", paramName);
            String url = ev.getProperty("login.url") + "/bs/PostPaidCommon/getApParam";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objRet = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppParam>>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(e.getMessage());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return objRet;
    }

    public MessagesResponse updateExistRequestPrepaid(HttpServletRequest request, String mdn, String staffCode) throws Exception {
        String nomeMetodo = ".updateExistRequestPrepaid()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        MessagesResponse mess = new MessagesResponse();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("mdn", mdn);
            params.put("staffCode", staffCode);
            String url = ev.getProperty("login.url") + "/bs/PostPaidCommon/updateExistReqPre";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }

        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return mess;
    }

    public ResponseEntity<?> addNewConnect(HttpServletRequest request, Map<String, Object> mapParam) throws Exception {
        String nomeMetodo = ".addNewConnect()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        Product obj = new Product();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mapParam);
            String url = ev.getProperty("login.url") + "/bs/PostPaidCommon/addNewConnect";
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    obj = jsonMapper.readValue(tmp.toString(), new TypeReference<Product>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);

                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            logger.error(ex.getMessage(), ex);
            throw new Exception(ex.getMessage());
        }
        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<Product>(obj, HttpStatus.OK);
    }
}
