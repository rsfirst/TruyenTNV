package vn.com.fis.model.css;

/**
 * The Class ReportInput.
 */
public class ReportInput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 5211670231348351212L;

	/** The from date. */
	private String fromDate;

	/** The to data. */
	private String toDate;

	/** The shop id. */
	private String shopId;

	/** The staff id. */
	private String staffId;

	private String fileTempName;

	private String fileType;

	private String tmpPar;
	
	public ReportInput(String fromDate, String toDate, String shopId, String staffId, String fileTempName, String fileType, String tmpPar)
	{
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.shopId = shopId;
		this.staffId = staffId;
		this.fileTempName = fileTempName;
		this.fileType = fileType;
		this.tmpPar = tmpPar;
	}

	public ReportInput()
	{

	}

	/**
	 * Gets the from date.
	 *
	 * @return the from date
	 */
	public String getFromDate()
	{
		return fromDate;
	}

	/**
	 * Sets the from date.
	 *
	 * @param fromDate
	 *            the new from date
	 */
	public void setFromDate(String fromDate)
	{
		this.fromDate = fromDate;
	}

	/**
	 * Gets the to data.
	 *
	 * @return the to data
	 */
	public String getToDate()
	{
		return toDate;
	}

	/**
	 * Sets the to data.
	 *
	 * @param toData
	 *            the new to data
	 */
	public void setToDate(String toDate)
	{
		this.toDate = toDate;
	}

	/**
	 * Gets the shop id.
	 *
	 * @return the shop id
	 */
	public String getShopId()
	{
		return shopId;
	}

	/**
	 * Sets the shop id.
	 *
	 * @param shopId
	 *            the new shop id
	 */
	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	/**
	 * Gets the staff id.
	 *
	 * @return the staff id
	 */
	public String getStaffId()
	{
		return staffId;
	}

	/**
	 * Sets the staff id.
	 *
	 * @param staffId
	 *            the new staff id
	 */
	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

	public String getFileTempName()
	{
		return fileTempName;
	}

	public void setFileTempName(String fileTempName)
	{
		this.fileTempName = fileTempName;
	}

	public String getFileType()
	{
		return fileType;
	}

	public void setFileType(String fileType)
	{
		this.fileType = fileType;
	}

	public String getTmpPar()
	{
		return tmpPar;
	}

	public void setTmpPar(String tmpPar)
	{
		this.tmpPar = tmpPar;
	}

}
