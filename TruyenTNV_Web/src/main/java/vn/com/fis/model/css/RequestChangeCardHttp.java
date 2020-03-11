package vn.com.fis.model.css;

public class RequestChangeCardHttp {
	private String requestId;
	private String attachMentIdClient;
	private String file;
	private String fileName;
	private String fileType;

	/**
	 * @return the requestId
	 */
	public String getRequestId() {
		return requestId;
	}

	/**
	 * @param requestId
	 *            the requestId to set
	 */
	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	/**
	 * @return the attachMentIdClient
	 */
	public String getAttachMentIdClient() {
		return attachMentIdClient;
	}

	/**
	 * @param attachMentIdClient
	 *            the attachMentIdClient to set
	 */
	public void setAttachMentIdClient(String attachMentIdClient) {
		this.attachMentIdClient = attachMentIdClient;
	}

	/**
	 * @return the file
	 */
	public String getFile() {
		return file;
	}

	/**
	 * @param file
	 *            the file to set
	 */
	public void setFile(String file) {
		this.file = file;
	}

	/**
	 * @return the fileName
	 */
	public String getFileName() {
		return fileName;
	}

	/**
	 * @param fileName
	 *            the fileName to set
	 */
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	/**
	 * @return the fileType
	 */
	public String getFileType() {
		return fileType;
	}

	/**
	 * @param fileType
	 *            the fileType to set
	 */
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

}
