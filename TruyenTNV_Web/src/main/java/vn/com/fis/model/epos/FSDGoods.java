package vn.com.fis.model.epos;

import java.util.List;

public class FSDGoods implements Cloneable
{
	private ApDomainModel transType;
	private StocksList agent;
	private String receiptCode;
	private ApDomainModel paymentMethod;
	private String rate;
	private String cardNo;
	private String staffCode;
	private String staffName;
	private String transDate;
	private GoodsList goods;
	private String quantity;
	private PriceModel price;
	private PromotionModel promotion;
	private String discount;
	private String vat;
	private List<GoodsSaleTransaction> lstGoodsSaleTransaction;
	private GoodsSaleTransaction goodsSaleSelected;

	private String mlngSUMMoneyNoTax;
	private String mlngSUMMoneyTax;
	private String mlngSUMMoneyTaxSum;
	private String mlngSUMMoneyDiscount;
	private String mlngSUMMoneyProm;
	private String mlngSUMMoney;
	private String mlngSUMMoneySum;
	private String mlngSUMMoneySumWithProm;

	private String mstrStockStaffID;
	private String mstrShopID;
	private String mstrStaffID;
	private List<CardNoModel> lstCardNo;

	private String reasonId;
	private String mstrAccountType;
	private String mstrStockID;

	private List<GoodsSaleTransaction> lstGoodsSaleAt;
	private List<AttachGoodsObj> lstAttachGoodsTemp;

	public ApDomainModel getTransType()
	{
		return transType;
	}

	public void setTransType(ApDomainModel transType)
	{
		this.transType = transType;
	}

	public StocksList getAgent()
	{
		return agent;
	}

	public void setAgent(StocksList agent)
	{
		this.agent = agent;
	}

	public String getReceiptCode()
	{
		return receiptCode;
	}

	public void setReceiptCode(String receiptCode)
	{
		this.receiptCode = receiptCode;
	}

	public ApDomainModel getPaymentMethod()
	{
		return paymentMethod;
	}

	public void setPaymentMethod(ApDomainModel paymentMethod)
	{
		this.paymentMethod = paymentMethod;
	}

	public String getRate()
	{
		return rate;
	}

	public void setRate(String rate)
	{
		this.rate = rate;
	}

	public String getCardNo()
	{
		return cardNo;
	}

	public void setCardNo(String cardNo)
	{
		this.cardNo = cardNo;
	}

	public String getStaffCode()
	{
		return staffCode;
	}

	public void setStaffCode(String staffCode)
	{
		this.staffCode = staffCode;
	}

	public String getStaffName()
	{
		return staffName;
	}

	public void setStaffName(String staffName)
	{
		this.staffName = staffName;
	}

	public String getTransDate()
	{
		return transDate;
	}

	public void setTransDate(String transDate)
	{
		this.transDate = transDate;
	}

	public GoodsList getGoods()
	{
		return goods;
	}

	public void setGoods(GoodsList goods)
	{
		this.goods = goods;
	}

	public String getQuantity()
	{
		return quantity;
	}

	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	public PriceModel getPrice()
	{
		return price;
	}

	public void setPrice(PriceModel price)
	{
		this.price = price;
	}

	public PromotionModel getPromotion()
	{
		return promotion;
	}

	public void setPromotion(PromotionModel promotion)
	{
		this.promotion = promotion;
	}

	public String getDiscount()
	{
		return discount;
	}

	public void setDiscount(String discount)
	{
		this.discount = discount;
	}

	public String getVat()
	{
		return vat;
	}

	public void setVat(String vat)
	{
		this.vat = vat;
	}

	public List<GoodsSaleTransaction> getLstGoodsSaleTransaction()
	{
		return lstGoodsSaleTransaction;
	}

	public void setLstGoodsSaleTransaction(List<GoodsSaleTransaction> lstGoodsSaleTransaction)
	{
		this.lstGoodsSaleTransaction = lstGoodsSaleTransaction;
	}

	public GoodsSaleTransaction getGoodsSaleSelected()
	{
		return goodsSaleSelected;
	}

	public void setGoodsSaleSelected(GoodsSaleTransaction goodsSaleSelected)
	{
		this.goodsSaleSelected = goodsSaleSelected;
	}

	public String getMlngSUMMoneyNoTax()
	{
		return mlngSUMMoneyNoTax;
	}

	public void setMlngSUMMoneyNoTax(String mlngSUMMoneyNoTax)
	{
		this.mlngSUMMoneyNoTax = mlngSUMMoneyNoTax;
	}

	public String getMlngSUMMoneyTax()
	{
		return mlngSUMMoneyTax;
	}

	public void setMlngSUMMoneyTax(String mlngSUMMoneyTax)
	{
		this.mlngSUMMoneyTax = mlngSUMMoneyTax;
	}

	public String getMlngSUMMoneyTaxSum()
	{
		return mlngSUMMoneyTaxSum;
	}

	public void setMlngSUMMoneyTaxSum(String mlngSUMMoneyTaxSum)
	{
		this.mlngSUMMoneyTaxSum = mlngSUMMoneyTaxSum;
	}

	public String getMlngSUMMoneyDiscount()
	{
		return mlngSUMMoneyDiscount;
	}

	public void setMlngSUMMoneyDiscount(String mlngSUMMoneyDiscount)
	{
		this.mlngSUMMoneyDiscount = mlngSUMMoneyDiscount;
	}

	public String getMlngSUMMoneyProm()
	{
		return mlngSUMMoneyProm;
	}

	public void setMlngSUMMoneyProm(String mlngSUMMoneyProm)
	{
		this.mlngSUMMoneyProm = mlngSUMMoneyProm;
	}

	public String getMlngSUMMoney()
	{
		return mlngSUMMoney;
	}

	public void setMlngSUMMoney(String mlngSUMMoney)
	{
		this.mlngSUMMoney = mlngSUMMoney;
	}

	public String getMlngSUMMoneySum()
	{
		return mlngSUMMoneySum;
	}

	public void setMlngSUMMoneySum(String mlngSUMMoneySum)
	{
		this.mlngSUMMoneySum = mlngSUMMoneySum;
	}

	public String getMlngSUMMoneySumWithProm()
	{
		return mlngSUMMoneySumWithProm;
	}

	public void setMlngSUMMoneySumWithProm(String mlngSUMMoneySumWithProm)
	{
		this.mlngSUMMoneySumWithProm = mlngSUMMoneySumWithProm;
	}

	public String getMstrStockStaffID()
	{
		return mstrStockStaffID;
	}

	public void setMstrStockStaffID(String mstrStockStaffID)
	{
		this.mstrStockStaffID = mstrStockStaffID;
	}

	public String getMstrShopID()
	{
		return mstrShopID;
	}

	public void setMstrShopID(String mstrShopID)
	{
		this.mstrShopID = mstrShopID;
	}

	public String getMstrStaffID()
	{
		return mstrStaffID;
	}

	public void setMstrStaffID(String mstrStaffID)
	{
		this.mstrStaffID = mstrStaffID;
	}

	public List<CardNoModel> getLstCardNo()
	{
		return lstCardNo;
	}

	public void setLstCardNo(List<CardNoModel> lstCardNo)
	{
		this.lstCardNo = lstCardNo;
	}

	public String getReasonId()
	{
		return reasonId;
	}

	public void setReasonId(String reasonId)
	{
		this.reasonId = reasonId;
	}

	public String getMstrAccountType()
	{
		return mstrAccountType;
	}

	public void setMstrAccountType(String mstrAccountType)
	{
		this.mstrAccountType = mstrAccountType;
	}

	public String getMstrStockID()
	{
		return mstrStockID;
	}

	public void setMstrStockID(String mstrStockID)
	{
		this.mstrStockID = mstrStockID;
	}

	public List<GoodsSaleTransaction> getLstGoodsSaleAt()
	{
		return lstGoodsSaleAt;
	}

	public void setLstGoodsSaleAt(List<GoodsSaleTransaction> lstGoodsSaleAt)
	{
		this.lstGoodsSaleAt = lstGoodsSaleAt;
	}

	public List<AttachGoodsObj> getLstAttachGoodsTemp()
	{
		return lstAttachGoodsTemp;
	}

	public void setLstAttachGoodsTemp(List<AttachGoodsObj> lstAttachGoodsTemp)
	{
		this.lstAttachGoodsTemp = lstAttachGoodsTemp;
	}

	@Override
	public Object clone() throws CloneNotSupportedException
	{
		return super.clone();
	}

}
