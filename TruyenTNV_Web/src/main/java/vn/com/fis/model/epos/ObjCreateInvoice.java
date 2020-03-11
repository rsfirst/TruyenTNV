package vn.com.fis.model.epos;

import java.util.List;

public class ObjCreateInvoice
{
	private String strDeliverer;
	private String strDelivererStaffId;
	private String strNote;
	private String strReceiptNo;
	private String strShopId;
	private String strStaffId;
	private String strReasonId;
	private String strAccountCode;
	private String strAmount;
	private String strOrgAmout;
	private String strStatus;
	private String strCreateDatetime;
	private String strUserName;
	private String strType;
	private String strPaymentMethod;
	private String strInvoiceType;
	private String strPC;

	/**
	 * @return the strPC
	 */
	public String getStrPC()
	{
		return strPC;
	}

	/**
	 * @param strPC the strPC to set
	 */
	public void setStrPC(String strPC)
	{
		this.strPC = strPC;
	}

	private List<InputEstablishEntity> listReceipt;

	public String getStrDeliverer()
	{
		return strDeliverer;
	}

	public void setStrDeliverer(String strDeliverer)
	{
		this.strDeliverer = strDeliverer;
	}

	public String getStrDelivererStaffId()
	{
		return strDelivererStaffId;
	}

	public void setStrDelivererStaffId(String strDelivererStaffId)
	{
		this.strDelivererStaffId = strDelivererStaffId;
	}

	public String getStrNote()
	{
		return strNote;
	}

	public void setStrNote(String strNote)
	{
		this.strNote = strNote;
	}

	public String getStrReceiptNo()
	{
		return strReceiptNo;
	}

	public void setStrReceiptNo(String strReceiptNo)
	{
		this.strReceiptNo = strReceiptNo;
	}

	public String getStrShopId()
	{
		return strShopId;
	}

	public void setStrShopId(String strShopId)
	{
		this.strShopId = strShopId;
	}

	public String getStrStaffId()
	{
		return strStaffId;
	}

	public void setStrStaffId(String strStaffId)
	{
		this.strStaffId = strStaffId;
	}

	public String getStrReasonId()
	{
		return strReasonId;
	}

	public void setStrReasonId(String strReasonId)
	{
		this.strReasonId = strReasonId;
	}

	public String getStrAccountCode()
	{
		return strAccountCode;
	}

	public void setStrAccountCode(String strAccountCode)
	{
		this.strAccountCode = strAccountCode;
	}

	public String getStrAmount()
	{
		return strAmount;
	}

	public void setStrAmount(String strAmount)
	{
		this.strAmount = strAmount;
	}

	public String getStrOrgAmout()
	{
		return strOrgAmout;
	}

	public void setStrOrgAmout(String strOrgAmout)
	{
		this.strOrgAmout = strOrgAmout;
	}

	public String getStrStatus()
	{
		return strStatus;
	}

	public void setStrStatus(String strStatus)
	{
		this.strStatus = strStatus;
	}

	public String getStrCreateDatetime()
	{
		return strCreateDatetime;
	}

	public void setStrCreateDatetime(String strCreateDatetime)
	{
		this.strCreateDatetime = strCreateDatetime;
	}

	public String getStrUserName()
	{
		return strUserName;
	}

	public void setStrUserName(String strUserName)
	{
		this.strUserName = strUserName;
	}

	public List<InputEstablishEntity> getListReceipt()
	{
		return listReceipt;
	}

	public void setListReceipt(List<InputEstablishEntity> listReceipt)
	{
		this.listReceipt = listReceipt;
	}

	public String getStrType()
	{
		return strType;
	}

	public void setStrType(String strType)
	{
		this.strType = strType;
	}

	public String getStrPaymentMethod()
	{
		return strPaymentMethod;
	}

	public void setStrPaymentMethod(String strPaymentMethod)
	{
		this.strPaymentMethod = strPaymentMethod;
	}

	public String getStrInvoiceType()
	{
		return strInvoiceType;
	}

	public void setStrInvoiceType(String strInvoiceType)
	{
		this.strInvoiceType = strInvoiceType;
	}

}
