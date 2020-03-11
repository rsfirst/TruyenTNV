package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

/**
 * The persistent class for the NPR_SUBSCRIBER database table.
 * 
 */
@Entity
public class ActionSubscriberRerverSalModel implements Serializable {
	private static final long serialVersionUID = 1L;

	
	@Id
	@Column(name="NPR_SUBSCRIBER_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "NPR_SUBSCRIBER_SEQ")
    @SequenceGenerator(sequenceName = "NPR_SUBSCRIBER_SEQ", allocationSize = 1, name = "NPR_SUBSCRIBER_SEQ")
	private long nprSubscriberId;
	
	@Transient
	private long nprId;
	
	@Column(name="VIOLATION_FLAG")
	private String violationFlag;

	@Column(name="VIOLATION_REASON")
	private String violationReason;

	@Column(name="VIOLATION_STATUS")
	private String violationStatus;
	
	@Column(name="VNM_VIOLATION")
	private String vnmViolationStatus;

	@Column(name="ACCOUNT_TYPE")
	private String accountType;
	
	@Column(name="SUBDATA_CONTACT_NUMBER")
	private String subdataCcontactNumber;
	
	@Column(name="ORIGINAL_CCH_TRANS_ID")
	private String originalCCHTransID;
	
	@Column(name = "CCH_TRANS_ID")
	private String cchTransId;
	
	@Column(name = "STATUS_REVERSAL")
	private String statusReversal;
	
	
	@Temporal(TemporalType.DATE)
	@Column(name="CREATED_DATE")
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createdDateNpr;
	
	@Transient
	private String createdDateNprStr;
	
	@Transient
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createdDateViolation;
	
	@Transient
	private String accountTypeStr;

	@Column(name="MSISDN")
	private String msisdn;
	
	@Column(name="PRIMARY")
	private String primary;
	
	@Transient
	private String violationStatusIndex;
	
	@Transient
	private String networkStr;
	
	@ManyToOne
	@JoinColumn(name="NPR_ID")
	private NPR nprSubscriber;

	public ActionSubscriberRerverSalModel() {
	}

	public long getNprSubscriberId() {
		return this.nprSubscriberId;
	}

	public void setNprSubscriberId(long nprSubscriberId) {
		this.nprSubscriberId = nprSubscriberId;
	}

	public String getViolationFlag() {
		return this.violationFlag;
	}

	public void setViolationFlag(String violationFlag) {
		this.violationFlag = violationFlag;
	}

	public String getViolationReason() {
		return this.violationReason;
	}

	public void setViolationReason(String violationReason) {
		this.violationReason = violationReason;
	}

	public String getViolationStatus() {
		return this.violationStatus;
	}

	public void setViolationStatus(String violationStatus) {
		this.violationStatus = violationStatus;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public void setNprSubscriber(NPR nprSubscriber) {
		this.nprSubscriber = nprSubscriber;
	}

	public String getPrimary() {
		return primary;
	}

	public void setPrimary(String primary) {
		this.primary = primary;
	}

	public String getAccountTypeStr() {
		return CommonUtils.getAccountTypeStr(this.accountType);
	}

	public void setAccountTypeStr(String accountTypeStr) {
		this.accountTypeStr = accountTypeStr;
	}

	public Date getCreatedDateNpr() {
		return createdDateNpr;
	}

	public void setCreatedDateNpr(Date createdDateNpr) {
		this.createdDateNpr = createdDateNpr;
	}

	public Date getCreatedDateViolation() {
		return createdDateViolation;
	}

	public void setCreatedDateViolation(Date createdDateViolation) {
		this.createdDateViolation = createdDateViolation;
	}

	public String getViolationStatusIndex() {
		return Constants.VILATION_STATUS_MODEL + this.nprSubscriberId;
	}

	public void setViolationStatusIndex(String violationStatusIndex) {
		this.violationStatusIndex = violationStatusIndex;
	}

	public String getCreatedDateNprStr() {
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.createdDateNpr);
	}

	public void setCreatedDateNprStr(String createdDateNprStr) {
		this.createdDateNprStr = createdDateNprStr;
	}

	public String getVnmViolationStatus() {
		return vnmViolationStatus;
	}

	public void setVnmViolationStatus(String vnmViolationStatus) {
		this.vnmViolationStatus = vnmViolationStatus;
	}

	public String getOriginalCCHTransID() {
		return originalCCHTransID;
	}

	public void setOriginalCCHTransID(String originalCCHTransID) {
		this.originalCCHTransID = originalCCHTransID;
	}

	public String getSubdataCcontactNumber() {
		return subdataCcontactNumber;
	}

	public void setSubdataCcontactNumber(String subdataCcontactNumber) {
		this.subdataCcontactNumber = subdataCcontactNumber;
	}

	public String getCchTransId() {
		return cchTransId;
	}

	public void setCchTransId(String cchTransId) {
		this.cchTransId = cchTransId;
	}

	public String getStatusReversal() {
		return statusReversal;
	}

	public void setStatusReversal(String statusReversal) {
		this.statusReversal = statusReversal;
	}

	public String getNetworkStr() {
		return networkStr;
	}

	public void setNetworkStr(String networkStr) {
		this.networkStr = networkStr;
	}

	public long getNprId() {
		return nprId;
	}

	public void setNprId(long nprId) {
		this.nprId = nprId;
	}

}
