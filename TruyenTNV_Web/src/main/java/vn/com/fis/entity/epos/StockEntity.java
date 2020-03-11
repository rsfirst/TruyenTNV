package vn.com.fis.entity.epos;

public class StockEntity extends SingleEntity
{
	private String id;
	private String shopID;
	private String staffID;
	private String shopParentID;
	private String code;
	private String name;
	private String status;
	private String type;
	private String address;
	private String nodeCode;
	private String parentCode;
	private String company;
	private String account;
	private String tin;

	public String getId()
	{
		return id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getShopID()
	{
		return shopID;
	}

	public void setShopID(String shopID)
	{
		this.shopID = shopID;
	}

	public String getStaffID()
	{
		return staffID;
	}

	public void setStaffID(String staffID)
	{
		this.staffID = staffID;
	}

	public String getShopParentID()
	{
		return shopParentID;
	}

	public void setShopParentID(String shopParentID)
	{
		this.shopParentID = shopParentID;
	}

	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
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

	public String getNodeCode()
	{
		return nodeCode;
	}

	public void setNodeCode(String nodeCode)
	{
		this.nodeCode = nodeCode;
	}

	public String getParentCode()
	{
		return parentCode;
	}

	public void setParentCode(String parentCode)
	{
		this.parentCode = parentCode;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(String company)
	{
		this.company = company;
	}

	public String getAccount()
	{
		return account;
	}

	public void setAccount(String account)
	{
		this.account = account;
	}

	public String getTin()
	{
		return tin;
	}

	public void setTin(String tin)
	{
		this.tin = tin;
	}
}
