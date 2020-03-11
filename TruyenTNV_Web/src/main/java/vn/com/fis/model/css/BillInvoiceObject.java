package vn.com.fis.model.css;

public class BillInvoiceObject
{

	public BillInvoiceObject()
	{

	}

	public BillInvoiceObject(String invoiceId, String invoiceType, String createDate, String paymentId, String invoiceNo, String amountOrg,
			String amountNoneTax, String amountDiscount, String amountPromote, String amountVAT, String amountTotal, String fromDate, String toDate,
			String status, String blockNo, String serialNo, String customerName, String address, String tel, String accountNo, String taxCode, String shopId,
			String staffId, String mdn, String payMenthod, String receiptId, String destroyer, String destroyDate, String transId, String shopCreateInv,
			String paymentStatus, String modifyDate)
	{

		this.invoiceId = invoiceId;
		this.invoiceType = invoiceType;
		this.createDate = createDate;
		this.paymentId = paymentId;
		this.invoiceNo = invoiceNo;
		this.amountOrg = amountOrg;
		this.amountNoneTax = amountNoneTax;
		this.amountDiscount = amountDiscount;
		this.amountPromote = amountPromote;
		this.amountVAT = amountVAT;
		this.amountTotal = amountTotal;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.status = status;
		this.blockNo = blockNo;
		this.serialNo = serialNo;
		this.customerName = customerName;
		this.address = address;
		this.tel = tel;
		this.accountNo = accountNo;
		this.taxCode = taxCode;
		this.shopId = shopId;
		this.staffId = staffId;
		this.mdn = mdn;
		this.payMenthod = payMenthod;
		this.receiptId = receiptId;
		this.destroyer = destroyer;
		this.destroyDate = destroyDate;
		this.transId = transId;
		this.shopCreateInv = shopCreateInv;
		this.paymentStatus = paymentStatus;
		this.modifyDate = modifyDate;
	}

	private int index;
	private String invoiceId;
	private String invoiceType;
	private String createDate;
	private String paymentId;
	private String invoiceNo;
	private String amountOrg;
	private String amountNoneTax;
	private String amountDiscount;
	private String amountPromote;
	private String amountVAT;
	private String amountTotal;
	private String fromDate;
	private String toDate;
	private String status;
	private String blockNo;
	private String serialNo;
	private String customerName;
	private String address;
	private String tel;
	private String accountNo;
	private String taxCode;
	private String shopId;
	private String staffId;
	private String mdn;
	private String payMenthod;
	private String receiptId;
	private String destroyer;
	private String destroyDate;
	private String transId;
	private String shopCreateInv;
	private String paymentStatus;
	private String modifyDate;
	private String invoiceStatus;
	private CInvoiceObject cInvoice;
	private String statusName;

	private boolean isChecked;
	private String isCheckedP;
	private String updateStatus;
	private String updateMessage;

	private String staffCode;
	private String staffName;
	private String shopCode;

	private String amountOrgRound;
	private String amountVATRound;
	private String statusCode;
	private String chkPrintCombine;
	private String note;

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public int getIndex()
	{
		return index;
	}

	public void setIndex(int index)
	{
		this.index = index;
	}

	public String getAmountOrgRound()
	{
		return amountOrgRound;
	}

	public void setAmountOrgRound(String amountOrgRound)
	{
		this.amountOrgRound = amountOrgRound;
	}

	public String getAmountVATRound()
	{
		return amountVATRound;
	}

	public void setAmountVATRound(String amountVATRound)
	{
		this.amountVATRound = amountVATRound;
	}

	private String type;

	public String logData()
	{
		StringBuilder str = new StringBuilder();
		str.append(" invoiceId = " + this.invoiceId + ";");
		str.append(" invoiceType = " + this.invoiceType + ";");
		str.append(" createDate = " + this.createDate + ";");
		str.append(" paymentId = " + this.paymentId + ";");
		str.append(" invoiceNo = " + this.invoiceNo + ";");
		str.append(" amountOrg = " + this.amountOrg + ";");
		str.append(" amountNoneTax = " + this.amountNoneTax + ";");
		str.append(" amountDiscount = " + this.amountDiscount + ";");
		str.append(" amountPromote = " + this.amountPromote + ";");
		str.append(" amountVAT = " + this.amountVAT + ";");
		str.append(" amountTotal = " + this.amountTotal + ";");
		str.append(" fromDate = " + this.fromDate + ";");
		str.append(" toDate = " + this.toDate + ";");
		str.append(" status = " + this.status + ";");
		str.append(" blockNo = " + this.blockNo + ";");
		str.append(" serialNo = " + this.serialNo + ";");
		str.append(" customerName = " + this.customerName + ";");
		str.append(" address = " + this.address + ";");
		str.append(" tel = " + this.tel + ";");
		str.append(" accountNo = " + this.accountNo + ";");
		str.append(" taxCode = " + this.taxCode + ";");
		str.append(" shopId = " + this.shopId + ";");
		str.append(" staffId = " + this.staffId + ";");
		str.append(" mdn = " + this.mdn + ";");
		str.append(" payMenthod = " + this.payMenthod + ";");
		str.append(" receiptId = " + this.receiptId + ";");
		str.append(" destroyer = " + this.destroyer + ";");
		str.append(" destroyDate = " + this.destroyDate + ";");
		str.append(" transId = " + this.transId + ";");
		str.append(" shopCreateInv = " + this.shopCreateInv + ";");
		str.append(" paymentStatus = " + this.paymentStatus + ";");
		str.append(" modifyDate = " + this.modifyDate + ";");
		str.append(" invoiceStatus = " + this.invoiceStatus + ";");
		str.append(" cInvoice = " + this.cInvoice + ";");
		str.append(" statusName = " + this.statusName + ";");
		str.append(" isChecked = " + this.isChecked + ";");
		str.append(" updateStatus = " + this.updateStatus + ";");
		str.append(" updateMessage = " + this.updateMessage + ";");
		str.append(" staffCode = " + this.staffCode + ";");
		str.append(" staffName = " + this.staffName + ";");
		str.append(" shopCode = " + this.shopCode + ";");
		str.append(" type = " + this.type + ";");

		return str.toString();

	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
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

	public boolean isChecked()
	{
		return isChecked;
	}

	public void setChecked(boolean isChecked)
	{
		setIsCheckedP(String.valueOf(isChecked));
		this.isChecked = isChecked;
	}

	public String getIsCheckedP()
	{
		return isCheckedP;
	}

	public void setIsCheckedP(String isCheckedP)
	{
		this.isCheckedP = isCheckedP;
	}

	public String getUpdateMessage()
	{
		return updateMessage;
	}

	public void setUpdateMessage(String updateMessage)
	{
		this.updateMessage = updateMessage;
	}

	public String getUpdateStatus()
	{
		return updateStatus;
	}

	public void setUpdateStatus(String updateStatus)
	{
		this.updateStatus = updateStatus;
	}

	public String getInvoiceId()
	{
		return invoiceId;
	}

	public void setInvoiceId(String invoiceId)
	{
		this.invoiceId = invoiceId;
	}

	public String getPaymentId()
	{
		return paymentId;
	}

	public void setPaymentId(String paymentId)
	{
		this.paymentId = paymentId;
	}

	public String getTransId()
	{
		return transId;
	}

	public void setTransId(String transId)
	{
		this.transId = transId;
	}

	public CInvoiceObject getcInvoice()
	{
		return cInvoice;
	}

	public void setcInvoice(CInvoiceObject cInvoice)
	{
		this.cInvoice = cInvoice;
	}

	public String getInvoiceType()
	{
		return invoiceType;
	}

	public void setInvoiceType(String invoiceType)
	{
		this.invoiceType = invoiceType;
	}

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public String getInvoiceNo()
	{
		return invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo)
	{
		this.invoiceNo = invoiceNo;
	}

	public String getAmountOrg()
	{
		return amountOrg;
	}

	public void setAmountOrg(String amountOrg)
	{
		this.amountOrg = amountOrg;
	}

	public String getAmountNoneTax()
	{
		return amountNoneTax;
	}

	public void setAmountNoneTax(String amountNoneTax)
	{
		this.amountNoneTax = amountNoneTax;
	}

	public String getAmountDiscount()
	{
		return amountDiscount;
	}

	public void setAmountDiscount(String amountDiscount)
	{
		this.amountDiscount = amountDiscount;
	}

	public String getAmountPromote()
	{
		return amountPromote;
	}

	public void setAmountPromote(String amountPromote)
	{
		this.amountPromote = amountPromote;
	}

	public String getAmountVAT()
	{
		return amountVAT;
	}

	public void setAmountVAT(String amountVAT)
	{
		this.amountVAT = amountVAT;
	}

	public String getAmountTotal()
	{
		return amountTotal;
	}

	public void setAmountTotal(String amountTotal)
	{
		this.amountTotal = amountTotal;
	}

	public String getFromDate()
	{
		return fromDate;
	}

	public void setFromDate(String fromDate)
	{
		this.fromDate = fromDate;
	}

	public String getToDate()
	{
		return toDate;
	}

	public void setToDate(String toDate)
	{
		this.toDate = toDate;
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

	public String getCustomerName()
	{
		return customerName;
	}

	public void setCustomerName(String customerName)
	{
		this.customerName = customerName;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public String getTel()
	{
		return tel;
	}

	public void setTel(String tel)
	{
		this.tel = tel;
	}

	public String getAccountNo()
	{
		return accountNo;
	}

	public void setAccountNo(String accountNo)
	{
		this.accountNo = accountNo;
	}

	public String getTaxCode()
	{
		return taxCode;
	}

	public void setTaxCode(String taxCode)
	{
		this.taxCode = taxCode;
	}

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

	public String getMdn()
	{
		return mdn;
	}

	public void setMdn(String mdn)
	{
		this.mdn = mdn;
	}

	public String getPayMenthod()
	{
		return payMenthod;
	}

	public void setPayMenthod(String payMenthod)
	{
		this.payMenthod = payMenthod;
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

	public String getShopCreateInv()
	{
		return shopCreateInv;
	}

	public void setShopCreateInv(String shopCreateInv)
	{
		this.shopCreateInv = shopCreateInv;
	}

	public String getPaymentStatus()
	{
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus)
	{
		this.paymentStatus = paymentStatus;
	}

	public String getModifyDate()
	{
		return modifyDate;
	}

	public void setModifyDate(String modifyDate)
	{
		this.modifyDate = modifyDate;
	}

	public String getInvoiceStatus()
	{
		return invoiceStatus;
	}

	public void setInvoiceStatus(String invoiceStatus)
	{
		this.invoiceStatus = invoiceStatus;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getStatusCode()
	{
		return statusCode;
	}

	public void setStatusCode(String statusCode)
	{
		this.statusCode = statusCode;
	}

	public String getChkPrintCombine()
	{
		return chkPrintCombine;
	}

	public void setChkPrintCombine(String chkPrintCombine)
	{
		this.chkPrintCombine = chkPrintCombine;
	}

}
