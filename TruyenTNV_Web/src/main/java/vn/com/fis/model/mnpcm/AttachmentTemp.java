package vn.com.fis.model.mnpcm;;

public class AttachmentTemp {
	private byte[] data;
	private String fileName;
	private String url;
	private String tempUrl;
	
	private String documentType;
	private String documentNote;
	
	private String attachMentId;
	
	public byte[] getData() {
		return data;
	}
	public void setData(byte[] data) {
		this.data = data;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTempUrl() {
		return tempUrl;
	}
	public void setTempUrl(String tempUrl) {
		this.tempUrl = tempUrl;
	}
	public String getDocumentType() {
		return documentType;
	}
	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}
	public String getDocumentNote() {
		return documentNote;
	}
	public void setDocumentNote(String documentNote) {
		this.documentNote = documentNote;
	}
	public String getAttachMentId() {
		return attachMentId;
	}
	public void setAttachMentId(String attachMentId) {
		this.attachMentId = attachMentId;
	}
}
