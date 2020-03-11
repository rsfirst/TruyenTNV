package vn.com.fis.model.epos;

import java.util.List;

public class BankDepositData
{
	private String userId;
	private String createDate;
	private String status;
	private List<BankDepositOutput> lstBankDeposit;

	public String getUserId()
	{
		return userId;
	}

	public void setUserId(String userId)
	{
		this.userId = userId;
	}

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public List<BankDepositOutput> getLstBankDeposit()
	{
		return lstBankDeposit;
	}

	public void setLstBankDeposit(List<BankDepositOutput> lstBankDeposit)
	{
		this.lstBankDeposit = lstBankDeposit;
	}

}
