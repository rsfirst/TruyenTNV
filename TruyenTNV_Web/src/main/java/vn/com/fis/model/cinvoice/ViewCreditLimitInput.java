package vn.com.fis.model.cinvoice;

import java.io.Serializable;

public class ViewCreditLimitInput implements Serializable{
	/**
	 *
	 */

	private String MSISDN;
	private String localTxnDtTime;
	private String transactionId;
	private String Source;

	public ViewCreditLimitInput() {
		super();
	}

	public ViewCreditLimitInput(String MSISDN, String localTxnDtTime, String transactionId, String Source) {
		super();
		MSISDN = MSISDN;
		localTxnDtTime = localTxnDtTime;
		transactionId = transactionId;
		Source = Source;
	}

	public String getMSISDN()
	{
		return MSISDN;
	}

	public void setMSISDN(String mSISDN)
	{
		MSISDN = mSISDN;
	}

	public String getLocalTxnDtTime()
	{
		return localTxnDtTime;
	}

	public void setLocalTxnDtTime(String localTxnDtTime)
	{
		this.localTxnDtTime = localTxnDtTime;
	}

	public String getTransactionId()
	{
		return transactionId;
	}

	public void setTransactionId(String transactionId)
	{
		this.transactionId = transactionId;
	}

	public String getSource()
	{
		return Source;
	}

	public void setSource(String source)
	{
		Source = source;
	}


}
