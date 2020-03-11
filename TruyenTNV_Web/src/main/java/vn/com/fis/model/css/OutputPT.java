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
public class OutputPT
{
	public OutputPT()
	{
	}

	private String type;
	private String userid;
	private String externalcode;
	private String txnstatus;
	private String message;
	private String msisdn;
	private String error;
	private String txnId;
	private String exttxnNumber;
	private String status;
	public String getMsisdn()
	{
		return msisdn;
	}

	public void setMsisdn(String msisdn)
	{
		this.msisdn = msisdn;
	}

	public String getError()
	{
		return error;
	}

	public void setError(String error)
	{
		this.error = error;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getUserid()
	{
		return userid;
	}

	public void setUserid(String userid)
	{
		this.userid = userid;
	}

	public String getExternalcode()
	{
		return externalcode;
	}

	public void setExternalcode(String externalcode)
	{
		this.externalcode = externalcode;
	}

	public String getTxnstatus()
	{
		return txnstatus;
	}

	public void setTxnstatus(String txnstatus)
	{
		this.txnstatus = txnstatus;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public String getTxnId()
	{
		return txnId;
	}

	public void setTxnId(String txnId)
	{
		this.txnId = txnId;
	}

	public String getExttxnNumber()
	{
		return exttxnNumber;
	}

	public String getStatus()
	{
		return status;
	}

	public void setExttxnNumber(String exttxnNumber)
	{
		this.exttxnNumber = exttxnNumber;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

}
