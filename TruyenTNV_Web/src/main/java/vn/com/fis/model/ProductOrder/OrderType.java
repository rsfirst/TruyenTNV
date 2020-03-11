package vn.com.fis.model.ProductOrder;

public class OrderType
{
	String orderTypeCode;
	String orderTypeName;
	
	public OrderType(String orderTypeCode, String orderTypeName)
	{
		this.orderTypeCode = orderTypeCode;
		this.orderTypeName = orderTypeName;
	}
	public OrderType() {
		
	}

	public String getOrderTypeCode()
	{
		return orderTypeCode;
	}

	public void setOrderTypeCode(String orderTypeCode)
	{
		this.orderTypeCode = orderTypeCode;
	}

	public String getOrderTypeName()
	{
		return orderTypeName;
	}

	public void setOrderTypeName(String orderTypeName)
	{
		this.orderTypeName = orderTypeName;
	}
	
}
