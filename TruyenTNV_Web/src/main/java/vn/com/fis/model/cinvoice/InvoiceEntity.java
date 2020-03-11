package vn.com.fis.model.cinvoice;

import java.util.Date;

public class InvoiceEntity {

	private Date issueDate;
	private String customerAccountInvoiceStr;
	private String accountName;
	private Double currentDue;
	private Double invoiceAmount;
	private String general1; // Ngày bắt đầu chu kì
	private Date effectiveDate;
	private Double statementAmount;
	private String startCycle;
	private String endCycle;
	private String billType;
	private String billTypeCode;

	public Date getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}

	public String getCustomerAccountInvoiceStr() {
		return customerAccountInvoiceStr;
	}

	public void setCustomerAccountInvoiceStr(String customerAccountInvoiceStr) {
		this.customerAccountInvoiceStr = customerAccountInvoiceStr;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public Double getCurrentDue() {
		return currentDue;
	}

	public void setCurrentDue(Double currentDue) {
		this.currentDue = currentDue;
	}

	public Double getInvoiceAmount() {
		return invoiceAmount;
	}

	public void setInvoiceAmount(Double invoiceAmount) {
		this.invoiceAmount = invoiceAmount;
	}

	public String getGeneral1() {
		return general1;
	}

	public void setGeneral1(String general1) {
		this.general1 = general1;
	}

	public Date getEffectiveDate() {
		return effectiveDate;
	}

	public void setEffectiveDate(Date effectiveDate) {
		this.effectiveDate = effectiveDate;
	}

	public Double getStatementAmount() {
		return statementAmount;
	}

	public void setStatementAmount(Double statementAmount) {
		this.statementAmount = statementAmount;
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

	public String getBillType() {
		return billType;
	}

	public void setBillType(String billType) {
		this.billType = billType;
	}

	public String getBillTypeCode() {
		return billTypeCode;
	}

	public void setBillTypeCode(String billTypeCode) {
		this.billTypeCode = billTypeCode;
	}

}
