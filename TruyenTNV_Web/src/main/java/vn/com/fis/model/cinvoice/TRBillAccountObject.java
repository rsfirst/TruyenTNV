package vn.com.fis.model.cinvoice;

import java.util.List;

public class TRBillAccountObject {
	private String msisdn;
	private String sim_NUM;
	private String imsi;
	private String cust_TYPE;
	private String customer_SEG;
	private String company_NAME;
	private String first_ANME;
	private String last_NAME;
	private String gender;
	private String birh_DATE;
	private String id_NUM;
	private String id_TYPE;
	private String place_OF_ISSUE;
	private String date_OF_ISSUE;
	private String email_ADDR;
	private String tax_CODE;
	private String bill_REGION;
	private String bill_PROVINCE;
	private String blii_DISTRICT;
	private String bill_ADDR_LINE1;
	private String bill_COUNTRY;
	private String postal_REGION;
	private String poatal_PROVINCE;
	private String postal_DISTRICT;
	private String postal_ADDR_LINE1;
	private String postal_BILL_COUNTRY;
	private String payment_METHOD;
	private String account_STATUS;
	private String sub_STATUS;
	private String postpaid_ACCOUNT_NO;
	private String business_LICENSE;
	private String bill_ACC_NAME;
	private String account_BILL;
	private String parent_ACCOUN_NO;
	private String cust_LANG;
	private String credit_STATUS;
	private String bill_FORMAT;
	private String bill_MEDIA;
	private String bill_TYPE;
	private String payment_TYPE;
	private String telephone_NO;
	private String cust_REF_NO;
	private List<TRBillHistory> lstBillHistory;
	private List<TRBillPayment> lstPayments;
	private List<TRBillDeposit> lstDeposit;
	private List<TRBillChildAccount> lstChildAccount;
	private String account_BALANCE;
	private String deposit_AMOUNT;
	private String credit_LIMIT;

	public TRBillAccountObject(String mSISDN, String sIM_NUM, String iMSI, String cUST_TYPE, String cUSTOMER_SEG,
			String cOMPANY_NAME, String fIRST_ANME, String lAST_NAME, String gENDER, String bIRH_DATE, String iD_NUM,
			String iD_TYPE, String pLACE_OF_ISSUE, String dATE_OF_ISSUE, String eMAIL_ADDR, String tAX_CODE,
			String bILL_REGION, String bILL_PROVINCE, String bLII_DISTRICT, String bILL_ADDR_LINE1, String bILL_COUNTRY,
			String pOSTAL_REGION, String pOATAL_PROVINCE, String pOSTAL_DISTRICT, String pOSTAL_ADDR_LINE1,
			String pOSTAL_BILL_COUNTRY, String pAYMENT_METHOD, String aCCOUNT_STATUS, String sUB_STATUS,
			String pOSTPAID_ACCOUNT_NO, String bUSINESS_LICENSE, String bILL_ACC_NAME, String aCCOUNT_BILL,
			String pARENT_ACCOUN_NO, String cUST_LANG, String cREDIT_STATUS, String bILL_FORMAT, String bILL_MEDIA,
			String bILL_TYPE, String pAYMENT_TYPE, String tELEPHONE_NO, String cUST_REF_NO) {
		super();
		msisdn = mSISDN;
		sim_NUM = sIM_NUM;
		imsi = iMSI;
		cust_TYPE = cUST_TYPE;
		customer_SEG = cUSTOMER_SEG;
		company_NAME = cOMPANY_NAME;
		first_ANME = fIRST_ANME;
		last_NAME = lAST_NAME;
		gender = gENDER;
		birh_DATE = bIRH_DATE;
		id_NUM = iD_NUM;
		id_TYPE = iD_TYPE;
		place_OF_ISSUE = pLACE_OF_ISSUE;
		date_OF_ISSUE = dATE_OF_ISSUE;
		email_ADDR = eMAIL_ADDR;
		tax_CODE = tAX_CODE;
		bill_REGION = bILL_REGION;
		bill_PROVINCE = bILL_PROVINCE;
		blii_DISTRICT = bLII_DISTRICT;
		bill_ADDR_LINE1 = bILL_ADDR_LINE1;
		bill_COUNTRY = bILL_COUNTRY;
		postal_REGION = pOSTAL_REGION;
		poatal_PROVINCE = pOATAL_PROVINCE;
		postal_DISTRICT = pOSTAL_DISTRICT;
		postal_ADDR_LINE1 = pOSTAL_ADDR_LINE1;
		postal_BILL_COUNTRY = pOSTAL_BILL_COUNTRY;
		payment_METHOD = pAYMENT_METHOD;
		account_STATUS = aCCOUNT_STATUS;
		sub_STATUS = sUB_STATUS;
		postpaid_ACCOUNT_NO = pOSTPAID_ACCOUNT_NO;
		business_LICENSE = bUSINESS_LICENSE;
		bill_ACC_NAME = bILL_ACC_NAME;
		account_BILL = aCCOUNT_BILL;
		parent_ACCOUN_NO = pARENT_ACCOUN_NO;
		cust_LANG = cUST_LANG;
		credit_STATUS = cREDIT_STATUS;
		bill_FORMAT = bILL_FORMAT;
		bill_MEDIA = bILL_MEDIA;
		bill_TYPE = bILL_TYPE;
		payment_TYPE = pAYMENT_TYPE;
		telephone_NO = tELEPHONE_NO;
		cust_REF_NO = cUST_REF_NO;
	}

	public List<TRBillChildAccount> getLstChildAccount() {
		return lstChildAccount;
	}

	public void setLstChildAccount(List<TRBillChildAccount> lstChildAccount) {
		this.lstChildAccount = lstChildAccount;
	}

	public List<TRBillPayment> getLstPayments() {
		return this.lstPayments;
	}

	public void setLstPayments(List<TRBillPayment> lstPayments) {
		this.lstPayments = lstPayments;
	}

	public List<TRBillDeposit> getLstDeposit() {
		return this.lstDeposit;
	}

	public void setLstDeposit(List<TRBillDeposit> lstDeposit) {
		this.lstDeposit = lstDeposit;
	}

	public List<TRBillHistory> getLstBillHistory() {
		return this.lstBillHistory;
	}

	public void setLstBillHistory(List<TRBillHistory> lstBillHistory) {
		this.lstBillHistory = lstBillHistory;
	}

	/**
	 * @return the msisdn
	 */
	public String getMsisdn() {
		return msisdn;
	}

	/**
	 * @param msisdn
	 *            the msisdn to set
	 */
	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	/**
	 * @return the sim_NUM
	 */
	public String getSim_NUM() {
		return sim_NUM;
	}

	/**
	 * @param sim_NUM
	 *            the sim_NUM to set
	 */
	public void setSim_NUM(String sim_NUM) {
		this.sim_NUM = sim_NUM;
	}

	/**
	 * @return the imsi
	 */
	public String getImsi() {
		return imsi;
	}

	/**
	 * @param imsi
	 *            the imsi to set
	 */
	public void setImsi(String imsi) {
		this.imsi = imsi;
	}

	/**
	 * @return the cust_TYPE
	 */
	public String getCust_TYPE() {
		return cust_TYPE;
	}

	/**
	 * @param cust_TYPE
	 *            the cust_TYPE to set
	 */
	public void setCust_TYPE(String cust_TYPE) {
		this.cust_TYPE = cust_TYPE;
	}

	/**
	 * @return the customer_SEG
	 */
	public String getCustomer_SEG() {
		return customer_SEG;
	}

	/**
	 * @param customer_SEG
	 *            the customer_SEG to set
	 */
	public void setCustomer_SEG(String customer_SEG) {
		this.customer_SEG = customer_SEG;
	}

	/**
	 * @return the company_NAME
	 */
	public String getCompany_NAME() {
		return company_NAME;
	}

	/**
	 * @param company_NAME
	 *            the company_NAME to set
	 */
	public void setCompany_NAME(String company_NAME) {
		this.company_NAME = company_NAME;
	}

	/**
	 * @return the first_ANME
	 */
	public String getFirst_ANME() {
		return first_ANME;
	}

	/**
	 * @param first_ANME
	 *            the first_ANME to set
	 */
	public void setFirst_ANME(String first_ANME) {
		this.first_ANME = first_ANME;
	}

	/**
	 * @return the last_NAME
	 */
	public String getLast_NAME() {
		return last_NAME;
	}

	/**
	 * @param last_NAME
	 *            the last_NAME to set
	 */
	public void setLast_NAME(String last_NAME) {
		this.last_NAME = last_NAME;
	}

	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}

	/**
	 * @param gender
	 *            the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

	/**
	 * @return the birh_DATE
	 */
	public String getBirh_DATE() {
		return birh_DATE;
	}

	/**
	 * @param birh_DATE
	 *            the birh_DATE to set
	 */
	public void setBirh_DATE(String birh_DATE) {
		this.birh_DATE = birh_DATE;
	}

	/**
	 * @return the id_NUM
	 */
	public String getId_NUM() {
		return id_NUM;
	}

	/**
	 * @param id_NUM
	 *            the id_NUM to set
	 */
	public void setId_NUM(String id_NUM) {
		this.id_NUM = id_NUM;
	}

	/**
	 * @return the id_TYPE
	 */
	public String getId_TYPE() {
		return id_TYPE;
	}

	/**
	 * @param id_TYPE
	 *            the id_TYPE to set
	 */
	public void setId_TYPE(String id_TYPE) {
		this.id_TYPE = id_TYPE;
	}

	/**
	 * @return the place_OF_ISSUE
	 */
	public String getPlace_OF_ISSUE() {
		return place_OF_ISSUE;
	}

	/**
	 * @param place_OF_ISSUE
	 *            the place_OF_ISSUE to set
	 */
	public void setPlace_OF_ISSUE(String place_OF_ISSUE) {
		this.place_OF_ISSUE = place_OF_ISSUE;
	}

	/**
	 * @return the date_OF_ISSUE
	 */
	public String getDate_OF_ISSUE() {
		return date_OF_ISSUE;
	}

	/**
	 * @param date_OF_ISSUE
	 *            the date_OF_ISSUE to set
	 */
	public void setDate_OF_ISSUE(String date_OF_ISSUE) {
		this.date_OF_ISSUE = date_OF_ISSUE;
	}

	/**
	 * @return the email_ADDR
	 */
	public String getEmail_ADDR() {
		return email_ADDR;
	}

	/**
	 * @param email_ADDR
	 *            the email_ADDR to set
	 */
	public void setEmail_ADDR(String email_ADDR) {
		this.email_ADDR = email_ADDR;
	}

	/**
	 * @return the tax_CODE
	 */
	public String getTax_CODE() {
		return tax_CODE;
	}

	/**
	 * @param tax_CODE
	 *            the tax_CODE to set
	 */
	public void setTax_CODE(String tax_CODE) {
		this.tax_CODE = tax_CODE;
	}

	/**
	 * @return the bill_REGION
	 */
	public String getBill_REGION() {
		return bill_REGION;
	}

	/**
	 * @param bill_REGION
	 *            the bill_REGION to set
	 */
	public void setBill_REGION(String bill_REGION) {
		this.bill_REGION = bill_REGION;
	}

	/**
	 * @return the bill_PROVINCE
	 */
	public String getBill_PROVINCE() {
		return bill_PROVINCE;
	}

	/**
	 * @param bill_PROVINCE
	 *            the bill_PROVINCE to set
	 */
	public void setBill_PROVINCE(String bill_PROVINCE) {
		this.bill_PROVINCE = bill_PROVINCE;
	}

	/**
	 * @return the blii_DISTRICT
	 */
	public String getBlii_DISTRICT() {
		return blii_DISTRICT;
	}

	/**
	 * @param blii_DISTRICT
	 *            the blii_DISTRICT to set
	 */
	public void setBlii_DISTRICT(String blii_DISTRICT) {
		this.blii_DISTRICT = blii_DISTRICT;
	}

	/**
	 * @return the bill_ADDR_LINE1
	 */
	public String getBill_ADDR_LINE1() {
		return bill_ADDR_LINE1;
	}

	/**
	 * @param bill_ADDR_LINE1
	 *            the bill_ADDR_LINE1 to set
	 */
	public void setBill_ADDR_LINE1(String bill_ADDR_LINE1) {
		this.bill_ADDR_LINE1 = bill_ADDR_LINE1;
	}

	/**
	 * @return the bill_COUNTRY
	 */
	public String getBill_COUNTRY() {
		return bill_COUNTRY;
	}

	/**
	 * @param bill_COUNTRY
	 *            the bill_COUNTRY to set
	 */
	public void setBill_COUNTRY(String bill_COUNTRY) {
		this.bill_COUNTRY = bill_COUNTRY;
	}

	/**
	 * @return the postal_REGION
	 */
	public String getPostal_REGION() {
		return postal_REGION;
	}

	/**
	 * @param postal_REGION
	 *            the postal_REGION to set
	 */
	public void setPostal_REGION(String postal_REGION) {
		this.postal_REGION = postal_REGION;
	}

	/**
	 * @return the poatal_PROVINCE
	 */
	public String getPoatal_PROVINCE() {
		return poatal_PROVINCE;
	}

	/**
	 * @param poatal_PROVINCE
	 *            the poatal_PROVINCE to set
	 */
	public void setPoatal_PROVINCE(String poatal_PROVINCE) {
		this.poatal_PROVINCE = poatal_PROVINCE;
	}

	/**
	 * @return the postal_DISTRICT
	 */
	public String getPostal_DISTRICT() {
		return postal_DISTRICT;
	}

	/**
	 * @param postal_DISTRICT
	 *            the postal_DISTRICT to set
	 */
	public void setPostal_DISTRICT(String postal_DISTRICT) {
		this.postal_DISTRICT = postal_DISTRICT;
	}

	/**
	 * @return the postal_ADDR_LINE1
	 */
	public String getPostal_ADDR_LINE1() {
		return postal_ADDR_LINE1;
	}

	/**
	 * @param postal_ADDR_LINE1
	 *            the postal_ADDR_LINE1 to set
	 */
	public void setPostal_ADDR_LINE1(String postal_ADDR_LINE1) {
		this.postal_ADDR_LINE1 = postal_ADDR_LINE1;
	}

	/**
	 * @return the postal_BILL_COUNTRY
	 */
	public String getPostal_BILL_COUNTRY() {
		return postal_BILL_COUNTRY;
	}

	/**
	 * @param postal_BILL_COUNTRY
	 *            the postal_BILL_COUNTRY to set
	 */
	public void setPostal_BILL_COUNTRY(String postal_BILL_COUNTRY) {
		this.postal_BILL_COUNTRY = postal_BILL_COUNTRY;
	}

	/**
	 * @return the payment_METHOD
	 */
	public String getPayment_METHOD() {
		return payment_METHOD;
	}

	/**
	 * @param payment_METHOD
	 *            the payment_METHOD to set
	 */
	public void setPayment_METHOD(String payment_METHOD) {
		this.payment_METHOD = payment_METHOD;
	}

	/**
	 * @return the account_STATUS
	 */
	public String getAccount_STATUS() {
		return account_STATUS;
	}

	/**
	 * @param account_STATUS
	 *            the account_STATUS to set
	 */
	public void setAccount_STATUS(String account_STATUS) {
		this.account_STATUS = account_STATUS;
	}

	/**
	 * @return the sub_STATUS
	 */
	public String getSub_STATUS() {
		return sub_STATUS;
	}

	/**
	 * @param sub_STATUS
	 *            the sub_STATUS to set
	 */
	public void setSub_STATUS(String sub_STATUS) {
		this.sub_STATUS = sub_STATUS;
	}

	/**
	 * @return the postpaid_ACCOUNT_NO
	 */
	public String getPostpaid_ACCOUNT_NO() {
		return postpaid_ACCOUNT_NO;
	}

	/**
	 * @param postpaid_ACCOUNT_NO
	 *            the postpaid_ACCOUNT_NO to set
	 */
	public void setPostpaid_ACCOUNT_NO(String postpaid_ACCOUNT_NO) {
		this.postpaid_ACCOUNT_NO = postpaid_ACCOUNT_NO;
	}

	/**
	 * @return the business_LICENSE
	 */
	public String getBusiness_LICENSE() {
		return business_LICENSE;
	}

	/**
	 * @param business_LICENSE
	 *            the business_LICENSE to set
	 */
	public void setBusiness_LICENSE(String business_LICENSE) {
		this.business_LICENSE = business_LICENSE;
	}

	/**
	 * @return the bill_ACC_NAME
	 */
	public String getBill_ACC_NAME() {
		return bill_ACC_NAME;
	}

	/**
	 * @param bill_ACC_NAME
	 *            the bill_ACC_NAME to set
	 */
	public void setBill_ACC_NAME(String bill_ACC_NAME) {
		this.bill_ACC_NAME = bill_ACC_NAME;
	}

	/**
	 * @return the account_BILL
	 */
	public String getAccount_BILL() {
		return account_BILL;
	}

	/**
	 * @param account_BILL
	 *            the account_BILL to set
	 */
	public void setAccount_BILL(String account_BILL) {
		this.account_BILL = account_BILL;
	}

	/**
	 * @return the parent_ACCOUN_NO
	 */
	public String getParent_ACCOUN_NO() {
		return parent_ACCOUN_NO;
	}

	/**
	 * @param parent_ACCOUN_NO
	 *            the parent_ACCOUN_NO to set
	 */
	public void setParent_ACCOUN_NO(String parent_ACCOUN_NO) {
		this.parent_ACCOUN_NO = parent_ACCOUN_NO;
	}

	/**
	 * @return the cust_LANG
	 */
	public String getCust_LANG() {
		return cust_LANG;
	}

	/**
	 * @param cust_LANG
	 *            the cust_LANG to set
	 */
	public void setCust_LANG(String cust_LANG) {
		this.cust_LANG = cust_LANG;
	}

	/**
	 * @return the credit_STATUS
	 */
	public String getCredit_STATUS() {
		return credit_STATUS;
	}

	/**
	 * @param credit_STATUS
	 *            the credit_STATUS to set
	 */
	public void setCredit_STATUS(String credit_STATUS) {
		this.credit_STATUS = credit_STATUS;
	}

	/**
	 * @return the bill_FORMAT
	 */
	public String getBill_FORMAT() {
		return bill_FORMAT;
	}

	/**
	 * @param bill_FORMAT
	 *            the bill_FORMAT to set
	 */
	public void setBill_FORMAT(String bill_FORMAT) {
		this.bill_FORMAT = bill_FORMAT;
	}

	/**
	 * @return the bill_MEDIA
	 */
	public String getBill_MEDIA() {
		return bill_MEDIA;
	}

	/**
	 * @param bill_MEDIA
	 *            the bill_MEDIA to set
	 */
	public void setBill_MEDIA(String bill_MEDIA) {
		this.bill_MEDIA = bill_MEDIA;
	}

	/**
	 * @return the bill_TYPE
	 */
	public String getBill_TYPE() {
		return bill_TYPE;
	}

	/**
	 * @param bill_TYPE
	 *            the bill_TYPE to set
	 */
	public void setBill_TYPE(String bill_TYPE) {
		this.bill_TYPE = bill_TYPE;
	}

	/**
	 * @return the payment_TYPE
	 */
	public String getPayment_TYPE() {
		return payment_TYPE;
	}

	/**
	 * @param payment_TYPE
	 *            the payment_TYPE to set
	 */
	public void setPayment_TYPE(String payment_TYPE) {
		this.payment_TYPE = payment_TYPE;
	}

	/**
	 * @return the telephone_NO
	 */
	public String getTelephone_NO() {
		return telephone_NO;
	}

	/**
	 * @param telephone_NO
	 *            the telephone_NO to set
	 */
	public void setTelephone_NO(String telephone_NO) {
		this.telephone_NO = telephone_NO;
	}

	/**
	 * @return the cust_REF_NO
	 */
	public String getCust_REF_NO() {
		return cust_REF_NO;
	}

	/**
	 * @param cust_REF_NO
	 *            the cust_REF_NO to set
	 */
	public void setCust_REF_NO(String cust_REF_NO) {
		this.cust_REF_NO = cust_REF_NO;
	}

	/**
	 * @return the account_BALANCE
	 */
	public String getAccount_BALANCE() {
		return account_BALANCE;
	}

	/**
	 * @param account_BALANCE
	 *            the account_BALANCE to set
	 */
	public void setAccount_BALANCE(String account_BALANCE) {
		this.account_BALANCE = account_BALANCE;
	}

	/**
	 * @return the deposit_AMOUNT
	 */
	public String getDeposit_AMOUNT() {
		return deposit_AMOUNT;
	}

	/**
	 * @param deposit_AMOUNT
	 *            the deposit_AMOUNT to set
	 */
	public void setDeposit_AMOUNT(String deposit_AMOUNT) {
		this.deposit_AMOUNT = deposit_AMOUNT;
	}

	/**
	 * @return the credit_LIMIT
	 */
	public String getCredit_LIMIT() {
		return credit_LIMIT;
	}

	/**
	 * @param credit_LIMIT
	 *            the credit_LIMIT to set
	 */
	public void setCredit_LIMIT(String credit_LIMIT) {
		this.credit_LIMIT = credit_LIMIT;
	}

	public TRBillAccountObject() {
		super();
		// TODO Auto-generated constructor stub
	}

}
