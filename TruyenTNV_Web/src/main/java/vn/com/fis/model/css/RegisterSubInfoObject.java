package vn.com.fis.model.css;

/**
 * The Class CustomerResponse.
 */
public class RegisterSubInfoObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1614426304971040867L;

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
	private String contract_CUS_img1;

	/** The contract img 2. */
	private String contract_CUS_img2;

	/** The authorized img. */
	private String authorized_img;

	/** The img id. */
	private String img_id;

	/** The img id 2. */
	private String img_id_2;

	/** The region. */
	private String region;

	/** The cos. */
	private String cos;

	/** The shopid. */
	private String shopid;

	/** The shopCode. */
	private String shopCode;

	/** The mdn. */
	private String mdn;

	/** The serial. */
	private String serial;

	/** The contract img 1. */
	private String contract_SUB_img1;

	/** The contract img 2. */
	private String contract_SUB_img2;

	/** The file ID. */
	private String fileID;

	/** The file id 2. */
	private String file_id_2;

	/** The imgCmgs. */
	private String imgCmgs;

	/** The sht number. */
	private String shtNumber;

	/** The secret code. */
	private String secretCode;

	/** The sub search output. */
	private SubSearchOutput subSearchOutput;

	private String old_idno_img;
	private String old_idno_2_img;
	private String ck_img;

	private String subUserType;
	private String subPaymentType;
	private String staffCode;
	private String type_card_company;
	private String type_card;
	private String address_company;
	private String cosName;
	private String parent_img;
	private String bus_permit_no_img2;
	
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

	/**
	 * @return the cosName
	 */
	public String getCosName()
	{
		return cosName;
	}

	/**
	 * @param cosName the cosName to set
	 */
	public void setCosName(String cosName)
	{
		this.cosName = cosName;
	}

	public String getAddress_company()
	{
		return address_company;
	}

	public void setAddress_company(String address_company)
	{
		this.address_company = address_company;
	}

	/**
	 * @return the type_card
	 */
	public String getType_card()
	{
		return type_card;
	}

	/**
	 * @param type_card the type_card to set
	 */
	public void setType_card(String type_card)
	{
		this.type_card = type_card;
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
	 * @return the subUserType
	 */
	public String getSubUserType()
	{
		return subUserType;
	}

	/**
	 * @param subUserType
	 *            the subUserType to set
	 */
	public void setSubUserType(String subUserType)
	{
		this.subUserType = subUserType;
	}

	/**
	 * @return the subPaymentType
	 */
	public String getSubPaymentType()
	{
		return subPaymentType;
	}

	/**
	 * @param subPaymentType
	 *            the subPaymentType to set
	 */
	public void setSubPaymentType(String subPaymentType)
	{
		this.subPaymentType = subPaymentType;
	}

	/**
	 * @return the staffCode
	 */
	public String getStaffCode()
	{
		return staffCode;
	}

	/**
	 * @param staffCode
	 *            the staffCode to set
	 */
	public void setStaffCode(String staffCode)
	{
		this.staffCode = staffCode;
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
	 * Gets the contract CU S img 1.
	 *
	 * @return the contract CU S img 1
	 */
	public String getContract_CUS_img1()
	{
		return contract_CUS_img1;
	}

	/**
	 * Sets the contract CU S img 1.
	 *
	 * @param contract_CUS_img1
	 *            the new contract CU S img 1
	 */
	public void setContract_CUS_img1(String contract_CUS_img1)
	{
		this.contract_CUS_img1 = contract_CUS_img1;
	}

	/**
	 * Gets the contract CU S img 2.
	 *
	 * @return the contract CU S img 2
	 */
	public String getContract_CUS_img2()
	{
		return contract_CUS_img2;
	}

	/**
	 * Sets the contract CU S img 2.
	 *
	 * @param contract_CUS_img2
	 *            the new contract CU S img 2
	 */
	public void setContract_CUS_img2(String contract_CUS_img2)
	{
		this.contract_CUS_img2 = contract_CUS_img2;
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
	 * Gets the cos.
	 *
	 * @return the cos
	 */
	public String getCos()
	{
		return cos;
	}

	/**
	 * Sets the cos.
	 *
	 * @param cos
	 *            the new cos
	 */
	public void setCos(String cos)
	{
		this.cos = cos;
	}

	/**
	 * Gets the shopid.
	 *
	 * @return the shopid
	 */
	public String getShopid()
	{
		return shopid;
	}

	/**
	 * Sets the shopid.
	 *
	 * @param shopid
	 *            the new shopid
	 */
	public void setShopid(String shopid)
	{
		this.shopid = shopid;
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
	 * Gets the contract SU B img 1.
	 *
	 * @return the contract SU B img 1
	 */
	public String getContract_SUB_img1()
	{
		return contract_SUB_img1;
	}

	/**
	 * Sets the contract SU B img 1.
	 *
	 * @param contract_SUB_img1
	 *            the new contract SU B img 1
	 */
	public void setContract_SUB_img1(String contract_SUB_img1)
	{
		this.contract_SUB_img1 = contract_SUB_img1;
	}

	/**
	 * Gets the contract SU B img 2.
	 *
	 * @return the contract SU B img 2
	 */
	public String getContract_SUB_img2()
	{
		return contract_SUB_img2;
	}

	/**
	 * Sets the contract SU B img 2.
	 *
	 * @param contract_SUB_img2
	 *            the new contract SU B img 2
	 */
	public void setContract_SUB_img2(String contract_SUB_img2)
	{
		this.contract_SUB_img2 = contract_SUB_img2;
	}

	/**
	 * Gets the file ID.
	 *
	 * @return the file ID
	 */
	public String getFileID()
	{
		return fileID;
	}

	/**
	 * Sets the file ID.
	 *
	 * @param fileID
	 *            the new file ID
	 */
	public void setFileID(String fileID)
	{
		this.fileID = fileID;
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

	/**
	 * Gets the sht number.
	 *
	 * @return the sht number
	 */
	public String getShtNumber()
	{
		return shtNumber;
	}

	/**
	 * Sets the sht number.
	 *
	 * @param shtNumber
	 *            the new sht number
	 */
	public void setShtNumber(String shtNumber)
	{
		this.shtNumber = shtNumber;
	}

	/**
	 * Gets the secret code.
	 *
	 * @return the secret code
	 */
	public String getSecretCode()
	{
		return secretCode;
	}

	/**
	 * Sets the secret code.
	 *
	 * @param secretCode
	 *            the new secret code
	 */
	public void setSecretCode(String secretCode)
	{
		this.secretCode = secretCode;
	}

	/**
	 * Gets the sub search output.
	 *
	 * @return the sub search output
	 */
	public SubSearchOutput getSubSearchOutput()
	{
		return subSearchOutput;
	}

	/**
	 * Sets the sub search output.
	 *
	 * @param subSearchOutput
	 *            the new sub search output
	 */
	public void setSubSearchOutput(SubSearchOutput subSearchOutput)
	{
		this.subSearchOutput = subSearchOutput;
	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	public String getOld_idno_img()
	{
		return old_idno_img;
	}

	public void setOld_idno_img(String old_idno_img)
	{
		this.old_idno_img = old_idno_img;
	}

	public String getOld_idno_2_img()
	{
		return old_idno_2_img;
	}

	public void setOld_idno_2_img(String old_idno_2_img)
	{
		this.old_idno_2_img = old_idno_2_img;
	}

	public String getCk_img()
	{
		return ck_img;
	}

	public void setCk_img(String ck_img)
	{
		this.ck_img = ck_img;
	}

	public String getImgCmgs()
	{
		return imgCmgs;
	}

	public void setImgCmgs(String imgCmgs)
	{
		this.imgCmgs = imgCmgs;
	}

}
