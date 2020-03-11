package vn.com.fis.model.css;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: Copyright (c) 2018</p>
 *
 * <p>Company: FPT-IS</p>
 *
 * @author Final Victory - ThangPC6
 * @version 1.0
 */
public class RechargeAirtimeIn
{
	public RechargeAirtimeIn()
	{
	}

	private String sourceIsdn;
	private String sourcePin;
	private String targetIsdn;
	private String transferAmount;
	private String userId;
	private String userName;
	private String transId;
	private int loginFailureCount;
	private String sourceIccid;
	private String mpinResponse;

	public String getSourceIsdn()
	{
		return sourceIsdn;
	}

	public void setSourceIsdn(String sourceIsdn)
	{
		this.sourceIsdn = sourceIsdn;
	}

	public String getSourcePin()
	{
		return sourcePin;
	}

	public void setSourcePin(String sourcePin)
	{
		this.sourcePin = sourcePin;
	}

	public String getTargetIsdn()
	{
		return targetIsdn;
	}

	public void setTargetIsdn(String targetIsdn)
	{
		this.targetIsdn = targetIsdn;
	}

	public String getTransferAmount()
	{
		return transferAmount;
	}

	public void setTransferAmount(String transferAmount)
	{
		this.transferAmount = transferAmount;
	}

	public String getUserId()
	{
		return userId;
	}

	public void setUserId(String userId)
	{
		this.userId = userId;
	}

	public String getUserName()
	{
		return userName;
	}

	public void setUserName(String userName)
	{
		this.userName = userName;
	}

	public String getTransId()
	{
		return transId;
	}

	public void setTransId(String transId)
	{
		this.transId = transId;
	}

	public int getLoginFailureCount()
	{
		return loginFailureCount;
	}

	public void setLoginFailureCount(int loginFailureCount)
	{
		this.loginFailureCount = loginFailureCount;
	}

	public String getSourceIccid()
	{
		return sourceIccid;
	}

	public void setSourceIccid(String sourceIccid)
	{
		this.sourceIccid = sourceIccid;
	}

	public String getMpinResponse()
	{
		return mpinResponse;
	}

	public void setMpinResponse(String mpinResponse)
	{
		this.mpinResponse = mpinResponse;
	}

}
