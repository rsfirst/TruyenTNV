package vn.com.fis.model.css;

public class PretupBasicOut {
	public PretupBasicOut()
	{
	}
	public PretupBasicOut(long transId,String message)
	{
		this.transId=transId;
		this.message=message;
	}
	private String errorCode;
	private String error;
	private String validStatus;
	private String validMess;
	private String message;
	private long transId;
	private long agentId;
	public String getValidStatus()
	{
		return validStatus;
	}

	public void setValidStatus(String validStatus)
	{
		this.validStatus = validStatus;
	}

	public String getValidMess()
	{
		return validMess;
	}

	public void setValidMess(String validMess)
	{
		this.validMess = validMess;
	}

	public String getErrorCode()
	{
		return errorCode;
	}

	public void setErrorCode(String errorCode)
	{
		this.errorCode = errorCode;
	}

	public String getError()
	{
		return error;
	}

	public void setError(String error)
	{
		this.error = error;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public long getTransId()
	{
		return transId;
	}

	public long getAgentId()
	{
		return agentId;
	}

	public void setTransId(long transId)
	{
		this.transId = transId;
	}

	public void setAgentId(long agentId)
	{
		this.agentId = agentId;
	}

}
