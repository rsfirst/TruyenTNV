package vn.com.fis.model.css;

/**
 * The Class DataSIMObject.
 */
public class DataSIMObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 7696633108503545601L;

	/** The imsi. */
	private String imsi;

	/** The eki. */
	private String eki;

	/** The kind. */
	private String kind;

	/** The a 3 a 8. */
	private String a3a8;

	/** The auc status. */
	private String aucStatus;

	/** The serial. */
	private String serial;

	private String hlrStatus;

	private String fset;

	public String getHlrStatus()
	{
		return hlrStatus;
	}

	public void setHlrStatus(String hlrStatus)
	{
		this.hlrStatus = hlrStatus;
	}

	/**
	 * Gets the imsi.
	 *
	 * @return the imsi
	 */
	public String getImsi()
	{
		return imsi;
	}

	/**
	 * Gets the auc status.
	 *
	 * @return the auc status
	 */
	public String getAucStatus()
	{
		return aucStatus;
	}

	/**
	 * Sets the auc status.
	 *
	 * @param aucStatus
	 *            the new auc status
	 */
	public void setAucStatus(String aucStatus)
	{
		this.aucStatus = aucStatus;
	}

	/**
	 * Gets the serial.
	 *
	 * @return the serial
	 */
	public String getSerial()
	{
		return serial;
	}

	/**
	 * Sets the serial.
	 *
	 * @param serial
	 *            the new serial
	 */
	public void setSerial(String serial)
	{
		this.serial = serial;
	}

	/**
	 * Sets the imsi.
	 *
	 * @param imsi
	 *            the new imsi
	 */
	public void setImsi(String imsi)
	{
		this.imsi = imsi;
	}

	/**
	 * Gets the eki.
	 *
	 * @return the eki
	 */
	public String getEki()
	{
		return eki;
	}

	/**
	 * Sets the eki.
	 *
	 * @param eki
	 *            the new eki
	 */
	public void setEki(String eki)
	{
		this.eki = eki;
	}

	/**
	 * Gets the kind.
	 *
	 * @return the kind
	 */
	public String getKind()
	{
		return kind;
	}

	/**
	 * Sets the kind.
	 *
	 * @param kind
	 *            the new kind
	 */
	public void setKind(String kind)
	{
		this.kind = kind;
	}

	/**
	 * Gets the a 3 a 8.
	 *
	 * @return the a 3 a 8
	 */
	public String getA3a8()
	{
		return a3a8;
	}

	/**
	 * Sets the a 3 a 8.
	 *
	 * @param a3a8
	 *            the new a 3 a 8
	 */
	public void setA3a8(String a3a8)
	{
		this.a3a8 = a3a8;
	}

	public String getFset()
	{
		return fset;
	}

	public void setFset(String fset)
	{
		this.fset = fset;
	}

}
