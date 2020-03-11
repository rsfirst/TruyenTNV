package vn.com.fis.model.css;

public class StockTransWithSerialObject
{
	String rownum;
	String stockId;
	String goodsId;
	String goodName;
	String fromSerial;
	String toSerial;
	String quantity;

	public StockTransWithSerialObject()
	{
		super();
	}

	public StockTransWithSerialObject(String rownum, String stockId, String goodsId, String goodName, String fromSerial, String toSerial, String quantity)
	{
		super();
		this.rownum = rownum;
		this.stockId = stockId;
		this.goodsId = goodsId;
		this.goodName = goodName;
		this.fromSerial = fromSerial;
		this.toSerial = toSerial;
		this.quantity = quantity;
	}

	public String getRownum()
	{
		return rownum;
	}

	public void setRownum(String rownum)
	{
		this.rownum = rownum;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public String getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
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

	public String getQuantity()
	{
		return quantity;
	}

	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	public String getGoodName()
	{
		return goodName;
	}

	public void setGoodName(String goodName)
	{
		this.goodName = goodName;
	}
}
