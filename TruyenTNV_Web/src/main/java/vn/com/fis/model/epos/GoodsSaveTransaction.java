package vn.com.fis.model.epos;

import java.util.List;

public class GoodsSaveTransaction
{
	private String shopId;
	private String staffId;
	private String payMethod;
	private String amount;
	private String amountTax;
	private String tax;
	private String orgTotal;
	private String grandTotal;
	private String discountAmount;
	private String promotionAmount;
	private String createDatetime;
	private String status;
	private String userName;
	private String custName;
	private String custAddress;
	private String taxCode;
	private String billAccount;
	private String company;
	private String custType;
	private String stockId;
	private List<GoodsSaleTransaction> vectorGoods;
	private String taxRate;
	private List<CardNoModel> creditNumber;
	private List<ObjectForDoSomething> handsetICCIDList;

	private String deliverer;
	private String account;
	private String delivererShopId;
	private String reasonId;
	private String soCode;
	private String custId;

	private String currentStockId;
	private String sessionClientIp;

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	public String getStaffId()
	{
		return staffId;
	}

	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

	public String getPayMethod()
	{
		return payMethod;
	}

	public void setPayMethod(String payMethod)
	{
		this.payMethod = payMethod;
	}

	public String getAmount()
	{
		return amount;
	}

	public void setAmount(String amount)
	{
		this.amount = amount;
	}

	public String getAmountTax()
	{
		return amountTax;
	}

	public void setAmountTax(String amountTax)
	{
		this.amountTax = amountTax;
	}

	public String getTax()
	{
		return tax;
	}

	public void setTax(String tax)
	{
		this.tax = tax;
	}

	public String getOrgTotal()
	{
		return orgTotal;
	}

	public void setOrgTotal(String orgTotal)
	{
		this.orgTotal = orgTotal;
	}

	public String getGrandTotal()
	{
		return grandTotal;
	}

	public void setGrandTotal(String grandTotal)
	{
		this.grandTotal = grandTotal;
	}

	public String getDiscountAmount()
	{
		return discountAmount;
	}

	public void setDiscountAmount(String discountAmount)
	{
		this.discountAmount = discountAmount;
	}

	public String getPromotionAmount()
	{
		return promotionAmount;
	}

	public void setPromotionAmount(String promotionAmount)
	{
		this.promotionAmount = promotionAmount;
	}

	public String getCreateDatetime()
	{
		return createDatetime;
	}

	public void setCreateDatetime(String createDatetime)
	{
		this.createDatetime = createDatetime;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getUserName()
	{
		return userName;
	}

	public void setUserName(String userName)
	{
		this.userName = userName;
	}

	public String getCustName()
	{
		return custName;
	}

	public void setCustName(String custName)
	{
		this.custName = custName;
	}

	public String getCustAddress()
	{
		return custAddress;
	}

	public void setCustAddress(String custAddress)
	{
		this.custAddress = custAddress;
	}

	public String getTaxCode()
	{
		return taxCode;
	}

	public void setTaxCode(String taxCode)
	{
		this.taxCode = taxCode;
	}

	public String getBillAccount()
	{
		return billAccount;
	}

	public void setBillAccount(String billAccount)
	{
		this.billAccount = billAccount;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(String company)
	{
		this.company = company;
	}

	public String getCustType()
	{
		return custType;
	}

	public void setCustType(String custType)
	{
		this.custType = custType;
	}

	public List<GoodsSaleTransaction> getVectorGoods()
	{
		return vectorGoods;
	}

	public void setVectorGoods(List<GoodsSaleTransaction> vectorGoods)
	{
		this.vectorGoods = vectorGoods;
	}

	public String getTaxRate()
	{
		return taxRate;
	}

	public void setTaxRate(String taxRate)
	{
		this.taxRate = taxRate;
	}

	public List<CardNoModel> getCreditNumber()
	{
		return creditNumber;
	}

	public void setCreditNumber(List<CardNoModel> creditNumber)
	{
		this.creditNumber = creditNumber;
	}

	public List<ObjectForDoSomething> getHandsetICCIDList()
	{
		return handsetICCIDList;
	}

	public void setHandsetICCIDList(List<ObjectForDoSomething> handsetICCIDList)
	{
		this.handsetICCIDList = handsetICCIDList;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public String getDeliverer()
	{
		return deliverer;
	}

	public void setDeliverer(String deliverer)
	{
		this.deliverer = deliverer;
	}

	public String getAccount()
	{
		return account;
	}

	public void setAccount(String account)
	{
		this.account = account;
	}

	public String getDelivererShopId()
	{
		return delivererShopId;
	}

	public void setDelivererShopId(String delivererShopId)
	{
		this.delivererShopId = delivererShopId;
	}

	public String getReasonId()
	{
		return reasonId;
	}

	public void setReasonId(String reasonId)
	{
		this.reasonId = reasonId;
	}

	public String getSoCode()
	{
		return soCode;
	}

	public void setSoCode(String soCode)
	{
		this.soCode = soCode;
	}

	public String getCustId()
	{
		return custId;
	}

	public void setCustId(String custId)
	{
		this.custId = custId;
	}

	public String getCurrentStockId()
	{
		return currentStockId;
	}

	public void setCurrentStockId(String currentStockId)
	{
		this.currentStockId = currentStockId;
	}

	public String getSessionClientIp()
	{
		return sessionClientIp;
	}

	public void setSessionClientIp(String sessionClientIp)
	{
		this.sessionClientIp = sessionClientIp;
	}

}
