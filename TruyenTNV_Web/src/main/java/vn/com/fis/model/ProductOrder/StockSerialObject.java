package vn.com.fis.model.ProductOrder;
//ADD BY THANGPC6
public class StockSerialObject
{
	public StockSerialObject ()
	{

	}
	
	public StockSerialObject(long stockId, long goodsId, String fromSerial, String toSerial)
	{
		super();
		this.stockId = stockId;
		this.goodsId = goodsId;
		this.fromSerial = fromSerial;
		this.toSerial = toSerial;
	}
	
	long stockId;
	long goodsId;
	long stateId;
	String fromSerial;
	String toSerial;
	long quantity;
	long warrantyId;
	String warrantyNo;
	long maxRowNum;
	long internalStockId;
	String shopId;
	

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public long getInternalStockId() {
		return internalStockId;
	}

	public void setInternalStockId(long internalStockId) {
		this.internalStockId = internalStockId;
	}

	public long getMaxRowNum() {
		return maxRowNum;
	}

	public void setMaxRowNum(long maxRowNum) {
		this.maxRowNum = maxRowNum;
	}

	public long getStockId() {
		return stockId;
	}

	public void setStockId(long stockId) {
		this.stockId = stockId;
	}

	public long getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(long goodsId) {
		this.goodsId = goodsId;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public String getFromSerial() {
		return fromSerial;
	}

	public void setFromSerial(String fromSerial) {
		this.fromSerial = fromSerial;
	}

	public String getToSerial() {
		return toSerial;
	}

	public void setToSerial(String toSerial) {
		this.toSerial = toSerial;
	}

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public long getWarrantyId() {
		return warrantyId;
	}

	public void setWarrantyId(long warrantyId) {
		this.warrantyId = warrantyId;
	}

	public String getWarrantyNo() {
		return warrantyNo;
	}

	public void setWarrantyNo(String warrantyNo) {
		this.warrantyNo = warrantyNo;
	}
}
