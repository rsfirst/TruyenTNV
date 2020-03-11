package vn.com.fis.entity.ProductOrderEnrity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Bank
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BANK_SEQ")
	@SequenceGenerator(sequenceName = "bank_seq", initialValue = 1, allocationSize = 1, name = "BANK_SEQ")
	long Id;
	String bankName;
	String bankCode;

	int status;

	public long getId()
	{
		return Id;
	}

	public void setId(long id)
	{
		Id = id;
	}

	public String getBankName()
	{
		return bankName;
	}

	public void setBankName(String bankName)
	{
		this.bankName = bankName;
	}

	public String getBankCode()
	{
		return bankCode;
	}

	public void setBankCode(String bankCode)
	{
		this.bankCode = bankCode;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}
}
