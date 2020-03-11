package vn.com.fis.model.cinvoice;

public class VectorPaymentDetail {
	private String createDate;// currentDate,
	private String accountId;// $scope.model.accountNumber,
	private String startCycle;// currentDate,//fixme
	private String endCycle;// currentDate,//fixme
	private String amountOrg;// $scope.model.noTax,
	private String amountVat;// $scope.model.totalVat,
	private String amount;// $scope.model.intoMoney,
	private String amountNonVat;// 0,
	private String amountOverDebit;// 0,
	private String amountDebit;// selectedTrBillAccount.account_BALANCE,
	private String billInvoiceNo;// ,
	private String over;// 1,
	private String svInvoiceId;//

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getAccountId() {
		return accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
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

	public String getAmountDebit() {
		return amountDebit;
	}

	public void setAmountDebit(String amountDebit) {
		this.amountDebit = amountDebit;
	}

	public String getBillInvoiceNo() {
		return billInvoiceNo;
	}

	public void setBillInvoiceNo(String billInvoiceNo) {
		this.billInvoiceNo = billInvoiceNo;
	}

	public String getOver() {
		return over;
	}

	public void setOver(String over) {
		this.over = over;
	}

	public String getSvInvoiceId() {
		return svInvoiceId;
	}

	public void setSvInvoiceId(String svInvoiceId) {
		this.svInvoiceId = svInvoiceId;
	}

}
