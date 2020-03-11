package vn.com.fis.model.css;


public class IntectLogTransDTO
{
	private String logTransId;
	private String stockId;
	private String userComment;
	private String actionCode;
	private int logTransType;
	private int workingSystem;
	private String transId;

	public String getLogTransId()
	{
		return logTransId;
	}

	public void setLogTransId(String logTransId)
	{
		this.logTransId = logTransId;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public String getUserComment()
	{
		return userComment;
	}

	public void setUserComment(String userComment)
	{
		this.userComment = userComment;
	}

	public String getActionCode()
	{
		return actionCode;
	}

	public void setActionCode(String actionCode)
	{
		this.actionCode = actionCode;
	}

	public int getLogTransType()
	{
		return logTransType;
	}

	public void setLogTransType(int logTransType)
	{
		this.logTransType = logTransType;
	}

	public int getWorkingSystem()
	{
		return workingSystem;
	}

	public void setWorkingSystem(int workingSystem)
	{
		this.workingSystem = workingSystem;
	}

	public String getTransId()
	{
		return transId;
	}

	public void setTransId(String transId)
	{
		this.transId = transId;
	}
}
