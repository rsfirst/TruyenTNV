package vn.com.fis.model.css;

public class PrepaidListManagementSearchOutput {
	private long transId;
	private String createDatetime;
	private String fileExcute;
	private String total;
	private String noProcess;
	private String processing;
	private String processed;
	private boolean showDownload;

	/**
	 * @return the total
	 */
	public String getTotal() {
		return total;
	}

	/**
	 * @param total
	 *            the total to set
	 */
	public void setTotal(String total) {
		this.total = total;
	}

	/**
	 * @return the transId
	 */
	public long getTransId() {
		return transId;
	}

	/**
	 * @param transId
	 *            the transId to set
	 */
	public void setTransId(long transId) {
		this.transId = transId;
	}

	

	/**
	 * @return the createDatetime
	 */
	public String getCreateDatetime() {
		return createDatetime;
	}

	/**
	 * @param createDatetime the createDatetime to set
	 */
	public void setCreateDatetime(String createDatetime) {
		this.createDatetime = createDatetime;
	}

	/**
	 * @return the fileExcute
	 */
	public String getFileExcute() {
		return fileExcute;
	}

	/**
	 * @param fileExcute
	 *            the fileExcute to set
	 */
	public void setFileExcute(String fileExcute) {
		this.fileExcute = fileExcute;
	}

	/**
	 * @return the noProcess
	 */
	public String getNoProcess() {
		return noProcess;
	}

	/**
	 * @param noProcess
	 *            the noProcess to set
	 */
	public void setNoProcess(String noProcess) {
		this.noProcess = noProcess;
	}

	/**
	 * @return the processing
	 */
	public String getProcessing() {
		return processing;
	}

	/**
	 * @param processing
	 *            the processing to set
	 */
	public void setProcessing(String processing) {
		this.processing = processing;
	}

	/**
	 * @return the processed
	 */
	public String getProcessed() {
		return processed;
	}

	/**
	 * @param processed
	 *            the processed to set
	 */
	public void setProcessed(String processed) {
		this.processed = processed;
	}

	/**
	 * @return the showDownload
	 */
	public boolean isShowDownload() {
		return showDownload;
	}

	/**
	 * @param showDownload the showDownload to set
	 */
	public void setShowDownload(boolean showDownload) {
		this.showDownload = showDownload;
	}

}
