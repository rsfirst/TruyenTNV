package vn.com.fis.model.css;

public class TransDetailObject {

	public TransDetailObject () {
		
	}
	
	public TransDetailObject (long stockTransId, long goodsId, long stateId) {
		super();
		this.stockTransId = stockTransId;
		this.goodsId = goodsId;
		this.stateId = stateId;
	}
	
	long stockTransId;
	long goodsId;
	long stateId;
	String stateName;
	long quantityIssue;
	String goodsCode;
	String goodsName;
	String goodsSerial;
	String transNote;
	
	public long getStockTransId()
	{
		return stockTransId;
	}

	public void setStockTransId(long stockTransId)
	{
		this.stockTransId = stockTransId;
	}

	public long getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(long goodsId)
	{
		this.goodsId = goodsId;
	}

	public long getStateId()
	{
		return stateId;
	}

	public void setStateId(long stateId)
	{
		this.stateId = stateId;
	}

	public String getStateName()
	{
		return stateName;
	}

	public void setStateName(String stateName)
	{
		this.stateName = stateName;
	}

	public long getQuantityIssue()
	{
		return quantityIssue;
	}

	public void setQuantityIssue(long quantityIssue)
	{
		this.quantityIssue = quantityIssue;
	}

	public String getGoodsCode()
	{
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode)
	{
		this.goodsCode = goodsCode;
	}

	public String getGoodsName()
	{
		return goodsName;
	}

	public void setGoodsName(String goodsName)
	{
		this.goodsName = goodsName;
	}

	public String getGoodsSerial()
	{
		return goodsSerial;
	}

	public void setGoodsSerial(String goodsSerial)
	{
		this.goodsSerial = goodsSerial;
	}

	public String getTransNote()
	{
		return transNote;
	}

	public void setTransNote(String transNote)
	{
		this.transNote = transNote;
	}
	
	
}
