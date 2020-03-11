package vn.com.fis.model.cinvoice;

import java.util.List;

public class PaymentUpdateInfo {
	private List<TRBillAccountObject> lstChildAccount;
	private double dPaymentAmount;
	private String vat;
	private String postpaidAccountNo;
	private String custNodeId;
	private String msIsdn;
	private String staffId;
	private String shopId;
	private String customerName;
	private String address;
	private String accountName;
	private String taxCode;
	private String startCycle;
	private String endCycle;
	private String userName;
	private String shopCode;
	private String paymentMethod;
	private String staffCode;

	public List<TRBillAccountObject> getLstChildAccount() {
		return lstChildAccount;
	}

	public void setLstChildAccount(List<TRBillAccountObject> lstChildAccount) {
		this.lstChildAccount = lstChildAccount;
	}

	public double getdPaymentAmount() {
		return dPaymentAmount;
	}

	public void setdPaymentAmount(double dPaymentAmount) {
		this.dPaymentAmount = dPaymentAmount;
	}

	public String getVat() {
		return vat;
	}

	public void setVat(String vat) {
		this.vat = vat;
	}

	public String getPostpaidAccountNo() {
		return postpaidAccountNo;
	}

	public void setPostpaidAccountNo(String postpaidAccountNo) {
		this.postpaidAccountNo = postpaidAccountNo;
	}

	public String getCustNodeId() {
		return custNodeId;
	}

	public void setCustNodeId(String custNodeId) {
		this.custNodeId = custNodeId;
	}

	public String getMsIsdn() {
		return msIsdn;
	}

	public void setMsIsdn(String msIsdn) {
		this.msIsdn = msIsdn;
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

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getTaxCode() {
		return taxCode;
	}

	public void setTaxCode(String taxCode) {
		this.taxCode = taxCode;
	}

	public String getStartCycle() {
		return startCycle;
	}

	public void setStartCycle(String startCycle) {
		this.startCycle = startCycle;
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

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
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

}
