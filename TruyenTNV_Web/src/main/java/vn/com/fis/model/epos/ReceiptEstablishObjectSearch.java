package vn.com.fis.model.epos;

public class ReceiptEstablishObjectSearch {
	private String shopId;
	private String staffId;
	private String invoiceType;
	private String paymentMethod;
	private String fromDate;
	private String toDate;
	public ReceiptEstablishObjectSearch() {
		// TODO Auto-generated constructor stub
	}
	public ReceiptEstablishObjectSearch(String shopId, String staffId, String invoiceType, String paymentMethod,
			String fromDate, String toDate) {
		super();
		this.shopId = shopId;
		this.staffId = staffId;
		this.invoiceType = invoiceType;
		this.paymentMethod = paymentMethod;
		this.fromDate = fromDate;
		this.toDate = toDate;
	}
	public String getShopId() {
		return shopId;
	}
	public void setShopId(String shopId) {
		this.shopId = shopId;
	}
	public String getStaffId() {
		return staffId;
	}
	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}
	public String getInvoiceType() {
		return invoiceType;
	}
	public void setInvoiceType(String invoiceType) {
		this.invoiceType = invoiceType;
	}
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	
	
}
