package vn.com.fis.model.cinvoice;

public class DepositTrans {
	public static final String TYPE_DEPOSIT = "DEP"; // Type is DEPOSIT
	public static final String TYPE_REFUND = "REF"; // TYPE is refund or deposit
													// return

	private String depositId;
	private String transType;
	private String createdDate;
	private String amount;
	private String stockId;
	private String airtimeTransId;
	private String cbTransId;
	private String cbAccountId;
	private String cbCustomerId;
	private String custName;
	private String custAddress;
	private String createUser;
	private String reasonCode;
	private String accountCode;

	public DepositTrans() {

	}

	public DepositTrans(String depositId, String transType, String createdDate, String amount, String stockId,
			String airtimeTransId, String cbTransId, String cbAccountId, String cbCustomerId) {
		this.depositId = depositId;
		this.transType = transType;
		this.createdDate = createdDate;
		this.amount = amount;
		this.stockId = stockId;
		this.airtimeTransId = airtimeTransId;
		this.cbTransId = cbTransId;
		this.cbAccountId = cbAccountId;
		this.cbCustomerId = cbCustomerId;
	}

	public String getDepositId() {
		return depositId;
	}

	public String getTransType() {
		return transType;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public String getAmount() {
		return amount;
	}

	public String getStockId() {
		return stockId;
	}

	public String getAirtimeTransId() {
		return airtimeTransId;
	}

	public String getCbTransId() {
		return cbTransId;
	}

	public String getCbAccountId() {
		return cbAccountId;
	}

	public String getCbCustomerId() {
		return cbCustomerId;
	}

	public String getCustName() {
		return custName;
	}

	public String getCustAddress() {
		return custAddress;
	}

	public void setDepositId(String depositId) {
		this.depositId = depositId;
	}

	public void setTransType(String transType) {
		this.transType = transType;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public void setAirtimeTransId(String airtimeTransId) {
		this.airtimeTransId = airtimeTransId;
	}

	public void setCbTransId(String cbTransId) {
		this.cbTransId = cbTransId;
	}

	public void setCbAccountId(String cbAccountId) {
		this.cbAccountId = cbAccountId;
	}

	public void setCbCustomerId(String cbCustomerId) {
		this.cbCustomerId = cbCustomerId;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public void setCustAddress(String custAddress) {
		this.custAddress = custAddress;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getReasonCode() {
		return reasonCode;
	}

	public void setReasonCode(String reasonCode) {
		this.reasonCode = reasonCode;
	}

	public String getAccountCode() {
		return accountCode;
	}

	public void setAccountCode(String accountCode) {
		this.accountCode = accountCode;
	}

}
