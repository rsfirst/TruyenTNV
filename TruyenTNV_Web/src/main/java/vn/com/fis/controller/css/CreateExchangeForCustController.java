package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import vn.com.fis.business.css.CreateExchangeBusiness;
import vn.com.fis.model.css.*;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
public class CreateExchangeForCustController {

    @Autowired
    CreateExchangeBusiness createExchangeBusiness;

    private static final Logger LOG = LoggerFactory.getLogger(CreateExchangeForCustController.class);

    @RequestMapping(value = {Constants.URL_CREATE_EXCHANGE_LOAD_PRICE}, method = RequestMethod.PUT)
    public ResponseEntity<?> loadPrice(HttpServletRequest request, ObjectTwoField input) {
        String nomeMetodo = ".loadPrice() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.loadPrice(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CREATE_EXCHANGE_LOAD_PROMOTION}, method = RequestMethod.PUT)
    public ResponseEntity<?> loadPromotion(HttpServletRequest request) {
        String nomeMetodo = ".loadPromotion() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.loadPromotion(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CREATE_EXCHANGE_LOAD_GOODS}, method = RequestMethod.PUT)
    public ResponseEntity<?> loadGoods(HttpServletRequest request, ObjectTwoField input) {
        String nomeMetodo = ".loadGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.loadGoods(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CREATE_EXCHANGE_CALCULATE}, method = RequestMethod.PUT)
    public ResponseEntity<?> calculate(HttpServletRequest request, CalculateObject input) {
        String nomeMetodo = ".calculate() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.calculate(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CREATE_EXCHANGE_LOAD_SERIAL}, method = RequestMethod.PUT)
    public ResponseEntity<?> loadSerial(HttpServletRequest request, SerialSearchModel input) {
        String nomeMetodo = ".loadSerial() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.loadSerial(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_SOURCE_ATTACH_GOODS}, method = RequestMethod.PUT)
    public ResponseEntity<?> getAttachGoods(HttpServletRequest request, ObjectTwoField input) {
        String nomeMetodo = ".getAttachGoods() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.getAttachGoods(request, input);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_CREATE_EXCHANGE_LOAD_PRICE_AND_BUNDLE}, method = RequestMethod.PUT)
    public ResponseEntity<?> getPriceTypeAndBundle(HttpServletRequest request) {
        String nomeMetodo = ".getPriceTypeAndBundle()";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.getPriceTypeAndBundle(request);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_SOURCE_SAVE_TRANSACTION}, method = RequestMethod.PUT)
    public ResponseEntity<?> saveTransaction(HttpServletRequest request, TransactionModel requestInput) {
        String nomeMetodo = ".saveTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.saveTransaction(request, requestInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_SAVE_MGM_PROMOTION}, method = RequestMethod.PUT)
    public ResponseEntity<?> saveMGMPromotion(HttpServletRequest request, MGMPromotionModel requestInput) {
        String nomeMetodo = ".saveTransaction() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.saveMGMPromotion(request, requestInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }

    @RequestMapping(value = {Constants.URL_SOURCE_GET_CURRENT_INVOICE_NO}, method = RequestMethod.PUT)
    public ResponseEntity<?> getCurrentInvoiceNo(HttpServletRequest request, InvoiceNoRequest requestInput) {
        String nomeMetodo = ".getCurrentInvoiceNo() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        ResponseEntity<?> response = createExchangeBusiness.getCurrentInvoiceNo(request, requestInput);
        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return response;
    }
}
