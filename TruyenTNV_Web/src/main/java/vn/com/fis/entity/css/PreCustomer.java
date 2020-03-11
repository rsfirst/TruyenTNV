package vn.com.fis.entity.css;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

// TODO: Auto-generated Javadoc
/**
 * The Class PreCustomer.
 */
public class PreCustomer implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 3909822527322486067L;

	/** The customer id. */
	private String customerId;

	/** The first name. */
	private String firstName;

	/** The last name. */
	private String lastName;

	/** The full name. */
	private String fullName;

	/** The dob. */
	private String dob;

	/** The id card. */
	private String idCard;

	/** The place of issue. */
	private String placeOfIssue;

	/** The date of issue. */
	private String dateOfIssue;

	/** The country. */
	private String country;

	/** The region. */
	private String region;

	/** The province. */
	private String province;

	/** The district. */
	private String district;

	/** The address. */
	private String address;

	/** The customer type. */
	private String customerType;

	/** The company name. */
	private String companyName;

	/** The stock created. */
	private String stockCreated;

	/** The date created. */
	private String dateCreated;

	/** The last modify. */
	private String lastModify;

	/** The stock modified. */
	private String stockModified;

	/** The sv customer node id. */
	private String svCustomerNodeId;

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

	/** The subscribers. */
	private List<PreSubscriber> subscribers;

	/** The subscriber ID. */
	private String subscriberID;

	public PreCustomer()
	{
	}

	public PreCustomer(String customerId, String fullName, String idCard, String address)
	{
		this.customerId = customerId;
		this.fullName = fullName;
		this.idCard = idCard;
		this.address = address;
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
	public String getDateOfIssue()
	{
		return dateOfIssue;
	}

	/**
	 * Sets the date of issue.
	 *
	 * @param dateOfIssue
	 *            the new date of issue
	 */
	public void setDateOfIssue(String dateOfIssue)
	{
		this.dateOfIssue = dateOfIssue;
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
	 * Gets the stock created.
	 *
	 * @return the stock created
	 */
	public String getStockCreated()
	{
		return stockCreated;
	}

	/**
	 * Sets the stock created.
	 *
	 * @param stockCreated
	 *            the new stock created
	 */
	public void setStockCreated(String stockCreated)
	{
		this.stockCreated = stockCreated;
	}

	/**
	 * Gets the date created.
	 *
	 * @return the date created
	 */
	public String getDateCreated()
	{
		return dateCreated;
	}

	/**
	 * Sets the date created.
	 *
	 * @param dateCreated
	 *            the new date created
	 */
	public void setDateCreated(String dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	/**
	 * Gets the last modify.
	 *
	 * @return the last modify
	 */
	public String getLastModify()
	{
		return lastModify;
	}

	/**
	 * Sets the last modify.
	 *
	 * @param lastModify
	 *            the new last modify
	 */
	public void setLastModify(String lastModify)
	{
		this.lastModify = lastModify;
	}

	/**
	 * Gets the stock modified.
	 *
	 * @return the stock modified
	 */
	public String getStockModified()
	{
		return stockModified;
	}

	/**
	 * Sets the stock modified.
	 *
	 * @param stockModified
	 *            the new stock modified
	 */
	public void setStockModified(String stockModified)
	{
		this.stockModified = stockModified;
	}

	/**
	 * Gets the sv customer node id.
	 *
	 * @return the sv customer node id
	 */
	public String getSvCustomerNodeId()
	{
		return svCustomerNodeId;
	}

	/**
	 * Sets the sv customer node id.
	 *
	 * @param svCustomerNodeId
	 *            the new sv customer node id
	 */
	public void setSvCustomerNodeId(String svCustomerNodeId)
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

	/**
	 * Gets the subscribers.
	 *
	 * @return the subscribers
	 */
	public List<PreSubscriber> getSubscribers()
	{
		return subscribers;
	}

	/**
	 * Sets the subscribers.
	 *
	 * @param subscribers
	 *            the new subscribers
	 */
	public void setSubscribers(List<PreSubscriber> subscribers)
	{
		this.subscribers = subscribers;
	}

	/**
	 * Gets the subscriber ID.
	 *
	 * @return the subscriber ID
	 */
	public String getSubscriberID()
	{
		return subscriberID;
	}

	/**
	 * Sets the subscriber ID.
	 *
	 * @param subscriberID
	 *            the new subscriber ID
	 */
	public void setSubscriberID(String subscriberID)
	{
		this.subscriberID = subscriberID;
	}
}
