package vn.com.fis.model.epos;

import java.util.List;

public class AttachGoodsObj implements Cloneable
{
	private String goodsCode;
	private String goodsId;
	private String groupAttach;
	private String type;
	private String priceType;
	private String quantity;
	private String bl;
	private GoodsSaleTransaction goodsSale; // 7
	private String quantityAffect;
	private String price;
	private String priceId;
	private String promotionId;
	private String promotionTotal;
	List<InputSerialModel> vectorSerial;

	public String getGoodsCode()
	{
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode)
	{
		this.goodsCode = goodsCode;
	}

	public String getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
	}

	public String getGroupAttach()
	{
		return groupAttach;
	}

	public void setGroupAttach(String groupAttach)
	{
		this.groupAttach = groupAttach;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getPriceType()
	{
		return priceType;
	}

	public void setPriceType(String priceType)
	{
		this.priceType = priceType;
	}

	public String getQuantity()
	{
		return quantity;
	}

	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	public String getBl()
	{
		return bl;
	}

	public void setBl(String bl)
	{
		this.bl = bl;
	}

	public GoodsSaleTransaction getGoodsSale()
	{
		return goodsSale;
	}

	public void setGoodsSale(GoodsSaleTransaction goodsSale)
	{
		this.goodsSale = goodsSale;
	}

	public String getQuantityAffect()
	{
		return quantityAffect;
	}

	public void setQuantityAffect(String quantityAffect)
	{
		this.quantityAffect = quantityAffect;
	}

	public String getPrice()
	{
		return price;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	public String getPriceId()
	{
		return priceId;
	}

	public void setPriceId(String priceId)
	{
		this.priceId = priceId;
	}

	public String getPromotionId()
	{
		return promotionId;
	}

	public void setPromotionId(String promotionId)
	{
		this.promotionId = promotionId;
	}

	public String getPromotionTotal()
	{
		return promotionTotal;
	}

	public void setPromotionTotal(String promotionTotal)
	{
		this.promotionTotal = promotionTotal;
	}

	public List<InputSerialModel> getVectorSerial()
	{
		return vectorSerial;
	}

	public void setVectorSerial(List<InputSerialModel> vectorSerial)
	{
		this.vectorSerial = vectorSerial;
	}

	@Override
	public Object clone() throws CloneNotSupportedException
	{
		return super.clone();
	}

}
