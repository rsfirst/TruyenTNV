package vn.com.fis.model.css;

public class InputReplaceInvoice {
	private BillInvoiceObject billInvoice;
	private String shopCode;
	private String staffId;

	/**
	 * @return the billInvoice
	 */
	public BillInvoiceObject getBillInvoice() {
		return billInvoice;
	}

	/**
	 * @param billInvoice
	 *            the billInvoice to set
	 */
	public void setBillInvoice(BillInvoiceObject billInvoice) {
		this.billInvoice = billInvoice;
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
