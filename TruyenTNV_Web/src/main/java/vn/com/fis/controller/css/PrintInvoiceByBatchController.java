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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import vn.com.fis.business.css.CommonBusinessCSS;
import vn.com.fis.business.css.PrintInvoiceByBatchBussiness;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.CInvoiceObject;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ResponseModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
@RequestMapping(Constants.CINVOICE_PRINT_BY_BATCH_ROOT)
public class PrintInvoiceByBatchController {

    private static final Logger LOG = LoggerFactory.getLogger(PrintInvoiceByBatchController.class);

    @Autowired
    PrintInvoiceByBatchBussiness printInvoiceByBatchBussiness;

    @Autowired
    CommonBusinessCSS commonBusiness;

    @RequestMapping(value = Constants.CINVOICE_SUB_PRINT_BY_BATCH_SEARCH, method = RequestMethod.POST)
    @ResponseBody
    public ResponseModel search(HttpServletRequest request, @RequestBody BillInvoiceObject billInput) {
        return this.printInvoiceByBatchBussiness.enqueryTransaction(request, billInput);
    }

    @RequestMapping(value = Constants.CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_CINVOICE, method = RequestMethod.POST)
    @ResponseBody
    public ResponseModel print(HttpServletRequest request, @RequestBody List<CInvoiceObject> cInvoiceList) {
        return this.printInvoiceByBatchBussiness.onPrintCInvoice(request, cInvoiceList);
    }

    @RequestMapping(value = Constants.CINVOICE_SUB_PRINT_BY_BATCH_ONCREATE_CINVOICE, method = RequestMethod.POST)
    @ResponseBody
    public ResponseModel create(HttpServletRequest request, @RequestBody List<BillInvoiceObject> cInvoiceList) {
        return this.printInvoiceByBatchBussiness.onCreateCInvoice(request, cInvoiceList);
    }

    @RequestMapping(value = {
            Constants.CINVOICE_SUB_PRINT_BY_BATCH_GET_LIST_ACCOUNT_FROM_FILE}, method = RequestMethod.POST)
    public ResponseEntity<?> getListAccountFromFile(MultipartHttpServletRequest request) throws IOException {
        String nomeMetodo = ".getListAccountFromFile() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<String> listAccount = new ArrayList<String>();

        Iterator<String> itr = request.getFileNames();
        MultipartFile file = request.getFile(itr.next());
        InputStream fileInput = new ByteArrayInputStream(file.getBytes());
        try {

            listAccount = commonBusiness.getListAccountFromFile(fileInput);

        } catch (Exception e) {
            MessagesResponse jMsg = new MessagesResponse();
            jMsg.setMessages(e.getMessage());
            jMsg.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);

            return new ResponseEntity<MessagesResponse>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<String>>(listAccount, HttpStatus.OK);
    }
}
