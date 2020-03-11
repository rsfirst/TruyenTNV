package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;


/**
 * The persistent class for the NPR_ACTION_AUDIT database table.
 * 
 */
@Entity
@Table(name="NPR_ACTION_AUDIT")
public class NprActionAudit implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="NPR_ACTION_AUDIT_ID")
	private long nprActionAuditId;

	@Temporal(TemporalType.DATE)
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	@Column(name="ACTION_DATE")
	private Date actionDate;

	@Transient
	private String actionDateStr;
	
	@Column(name="ACTION_STATUS")
	private String actionStatus;

	@Transient
	private String actionStatusStr;
	
	@Column(name="ACTION_TYPE")
	private String actionType;

	@Column(name="CCH_TRANS_ID")
	private String cchTransId;

	@Column(name="COMMENTS")
	private String comments;

	@Column(name="ERROR_CODE_NOTIFY")
	private String errorCodeNotify;

	@Column(name="ERROR_DESC_NOTIFY")
	private String errorDescNotify;

	@Column(name="ERROR_MESSAGE")
	private String errorMessage;

	@Column(name="ERROR_MESSAGE_TYPE_NOTIFY")
	private String errorMessageTypeNotify;

	@Column(name="NPR_ID")
	private long nprId;

	@Column(name="SHOP_CODE")
	private String shopCode;

	@Column(name="SOURCE_APP")
	private String sourceApp;

	@Column(name="USERNAME")
	private String username;

	public NprActionAudit() {
	}

	public long getNprActionAuditId() {
		return this.nprActionAuditId;
	}

	public void setNprActionAuditId(long nprActionAuditId) {
		this.nprActionAuditId = nprActionAuditId;
	}

	public Date getActionDate() {
		return this.actionDate;
	}

	public void setActionDate(Date actionDate) {
		this.actionDate = actionDate;
	}

	public String getActionStatus() {
		return this.actionStatus;
	}

	public void setActionStatus(String actionStatus) {
		this.actionStatus = actionStatus;
	}

	public String getActionType() {
		return this.actionType;
	}

	public void setActionType(String actionType) {
		this.actionType = actionType;
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

	public String getErrorCodeNotify() {
		return this.errorCodeNotify;
	}

	public void setErrorCodeNotify(String errorCodeNotify) {
		this.errorCodeNotify = errorCodeNotify;
	}

	public String getErrorDescNotify() {
		return this.errorDescNotify;
	}

	public void setErrorDescNotify(String errorDescNotify) {
		this.errorDescNotify = errorDescNotify;
	}

	public String getErrorMessage() {
		return this.errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessageTypeNotify() {
		return this.errorMessageTypeNotify;
	}

	public void setErrorMessageTypeNotify(String errorMessageTypeNotify) {
		this.errorMessageTypeNotify = errorMessageTypeNotify;
	}

	public long getNprId() {
		return this.nprId;
	}

	public void setNprId(long nprId) {
		this.nprId = nprId;
	}

	public String getShopCode() {
		return this.shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public String getSourceApp() {
		return this.sourceApp;
	}

	public void setSourceApp(String sourceApp) {
		this.sourceApp = sourceApp;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getActionDateStr() {
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.actionDate);
	}

	public void setActionDateStr(String actionDateStr) {
		this.actionDateStr = actionDateStr;
	}

	public String getActionStatusStr() {
		String actionStatusStr = "";
		if(Constants.ACTION_STATUS_COMPLETED.equalsIgnoreCase(this.actionStatus)) {
			actionStatusStr = Constants.ACTION_STATUS_COMPLETED_MES;
		}else if(Constants.ACTION_STATUS_FAILED.equalsIgnoreCase(this.actionStatus)) {
			actionStatusStr = Constants.ACTION_STATUS_FAILED_MES;
		}
		return actionStatusStr;
	}

	public void setActionStatusStr(String actionStatusStr) {
		this.actionStatusStr = actionStatusStr;
	}

}
