package vn.com.fis.model.css;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: Copyright (c) 2005</p>
 *
 * <p>Company: </p>
 *
 * @author not attributable
 * @version 1.0
 */
public class AgentAccount implements java.io.Serializable
{
	static final long serialVersionUID = -3611946473283033478L;
	private long accountID;
	private java.util.Date createDate;
	private java.util.Date openDate;
	private double openBalance;
	private double currentBalance;
	private double availableBalance;
	private double threshold;
	private int status;

	public void setAccountID(long accountID)
	{
		this.accountID = accountID;
	}

	public void setCreateDate(java.util.Date createDate)
	{
		this.createDate = createDate;
	}

	public void setOpenDate(java.util.Date openDate)
	{
		this.openDate = openDate;
	}

	public void setOpenBalance(double openBalance)
	{
		this.openBalance = openBalance;
	}

	public void setCurrentBalance(double currentBalance)
	{
		this.currentBalance = currentBalance;
	}

	public void setAvailableBalance(double availableBalance)
	{
		this.availableBalance = availableBalance;
	}

	public void setThreshhold(double threshold)
	{
		this.threshold = threshold;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public long getAccountID()
	{
		return accountID;
	}

	public java.util.Date getCreateDate()
	{
		return createDate;
	}

	public java.util.Date getOpenDate()
	{
		return openDate;
	}

	public double getOpenBalance()
	{
		return openBalance;
	}

	public double getCurrentBalance()
	{
		return currentBalance;
	}

	public double getAvailableBalance()
	{
		return availableBalance;
	}

	public double getThreshold()
	{
		return threshold;
	}

	public int getStatus()
	{
		return status;
	}
}
