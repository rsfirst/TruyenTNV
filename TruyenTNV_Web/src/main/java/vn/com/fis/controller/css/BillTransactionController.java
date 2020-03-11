package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import vn.com.fis.business.css.BillTransactionBusiness;
import vn.com.fis.cinvoice.bean.CInvoiceOutput;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.utils.mnpcm.CommonUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class BillTransactionController {

    @Autowired
    BillTransactionBusiness billTransactionBusiness;

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(BillTransactionController.class);

    @RequestMapping(value = {Constants.ACTION_GET_BILL_TRANSACTION_INVOICE}, method = RequestMethod.GET)
    public ResponseEntity<?> getListBillTransactionInvoice(HttpServletRequest request, @RequestParam(name = "status") String status, @RequestParam(name = "mdn") String mdn
            , @RequestParam(name = "cusName") String cusName, @RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate
            , @RequestParam(name = "staffId") String staffId, @RequestParam(name = "shopId") String shopId) {
        String nomeMetodo = ".getListBillTransactionInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<BillInvoiceObject> listBillInvoice = new ArrayList<>();
        try {
            if (!mdn.equalsIgnoreCase("")) {
                mdn = CommonUtils.formatMsisdn0(mdn);
            }
            cusName = cusName.replace("-", "%");
            listBillInvoice = billTransactionBusiness.getListBillTransaction(request, status, mdn, cusName, fromDate, toDate, staffId, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_GET_BILL_TRANSACTION_C_INVOICE}, method = RequestMethod.GET)
    public ResponseEntity<?> getListBillTransactionCInvoice(HttpServletRequest request, @RequestParam(name = "status") String status, @RequestParam(name = "mdn") String mdn
            , @RequestParam(name = "cusName") String cusName, @RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate
            , @RequestParam(name = "staffId") String staffId, @RequestParam(name = "shopId") String shopId) {
        String nomeMetodo = ".getListBillTransactionCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<BillInvoiceObject> listBillInvoice = new ArrayList<>();
        try {
            if (!mdn.equalsIgnoreCase("")) {
                mdn = CommonUtils.formatMsisdn0(mdn);
            }
            cusName = cusName.replace("-", "%");
            listBillInvoice = billTransactionBusiness.getListBillTransactionCinvoice(request, status, mdn, cusName, fromDate, toDate, staffId, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_PRINT_BILL_TRANSACTION_C_INVOICE}, method = RequestMethod.POST)
    public ResponseEntity<?> printBillCInvoice(HttpServletRequest request, @RequestBody BillInvoiceObject billInvoice, @RequestParam(name = "shopCode") String shopCode) {
        String nomeMetodo = ".printBillCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        CInvoiceOutput cInvoiceResult = new CInvoiceOutput();
        try {
            cInvoiceResult = billTransactionBusiness.printBillCInvoice(request, billInvoice, shopCode);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<CInvoiceOutput>(cInvoiceResult, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_PRINT_BILL_TRANSACTION_C_INVOICE_CHANGE}, method = RequestMethod.POST)
    public ResponseEntity<?> printBillCInvoiceChange(HttpServletRequest request, @RequestBody BillInvoiceObject billInvoice, @RequestParam(name = "shopCode") String shopCode) {
        String nomeMetodo = ".printBillCInvoiceChange() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        CInvoiceOutput cInvoiceResult = new CInvoiceOutput();
        try {
            cInvoiceResult = billTransactionBusiness.printBillCInvoiceChange(request, billInvoice, shopCode);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<CInvoiceOutput>(cInvoiceResult, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_DESTROY_BILL_TRANSACTION_C_INVOICE}, method = RequestMethod.POST)
    public ResponseEntity<?> destroyBillCInvoice(HttpServletRequest request, @RequestBody BillInvoiceObject billInvoice, @RequestParam(name = "shopCode") String shopCode
            , @RequestParam(name = "shopType") String shopType, @RequestParam(name = "shopId") String shopId) {
        String nomeMetodo = ".destroyBillCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            billTransactionBusiness.destroyBillCInvoice(request, billInvoice, shopCode, shopType, shopId);
            mess.setMessages(String.valueOf(CommonConstant.SUCCESS_TEXT));
            mess.setStatus(String.valueOf(CommonConstant.STATUS_APPROVE));
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_CREATE_BILL_TRANSACTION_C_INVOICE}, method = RequestMethod.POST)
    public ResponseEntity<?> createBillCInvoice(HttpServletRequest request, @RequestBody BillInvoiceObject billInvoice, @RequestParam(name = "shopCode") String shopCode, @RequestParam(name = "shopId") String shopId) {
        String nomeMetodo = ".createBillCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            mess = billTransactionBusiness.createBillCInvoice(request, billInvoice, shopCode, shopId);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }
}
