package vn.com.fis.model.css;

import java.util.Date;

/**
 * <p>
 * Title:
 * </p>
 *
 * <p>
 * Description:
 * </p>
 *
 * <p>
 * Copyright: Copyright (c) 2004
 * </p>
 *
 * <p>
 * Company:
 * </p>
 *
 * @author not attributable
 * @version 1.0
 */
public class TransItem {
	private String transId;
	private String transType;
	private String processStatus;
	private String channel;
	private Date createDate;
	private Date lastModified;
	private String sourceMsisdn;
	private String sourceAccountId;
	private String sourceCurrBalance;
	private String targetMsisdn;
	private String targetAccountId;
	private String targetCurrBalance;
	private String transAmount;
	private String preTransId;
	private String errCode;
	private String promoCode;
	private String message;

	public TransItem() {
	}

	public TransItem(String transId, String transType, String processStatus, String channel, Date createDate,
			Date lastModified, String sourceMsisdn, String sourceAccountId, String sourceCurrBalance,
			String targetMsisdn, String targetAccountId, String targetCurrBalance, String transAmount,
			String preTransId) {
		this.transId = transId;
		this.transType = transType;
		this.processStatus = processStatus;
		this.channel = channel;
		this.createDate = createDate;
		this.lastModified = lastModified;
		this.sourceMsisdn = sourceMsisdn;
		this.sourceAccountId = sourceAccountId;
		this.sourceCurrBalance = sourceCurrBalance;
		this.targetMsisdn = targetMsisdn;
		this.targetAccountId = targetAccountId;
		this.targetCurrBalance = targetCurrBalance;
		this.transAmount = transAmount;
		this.preTransId = preTransId;
	}

	public TransItem(String transId, String transType, String processStatus, String channel, Date createDate,
			Date lastModified, String sourceMsisdn, String sourceAccountId, String sourceCurrBalance,
			String targetMsisdn, String targetAccountId, String targetCurrBalance, String transAmount,
			String preTransId, String errCode, String message) {
		this.transId = transId;
		this.transType = transType;
		this.processStatus = processStatus;
		this.channel = channel;
		this.createDate = createDate;
		this.lastModified = lastModified;
		this.sourceMsisdn = sourceMsisdn;
		this.sourceAccountId = sourceAccountId;
		this.sourceCurrBalance = sourceCurrBalance;
		this.targetMsisdn = targetMsisdn;
		this.targetAccountId = targetAccountId;
		this.targetCurrBalance = targetCurrBalance;
		this.transAmount = transAmount;
		this.preTransId = preTransId;
		this.errCode = errCode;
		this.message = message;
	}

	public TransItem(String transId, String transType, String processStatus, String channel, Date createDate,
			Date lastModified, String sourceMsisdn, String sourceAccountId, String sourceCurrBalance,
			String targetMsisdn, String targetAccountId, String targetCurrBalance, String transAmount,
			String preTransId, String message) {
		this.transId = transId;
		this.transType = transType;
		this.processStatus = processStatus;
		this.channel = channel;
		this.createDate = createDate;
		this.lastModified = lastModified;
		this.sourceMsisdn = sourceMsisdn;
		this.sourceAccountId = sourceAccountId;
		this.sourceCurrBalance = sourceCurrBalance;
		this.targetMsisdn = targetMsisdn;
		this.targetAccountId = targetAccountId;
		this.targetCurrBalance = targetCurrBalance;
		this.transAmount = transAmount;
		this.preTransId = preTransId;
		this.message = message;
	}

	public void setTransId(String transId) {
		this.transId = transId;
	}

	public String getTransId() {
		return transId;
	}

	public void setTransType(String transType) {
		this.transType = transType;
	}

	public String getTransType() {
		return transType;
	}

	public void setProcessStatus(String processStatus) {
		this.processStatus = processStatus;
	}

	public String getProcessStatus() {
		return processStatus;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getChannel() {
		return channel;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
	}

	public Date getLastModified() {
		return lastModified;
	}

	public void setSourceMsisdn(String sourceMsisdn) {
		this.sourceMsisdn = sourceMsisdn;
	}

	public String getSourceMsisdn() {
		return sourceMsisdn;
	}

	public void setSourceAccountId(String sourceAccountId) {
		this.sourceAccountId = sourceAccountId;
	}

	public String getSourceAccountId() {
		return sourceAccountId;
	}

	public void setSourceCurrBalance(String sourceCurrBalance) {
		this.sourceCurrBalance = sourceCurrBalance;
	}

	public String getSourceCurrBalance() {
		return sourceCurrBalance;
	}

	public void setTargetMsisdn(String targetMsisdn) {
		this.targetMsisdn = targetMsisdn;
	}

	public String getTargetMsisdn() {
		return targetMsisdn;
	}

	public void setTargetAccountId(String targetAccountId) {
		this.targetAccountId = targetAccountId;
	}

	public String getTargetAccountId() {
		return targetAccountId;
	}

	public void setTargetCurrBalance(String targetCurrBalance) {
		this.targetCurrBalance = targetCurrBalance;
	}

	public String getTargetCurrBalance() {
		return targetCurrBalance;
	}

	public void setTransAmount(String transAmount) {
		this.transAmount = transAmount;
	}

	public String getTransAmount() {
		return transAmount;
	}

	public void setPreTransId(String preTransId) {
		this.preTransId = preTransId;
	}

	public String getPreTransId() {
		return preTransId;
	}

	public String getErrCode() {
		return errCode;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	public String getPromoCode() {
		return promoCode;
	}

	public void setPromoCode(String promoCode) {
		this.promoCode = promoCode;
	}

	public String transDescription() {
		return "(source='" + sourceMsisdn + "', target='" + targetMsisdn + "', amount'" + transAmount + "')";
	}
}
