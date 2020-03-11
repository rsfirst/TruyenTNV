package vn.com.fis.model.epos;

public class TransDetailAvailable
{
	private String tranDetailId;
	private String quantity;
	private String stockTransId;
	private String goodsId;
	public String getTranDetailId()
	{
		return tranDetailId;
	}
	public void setTranDetailId(String tranDetailId)
	{
		this.tranDetailId = tranDetailId;
	}
	public String getQuantity()
	{
		return quantity;
	}
	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}
	public String getStockTransId()
	{
		return stockTransId;
	}
	public void setStockTransId(String stockTransId)
	{
		this.stockTransId = stockTransId;
	}
	public String getGoodsId()
	{
		return goodsId;
	}
	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
	}
	
	
}
