package vn.com.fis.entity.css;

import java.util.List;

public class AgentEntity {

	private String agentId;
	private String msisdn;
	private String iccid;
	private String tradeName;
	private String ownerName;
	private String birthDate;
	private String contactNo;
	private String outletAddress;
	private String email;
	private String secureQuestion;
	private String mpin;
	private String sapCode;
	private String createDate;
	private String lastModified;
	private String loginFailureCount;
	private String mpinExpireDate;
	private String parentId;
	private String status;
	private String tin;
	private String centreId;
	private String idNo;
	private String mpinStatus;
	private String reason;
	private String receiveReportByMail;
	private String agentParent;
	private String vendorType;
	private String district;
	private String province;
	private String type;
	private String agentStatus;
	private String dateIssue;
	private String placeIssue;
	private String territoryStatus;
	private String activeDate;
	private String transStatus;
	private String qrCode;
	private String groupCommType;
	private String groupCommDate;
	private String commune;
	private String usercatcode;

	private AgentEntity parentAgent;
	private List<AgentEntity> listChildAgent;

	private String regionId;

	public String getAgentId() {
		return agentId;
	}

	public void setAgentId(String agentId) {
		this.agentId = agentId;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getIccid() {
		return iccid;
	}

	public void setIccid(String iccid) {
		this.iccid = iccid;
	}

	public String getTradeName() {
		return tradeName;
	}

	public void setTradeName(String tradeName) {
		this.tradeName = tradeName;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getOutletAddress() {
		return outletAddress;
	}

	public void setOutletAddress(String outletAddress) {
		this.outletAddress = outletAddress;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSecureQuestion() {
		return secureQuestion;
	}

	public void setSecureQuestion(String secureQuestion) {
		this.secureQuestion = secureQuestion;
	}

	public String getMpin() {
		return mpin;
	}

	public void setMpin(String mpin) {
		this.mpin = mpin;
	}

	public String getSapCode() {
		return sapCode;
	}

	public void setSapCode(String sapCode) {
		this.sapCode = sapCode;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getLastModified() {
		return lastModified;
	}

	public void setLastModified(String lastModified) {
		this.lastModified = lastModified;
	}

	public String getLoginFailureCount() {
		return loginFailureCount;
	}

	public void setLoginFailureCount(String loginFailureCount) {
		this.loginFailureCount = loginFailureCount;
	}

	public String getMpinExpireDate() {
		return mpinExpireDate;
	}

	public void setMpinExpireDate(String mpinExpireDate) {
		this.mpinExpireDate = mpinExpireDate;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTin() {
		return tin;
	}

	public void setTin(String tin) {
		this.tin = tin;
	}

	public String getCentreId() {
		return centreId;
	}

	public void setCentreId(String centreId) {
		this.centreId = centreId;
	}

	public String getIdNo() {
		return idNo;
	}

	public void setIdNo(String idNo) {
		this.idNo = idNo;
	}

	public String getMpinStatus() {
		return mpinStatus;
	}

	public void setMpinStatus(String mpinStatus) {
		this.mpinStatus = mpinStatus;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getReceiveReportByMail() {
		return receiveReportByMail;
	}

	public void setReceiveReportByMail(String receiveReportByMail) {
		this.receiveReportByMail = receiveReportByMail;
	}

	public String getAgentParent() {
		return agentParent;
	}

	public void setAgentParent(String agentParent) {
		this.agentParent = agentParent;
	}

	public String getVendorType() {
		return vendorType;
	}

	public void setVendorType(String vendorType) {
		this.vendorType = vendorType;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAgentStatus() {
		return agentStatus;
	}

	public void setAgentStatus(String agentStatus) {
		this.agentStatus = agentStatus;
	}

	public String getDateIssue() {
		return dateIssue;
	}

	public void setDateIssue(String dateIssue) {
		this.dateIssue = dateIssue;
	}

	public String getPlaceIssue() {
		return placeIssue;
	}

	public void setPlaceIssue(String placeIssue) {
		this.placeIssue = placeIssue;
	}

	public String getTerritoryStatus() {
		return territoryStatus;
	}

	public void setTerritoryStatus(String territoryStatus) {
		this.territoryStatus = territoryStatus;
	}

	public String getActiveDate() {
		return activeDate;
	}

	public void setActiveDate(String activeDate) {
		this.activeDate = activeDate;
	}

	public String getTransStatus() {
		return transStatus;
	}

	public void setTransStatus(String transStatus) {
		this.transStatus = transStatus;
	}

	public String getQrCode() {
		return qrCode;
	}

	public void setQrCode(String qrCode) {
		this.qrCode = qrCode;
	}

	public String getGroupCommType() {
		return groupCommType;
	}

	public void setGroupCommType(String groupCommType) {
		this.groupCommType = groupCommType;
	}

	public String getGroupCommDate() {
		return groupCommDate;
	}

	public void setGroupCommDate(String groupCommDate) {
		this.groupCommDate = groupCommDate;
	}

	public String getCommune() {
		return commune;
	}

	public void setCommune(String commune) {
		this.commune = commune;
	}

	public String getUsercatcode() {
		return usercatcode;
	}

	public void setUsercatcode(String usercatcode) {
		this.usercatcode = usercatcode;
	}

	public AgentEntity getParentAgent() {
		return parentAgent;
	}

	public void setParentAgent(AgentEntity parentAgent) {
		this.parentAgent = parentAgent;
	}

	public List<AgentEntity> getListChildAgent() {
		return listChildAgent;
	}

	public void setListChildAgent(List<AgentEntity> listChildAgent) {
		this.listChildAgent = listChildAgent;
	}

	public String getRegionId() {
		return regionId;
	}

	public void setRegionId(String regionId) {
		this.regionId = regionId;
	}
}
