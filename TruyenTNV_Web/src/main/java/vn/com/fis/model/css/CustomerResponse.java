package vn.com.fis.model.css;

import java.sql.Date;

/**
 * The Class CustomerResponse.
 */
public class CustomerResponse implements java.io.Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 139981079536358013L;

	/** The customer id. */
	private long customerId;

	/** The full name. */
	private String fullName;

	/** The dob. */
	private Date dob;

	/** The id card. */
	private String idCard;

	/** The country. */
	private String country;

	/** The province. */
	private String province;

	/** The district. */
	private String district;

	/** The address. */
	private String address;

	/** The company name. */
	private String companyName;

	/** The first name. */
	private String firstName;

	/** The last name. */
	private String lastName;

	/** The place of issue. */
	private String placeOfIssue;

	/** The date of issue. */
	private Date dateOfIssue;

	/** The region. */
	private String region;

	/** The customer type. */
	private String customerType;

	/** The stock created. */
	private int stockCreated;

	/** The date created. */
	private Date dateCreated;

	/** The last modify. */
	private Date lastModify;

	/** The stock modified. */
	private int stockModified;

	/** The sv customer node id. */
	private Long svCustomerNodeId;

	/** The tax code. */
	private String taxCode;

	/** The gender. */
	private String gender;

	/** The cust img. */
	private String cust_img;

	/** The bus permit no img 1. */
	private String bus_permit_no_img1;

	/** The contract img 1. */
	private String contract_img1;

	/** The contract img 2. */
	private String contract_img2;

	/** The authorized img. */
	private String authorized_img;

	/** The img id. */
	private String img_id;

	/** The img id 2. */
	private String img_id_2;

	/**
	 * Instantiates a new customer response.
	 *
	 * @param customerId
	 *            the customer id
	 * @param fullName
	 *            the full name
	 * @param dob
	 *            the dob
	 * @param idCard
	 *            the id card
	 * @param country
	 *            the country
	 * @param province
	 *            the province
	 * @param district
	 *            the district
	 * @param address
	 *            the address
	 * @param companyName
	 *            the company name
	 */
	public CustomerResponse(long customerId, String fullName, Date dob, String idCard, String country, String province, String district, String address,
			String companyName)
	{
		this.customerId = customerId;
		this.fullName = fullName;
		this.dob = dob;
		this.idCard = idCard;
		this.country = country;
		this.province = province;
		this.district = district;
		this.address = address;
		this.companyName = companyName;
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
	 * Gets the dob.
	 *
	 * @return the dob
	 */
	public Date getDob()
	{
		return dob;
	}

	/**
	 * Sets the dob.
	 *
	 * @param dob
	 *            the new dob
	 */
	public void setDob(Date dob)
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
	 * Gets the country.
	 *
	 * @return the country
	 */
	public String getCountry()
	{
		return country;
	}

	/**
	 * Sets the country.
	 *
	 * @param country
	 *            the new country
	 */
	public void setCountry(String country)
	{
		this.country = country;
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
	 * Gets the company name.
	 *
	 * @return the company name
	 */
	public String getCompanyName()
	{
		return companyName;
	}

	/**
	 * Sets the company name.
	 *
	 * @param companyName
	 *            the new company name
	 */
	public void setCompanyName(String companyName)
	{
		this.companyName = companyName;
	}

	/**
	 * Gets the customer id.
	 *
	 * @return the customer id
	 */
	public long getCustomerId()
	{
		return customerId;
	}

	/**
	 * Sets the customer id.
	 *
	 * @param customerId
	 *            the new customer id
	 */
	public void setCustomerId(long customerId)
	{
		this.customerId = customerId;
	}

	/**
	 * Gets the first name.
	 *
	 * @return the first name
	 */
	public String getFirstName()
	{
		return firstName;
	}

	/**
	 * Sets the first name.
	 *
	 * @param firstName
	 *            the new first name
	 */
	public void setFirstName(String firstName)
	{
		this.firstName = firstName;
	}

	/**
	 * Gets the last name.
	 *
	 * @return the last name
	 */
	public String getLastName()
	{
		return lastName;
	}

	/**
	 * Sets the last name.
	 *
	 * @param lastName
	 *            the new last name
	 */
	public void setLastName(String lastName)
	{
		this.lastName = lastName;
	}

	/**
	 * Gets the place of issue.
	 *
	 * @return the place of issue
	 */
	public String getPlaceOfIssue()
	{
		return placeOfIssue;
	}

	/**
	 * Sets the place of issue.
	 *
	 * @param placeOfIssue
	 *            the new place of issue
	 */
	public void setPlaceOfIssue(String placeOfIssue)
	{
		this.placeOfIssue = placeOfIssue;
	}

	/**
	 * Gets the date of issue.
	 *
	 * @return the date of issue
	 */
	public Date getDateOfIssue()
	{
		return dateOfIssue;
	}

	/**
	 * Sets the date of issue.
	 *
	 * @param dateOfIssue
	 *            the new date of issue
	 */
	public void setDateOfIssue(Date dateOfIssue)
	{
		this.dateOfIssue = dateOfIssue;
	}

	/**
	 * Gets the region.
	 *
	 * @return the region
	 */
	public String getRegion()
	{
		return region;
	}

	/**
	 * Sets the region.
	 *
	 * @param region
	 *            the new region
	 */
	public void setRegion(String region)
	{
		this.region = region;
	}

	/**
	 * Gets the customer type.
	 *
	 * @return the customer type
	 */
	public String getCustomerType()
	{
		return customerType;
	}

	/**
	 * Sets the customer type.
	 *
	 * @param customerType
	 *            the new customer type
	 */
	public void setCustomerType(String customerType)
	{
		this.customerType = customerType;
	}

	/**
	 * Gets the stock created.
	 *
	 * @return the stock created
	 */
	public int getStockCreated()
	{
		return stockCreated;
	}

	/**
	 * Sets the stock created.
	 *
	 * @param stockCreated
	 *            the new stock created
	 */
	public void setStockCreated(int stockCreated)
	{
		this.stockCreated = stockCreated;
	}

	/**
	 * Gets the date created.
	 *
	 * @return the date created
	 */
	public Date getDateCreated()
	{
		return dateCreated;
	}

	/**
	 * Sets the date created.
	 *
	 * @param dateCreated
	 *            the new date created
	 */
	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	/**
	 * Gets the last modify.
	 *
	 * @return the last modify
	 */
	public Date getLastModify()
	{
		return lastModify;
	}

	/**
	 * Sets the last modify.
	 *
	 * @param lastModify
	 *            the new last modify
	 */
	public void setLastModify(Date lastModify)
	{
		this.lastModify = lastModify;
	}

	/**
	 * Gets the stock modified.
	 *
	 * @return the stock modified
	 */
	public int getStockModified()
	{
		return stockModified;
	}

	/**
	 * Sets the stock modified.
	 *
	 * @param stockModified
	 *            the new stock modified
	 */
	public void setStockModified(int stockModified)
	{
		this.stockModified = stockModified;
	}

	/**
	 * Gets the sv customer node id.
	 *
	 * @return the sv customer node id
	 */
	public Long getSvCustomerNodeId()
	{
		return svCustomerNodeId;
	}

	/**
	 * Sets the sv customer node id.
	 *
	 * @param svCustomerNodeId
	 *            the new sv customer node id
	 */
	public void setSvCustomerNodeId(Long svCustomerNodeId)
	{
		this.svCustomerNodeId = svCustomerNodeId;
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
	 * Gets the gender.
	 *
	 * @return the gender
	 */
	public String getGender()
	{
		return gender;
	}

	/**
	 * Sets the gender.
	 *
	 * @param gender
	 *            the new gender
	 */
	public void setGender(String gender)
	{
		this.gender = gender;
	}

	/**
	 * Gets the cust img.
	 *
	 * @return the cust img
	 */
	public String getCust_img()
	{
		return cust_img;
	}

	/**
	 * Sets the cust img.
	 *
	 * @param cust_img
	 *            the new cust img
	 */
	public void setCust_img(String cust_img)
	{
		this.cust_img = cust_img;
	}

	/**
	 * Gets the bus permit no img 1.
	 *
	 * @return the bus permit no img 1
	 */
	public String getBus_permit_no_img1()
	{
		return bus_permit_no_img1;
	}

	/**
	 * Sets the bus permit no img 1.
	 *
	 * @param bus_permit_no_img1
	 *            the new bus permit no img 1
	 */
	public void setBus_permit_no_img1(String bus_permit_no_img1)
	{
		this.bus_permit_no_img1 = bus_permit_no_img1;
	}

	/**
	 * Gets the contract img 1.
	 *
	 * @return the contract img 1
	 */
	public String getContract_img1()
	{
		return contract_img1;
	}

	/**
	 * Sets the contract img 1.
	 *
	 * @param contract_img1
	 *            the new contract img 1
	 */
	public void setContract_img1(String contract_img1)
	{
		this.contract_img1 = contract_img1;
	}

	/**
	 * Gets the contract img 2.
	 *
	 * @return the contract img 2
	 */
	public String getContract_img2()
	{
		return contract_img2;
	}

	/**
	 * Sets the contract img 2.
	 *
	 * @param contract_img2
	 *            the new contract img 2
	 */
	public void setContract_img2(String contract_img2)
	{
		this.contract_img2 = contract_img2;
	}

	/**
	 * Gets the authorized img.
	 *
	 * @return the authorized img
	 */
	public String getAuthorized_img()
	{
		return authorized_img;
	}

	/**
	 * Sets the authorized img.
	 *
	 * @param authorized_img
	 *            the new authorized img
	 */
	public void setAuthorized_img(String authorized_img)
	{
		this.authorized_img = authorized_img;
	}

	/**
	 * Gets the img id.
	 *
	 * @return the img id
	 */
	public String getImg_id()
	{
		return img_id;
	}

	/**
	 * Sets the img id.
	 *
	 * @param img_id
	 *            the new img id
	 */
	public void setImg_id(String img_id)
	{
		this.img_id = img_id;
	}

	/**
	 * Gets the img id 2.
	 *
	 * @return the img id 2
	 */
	public String getImg_id_2()
	{
		return img_id_2;
	}

	/**
	 * Sets the img id 2.
	 *
	 * @param img_id_2
	 *            the new img id 2
	 */
	public void setImg_id_2(String img_id_2)
	{
		this.img_id_2 = img_id_2;
	}

}
