package vn.com.fis.model.ProductOrder;

public class DOdetails
{
	@Override
	public String toString()
	{
		return "DOdetails [productCode=" + productCode + ", productName=" + productName + ", unit=" + unit
				+ ", quantity=" + quantity + ", fromSerial=" + fromSerial + ", toSerial=" + toSerial + ", note=" + note
				+ "]";
	}
	
	String productCode;
	String productName;
	String unit;
	long quantity;
	String fromSerial;
	String toSerial;
	String note;
	
	public DOdetails()
	{
	}
	
	public DOdetails(String productCode, String productName, String unit, long quantity, String fromSerial,
			String toSerial, String note)
	{
		this.productCode = productCode;
		this.productName = productName;
		this.unit = unit;
		this.quantity = quantity;
		this.fromSerial = fromSerial;
		this.toSerial = toSerial;
		this.note = note;
	}
	
	public String getProductCode()
	{
		return productCode;
	}
	public void setProductCode(String productCode)
	{
		this.productCode = productCode;
	}
	public String getProductName()
	{
		return productName;
	}
	public void setProductName(String productName)
	{
		this.productName = productName;
	}
	public String getUnit()
	{
		return unit;
	}
	public void setUnit(String unit)
	{
		this.unit = unit;
	}
	public long getQuantity()
	{
		return quantity;
	}
	public void setQuantity(long quantity)
	{
		this.quantity = quantity;
	}
	public String getFromSerial()
	{
		return fromSerial;
	}
	public void setFromSerial(String fromSerial)
	{
		this.fromSerial = fromSerial;
	}
	public String getToSerial()
	{
		return toSerial;
	}
	public void setToSerial(String toSerial)
	{
		this.toSerial = toSerial;
	}
	public String getNote()
	{
		return note;
	}
	public void setNote(String note)
	{
		this.note = note;
	}
}
