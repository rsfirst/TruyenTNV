package vn.com.fis.model.CInvoiceModel;

public class ListGoodOb
{
	private String name;
	private String quantity;
	private String price;
	private String discount;
	private String promotion;
	private String tax_rate;
	private String sum_money;
	private String trans_detail_id;
	private String goods_id;
	private String price_id;

	public ListGoodOb()
	{
		// TODO Auto-generated constructor stub
	}

	public ListGoodOb(String name, String quantity, String price, String discount, String promotion, String tax_rate, String sum_money, String trans_detail_id,
			String goods_id, String price_id)
	{
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.discount = discount;
		this.promotion = promotion;
		this.tax_rate = tax_rate;
		this.sum_money = sum_money;
		this.trans_detail_id = trans_detail_id;
		this.goods_id = goods_id;
		this.price_id = price_id;

	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getQuantity()
	{
		return quantity;
	}

	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	public String getPrice()
	{
		return price;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	public String getDiscount()
	{
		return discount;
	}

	public void setDiscount(String discount)
	{
		this.discount = discount;
	}

	public String getPromotion()
	{
		return promotion;
	}

	public void setPromotion(String promotion)
	{
		this.promotion = promotion;
	}

	public String getTax_rate()
	{
		return tax_rate;
	}

	public void setTax_rate(String tax_rate)
	{
		this.tax_rate = tax_rate;
	}

	public String getSum_money()
	{
		return sum_money;
	}

	public void setSum_money(String sum_money)
	{
		this.sum_money = sum_money;
	}

	public String getTrans_detail_id()
	{
		return trans_detail_id;
	}

	public void setTrans_detail_id(String trans_detail_id)
	{
		this.trans_detail_id = trans_detail_id;
	}

	public String getGoods_id()
	{
		return goods_id;
	}

	public void setGoods_id(String goods_id)
	{
		this.goods_id = goods_id;
	}

	public String getPrice_id()
	{
		return price_id;
	}

	public void setPrice_id(String price_id)
	{
		this.price_id = price_id;
	}

}
