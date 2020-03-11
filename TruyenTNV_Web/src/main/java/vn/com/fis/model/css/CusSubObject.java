package vn.com.fis.model.css;

import java.util.List;

import vn.com.fis.tibco.model.entity.PreSubscriber;

/**
 * The Class PerPaidSearchHistObject.
 */
public class CusSubObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 8232192367142565903L;

	/** The cus id. */
	private String cusId;

	/** The name. */
	private String name;

	/** The dob. */
	private String dob;

	/** The id card. */
	private String idCard;

	/** The tax code. */
	private String taxCode;
	//DatBD2 update
	
	private CustomerObject mcCustomer;
	

	public CustomerObject getMcCustomer() {
		return mcCustomer;
	}

	public void setMcCustomer(CustomerObject mcCustomer) {
		this.mcCustomer = mcCustomer;
	}

	/** The sub id. */
	private List<PreSubscriber> preSub;

	/**
	 * Gets the cus id.
	 *
	 * @return the cus id
	 */
	public String getCusId()
	{
		return cusId;
	}

	/**
	 * Sets the cus id.
	 *
	 * @param cusId
	 *            the new cus id
	 */
	public void setCusId(String cusId)
	{
		this.cusId = cusId;
	}

	/**
	 * Gets the pre sub.
	 *
	 * @return the pre sub
	 */
	public List<PreSubscriber> getPreSub()
	{
		return preSub;
	}

	/**
	 * Sets the pre sub.
	 *
	 * @param preSub
	 *            the new pre sub
	 */
	public void setPreSub(List<PreSubscriber> preSub)
	{
		this.preSub = preSub;
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
