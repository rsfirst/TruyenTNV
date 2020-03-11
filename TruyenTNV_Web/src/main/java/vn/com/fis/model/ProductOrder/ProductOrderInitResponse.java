package vn.com.fis.model.ProductOrder;

import java.util.List;

import vn.com.fis.entity.ProductOrderEnrity.PaymentType;


public class ProductOrderInitResponse
{
	public ProductOrderInitResponse() {
		super();
	}

	String poCode;
	
	String shopCode;
	long shopId;
	
	List<PaymentType> paymentType;
	List<OrderType> orderType;
	
	public String getPoCode()
	{
		return poCode;
	}

	public void setPoCode(String poCode)
	{
		this.poCode = poCode;
	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	public long getShopId()
	{
		return shopId;
	}

	public void setShopId(long shopId)
	{
		this.shopId = shopId;
	}

	public List<PaymentType> getPaymentType()
	{
		return paymentType;
	}

	public void setPaymentType(List<PaymentType> paymentType)
	{
		this.paymentType = paymentType;
	}

	public List<OrderType> getOrderType()
	{
		return orderType;
	}

	public void setOrderType(List<OrderType> orderType)
	{
		this.orderType = orderType;
	}	
}
