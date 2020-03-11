package vn.com.fis.model.css;

import java.sql.Date;
import java.sql.SQLData;
import java.sql.SQLException;
import java.sql.SQLInput;
import java.sql.SQLOutput;

// TODO: Auto-generated Javadoc
/**
 * The Class CustomerSQLData_1.
 */
public class CustomerSQLData_1 implements SQLData
{

	/** The sql type. */
	private String sql_type = "EPOS2.CUST_IN_OBJ_2";

	/** The customer id. */
	protected String customerId;

	/** The first name. */
	protected String firstName;

	/** The last name. */
	protected String lastName;

	/** The full name. */
	protected String fullName;

	/** The dob. */
	protected Date dob;

	/** The id card. */
	protected String idCard;

	/** The place of issue. */
	protected String placeOfIssue;

	/** The date of issue. */
	protected Date dateOfIssue;

	/** The country. */
	protected String country;

	/** The region. */
	protected String region;

	/** The province. */
	protected String province;

	/** The district. */
	protected String district;

	/** The address. */
	protected String address;

	/** The customer type. */
	protected String customerType;

	/** The company name. */
	protected String companyName;

	/** The stock created. */
	protected String stockCreated;

	/** The date created. */
	protected Date dateCreated;

	/** The last modify. */
	protected Date lastModify;

	/** The stock modified. */
	protected String stockModified;

	/** The sv customer node id. */
	protected String svCustomerNodeId;

	/** The tax code. */
	protected String taxCode;

	/** The gender. */
	protected String gender;

	/** The img ID. */
	protected String imgID;

	/** The img I D 2. */
	protected String imgID_2;

	/** The cust img. */
	protected String cust_img;

	/** The bus permit no img 1. */
	protected String bus_permit_no_img1;

	/** The contract img 1. */
	protected String contract_img1;

	/** The contract img 2. */
	protected String contract_img2;

	/** The authorized img. */
	protected String authorized_img;

	protected String type_card;
	protected String parent_customer_id;
	protected String type_card_company;
	protected String file_id;
	protected String bus_permit_no_img2;
	protected String parent_img;
	protected String address_company;

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#getSQLTypeName()
	 */
	public String getSQLTypeName() throws SQLException
	{
		return this.sql_type;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#readSQL(java.sql.SQLInput, java.lang.String)
	 */
	public void readSQL(SQLInput stream, String typeName) throws SQLException
	{
		this.sql_type = typeName;
		this.customerId = stream.readString();
		this.firstName = stream.readString();
		this.lastName = stream.readString();
		this.fullName = stream.readString();
		this.dob = stream.readDate();
		this.idCard = stream.readString();
		this.placeOfIssue = stream.readString();
		this.dateOfIssue = stream.readDate();
		this.country = stream.readString();
		this.region = stream.readString();
		this.province = stream.readString();
		this.district = stream.readString();
		this.address = stream.readString();
		this.customerType = stream.readString();
		this.companyName = stream.readString();
		this.stockCreated = stream.readString();
		this.dateCreated = stream.readDate();
		this.lastModify = stream.readDate();
		this.stockModified = stream.readString();
		this.svCustomerNodeId = stream.readString();
		this.taxCode = stream.readString();
		this.gender = stream.readString();
		this.imgID = stream.readString();
		this.imgID_2 = stream.readString();
		this.cust_img = stream.readString();
		this.bus_permit_no_img1 = stream.readString();
		this.contract_img1 = stream.readString();
		this.contract_img2 = stream.readString();
		this.authorized_img = stream.readString();
		this.type_card = stream.readString();
		this.parent_customer_id = stream.readString();
		this.type_card_company = stream.readString();
		this.file_id = stream.readString();
		this.bus_permit_no_img2 = stream.readString();
		this.address_company = stream.readString();
		this.parent_img = stream.readString();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#writeSQL(java.sql.SQLOutput)
	 */
	public void writeSQL(SQLOutput stream) throws SQLException
	{
		stream.writeString(this.customerId);
		stream.writeString(this.firstName);
		stream.writeString(this.lastName);
		stream.writeString(this.fullName);
		stream.writeDate(this.dob);
		stream.writeString(this.idCard);
		stream.writeString(this.placeOfIssue);
		stream.writeDate(this.dateOfIssue);
		stream.writeString(this.country);
		stream.writeString(this.region);
		stream.writeString(this.province);
		stream.writeString(this.district);
		stream.writeString(this.address);
		stream.writeString(this.customerType);
		stream.writeString(this.companyName);
		stream.writeString(this.stockCreated);
		stream.writeDate(this.dateCreated);
		stream.writeDate(this.lastModify);
		stream.writeString(this.stockModified);
		stream.writeString(this.svCustomerNodeId);
		stream.writeString(this.taxCode);
		stream.writeString(this.gender);
		stream.writeString(this.imgID);
		stream.writeString(this.imgID_2);
		stream.writeString(this.cust_img);
		stream.writeString(this.bus_permit_no_img1);
		stream.writeString(this.contract_img1);
		stream.writeString(this.contract_img2);
		stream.writeString(this.authorized_img);
		stream.writeString(this.type_card);
		stream.writeString(this.parent_customer_id);
		stream.writeString(this.type_card_company);
		stream.writeString(this.file_id);
		stream.writeString(this.bus_permit_no_img2);
		stream.writeString(this.address_company);
		stream.writeString(this.parent_img);
	}

	
	/**
	 * @return the parent_img
	 */
	public String getParent_img()
	{
		return parent_img;
	}

	/**
	 * @param parent_img the parent_img to set
	 */
	public void setParent_img(String parent_img)
	{
		this.parent_img = parent_img;
	}

	/**
	 * @return the address_company
	 */
	public String getAddress_company()
	{
		return address_company;
	}

	/**
	 * @param address_company the address_company to set
	 */
	public void setAddress_company(String address_company)
	{
		this.address_company = address_company;
	}

	/**
	 * Sets the img I D 2.
	 *
	 * @param imgID_2
	 *            the new img I D 2
	 */
	public void setImgID_2(String imgID_2)
	{
		this.imgID_2 = imgID_2;
	}

	/**
	 * Gets the img I D 2.
	 *
	 * @return the img I D 2
	 */
	public String getImgID_2()
	{
		return imgID_2;
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
	 * Gets the customer id.
	 *
	 * @return the customer id
	 */
	public String getCustomerId()
	{
		return customerId;
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
	 * Gets the first name.
	 *
	 * @return the first name
	 */
	public String getFirstName()
	{
		return firstName;
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
	 * Gets the last name.
	 *
	 * @return the last name
	 */
	public String getLastName()
	{
		return lastName;
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
	 * Gets the full name.
	 *
	 * @return the full name
	 */
	public String getFullName()
	{
		return fullName;
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
	 * Gets the dob.
	 *
	 * @return the dob
	 */
	public Date getDob()
	{
		return dob;
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
	 * Gets the id card.
	 *
	 * @return the id card
	 */
	public String getIdCard()
	{
		return idCard;
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
	 * Gets the place of issue.
	 *
	 * @return the place of issue
	 */
	public String getPlaceOfIssue()
	{
		return placeOfIssue;
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
	 * Gets the date of issue.
	 *
	 * @return the date of issue
	 */
	public Date getDateOfIssue()
	{
		return dateOfIssue;
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
	 * Gets the country.
	 *
	 * @return the country
	 */
	public String getCountry()
	{
		return country;
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
	 * Gets the region.
	 *
	 * @return the region
	 */
	public String getRegion()
	{
		return region;
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
	 * Gets the province.
	 *
	 * @return the province
	 */
	public String getProvince()
	{
		return province;
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
	 * Gets the district.
	 *
	 * @return the district
	 */
	public String getDistrict()
	{
		return district;
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
	 * Gets the address.
	 *
	 * @return the address
	 */
	public String getAddress()
	{
		return address;
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
	 * Gets the customer type.
	 *
	 * @return the customer type
	 */
	public String getCustomerType()
	{
		return customerType;
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
	 * Gets the company name.
	 *
	 * @return the company name
	 */
	public String getCompanyName()
	{
		return companyName;
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
	 * Gets the stock created.
	 *
	 * @return the stock created
	 */
	public String getStockCreated()
	{
		return stockCreated;
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
	 * Gets the date created.
	 *
	 * @return the date created
	 */
	public Date getDateCreated()
	{
		return dateCreated;
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
	 * Gets the last modify.
	 *
	 * @return the last modify
	 */
	public Date getLastModify()
	{
		return lastModify;
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
	 * Gets the stock modified.
	 *
	 * @return the stock modified
	 */
	public String getStockModified()
	{
		return stockModified;
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
	 * Gets the sv customer node id.
	 *
	 * @return the sv customer node id
	 */
	public String getSvCustomerNodeId()
	{
		return svCustomerNodeId;
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
	 * Gets the tax code.
	 *
	 * @return the tax code
	 */
	public String getTaxCode()
	{
		return taxCode;
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
	 * Gets the gender.
	 *
	 * @return the gender
	 */
	public String getGender()
	{
		return gender;
	}

	/**
	 * Sets the img ID.
	 *
	 * @param imgID
	 *            the new img ID
	 */
	public void setImgID(String imgID)
	{
		this.imgID = imgID;
	}

	/**
	 * Gets the img ID.
	 *
	 * @return the img ID
	 */
	public String getImgID()
	{
		return imgID;
	}

	/**
	 * Gets the cust img.
	 *
	 * @return the cust_img
	 */
	public String getCust_img()
	{
		return cust_img;
	}

	/**
	 * Sets the cust img.
	 *
	 * @param cust_img
	 *            the cust_img to set
	 */
	public void setCust_img(String cust_img)
	{
		this.cust_img = cust_img;
	}

	/**
	 * Gets the bus permit no img 1.
	 *
	 * @return the bus_permit_no_img1
	 */
	public String getBus_permit_no_img1()
	{
		return bus_permit_no_img1;
	}

	/**
	 * Sets the bus permit no img 1.
	 *
	 * @param bus_permit_no_img1
	 *            the bus_permit_no_img1 to set
	 */
	public void setBus_permit_no_img1(String bus_permit_no_img1)
	{
		this.bus_permit_no_img1 = bus_permit_no_img1;
	}

	/**
	 * Gets the contract img 1.
	 *
	 * @return the contract_img1
	 */
	public String getContract_img1()
	{
		return contract_img1;
	}

	/**
	 * Sets the contract img 1.
	 *
	 * @param contract_img1
	 *            the contract_img1 to set
	 */
	public void setContract_img1(String contract_img1)
	{
		this.contract_img1 = contract_img1;
	}

	/**
	 * Gets the contract img 2.
	 *
	 * @return the contract_img2
	 */
	public String getContract_img2()
	{
		return contract_img2;
	}

	/**
	 * Sets the contract img 2.
	 *
	 * @param contract_img2
	 *            the contract_img2 to set
	 */
	public void setContract_img2(String contract_img2)
	{
		this.contract_img2 = contract_img2;
	}

	/**
	 * Gets the authorized img.
	 *
	 * @return the authorized_img
	 */
	public String getAuthorized_img()
	{
		return authorized_img;
	}

	/**
	 * Sets the authorized img.
	 *
	 * @param authorized_img
	 *            the authorized_img to set
	 */
	public void setAuthorized_img(String authorized_img)
	{
		this.authorized_img = authorized_img;
	}

	/**
	 * @return the type_card
	 */
	public String getType_card()
	{
		return type_card;
	}

	/**
	 * @param type_card
	 *            the type_card to set
	 */
	public void setType_card(String type_card)
	{
		this.type_card = type_card;
	}

	/**
	 * @return the parent_customer_id
	 */
	public String getParent_customer_id()
	{
		return parent_customer_id;
	}

	/**
	 * @param parent_customer_id
	 *            the parent_customer_id to set
	 */
	public void setParent_customer_id(String parent_customer_id)
	{
		this.parent_customer_id = parent_customer_id;
	}

	/**
	 * @return the type_card_company
	 */
	public String getType_card_company()
	{
		return type_card_company;
	}

	/**
	 * @param type_card_company
	 *            the type_card_company to set
	 */
	public void setType_card_company(String type_card_company)
	{
		this.type_card_company = type_card_company;
	}

	/**
	 * @return the file_id
	 */
	public String getFile_id()
	{
		return file_id;
	}

	/**
	 * @param file_id
	 *            the file_id to set
	 */
	public void setFile_id(String file_id)
	{
		this.file_id = file_id;
	}

	/**
	 * @return the bus_permit_no_img2
	 */
	public String getBus_permit_no_img2()
	{
		return bus_permit_no_img2;
	}

	/**
	 * @param bus_permit_no_img2
	 *            the bus_permit_no_img2 to set
	 */
	public void setBus_permit_no_img2(String bus_permit_no_img2)
	{
		this.bus_permit_no_img2 = bus_permit_no_img2;
	}

}
