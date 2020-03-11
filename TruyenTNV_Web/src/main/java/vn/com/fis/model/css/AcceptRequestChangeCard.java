package vn.com.fis.model.css;

import java.util.Date;

public class AcceptRequestChangeCard
{

	@Override
	public String toString()
	{
		return "ProductOrder [req_change_raggedcard_id=" + reqChangeRaggedCardId + ", stk=" + stkNumber + ", phone_number=" + phoneNumber + ", status=" + status
				+ ", imgs_name=" + imgsName + ", user_create=" + userCreate + ", stock_created=" + stockCreated + ", date_created=" + dateCreated
				+ ", user_reject=" + userReject + ", date_reject=" + dateReject + ", description_reject=" + descriptionReject + ", total_airtime_change="
				+ totalAirtimeChange + ", total_airtime_addcomm=" + totalAirtimeAddcomm + ", last_modify=" + lastModify + ", type=" + type + "]";
	}

	long reqChangeRaggedCardId;

	String stkNumber;

	String phoneNumber;
	String status;
	String imgsName;

	String userCreate;
	String stockCreated;
	Date dateCreated;
	String userReject;

	Date dateReject;
	String descriptionReject;
	String totalAirtimeChange;
	String totalAirtimeAddcomm;
	String lastModify;
	String type;

	public AcceptRequestChangeCard()
	{

	}

	/*
	 * public AcceptRequestChangeCard(String stkNumber, String phoneNumber, String status, String imgsName, String userCreate, String stockCreated, Date
	 * dateCreated, String userReject, Date dateReject, String descriptionReject, String totalAirtimeChange, String totalAirtimeAddcomm, String lastModify,
	 * String type) { super(); this.stkNumber = stkNumber; this.phoneNumber = phoneNumber; this.status = status; this.imgsName = imgsName; this.userCreate =
	 * userCreate; this.stockCreated = stockCreated; this.dateCreated = dateCreated; this.userReject = userReject; this.dateReject = dateReject;
	 * this.descriptionReject = descriptionReject; this.totalAirtimeChange = totalAirtimeChange; this.totalAirtimeAddcomm = totalAirtimeAddcomm; this.lastModify
	 * = lastModify; this.type = type; }
	 */

	public AcceptRequestChangeCard(long reqChangeRaggedCardId, String stkNumber, String phoneNumber, String status, String imgsName, String userCreate,
			String stockCreated, Date dateCreated, String userReject, Date dateReject, String descriptionReject, String totalAirtimeChange,
			String totalAirtimeAddcomm, String lastModify, String type)
	{
		super();
		this.reqChangeRaggedCardId = reqChangeRaggedCardId;
		this.stkNumber = stkNumber;
		this.phoneNumber = phoneNumber;
		this.status = status;
		this.imgsName = imgsName;
		this.userCreate = userCreate;
		this.stockCreated = stockCreated;
		this.dateCreated = dateCreated;
		this.userReject = userReject;
		this.dateReject = dateReject;
		this.descriptionReject = descriptionReject;
		this.totalAirtimeChange = totalAirtimeChange;
		this.totalAirtimeAddcomm = totalAirtimeAddcomm;
		this.lastModify = lastModify;
		this.type = type;
	}

	public long getReqChangeRaggedCardId()
	{
		return reqChangeRaggedCardId;
	}

	public void setReqChangeRaggedCardId(long reqChangeRaggedCardId)
	{
		this.reqChangeRaggedCardId = reqChangeRaggedCardId;
	}

	public String getStkNumber()
	{
		return stkNumber;
	}

	public void setStkNumber(String stkNumber)
	{
		this.stkNumber = stkNumber;
	}

	public String getPhoneNumber()
	{
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getImgsName()
	{
		return imgsName;
	}

	public void setImgsName(String imgsName)
	{
		this.imgsName = imgsName;
	}

	public String getUserCreate()
	{
		return userCreate;
	}

	public void setUserCreate(String userCreate)
	{
		this.userCreate = userCreate;
	}

	public String getStockCreated()
	{
		return stockCreated;
	}

	public void setStockCreated(String stockCreated)
	{
		this.stockCreated = stockCreated;
	}

	public Date getDateCreated()
	{
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	public String getUserReject()
	{
		return userReject;
	}

	public void setUserReject(String userReject)
	{
		this.userReject = userReject;
	}

	public Date getDateReject()
	{
		return dateReject;
	}

	public void setDateReject(Date dateReject)
	{
		this.dateReject = dateReject;
	}

	public String getDescriptionReject()
	{
		return descriptionReject;
	}

	public void setDescriptionReject(String descriptionReject)
	{
		this.descriptionReject = descriptionReject;
	}

	public String getTotalAirtimeChange()
	{
		return totalAirtimeChange;
	}

	public void setTotalAirtimeChange(String totalAirtimeChange)
	{
		this.totalAirtimeChange = totalAirtimeChange;
	}

	public String getTotalAirtimeAddcomm()
	{
		return totalAirtimeAddcomm;
	}

	public void setTotalAirtimeAddcomm(String totalAirtimeAddcomm)
	{
		this.totalAirtimeAddcomm = totalAirtimeAddcomm;
	}

	public String getLastModify()
	{
		return lastModify;
	}

	public void setLastModify(String lastModify)
	{
		this.lastModify = lastModify;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

}
