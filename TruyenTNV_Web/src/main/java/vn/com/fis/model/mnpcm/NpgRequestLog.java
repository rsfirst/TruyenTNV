package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import vn.com.fis.utils.mnpcm.CommonUtils;


/**
 * The persistent class for the NPG_REQUEST_LOG database table.
 * 
 */
@Entity
@Table(name="NPG_REQUEST_LOG")
public class NpgRequestLog implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="NPG_REQUEST_LOG_ID")
	private long npgRequestLogId;

	@Column(name="LOG_BLOCKHOLDER")
	private String logBlockholder;

	@Column(name="LOG_CCH_ROUTE")
	private String logCchRoute;

	@Column(name="LOG_CCH_TRANS_ID")
	private String logCchTransId;

	@Column(name="LOG_COMMENTS")
	private String logComments;

	@Column(name="LOG_DONOR")
	private String logDonor;

	@Column(name="LOG_DOWNLOAD_TYPE")
	private String logDownloadType;

	@Column(name="LOG_END_DATE")
	private String logEndDate;

	@Column(name="LOG_ERROR_CODE")
	private String logErrorCode;

	@Column(name="LOG_ERROR_DES")
	private String logErrorDes;

	@Column(name="LOG_ERROR_MSG_TYPE")
	private String logErrorMsgType;

	@Temporal(TemporalType.DATE)
	@Column(name="LOG_EXPIRE_DATE")
	private Date logExpireDate;

	@Column(name="LOG_FORCE_CASE")
	private String logForceCase;

	@Column(name="LOG_LOCATION")
	private String logLocation;

	@Column(name="LOG_MESSAGE_TYPE")
	private String logMessageType;

	@Column(name="LOG_MESSSAGE_ID")
	private String logMesssageId;

	@Column(name="LOG_ORIGINAL_TRANS_ID")
	private String logOriginalTransId;

	@Column(name="LOG_PORT_TYPE")
	private String logPortType;

	@Column(name="LOG_RECIPIENT")
	private String logRecipient;

	@Column(name="LOG_REVERSAL_REASON")
	private String logReversalReason;

	@Column(name="LOG_SENDER")
	private String logSender;

	@Column(name="LOG_START_DATE")
	private String logStartDate;

	@Column(name="LOG_SUBTYPE")
	private String logSubtype;

	@Column(name="LOG_TIMER")
	private String logTimer;

	@Column(name="LOG_VIOLATION_STATUS")
	private String logViolationStatus;

	@Column(name="NPG_CUSTOMER_ID")
	private BigDecimal npgCustomerId;

	@Temporal(TemporalType.DATE)
	@Column(name="NPG_LOG_EVENTDATE")
	private Date npgLogEventdate;
	
	@Transient
	private String npgLogEventdateStr;

	@Column(name="NPG_LOG_REASON")
	private String npgLogReason;

	@Column(name="NPG_LOG_STATUS")
	private String npgLogStatus;

	@Column(name="NPG_LOG_TYPE")
	private String npgLogType;

	@Column(name="NPG_SUBSCRIBER_ID")
	private BigDecimal npgSubscriberId;

	@Column(name="NPG_USER_NAME")
	private String npgUserName;

	public NpgRequestLog() {
	}

	public long getNpgRequestLogId() {
		return this.npgRequestLogId;
	}

	public void setNpgRequestLogId(long npgRequestLogId) {
		this.npgRequestLogId = npgRequestLogId;
	}

	public String getLogBlockholder() {
		return this.logBlockholder;
	}

	public void setLogBlockholder(String logBlockholder) {
		this.logBlockholder = logBlockholder;
	}

	public String getLogCchRoute() {
		return this.logCchRoute;
	}

	public void setLogCchRoute(String logCchRoute) {
		this.logCchRoute = logCchRoute;
	}

	public String getLogCchTransId() {
		return this.logCchTransId;
	}

	public void setLogCchTransId(String logCchTransId) {
		this.logCchTransId = logCchTransId;
	}

	public String getLogComments() {
		return this.logComments;
	}

	public void setLogComments(String logComments) {
		this.logComments = logComments;
	}

	public String getLogDonor() {
		return this.logDonor;
	}

	public void setLogDonor(String logDonor) {
		this.logDonor = logDonor;
	}

	public String getLogDownloadType() {
		return this.logDownloadType;
	}

	public void setLogDownloadType(String logDownloadType) {
		this.logDownloadType = logDownloadType;
	}

	public String getLogEndDate() {
		return this.logEndDate;
	}

	public void setLogEndDate(String logEndDate) {
		this.logEndDate = logEndDate;
	}

	public String getLogErrorCode() {
		return this.logErrorCode;
	}

	public void setLogErrorCode(String logErrorCode) {
		this.logErrorCode = logErrorCode;
	}

	public String getLogErrorDes() {
		return this.logErrorDes;
	}

	public void setLogErrorDes(String logErrorDes) {
		this.logErrorDes = logErrorDes;
	}

	public String getLogErrorMsgType() {
		return this.logErrorMsgType;
	}

	public void setLogErrorMsgType(String logErrorMsgType) {
		this.logErrorMsgType = logErrorMsgType;
	}

	public Date getLogExpireDate() {
		return this.logExpireDate;
	}

	public void setLogExpireDate(Date logExpireDate) {
		this.logExpireDate = logExpireDate;
	}

	public String getLogForceCase() {
		return this.logForceCase;
	}

	public void setLogForceCase(String logForceCase) {
		this.logForceCase = logForceCase;
	}

	public String getLogLocation() {
		return this.logLocation;
	}

	public void setLogLocation(String logLocation) {
		this.logLocation = logLocation;
	}

	public String getLogMessageType() {
		return this.logMessageType;
	}

	public void setLogMessageType(String logMessageType) {
		this.logMessageType = logMessageType;
	}

	public String getLogMesssageId() {
		return this.logMesssageId;
	}

	public void setLogMesssageId(String logMesssageId) {
		this.logMesssageId = logMesssageId;
	}

	public String getLogOriginalTransId() {
		return this.logOriginalTransId;
	}

	public void setLogOriginalTransId(String logOriginalTransId) {
		this.logOriginalTransId = logOriginalTransId;
	}

	public String getLogPortType() {
		return this.logPortType;
	}

	public void setLogPortType(String logPortType) {
		this.logPortType = logPortType;
	}

	public String getLogRecipient() {
		return this.logRecipient;
	}

	public void setLogRecipient(String logRecipient) {
		this.logRecipient = logRecipient;
	}

	public String getLogReversalReason() {
		return this.logReversalReason;
	}

	public void setLogReversalReason(String logReversalReason) {
		this.logReversalReason = logReversalReason;
	}

	public String getLogSender() {
		return this.logSender;
	}

	public void setLogSender(String logSender) {
		this.logSender = logSender;
	}

	public String getLogStartDate() {
		return this.logStartDate;
	}

	public void setLogStartDate(String logStartDate) {
		this.logStartDate = logStartDate;
	}

	public String getLogSubtype() {
		return this.logSubtype;
	}

	public void setLogSubtype(String logSubtype) {
		this.logSubtype = logSubtype;
	}

	public String getLogTimer() {
		return this.logTimer;
	}

	public void setLogTimer(String logTimer) {
		this.logTimer = logTimer;
	}

	public String getLogViolationStatus() {
		return this.logViolationStatus;
	}

	public void setLogViolationStatus(String logViolationStatus) {
		this.logViolationStatus = logViolationStatus;
	}

	public BigDecimal getNpgCustomerId() {
		return this.npgCustomerId;
	}

	public void setNpgCustomerId(BigDecimal npgCustomerId) {
		this.npgCustomerId = npgCustomerId;
	}

	public Date getNpgLogEventdate() {
		return this.npgLogEventdate;
	}

	public void setNpgLogEventdate(Date npgLogEventdate) {
		this.npgLogEventdate = npgLogEventdate;
	}

	public String getNpgLogReason() {
		return this.npgLogReason;
	}

	public void setNpgLogReason(String npgLogReason) {
		this.npgLogReason = npgLogReason;
	}

	public String getNpgLogStatus() {
		return this.npgLogStatus;
	}

	public void setNpgLogStatus(String npgLogStatus) {
		this.npgLogStatus = npgLogStatus;
	}

	public String getNpgLogType() {
		return this.npgLogType;
	}

	public void setNpgLogType(String npgLogType) {
		this.npgLogType = npgLogType;
	}

	public BigDecimal getNpgSubscriberId() {
		return this.npgSubscriberId;
	}

	public void setNpgSubscriberId(BigDecimal npgSubscriberId) {
		this.npgSubscriberId = npgSubscriberId;
	}

	public String getNpgUserName() {
		return this.npgUserName;
	}

	public void setNpgUserName(String npgUserName) {
		this.npgUserName = npgUserName;
	}

	public String getNpgLogEventdateStr()
	{
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.npgLogEventdate);
	}

	public void setNpgLogEventdateStr(String npgLogEventdateStr)
	{
		this.npgLogEventdateStr = npgLogEventdateStr;
	}

}
