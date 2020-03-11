package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

public class ViolationInput implements Serializable {
	private static final long serialVersionUID = 1L;

	private long nprId;
	
	private String violationFlag;

	private String msisdn;

	private String transactionId;

	private String violationReason;

	private String violationStatus;

	private String createDateNPR;
	
	private String createDateViolation;
	
	private String accountType;
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date startDate;

	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date endDate;

	public String getViolationFlag() {
		return violationFlag;
	}

	public void setViolationFlag(String violationFlag) {
		this.violationFlag = violationFlag;
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

	public String getViolationReason() {
		return violationReason;
	}

	public void setViolationReason(String violationReason) {
		this.violationReason = violationReason;
	}

	public String getViolationStatus() {
		return violationStatus;
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

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public long getNprId() {
		return nprId;
	}

	public void setNprId(long nprId) {
		this.nprId = nprId;
	}

	public String getCreateDateNPR() {
		return createDateNPR;
	}

	public void setCreateDateNPR(String createDateNPR) {
		this.createDateNPR = createDateNPR;
	}

	public String getCreateDateViolation() {
		return createDateViolation;
	}

	public void setCreateDateViolation(String createDateViolation) {
		this.createDateViolation = createDateViolation;
	}

	@Override
	public String toString() {
		return "ViolationInput [nprId=" + nprId + ", violationFlag=" + violationFlag + ", msisdn=" + msisdn
				+ ", transactionId=" + transactionId + ", violationReason=" + violationReason + ", violationStatus="
				+ violationStatus + ", createDateNPR=" + createDateNPR + ", createDateViolation=" + createDateViolation
				+ ", accountType=" + accountType + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}

}
