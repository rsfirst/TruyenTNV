package vn.com.fis.model.epos;

import java.util.List;

public class InvoiceHistoryOutput
{
	 private String invoiceNo; 
	 private String name; 
	 private String company; 
	 private String address; 
	 private String tin; 
	 private String status; 
	 private String grandTotal;
	 private String createDate; 
	 private String invoiceId;
	 private List<InvoiceHistoryDetailsObj> listInvoiceDetails;
	 
	 
	/**
	 * @return the listInvoiceDetails
	 */
	public List<InvoiceHistoryDetailsObj> getListInvoiceDetails()
	{
		return listInvoiceDetails;
	}
	/**
	 * @param listInvoiceDetails the listInvoiceDetails to set
	 */
	public void setListInvoiceDetails(List<InvoiceHistoryDetailsObj> listInvoiceDetails)
	{
		this.listInvoiceDetails = listInvoiceDetails;
	}
	/**
	 * @return the invoiceNo
	 */
	public String getInvoiceNo()
	{
		return invoiceNo;
	}
	/**
	 * @param invoiceNo the invoiceNo to set
	 */
	public void setInvoiceNo(String invoiceNo)
	{
		this.invoiceNo = invoiceNo;
	}
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
	 * @return the address
	 */
	public String getAddress()
	{
		return address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address)
	{
		this.address = address;
	}
	/**
	 * @return the tin
	 */
	public String getTin()
	{
		return tin;
	}
	/**
	 * @param tin the tin to set
	 */
	public void setTin(String tin)
	{
		this.tin = tin;
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
	 * @return the grandTotal
	 */
	public String getGrandTotal()
	{
		return grandTotal;
	}
	/**
	 * @param grandTotal the grandTotal to set
	 */
	public void setGrandTotal(String grandTotal)
	{
		this.grandTotal = grandTotal;
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
	 
	 
}
