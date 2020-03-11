package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the MNP_CANCEL_DETAIL database table.
 * 
 */
@Entity
@Table(name="MNP_CANCEL_DETAIL")
public class MnpCancelDetail implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="CANCEL_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MNP_CANCEL_SEQ")
    @SequenceGenerator(sequenceName = "MNP_CANCEL_SEQ", allocationSize = 1, name = "MNP_CANCEL_SEQ")
	private long cancelId;

	@Temporal(TemporalType.DATE)
	@Column(name="CANCEL_DATE")
	private Date cancelDate;

	@Column(name="CANCEL_REASON")
	private String cancelReason;

	@Column(name="CCH_TRANSACTION_ID")
	private BigDecimal cchTransactionId;

	@Column(name="MSISDN")
	private String msisdn;

	@Column(name="CONTACT_ADDRESS")
	private String contactAddress;
	
	@Column(name="CONTACT_FULLNAME")
	private String contactFullname;

	@Column(name="CONTACT_EMAIL")
	private String contactEmail;

	@Column(name="CONTACT_NUMBER")
	private String contactNumber;
	
	@Column(name="ATTACH_FOLDER")
	private String attachFolder;
	
	@Column(name="ATTACH_FILE_NAME")
	private String attachFileName;

	@Transient
	private String comments;
	
	@Transient
	private List<AttachmentData> attachmentData;
	
	public String getAttachFolder() {
		return attachFolder;
	}

	public void setAttachFolder(String attachFolder) {
		this.attachFolder = attachFolder;
	}

	public String getAttachFileName() {
		return attachFileName;
	}

	public void setAttachFileName(String attachFileName) {
		this.attachFileName = attachFileName;
	}

	public MnpCancelDetail() {
	}

	public long getCancelId() {
		return this.cancelId;
	}

	public void setCancelId(long cancelId) {
		this.cancelId = cancelId;
	}

	public Date getCancelDate() {
		return this.cancelDate;
	}

	public void setCancelDate(Date cancelDate) {
		this.cancelDate = cancelDate;
	}

	public String getCancelReason() {
		return this.cancelReason;
	}

	public void setCancelReason(String cancelReason) {
		this.cancelReason = cancelReason;
	}

	public BigDecimal getCchTransactionId() {
		return this.cchTransactionId;
	}

	public void setCchTransactionId(BigDecimal cchTransactionId) {
		this.cchTransactionId = cchTransactionId;
	}

	public String getContactAddress() {
		return this.contactAddress;
	}

	public void setContactAddress(String contactAddress) {
		this.contactAddress = contactAddress;
	}

	public String getContactEmail() {
		return this.contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getContactNumber() {
		return this.contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getContactFullname() {
		return contactFullname;
	}

	public void setContactFullname(String contactFullname) {
		this.contactFullname = contactFullname;
	}

	public List<AttachmentData> getAttachmentData() {
		return attachmentData;
	}

	public void setAttachmentData(List<AttachmentData> attachmentData) {
		this.attachmentData = attachmentData;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "MnpCancelDetail [cancelId=" + cancelId + ", cancelDate=" + cancelDate + ", cancelReason=" + cancelReason
				+ ", cchTransactionId=" + cchTransactionId + ", msisdn=" + msisdn + ", contactAddress=" + contactAddress
				+ ", contactFullname=" + contactFullname + ", contactEmail=" + contactEmail + ", contactNumber="
				+ contactNumber + ", attachFolder=" + attachFolder + ", attachFileName=" + attachFileName + "]";
	}

}
