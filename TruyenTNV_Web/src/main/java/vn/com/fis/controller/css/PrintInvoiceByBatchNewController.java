package vn.com.fis.controller.css;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.com.fis.business.css.PrintInvoiceByBatchNewBussiness;
import vn.com.fis.model.cinvoice.DataPrintInvoice;
import vn.com.fis.model.css.BillInvoiceNewObject;
import vn.com.fis.model.css.ResponseModel;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(Constants.CINVOICE_PRINT_BY_BATCH_NEW_ROOT)
public class PrintInvoiceByBatchNewController {

    @Autowired
    PrintInvoiceByBatchNewBussiness printInvoiceByBatchNewBussiness;

    @RequestMapping(value = Constants.CINVOICE_SUB_PRINT_BY_BATCHEW_NEW_SEARCH, method = RequestMethod.POST)
    @ResponseBody
    public ResponseModel search(HttpServletRequest request, @RequestBody BillInvoiceNewObject billInput) {
        return this.printInvoiceByBatchNewBussiness.onSearch(request, billInput);
    }

    @RequestMapping(value = Constants.CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_NEW_CINVOICE, method = RequestMethod.POST)
    @ResponseBody
    public ResponseModel print(HttpServletRequest request, @RequestBody DataPrintInvoice vctPrintInvoice) {
        return this.printInvoiceByBatchNewBussiness.onPrintCInvoice(request, vctPrintInvoice);
    }
}
