package vn.com.fis.model.css;

// TODO: Auto-generated Javadoc
/**
 * The Class PerPaidSearchCustomerOutput.
 */
public class PerPaidSearchCustomerOutput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -5985294327507149033L;

	/** The customer id. */
	private String customerId;

	/** The full name. */
	private String fullName;

	/** The id card. */
	private String idCard;

	/** The address. */
	private String address;

	/** The subscriber id. */
	private String subscriberId;

	/** The mdn. */
	private String mdn;

	/** The dob. */
	private String dob;

	/** The province. */
	private String province;

	/** The district. */
	private String district;

	private String customerType;
	
	private String parent_customer_id;
	
	private String companyName;
	

	/**
	 * @return the companyName
	 */
	public String getCompanyName()
	{
		return companyName;
	}

	/**
	 * @param companyName the companyName to set
	 */
	public void setCompanyName(String companyName)
	{
		this.companyName = companyName;
	}

	/**
	 * @return the parent_customer_id
	 */
	public String getParent_customer_id()
	{
		return parent_customer_id;
	}

	/**
	 * @param parent_customer_id the parent_customer_id to set
	 */
	public void setParent_customer_id(String parent_customer_id)
	{
		this.parent_customer_id = parent_customer_id;
	}

	/**
	 * Instantiates a new per paid search customer output.
	 */
	public PerPaidSearchCustomerOutput()
	{

	}

	/**
	 * Instantiates a new per paid search customer output.
	 *
	 * @param customerId
	 *            the customer id
	 * @param fullName
	 *            the full name
	 * @param idCard
	 *            the id card
	 * @param address
	 *            the address
	 * @param subscriberId
	 *            the subscriber id
	 * @param mdn
	 *            the mdn
	 * @param dob
	 *            the dob
	 * @param province
	 *            the province
	 * @param district
	 *            the district
	 */
	public PerPaidSearchCustomerOutput(String customerId, String fullName, String idCard, String address, String dob, String province, String district,
			String customerType, String parent_customer_id, String companyName)
	{
		this.customerId = customerId;
		this.fullName = fullName;
		this.idCard = idCard;
		this.address = address;
		this.dob = dob;
		this.province = province;
		this.district = district;
		this.customerType = customerType;
		this.parent_customer_id = parent_customer_id;
		this.companyName = companyName;
	}

	/**
	 * Gets the customer id.
	 *
	 * @return the customer id
	 */
	public String getCustomerId()
	{
		return customerId;
	}

	/**
	 * Sets the customer id.
	 *
	 * @param customerId
	 *            the new customer id
	 */
	public void setCustomerId(String customerId)
	{
		this.customerId = customerId;
	}

	/**
	 * Gets the full name.
	 *
	 * @return the full name
	 */
	public String getFullName()
	{
		return fullName;
	}

	/**
	 * Sets the full name.
	 *
	 * @param fullName
	 *            the new full name
	 */
	public void setFullName(String fullName)
	{
		this.fullName = fullName;
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
	 * Gets the address.
	 *
	 * @return the address
	 */
	public String getAddress()
	{
		return address;
	}

	/**
	 * Sets the address.
	 *
	 * @param address
	 *            the new address
	 */
	public void setAddress(String address)
	{
		this.address = address;
	}

	/**
	 * Gets the subscriber id.
	 *
	 * @return the subscriber id
	 */
	public String getSubscriberId()
	{
		return subscriberId;
	}

	/**
	 * Sets the subscriber id.
	 *
	 * @param subscriberId
	 *            the new subscriber id
	 */
	public void setSubscriberId(String subscriberId)
	{
		this.subscriberId = subscriberId;
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
	 * Gets the province.
	 *
	 * @return the province
	 */
	public String getProvince()
	{
		return province;
	}

	/**
	 * Sets the province.
	 *
	 * @param province
	 *            the new province
	 */
	public void setProvince(String province)
	{
		this.province = province;
	}

	/**
	 * Gets the district.
	 *
	 * @return the district
	 */
	public String getDistrict()
	{
		return district;
	}

	/**
	 * Sets the district.
	 *
	 * @param district
	 *            the new district
	 */
	public void setDistrict(String district)
	{
		this.district = district;
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
