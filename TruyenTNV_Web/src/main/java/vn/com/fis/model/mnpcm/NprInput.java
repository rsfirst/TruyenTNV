package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;


public class NprInput implements Serializable {
	private static final long serialVersionUID = 1L;

	private String accountType;

	private String cancleNprReason;

	private String cchTransId;

	private String comments;

	private String country;

	@Temporal(TemporalType.DATE)
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createdDate;

	
	private String createdDateStr;
	
	private String district;

	private String donor;
	
	private String province;

	private String receipient;

	private String subType;

	private String subdataAddress;

	private String subdataContactNumber;

	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date subdataDnoContractDateRes;

	private String subdataDnoContractNumber;

	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date subdataDocIssueDate;
	
	private String subdataDocIssueDateStr;
	
	private String subdataDocIssuePlace;

	private String subdataDocNumber;

	private String subdataDocType;

	private String subdataEmail;

	private String subdataNprRegistrationName;

	private String subdataRepDocNumber;
	
	private String msisdn;
	
	private String transactionId;

	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date subdataRepIssueDate;

	private String subdataRepPosition;

	private String subdataSubReprentative;

	private String subdataSubscriberName;

	private List<AttachmentData> attachmentData;
	
	private List<AttachmentData> attachmentDataCustomer;
	
	private List<AttachmentData> attachmentDataPrepaid;
	
	private List<AttachmentData> attachmentDataPostpaid;
	
	private List<NprSubscriber> nprSubscribers;

	private List<ProvisioningCustomerInfo> provisioningCustomerInfos;

	private List<ProvisioningRepresentInfo> provisioningRepresentInfos;

	private List<ProvisioningSubscriberInfo> provisioningSubscriberInfos;

	public String getCancleNprReason() {
		return this.cancleNprReason;
	}

	public void setCancleNprReason(String cancleNprReason) {
		this.cancleNprReason = cancleNprReason;
	}

	public String getCchTransId() {
		return this.cchTransId;
	}

	public void setCchTransId(String cchTransId) {
		this.cchTransId = cchTransId;
	}

	public String getComments() {
		return this.comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getDonor() {
		return this.donor;
	}

	public void setDonor(String donor) {
		this.donor = donor;
	}

	public String getReceipient() {
		return this.receipient;
	}

	public void setReceipient(String receipient) {
		this.receipient = receipient;
	}

	public String getSubType() {
		return this.subType;
	}

	public void setSubType(String subType) {
		this.subType = subType;
	}

	public String getSubdataAddress() {
		return this.subdataAddress;
	}

	public void setSubdataAddress(String subdataAddress) {
		this.subdataAddress = subdataAddress;
	}

	public String getSubdataContactNumber() {
		return this.subdataContactNumber;
	}

	public void setSubdataContactNumber(String subdataContactNumber) {
		this.subdataContactNumber = subdataContactNumber;
	}

	public String getSubdataDnoContractNumber() {
		return this.subdataDnoContractNumber;
	}

	public void setSubdataDnoContractNumber(String subdataDnoContractNumber) {
		this.subdataDnoContractNumber = subdataDnoContractNumber;
	}

	public Date getSubdataDocIssueDate() {
		return this.subdataDocIssueDate;
	}

	public void setSubdataDocIssueDate(Date subdataDocIssueDate) {
		this.subdataDocIssueDate = subdataDocIssueDate;
	}

	public String getSubdataDocIssuePlace() {
		return this.subdataDocIssuePlace;
	}

	public void setSubdataDocIssuePlace(String subdataDocIssuePlace) {
		this.subdataDocIssuePlace = subdataDocIssuePlace;
	}

	public String getSubdataDocNumber() {
		return this.subdataDocNumber;
	}

	public void setSubdataDocNumber(String subdataDocNumber) {
		this.subdataDocNumber = subdataDocNumber;
	}

	public String getSubdataDocType() {
		return this.subdataDocType;
	}

	public void setSubdataDocType(String subdataDocType) {
		this.subdataDocType = subdataDocType;
	}

	public String getSubdataEmail() {
		return this.subdataEmail;
	}

	public void setSubdataEmail(String subdataEmail) {
		this.subdataEmail = subdataEmail;
	}

	public String getSubdataNprRegistrationName() {
		return this.subdataNprRegistrationName;
	}

	public void setSubdataNprRegistrationName(String subdataNprRegistrationName) {
		this.subdataNprRegistrationName = subdataNprRegistrationName;
	}

	public String getSubdataSubReprentative() {
		return this.subdataSubReprentative;
	}

	public void setSubdataSubReprentative(String subdataSubReprentative) {
		this.subdataSubReprentative = subdataSubReprentative;
	}

	public String getSubdataSubscriberName() {
		return this.subdataSubscriberName;
	}

	public void setSubdataSubscriberName(String subdataSubscriberName) {
		this.subdataSubscriberName = subdataSubscriberName;
	}

	public List<AttachmentData> getAttachmentData() {
		return this.attachmentData;
	}
	public void setAttachmentData(List<AttachmentData> attachmentData) {
		this.attachmentData = attachmentData;
	}

	public List<NprSubscriber> getNprSubscribers() {
		return this.nprSubscribers;
	}

	public void setNprSubscribers(List<NprSubscriber> nprSubscribers) {
		this.nprSubscribers = nprSubscribers;
	}


	public List<ProvisioningCustomerInfo> getProvisioningCustomerInfos() {
		return this.provisioningCustomerInfos;
	}

	public void setProvisioningCustomerInfos(List<ProvisioningCustomerInfo> provisioningCustomerInfos) {
		this.provisioningCustomerInfos = provisioningCustomerInfos;
	}

	public List<ProvisioningSubscriberInfo> getProvisioningSubscriberInfos() {
		return this.provisioningSubscriberInfos;
	}

	public void setProvisioningSubscriberInfos(List<ProvisioningSubscriberInfo> provisioningSubscriberInfos) {
		this.provisioningSubscriberInfos = provisioningSubscriberInfos;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
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

	public Date getSubdataDnoContractDateRes() {
		return subdataDnoContractDateRes;
	}

	public void setSubdataDnoContractDateRes(Date subdataDnoContractDateRes) {
		this.subdataDnoContractDateRes = subdataDnoContractDateRes;
	}

	public String getSubdataRepDocNumber() {
		return subdataRepDocNumber;
	}

	public void setSubdataRepDocNumber(String subdataRepDocNumber) {
		this.subdataRepDocNumber = subdataRepDocNumber;
	}

	public Date getSubdataRepIssueDate() {
		return subdataRepIssueDate;
	}

	public void setSubdataRepIssueDate(Date subdataRepIssueDate) {
		this.subdataRepIssueDate = subdataRepIssueDate;
	}

	public String getSubdataRepPosition() {
		return subdataRepPosition;
	}

	public void setSubdataRepPosition(String subdataRepPosition) {
		this.subdataRepPosition = subdataRepPosition;
	}

	public List<ProvisioningRepresentInfo> getProvisioningRepresentInfos() {
		return provisioningRepresentInfos;
	}

	public void setProvisioningRepresentInfos(List<ProvisioningRepresentInfo> provisioningRepresentInfos) {
		this.provisioningRepresentInfos = provisioningRepresentInfos;
	}

	public String getCreatedDateStr() {
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.createdDate);
	}

	public void setCreatedDateStr(String createdDateStr) {
		this.createdDateStr = createdDateStr;
	}

	public List<AttachmentData> getAttachmentDataPrepaid() {
		return attachmentDataPrepaid;
	}

	public void setAttachmentDataPrepaid(List<AttachmentData> attachmentDataPrepaid) {
		this.attachmentDataPrepaid = attachmentDataPrepaid;
	}

	public List<AttachmentData> getAttachmentDataPostpaid() {
		return attachmentDataPostpaid;
	}

	public void setAttachmentDataPostpaid(List<AttachmentData> attachmentDataPostpaid) {
		this.attachmentDataPostpaid = attachmentDataPostpaid;
	}

	public List<AttachmentData> getAttachmentDataCustomer() {
		return attachmentDataCustomer;
	}

	public void setAttachmentDataCustomer(List<AttachmentData> attachmentDataCustomer) {
		this.attachmentDataCustomer = attachmentDataCustomer;
	}

	public String getSubdataDocIssueDateStr() {
		return CommonUtils.getDateToStringDDMMYYYY(this.subdataDocIssueDate);
	}

	public void setSubdataDocIssueDateStr(String subdataDocIssueDateStr) {
		this.subdataDocIssueDateStr = subdataDocIssueDateStr;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

}
