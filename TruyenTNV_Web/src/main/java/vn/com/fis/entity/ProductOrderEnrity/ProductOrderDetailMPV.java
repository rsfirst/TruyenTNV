package vn.com.fis.entity.ProductOrderEnrity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class ProductOrderDetailMPV
{	
	
	@Override
	public String toString()
	{
		return "ProductOrderDetail [orderDetailId=" + orderDetailId + ", orderId=" + orderId + ", poCode=" + poCode
				+ ", productType=" + productType + ", productId=" + productId + ", productName=" + productName
				+ ", quantity=" + quantity + ", unitPrice=" + unitPrice + ", grossValue=" + grossValue
				+ ", discountPercent=" + discountPercent + ", discountValue=" + discountValue + ", netValue=" + netValue
				+ "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "POD_SEQ")
	@SequenceGenerator(sequenceName = "pod_seq", initialValue = 1, allocationSize = 1, name = "POD_SEQ")
	long orderDetailId;

	long orderId;
	String poCode;
	String productType;
	String productId;
	String productName;
	long quantity;
	double unitPrice;
	double grossValue;
	double discountPercent;
	double discountValue;
	double netValue;
	long versionId;
	long total;
	
	public ProductOrderDetailMPV() 
	{
		
	}
	
	public ProductOrderDetailMPV(long orderDetailId, long orderId, String productType, String productId, String productName, long quantity,
			double unitPrice, double grossValue, double discountPercent, double discountValue, double netValue)
	{
		this.orderDetailId = orderDetailId;
		this.orderId = orderId;
		this.productType = productType;
		this.productId = productId;
		this.productName = productName;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
		this.grossValue = grossValue;
		this.discountPercent = discountPercent;
		this.discountValue = discountValue;
		this.netValue = netValue;
	}
	
	public ProductOrderDetailMPV(long orderId, String poCode, String productType, String productId, String productName, long quantity,
			double unitPrice, double grossValue, double discountPercent, double discountValue, double netValue)
	{
		this.orderId = orderId;
		this.poCode = poCode;
		this.productType = productType;
		this.productId = productId;
		this.productName = productName;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
		this.grossValue = grossValue;
		this.discountPercent = discountPercent;
		this.discountValue = discountValue;
		this.netValue = netValue;
	}
	
	public long getTotal()
	{
		return total;
	}

	public void setTotal(long total)
	{
		this.total = total;
	}

	public long getOrderId()
	{
		return orderId;
	}
	public void setOrderId(long orderId)
	{
		this.orderId = orderId;
	}
	public String getProductType()
	{
		return productType;
	}
	public void setProductType(String productType)
	{
		this.productType = productType;
	}
	public String getProductId()
	{
		return productId;
	}
	public void setProductId(String productId)
	{
		this.productId = productId;
	}
	public String getProductName()
	{
		return productName;
	}
	public void setProductName(String productName)
	{
		this.productName = productName;
	}
	public long getQuantity()
	{
		return quantity;
	}
	public void setQuantity(long quantity)
	{
		this.quantity = quantity;
	}
	public double getUnitPrice()
	{
		return unitPrice;
	}
	public void setUnitPrice(double unitPrice)
	{
		this.unitPrice = unitPrice;
	}
	public double getGrossValue()
	{
		return grossValue;
	}
	public void setGrossValue(double grossValue)
	{
		this.grossValue = grossValue;
	}
	public double getDiscountPercent()
	{
		return discountPercent;
	}
	public void setDiscountPercent(double discountPercent)
	{
		this.discountPercent = discountPercent;
	}
	public double getDiscountValue()
	{
		return discountValue;
	}
	public void setDiscountValue(double discountValue)
	{
		this.discountValue = discountValue;
	}
	public double getNetValue()
	{
		return netValue;
	}
	public void setNetValue(double netValue)
	{
		this.netValue = netValue;
	}
	public long getOrderDetailId()
	{
		return orderDetailId;
	}
	public void setOrderDetailId(long orderDetailId)
	{
		this.orderDetailId = orderDetailId;
	}

	public String getPoCode()
	{
		return poCode;
	}

	public void setPoCode(String poCode)
	{
		this.poCode = poCode;
	}

	public long getVersionId()
	{
		return versionId;
	}

	public void setVersionId(long versionId)
	{
		this.versionId = versionId;
	}

}
