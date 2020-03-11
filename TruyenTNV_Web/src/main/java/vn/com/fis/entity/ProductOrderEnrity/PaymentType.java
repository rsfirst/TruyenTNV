package vn.com.fis.entity.ProductOrderEnrity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class PaymentType
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PAYMENT_TYPE_SEQ")
	@SequenceGenerator(sequenceName = "payment_type_seq", initialValue = 1, allocationSize = 1, name = "PAYMENT_TYPE_SEQ")
	long Id;
	
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
