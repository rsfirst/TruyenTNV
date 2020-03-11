
package vn.com.fis.model.mnpcm;

public class MnpPersonInfoType
{

	protected String custType;
	protected String customerSegment;
	protected String companyName;
	protected String fullName;
	protected String firstName;
	protected String lastName;
	protected String gender;
	protected String genderStr;
	// @JsonDeserialize(using = CustomJsonDateDeserializer.class)
	// private Date birthDate;
	protected String birthDate;
	protected String idNumber;
	protected String placeOfIssue;
	protected String dateOfIssue;
	protected String dateOfIssueStr;
	protected String emailAddress;
	protected String taxCode;
	protected String bussinessLincense;
	protected String contactNumber;
	protected String custLang;
	protected String custLangStr;
	protected String packetType;

	public String getCustType()
	{
		return custType;
	}

	public void setCustType(String value)
	{
		this.custType = value;
	}

	public String getCustomerSegment()
	{
		return customerSegment;
	}

	public void setCustomerSegment(String value)
	{
		this.customerSegment = value;
	}

	public String getCompanyName()
	{
		return companyName;
	}

	public void setCompanyName(String value)
	{
		this.companyName = value;
	}

	public String getFirstName()
	{
		return firstName;
	}

	public void setFirstName(String value)
	{
		this.firstName = value;
	}

	public String getLastName()
	{
		return lastName;
	}

	public void setLastName(String value)
	{
		this.lastName = value;
	}

	public String getGender()
	{
		return gender;
	}

	public void setGender(String value)
	{
		this.gender = value;
	}

	public String getGenderStr()
	{
		return genderStr;
	}

	public void setGenderStr(String genderStr)
	{
		this.genderStr = genderStr;
	}

	public String getPlaceOfIssue()
	{
		return placeOfIssue;
	}

	public void setPlaceOfIssue(String value)
	{
		this.placeOfIssue = value;
	}

	public String getDateOfIssue()
	{
		return dateOfIssue;
	}

	public void setDateOfIssue(String value)
	{
		this.dateOfIssue = value;
	}

	public String getEmailAddress()
	{
		return emailAddress;
	}

	public void setEmailAddress(String value)
	{
		this.emailAddress = value;
	}

	public String getTaxCode()
	{
		return taxCode;
	}

	public void setTaxCode(String value)
	{
		this.taxCode = value;
	}

	public String getBussinessLincense()
	{
		return bussinessLincense;
	}

	public void setBussinessLincense(String value)
	{
		this.bussinessLincense = value;
	}

	public String getContactNumber()
	{
		return contactNumber;
	}

	public void setContactNumber(String value)
	{
		this.contactNumber = value;
	}

	public String getCustLang()
	{
		return custLang;
	}

	public void setCustLang(String value)
	{
		this.custLang = value;
	}

	public String getIdNumber()
	{
		return idNumber;
	}

	public void setIdNumber(String idNumber)
	{
		this.idNumber = idNumber;
	}

	public String getPacketType()
	{
		return packetType;
	}

	public void setPacketType(String packetType)
	{
		this.packetType = packetType;
	}

	public String getDateOfIssueStr()
	{
		return dateOfIssueStr;
	}

	public void setDateOfIssueStr(String dateOfIssueStr)
	{
		this.dateOfIssueStr = dateOfIssueStr;
	}

	public String getBirthDate()
	{
		return birthDate;
	}

	public void setBirthDate(String birthDate)
	{
		this.birthDate = birthDate;
	}

	public String getCustLangStr()
	{
		return custLangStr;
	}

	public void setCustLangStr(String custLangStr)
	{
		this.custLangStr = custLangStr;
	}

	public String getFullName()
	{
		return fullName;
	}

	public void setFullName(String fullName)
	{
		this.fullName = fullName;
	}

	@Override
	public String toString()
	{
		return "MnpPersonInfoType [custType=" + custType + ", customerSegment=" + customerSegment + ", companyName=" + companyName + ", fullName=" + fullName
				+ ", firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender + ", genderStr=" + genderStr + ", birthDate=" + birthDate
				+ ", idNumber=" + idNumber + ", placeOfIssue=" + placeOfIssue + ", dateOfIssue=" + dateOfIssue + ", dateOfIssueStr=" + dateOfIssueStr
				+ ", emailAddress=" + emailAddress + ", taxCode=" + taxCode + ", bussinessLincense=" + bussinessLincense + ", contactNumber=" + contactNumber
				+ ", custLang=" + custLang + ", custLangStr=" + custLangStr + ", packetType=" + packetType + "]";
	}

	// public String getBirthDateStr()
	// {
	// return birthDateStr;
	// }
	//
	// public void setBirthDateStr(String birthDateStr)
	// {
	// this.birthDateStr = birthDateStr;
	// }

	// public void setBirthDate(Date birthDate)
	// {
	// this.birthDate = birthDate;
	// }
	//
	// public Date getBirthDate()
	// {
	// return birthDate;
	// }

}
