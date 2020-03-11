package vn.com.fis.model.ProductOrder;

//ADD BY THANGPC6
public class GoodInfoNew
{

	public GoodInfoNew()
	{

	}

	public GoodInfoNew(String goodName, String goodCode, long goodId)
	{
		super();
		this.goodName = goodName;
		this.goodCode = goodCode;
		this.goodId = goodId;
	}

	String goodName;
	String goodCode;
	long goodId;
	String inShop;
	long shopId;
	String status;
	long epos_groupId; // goods_group_id
	double unitPrice;

	String goodType;
	String checkSerial;
	int checkQuantity;
	String units;
	String unitName;
	String checkContran;
	int checkWarranty;
	String notes;
	String ggName;
	String startDateTime;
	String endDateTime;

	public String getStartDateTime()
	{
		return startDateTime;
	}

	public void setStartDateTime(String startDateTime)
	{
		this.startDateTime = startDateTime;
	}

	public String getEndDateTime()
	{
		return endDateTime;
	}

	public void setEndDateTime(String endDateTime)
	{
		this.endDateTime = endDateTime;
	}

	public String getGgName()
	{
		return ggName;
	}

	public void setGgName(String ggName)
	{
		this.ggName = ggName;
	}

	public String getNotes()
	{
		return notes;
	}

	public void setNotes(String notes)
	{
		this.notes = notes;
	}

	public String getGoodType()
	{
		return goodType;
	}

	public void setGoodType(String goodType)
	{
		this.goodType = goodType;
	}

	public String getCheckSerial()
	{
		return checkSerial;
	}

	public void setCheckSerial(String checkSerial)
	{
		this.checkSerial = checkSerial;
	}

	public int getCheckQuantity()
	{
		return checkQuantity;
	}

	public void setCheckQuantity(int checkQuantity)
	{
		this.checkQuantity = checkQuantity;
	}

	public String getUnits()
	{
		return units;
	}

	public void setUnits(String units)
	{
		this.units = units;
	}

	public String getUnitName()
	{
		return unitName;
	}

	public void setUnitName(String unitName)
	{
		this.unitName = unitName;
	}

	public String getCheckContran()
	{
		return checkContran;
	}

	public void setCheckContran(String checkContran)
	{
		this.checkContran = checkContran;
	}

	public int getCheckWarranty()
	{
		return checkWarranty;
	}

	public void setCheckWarranty(int checkWarranty)
	{
		this.checkWarranty = checkWarranty;
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

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public long getShopId()
	{
		return shopId;
	}

	public void setShopId(long shopId)
	{
		this.shopId = shopId;
	}

	public long getGoodId()
	{
		return goodId;
	}

	public void setGoodId(long goodId)
	{
		this.goodId = goodId;
	}

	public String getInShop()
	{
		return inShop;
	}

	public void setInShop(String inShop)
	{
		this.inShop = inShop;
	}

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

	@Override
	public String toString()
	{
		return "GoodInfoNew [goodName=" + goodName + ", goodCode=" + goodCode + ", goodId=" + goodId + ", inShop=" + inShop + ", shopId=" + shopId
				+ ", checkQuantity=" + checkQuantity + ", unitName=" + unitName + ", notes=" + notes + "]";
	}
}
