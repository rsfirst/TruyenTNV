package vn.com.fis.model.cinvoice;

import vn.com.fis.tibco.model.entity.DynamicalEntity;
import vn.com.fis.tibco.model.entity.Invoice;
import vn.com.fis.tibco.model.entity.NotFoundCodeException;

import java.util.Date;
import java.util.List;
import java.util.Vector;

public class Account extends DynamicalEntity
{
	public static final String NAME = "ACCOUNT";
	public static final String ACCOUNT_TYPE_DEPOSIT = "20000";
	private static final int POS_INVOICES = 0;
	private static final int POS_IS_FILLED_INVOICES = 1;
	private static final int POS_CUSTOMER = 2;
	private String customerRefNumber;
	
	private static final int POS_INVOICES_ENTITY = 3;

	public Account()
	{
		super();
	}

	public Account(Vector vt)
	{
		super(vt);
	}

	public String getName()
	{
		return NAME;
	}

	public void setInvoice(List<Invoice> invoices){
		if (invoices == null)
			throw new NullPointerException("Can't set null invoices for Account");
		setExtendData(POS_INVOICES, invoices);
		setFilledInvoice(true);
	}

	public List<Invoice> getInvoices(){
		return getExtendData(POS_INVOICES) == null ? null : (List)getExtendData(POS_INVOICES);
	}

	public Customer getCustomer(){
		return getExtendData(POS_CUSTOMER) == null ? null : (Customer)getExtendData(POS_CUSTOMER);
	}

	public void setCustomer(Customer cust){
		if (cust == null)
			throw new NullPointerException("Can't set null customer for Account");
		setExtendData(POS_CUSTOMER, cust);
	}

	public void setFilledInvoice(boolean value)
	{
		setExtendData(POS_IS_FILLED_INVOICES,value);
	}

	public boolean isFilledInvoice()
	{
		if (getExtendData(POS_IS_FILLED_INVOICES) == null)
			return false;
		return(Boolean)getExtendData(POS_IS_FILLED_INVOICES);
	}

	public Long getAccountId() throws NotFoundCodeException
	{
		return getProperty("ACCOUNT_ID") != null ? (Long)getProperty("ACCOUNT_ID") : null;
	}

	public void setAccountId(Long value) throws NotFoundCodeException
	{
		setProperty("ACCOUNT_ID",value);
	}

	public String getAccountName() throws NotFoundCodeException
	{
		return getProperty("ACCOUNT_NAME") != null ? (String)getProperty("ACCOUNT_NAME") : null;
	}

	public void setAccountName(String value) throws NotFoundCodeException
	{
		setProperty("ACCOUNT_NAME",value);
	}

	public Double getCreditLimit() throws NotFoundCodeException
	{
		return getProperty("CREDIT_LIMIT") != null ? (Double)getProperty("CREDIT_LIMIT") : null;
	}

	public void setCreditLimit(Double value) throws NotFoundCodeException
	{
		setProperty("CREDIT_LIMIT",value);
	}

	public Date getLastModified() throws NotFoundCodeException
	{
		return getProperty("LAST_MODIFIED") != null ? (Date)getProperty("LAST_MODIFIED") : null;
	}

	public void setLastModified(Date value) throws NotFoundCodeException
	{
		setProperty("LAST_MODIFIED",value);
	}

	public Double getAccountBalance() throws NotFoundCodeException
	{
		return getProperty("ACCOUNT_BALANCE") != null ? (Double)getProperty("ACCOUNT_BALANCE") : null;
	}

	public void setAccountBalance(Double value) throws NotFoundCodeException
	{
		setProperty("ACCOUNT_BALANCE",value);
	}

	public Long getAccountTypeId() throws NotFoundCodeException
	{
		return getProperty("ACCOUNT_TYPE_ID") != null ? (Long)getProperty("ACCOUNT_TYPE_ID") : null;
	}

	public void setAccountTypeId(Long value) throws NotFoundCodeException
	{
		setProperty("ACCOUNT_TYPE_ID",value);
	}

	public Long getCustomerNodeId() throws NotFoundCodeException
	{
		return getProperty("CUSTOMER_NODE_ID") != null ? (Long)getProperty("CUSTOMER_NODE_ID") : null;
	}

	public void setCustomerNodeId(Long value) throws NotFoundCodeException
	{
		setProperty("CUSTOMER_NODE_ID",value);
	}

	public Long getInvoiceAccountId() throws NotFoundCodeException
	{
		return getProperty("INVOICE_ACCOUNT_ID") != null ? (Long)getProperty("INVOICE_ACCOUNT_ID") : null;
	}

	public void setInvoiceAccountId(Long value) throws NotFoundCodeException
	{
		setProperty("INVOICE_ACCOUNT_ID",value);
	}

	public Long getAccountCurrencyId() throws NotFoundCodeException
	{
		return getProperty("ACCOUNT_CURRENCY_ID") != null ? (Long)getProperty("ACCOUNT_CURRENCY_ID") : null;
	}

	public void setAccountCurrencyId(Long value) throws NotFoundCodeException
	{
		setProperty("ACCOUNT_CURRENCY_ID",value);
	}

	public String getIdCode() throws NotFoundCodeException {
//		return "ACCOUNT_ID";
		return "ACCOUNT_NO"; //Final Victory modify for insert & search log
	}

	public String getAccountNo() throws NotFoundCodeException {
		return getProperty("ACCOUNT_NO") != null ? (String) getProperty("ACCOUNT_NO"):null;
	}

	public String getCustomerRefNumber()
	{
		return customerRefNumber;
	}

	public void setCustomerRefNumber(String customerRefNumber)
	{
		this.customerRefNumber = customerRefNumber;
	}
	
	public void setInvoiceEntity(List<InvoiceEntity> invoices){
		if (invoices == null)
			throw new NullPointerException("Can't set null invoices for Account");
		setExtendData(POS_INVOICES_ENTITY, invoices);
	}

	public List<InvoiceEntity> getInvoiceEntitys(){
		return getExtendData(POS_INVOICES_ENTITY) == null ? null : (List)getExtendData(POS_INVOICES_ENTITY);
	}

}
