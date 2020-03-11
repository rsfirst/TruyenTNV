package vn.com.fis.model.cinvoice;

public class VectorPaymentInsert {
	


	private String general1="1111222200";
	private String general2="1111222200";
	private String general7;// $localStorage.clientContext.shop.staffName + - +$localStorage.clientContext.shop.shopName+ , +$localStorage.clientContext.shop.address,
	private String general8;// ,
	private String general9;// $localStorage.clientContext.shop.staffCode,
	private String general10;// $localStorage.clientContext.shop.shopCode,
	private String postpaidAccountNo;// $scope.model.accountNumber,
	private String customerNodeId;// selectedTrBillAccount.parent_ACCOUN_NO,
	private String toAccountId;//$scope.model.accountNumber,
	private String paymentTypeId;//500001,
	private String currentcyId;//1,
	private String paymentLocationCode;//1,
	private String autoAllocateIndCode;//1,
	private String payementReceivedDate;//0,
	private String paymentDate;//0,
	
	public String getGeneral1() {
		return general1;
	}
	public void setGeneral1(String general1) {
		this.general1 = general1;
	}
	public String getGeneral2() {
		return general2;
	}
	public void setGeneral2(String general2) {
		this.general2 = general2;
	}
	public String getGeneral7() {
		return general7;
	}
	public void setGeneral7(String general7) {
		this.general7 = general7;
	}
	public String getGeneral8() {
		return general8;
	}
	public void setGeneral8(String general8) {
		this.general8 = general8;
	}
	public String getGeneral9() {
		return general9;
	}
	public void setGeneral9(String general9) {
		this.general9 = general9;
	}
	public String getGeneral10() {
		return general10;
	}
	public void setGeneral10(String general10) {
		this.general10 = general10;
	}
	public String getPostpaidAccountNo() {
		return postpaidAccountNo;
	}
	public void setPostpaidAccountNo(String postpaidAccountNo) {
		this.postpaidAccountNo = postpaidAccountNo;
	}
	public String getCustomerNodeId() {
		return customerNodeId;
	}
	public void setCustomerNodeId(String customerNodeId) {
		this.customerNodeId = customerNodeId;
	}
	public String getToAccountId() {
		return toAccountId;
	}
	public void setToAccountId(String toAccountId) {
		this.toAccountId = toAccountId;
	}
	public String getPaymentTypeId() {
		return paymentTypeId;
	}
	public void setPaymentTypeId(String paymentTypeId) {
		this.paymentTypeId = paymentTypeId;
	}
	public String getCurrentcyId() {
		return currentcyId;
	}
	public void setCurrentcyId(String currentcyId) {
		this.currentcyId = currentcyId;
	}
	public String getPaymentLocationCode() {
		return paymentLocationCode;
	}
	public void setPaymentLocationCode(String paymentLocationCode) {
		this.paymentLocationCode = paymentLocationCode;
	}
	public String getAutoAllocateIndCode() {
		return autoAllocateIndCode;
	}
	public void setAutoAllocateIndCode(String autoAllocateIndCode) {
		this.autoAllocateIndCode = autoAllocateIndCode;
	}
	public String getPayementReceivedDate() {
		return payementReceivedDate;
	}
	public void setPayementReceivedDate(String payementReceivedDate) {
		this.payementReceivedDate = payementReceivedDate;
	}
	public String getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(String paymentDate) {
		this.paymentDate = paymentDate;
	}
		
	
}
