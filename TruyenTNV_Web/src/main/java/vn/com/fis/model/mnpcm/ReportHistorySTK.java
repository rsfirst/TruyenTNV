package vn.com.fis.model.mnpcm;

public class ReportHistorySTK {
	private String transferId;
	private String transDate;
	private String transTime;
	private String transType;
	private String senderMsisdn;
	private String receiverMsisdn;
	private String sendNewBal;
	private String rcvrNewBal;
	private String transAmount;
	private String sapCode;
	private String agentName;
	
	public String getTransferId() {
		return transferId;
	}
	public void setTransferId(String transferId) {
		this.transferId = transferId;
	}
	public String getSenderMsisdn() {
		return senderMsisdn;
	}
	public void setSenderMsisdn(String senderMsisdn) {
		this.senderMsisdn = senderMsisdn;
	}
	public String getReceiverMsisdn() {
		return receiverMsisdn;
	}
	public void setReceiverMsisdn(String receiverMsisdn) {
		this.receiverMsisdn = receiverMsisdn;
	}
	public String getSendNewBal() {
		return sendNewBal;
	}
	public void setSendNewBal(String sendNewBal) {
		this.sendNewBal = sendNewBal;
	}
	public String getRcvrNewBal() {
		return rcvrNewBal;
	}
	public void setRcvrNewBal(String rcvrNewBal) {
		this.rcvrNewBal = rcvrNewBal;
	}
	public String getTransAmount() {
		return transAmount;
	}
	public void setTransAmount(String transAmount) {
		this.transAmount = transAmount;
	}
	public String getTransDate() {
		return transDate;
	}
	public void setTransDate(String transDate) {
		this.transDate = transDate;
	}
	public String getTransTime() {
		return transTime;
	}
	public void setTransTime(String transTime) {
		this.transTime = transTime;
	}
	public String getTransType() {
		return transType;
	}
	public void setTransType(String transType) {
		this.transType = transType;
	}
	public String getSapCode() {
		return sapCode;
	}
	public void setSapCode(String sapCode) {
		this.sapCode = sapCode;
	}
	public String getAgentName() {
		return agentName;
	}
	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}
	
	
}
