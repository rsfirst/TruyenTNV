package vn.com.fis.model.css;

import java.util.List;

public class PostpaidPersonObject
{
	private String officialName;
	private String familyName;
	private String givenName;
	private String personTypeId; //0 - Family, 1 - Corporate
	private String personTypeName;
	private String genderCode;  //0 - MALE, 1 - FEMALE
	private String birthDate;
	private String socialSecurityNumber;
	private String placeOfIssue; //setGeneral7
	private String emailAddress;
	private String homeGeneral1;
	private String homeState;
	private String homeCity;
	private String homeSuburb;
	private String homeLine2;
	private String homeLine1;
	private String homeGeneral3;
	private String homeGeneral4;
	private String postalGeneral1;
	private String postalState;
	private String postalCity;
	private String spokenLanguageCode; // 1 - VIETNAM, VIETNAMESE ; 2 - ENGLISH
	private String postalSuburb;
	private String postalLine2;
	private String postalLine1;
	private String postalGeneral3;
	private String postalGeneral4;
	private String dateOfIssue; //setGeneral6
	private String mobilePhoneNr;
	private String accountNo;
	private String fullName;
	private String custType;
	private String customerSegment;
	private String taxCode;
	private String accountBill;
	private String parentAccountNo;
	private String bussinessLicense;
	private String customerRefNumber;
	private String httt; //PAYMENT_METHOD
	private String paymentLocation; //BILL_MEDIA = PAYMENT_TYPE
	private String creditLimit;
	private String paymentType; //BILL_FORMAT = BILL_TYPE
	private String customerType;
	private String effectiveEndDate;
	private String lastModify;
	private String msisdn;
	private String tkBill;
	private List<PostpaidPersonObject> listPostpaidPersonObject;
	private String accountBalance;
	private String depositAmount;
	private String billProvince;
	private String billRegion;
	private String subcriberAccountStatus;
	private String paymentMethod;
	private String billType;
	private String callPlan;
	private String imsi;
	private String iccid;
	private String subStatusCode;

	public String getImsi()
	{
		return imsi;
	}

	public void setImsi(String imsi)
	{
		this.imsi = imsi;
	}

	public String getIccid()
	{
		return iccid;
	}

	public void setIccid(String iccid)
	{
		this.iccid = iccid;
	}

	private PostpaidPersonObject parent;

	public String getCallPlan()
	{
		return callPlan;
	}

	public void setCallPlan(String callPlan)
	{
		this.callPlan = callPlan;
	}

	public PostpaidPersonObject getParent() {
		return parent;
	}

	public void setParent(PostpaidPersonObject parent) {
		this.parent = parent;
	}

	public String getBillType() {
		return billType;
	}

	public void setBillType(String billType) {
		this.billType = billType;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getSubcriberAccountStatus() {
		return subcriberAccountStatus;
	}

	public void setSubcriberAccountStatus(String subcriberAccountStatus) {
		this.subcriberAccountStatus = subcriberAccountStatus;
	}

	public String getBillProvince() {
		return billProvince;
	}

	public void setBillProvince(String billProvince) {
		this.billProvince = billProvince;
	}

	public String getBillRegion() {
		return billRegion;
	}

	public void setBillRegion(String billRegion) {
		this.billRegion = billRegion;
	}

	public String getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(String accountBalance) {
		this.accountBalance = accountBalance;
	}

	public String getDepositAmount() {
		return depositAmount;
	}

	public void setDepositAmount(String depositAmount) {
		this.depositAmount = depositAmount;
	}

	public List<PostpaidPersonObject> getListPostpaidPersonObject() {
		return listPostpaidPersonObject;
	}

	public void setListPostpaidPersonObject(List<PostpaidPersonObject> listPostpaidPersonObject) {
		this.listPostpaidPersonObject = listPostpaidPersonObject;
	}

	public String getTkBill()
	{
		return tkBill;
	}

	public void setTkBill(String tkBill)
	{
		this.tkBill = tkBill;
	}

	public String getMsisdn()
	{
		return msisdn;
	}

	public void setMsisdn(String msisdn)
	{
		this.msisdn = msisdn;
	}

	public String getPersonTypeName()
	{
		return personTypeName;
	}

	public void setPersonTypeName(String personTypeName)
	{
		this.personTypeName = personTypeName;
	}

	public String getEffectiveEndDate()
	{
		return effectiveEndDate;
	}

	public void setEffectiveEndDate(String effectiveEndDate)
	{
		this.effectiveEndDate = effectiveEndDate;
	}

	public String getLastModify()
	{
		return lastModify;
	}

	public void setLastModify(String lastModify)
	{
		this.lastModify = lastModify;
	}

	public String getCustomerType()
	{
		return customerType;
	}

	public void setCustomerType(String customerType)
	{
		this.customerType = customerType;
	}

	public String getPaymentType()
	{
		return paymentType;
	}

	public void setPaymentType(String paymentType)
	{
		this.paymentType = paymentType;
	}

	public String getCreditLimit()
	{
		return creditLimit;
	}

	public void setCreditLimit(String creditLimit)
	{
		this.creditLimit = creditLimit;
	}

	public String getPaymentLocation()
	{
		return paymentLocation;
	}

	public void setPaymentLocation(String paymentLocation)
	{
		this.paymentLocation = paymentLocation;
	}

	public String getHttt()
	{
		return httt;
	}

	public void setHttt(String httt)
	{
		this.httt = httt;
	}

	public String getOfficialName()
	{
		return officialName;
	}

	public void setOfficialName(String officialName)
	{
		this.officialName = officialName;
	}

	public String getFamilyName()
	{
		return familyName;
	}

	public void setFamilyName(String familyName)
	{
		this.familyName = familyName;
	}

	public String getGivenName()
	{
		return givenName;
	}

	public void setGivenName(String givenName)
	{
		this.givenName = givenName;
	}

	public String getPersonTypeId()
	{
		return personTypeId;
	}

	public void setPersonTypeId(String personTypeId)
	{
		this.personTypeId = personTypeId;
	}

	public String getGenderCode()
	{
		return genderCode;
	}

	public void setGenderCode(String genderCode)
	{
		this.genderCode = genderCode;
	}

	public String getBirthDate()
	{
		return birthDate;
	}

	public void setBirthDate(String birthDate)
	{
		this.birthDate = birthDate;
	}

	public String getSocialSecurityNumber()
	{
		return socialSecurityNumber;
	}

	public void setSocialSecurityNumber(String socialSecurityNumber)
	{
		this.socialSecurityNumber = socialSecurityNumber;
	}

	public String getPlaceOfIssue()
	{
		return placeOfIssue;
	}

	public void setPlaceOfIssue(String placeOfIssue)
	{
		this.placeOfIssue = placeOfIssue;
	}

	public String getEmailAddress()
	{
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress)
	{
		this.emailAddress = emailAddress;
	}

	public String getHomeGeneral1()
	{
		return homeGeneral1;
	}

	public void setHomeGeneral1(String homeGeneral1)
	{
		this.homeGeneral1 = homeGeneral1;
	}

	public String getHomeState()
	{
		return homeState;
	}

	public void setHomeState(String homeState)
	{
		this.homeState = homeState;
	}

	public String getHomeCity()
	{
		return homeCity;
	}

	public void setHomeCity(String homeCity)
	{
		this.homeCity = homeCity;
	}

	public String getHomeSuburb()
	{
		return homeSuburb;
	}

	public void setHomeSuburb(String homeSuburb)
	{
		this.homeSuburb = homeSuburb;
	}

	public String getHomeLine2()
	{
		return homeLine2;
	}

	public void setHomeLine2(String homeLine2)
	{
		this.homeLine2 = homeLine2;
	}

	public String getHomeLine1()
	{
		return homeLine1;
	}

	public void setHomeLine1(String homeLine1)
	{
		this.homeLine1 = homeLine1;
	}

	public String getHomeGeneral3()
	{
		return homeGeneral3;
	}

	public void setHomeGeneral3(String homeGeneral3)
	{
		this.homeGeneral3 = homeGeneral3;
	}

	public String getHomeGeneral4()
	{
		return homeGeneral4;
	}

	public void setHomeGeneral4(String homeGeneral4)
	{
		this.homeGeneral4 = homeGeneral4;
	}

	public String getPostalGeneral1()
	{
		return postalGeneral1;
	}

	public void setPostalGeneral1(String postalGeneral1)
	{
		this.postalGeneral1 = postalGeneral1;
	}

	public String getPostalState()
	{
		return postalState;
	}

	public void setPostalState(String postalState)
	{
		this.postalState = postalState;
	}

	public String getPostalCity()
	{
		return postalCity;
	}

	public void setPostalCity(String postalCity)
	{
		this.postalCity = postalCity;
	}

	public String getSpokenLanguageCode()
	{
		return spokenLanguageCode;
	}

	public void setSpokenLanguageCode(String spokenLanguageCode)
	{
		this.spokenLanguageCode = spokenLanguageCode;
	}

	public String getPostalSuburb()
	{
		return postalSuburb;
	}

	public void setPostalSuburb(String postalSuburb)
	{
		this.postalSuburb = postalSuburb;
	}

	public String getPostalLine2()
	{
		return postalLine2;
	}

	public void setPostalLine2(String postalLine2)
	{
		this.postalLine2 = postalLine2;
	}

	public String getPostalLine1()
	{
		return postalLine1;
	}

	public void setPostalLine1(String postalLine1)
	{
		this.postalLine1 = postalLine1;
	}

	public String getPostalGeneral3()
	{
		return postalGeneral3;
	}

	public void setPostalGeneral3(String postalGeneral3)
	{
		this.postalGeneral3 = postalGeneral3;
	}

	public String getPostalGeneral4()
	{
		return postalGeneral4;
	}

	public void setPostalGeneral4(String postalGeneral4)
	{
		this.postalGeneral4 = postalGeneral4;
	}

	public String getDateOfIssue()
	{
		return dateOfIssue;
	}

	public void setDateOfIssue(String dateOfIssue)
	{
		this.dateOfIssue = dateOfIssue;
	}

	public String getMobilePhoneNr()
	{
		return mobilePhoneNr;
	}

	public void setMobilePhoneNr(String mobilePhoneNr)
	{
		this.mobilePhoneNr = mobilePhoneNr;
	}

	public String getAccountNo()
	{
		return accountNo;
	}

	public void setAccountNo(String accountNo)
	{
		this.accountNo = accountNo;
	}

	public String getFullName()
	{
		return fullName;
	}

	public void setFullName(String fullName)
	{
		this.fullName = fullName;
	}

	public String getCustType()
	{
		return custType;
	}

	public void setCustType(String custType)
	{
		this.custType = custType;
	}

	public String getCustomerSegment()
	{
		return customerSegment;
	}

	public void setCustomerSegment(String customerSegment)
	{
		this.customerSegment = customerSegment;
	}

	public String getTaxCode()
	{
		return taxCode;
	}

	public void setTaxCode(String taxCode)
	{
		this.taxCode = taxCode;
	}

	public String getAccountBill()
	{
		return accountBill;
	}

	public void setAccountBill(String accountBill)
	{
		this.accountBill = accountBill;
	}

	public String getParentAccountNo()
	{
		return parentAccountNo;
	}

	public void setParentAccountNo(String parentAccountNo)
	{
		this.parentAccountNo = parentAccountNo;
	}

	public String getBussinessLicense()
	{
		return bussinessLicense;
	}

	public void setBussinessLicense(String bussinessLicense)
	{
		this.bussinessLicense = bussinessLicense;
	}

	public String getCustomerRefNumber()
	{
		return customerRefNumber;
	}

	public void setCustomerRefNumber(String customerRefNumber)
	{
		this.customerRefNumber = customerRefNumber;
	}

	public String getSubStatusCode()
	{
		return subStatusCode;
	}

	public void setSubStatusCode(String subStatusCode)
	{
		this.subStatusCode = subStatusCode;
	}
}
