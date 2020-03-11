package vn.com.fis.model.epos;

import java.util.List;

public class InputEstablishEntity
{
	private String create_datetime;
	private String username;
	private String cus_type;
	private String status;
	private String ffalse;
	private String shop_code;
	private String staff_code;
	private String pay_method;
	private String amount;
	private String tax;
	private String amount_tax;
	private String promotion;
	private String discount;
	private String org_total;
	private String destroyer;
	private String destroy_date;
	private String invoice_id;
	private String trans_id;
	private String cust_name;
	private String cust_address;
	private String tax_code;
	private String bill_account;
	private String company;
	private String action_code;
	private String grand_total;
	private String invoice_no;
	private String invoice_no_new;
	List<InputEstablishservice> inputEstablishservice;
	List<InputEstablishGoodsEntity> inputEstablishGoodsEntity;
	private int checkBox;

	public String getInvoice_no_new()
	{
		return invoice_no_new;
	}

	public void setInvoice_no_new(String invoice_no_new)
	{
		this.invoice_no_new = invoice_no_new;
	}

	public List<InputEstablishservice> getInputEstablishservice()
	{
		return inputEstablishservice;
	}

	public void setInputEstablishservice(List<InputEstablishservice> inputEstablishservice)
	{
		this.inputEstablishservice = inputEstablishservice;
	}

	public List<InputEstablishGoodsEntity> getInputEstablishGoodsEntity()
	{
		return inputEstablishGoodsEntity;
	}

	public void setInputEstablishGoodsEntity(List<InputEstablishGoodsEntity> inputEstablishGoodsEntity)
	{
		this.inputEstablishGoodsEntity = inputEstablishGoodsEntity;
	}

	public int getCheckBox()
	{
		return checkBox;
	}

	public void setCheckBox(int checkBox)
	{
		this.checkBox = checkBox;
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

	public String getCus_type()
	{
		return cus_type;
	}

	public void setCus_type(String cus_type)
	{
		this.cus_type = cus_type;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getFfalse()
	{
		return ffalse;
	}

	public void setFfalse(String ffalse)
	{
		this.ffalse = ffalse;
	}

	public String getShop_code()
	{
		return shop_code;
	}

	public void setShop_code(String shop_code)
	{
		this.shop_code = shop_code;
	}

	public String getStaff_code()
	{
		return staff_code;
	}

	public void setStaff_code(String staff_code)
	{
		this.staff_code = staff_code;
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

	public String getPromotion()
	{
		return promotion;
	}

	public void setPromotion(String promotion)
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

	public String getOrg_total()
	{
		return org_total;
	}

	public void setOrg_total(String org_total)
	{
		this.org_total = org_total;
	}

	public String getDestroyer()
	{
		return destroyer;
	}

	public void setDestroyer(String destroyer)
	{
		this.destroyer = destroyer;
	}

	public String getDestroy_date()
	{
		return destroy_date;
	}

	public void setDestroy_date(String destroy_date)
	{
		this.destroy_date = destroy_date;
	}

	public String getInvoice_id()
	{
		return invoice_id;
	}

	public void setInvoice_id(String invoice_id)
	{
		this.invoice_id = invoice_id;
	}

	public String getTrans_id()
	{
		return trans_id;
	}

	public void setTrans_id(String trans_id)
	{
		this.trans_id = trans_id;
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

	public String getAction_code()
	{
		return action_code;
	}

	public void setAction_code(String action_code)
	{
		this.action_code = action_code;
	}

	public String getGrand_total()
	{
		return grand_total;
	}

	public void setGrand_total(String grand_total)
	{
		this.grand_total = grand_total;
	}

	public String getInvoice_no()
	{
		return invoice_no;
	}

	public void setInvoice_no(String invoice_no)
	{
		this.invoice_no = invoice_no;
	}

}
