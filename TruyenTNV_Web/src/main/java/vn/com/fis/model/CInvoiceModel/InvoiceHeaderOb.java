package vn.com.fis.model.CInvoiceModel;


import vn.com.fis.model.css.CInvoiceObject;

public class InvoiceHeaderOb
{
	private String invoiceNo;
	private String shopID;
	private String staffID;
	private String payShopID;
	private String name;
	private String company;
	private String address;
	private String account;
	private String tin;
	private String note;
	private String payMethod;
	private String amount;
	private String tax;
	private String orgTotal;
	private String amountTax;
	private String discount;
	private String promotion;
	private String grandTotal;
	private String createDate;
	private String userName;
	private String status;
	private String blockNo;
	private String serialNo;
	private String invoiceNumber;
	private String taxRate;
	private String invoiceType;
	private String transId;
	private String email;
	private String shopCode;

	private String statusName;
	private CInvoiceObject cInvoice;
	private String transCusType;
	private String transCusName;
	private String shopName;
	private String staffCode;
	private String staffName;
	private String payShopCode;
	private String orgAmount;
	private String grandAmount;
	private String printStatus;
	private String approve;
	private String effectDate;
	private String destroyer;
	private String destroyDate;
	private String receiptId;
	private String invoiceId;
	private String rate;
	private String payMethodName;

	private String shopCodeLogin;

	public String getPayMethodName()
	{
		return payMethodName;
	}

	public void setPayMethodName(String payMethodName)
	{
		this.payMethodName = payMethodName;
	}

	public String getRate()
	{
		return rate;
	}

	public void setRate(String rate)
	{
		this.rate = rate;
	}

	public String getInvoiceId()
	{
		return invoiceId;
	}

	public void setInvoiceId(String invoiceId)
	{
		this.invoiceId = invoiceId;
	}

	public String getReceiptId()
	{
		return receiptId;
	}

	public void setReceiptId(String receiptId)
	{
		this.receiptId = receiptId;
	}

	public String getDestroyer()
	{
		return destroyer;
	}

	public void setDestroyer(String destroyer)
	{
		this.destroyer = destroyer;
	}

	public String getDestroyDate()
	{
		return destroyDate;
	}

	public void setDestroyDate(String destroyDate)
	{
		this.destroyDate = destroyDate;
	}

	public String getEffectDate()
	{
		return effectDate;
	}

	public void setEffectDate(String effectDate)
	{
		this.effectDate = effectDate;
	}

	public String getApprove()
	{
		return approve;
	}

	public void setApprove(String approve)
	{
		this.approve = approve;
	}

	public String getPrintStatus()
	{
		return printStatus;
	}

	public void setPrintStatus(String printStatus)
	{
		this.printStatus = printStatus;
	}

	public String getGrandAmount()
	{
		return grandAmount;
	}

	public void setGrandAmount(String grandAmount)
	{
		this.grandAmount = grandAmount;
	}

	public String getOrgAmount()
	{
		return orgAmount;
	}

	public void setOrgAmount(String orgAmount)
	{
		this.orgAmount = orgAmount;
	}

	public String getPayShopCode()
	{
		return payShopCode;
	}

	public void setPayShopCode(String payShopCode)
	{
		this.payShopCode = payShopCode;
	}

	public String getTransCusType()
	{
		return transCusType;
	}

	public void setTransCusType(String transCusType)
	{
		this.transCusType = transCusType;
	}

	public String getTransCusName()
	{
		return transCusName;
	}

	public void setTransCusName(String transCusName)
	{
		this.transCusName = transCusName;
	}

	public String getShopName()
	{
		return shopName;
	}

	public void setShopName(String shopName)
	{
		this.shopName = shopName;
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

	public String getStatusName()
	{
		return statusName;
	}

	public void setStatusName(String statusName)
	{
		this.statusName = statusName;
	}

	public CInvoiceObject getcInvoice()
	{
		return cInvoice;
	}

	public void setcInvoice(CInvoiceObject cInvoice)
	{
		this.cInvoice = cInvoice;
	}

	public String logData()
	{
		StringBuilder str = new StringBuilder();
		str.append("invoiceNo = " + this.invoiceNo + ";");
		str.append("shopID = " + this.shopID + ";");
		str.append("staffID = " + this.staffID + ";");
		str.append("payShopID = " + this.payShopID + ";");
		str.append("name = " + this.name + ";");
		str.append("company = " + this.company + ";");
		str.append("address = " + this.address + ";");
		str.append("account = " + this.account + ";");
		str.append("tin = " + this.tin + ";");
		str.append("note = " + this.note + ";");
		str.append("payMethod = " + this.payMethod + ";");
		str.append("amount = " + this.amount + ";");
		str.append("tax = " + this.tax + ";");
		str.append("orgTotal = " + this.orgTotal + ";");
		str.append("amountTax = " + this.amountTax + ";");
		str.append("discount = " + this.discount + ";");
		str.append("promotion = " + this.promotion + ";");
		str.append("grandTotal = " + this.grandTotal + ";");
		str.append("createDate = " + this.createDate + ";");
		str.append("userName = " + this.userName + ";");
		str.append("status = " + this.status + ";");
		str.append("blockNo = " + this.blockNo + ";");
		str.append("serialNo = " + this.serialNo + ";");
		str.append("invoiceNumber = " + this.invoiceNumber + ";");
		str.append("taxRate = " + this.taxRate + ";");
		str.append("invoiceType = " + this.invoiceType + ";");
		str.append("transId = " + this.transId + ";");
		str.append("email = " + this.email + ";");
		str.append("shopCode = " + this.shopCode + ";");

		return str.toString();
	}

	public String getInvoiceNo()
	{
		return invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo)
	{
		this.invoiceNo = invoiceNo;
	}

	public String getShopID()
	{
		return shopID;
	}

	public void setShopID(String shopID)
	{
		this.shopID = shopID;
	}

	public String getStaffID()
	{
		return staffID;
	}

	public void setStaffID(String staffID)
	{
		this.staffID = staffID;
	}

	public String getPayShopID()
	{
		return payShopID;
	}

	public void setPayShopID(String payShopID)
	{
		this.payShopID = payShopID;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(String company)
	{
		this.company = company;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public String getAccount()
	{
		return account;
	}

	public void setAccount(String account)
	{
		this.account = account;
	}

	public String getTin()
	{
		return tin;
	}

	public void setTin(String tin)
	{
		this.tin = tin;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
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

	public String getAmountTax()
	{
		return amountTax;
	}

	public void setAmountTax(String amountTax)
	{
		this.amountTax = amountTax;
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

	public String getGrandTotal()
	{
		return grandTotal;
	}

	public void setGrandTotal(String grandTotal)
	{
		this.grandTotal = grandTotal;
	}

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public String getUserName()
	{
		return userName;
	}

	public void setUserName(String userName)
	{
		this.userName = userName;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getBlockNo()
	{
		return blockNo;
	}

	public void setBlockNo(String blockNo)
	{
		this.blockNo = blockNo;
	}

	public String getSerialNo()
	{
		return serialNo;
	}

	public void setSerialNo(String serialNo)
	{
		this.serialNo = serialNo;
	}

	public String getInvoiceNumber()
	{
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber)
	{
		this.invoiceNumber = invoiceNumber;
	}

	public String getTaxRate()
	{
		return taxRate;
	}

	public void setTaxRate(String taxRate)
	{
		this.taxRate = taxRate;
	}

	public String getInvoiceType()
	{
		return invoiceType;
	}

	public void setInvoiceType(String invoiceType)
	{
		this.invoiceType = invoiceType;
	}

	public String getTransId()
	{
		return transId;
	}

	public void setTransId(String transId)
	{
		this.transId = transId;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	public String getShopCodeLogin()
	{
		return shopCodeLogin;
	}

	public void setShopCodeLogin(String shopCodeLogin)
	{
		this.shopCodeLogin = shopCodeLogin;
	}

}
