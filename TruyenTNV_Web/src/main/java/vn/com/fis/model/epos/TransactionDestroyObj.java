package vn.com.fis.model.epos;

import java.util.List;

public class TransactionDestroyObj
{
	private String cusType;
	private String shopId;
	private String fromDate;
	private String toDate;
	private String payMethod;
	private String staffId;
	
	//search
	private String createDate;
	private String userName;
	private String status;
	private String shopCode;
	private String staffCode;
	private String amount;
	private String tax;
	private String amountTax;
	private String promotion;
	private String discount;
	private String orgTotal;
	private String destroyer;
	private String destroyDate;
	private String invoiceId;
	private String transId;
	private String custName;
	private String custAddress;
	private String taxCode;
	private String billAccount;
	private String company;
	private String actionCode;
	private List<TransactionDestroyDetail> lstTransactionDestroyDetail;
//	private List<TransactionDestroyObj> lstTransactionDestroyObj;
	
//	/**
//	 * @return the lstTransactionDestroyObj
//	 */
//	public List<TransactionDestroyObj> getLstTransactionDestroyObj()
//	{
//		return lstTransactionDestroyObj;
//	}
//	/**
//	 * @param lstTransactionDestroyObj the lstTransactionDestroyObj to set
//	 */
//	public void setLstTransactionDestroyObj(List<TransactionDestroyObj> lstTransactionDestroyObj)
//	{
//		this.lstTransactionDestroyObj = lstTransactionDestroyObj;
//	}
	/**
	 * @return the cusType
	 */
	public String getCusType()
	{
		return cusType;
	}
	/**
	 * @param cusType the cusType to set
	 */
	public void setCusType(String cusType)
	{
		this.cusType = cusType;
	}
	/**
	 * @return the shopId
	 */
	public String getShopId()
	{
		return shopId;
	}
	/**
	 * @param shopId the shopId to set
	 */
	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}
	/**
	 * @return the fromDate
	 */
	public String getFromDate()
	{
		return fromDate;
	}
	/**
	 * @param fromDate the fromDate to set
	 */
	public void setFromDate(String fromDate)
	{
		this.fromDate = fromDate;
	}
	/**
	 * @return the toDate
	 */
	public String getToDate()
	{
		return toDate;
	}
	/**
	 * @param toDate the toDate to set
	 */
	public void setToDate(String toDate)
	{
		this.toDate = toDate;
	}
	/**
	 * @return the payMethod
	 */
	public String getPayMethod()
	{
		return payMethod;
	}
	/**
	 * @param payMethod the payMethod to set
	 */
	public void setPayMethod(String payMethod)
	{
		this.payMethod = payMethod;
	}
	/**
	 * @return the staffId
	 */
	public String getStaffId()
	{
		return staffId;
	}
	/**
	 * @param staffId the staffId to set
	 */
	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}
	/**
	 * @return the createDate
	 */
	public String getCreateDate()
	{
		return createDate;
	}
	/**
	 * @param createDate the createDate to set
	 */
	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}
	/**
	 * @return the userName
	 */
	public String getUserName()
	{
		return userName;
	}
	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName)
	{
		this.userName = userName;
	}
	/**
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status)
	{
		this.status = status;
	}
	/**
	 * @return the shopCode
	 */
	public String getShopCode()
	{
		return shopCode;
	}
	/**
	 * @param shopCode the shopCode to set
	 */
	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}
	/**
	 * @return the staffCode
	 */
	public String getStaffCode()
	{
		return staffCode;
	}
	/**
	 * @param staffCode the staffCode to set
	 */
	public void setStaffCode(String staffCode)
	{
		this.staffCode = staffCode;
	}
	/**
	 * @return the amount
	 */
	public String getAmount()
	{
		return amount;
	}
	/**
	 * @param amount the amount to set
	 */
	public void setAmount(String amount)
	{
		this.amount = amount;
	}
	/**
	 * @return the tax
	 */
	public String getTax()
	{
		return tax;
	}
	/**
	 * @param tax the tax to set
	 */
	public void setTax(String tax)
	{
		this.tax = tax;
	}
	/**
	 * @return the amountTax
	 */
	public String getAmountTax()
	{
		return amountTax;
	}
	/**
	 * @param amountTax the amountTax to set
	 */
	public void setAmountTax(String amountTax)
	{
		this.amountTax = amountTax;
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
	 * @return the orgTotal
	 */
	public String getOrgTotal()
	{
		return orgTotal;
	}
	/**
	 * @param orgTotal the orgTotal to set
	 */
	public void setOrgTotal(String orgTotal)
	{
		this.orgTotal = orgTotal;
	}
	/**
	 * @return the destroyer
	 */
	public String getDestroyer()
	{
		return destroyer;
	}
	/**
	 * @param destroyer the destroyer to set
	 */
	public void setDestroyer(String destroyer)
	{
		this.destroyer = destroyer;
	}
	/**
	 * @return the destroyDate
	 */
	public String getDestroyDate()
	{
		return destroyDate;
	}
	/**
	 * @param destroyDate the destroyDate to set
	 */
	public void setDestroyDate(String destroyDate)
	{
		this.destroyDate = destroyDate;
	}
	/**
	 * @return the invoiceId
	 */
	public String getInvoiceId()
	{
		return invoiceId;
	}
	/**
	 * @param invoiceId the invoiceId to set
	 */
	public void setInvoiceId(String invoiceId)
	{
		this.invoiceId = invoiceId;
	}
	/**
	 * @return the transId
	 */
	public String getTransId()
	{
		return transId;
	}
	/**
	 * @param transId the transId to set
	 */
	public void setTransId(String transId)
	{
		this.transId = transId;
	}
	/**
	 * @return the custName
	 */
	public String getCustName()
	{
		return custName;
	}
	/**
	 * @param custName the custName to set
	 */
	public void setCustName(String custName)
	{
		this.custName = custName;
	}
	/**
	 * @return the custAddress
	 */
	public String getCustAddress()
	{
		return custAddress;
	}
	/**
	 * @param custAddress the custAddress to set
	 */
	public void setCustAddress(String custAddress)
	{
		this.custAddress = custAddress;
	}
	/**
	 * @return the taxCode
	 */
	public String getTaxCode()
	{
		return taxCode;
	}
	/**
	 * @param taxCode the taxCode to set
	 */
	public void setTaxCode(String taxCode)
	{
		this.taxCode = taxCode;
	}
	/**
	 * @return the billAccount
	 */
	public String getBillAccount()
	{
		return billAccount;
	}
	/**
	 * @param billAccount the billAccount to set
	 */
	public void setBillAccount(String billAccount)
	{
		this.billAccount = billAccount;
	}
	/**
	 * @return the company
	 */
	public String getCompany()
	{
		return company;
	}
	/**
	 * @param company the company to set
	 */
	public void setCompany(String company)
	{
		this.company = company;
	}
	/**
	 * @return the actionCode
	 */
	public String getActionCode()
	{
		return actionCode;
	}
	/**
	 * @param actionCode the actionCode to set
	 */
	public void setActionCode(String actionCode)
	{
		this.actionCode = actionCode;
	}
	/**
	 * @return the lstTransactionDestroyDetail
	 */
	public List<TransactionDestroyDetail> getLstTransactionDestroyDetail()
	{
		return lstTransactionDestroyDetail;
	}
	/**
	 * @param lstTransactionDestroyDetail the lstTransactionDestroyDetail to set
	 */
	public void setLstTransactionDestroyDetail(List<TransactionDestroyDetail> lstTransactionDestroyDetail)
	{
		this.lstTransactionDestroyDetail = lstTransactionDestroyDetail;
	}
	
}
