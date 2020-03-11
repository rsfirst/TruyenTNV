package vn.com.fis.model.ProductOrder;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class GoodPriceInfo
{
	@Override
	public String toString()
	{
		return "GoodPriceInfo [goodCode=" + goodCode + ", goodName=" + goodName + ", unit=" + unit + ", goodPrice="
				+ goodPrice + ", goodType=" + goodType + ", status=" + status + ", createBy=" + createBy
				+ ", createDate=" + createDate + ", modifyBy=" + modifyBy + ", modifyDate=" + modifyDate + "]";
	}

	String goodCode;

	String goodName;

	String unit;

	double goodPrice;

	String goodType;

	int status;

	String createBy;

	String createDate = null;

	String modifyBy;

	String modifyDate = null;

	public GoodPriceInfo()
	{

	}

	public GoodPriceInfo(String goodCode, String goodName)
	{
		this.goodCode = goodCode;
		this.goodName = goodName;
	}

	public GoodPriceInfo(String goodCode, String goodName, String unit, double goodPrice, String goodType, int status,
			String createBy, String createDate, String modifyBy, String modifyDate)
	{
		this.goodCode = goodCode;
		this.goodName = goodName;
		this.unit = unit;
		this.goodPrice = goodPrice;
		this.goodType = goodType;
		this.status = status;
		this.createBy = createBy;
		this.createDate = createDate;
		this.modifyBy = modifyBy;
		this.modifyDate = modifyDate;
	}

	public String getGoodCode()
	{
		return goodCode;
	}

	public void setGoodCode(String goodCode)
	{
		this.goodCode = goodCode;
	}

	public String getGoodName()
	{
		return goodName;
	}

	public void setGoodName(String goodName)
	{
		this.goodName = goodName;
	}

	public String getUnit()
	{
		return unit;
	}

	public void setUnit(String unit)
	{
		this.unit = unit;
	}

	public double getGoodPrice()
	{
		return goodPrice;
	}

	public void setGoodPrice(double goodPrice)
	{
		this.goodPrice = goodPrice;
	}

	public String getGoodType()
	{
		return goodType;
	}

	public void setGoodType(String goodType)
	{
		this.goodType = goodType;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public String getCreateBy()
	{
		return createBy;
	}

	public void setCreateBy(String createBy)
	{
		this.createBy = createBy;
	}

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public String getModifyBy()
	{
		return modifyBy;
	}

	public void setModifyBy(String modifyBy)
	{
		this.modifyBy = modifyBy;
	}

	public String getModifyDate()
	{
		return modifyDate;
	}

	public void setModifyDate(String modifyDate)
	{
		this.modifyDate = modifyDate;
	}
}
