package vn.com.fis.model.epos;

public class InputEstablishObj
{
	private String shopId;
	private String saffId;
	private String type;
	private String toDate;
	private String fromDate;
	private String payMethod;
	private String strTransID;
	private String strTransDetailID;
	
	public String getStrTransDetailID()
	{
		return strTransDetailID;
	}
	public void setStrTransDetailID(String strTransDetailID)
	{
		this.strTransDetailID = strTransDetailID;
	}
	public String getStrTransID()
	{
		return strTransID;
	}
	public void setStrTransID(String strTransID)
	{
		this.strTransID = strTransID;
	}
	public String getShopId()
	{
		return shopId;
	}
	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}
	public String getSaffId()
	{
		return saffId;
	}
	public void setSaffId(String saffId)
	{
		this.saffId = saffId;
	}
	public String getType()
	{
		return type;
	}
	public void setType(String type)
	{
		this.type = type;
	}
	public String getToDate()
	{
		return toDate;
	}
	public void setToDate(String toDate)
	{
		this.toDate = toDate;
	}
	public String getFromDate()
	{
		return fromDate;
	}
	public void setFromDate(String fromDate)
	{
		this.fromDate = fromDate;
	}
	public String getPayMethod()
	{
		return payMethod;
	}
	public void setPayMethod(String payMethod)
	{
		this.payMethod = payMethod;
	}
	
}
