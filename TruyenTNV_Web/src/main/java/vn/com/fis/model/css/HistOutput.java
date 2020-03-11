package vn.com.fis.model.css;

import java.util.List;

/**
 * The Class CustomerResponse.
 */
public class HistOutput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -201605895296291613L;

	/** The name. */
	private String name;

	/** The dob. */
	private String dob;

	/** The id card. */
	private String idCard;

	/** The tax code. */
	private String taxCode;

	//DatBD2
	private CustomerObject mcCustomer;
	
	public CustomerObject getMcCustomer() {
		return mcCustomer;
	}

	public void setMcCustomer(CustomerObject mcCustomer) {
		this.mcCustomer = mcCustomer;
	}

	/** The cus hist. */
	
	
	private List<CusHistOutput> cusHist;

	/** The sub hist. */
	private List<SubHistOutput> subHist;

	/**
	 * Gets the cus hist.
	 *
	 * @return the cus hist
	 */
	public List<CusHistOutput> getCusHist()
	{
		return cusHist;
	}

	/**
	 * Sets the cus hist.
	 *
	 * @param cusHist
	 *            the new cus hist
	 */
	public void setCusHist(List<CusHistOutput> cusHist)
	{
		this.cusHist = cusHist;
	}

	/**
	 * Gets the sub hist.
	 *
	 * @return the sub hist
	 */
	public List<SubHistOutput> getSubHist()
	{
		return subHist;
	}

	/**
	 * Sets the sub hist.
	 *
	 * @param subHist
	 *            the new sub hist
	 */
	public void setSubHist(List<SubHistOutput> subHist)
	{
		this.subHist = subHist;
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
	 * Gets the dob.
	 *
	 * @return the dob
	 */
	public String getDob()
	{
		return dob;
	}

	/**
	 * Sets the dob.
	 *
	 * @param dob
	 *            the new dob
	 */
	public void setDob(String dob)
	{
		this.dob = dob;
	}

	/**
	 * Gets the id card.
	 *
	 * @return the id card
	 */
	public String getIdCard()
	{
		return idCard;
	}

	/**
	 * Sets the id card.
	 *
	 * @param idCard
	 *            the new id card
	 */
	public void setIdCard(String idCard)
	{
		this.idCard = idCard;
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
}
