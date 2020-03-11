package vn.com.fis.model.epos;

import java.util.List;

public class GoodsSaleTransaction implements Cloneable
{
	private String goodsCode;
	private String goodsQuantity;
	private String goodsPrice;
	private String goodsDiscount;
	private String goodsPromotion;
	private String goodsUnit;
	private String moneySum1;
	private String moneyNoTax;
	private String moneyTax;
	private String moneyTaxSum;
	private String moneyDiscount;
	private String moneyPromotion;
	private String money;
	private String moneySum2;
	private String promotionCode;
	private String vat;
	private GoodsVectorId vectorId;
	private List<InputSerialModel> vectorSerial;
	private String checkSerial;
	private String attachRequire;
	private String attachGoodsCode;
	private List<AttachGoodsObj> attachGoods;
	private String goodsGroupCode;
	private String priceType;
	private String resourceCode;
	private String goodsId;
	private String priceId;
	private String unit;
	private String maxQuantity;
	private String priceTypeId;
	private String editable;
	private String goodsType;
	private String promotionId;

	private String primaryGoodsCode;
	private String primaryPriceId;
	private String primaryPromotionId;

	private String transDetailId;

	private String rowId;
	private String totalPromotion;

	private String checkQuantity; // Them vao de truyen xuong check khi them cac mat hang di kem len form

	public String getGoodsCode()
	{
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode)
	{
		this.goodsCode = goodsCode;
	}

	public String getGoodsQuantity()
	{
		return goodsQuantity;
	}

	public void setGoodsQuantity(String goodsQuantity)
	{
		this.goodsQuantity = goodsQuantity;
	}

	public String getGoodsPrice()
	{
		return goodsPrice;
	}

	public void setGoodsPrice(String goodsPrice)
	{
		this.goodsPrice = goodsPrice;
	}

	public String getGoodsDiscount()
	{
		return goodsDiscount;
	}

	public void setGoodsDiscount(String goodsDiscount)
	{
		this.goodsDiscount = goodsDiscount;
	}

	public String getGoodsPromotion()
	{
		return goodsPromotion;
	}

	public void setGoodsPromotion(String goodsPromotion)
	{
		this.goodsPromotion = goodsPromotion;
	}

	public String getGoodsUnit()
	{
		return goodsUnit;
	}

	public void setGoodsUnit(String goodsUnit)
	{
		this.goodsUnit = goodsUnit;
	}

	public String getMoneySum1()
	{
		return moneySum1;
	}

	public void setMoneySum1(String moneySum1)
	{
		this.moneySum1 = moneySum1;
	}

	public String getMoneyNoTax()
	{
		return moneyNoTax;
	}

	public void setMoneyNoTax(String moneyNoTax)
	{
		this.moneyNoTax = moneyNoTax;
	}

	public String getMoneyTax()
	{
		return moneyTax;
	}

	public void setMoneyTax(String moneyTax)
	{
		this.moneyTax = moneyTax;
	}

	public String getMoneyTaxSum()
	{
		return moneyTaxSum;
	}

	public void setMoneyTaxSum(String moneyTaxSum)
	{
		this.moneyTaxSum = moneyTaxSum;
	}

	public String getMoneyDiscount()
	{
		return moneyDiscount;
	}

	public void setMoneyDiscount(String moneyDiscount)
	{
		this.moneyDiscount = moneyDiscount;
	}

	public String getMoneyPromotion()
	{
		return moneyPromotion;
	}

	public void setMoneyPromotion(String moneyPromotion)
	{
		this.moneyPromotion = moneyPromotion;
	}

	public String getMoney()
	{
		return money;
	}

	public void setMoney(String money)
	{
		this.money = money;
	}

	public String getMoneySum2()
	{
		return moneySum2;
	}

	public void setMoneySum2(String moneySum2)
	{
		this.moneySum2 = moneySum2;
	}

	public String getPromotionCode()
	{
		return promotionCode;
	}

	public void setPromotionCode(String promotionCode)
	{
		this.promotionCode = promotionCode;
	}

	public String getVat()
	{
		return vat;
	}

	public void setVat(String vat)
	{
		this.vat = vat;
	}

	public GoodsVectorId getVectorId()
	{
		return vectorId;
	}

	public void setVectorId(GoodsVectorId vectorId)
	{
		this.vectorId = vectorId;
	}

	public List<InputSerialModel> getVectorSerial()
	{
		return vectorSerial;
	}

	public void setVectorSerial(List<InputSerialModel> vectorSerial)
	{
		this.vectorSerial = vectorSerial;
	}

	public String getCheckSerial()
	{
		return checkSerial;
	}

	public void setCheckSerial(String checkSerial)
	{
		this.checkSerial = checkSerial;
	}

	public String getAttachRequire()
	{
		return attachRequire;
	}

	public void setAttachRequire(String attachRequire)
	{
		this.attachRequire = attachRequire;
	}

	public String getAttachGoodsCode()
	{
		return attachGoodsCode;
	}

	public void setAttachGoodsCode(String attachGoodsCode)
	{
		this.attachGoodsCode = attachGoodsCode;
	}

	public List<AttachGoodsObj> getAttachGoods()
	{
		return attachGoods;
	}

	public void setAttachGoods(List<AttachGoodsObj> attachGoods)
	{
		this.attachGoods = attachGoods;
	}

	public String getGoodsGroupCode()
	{
		return goodsGroupCode;
	}

	public void setGoodsGroupCode(String goodsGroupCode)
	{
		this.goodsGroupCode = goodsGroupCode;
	}

	public String getPriceType()
	{
		return priceType;
	}

	public void setPriceType(String priceType)
	{
		this.priceType = priceType;
	}

	public String getResourceCode()
	{
		return resourceCode;
	}

	public void setResourceCode(String resourceCode)
	{
		this.resourceCode = resourceCode;
	}

	public String getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
	}

	public String getPriceId()
	{
		return priceId;
	}

	public void setPriceId(String priceId)
	{
		this.priceId = priceId;
	}

	public String getUnit()
	{
		return unit;
	}

	public void setUnit(String unit)
	{
		this.unit = unit;
	}

	public String getMaxQuantity()
	{
		return maxQuantity;
	}

	public void setMaxQuantity(String maxQuantity)
	{
		this.maxQuantity = maxQuantity;
	}

	public String getPriceTypeId()
	{
		return priceTypeId;
	}

	public void setPriceTypeId(String priceTypeId)
	{
		this.priceTypeId = priceTypeId;
	}

	public String getEditable()
	{
		return editable;
	}

	public void setEditable(String editable)
	{
		this.editable = editable;
	}

	public String getGoodsType()
	{
		return goodsType;
	}

	public void setGoodsType(String goodsType)
	{
		this.goodsType = goodsType;
	}

	public String getPromotionId()
	{
		return promotionId;
	}

	public void setPromotionId(String promotionId)
	{
		this.promotionId = promotionId;
	}

	public String getPrimaryGoodsCode()
	{
		return primaryGoodsCode;
	}

	public void setPrimaryGoodsCode(String primaryGoodsCode)
	{
		this.primaryGoodsCode = primaryGoodsCode;
	}

	public String getPrimaryPriceId()
	{
		return primaryPriceId;
	}

	public void setPrimaryPriceId(String primaryPriceId)
	{
		this.primaryPriceId = primaryPriceId;
	}

	public String getPrimaryPromotionId()
	{
		return primaryPromotionId;
	}

	public void setPrimaryPromotionId(String primaryPromotionId)
	{
		this.primaryPromotionId = primaryPromotionId;
	}

	public String getTransDetailId()
	{
		return transDetailId;
	}

	public void setTransDetailId(String transDetailId)
	{
		this.transDetailId = transDetailId;
	}

	public String getRowId()
	{
		return rowId;
	}

	public void setRowId(String rowId)
	{
		this.rowId = rowId;
	}

	public String getTotalPromotion()
	{
		return totalPromotion;
	}

	public void setTotalPromotion(String totalPromotion)
	{
		this.totalPromotion = totalPromotion;
	}

	public String getCheckQuantity()
	{
		return checkQuantity;
	}

	public void setCheckQuantity(String checkQuantity)
	{
		this.checkQuantity = checkQuantity;
	}

	@Override
	public Object clone() throws CloneNotSupportedException
	{
		return super.clone();
	}

}
