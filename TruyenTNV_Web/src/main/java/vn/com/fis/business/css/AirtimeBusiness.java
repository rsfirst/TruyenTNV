package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fss.util.StringUtil;
import com.google.gson.Gson;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;

/**
 * vn.com.fis.branded_shop.business.AirtimeBusiness
 * by sondt18
 * at 19/02/2019 4:35 PM
 */
@Service
@Transactional
public class AirtimeBusiness {
    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public List<String> getListISDNFromFileTemplate(MultipartHttpServletRequest request) throws Exception {
        String nomeMetodo = ".getListISDNFromFileTemplate() ";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        Iterator<String> itr = request.getFileNames();
        MultipartFile file = request.getFile(itr.next());
        InputStream fileInput = new ByteArrayInputStream(file.getBytes());
        List<String> lstISDN = new ArrayList<>();
        try {
            Workbook workbook = WorkbookFactory.create(fileInput);
            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> iteratorRow = sheet.iterator();
            iteratorRow.next();
            while (iteratorRow.hasNext()) {
                Row row = iteratorRow.next();
//                Iterator<Cell> iteratorCell = row.cellIterator();
//                if (iteratorCell.hasNext()) {
//                    Cell cell = iteratorCell.next();
                String isdn = CommonUtils.getCellValue(row.getCell(0));
                String amount = StringUtil.nvl(CommonUtils.getCellValue(row.getCell(1)), "0");
                if (isdn != null) {
                    lstISDN.add(isdn + "," + amount);
                }
//                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.getMessage());
            throw e;
        } finally {
            if (fileInput != null) {
                try {
                    fileInput.close();
                } catch (IOException e) {
                    e.printStackTrace();
                    logger.error(e.getMessage());
                    throw e;
                }
            }
        }
        logger.info(logger.getName() + nomeMetodo + CommonConstant.END_LOG);
        return lstISDN;
    }

    public Map<String, String> retailAirtime(HttpServletRequest request, Map<String, String> requestInput) throws Exception {
        String nomeMetodo = ".retailAirtime()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        Map<String, String> objList = new HashMap<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + "/bs/airtime//retailAirtime";
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objList = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, String>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(mess.getMessages());
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

    public Map<String, Object> rechargeByBatch(HttpServletRequest request, Map<String, Object> requestInput) throws Exception {
        String nomeMetodo = ".rechargeByBatch()";
        logger.info(logger.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        Map<String, Object> objList = new HashMap<>();
        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(requestInput);
            String url = ev.getProperty("login.url") + "/bs/airtime//rechargeByBatch";
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    objList = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
                    });
                } catch (Exception e) {
                    try {
                        mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(mess.getMessages());
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
}
