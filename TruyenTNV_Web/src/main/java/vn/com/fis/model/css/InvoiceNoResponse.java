package vn.com.fis.model.css;

public class InvoiceNoResponse {
	private String billTQ;
	private String billSerial;
	private String billFrom;
	private String billTo;
	private String billCurrent;

	private String invAssignedStaffId;
	private String lengthInvoice;
	private String status;

	public String getBillTQ() {
		return billTQ;
	}

	public void setBillTQ(String billTQ) {
		this.billTQ = billTQ;
	}

	public String getBillSerial() {
		return billSerial;
	}

	public void setBillSerial(String billSerial) {
		this.billSerial = billSerial;
	}

	public String getBillFrom() {
		return billFrom;
	}

	public void setBillFrom(String billFrom) {
		this.billFrom = billFrom;
	}

	public String getBillTo() {
		return billTo;
	}

	public void setBillTo(String billTo) {
		this.billTo = billTo;
	}

	public String getBillCurrent() {
		return billCurrent;
	}

	public void setBillCurrent(String billCurrent) {
		this.billCurrent = billCurrent;
	}

	public String getInvAssignedStaffId() {
		return invAssignedStaffId;
	}

	public void setInvAssignedStaffId(String invAssignedStaffId) {
		this.invAssignedStaffId = invAssignedStaffId;
	}

	public String getLengthInvoice() {
		return lengthInvoice;
	}

	public void setLengthInvoice(String lengthInvoice) {
		this.lengthInvoice = lengthInvoice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
