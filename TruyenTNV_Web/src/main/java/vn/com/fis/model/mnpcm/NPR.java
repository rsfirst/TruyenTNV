package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import vn.com.fis.utils.mnpcm.Constants;

/**
 * The persistent class for the NPR database table.
 * 
 */

public class NPR implements Serializable
{
	private static final long serialVersionUID = 1L;


	private long nprId;


	private String cchTransId;


	private String comments;


	private String country;


	private String createdDate;


	private String createdDateStr;


	private String violationsStatusNpr;


	private String district;


	private String donor;

	private String donorStr;

	private String forceCase;

	// @Column(name="LAST_MSG")
	// private String lastMsg;

	private String noType;

	private String nprType;

	private String originalCchTransId;

	private BigDecimal originalNprId;

	private String province;

	private String receipient;

	private String accountType;

	
	private String accountTypeVNM;

	
	private String receipientStr;

	private BigDecimal retryNum;

	// @Column(name="STEP_ID")
	// private BigDecimal stepId;

	private String stepStatus;

	private String subType;

	private String subTypeStr;

	private String subdataAddress;

	private String subdataContactNumber;

	private String subdataDnoContractDateRes;

	private String subdataDnoContractDateResStr;

	private String subdataDnoContractNumber;

	private String subdataDocIssueDate;

	private String subdataDocIssueDateStr;

	private String subdataDocIssuePlace;

	private String subdataDocNumber;

	private String subdataDocType;

	private String subdataDocTypeStr;

	private String subdataEmail;

	private String subdataNprRegistrationName;

	private String subdataRepDocNumber;

	private String subdataRepIssueDate;

	private String subdataRepIssueDateStr;

	private String subdataRepPosition;

	private String subdataSubReprentative;

	private String subdataSubscriberName;

	private String violationFlag;

	private String violationStatus;

	private String vnmViolationStatus;

	private String reversalReason;

	private String commitmentExpiry;

	private String commitmentExpiryStr;

	private String checkForceCase;

	// bi-directional many-to-one association to AttachmentData
	private List<AttachmentData> attachmentData;

	private List<AttachmentData> attachmentDataCustomer;

	// bi-directional many-to-one association to NprSubscriber

	private List<NprSubscriber> nprSubscribers;

	// bi-directional many-to-one association to ProvisioningCustomerInfo
	private List<ProvisioningCustomerInfo> provisioningCustomerInfos;

	// bi-directional many-to-one association to ProvisioningRepresentInfo
	private List<ProvisioningRepresentInfo> provisioningRepresentInfos;

	// bi-directional many-to-one association to ProvisioningSubscriberInfo
	private List<ProvisioningSubscriberInfo> provisioningSubscriberInfos;
	// bi-directional many-to-one association to Step
	private Step step;

	
	protected List<MnpFatherInforType> postPaidInformation;

	public NPR()
	{
	}

	public long getNprId()
	{
		return this.nprId;
	}

	public void setNprId(long nprId)
	{
		this.nprId = nprId;
	}

	public String getCchTransId()
	{
		return this.cchTransId;
	}

	public void setCchTransId(String cchTransId)
	{
		this.cchTransId = cchTransId;
	}

	public String getComments()
	{
		return this.comments;
	}

	public void setComments(String comments)
	{
		this.comments = comments;
	}

	public String getCreatedDate()
	{
		return this.createdDate;
	}

	public void setCreatedDate(String createdDate)
	{
		this.createdDate = createdDate;
	}

	public String getDonor()
	{
		return this.donor;
	}

	public void setDonor(String donor)
	{
		this.donor = donor;
	}

	public String getForceCase()
	{
		return this.forceCase;
	}

	public void setForceCase(String forceCase)
	{
		this.forceCase = forceCase;
	}

	// public String getLastMsg() {
	// return this.lastMsg;
	// }
	//
	// public void setLastMsg(String lastMsg) {
	// this.lastMsg = lastMsg;
	// }

	public String getNoType()
	{
		return this.noType;
	}

	public void setNoType(String noType)
	{
		this.noType = noType;
	}

	public String getNprType()
	{
		return this.nprType;
	}

	public void setNprType(String nprType)
	{
		this.nprType = nprType;
	}

	public String getOriginalCchTransId()
	{
		return this.originalCchTransId;
	}

	public void setOriginalCchTransId(String originalCchTransId)
	{
		this.originalCchTransId = originalCchTransId;
	}

	public BigDecimal getOriginalNprId()
	{
		return this.originalNprId;
	}

	public void setOriginalNprId(BigDecimal originalNprId)
	{
		this.originalNprId = originalNprId;
	}

	public String getReceipient()
	{
		return this.receipient;
	}

	public String getAccountType()
	{
		return accountType;
	}

	public void setAccountType(String accountType)
	{
		this.accountType = accountType;
	}

	public String getAccountTypeVNM()
	{
		return accountTypeVNM;
	}

	public void setAccountTypeVNM(String accountTypeVNM)
	{
		this.accountTypeVNM = accountTypeVNM;
	}

	public void setReceipient(String receipient)
	{
		this.receipient = receipient;
	}

	public BigDecimal getRetryNum()
	{
		return this.retryNum;
	}

	public void setRetryNum(BigDecimal retryNum)
	{
		this.retryNum = retryNum;
	}

	// public BigDecimal getStepId() {
	// return this.stepId;
	// }
	//
	// public void setStepId(BigDecimal stepId) {
	// this.stepId = stepId;
	// }

	public String getStepStatus()
	{
		return this.stepStatus;
	}

	public void setStepStatus(String stepStatus)
	{
		this.stepStatus = stepStatus;
	}

	public String getSubType()
	{
		return this.subType;
	}

	public void setSubType(String subType)
	{
		this.subType = subType;
	}

	public String getSubdataAddress()
	{
		return this.subdataAddress;
	}

	public void setSubdataAddress(String subdataAddress)
	{
		this.subdataAddress = subdataAddress;
	}

	public String getSubdataContactNumber()
	{
		return this.subdataContactNumber;
	}

	public void setSubdataContactNumber(String subdataContactNumber)
	{
		this.subdataContactNumber = subdataContactNumber;
	}

	public String getSubdataDnoContractNumber()
	{
		return this.subdataDnoContractNumber;
	}

	public void setSubdataDnoContractNumber(String subdataDnoContractNumber)
	{
		this.subdataDnoContractNumber = subdataDnoContractNumber;
	}

	public String getSubdataDocIssueDate()
	{
		return this.subdataDocIssueDate;
	}

	public void setSubdataDocIssueDate(String subdataDocIssueDate)
	{
		this.subdataDocIssueDate = subdataDocIssueDate;
	}

	public String getSubdataDocIssuePlace()
	{
		return this.subdataDocIssuePlace;
	}

	public void setSubdataDocIssuePlace(String subdataDocIssuePlace)
	{
		this.subdataDocIssuePlace = subdataDocIssuePlace;
	}

	public String getSubdataDocNumber()
	{
		return this.subdataDocNumber;
	}

	public void setSubdataDocNumber(String subdataDocNumber)
	{
		this.subdataDocNumber = subdataDocNumber;
	}

	public String getSubdataDocType()
	{
		return this.subdataDocType;
	}

	public String getSubdataDocTypeStr()
	{
		String result = DocumentTypeSourceEnum.getDocumentType(this.subdataDocType);
		return result;
	}

	public void setSubdataDocType(String subdataDocType)
	{
		this.subdataDocType = subdataDocType;
	}

	public String getSubdataEmail()
	{
		return this.subdataEmail;
	}

	public void setSubdataEmail(String subdataEmail)
	{
		this.subdataEmail = subdataEmail;
	}

	public String getSubdataNprRegistrationName()
	{
		return this.subdataNprRegistrationName;
	}

	public void setSubdataNprRegistrationName(String subdataNprRegistrationName)
	{
		this.subdataNprRegistrationName = subdataNprRegistrationName;
	}

	public String getSubdataSubReprentative()
	{
		return this.subdataSubReprentative;
	}

	public void setSubdataSubReprentative(String subdataSubReprentative)
	{
		this.subdataSubReprentative = subdataSubReprentative;
	}

	public String getSubdataSubscriberName()
	{
		return this.subdataSubscriberName;
	}

	public void setSubdataSubscriberName(String subdataSubscriberName)
	{
		this.subdataSubscriberName = subdataSubscriberName;
	}

	public String getViolationFlag()
	{
		return this.violationFlag;
	}

	public void setViolationFlag(String violationFlag)
	{
		this.violationFlag = violationFlag;
	}

	public String getViolationStatus()
	{
		return this.violationStatus;
	}

	public void setViolationStatus(String violationStatus)
	{
		this.violationStatus = violationStatus;
	}

	public List<AttachmentData> getAttachmentData()
	{
		return this.attachmentData;
	}

	public void setAttachmentData(List<AttachmentData> attachmentData)
	{
		this.attachmentData = attachmentData;
	}

	// public AttachmentData addAttachmentData(AttachmentData attachmentData) {
	// getAttachmentData().add(attachmentData);
	//// attachmentData.setNpr(this);
	//
	// return attachmentData;
	// }

	// public AttachmentData removeAttachmentData(AttachmentData attachmentData) {
	// getAttachmentData().remove(attachmentData);
	//// attachmentData.setNpr(null);
	//
	// return attachmentData;
	// }

	public List<NprSubscriber> getNprSubscribers()
	{
		return this.nprSubscribers;
	}

	public void setNprSubscribers(List<NprSubscriber> nprSubscribers)
	{
		this.nprSubscribers = nprSubscribers;
	}

	public NprSubscriber addNprSubscriber(NprSubscriber nprSubscriber)
	{
		getNprSubscribers().add(nprSubscriber);
		// nprSubscriber.setNpr(this);
		return nprSubscriber;
	}

	public NprSubscriber removeNprSubscriber(NprSubscriber nprSubscriber)
	{
		getNprSubscribers().remove(nprSubscriber);
		// nprSubscriber.setNpr(null);

		return nprSubscriber;
	}

	public List<ProvisioningCustomerInfo> getProvisioningCustomerInfos()
	{
		return this.provisioningCustomerInfos;
	}

	public void setProvisioningCustomerInfos(List<ProvisioningCustomerInfo> provisioningCustomerInfos)
	{
		this.provisioningCustomerInfos = provisioningCustomerInfos;
	}

	public ProvisioningCustomerInfo addProvisioningCustomerInfo(ProvisioningCustomerInfo provisioningCustomerInfo)
	{
		getProvisioningCustomerInfos().add(provisioningCustomerInfo);
		// provisioningCustomerInfo.setNpr(this);

		return provisioningCustomerInfo;
	}

	public ProvisioningCustomerInfo removeProvisioningCustomerInfo(ProvisioningCustomerInfo provisioningCustomerInfo)
	{
		getProvisioningCustomerInfos().remove(provisioningCustomerInfo);
		// provisioningCustomerInfo.setNpr(null);

		return provisioningCustomerInfo;
	}

	public List<ProvisioningSubscriberInfo> getProvisioningSubscriberInfos()
	{
		return this.provisioningSubscriberInfos;
	}

	public void setProvisioningSubscriberInfos(List<ProvisioningSubscriberInfo> provisioningSubscriberInfos)
	{
		this.provisioningSubscriberInfos = provisioningSubscriberInfos;
	}

	public ProvisioningSubscriberInfo addProvisioningSubscriberInfo(ProvisioningSubscriberInfo provisioningSubscriberInfo)
	{
		getProvisioningSubscriberInfos().add(provisioningSubscriberInfo);
		// provisioningSubscriberInfo.setNpr(this);

		return provisioningSubscriberInfo;
	}

	public ProvisioningSubscriberInfo removeProvisioningSubscriberInfo(ProvisioningSubscriberInfo provisioningSubscriberInfo)
	{
		getProvisioningSubscriberInfos().remove(provisioningSubscriberInfo);
		// provisioningSubscriberInfo.setNpr(null);

		return provisioningSubscriberInfo;
	}

	public Step getStep()
	{
		return this.step;
	}

	public void setStep(Step step)
	{
		this.step = step;
	}

	public String getCountry()
	{
		return country;
	}

	public void setCountry(String country)
	{
		this.country = country;
	}

	public String getDistrict()
	{
		return district;
	}

	public void setDistrict(String district)
	{
		this.district = district;
	}

	public String getProvince()
	{
		return province;
	}

	public void setProvince(String province)
	{
		this.province = province;
	}

	public String getSubdataDnoContractDateRes()
	{
		return subdataDnoContractDateRes;
	}

	public void setSubdataDnoContractDateRes(String subdataDnoContractDateRes)
	{
		this.subdataDnoContractDateRes = subdataDnoContractDateRes;
	}

	public String getSubdataRepDocNumber()
	{
		return subdataRepDocNumber;
	}

	public void setSubdataRepDocNumber(String subdataRepDocNumber)
	{
		this.subdataRepDocNumber = subdataRepDocNumber;
	}

	public String getSubdataRepIssueDate()
	{
		return subdataRepIssueDate;
	}

	public void setSubdataRepIssueDate(String subdataRepIssueDate)
	{
		this.subdataRepIssueDate = subdataRepIssueDate;
	}

	public String getSubdataRepPosition()
	{
		return subdataRepPosition;
	}

	public void setSubdataRepPosition(String subdataRepPosition)
	{
		this.subdataRepPosition = subdataRepPosition;
	}

	public List<ProvisioningRepresentInfo> getProvisioningRepresentInfos()
	{
		return provisioningRepresentInfos;
	}

	public void setProvisioningRepresentInfos(List<ProvisioningRepresentInfo> provisioningRepresentInfos)
	{
		this.provisioningRepresentInfos = provisioningRepresentInfos;
	}

	public String getCreatedDateStr()
	{
		return createdDateStr;
	}

	public void setCreatedDateStr(String createdDateStr)
	{
		this.createdDateStr = createdDateStr;
	}

	public List<AttachmentData> getAttachmentDataCustomer()
	{
		return attachmentDataCustomer;
	}

	public void setAttachmentDataCustomer(List<AttachmentData> attachmentDataCustomer)
	{
		this.attachmentDataCustomer = attachmentDataCustomer;
	}

	public String getSubdataDocIssueDateStr()
	{
		return this.subdataDocIssueDateStr;
	}

	public void setSubdataDocIssueDateStr(String subdataDocIssueDateStr)
	{
		this.subdataDocIssueDateStr = subdataDocIssueDateStr;
	}

	public String getViolationsStatusNpr()
	{
		return this.violationsStatusNpr;
	}

	public void setViolationsStatusNpr(String violationsStatusNpr)
	{
		this.violationsStatusNpr = violationsStatusNpr;
	}

	public String getReceipientStr()
	{
		String result = NetworkTypeSourceEnum.getNetworkType(this.receipient);
		return result;
	}

	public void setReceipientStr(String receipientStr)
	{
		this.receipientStr = receipientStr;
	}

	public String getReversalReason()
	{
		return reversalReason;
	}

	public void setReversalReason(String reversalReason)
	{
		this.reversalReason = reversalReason;
	}

	public void setSubdataDocTypeStr(String subdataDocTypeStr)
	{
		this.subdataDocTypeStr = subdataDocTypeStr;
	}

	public String getVnmViolationStatus()
	{
		return vnmViolationStatus;
	}

	public void setVnmViolationStatus(String vnmViolationStatus)
	{
		this.vnmViolationStatus = vnmViolationStatus;
	}

	public String getCommitmentExpiry()
	{
		return commitmentExpiry;
	}

	public void setCommitmentExpiry(String commitmentExpiry)
	{
		this.commitmentExpiry = commitmentExpiry;
	}

	public String getSubTypeStr()
	{
		String subTypeStr = "";

		if (Constants.NPR_SUB_TYPE_INDIVIDUAL.equals(this.subType))
		{
			subTypeStr = Constants.NPR_SUB_TYPE_INDIVIDUAL_TEXT;
		}

		if (Constants.NPR_SUB_TYPE_CORPORATION.equals(this.subType))
		{
			subTypeStr = Constants.NPR_SUB_TYPE_CORPORATION_TEXT;
		}

		return subTypeStr;
	}

	public void setSubTypeStr(String subTypeStr)
	{
		this.subTypeStr = subTypeStr;
	}

	public String getDonorStr()
	{
		String result = NetworkTypeSourceEnum.getNetworkType(this.donor);
		return result;
	}

	public void setDonorStr(String donorStr)
	{
		this.donorStr = donorStr;
	}

	public String getSubdataRepIssueDateStr()
	{
		String result = this.subdataRepIssueDateStr;
		return result;
	}

	public void setSubdataRepIssueDateStr(String subdataRepIssueDateStr)
	{
		this.subdataRepIssueDateStr = subdataRepIssueDateStr;
	}

	public String getSubdataDnoContractDateResStr()
	{
		String result = this.subdataDnoContractDateResStr;
		return result;
	}

	public void setSubdataDnoContractDateResStr(String subdataDnoContractDateResStr)
	{
		this.subdataDnoContractDateResStr = subdataDnoContractDateResStr;
	}

	public List<MnpFatherInforType> getPostPaidInformation()
	{
		return postPaidInformation;
	}

	public void setPostPaidInformation(List<MnpFatherInforType> postPaidInformation)
	{
		this.postPaidInformation = postPaidInformation;
	}

	public String getCheckForceCase()
	{
		return checkForceCase;
	}

	public void setCheckForceCase(String checkForceCase)
	{
		this.checkForceCase = checkForceCase;
	}

	public String getCommitmentExpiryStr()
	{
		return this.commitmentExpiryStr;
	}

	public void setCommitmentExpiryStr(String commitmentExpiryStr)
	{
		this.commitmentExpiryStr = commitmentExpiryStr;
	}

	public String toStringNPRPrepaid()
	{
		return "NPR [nprId=" + nprId + ", cchTransId=" + cchTransId + ", comments=" + comments + ", country=" + country + ", createdDate=" + createdDate
				+ ", district=" + district + ", donor=" + donor + ", donorStr=" + donorStr + ", noType=" + noType + ", nprType=" + nprType
				+ ", originalCchTransId=" + originalCchTransId + ", originalNprId=" + originalNprId + ", province=" + province + ", receipient=" + receipient
				+ ", accountType=" + accountType + ", accountTypeVNM=" + accountTypeVNM + ", receipientStr=" + receipientStr + ", stepStatus=" + stepStatus
				+ ", subType=" + subType + ", subTypeStr=" + subTypeStr + ", subdataAddress=" + subdataAddress + ", subdataContactNumber="
				+ subdataContactNumber + ", subdataDnoContractDateRes=" + subdataDnoContractDateRes + ", subdataDnoContractDateResStr="
				+ subdataDnoContractDateResStr + ", subdataDnoContractNumber=" + subdataDnoContractNumber + ", subdataDocIssueDate=" + subdataDocIssueDate
				+ ", subdataDocIssueDateStr=" + subdataDocIssueDateStr + ", subdataDocIssuePlace=" + subdataDocIssuePlace + ", subdataDocNumber="
				+ subdataDocNumber + ", subdataDocType=" + subdataDocType + ", subdataDocTypeStr=" + subdataDocTypeStr + ", subdataEmail=" + subdataEmail
				+ ", subdataNprRegistrationName=" + subdataNprRegistrationName + ", subdataRepDocNumber=" + subdataRepDocNumber + ", subdataRepIssueDate="
				+ subdataRepIssueDate + ", subdataRepIssueDateStr=" + subdataRepIssueDateStr + ", subdataRepPosition=" + subdataRepPosition
				+ ", subdataSubReprentative=" + subdataSubReprentative + ", subdataSubscriberName=" + subdataSubscriberName + ", violationFlag=" + violationFlag
				+ ", violationStatus=" + violationStatus + ", vnmViolationStatus=" + vnmViolationStatus + ", reversalReason=" + reversalReason
				+ ", commitmentExpiry=" + commitmentExpiry + ", commitmentExpiryStr=" + commitmentExpiryStr + ", nprSubscribers=" + nprSubscribers
				+ ", provisioningCustomerInfos=" + provisioningCustomerInfos + ", provisioningRepresentInfos=" + provisioningRepresentInfos
				+ ", provisioningSubscriberInfos=" + provisioningSubscriberInfos + "]";
	}
	
	public String toStringNPRPostpaid()
	{
		return "NPR [nprId=" + nprId + ", cchTransId=" + cchTransId + ", comments=" + comments + ", country=" + country + ", createdDate=" + createdDate
				+ ", district=" + district + ", donor=" + donor + ", donorStr=" + donorStr + ", noType=" + noType + ", nprType=" + nprType
				+ ", originalCchTransId=" + originalCchTransId + ", originalNprId=" + originalNprId + ", province=" + province + ", receipient=" + receipient
				+ ", accountType=" + accountType + ", accountTypeVNM=" + accountTypeVNM + ", receipientStr=" + receipientStr + ", stepStatus=" + stepStatus
				+ ", subType=" + subType + ", subTypeStr=" + subTypeStr + ", subdataAddress=" + subdataAddress + ", subdataContactNumber="
				+ subdataContactNumber + ", subdataDnoContractDateRes=" + subdataDnoContractDateRes + ", subdataDnoContractDateResStr="
				+ subdataDnoContractDateResStr + ", subdataDnoContractNumber=" + subdataDnoContractNumber + ", subdataDocIssueDate=" + subdataDocIssueDate
				+ ", subdataDocIssueDateStr=" + subdataDocIssueDateStr + ", subdataDocIssuePlace=" + subdataDocIssuePlace + ", subdataDocNumber="
				+ subdataDocNumber + ", subdataDocType=" + subdataDocType + ", subdataDocTypeStr=" + subdataDocTypeStr + ", subdataEmail=" + subdataEmail
				+ ", subdataNprRegistrationName=" + subdataNprRegistrationName + ", subdataRepDocNumber=" + subdataRepDocNumber + ", subdataRepIssueDate="
				+ subdataRepIssueDate + ", subdataRepIssueDateStr=" + subdataRepIssueDateStr + ", subdataRepPosition=" + subdataRepPosition
				+ ", subdataSubReprentative=" + subdataSubReprentative + ", subdataSubscriberName=" + subdataSubscriberName + ", violationFlag=" + violationFlag
				+ ", violationStatus=" + violationStatus + ", vnmViolationStatus=" + vnmViolationStatus + ", reversalReason=" + reversalReason
				+ ", commitmentExpiry=" + commitmentExpiry + ", commitmentExpiryStr=" + commitmentExpiryStr + ", nprSubscribers=" + nprSubscribers
				+ ", provisioningCustomerInfos=" + provisioningCustomerInfos + ", provisioningRepresentInfos=" + provisioningRepresentInfos
				+ ", provisioningSubscriberInfos=" + provisioningSubscriberInfos + ", postPaidInformation=" + postPaidInformation + "]";
	}

}
