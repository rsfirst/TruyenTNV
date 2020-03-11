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
public class OutputMA
{
	public OutputMA()
	{
	}

	private String type;
	private String date;
	private String txnstatus;
	private String extrefnum;
	private String txnid;
	private String message;
	private String error;
	private String balance;

	public void setType(String type)
	{
		this.type = type;
	}

	public String getType()
	{
		return type;
	}

	public void setDate(String date)
	{
		this.date = date;
	}

	public String getDate()
	{
		return date;
	}

	public void setTxnStatus(String txnstatus)
	{
		this.txnstatus = txnstatus;
	}

	public String getTxnStatus()
	{
		return txnstatus;
	}

	public void setExtRefnum(String extrefnum)
	{
		this.extrefnum = extrefnum;
	}

	public String getExtRefnum()
	{
		return extrefnum;
	}

	public void setTxnid(String txnid)
	{
		this.txnid = txnid;
	}

	public String getTxnid()
	{
		return txnid;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public String getMessage()
	{
		return message;
	}

	public void setBalance(String balance)
	{
		this.balance = balance;
	}

	public String getBalance()
	{
		return balance;
	}

	public void setError(String error)
	{
		this.error = error;
	}

	public String getError()
	{
		return error;
	}

}
