package vn.com.fis.model.epos;

public class AccountType
{
	private String accountCode;
	private String accountName;
	private String type;
	private String status;
	private long accountId;

	public String getAccountCode()
	{
		return accountCode;
	}

	public void setAccountCode(String accountCode)
	{
		this.accountCode = accountCode;
	}

	public String getAccountName()
	{
		return accountName;
	}

	public void setAccountName(String accountName)
	{
		this.accountName = accountName;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public long getAccountId()
	{
		return accountId;
	}

	public void setAccountId(long accountId)
	{
		this.accountId = accountId;
	}

}
