package vn.com.fis.model.css;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: Copyright (c) 2005</p>
 *
 * <p>Company: </p>
 *
 * @author not attributable
 * @version 1.0
 */
public class Agent implements java.io.Serializable
{
	static final long serialVersionUID = -3611946473283033478L;
	private String MPIN;
	private String tradeName;
	private String ownerName;
	private String outletAddress;
	private java.util.Date birthDate;
	private String strBirthDate;
	private String contactNo;
	private String email;
	private long agentID;
	private String secureQuestion;
	private String[] changedMPINs;
	private int status;
	private String ICCID;
	private String sapCode;
	private String MSISDN;
	private AgentAccount agentAccount;
	private java.util.Date lastModified;
	private long parentID;
	private long loginFailureCount;
	private java.util.Date MPINExpireDate;
	private java.util.Date createdDate;
	private String TIN;

	//Nghiavv added 28/11/2012
	private String province;
	private String district;
	private String id_no;
	private String reportByMail;
	private java.util.Date dateIssue;
	private String placeIssue;
	private String agentType;
	private int centreId;
	private String agentStatus;
	private String commune;
	public void setMPIN(String MPIN)
	{
		this.MPIN = MPIN;
	}

	public String getMPIN()
	{
		return MPIN;
	}

	public void setTradeName(String tradeName)
	{
		this.tradeName = tradeName;
	}

	public void setSapCode(String sapCode)
	{
		this.sapCode = sapCode.toUpperCase();
	}

	public void setOwnerName(String ownerName)
	{
		this.ownerName = ownerName;
	}

	public void setOutletAddress(String outletAddress)
	{
		this.outletAddress = outletAddress;
	}

	public void setBirthDate(java.util.Date birthDate)
	{
		this.birthDate = birthDate;
	}

	public void setBirthDate(String birthDate)
	{
		this.strBirthDate = birthDate;
	}

	public void setContactNo(String contactNo)
	{
		this.contactNo = contactNo;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public void setAgentID(long agentID)
	{
		this.agentID = agentID;
	}

	public void setSecureQuestion(String secureQuestion)
	{
		this.secureQuestion = secureQuestion;
	}

	public void setChangedMPINs(String[] changedMPINs)
	{
		this.changedMPINs = changedMPINs;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public void setAgentAccount(AgentAccount agentAccount)
	{
		this.agentAccount = agentAccount;
	}

	public void setLastModified(java.util.Date lastModified)
	{
		this.lastModified = lastModified;
	}

	public void setMSISDN(String MSISDN)
	{
		this.MSISDN = MSISDN;
	}

	public void setICCID(String ICCID)
	{
		this.ICCID = ICCID;
	}

	public void setParentID(long parentID)
	{
		this.parentID = parentID;
	}

	public void setLoginFailureCount(long loginFailureCount)
	{
		this.loginFailureCount = loginFailureCount;
	}

	public void setCreatedDate(java.util.Date createdDate)
	{
		this.createdDate = createdDate;
	}

	public void setTIN(String TIN)
	{
		this.TIN = TIN;
	}

	public void setMPINExpireDate(java.util.Date MPINExpireDate)
	{
		this.MPINExpireDate = MPINExpireDate;
	}

	//Nghiavv added 28/11/2012
	public void setProvince(String province)
	{
		this.province = province;
	}

	public void setDistrict(String district)
	{
		this.district = district;
	}

	public void setIdNo(String id_no)
	{
		this.id_no = id_no;
	}

	public void setReportByMail(String reportByMail)
	{
		this.reportByMail = reportByMail;
	}

	public void setDateIssue(java.util.Date dateIssue)
	{
		this.dateIssue = dateIssue;
	}

	public void setPlaceIssue(String placeIssue)
	{
		this.placeIssue = placeIssue;
	}

	public void setAgentType(String agentType)
	{
		this.agentType = agentType;
	}

	public void setCentreId(int centreId)
	{
		this.centreId = centreId;
	}

	public void setAgentStatus(String agentStatus)
	{
		this.agentStatus = agentStatus;
	}

	public void setCommune(String commune)
	{
		this.commune = commune;
	}

	public String getTradeName()
	{
		return tradeName;
	}

	public String getSapCode()
	{
		return sapCode;
	}

	public String getOwnerName()
	{
		return ownerName;
	}

	public String getOutletAddress()
	{
		return outletAddress;
	}

	public java.util.Date getBirthDate()
	{
		return birthDate;
	}

	public String getTextBirthDate()
	{
		return strBirthDate;
	}

	public String getContactNo()
	{
		return contactNo;
	}

	public String getEmail()
	{
		return email;
	}

	public long getAgentID()
	{
		return agentID;
	}

	public String getSecureQuestion()
	{
		return secureQuestion;
	}

	public String[] getChangedMPINs()
	{
		return changedMPINs;
	}

	public int getStatus()
	{
		return status;
	}

	public AgentAccount getAgentAccount()
	{
		return agentAccount;
	}

	public java.util.Date getLastModified()
	{
		return lastModified;
	}

	public String getMSISDN()
	{
		return MSISDN;
	}

	public String getICCID()
	{
		return ICCID;
	}

	public long getParentID()
	{
		return parentID;
	}

	public long getLoginFailureCount()
	{
		return loginFailureCount;
	}

	public java.util.Date getCreatedDate()
	{
		return createdDate;
	}

	public String getTIN()
	{
		return TIN;
	}

	public java.util.Date getMPINExpireDate()
	{
		return MPINExpireDate;
	}

	//Nghiavv added 28/11/2012
	public String getProvince()
	{
		return province;
	}

	public String getDistrict()
	{
		return district;
	}

	public String getIdNo()
	{
		return id_no;
	}

	public String getReportByMail()
	{
		return reportByMail;
	}

	public java.util.Date getDateIssue()
	{
		return dateIssue;
	}

	public String getPlaceIssue()
	{
		return placeIssue;
	}

	public String getAgentType()
	{
		return agentType;
	}

	public int getCentreId()
	{
		return centreId;
	}

	public String getAgentStatus()
	{
		return agentStatus;
	}

	public String getCommune()
	{
		return commune;
	}

}
