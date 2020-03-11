package vn.com.fis.controller.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ShipmentDetailOutput;
import vn.com.fis.model.css.ShipmentOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * The Class PerPaidController.
 */
@Controller
public class AutomaticImportStockFromCenterController {
    private static final Logger LOG = LoggerFactory.getLogger(AutomaticImportStockFromCenterController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = "/bs/stockInputFromCenter/getShipment", method = RequestMethod.POST)
    public ResponseEntity<?> searchShipment(HttpServletRequest request, @RequestParam(name = "shopId") String shopId, @RequestParam(name = "staffId") String staffId,
                                            @RequestParam(name = "receiptNo") String receiptNo, @RequestParam(name = "status") String status, @RequestParam(name = "fromDate") String fromDate,
                                            @RequestParam(name = "toDate") String toDate) throws Exception {
        String nomeMetodo = ".searchShipment() ";
        MessagesResponse msgResponse = new MessagesResponse();
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        List<ShipmentOutput> resultShipmentList = new ArrayList<ShipmentOutput>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopId", shopId);
            params.put("staffId", staffId);
            params.put("receiptNo", receiptNo);
            params.put("status", status);
            params.put("fromDate", fromDate);
            params.put("toDate", toDate);
            String url = ev.getProperty("login.url") + "/bs/stockInputFromCenter/getShipment";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    resultShipmentList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShipmentOutput>>() {
                    });
                } catch (Exception e) {
                    try {
                        msgResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
            msgResponse.setMessages(ex.getMessage());
            return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ShipmentOutput>>(resultShipmentList, HttpStatus.OK);
    }

    @RequestMapping(value = "/bs/stockInputFromCenter/getShipmentDetail", method = RequestMethod.POST)
    public ResponseEntity<?> getShipmentDetail(HttpServletRequest request, @RequestParam(name = "receiptNo") String receiptNo) {
        // Check permission
        String nomeMetodo = ".searchShipmentDetail() ";
        MessagesResponse msgResponse = new MessagesResponse();
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        // Get data
        List<ShipmentDetailOutput> listShipmentDetail = new ArrayList<ShipmentDetailOutput>();
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("receiptNo", receiptNo);
            String url = ev.getProperty("login.url") + "/bs/stockInputFromCenter/getShipmentDetail";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    listShipmentDetail = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShipmentDetailOutput>>() {
                    });
                } catch (Exception e) {
                    try {
                        msgResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                        return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
            msgResponse.setMessages(ex.getMessage());
            return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<ShipmentDetailOutput>>(listShipmentDetail, HttpStatus.OK);
    }

    @RequestMapping(value = "/bs/stockInputFromCenter/goodReceiptSimple", method = RequestMethod.POST)
    public ResponseEntity<?> goodReceiptSimple(HttpServletRequest request, @RequestParam(name = "shopId") String shopId,
                                               @RequestParam(name = "selectedShipmentNo") String selectedShipmentNo, @RequestParam(name = "staffId") String staffId) {
        String nomeMetodo = ".goodReceiptSimple() ";
        MessagesResponse msgResponse = new MessagesResponse();
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        try {
            HashMap<String, String> params = new HashMap<>();
            params.put("shopId", shopId);
            params.put("selectedShipmentNo", selectedShipmentNo);
            params.put("staffId", staffId);
            String url = ev.getProperty("login.url") + "/bs/stockInputFromCenter/goodReceiptSimple";
            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                msgResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
            msgResponse.setMessages(ex.getMessage());
            return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
    }
}
