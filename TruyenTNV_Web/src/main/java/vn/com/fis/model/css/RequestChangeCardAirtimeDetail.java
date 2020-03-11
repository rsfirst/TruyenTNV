package vn.com.fis.model.css;

import java.util.Date;
import java.util.List;

public class RequestChangeCardAirtimeDetail implements java.io.Serializable
{
	private static final long serialVersionUID = -3521167464889512139L;
	long reqChangeRaggedcardId;
	String stk;
	String phoneNumber;
	String serial;
	String statusRequest;
	String cardStatus;
	String cardValue;
	String userLock;
	String userChange;
	String userAddCommission;
	String userDestroy;
	Date dateLock;
	Date dateChange;
	Date dateAddCommission;
	Date dateDestroy;
	Date dateReject;
	long raggedCardId;
	String rejectDesciption;
	String userReject;
	Date lastModify;
	String userCreate;
	Date dateCreated;
	String raggedCardStatus;
	String userSession;
	String stringComment;
	String ipSession;
	String checkBoxRequest;
	List<String> listNoteRecord;
	public RequestChangeCardAirtimeDetail()
	{
		super();
	}

	public RequestChangeCardAirtimeDetail(long reqChangeRaggedcardId, String stk, String phoneNumber, String serial, String statusRequest, String cardStatus,
			String cardValue, String userLock, String userChange, String userAddCommission, String userDestroy, Date dateLock, Date dateChange,
			Date dateAddCommission, Date dateDestroy, Date dateReject, long raggedCardId, String rejectDesciption, String userReject, Date lastModify,
			String userCreate, Date dateCreated, String raggedCardStatus, String userSession, String stringComment, String ipSession,String checkBoxRequest)
	{
		super();
		this.reqChangeRaggedcardId = reqChangeRaggedcardId;
		this.stk = stk;
		this.phoneNumber = phoneNumber;
		this.serial = serial;
		this.statusRequest = statusRequest;
		this.cardStatus = cardStatus;
		this.cardValue = cardValue;
		this.userLock = userLock;
		this.userChange = userChange;
		this.userAddCommission = userAddCommission;
		this.userDestroy = userDestroy;
		this.dateLock = dateLock;
		this.dateChange = dateChange;
		this.dateAddCommission = dateAddCommission;
		this.dateDestroy = dateDestroy;
		this.dateReject = dateReject;
		this.raggedCardId = raggedCardId;
		this.rejectDesciption = rejectDesciption;
		this.userReject = userReject;
		this.lastModify = lastModify;
		this.userCreate = userCreate;
		this.dateCreated = dateCreated;
		this.raggedCardStatus = raggedCardStatus;
		this.userSession = userSession;
		this.stringComment = stringComment;
		this.ipSession = ipSession;
		this.checkBoxRequest = checkBoxRequest;
	}

	public long getReqChangeRaggedcardId()
	{
		return reqChangeRaggedcardId;
	}

	public void setReqChangeRaggedcardId(long reqChangeRaggedcardId)
	{
		this.reqChangeRaggedcardId = reqChangeRaggedcardId;
	}

	public String getStk()
	{
		return stk;
	}

	public void setStk(String stk)
	{
		this.stk = stk;
	}

	public String getPhoneNumber()
	{
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}

	public String getSerial()
	{
		return serial;
	}

	public void setSerial(String serial)
	{
		this.serial = serial;
	}

	public String getStatusRequest()
	{
		return statusRequest;
	}

	public void setStatusRequest(String statusRequest)
	{
		this.statusRequest = statusRequest;
	}

	public String getCardStatus()
	{
		return cardStatus;
	}

	public void setCardStatus(String cardStatus)
	{
		this.cardStatus = cardStatus;
	}

	public String getCardValue()
	{
		return cardValue;
	}

	public void setCardValue(String cardValue)
	{
		this.cardValue = cardValue;
	}

	public String getUserLock()
	{
		return userLock;
	}

	public void setUserLock(String userLock)
	{
		this.userLock = userLock;
	}

	public String getUserChange()
	{
		return userChange;
	}

	public void setUserChange(String userChange)
	{
		this.userChange = userChange;
	}

	public String getUserAddCommission()
	{
		return userAddCommission;
	}

	public void setUserAddCommission(String userAddCommission)
	{
		this.userAddCommission = userAddCommission;
	}

	public String getUserDestroy()
	{
		return userDestroy;
	}

	public void setUserDestroy(String userDestroy)
	{
		this.userDestroy = userDestroy;
	}

	public Date getDateLock()
	{
		return dateLock;
	}

	public void setDateLock(Date dateLock)
	{
		this.dateLock = dateLock;
	}

	public Date getDateChange()
	{
		return dateChange;
	}

	public void setDateChange(Date dateChange)
	{
		this.dateChange = dateChange;
	}

	public Date getDateAddCommission()
	{
		return dateAddCommission;
	}

	public void setDateAddCommission(Date dateAddCommission)
	{
		this.dateAddCommission = dateAddCommission;
	}

	public Date getDateDestroy()
	{
		return dateDestroy;
	}

	public void setDateDestroy(Date dateDestroy)
	{
		this.dateDestroy = dateDestroy;
	}

	public Date getDateReject()
	{
		return dateReject;
	}

	public void setDateReject(Date dateReject)
	{
		this.dateReject = dateReject;
	}

	public long getRaggedCardId()
	{
		return raggedCardId;
	}

	public void setRaggedCardId(long raggedCardId)
	{
		this.raggedCardId = raggedCardId;
	}

	public String getRejectDesciption()
	{
		return rejectDesciption;
	}

	public void setRejectDesciption(String rejectDesciption)
	{
		this.rejectDesciption = rejectDesciption;
	}

	public String getUserReject()
	{
		return userReject;
	}

	public void setUserReject(String userReject)
	{
		this.userReject = userReject;
	}

	public Date getLastModify()
	{
		return lastModify;
	}

	public void setLastModify(Date lastModify)
	{
		this.lastModify = lastModify;
	}

	public String getUserCreate()
	{
		return userCreate;
	}

	public void setUserCreate(String userCreate)
	{
		this.userCreate = userCreate;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public String getRaggedCardStatus()
	{
		return raggedCardStatus;
	}

	public void setRaggedCardStatus(String raggedCardStatus)
	{
		this.raggedCardStatus = raggedCardStatus;
	}
	public List<String> getListNoteRecord()
	{
		return listNoteRecord;
	}
	public void setListNoteRecord(List<String> listNoteRecord)
	{
		this.listNoteRecord = listNoteRecord;
	}	

	public String getUserSession()
	{
		return userSession;
	}

	public void setUserSession(String userSession)
	{
		this.userSession = userSession;
	}

	public String getStringComment()
	{
		return stringComment;
	}

	public void setStringComment(String stringComment)
	{
		this.stringComment = stringComment;
	}

	public String getIpSession()
	{
		return ipSession;
	}

	public void setIpSession(String ipSession)
	{
		this.ipSession = ipSession;
	}

	public String getCheckBoxRequest()
	{
		return checkBoxRequest;
	}

	public void setCheckBoxRequest(String checkBoxRequest)
	{
		this.checkBoxRequest = checkBoxRequest;
	}

}
