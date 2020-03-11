package vn.com.fis.model.css;

public class StockTransEnqueryObject
{
	String stockId;
	String shopStaffId;
	String code;
	String parentShopId;
	String name;
	String type;
	String address;

	public StockTransEnqueryObject()
	{
		super();
	}

	public StockTransEnqueryObject(String stockId, String shopStaffId, String code, String parentShopId, String name, String type, String address)
	{
		super();
		this.stockId = stockId;
		this.shopStaffId = shopStaffId;
		this.code = code;
		this.parentShopId = parentShopId;
		this.name = name;
		this.type = type;
		this.address = address;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public String getShopStaffId()
	{
		return shopStaffId;
	}

	public void setShopStaffId(String shopStaffId)
	{
		this.shopStaffId = shopStaffId;
	}

	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getParentShopId()
	{
		return parentShopId;
	}

	public void setParentShopId(String parentShopId)
	{
		this.parentShopId = parentShopId;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}
}
