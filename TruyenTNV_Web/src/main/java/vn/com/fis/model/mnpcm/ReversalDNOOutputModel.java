package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

/**
 * The persistent class for the NPR_SUBSCRIBER database table.
 * 
 */
@Entity
public class ReversalDNOOutputModel implements Serializable {
	private static final long serialVersionUID = 1L;

	
	@Id
	@Column(name="NPR_SUBSCRIBER_ID")
	private long nprSubscriberId;
	
	@Column(name="NPR_ID")
	private long nprId;
	
	@Column(name="ORIGINAL_CCH_TRANS_ID")
	private String originalCCHTransID;
	
	@Column(name = "CCH_TRANS_ID")
	private String cchTransId;
	
	@Column(name = "STEP_STATUS")
	private String statusReversal;
	
	@Temporal(TemporalType.DATE)
	@Column(name="CREATED_DATE")
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createdDateNpr;
	
	@Temporal(TemporalType.DATE)
	@Column(name="CRATED_DATE_ORIGINAL")
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date cratedDateOriginal;
	
	@Transient
	private String createdDateNprStr;
	
	@Transient
	private String cratedDateOriginalStr;
		
	@Transient
	private String accountTypeStr;

	@Column(name="MSISDN")
	private String msisdn;
	
	@Column(name="PRIMARY")
	private String primary;

	@Column(name="DONOR")
	private String donor;
	
	@Transient
	private String donorStr;
	
	@Column(name="RECEIPIENT")
	private String receipient;
	
	@Transient
	private String receipientStr;
	
	public ReversalDNOOutputModel() {
	}

	public long getNprSubscriberId() {
		return this.nprSubscriberId;
	}

	public void setNprSubscriberId(long nprSubscriberId) {
		this.nprSubscriberId = nprSubscriberId;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getPrimary() {
		return primary;
	}

	public void setPrimary(String primary) {
		this.primary = primary;
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

	public String getCreatedDateNprStr() {
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.createdDateNpr);
	}

	public void setCreatedDateNprStr(String createdDateNprStr) {
		this.createdDateNprStr = createdDateNprStr;
	}

	public String getOriginalCCHTransID() {
		return originalCCHTransID;
	}

	public void setOriginalCCHTransID(String originalCCHTransID) {
		this.originalCCHTransID = originalCCHTransID;
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

	public long getNprId() {
		return nprId;
	}

	public void setNprId(long nprId) {
		this.nprId = nprId;
	}

	public String getDonor() {
		return donor;
	}

	public void setDonor(String donor) {
		this.donor = donor;
	}

	public String getDonorStr() {
		String result = NetworkTypeSourceEnum.getNetworkType(this.donor);
		return result;
	}

	public void setDonorStr(String donorStr) {
		this.donorStr = donorStr;
	}

	public String getReceipient() {
		return receipient;
	}

	public void setReceipient(String receipient) {
		this.receipient = receipient;
	}

	public String getAccountTypeStr() {
		return accountTypeStr;
	}

	public String getReceipientStr() {
		String result = NetworkTypeSourceEnum.getNetworkType(this.receipient);
		return result;
	}

	public void setReceipientStr(String receipientStr) {
		this.receipientStr = receipientStr;
	}

	public Date getCratedDateOriginal()
	{
		return cratedDateOriginal;
	}

	public void setCratedDateOriginal(Date cratedDateOriginal)
	{
		this.cratedDateOriginal = cratedDateOriginal;
	}

	public String getCratedDateOriginalStr()
	{
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.cratedDateOriginal);
	}

	public void setCratedDateOriginalStr(String cratedDateOriginalStr)
	{
		this.cratedDateOriginalStr = cratedDateOriginalStr;
	}

}
