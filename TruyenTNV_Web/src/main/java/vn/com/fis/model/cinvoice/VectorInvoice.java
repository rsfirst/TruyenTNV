package vn.com.fis.model.cinvoice;

public class VectorInvoice {
	private String invoiceId;//,
	private String paymentId;//,
	private String invoiceType;//1,
	private String invoiceNo;//,
	private String amountOrg;// $scope.model.noTax,
	private String amountNonTax;//0,
	private String amountDiscount;//0,
	private String amountPromote;//0,
	private String amountVat;//$scope.model.totalVat,
	private String amountTotal;//$scope.model.intoMoney,
	private String fromDate;// currentDate,//fixme
	private String toDate;//currentDate,//fixme
	private String status;//0,
	private String blockNo;//,
	private String serialNo;//,
	private String customerName;// selectedTrBillAccount.last_NAME +   + selectedTrBillAccount.bill_ACC_NAME,
	private String address;// selectedTrBillAccount.bill_ADDR_LINE1+, +selectedTrBillAccount.postal_DISTRICT +,+selectedTrBillAccount.poatal_PROVINCE,
	private String tel;//,
	private String accountNo;// selectedTrBillAccount.account_BILL,
	private String taxCode;// 0107479988,//fixme
	private String shopId;// $localStorage.clientContext.shop.shopId,
	private String staffId;// $localStorage.clientContext.shop.staffId,
	private String mdn;//

	public String getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public String getInvoiceType() {
		return invoiceType;
	}
	public void setInvoiceType(String invoiceType) {
		this.invoiceType = invoiceType;
	}
	public String getInvoiceNo() {
		return invoiceNo;
	}
	public void setInvoiceNo(String invoiceNo) {
		this.invoiceNo = invoiceNo;
	}
	public String getAmountOrg() {
		return amountOrg;
	}
	public void setAmountOrg(String amountOrg) {
		this.amountOrg = amountOrg;
	}
	public String getAmountNonTax() {
		return amountNonTax;
	}
	public void setAmountNonTax(String amountNonTax) {
		this.amountNonTax = amountNonTax;
	}
	public String getAmountDiscount() {
		return amountDiscount;
	}
	public void setAmountDiscount(String amountDiscount) {
		this.amountDiscount = amountDiscount;
	}
	public String getAmountPromote() {
		return amountPromote;
	}
	public void setAmountPromote(String amountPromote) {
		this.amountPromote = amountPromote;
	}
	public String getAmountVat() {
		return amountVat;
	}
	public void setAmountVat(String amountVat) {
		this.amountVat = amountVat;
	}
	public String getAmountTotal() {
		return amountTotal;
	}
	public void setAmountTotal(String amountTotal) {
		this.amountTotal = amountTotal;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getBlockNo() {
		return blockNo;
	}
	public void setBlockNo(String blockNo) {
		this.blockNo = blockNo;
	}
	public String getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	public String getTaxCode() {
		return taxCode;
	}
	public void setTaxCode(String taxCode) {
		this.taxCode = taxCode;
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
	public String getMdn() {
		return mdn;
	}
	public void setMdn(String mdn) {
		this.mdn = mdn;
	}

	
}
