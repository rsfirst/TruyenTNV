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
import vn.com.fis.business.css.CancelInvoiceBusiness;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class CancelExpriedInvoiceController {

    @Autowired
    CancelInvoiceBusiness cancelInvoiceBusiness;

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(CancelExpriedInvoiceController.class);

    @RequestMapping(value = {Constants.ACTION_GET_EXPRIED_BILL_C_INVOICE_BY_STATUS}, method = RequestMethod.GET)
    public ResponseEntity<?> getListCancelExpriedCInvoice(HttpServletRequest request, @RequestParam(name = "shopId") String shopId, @RequestParam(name = "fromDate") String fromDate
            , @RequestParam(name = "toDate") String toDate, @RequestParam(name = "status") String status, @RequestParam(name = "staffId") String staffId) {
        String nomeMetodo = ".getListCancelExpriedCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<BillInvoiceObject> listBillInvoice = new ArrayList<>();
        try {
            listBillInvoice = cancelInvoiceBusiness.getListCancelExpriedCInvoice(request, staffId, shopId, fromDate, toDate, status);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_GET_REPRINT_BILL_C_INVOICE_BY_STATUS}, method = RequestMethod.GET)
    public ResponseEntity<?> getListCancelReprintCInvoice(HttpServletRequest request, @RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate,
                                                          @RequestParam(name = "status") String status, @RequestParam(name = "accountNo") String accountNo, @RequestParam(name = "isdn") String isdn) {
        String nomeMetodo = ".getListCancelReprintCInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        List<BillInvoiceObject> listBillInvoice = new ArrayList<>();
        try {
            listBillInvoice = cancelInvoiceBusiness.getListCancelReprintCInvoice(request, fromDate, toDate, status, accountNo, isdn);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_DESTROY_EXPRIED_BILL_C_INVOICES}, method = RequestMethod.POST)
    public ResponseEntity<?> destroyExpriedBillInvoice(HttpServletRequest request, @RequestBody List<BillInvoiceObject> listBillInvoice, @RequestParam(name = "staffId") String staffId
            , @RequestParam(name = "shopCode") String shopCode) {
        String nomeMetodo = ".getListCancelExpriedInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            listBillInvoice = cancelInvoiceBusiness.destroyExpriedBillInvoice(request, listBillInvoice, true, staffId, shopCode);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_APPROVE_BILL_C_INVOICES}, method = RequestMethod.POST)
    public ResponseEntity<?> updateApproveBillInvoice(HttpServletRequest request, @RequestBody List<BillInvoiceObject> listBillInvoice) {
        String nomeMetodo = ".updateApproveBillInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            listBillInvoice = cancelInvoiceBusiness.updateApproveBillInvoice(request, listBillInvoice);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_CREATE_BILL_C_INVOICES}, method = RequestMethod.POST)
    public ResponseEntity<?> updateCreateBillInvoice(HttpServletRequest request, @RequestBody List<BillInvoiceObject> listBillInvoice) {
        String nomeMetodo = ".updateCreateBillInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            listBillInvoice = cancelInvoiceBusiness.updateCreateBillInvoice(request, listBillInvoice);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }

    @RequestMapping(value = {Constants.ACTION_REJECT_BILL_C_INVOICES}, method = RequestMethod.POST)
    public ResponseEntity<?> updateRejectBillInvoice(HttpServletRequest request, @RequestBody List<BillInvoiceObject> listBillInvoice) {
        String nomeMetodo = ".updateRejectBillInvoice() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        MessagesResponse mess = new MessagesResponse();
        try {
            listBillInvoice = cancelInvoiceBusiness.updateRejectBillInvoice(request, listBillInvoice);
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }
        return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);
    }
}
