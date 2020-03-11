package vn.com.fis.model.cinvoice;


import vn.com.fis.model.css.CInvoiceObject;

import java.util.List;

public class InputPrintCInvoice {
	private List<CInvoiceObject> lstCIvoiceObj;
	private String shopCode;
	private List<TRBillInvoice> lstTRBillInvoice;
	String index;

	public List<CInvoiceObject> getLstCIvoiceObj() {
		return lstCIvoiceObj;
	}

	public void setLstCIvoiceObj(List<CInvoiceObject> lstCIvoiceObj) {
		this.lstCIvoiceObj = lstCIvoiceObj;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public List<TRBillInvoice> getLstTRBillInvoice() {
		return lstTRBillInvoice;
	}

	public void setLstTRBillInvoice(List<TRBillInvoice> lstTRBillInvoice) {
		this.lstTRBillInvoice = lstTRBillInvoice;
	}

	public String getIndex() {
		return index;
	}

	public void setIndex(String index) {
		this.index = index;
	}

}
