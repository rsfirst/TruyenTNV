package vn.com.fis.model.css;

public class StockTransDetailObject
{
	String stockTransId;
	String goodsId;
	String stateId;
	String quantityIssue;
	String quantityEffect;
	String price;
	String amount;
	String createDatetime;
	String note;
	String orderNo;
	String priceId;
	String discount;
	String type;
	String goodsStatus;
	String internalStockId;
	String checkSerial;
	String checkWarranty;
	String goodName;
	String stateName;

	public StockTransDetailObject()
	{
		super();
	}

	public StockTransDetailObject(String stockTransId, String goodsId, String stateId, String quantityIssue, String quantityEffect, String price, String amount,
			String createDatetime, String note, String orderNo, String priceId, String discount, String type, String goodsStatus, String internalStockId,
			String checkSerial, String checkWarranty, String goodName, String stateName)
	{
		super();
		this.stockTransId = stockTransId;
		this.goodsId = goodsId;
		this.stateId = stateId;
		this.quantityIssue = quantityIssue;
		this.quantityEffect = quantityEffect;
		this.price = price;
		this.amount = amount;
		this.createDatetime = createDatetime;
		this.note = note;
		this.orderNo = orderNo;
		this.priceId = priceId;
		this.discount = discount;
		this.type = type;
		this.goodsStatus = goodsStatus;
		this.internalStockId = internalStockId;
		this.checkSerial = checkSerial;
		this.checkWarranty = checkWarranty;
		this.goodName = goodName;
		this.stateName = stateName;
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

	public String getStateId()
	{
		return stateId;
	}

	public void setStateId(String stateId)
	{
		this.stateId = stateId;
	}

	public String getQuantityIssue()
	{
		return quantityIssue;
	}

	public void setQuantityIssue(String quantityIssue)
	{
		this.quantityIssue = quantityIssue;
	}

	public String getQuantityEffect()
	{
		return quantityEffect;
	}

	public void setQuantityEffect(String quantityEffect)
	{
		this.quantityEffect = quantityEffect;
	}

	public String getPrice()
	{
		return price;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	public String getAmount()
	{
		return amount;
	}

	public void setAmount(String amount)
	{
		this.amount = amount;
	}

	public String getCreateDatetime()
	{
		return createDatetime;
	}

	public void setCreateDatetime(String createDatetime)
	{
		this.createDatetime = createDatetime;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public String getOrderNo()
	{
		return orderNo;
	}

	public void setOrderNo(String orderNo)
	{
		this.orderNo = orderNo;
	}

	public String getPriceId()
	{
		return priceId;
	}

	public void setPriceId(String priceId)
	{
		this.priceId = priceId;
	}

	public String getDiscount()
	{
		return discount;
	}

	public void setDiscount(String discount)
	{
		this.discount = discount;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getGoodsStatus()
	{
		return goodsStatus;
	}

	public void setGoodsStatus(String goodsStatus)
	{
		this.goodsStatus = goodsStatus;
	}

	public String getInternalStockId()
	{
		return internalStockId;
	}

	public void setInternalStockId(String internalStockId)
	{
		this.internalStockId = internalStockId;
	}

	public String getCheckSerial()
	{
		return checkSerial;
	}

	public void setCheckSerial(String checkSerial)
	{
		this.checkSerial = checkSerial;
	}

	public String getCheckWarranty()
	{
		return checkWarranty;
	}

	public void setCheckWarranty(String checkWarranty)
	{
		this.checkWarranty = checkWarranty;
	}

	public String getGoodName()
	{
		return goodName;
	}

	public void setGoodName(String goodName)
	{
		this.goodName = goodName;
	}

	public String getStateName()
	{
		return stateName;
	}

	public void setStateName(String stateName)
	{
		this.stateName = stateName;
	}

}
