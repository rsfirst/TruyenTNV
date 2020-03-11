package vn.com.fis.model.css;

import java.util.List;

public class InputCancelExpriedInvoice {
	private List<BillInvoiceObject> listBillInvoice;
	private String staffId;
	private String shopCode;

	/**
	 * @return the listBillInvoice
	 */
	public List<BillInvoiceObject> getListBillInvoice() {
		return listBillInvoice;
	}

	/**
	 * @param listBillInvoice
	 *            the listBillInvoice to set
	 */
	public void setListBillInvoice(List<BillInvoiceObject> listBillInvoice) {
		this.listBillInvoice = listBillInvoice;
	}

	/**
	 * @return the staffId
	 */
	public String getStaffId() {
		return staffId;
	}

	/**
	 * @param staffId
	 *            the staffId to set
	 */
	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

	/**
	 * @return the shopCode
	 */
	public String getShopCode() {
		return shopCode;
	}

	/**
	 * @param shopCode
	 *            the shopCode to set
	 */
	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

}
