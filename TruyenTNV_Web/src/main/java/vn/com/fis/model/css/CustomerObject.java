package vn.com.fis.model.css;

/**
 * The Class CustomerResponse.
 */
public class CustomerObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 4613581334105087543L;

	/** The dob. */
	private String dob;

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
	private String dateOfIssue;

	/** The customer type. */
	private String customerType;

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
	
	//DatBD2
	private String file_id1;
	private String file_id2;
	
	private String subUseType;
	
	private String parent_img;
	private String bus_permit_no_img2;
	
	//end

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
	 * @return the bus_permit_no_img2
	 */
	public String getBus_permit_no_img2()
	{
		return bus_permit_no_img2;
	}

	/**
	 * @param bus_permit_no_img2 the bus_permit_no_img2 to set
	 */
	public void setBus_permit_no_img2(String bus_permit_no_img2)
	{
		this.bus_permit_no_img2 = bus_permit_no_img2;
	}

	public String getSubUseType() {
		return subUseType;
	}

	public void setSubUseType(String subUseType) {
		this.subUseType = subUseType;
	}

	public String getFile_id1() {
		return file_id1;
	}

	public void setFile_id1(String file_id1) {
		this.file_id1 = file_id1;
	}

	public String getFile_id2() {
		return file_id2;
	}

	public void setFile_id2(String file_id2) {
		this.file_id2 = file_id2;
	}

	/** The authorized img. */
	private String authorized_img;

	/** The img id. */
	private String img_id;
	
	/** The imgCmgs. */
	private String imgCmgs;

	/** The img id 2. */
	private String img_id_2;

	/** The shop id. */
	private String shopId;

	/** The region. */
	private String region;

	/** The customer id. */
	private String customerId;

	/** The comment. */
	private String comment;
	
	/** The old idno img. */
	private String old_idno_img;
	
	/** The old idno 2 img. */
	private String old_idno_2_img;
	
	/** The ck img. */
	private String ck_img;
	
	private String isdn;
	
	private String type_card;
	
	private String parent_customer_id;
	
	private String type_card_company;
	
	private String address_company;
	
	private String customerTypeChange;
	
	/**
	 * @return the customerTypeChange
	 */
	public String getCustomerTypeChange()
	{
		return customerTypeChange;
	}

	/**
	 * @param customerTypeChange the customerTypeChange to set
	 */
	public void setCustomerTypeChange(String customerTypeChange)
	{
		this.customerTypeChange = customerTypeChange;
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

	public String getType_card()
	{
		return type_card;
	}

	public void setType_card(String type_card)
	{
		this.type_card = type_card;
	}

	public String getParent_customer_id()
	{
		return parent_customer_id;
	}

	public void setParent_customer_id(String parent_customer_id)
	{
		this.parent_customer_id = parent_customer_id;
	}

	public String getType_card_company()
	{
		return type_card_company;
	}

	public void setType_card_company(String type_card_company)
	{
		this.type_card_company = type_card_company;
	}

	public String getIsdn()
	{
		return isdn;
	}

	public void setIsdn(String isdn)
	{
		this.isdn = isdn;
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
	 * @param shopId the new shop id
	 */
	public void setShopId(String shopId)
	{
		this.shopId = shopId;
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
	 * @param region the new region
	 */
	public void setRegion(String region)
	{
		this.region = region;
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
	 * @param customerId the new customer id
	 */
	public void setCustomerId(String customerId)
	{
		this.customerId = customerId;
	}

	/**
	 * Gets the comment.
	 *
	 * @return the comment
	 */
	public String getComment()
	{
		return comment;
	}

	/**
	 * Sets the comment.
	 *
	 * @param comment the new comment
	 */
	public void setComment(String comment)
	{
		this.comment = comment;
	}

	/**
	 * Gets the old idno img.
	 *
	 * @return the old idno img
	 */
	public String getOld_idno_img() {
		return old_idno_img;
	}

	/**
	 * Sets the old idno img.
	 *
	 * @param old_idno_img the new old idno img
	 */
	public void setOld_idno_img(String old_idno_img) {
		this.old_idno_img = old_idno_img;
	}

	/**
	 * Gets the old idno 2 img.
	 *
	 * @return the old idno 2 img
	 */
	public String getOld_idno_2_img() {
		return old_idno_2_img;
	}

	/**
	 * Sets the old idno 2 img.
	 *
	 * @param old_idno_2_img the new old idno 2 img
	 */
	public void setOld_idno_2_img(String old_idno_2_img) {
		this.old_idno_2_img = old_idno_2_img;
	}

	/**
	 * Gets the ck img.
	 *
	 * @return the ck img
	 */
	public String getCk_img() {
		return ck_img;
	}

	/**
	 * Sets the ck img.
	 *
	 * @param ck_img the new ck img
	 */
	public void setCk_img(String ck_img) {
		this.ck_img = ck_img;
	}

	/**
	 * Gets the img cmgs.
	 *
	 * @return the img cmgs
	 */
	public String getImgCmgs()
	{
		return imgCmgs;
	}

	/**
	 * Sets the img cmgs.
	 *
	 * @param imgCmgs the new img cmgs
	 */
	public void setImgCmgs(String imgCmgs)
	{
		this.imgCmgs = imgCmgs;
	}
	
}
