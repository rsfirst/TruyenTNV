package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CInvoiceControllerW
{
    @RequestMapping("/bs/createInvoiceBill")
    public String createInvoiceBill()
    {
        return "css/invoice/createInvoiceBill";
    }

    @RequestMapping("/bs/createInvoiceSale")
    public String createInvoiceSale()
    {
        return "css/invoice/createInvoiceSale";
    }

    @RequestMapping("/bs/approveInvoiceSale")
    public String approveInvoiceSale()
    {
        return "css/invoice/approveInvoiceSale";
    }

    @RequestMapping("/bs/adjustInvoice")
    public String adjustInvoice()
    {
        return "css/invoice/adjustInvoice";
    }

    @RequestMapping("/bs/replaceInvoice")
    public String replaceInvoice()
    {
        return "css/invoice/replaceInvoice";
    }

    @RequestMapping("/bs/printInvoiceByBatchAfter")
    public String printInvoiceByBatchAfter()
    {
        return "css/invoice/printInvoiceByBatchAfter";
    }

    @RequestMapping("/bs/printInvoiceByBatchBefore")
    public String printInvoiceByBatchBefore()
    {
        return "css/invoice/printInvoiceByBatchBefore";
    }

    @RequestMapping("/bs/cancelReprintInvoice")
    public String cancelReprintInvoice()
    {
        return "css/invoice/cancelReprintInvoice";
    }

    @RequestMapping("/bs/cancelExpriedInvoice")
    public String cancelExpriedInvoice()
    {
        return "css/invoice/cancelExpriedInvoice";
    }

    @RequestMapping("/bs/createExchangeForCust")
    public String createExchangeForCust()
    {
        return "css/invoice/createExchangeForCust";
    }

    @RequestMapping("/bs/individualInvoice")
    public String individualInvoice()
    {
        return "css/invoice/individualInvoice";
    }

    @RequestMapping("/bs/replaceBillOfSaleInvoice")
    public String replaceBillOfSaleInvoice()
    {
        return "css/invoice/replaceBillOfSaleInvoice";
    }

}
