package vn.com.fis.model.css;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: Copyright (c) 2008</p>
 *
 * <p>Company: FPT - IS</p>
 *
 * @author not attributable
 * @version 1.0
 */
public class InputC2S
{
	public InputC2S()
	{
	}

	private String sourceMsisdn;
	private String oldPin;
	private String newPin;
	private String confirmPin;
	private String targetMsisdn;
	private long amount;
	private String extRefnum;
	private String extCode2;
	private String productCode;
	private int quantity;
	private int exttxnNumber;
	private String exttxnDate;
	private String trfCategory;
	private int refNumber;
	private String paymentType;
	private String paymentTinsNumber;
	private String paymentDate;
	private String reason;
	public String getSourceMsisdn()
	{
		return sourceMsisdn;
	}

	public void setSourceMsisdn(String sourceMsisdn)
	{
		this.sourceMsisdn = sourceMsisdn;
	}

	public String getOldPin()
	{
		return oldPin;
	}

	public void setOldPin(String oldPin)
	{
		this.oldPin = oldPin;
	}

	public String getNewPin()
	{
		return newPin;
	}

	public void setNewPin(String newPin)
	{
		this.newPin = newPin;
	}

	public String getConfirmPin()
	{
		return confirmPin;
	}

	public void setConfirmPin(String confirmPin)
	{
		this.confirmPin = confirmPin;
	}

	public String getTargetMsisdn()
	{
		return targetMsisdn;
	}

	public void setTargetMsisdn(String targetMsisdn)
	{
		this.targetMsisdn = targetMsisdn;
	}

	public long getAmount()
	{
		return amount;
	}

	public void setAmount(long amount)
	{
		this.amount = amount;
	}

	public String getExtRefnum()
	{
		return extRefnum;
	}

	public void setExtRefnum(String extRefnum)
	{
		this.extRefnum = extRefnum;
	}

	public String getExtCode2()
	{
		return extCode2;
	}

	public void setExtCode2(String extCode2)
	{
		this.extCode2 = extCode2;
	}

	public String getProductCode()
	{
		return productCode;
	}

	public void setProductCode(String productCode)
	{
		this.productCode = productCode;
	}

	public int getQuantity()
	{
		return quantity;
	}

	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}
	public int getExttxnNumber() {
			return exttxnNumber;
		}
		public void setExttxnNumber(int exttxnNumber) {
			this.exttxnNumber = exttxnNumber;
		}
		public String getExttxnDate() {
			return exttxnDate;
		}
		public void setExttxnDate(String exttxnDate) {
			this.exttxnDate = exttxnDate;
		}
		public String getTrfCategory() {
			return trfCategory;
		}
		public void setTrfCategory(String trfCategory) {
			this.trfCategory = trfCategory;
		}
		public int getRefNumber() {
			return refNumber;
		}
		public void setRefNumber(int refNumber) {
			this.refNumber = refNumber;
		}
		public String getPaymentType() {
			return paymentType;
		}
		public void setPaymentType(String paymentType) {
			this.paymentType = paymentType;
		}
		public String getPaymentTinsNumber() {
			return paymentTinsNumber;
		}
		public void setPaymentTinsNumber(String paymentTinsNumber) {
			this.paymentTinsNumber = paymentTinsNumber;
		}
		public String getPaymentDate() {
			return paymentDate;
		}

	public String getReason()
	{
		return reason;
	}

	public void setPaymentDate(String paymentDate) {
			this.paymentDate = paymentDate;
	}

	public void setReason(String reason)
	{
		this.reason = reason;
	}
}
