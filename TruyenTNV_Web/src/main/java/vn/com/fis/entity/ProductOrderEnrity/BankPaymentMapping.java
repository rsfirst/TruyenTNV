package vn.com.fis.entity.ProductOrderEnrity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class BankPaymentMapping
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BANK_PAYMENT_SEQ")
	@SequenceGenerator(sequenceName = "bank_payment_seq", initialValue = 1, allocationSize = 1, name = "BANK_PAYMENT_SEQ")
	long Id;
	
	String bankName;
	String bankCode;

	String paymentCode;
	String paymentDetail;

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

	public String getPaymentCode()
	{
		return paymentCode;
	}

	public void setPaymentCode(String paymentCode)
	{
		this.paymentCode = paymentCode;
	}

	public String getPaymentDetail()
	{
		return paymentDetail;
	}

	public void setPaymentDetail(String paymentDetail)
	{
		this.paymentDetail = paymentDetail;
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
