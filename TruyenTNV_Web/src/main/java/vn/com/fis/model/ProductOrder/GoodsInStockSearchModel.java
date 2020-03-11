package vn.com.fis.model.ProductOrder;

public class GoodsInStockSearchModel
{

	private Long stockId;
	private String resourceCode;
	private Long internalStockId;
	private String goodCode;
	private String goodName;
	private Long shopId;
	private Long goodsId;
	private String staffId;
	
	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public String getGoodCode() {
		return goodCode;
	}

	public void setGoodCode(String goodCode) {
		this.goodCode = goodCode;
	}

	public String getGoodName() {
		return goodName;
	}

	public void setGoodName(String goodName) {
		this.goodName = goodName;
	}

	public Long getStockId()
	{
		return stockId;
	}

	public void setStockId(Long stockId)
	{
		this.stockId = stockId;
	}

	public String getResourceCode()
	{
		return resourceCode;
	}

	public void setResourceCode(String resourceCode)
	{
		this.resourceCode = resourceCode;
	}

	public Long getInternalStockId()
	{
		return internalStockId;
	}

	public void setInternalStockId(Long internalStockId)
	{
		this.internalStockId = internalStockId;
	}

	public Long getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(Long goodsId)
	{
		this.goodsId = goodsId;
	}

	public String getStaffId()
	{
		return staffId;
	}

	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

	@Override
	public String toString()
	{
		return "GoodsInStockSearchModel [stockId=" + stockId + ", resourceCode=" + resourceCode + ", internalStockId=" + internalStockId + ", goodCode="
				+ goodCode + ", goodName=" + goodName + ", shopId=" + shopId + ", goodsId=" + goodsId + "]";
	}

}
