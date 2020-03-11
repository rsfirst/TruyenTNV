package vn.com.fis.model.mnpcm;

import java.io.Serializable;


/**
 * The persistent class for the ATTACHMENT_DATA database table.
 * 
 */
public class AttachmentData implements Serializable, Comparable<AttachmentData> {
	private static final long serialVersionUID = 1L;

	private long attachmentDataId;

	private String attachmentType;

	private String createdDate;

	private String fileName;
	
	private String createDateStr; 
	
	private String folder;
	
	private String note;

	private String cusId;
	
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

	public String getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(String createdDate) {
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

	public String getCreateDateStr()
	{
		return this.createDateStr;
	}

	public void setCreateDateStr(String createDateStr)
	{
		this.createDateStr = createDateStr;
	}

}
