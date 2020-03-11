package vn.com.fis.model.css;

/**
 * The Class PerPaidSearchCustomerInput.
 */
public class PerPaidSearchCustomerInput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 6067086922247878937L;

	/** The mdn. */
	private String mdn;

	/** The name. */
	private String name;

	/** The tax. */
	private String tax;

	/** The card. */
	private String card;

	/** The sim number. */
	private String simNumber;

	private String customerType;

	private String shopId;

	private String typeCard;

	private String typeCardCompany;

	public String getTypeCardCompany()
	{
		return typeCardCompany;
	}

	public void setTypeCardCompany(String typeCardCompany)
	{
		this.typeCardCompany = typeCardCompany;
	}

	/**
	 * @return the typeCard
	 */
	public String getTypeCard()
	{
		return typeCard;
	}

	/**
	 * @param typeCard
	 *            the typeCard to set
	 */
	public void setTypeCard(String typeCard)
	{
		this.typeCard = typeCard;
	}

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

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
	 * Gets the name.
	 *
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name
	 *            the new name
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * Gets the tax.
	 *
	 * @return the tax
	 */
	public String getTax()
	{
		return tax;
	}

	/**
	 * Sets the tax.
	 *
	 * @param tax
	 *            the new tax
	 */
	public void setTax(String tax)
	{
		this.tax = tax;
	}

	/**
	 * Gets the card.
	 *
	 * @return the card
	 */
	public String getCard()
	{
		return card;
	}

	/**
	 * Sets the card.
	 *
	 * @param card
	 *            the new card
	 */
	public void setCard(String card)
	{
		this.card = card;
	}

	/**
	 * Gets the sim number.
	 *
	 * @return the sim number
	 */
	public String getSimNumber()
	{
		return simNumber;
	}

	/**
	 * Sets the sim number.
	 *
	 * @param simNumber
	 *            the new sim number
	 */
	public void setSimNumber(String simNumber)
	{
		this.simNumber = simNumber;
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
