package vn.com.fis.model.css;

/**
 * The Class SecurityObject.
 */
public class SecurityObject implements java.io.Serializable {

	/** The msisdn. */
	private String msisdn;
	
	/** The code. */
	private String code;
	
	/** The status. */
	private String status;
	
	/** The create date. */
	private String createDate;
	
	/** The update date. */
	private String updateDate;

	/**
	 * Gets the msisdn.
	 *
	 * @return the msisdn
	 */
	public String getMsisdn() {
		return msisdn;
	}

	/**
	 * Sets the msisdn.
	 *
	 * @param msisdn the new msisdn
	 */
	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	/**
	 * Gets the code.
	 *
	 * @return the code
	 */
	public String getCode() {
		return code;
	}

	/**
	 * Sets the code.
	 *
	 * @param code the new code
	 */
	public void setCode(String code) {
		this.code = code;
	}

	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * Sets the status.
	 *
	 * @param status the new status
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * Gets the creates the date.
	 *
	 * @return the creates the date
	 */
	public String getCreateDate() {
		return createDate;
	}

	/**
	 * Sets the creates the date.
	 *
	 * @param createDate the new creates the date
	 */
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	/**
	 * Gets the update date.
	 *
	 * @return the update date
	 */
	public String getUpdateDate() {
		return updateDate;
	}

	/**
	 * Sets the update date.
	 *
	 * @param updateDate the new update date
	 */
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
}
