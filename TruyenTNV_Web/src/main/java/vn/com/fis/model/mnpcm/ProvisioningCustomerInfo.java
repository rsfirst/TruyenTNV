package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import vn.com.fis.utils.mnpcm.Constants;


/**
 * The persistent class for the PROVISIONING_CUSTOMER_INFO database table.
 * 
 */
public class ProvisioningCustomerInfo implements Serializable {
	private static final long serialVersionUID = 1L;

	private long provisioningCustomerInfoId;
	
	private String address;

	private String birthday;
	
	private String birthdayStr;

	private String birthdayStrTemp;
	
	private String businessRegistrationNumber;

	private String companyName;

	private String country;
	private String typeCard;
	private String typeCardCompany;
	
	public String getTypeCard() {
		return typeCard;
	}

	public void setTypeCard(String typeCard) {
		this.typeCard = typeCard;
	}

	public String getTypeCardCompany() {
		return typeCardCompany;
	}

	public void setTypeCardCompany(String typeCardCompany) {
		this.typeCardCompany = typeCardCompany;
	}

	private String customerType;

	private String customerTypeStr;
	
	private String district;

	private String docIssueDate;
	
	private String docIssueDateStr;

	private String docIssueDateStrTemp;
	
	private String docIssuePlace;

	private String docNumber;

	private String gender;
	
	private String genderStr;

	private String name;
	
	private String surname;

	private String province;

	private String shopCode;
	
	private String shopId;

	private String staffId;
	
	private String taxIdentificationNumber;
	
	private String addressCompany;
	
	public String getAddressCompany() {
		return addressCompany;
	}

	public void setAddressCompany(String addressCompany) {
		this.addressCompany = addressCompany;
	}

	private String imageDocumentIssue1;
	
	private String imageDocumentIssue2;
	
	private String imageKH;
	private String imageHS1;
	private String imageHS2;
	private String imageHD1;
	private String imageHD2;
	private String imageGPKD;
	private String imageGPKD2;
	private String imageDSKHC;
	
	public String getImageGPKD2() {
		return imageGPKD2;
	}

	public void setImageGPKD2(String imageGPKD2) {
		this.imageGPKD2 = imageGPKD2;
	}

	public String getImageDSKHC() {
		return imageDSKHC;
	}

	public void setImageDSKHC(String imageDSKHC) {
		this.imageDSKHC = imageDSKHC;
	}

	private String msisdn;
	private String serialSim;
	private String accountType;
	private String accountTypeDNO;
	private String packageType;
	private String packageName;
	private String accountTypeStr;
	private String accountTypeDNOStr;
	private String subscriberName;
	private List<String> listNoteRecord;
	List<AttachmentData> listAttachMentData;
	
	List<ProvisioningSubscriberInfo> listProvisioningSubscriberInfo;
	
	public ProvisioningCustomerInfo() {
	}

	public long getProvisioningCustomerInfoId() {
		return this.provisioningCustomerInfoId;
	}

	public void setProvisioningCustomerInfoId(long provisioningCustomerInfoId) {
		this.provisioningCustomerInfoId = provisioningCustomerInfoId;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getBirthday() {
		return this.birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getBusinessRegistrationNumber() {
		return this.businessRegistrationNumber;
	}

	public void setBusinessRegistrationNumber(String businessRegistrationNumber) {
		this.businessRegistrationNumber = businessRegistrationNumber;
	}

	public String getCompanyName() {
		return this.companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}


	public String getDistrict() {
		return this.district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getProvince() {
		return this.province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getTaxIdentificationNumber() {
		return this.taxIdentificationNumber;
	}

	public void setTaxIdentificationNumber(String taxIdentificationNumber) {
		this.taxIdentificationNumber = taxIdentificationNumber;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCustomerType() {
		return customerType;
	}

	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}

	public String getDocIssueDate() {
		return docIssueDate;
	}

	public void setDocIssueDate(String docIssueDate) {
		this.docIssueDate = docIssueDate;
	}

	public String getDocIssuePlace() {
		return docIssuePlace;
	}

	public void setDocIssuePlace(String docIssuePlace) {
		this.docIssuePlace = docIssuePlace;
	}

	public String getDocNumber() {
		return docNumber;
	}

	public void setDocNumber(String docNumber) {
		this.docNumber = docNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getBirthdayStr() {
		return this.birthdayStr;
	}

	public void setBirthdayStr(String birthdayStr) {
		this.birthdayStr = birthdayStr;
	}

	public String getDocIssueDateStr() {
		return this.docIssueDateStr;
	}

	public void setDocIssueDateStr(String docIssueDateStr) {
		this.docIssueDateStr = docIssueDateStr;
	}

	public String getImageDocumentIssue1() {
		return imageDocumentIssue1;
	}

	public void setImageDocumentIssue1(String imageDocumentIssue1) {
		this.imageDocumentIssue1 = imageDocumentIssue1;
	}

	public String getImageDocumentIssue2() {
		return imageDocumentIssue2;
	}

	public void setImageDocumentIssue2(String imageDocumentIssue2) {
		this.imageDocumentIssue2 = imageDocumentIssue2;
	}
	
	public String getCustomerTypeStr() {
		String customerTypeStr = "";
		if(Constants.CUSTOMER_TYPE_PRIVATE.equals(this.customerType)) {
			customerTypeStr = Constants.CUSTOMER_TYPE_PRIVATE_STR;
		}
		
		if(Constants.CUSTOMER_TYPE_FOREIGN.equals(this.customerType)) {
			customerTypeStr =  Constants.CUSTOMER_TYPE_FOREIGN_STR;
		}
		
		if(Constants.CUSTOMER_TYPE_COMPANY.equals(this.customerType)) {
			customerTypeStr =  Constants.CUSTOMER_TYPE_COMPANY_STR;
		}
		
		if(Constants.CUSTOMER_TYPE_STAFT.equals(this.customerType)) {
			customerTypeStr =  Constants.CUSTOMER_TYPE_STAFT_STR;
		}
		return customerTypeStr;
		
	}

	public void setCustomerTypeStr(String customerTypeStr) {
		this.customerTypeStr = customerTypeStr;
	}

	public List<AttachmentData> getListAttachMentData() {
        if (listAttachMentData == null) {
        	listAttachMentData = new ArrayList<AttachmentData>();
        }
        return this.listAttachMentData;
	}

	public void setListAttachMentData(List<AttachmentData> listAttachMentData) {
		this.listAttachMentData = listAttachMentData;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getSerialSim() {
		return serialSim;
	}

	public void setSerialSim(String serialSim) {
		this.serialSim = serialSim;
	}

	public String getSubscriberName() {
		return subscriberName;
	}

	public void setSubscriberName(String subscriberName) {
		this.subscriberName = subscriberName;
	}

	public String getAccountTypeStr() {
		String accountType = "";
		if(Constants.ACCOUNT_TYPE_PREPAID.equals(this.accountType)) {
			accountType = Constants.ACCOUNT_TYPE_PREPAID_STR;
		}
		if(Constants.ACCOUNT_TYPE_POSTPAID.equals(this.accountType)) {
			accountType =  Constants.ACCOUNT_TYPE_POSTPAID_STR;
		}
		return accountType;
	}

	public void setAccountTypeStr(String accountTypeStr) {
		this.accountTypeStr = accountTypeStr;
	}
	
	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public List<ProvisioningSubscriberInfo> getListProvisioningSubscriberInfo() {
        if (listProvisioningSubscriberInfo == null) {
        	listProvisioningSubscriberInfo = new ArrayList<ProvisioningSubscriberInfo>();
        }
        return this.listProvisioningSubscriberInfo;
	}

	public void setListProvisioningSubscriberInfo(List<ProvisioningSubscriberInfo> listProvisioningSubscriberInfo) {
		this.listProvisioningSubscriberInfo = listProvisioningSubscriberInfo;
	}

	public String getPackageType() {
		return packageType;
	}

	public void setPackageType(String packageType) {
		this.packageType = packageType;
	}

	public String getGenderStr() {
		return this.genderStr;
	}

	public void setGenderStr(String genderStr) {
		this.genderStr = genderStr;
	}
	
	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public String getStaffId() {
		return staffId;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getAccountTypeDNO() {
		return accountTypeDNO;
	}

	public void setAccountTypeDNO(String accountTypeDNO) {
		this.accountTypeDNO = accountTypeDNO;
	}

	public String getAccountTypeDNOStr() {
		return accountTypeDNOStr;
	}

	public void setAccountTypeDNOStr(String accountTypeDNOStr) {
		this.accountTypeDNOStr = accountTypeDNOStr;
	}

	public String getBirthdayStrTemp() {
		return birthdayStrTemp;
	}

	public void setBirthdayStrTemp(String birthdayStrTemp) {
		this.birthdayStrTemp = birthdayStrTemp;
	}

	public String getDocIssueDateStrTemp() {
		return docIssueDateStrTemp;
	}

	public void setDocIssueDateStrTemp(String docIssueDateStrTemp) {
		this.docIssueDateStrTemp = docIssueDateStrTemp;
	}

	public List<String> getListNoteRecord() {
		return listNoteRecord;
	}

	public String getImageKH()
	{
		return imageKH;
	}

	public void setImageKH(String imageKH)
	{
		this.imageKH = imageKH;
	}

	public String getImageHD1()
	{
		return imageHD1;
	}

	public void setImageHD1(String imageHD1)
	{
		this.imageHD1 = imageHD1;
	}

	public String getImageHD2()
	{
		return imageHD2;
	}

	public void setImageHD2(String imageHD2)
	{
		this.imageHD2 = imageHD2;
	}

	public String getImageGPKD()
	{
		return imageGPKD;
	}

	public void setImageGPKD(String imageGPKD)
	{
		this.imageGPKD = imageGPKD;
	}

	public String getImageHS1() {
		return imageHS1;
	}

	public void setImageHS1(String imageHS1) {
		this.imageHS1 = imageHS1;
	}

	public String getImageHS2() {
		return imageHS2;
	}

	public void setImageHS2(String imageHS2) {
		this.imageHS2 = imageHS2;
	}

	public void setListNoteRecord(List<String> listNoteRecord) {
		this.listNoteRecord = listNoteRecord;
	}

	@Override
	public String toString()
	{
		return "ProvisioningCustomerInfo [provisioningCustomerInfoId=" + provisioningCustomerInfoId + ", address=" + address + ", birthday=" + birthday
				+ ", birthdayStr=" + birthdayStr + ", birthdayStrTemp=" + birthdayStrTemp + ", businessRegistrationNumber=" + businessRegistrationNumber
				+ ", companyName=" + companyName + ", country=" + country + ", customerType=" + customerType + ", customerTypeStr=" + customerTypeStr
				+ ", district=" + district + ", docIssueDate=" + docIssueDate + ", docIssueDateStr=" + docIssueDateStr + ", docIssueDateStrTemp="
				+ docIssueDateStrTemp + ", docIssuePlace=" + docIssuePlace + ", docNumber=" + docNumber + ", gender=" + gender + ", genderStr=" + genderStr
				+ ", name=" + name + ", surname=" + surname + ", province=" + province + ", shopCode=" + shopCode + ", shopId=" + shopId + ", staffId="
				+ staffId + ", taxIdentificationNumber=" + taxIdentificationNumber + ", imageDocumentIssue1=" + imageDocumentIssue1 + ", imageDocumentIssue2="
				+ imageDocumentIssue2 + ", imageKH=" + imageKH + ", imageHD1=" + imageHD1 + ", imageHD2=" + imageHD2 + ", imageGPKD=" + imageGPKD + ", msisdn="
				+ msisdn + ", serialSim=" + serialSim + ", accountType=" + accountType + ", accountTypeDNO=" + accountTypeDNO + ", packageType=" + packageType
				+ ", packageName=" + packageName + ", accountTypeStr=" + accountTypeStr + ", accountTypeDNOStr=" + accountTypeDNOStr + ", subscriberName="
				+ subscriberName + ", listNoteRecord=" + listNoteRecord + ", listAttachMentData=" + listAttachMentData + ", listProvisioningSubscriberInfo="
				+ listProvisioningSubscriberInfo + "]";
	}

	
 }
