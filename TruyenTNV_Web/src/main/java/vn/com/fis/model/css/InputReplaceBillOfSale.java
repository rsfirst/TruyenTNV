package vn.com.fis.model.css;

import vn.com.fis.model.CInvoiceModel.InvoiceHeaderOb;

public class InputReplaceBillOfSale {
	private InvoiceHeaderOb itemHeaderInvoice;
	private String shopCode;
	private String staffId;


	/**
	 * @return the itemHeaderInvoice
	 */
	public InvoiceHeaderOb getItemHeaderInvoice() {
		return itemHeaderInvoice;
	}

	/**
	 * @param itemHeaderInvoice the itemHeaderInvoice to set
	 */
	public void setItemHeaderInvoice(InvoiceHeaderOb itemHeaderInvoice) {
		this.itemHeaderInvoice = itemHeaderInvoice;
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

}
