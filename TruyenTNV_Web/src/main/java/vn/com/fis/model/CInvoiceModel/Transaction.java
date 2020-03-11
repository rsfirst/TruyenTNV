package vn.com.fis.model.CInvoiceModel;

public class Transaction
{
	private String trans_id;
	private String invoice_id;
	private String shop_id;
	private String staff_id;
	private String pay_method;
	private String amount;
	private String tax;
	private String amount_tax;
	private String org_total;
	private String discount;
	private String status;
	private String create_datetime;
	private String username;
	private String approver;
	private String approve_date;
	private String cus_type;
	private String promotion;
	private String grand_total;
	private String destroy_date;
	private String destroyer;
	private String consign_id;
	private String credit_no;
	private String stock_trans_id;
	private String tax_rate;
	private String cust_id;
	private String cust_name;
	private String cust_address;
	private String tax_code;
	private String bill_account;
	private String company;
	private String etrans_id;
	private String fromDate;
	private String toDate;
	private String shopCode;
	private String staffCode;
	private String actionCode;

	public Transaction() {
		
	}
	
	public Transaction(String trans_id, String invoice_id, String shop_id, String staff_id, String pay_method, String amount, String tax, String amount_tax,
			String org_total, String discount, String status, String create_datetime, String username, String approver, String approve_date, String cus_type,
			String promotion, String grand_total, String destroy_date, String destroyer, String consign_id, String credit_no, String stock_trans_id,
			String tax_rate, String cust_id, String cust_name, String cust_address, String tax_code, String bill_account, String company, String etrans_id,
			String fromDate, String toDate, String shopCode, String staffCode, String actionCode)
	{
		this.trans_id = trans_id;
		this.invoice_id = invoice_id;
		this.shop_id = shop_id;
		this.staff_id = staff_id;
		this.pay_method = pay_method;
		this.amount = amount;
		this.tax = tax;
		this.amount_tax = amount_tax;
		this.org_total = org_total;
		this.discount = discount;
		this.status = status;
		this.create_datetime = create_datetime;
		this.username = username;
		this.approver = approver;
		this.approve_date = approve_date;
		this.cus_type = cus_type;
		this.promotion = promotion;
		this.grand_total = grand_total;
		this.destroy_date = destroy_date;
		this.destroyer = destroyer;
		this.consign_id = consign_id;
		this.credit_no = credit_no;
		this.stock_trans_id = stock_trans_id;
		this.tax_rate = tax_rate;
		this.cust_id = cust_id;
		this.cust_name = cust_name;
		this.cust_address = cust_address;
		this.tax_code = tax_code;
		this.bill_account = bill_account;
		this.company = company;
		this.etrans_id = etrans_id;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.shopCode = shopCode;
		this.staffCode = staffCode;
		this.actionCode = actionCode;

	}

	public String getTrans_id()
	{
		return trans_id;
	}

	public void setTrans_id(String trans_id)
	{
		this.trans_id = trans_id;
	}

	public String getInvoice_id()
	{
		return invoice_id;
	}

	public void setInvoice_id(String invoice_id)
	{
		this.invoice_id = invoice_id;
	}

	public String getShop_id()
	{
		return shop_id;
	}

	public void setShop_id(String shop_id)
	{
		this.shop_id = shop_id;
	}

	public String getStaff_id()
	{
		return staff_id;
	}

	public void setStaff_id(String staff_id)
	{
		this.staff_id = staff_id;
	}

	public String getPay_method()
	{
		return pay_method;
	}

	public void setPay_method(String pay_method)
	{
		this.pay_method = pay_method;
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

	public String getAmount_tax()
	{
		return amount_tax;
	}

	public void setAmount_tax(String amount_tax)
	{
		this.amount_tax = amount_tax;
	}

	public String getOrg_total()
	{
		return org_total;
	}

	public void setOrg_total(String org_total)
	{
		this.org_total = org_total;
	}

	public String getDiscount()
	{
		return discount;
	}

	public void setDiscount(String discount)
	{
		this.discount = discount;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getCreate_datetime()
	{
		return create_datetime;
	}

	public void setCreate_datetime(String create_datetime)
	{
		this.create_datetime = create_datetime;
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getApprover()
	{
		return approver;
	}

	public void setApprover(String approver)
	{
		this.approver = approver;
	}

	public String getApprove_date()
	{
		return approve_date;
	}

	public void setApprove_date(String approve_date)
	{
		this.approve_date = approve_date;
	}

	public String getCus_type()
	{
		return cus_type;
	}

	public void setCus_type(String cus_type)
	{
		this.cus_type = cus_type;
	}

	public String getPromotion()
	{
		return promotion;
	}

	public void setPromotion(String promotion)
	{
		this.promotion = promotion;
	}

	public String getGrand_total()
	{
		return grand_total;
	}

	public void setGrand_total(String grand_total)
	{
		this.grand_total = grand_total;
	}

	public String getDestroy_date()
	{
		return destroy_date;
	}

	public void setDestroy_date(String destroy_date)
	{
		this.destroy_date = destroy_date;
	}

	public String getDestroyer()
	{
		return destroyer;
	}

	public void setDestroyer(String destroyer)
	{
		this.destroyer = destroyer;
	}

	public String getConsign_id()
	{
		return consign_id;
	}

	public void setConsign_id(String consign_id)
	{
		this.consign_id = consign_id;
	}

	public String getCredit_no()
	{
		return credit_no;
	}

	public void setCredit_no(String credit_no)
	{
		this.credit_no = credit_no;
	}

	public String getStock_trans_id()
	{
		return stock_trans_id;
	}

	public void setStock_trans_id(String stock_trans_id)
	{
		this.stock_trans_id = stock_trans_id;
	}

	public String getTax_rate()
	{
		return tax_rate;
	}

	public void setTax_rate(String tax_rate)
	{
		this.tax_rate = tax_rate;
	}

	public String getCust_id()
	{
		return cust_id;
	}

	public void setCust_id(String cust_id)
	{
		this.cust_id = cust_id;
	}

	public String getCust_name()
	{
		return cust_name;
	}

	public void setCust_name(String cust_name)
	{
		this.cust_name = cust_name;
	}

	public String getCust_address()
	{
		return cust_address;
	}

	public void setCust_address(String cust_address)
	{
		this.cust_address = cust_address;
	}

	public String getTax_code()
	{
		return tax_code;
	}

	public void setTax_code(String tax_code)
	{
		this.tax_code = tax_code;
	}

	public String getBill_account()
	{
		return bill_account;
	}

	public void setBill_account(String bill_account)
	{
		this.bill_account = bill_account;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(String company)
	{
		this.company = company;
	}

	public String getEtrans_id()
	{
		return etrans_id;
	}

	public void setEtrans_id(String etrans_id)
	{
		this.etrans_id = etrans_id;
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

	public String getActionCode()
	{
		return actionCode;
	}

	public void setActionCode(String actionCode)
	{
		this.actionCode = actionCode;
	}

}
