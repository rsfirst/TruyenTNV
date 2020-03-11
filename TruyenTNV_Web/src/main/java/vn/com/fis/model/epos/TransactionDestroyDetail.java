package vn.com.fis.model.epos;

import java.util.List;

public class TransactionDestroyDetail
{

	private String name;
	private String quantity;
	private String price;
	private String discount;
	private String promotion;
	private String taxRate;
	private String sum;
	private String transDetailId;
	private String goodsId;
	private String priceId;
	private List<TransactionSerialList> lstTransSerial;
	/**
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name)
	{
		this.name = name;
	}
	/**
	 * @return the quantity
	 */
	public String getQuantity()
	{
		return quantity;
	}
	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}
	/**
	 * @return the price
	 */
	public String getPrice()
	{
		return price;
	}
	/**
	 * @param price the price to set
	 */
	public void setPrice(String price)
	{
		this.price = price;
	}
	/**
	 * @return the discount
	 */
	public String getDiscount()
	{
		return discount;
	}
	/**
	 * @param discount the discount to set
	 */
	public void setDiscount(String discount)
	{
		this.discount = discount;
	}
	/**
	 * @return the promotion
	 */
	public String getPromotion()
	{
		return promotion;
	}
	/**
	 * @param promotion the promotion to set
	 */
	public void setPromotion(String promotion)
	{
		this.promotion = promotion;
	}
	/**
	 * @return the taxRate
	 */
	public String getTaxRate()
	{
		return taxRate;
	}
	/**
	 * @param taxRate the taxRate to set
	 */
	public void setTaxRate(String taxRate)
	{
		this.taxRate = taxRate;
	}
	/**
	 * @return the sum
	 */
	public String getSum()
	{
		return sum;
	}
	/**
	 * @param sum the sum to set
	 */
	public void setSum(String sum)
	{
		this.sum = sum;
	}
	/**
	 * @return the transDetailId
	 */
	public String getTransDetailId()
	{
		return transDetailId;
	}
	/**
	 * @param transDetailId the transDetailId to set
	 */
	public void setTransDetailId(String transDetailId)
	{
		this.transDetailId = transDetailId;
	}
	/**
	 * @return the goodsId
	 */
	public String getGoodsId()
	{
		return goodsId;
	}
	/**
	 * @param goodsId the goodsId to set
	 */
	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
	}
	/**
	 * @return the priceId
	 */
	public String getPriceId()
	{
		return priceId;
	}
	/**
	 * @param priceId the priceId to set
	 */
	public void setPriceId(String priceId)
	{
		this.priceId = priceId;
	}
	/**
	 * @return the lstTransSerial
	 */
	public List<TransactionSerialList> getLstTransSerial()
	{
		return lstTransSerial;
	}
	/**
	 * @param lstTransSerial the lstTransSerial to set
	 */
	public void setLstTransSerial(List<TransactionSerialList> lstTransSerial)
	{
		this.lstTransSerial = lstTransSerial;
	} 
	
}
