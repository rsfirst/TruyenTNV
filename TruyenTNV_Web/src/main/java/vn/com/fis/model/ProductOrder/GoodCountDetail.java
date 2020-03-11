package vn.com.fis.model.ProductOrder;
//ADD BY THANGPC6
public class GoodCountDetail
{
	public GoodCountDetail ()
	{

	}
	
	public GoodCountDetail(long stockId, long goodId, long internalStockId,long stateId, long quantityIssue, long quantityEffect, long quantityRemain )
	{
		super();
		this.stockId = stockId;
		this.goodId = goodId;
		this.internalStockId = internalStockId;
		this.stateId = stateId;
		this.quantityIssue = quantityIssue;
		this.quantityEffect = quantityEffect;
		this.quantityRemain = quantityRemain;
	}

	long stockId;
	long goodId;
	long internalStockId;
	long stateId;
	long quantityIssue;
	long quantityEffect;
	long quantityRemain;
	
	public long getStockId() {
		return stockId;
	}

	public void setStockId(long stockId) {
		this.stockId = stockId;
	}

	public long getGoodId() {
		return goodId;
	}

	public void setGoodId(long goodId) {
		this.goodId = goodId;
	}

	public long getInternalStockId() {
		return internalStockId;
	}

	public void setInternalStockId(long internalStockId) {
		this.internalStockId = internalStockId;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public long getQuantityIssue() {
		return quantityIssue;
	}

	public void setQuantityIssue(long quantityIssue) {
		this.quantityIssue = quantityIssue;
	}

	public long getQuantityEffect() {
		return quantityEffect;
	}

	public void setQuantityEffect(long quantityEffect) {
		this.quantityEffect = quantityEffect;
	}

	public long getQuantityRemain() {
		return quantityRemain;
	}

	public void setQuantityRemain(long quantityRemain) {
		this.quantityRemain = quantityRemain;
	}
}
