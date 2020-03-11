package vn.com.fis.model.css;

import java.util.Date;

public  class ChangeCardPhysicalDetail implements java.io.Serializable
{
	private static final long serialVersionUID = -3521167464889512139L;
	private String requestId;
	private String cardId;
	private String stk;
	private String cardStatus;
	private String serialOld;
	private String valueOld;
	private String statusOld;
	private String serialNew;
	private String valueNew;
	private String statusNew;
	private String statusRequest;
	private String userChange;
	private Date dateChange;
	private String note;

	public ChangeCardPhysicalDetail()
	{
		super();
	}

	public String getRequestId()
	{
		return requestId;
	}

	public void setRequestId(String requestId)
	{
		this.requestId = requestId;
	}

	public String getStk()
	{
		return stk;
	}

	public void setStk(String stk)
	{
		this.stk = stk;
	}

	public String getCardStatus()
	{
		return cardStatus;
	}

	public void setCardStatus(String cardStatus)
	{
		this.cardStatus = cardStatus;
	}

	public String getSerialOld()
	{
		return serialOld;
	}

	public void setSerialOld(String serialOld)
	{
		this.serialOld = serialOld;
	}

	public String getValueOld()
	{
		return valueOld;
	}

	public void setValueOld(String valueOld)
	{
		this.valueOld = valueOld;
	}

	public String getStatusOld()
	{
		return statusOld;
	}

	public void setStatusOld(String statusOld)
	{
		this.statusOld = statusOld;
	}

	public String getSerialNew()
	{
		return serialNew;
	}

	public void setSerialNew(String serialNew)
	{
		this.serialNew = serialNew;
	}

	public String getValueNew()
	{
		return valueNew;
	}

	public void setValueNew(String valueNew)
	{
		this.valueNew = valueNew;
	}

	public String getStatusNew()
	{
		return statusNew;
	}

	public void setStatusNew(String statusNew)
	{
		this.statusNew = statusNew;
	}

	public String getStatusRequest()
	{
		return statusRequest;
	}

	public void setStatusRequest(String statusRequest)
	{
		this.statusRequest = statusRequest;
	}

	public String getUserChange()
	{
		return userChange;
	}

	public void setUserChange(String userChange)
	{
		this.userChange = userChange;
	}

	public Date getDateChange()
	{
		return dateChange;
	}

	public void setDateChange(Date dateChange)
	{
		this.dateChange = dateChange;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public String getCardId()
	{
		return cardId;
	}

	public void setCardId(String cardId)
	{
		this.cardId = cardId;
	}

	public ChangeCardPhysicalDetail(String requestId, String cardId, String stk, String cardStatus, String serialOld, String valueOld, String statusOld,
			String serialNew, String valueNew, String statusNew, String statusRequest, String userChange, Date dateChange, String note)
	{
		super();
		this.requestId = requestId;
		this.cardId = cardId;
		this.stk = stk;
		this.cardStatus = cardStatus;
		this.serialOld = serialOld;
		this.valueOld = valueOld;
		this.statusOld = statusOld;
		this.serialNew = serialNew;
		this.valueNew = valueNew;
		this.statusNew = statusNew;
		this.statusRequest = statusRequest;
		this.userChange = userChange;
		this.dateChange = dateChange;
		this.note = note;
	}


}
