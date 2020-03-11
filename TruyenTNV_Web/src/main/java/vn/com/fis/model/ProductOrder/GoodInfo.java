package vn.com.fis.model.ProductOrder;

public class GoodInfo
{
	public GoodInfo ()
	{

	}
	
	public GoodInfo(String goodName, String goodCode, long epos_groupId)
	{
		super();
		this.goodName = goodName;
		this.goodCode = goodCode;
		this.epos_groupId = epos_groupId;
	}

	public GoodInfo(String goodName, String goodCode, long epos_groupId, double unitPrice)
	{
		super();
		this.goodName = goodName;
		this.goodCode = goodCode;
		this.epos_groupId = epos_groupId;
		this.unitPrice = unitPrice;
	}

	String goodName;
	String goodCode;
	
	long epos_groupId;
	
	double unitPrice;

	public String getGoodName()
	{
		return goodName;
	}

	public void setGoodName(String goodName)
	{
		this.goodName = goodName;
	}

	public String getGoodCode()
	{
		return goodCode;
	}

	public void setGoodCode(String goodCode)
	{
		this.goodCode = goodCode;
	}

	public long getEpos_groupId()
	{
		return epos_groupId;
	}

	public void setEpos_groupId(long epos_groupId)
	{
		this.epos_groupId = epos_groupId;
	}

	public double getUnitPrice()
	{
		return unitPrice;
	}

	public void setUnitPrice(double unitPrice)
	{
		this.unitPrice = unitPrice;
	}
}
