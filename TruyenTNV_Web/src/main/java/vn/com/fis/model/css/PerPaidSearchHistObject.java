package vn.com.fis.model.css;

/**
 * The Class PerPaidSearchHistObject.
 */
public class PerPaidSearchHistObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -4693606970701803421L;

	/** The mdn. */
	private String mdn;

	/** The tax code. */
	private String taxCode;

	/** The card id. */
	private String cardId;

	/** The serial. */
	private String serial;

	/** The from date. */
	private String fromDate;

	/** The to date. */
	private String toDate;

	/** The shop id. */
	private String shopId;

	private String customerType;

	/**
	 * Gets the mdn.
	 *
	 * @return the mdn
	 */
	public String getMdn()
	{
		return mdn;
	}

	/**
	 * Sets the mdn.
	 *
	 * @param mdn
	 *            the new mdn
	 */
	public void setMdn(String mdn)
	{
		this.mdn = mdn;
	}

	/**
	 * Gets the tax code.
	 *
	 * @return the tax code
	 */
	public String getTaxCode()
	{
		return taxCode;
	}

	/**
	 * Sets the tax code.
	 *
	 * @param taxCode
	 *            the new tax code
	 */
	public void setTaxCode(String taxCode)
	{
		this.taxCode = taxCode;
	}

	/**
	 * Gets the card id.
	 *
	 * @return the card id
	 */
	public String getCardId()
	{
		return cardId;
	}

	/**
	 * Sets the card id.
	 *
	 * @param cardId
	 *            the new card id
	 */
	public void setCardId(String cardId)
	{
		this.cardId = cardId;
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
	 * Gets the to date.
	 *
	 * @return the to date
	 */
	public String getToDate()
	{
		return toDate;
	}

	/**
	 * Sets the to date.
	 *
	 * @param toDate
	 *            the new to date
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

	public String getCustomerType()
	{
		return customerType;
	}

	public void setCustomerType(String customerType)
	{
		this.customerType = customerType;
	}
}
