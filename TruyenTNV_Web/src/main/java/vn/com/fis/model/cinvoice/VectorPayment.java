package vn.com.fis.model.cinvoice;


public class VectorPayment {
	private String totalDept;// 1,
	private String remainDept;// 1,
	private String subTotal;// 1,
	private String vatAmout;// 1,
	private String grandTotal;// 1,
	private String paymentId;// ,
	private String currentCode;// 1,
	private String paymentType;// 4,
	private String accountId;// $scope.model.accountNumber,
	private String custNodeId;// selectedTrBillAccount.cust_REF_NO,
	private String receiptDate;// currentDate,
	private String subNumber;// selectedTrBillAccount.msisdn,
	private String startCyle;// currentDate,//fixme
	private String endCycle;// currentDate,//fixme
	private String userName;// $localStorage.clientContext.shop.staffName,
	private String collectionGroupId;// 1,
	private String collectionStaffId;// ,
	private String bankCode;// ,
	private String bankName;// ,
	private String bankAccountNo;// ,
	private String bankNo;// ,
	private String bankDate;// ,
	private String accountHolder;// ,
	private String status;// 1,
	private String requestStaffId;// ,
	private String requestStaff;// ,
	private String paymentCheckId;// ,
	private String cenId;// ,
	private String billBookNo;// ,
	private String adjPayment;// ,
	private String adjReason;// ,
	private String depositType;// ,
	private String amountOrg;// $scope.model.noTax,
	private String amountVat;// $scope.model.totalVat,
	private String amount;// $scope.model.intoMoney,
	private String amountNonVat;// 0,
	private String amountOverDebit;// 0,
	private String depositAmount;// 0,
	private String staffId;// $localStorage.clientContext.shop.staffId,
	private String shopId;// $localStorage.clientContext.shop.shopId,
	private String subName;// ,
	private String accountName;// ,
	private String addressCusPayment;

	private String sessionShopType;
	private int stockId;
	private String ipClient;
	private String paymentMethod;
	private String staffCode;
	private String shopCode;
	public String getTotalDept() {
		return totalDept;
	}

	public void setTotalDept(String totalDept) {
		this.totalDept = totalDept;
	}

	public String getRemainDept() {
		return remainDept;
	}

	public void setRemainDept(String remainDept) {
		this.remainDept = remainDept;
	}

	public String getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(String subTotal) {
		this.subTotal = subTotal;
	}

	public String getVatAmout() {
		return vatAmout;
	}

	public void setVatAmout(String vatAmout) {
		this.vatAmout = vatAmout;
	}

	public String getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(String grandTotal) {
		this.grandTotal = grandTotal;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getCurrentCode() {
		return currentCode;
	}

	public void setCurrentCode(String currentCode) {
		this.currentCode = currentCode;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}

	public String getCustNodeId() {
		return custNodeId;
	}

	public void setCustNodeId(String custNodeId) {
		this.custNodeId = custNodeId;
	}

	public String getReceiptDate() {
		return receiptDate;
	}

	public void setReceiptDate(String receiptDate) {
		this.receiptDate = receiptDate;
	}

	public String getSubNumber() {
		return subNumber;
	}

	public void setSubNumber(String subNumber) {
		this.subNumber = subNumber;
	}

	public String getStartCyle() {
		return startCyle;
	}

	public void setStartCyle(String startCyle) {
		this.startCyle = startCyle;
	}

	public String getEndCycle() {
		return endCycle;
	}

	public void setEndCycle(String endCycle) {
		this.endCycle = endCycle;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCollectionGroupId() {
		return collectionGroupId;
	}

	public void setCollectionGroupId(String collectionGroupId) {
		this.collectionGroupId = collectionGroupId;
	}

	public String getCollectionStaffId() {
		return collectionStaffId;
	}

	public void setCollectionStaffId(String collectionStaffId) {
		this.collectionStaffId = collectionStaffId;
	}

	public String getBankCode() {
		return bankCode;
	}

	public void setBankCode(String bankCode) {
		this.bankCode = bankCode;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getBankAccountNo() {
		return bankAccountNo;
	}

	public void setBankAccountNo(String bankAccountNo) {
		this.bankAccountNo = bankAccountNo;
	}

	public String getBankNo() {
		return bankNo;
	}

	public void setBankNo(String bankNo) {
		this.bankNo = bankNo;
	}

	public String getBankDate() {
		return bankDate;
	}

	public void setBankDate(String bankDate) {
		this.bankDate = bankDate;
	}

	public String getAccountHolder() {
		return accountHolder;
	}

	public void setAccountHolder(String accountHolder) {
		this.accountHolder = accountHolder;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRequestStaffId() {
		return requestStaffId;
	}

	public void setRequestStaffId(String requestStaffId) {
		this.requestStaffId = requestStaffId;
	}

	public String getRequestStaff() {
		return requestStaff;
	}

	public void setRequestStaff(String requestStaff) {
		this.requestStaff = requestStaff;
	}

	public String getPaymentCheckId() {
		return paymentCheckId;
	}

	public void setPaymentCheckId(String paymentCheckId) {
		this.paymentCheckId = paymentCheckId;
	}

	public String getCenId() {
		return cenId;
	}

	public void setCenId(String cenId) {
		this.cenId = cenId;
	}

	public String getBillBookNo() {
		return billBookNo;
	}

	public void setBillBookNo(String billBookNo) {
		this.billBookNo = billBookNo;
	}

	public String getAdjPayment() {
		return adjPayment;
	}

	public void setAdjPayment(String adjPayment) {
		this.adjPayment = adjPayment;
	}

	public String getAdjReason() {
		return adjReason;
	}

	public void setAdjReason(String adjReason) {
		this.adjReason = adjReason;
	}

	public String getDepositType() {
		return depositType;
	}

	public void setDepositType(String depositType) {
		this.depositType = depositType;
	}

	public String getAmountOrg() {
		return amountOrg;
	}

	public void setAmountOrg(String amountOrg) {
		this.amountOrg = amountOrg;
	}

	public String getAmountVat() {
		return amountVat;
	}

	public void setAmountVat(String amountVat) {
		this.amountVat = amountVat;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getAmountNonVat() {
		return amountNonVat;
	}

	public void setAmountNonVat(String amountNonVat) {
		this.amountNonVat = amountNonVat;
	}

	public String getAmountOverDebit() {
		return amountOverDebit;
	}

	public void setAmountOverDebit(String amountOverDebit) {
		this.amountOverDebit = amountOverDebit;
	}

	public String getDepositAmount() {
		return depositAmount;
	}

	public void setDepositAmount(String depositAmount) {
		this.depositAmount = depositAmount;
	}

	public String getStaffId() {
		return staffId;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getSubName() {
		return subName;
	}

	public void setSubName(String subName) {
		this.subName = subName;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getAddressCusPayment() {
		return addressCusPayment;
	}

	public void setAddressCusPayment(String addressCusPayment) {
		this.addressCusPayment = addressCusPayment;
	}


	public String getSessionShopType() {
		return sessionShopType;
	}

	public void setSessionShopType(String sessionShopType) {
		this.sessionShopType = sessionShopType;
	}

	public int getStockId() {
		return stockId;
	}

	public void setStockId(int stockId) {
		this.stockId = stockId;
	}

	public String getIpClient() {
		return ipClient;
	}

	public void setIpClient(String ipClient) {
		this.ipClient = ipClient;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getStaffCode() {
		return staffCode;
	}

	public void setStaffCode(String staffCode) {
		this.staffCode = staffCode;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

}
