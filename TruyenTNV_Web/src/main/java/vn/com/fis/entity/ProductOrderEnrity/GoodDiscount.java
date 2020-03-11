package vn.com.fis.entity.ProductOrderEnrity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class GoodDiscount
{
	public String getModify_by()
	{
		return modify_by;
	}

	public void setModify_by(String modify_by)
	{
		this.modify_by = modify_by;
	}

	public String getDisable_by()
	{
		return disable_by;
	}

	public void setDisable_by(String disable_by)
	{
		this.disable_by = disable_by;
	}

	public Date getModify_date()
	{
		return modify_date;
	}

	public void setModify_date(Date modify_date)
	{
		this.modify_date = modify_date;
	}

	public Date getDisable_date()
	{
		return disable_date;
	}

	public void setDisable_date(Date disable_date)
	{
		this.disable_date = disable_date;
	}

	public GoodDiscount()
	{
	}

	@Override
	public String toString()
	{
		return "GoodDiscount [discountId=" + discountId + ", goodCode=" + goodCode + ", order_type=" + order_type
				+ ", fromQuantity=" + fromQuantity + ", toQuantity=" + toQuantity + ", discountPercent="
				+ discountPercent + ", startDate=" + startDate + ", endDate=" + endDate + ", description=" + description
				+ ", createDate=" + createDate + ", createBy=" + createBy + ", status=" + status + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GOOD_DISCOUNT_SEQ")
	@SequenceGenerator(sequenceName = "good_discount_seq", initialValue = 1, allocationSize = 1, name = "GOOD_DISCOUNT_SEQ")
	long discountId;
	
	String goodCode;
	
	@Column(name="order_type")
	String order_type;
	
	@Column(name="modify_by")
	String modify_by;
	
	@Column(name="disable_by")
	String disable_by;
	
	@Temporal(TemporalType.DATE)
	@Column(name="modify_date")
	Date modify_date;
	
	@Temporal(TemporalType.DATE)
	@Column(name="disable_date")
	Date disable_date;
	
	long fromQuantity;
	long toQuantity;
	double discountPercent;
	
	@Temporal(TemporalType.DATE)
	Date startDate;
	
	@Temporal(TemporalType.DATE)
	Date endDate;
	
	String description;
	
	@Temporal(TemporalType.DATE)
	Date createDate;
	String createBy;
	
	int status;

	public GoodDiscount(long discountId, String goodCode, String order_type, String modify_by, String disable_by,
			Date modify_date, Date disable_date, long fromQuantity, long toQuantity, double discountPercent,
			Date startDate, Date endDate, String description, Date createDate, String createBy, int status)
	{
		this.discountId = discountId;
		this.goodCode = goodCode;
		this.order_type = order_type;
		this.modify_by = modify_by;
		this.disable_by = disable_by;
		this.modify_date = modify_date;
		this.disable_date = disable_date;
		this.fromQuantity = fromQuantity;
		this.toQuantity = toQuantity;
		this.discountPercent = discountPercent;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
		this.createDate = createDate;
		this.createBy = createBy;
		this.status = status;
	}

	public long getDiscountId()
	{
		return discountId;
	}

	public void setDiscountId(long discountId)
	{
		this.discountId = discountId;
	}

	public String getGoodCode()
	{
		return goodCode;
	}

	public void setGoodCode(String goodCode)
	{
		this.goodCode = goodCode;
	}

	public long getFromQuantity()
	{
		return fromQuantity;
	}

	public void setFromQuantity(long fromQuantity)
	{
		this.fromQuantity = fromQuantity;
	}

	public long getToQuantity()
	{
		return toQuantity;
	}

	public void setToQuantity(long toQuantity)
	{
		this.toQuantity = toQuantity;
	}

	public double getDiscountPercent()
	{
		return discountPercent;
	}

	public void setDiscountPercent(double discountPercent)
	{
		this.discountPercent = discountPercent;
	}

	public Date getStartDate()
	{
		return startDate;
	}

	public void setStartDate(Date startDate)
	{
		this.startDate = startDate;
	}

	public Date getEndDate()
	{
		return endDate;
	}

	public void setEndDate(Date endDate)
	{
		this.endDate = endDate;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public Date getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(Date createDate)
	{
		this.createDate = createDate;
	}

	public String getCreateBy()
	{
		return createBy;
	}

	public void setCreateBy(String createBy)
	{
		this.createBy = createBy;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public String getOrder_type()
	{
		return order_type;
	}

	public void setOrder_type(String order_type)
	{
		this.order_type = order_type;
	}
}
