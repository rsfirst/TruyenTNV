package vn.com.fis.model.css;

import java.util.List;

/**
 * The Class PrePaidCusSubBatch.
 */
public class PrePaidCusSubBatch implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -6486116956305565586L;

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
	
	private String customerTypeStr;

	/** The company name. */
	private String companyName;

	/** The tax code. */
	private String taxCode;

	/** The gender. */
	private String gender;

	/** The genderStr. */
	private String genderStr;
	
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

	/** The serial. */
	private String serial;

	/** The mdn. */
	private String mdn;

	/** The file id. */
	private String file_id;

	/** The file id 2. */
	private String file_id_2;
	
	//DatBD2
	private String create_user;
	private String sub_use_type;
	private String type_card;
	private String type_Card_Company;
	private String shopCode;
	private String addressCompany;
	
	private String bus_permit_no_img2;
	private String parent_img;
	
	private String transId;
	private String fileExcute;
	private String userExcute;	
	public String getUserExcute() {
		return userExcute;
	}

	public void setUserExcute(String userExcute) {
		this.userExcute = userExcute;
	}

	public String getTransId() {
		return transId;
	}

	public void setTransId(String transId) {
		this.transId = transId;
	}

	public String getFileExcute() {
		return fileExcute;
	}

	public void setFileExcute(String fileExcute) {
		this.fileExcute = fileExcute;
	}

	public String getParent_img() {
		return parent_img;
	}

	public void setParent_img(String parent_img) {
		this.parent_img = parent_img;
	}

	public String getBus_permit_no_img2() {
		return bus_permit_no_img2;
	}

	public void setBus_permit_no_img2(String bus_permit_no_img2) {
		this.bus_permit_no_img2 = bus_permit_no_img2;
	}

	public String getAddressCompany() {
		return addressCompany;
	}

	public void setAddressCompany(String addressCompany) {
		this.addressCompany = addressCompany;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public String getType_card() {
		return type_card;
	}

	public void setType_card(String type_card) {
		this.type_card = type_card;
	}

	public String getType_Card_Company() {
		return type_Card_Company;
	}

	public void setType_Card_Company(String type_Card_Company) {
		this.type_Card_Company = type_Card_Company;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getSub_use_type() {
		return sub_use_type;
	}

	public void setSub_use_type(String sub_use_type) {
		this.sub_use_type = sub_use_type;
	}

	public String getCreate_user() {
		return create_user;
	}

	public void setCreate_user(String create_user) {
		this.create_user = create_user;
	}

	public String getShop_code() {
		return shop_code;
	}

	public void setShop_code(String shop_code) {
		this.shop_code = shop_code;
	}

	private String shop_code;

	private List<AttachmentDataObject> attachmentDataObject;

	private String shopId;

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	private String status;

	private String depError;

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
	 * Gets the file id.
	 *
	 * @return the file id
	 */
	public String getFile_id()
	{
		return file_id;
	}

	/**
	 * Sets the file id.
	 *
	 * @param file_id
	 *            the new file id
	 */
	public void setFile_id(String file_id)
	{
		this.file_id = file_id;
	}

	/**
	 * Gets the file id 2.
	 *
	 * @return the file id 2
	 */
	public String getFile_id_2()
	{
		return file_id_2;
	}

	/**
	 * Sets the file id 2.
	 *
	 * @param file_id_2
	 *            the new file id 2
	 */
	public void setFile_id_2(String file_id_2)
	{
		this.file_id_2 = file_id_2;
	}

	public List<AttachmentDataObject> getAttachmentDataObject()
	{
		return attachmentDataObject;
	}

	public void setAttachmentDataObject(List<AttachmentDataObject> attachmentDataObject)
	{
		this.attachmentDataObject = attachmentDataObject;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getDepError()
	{
		return depError;
	}

	public void setDepError(String depError)
	{
		this.depError = depError;
	}

	public String getGenderStr()
	{
		return genderStr;
	}

	public void setGenderStr(String genderStr)
	{
		this.genderStr = genderStr;
	}

	public String getCustomerTypeStr()
	{
		return customerTypeStr;
	}

	public void setCustomerTypeStr(String customerTypeStr)
	{
		this.customerTypeStr = customerTypeStr;
	}
}
