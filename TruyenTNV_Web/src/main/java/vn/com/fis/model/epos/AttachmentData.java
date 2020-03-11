package vn.com.fis.model.epos;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;



/**
 * The persistent class for the ATTACHMENT_DATA database table.
 * 
 */
@Entity
@Table(name="ATTACHMENT_DATA")
//@NamedQuery(name="AttachmentData.findAll", query="SELECT a FROM AttachmentData a")
public class AttachmentData implements Serializable, Comparable<AttachmentData> {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ATTACHMENT_DATA_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ATTACHMENT_DATA_SEQ")
    @SequenceGenerator(sequenceName = "ATTACHMENT_DATA_SEQ", allocationSize = 1, name = "ATTACHMENT_DATA_SEQ")
	private long attachmentDataId;

	@Column(name="ATTACHMENT_TYPE")
	private String attachmentType;

	@Temporal(TemporalType.DATE)
	@Column(name="CREATED_DATE")
	private Date createdDate;

	@Column(name="FILE_NAME")
	private String fileName;
	
	@Transient
	private String createDateStr; 
	
	@Column(name="FOLDER")
	private String folder;
	
	@Column(name="NOTE")
	private String note;

	@Column(name = "CUS_ID")
	private String cusId;
	
	@Transient
	private String attachMentIdClient; 
	
	public AttachmentData() {
	}

	public long getAttachmentDataId() {
		return this.attachmentDataId;
	}

	public void setAttachmentDataId(long attachmentDataId) {
		this.attachmentDataId = attachmentDataId;
	}

	public String getAttachmentType() {
		return this.attachmentType;
	}

	public void setAttachmentType(String attachmentType) {
		this.attachmentType = attachmentType;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getFileName() {
		return this.fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFolder() {
		return this.folder;
	}

	public void setFolder(String folder) {
		this.folder = folder;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getAttachMentIdClient() {
		return attachMentIdClient;
	}

	public void setAttachMentIdClient(String attachMentIdClient) {
		this.attachMentIdClient = attachMentIdClient;
	}

//	public NPR getNprAttach() {
//		return nprAttach;
//	}


	public String getCusId() {
		return cusId;
	}

	public void setCusId(String cusId) {
		this.cusId = cusId;
	}

	@Override
	public int compareTo(AttachmentData compareAttachment) {
		String attachMentId = ((AttachmentData) compareAttachment).getAttachMentIdClient();

		//ascending order
		return attachMentId.compareTo(this.attachMentIdClient);
	}

	@Override
	public String toString() {
		return "AttachmentData [attachmentDataId=" + attachmentDataId + ", attachmentType=" + attachmentType
				+ ", fileName=" + fileName + ", folder=" + folder + "]";
	}

	public void setCreateDateStr(String createDateStr)
	{
		this.createDateStr = createDateStr;
	}

}