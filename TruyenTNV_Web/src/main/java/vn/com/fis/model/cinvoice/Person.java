package vn.com.fis.model.cinvoice;

import vn.com.fis.tibco.model.entity.DynamicalEntity;
import vn.com.fis.tibco.model.entity.NotFoundCodeException;

import java.util.Date;
import java.util.Vector;

/**
 *
 * <p>Title: Person</p>
 *
 * <p>Description: </p>
 * Swap person information
 *
 * <p>Copyright: Copyright (c) 2008</p>
 *
 * <p>Company: FPT - IS</p>
 *
 * @author HoaiPN
 * @version 1.0
 */
public class Person extends DynamicalEntity
{
	private static final int SIZE = 50;
	public static final String NAME = "PERSON";

	public Person()
	{
		super(SIZE);
	}

	public Person(Vector row)
	{
		this.contructObjectFromRow(row);
	}

	public String getName()
	{
		return NAME;
	}

	public String getPostalLine1() throws NotFoundCodeException
	{
		return getProperty("POSTAL_LINE_1") != null ? (String)getProperty("POSTAL_LINE_1") : null;
	}

	public void setPostalLine1(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_LINE_1",value);
	}

	public String getPostalGeneral2() throws NotFoundCodeException
	{
		return getProperty("POSTAL_GENERAL_2") != null ? (String)getProperty("POSTAL_GENERAL_2") : null;
	}

	public void setPostalGeneral2(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_GENERAL_2",value);
	}

	public String getPostalGeneral3() throws NotFoundCodeException
	{
		return getProperty("POSTAL_GENERAL_3") != null ? (String)getProperty("POSTAL_GENERAL_3") : null;
	}

	public void setPostalGeneral3(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_GENERAL_3",value);
	}

	public String getPostalLine2() throws NotFoundCodeException
	{
		return getProperty("POSTAL_LINE_2") != null ? (String)getProperty("POSTAL_LINE_2") : null;
	}

	public void setPostalLine2(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_LINE_2",value);
	}

	public String getPostalSuburb() throws NotFoundCodeException
	{
		return getProperty("POSTAL_SUBURB") != null ? (String)getProperty("POSTAL_SUBURB") : null;
	}

	public void setPostalSuburb(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_SUBURB",value);
	}

	public String getPostalState() throws NotFoundCodeException
	{
		return getProperty("POSTAL_STATE") != null ? (String)getProperty("POSTAL_STATE") : null;
	}

	public void setPostalState(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_STATE",value);
	}

	public String getPostalGeneral1() throws NotFoundCodeException
	{
		return getProperty("POSTAL_GENERAL_1") != null ? (String)getProperty("POSTAL_GENERAL_1") : null;
	}

	public void setPostalGeneral1(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_GENERAL_1",value);
	}

	public String getPostalCity() throws NotFoundCodeException
	{
		return getProperty("POSTAL_CITY") != null ? (String)getProperty("POSTAL_CITY") : null;
	}

	public void setPostalCity(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_CITY",value);
	}

	public Long getPersonTypeId() throws NotFoundCodeException
	{
		return getProperty("PERSON_TYPE_ID") != null ? (Long)getProperty("PERSON_TYPE_ID") : null;
	}

	public void setPersonTypeId(Long value) throws NotFoundCodeException
	{
		setProperty("PERSON_TYPE_ID",value);
	}

	public String getOfficialName() throws NotFoundCodeException
	{
		return getProperty("OFFICIAL_NAME") != null ? (String)getProperty("OFFICIAL_NAME") : null;
	}

	public void setOfficialName(String value) throws NotFoundCodeException
	{
		setProperty("OFFICIAL_NAME",value);
	}

	public Long getPersonStatusCode() throws NotFoundCodeException
	{
		return getProperty("PERSON_STATUS_CODE") != null ? (Long)getProperty("PERSON_STATUS_CODE") : null;
	}

	public void setPersonStatusCode(Long value) throws NotFoundCodeException
	{
		setProperty("PERSON_STATUS_CODE",value);
	}

	public Long getPersonId() throws NotFoundCodeException
	{
		return getProperty("PERSON_ID") != null ? (Long)getProperty("PERSON_ID") : null;
	}

	public void setPersonId(Long value) throws NotFoundCodeException
	{
		setProperty("PERSON_ID",value);
	}

	public Long getWrittenLanguageCode() throws NotFoundCodeException
	{
		return getProperty("WRITTEN_LANGUAGE_CODE") != null ? (Long)getProperty("WRITTEN_LANGUAGE_CODE") : null;
	}

	public void setWrittenLanguageCode(Long value) throws NotFoundCodeException
	{
		setProperty("WRITTEN_LANGUAGE_CODE",value);
	}

	public String getHomeGeneral2() throws NotFoundCodeException
	{
		return getProperty("HOME_GENERAL_2") != null ? (String)getProperty("HOME_GENERAL_2") : null;
	}

	public void setHomeGeneral2(String value) throws NotFoundCodeException
	{
		setProperty("HOME_GENERAL_2",value);
	}

	public Long getResidencyStatusCode() throws NotFoundCodeException
	{
		return getProperty("RESIDENCY_STATUS_CODE") != null ? (Long)getProperty("RESIDENCY_STATUS_CODE") : null;
	}

	public void setResidencyStatusCode(Long value) throws NotFoundCodeException
	{
		setProperty("RESIDENCY_STATUS_CODE",value);
	}

	public Long getMaritalStatusCode() throws NotFoundCodeException
	{
		return getProperty("MARITAL_STATUS_CODE") != null ? (Long)getProperty("MARITAL_STATUS_CODE") : null;
	}

	public void setMaritalStatusCode(Long value) throws NotFoundCodeException
	{
		setProperty("MARITAL_STATUS_CODE",value);
	}

	public Double getYearlyEarnings() throws NotFoundCodeException
	{
		return getProperty("YEARLY_EARNINGS") != null ? (Double)getProperty("YEARLY_EARNINGS") : null;
	}

	public void setYearlyEarnings(Double value) throws NotFoundCodeException
	{
		setProperty("YEARLY_EARNINGS",value);
	}

	public Long getYearlyEarningsCurrencyId() throws NotFoundCodeException
	{
		return getProperty("YEARLY_EARNINGS_CURRENCY_ID") != null ? (Long)getProperty("YEARLY_EARNINGS_CURRENCY_ID") : null;
	}

	public void setYearlyEarningsCurrencyId(Long value) throws NotFoundCodeException
	{
		setProperty("YEARLY_EARNINGS_CURRENCY_ID",value);
	}

	public String getPostalGeneral4() throws NotFoundCodeException
	{
		return getProperty("POSTAL_GENERAL_4") != null ? (String)getProperty("POSTAL_GENERAL_4") : null;
	}

	public void setPostalGeneral4(String value) throws NotFoundCodeException
	{
		setProperty("POSTAL_GENERAL_4",value);
	}

	public String getFamilyName() throws NotFoundCodeException
	{
		return getProperty("FAMILY_NAME") != null ? (String)getProperty("FAMILY_NAME") : null;
	}

	public void setFamilyName(String value) throws NotFoundCodeException
	{
		setProperty("FAMILY_NAME",value);
	}

	public String getGivenNames() throws NotFoundCodeException
	{
		return getProperty("GIVEN_NAMES") != null ? (String)getProperty("GIVEN_NAMES") : null;
	}

	public void setGivenNames(String value) throws NotFoundCodeException
	{
		setProperty("GIVEN_NAMES",value);
	}

	public String getSocialSecurityNumber() throws NotFoundCodeException
	{
		return getProperty("SOCIAL_SECURITY_NUMBER") != null ? (String)getProperty("SOCIAL_SECURITY_NUMBER") : null;
	}

	public void setSocialSecurityNumber(String value) throws NotFoundCodeException
	{
		setProperty("SOCIAL_SECURITY_NUMBER",value);
	}

	public String getGeneral7() throws NotFoundCodeException
	{
		return getProperty("GENERAL_7") != null ? (String)getProperty("GENERAL_7") : null;
	}

	public void setGeneral7(String value) throws NotFoundCodeException
	{
		setProperty("GENERAL_7",value);
	}

	public String getGeneral6() throws NotFoundCodeException
	{
		return getProperty("GENERAL_6") != null ? (String)getProperty("GENERAL_6") : null;
	}

	public void setGeneral6(String value) throws NotFoundCodeException
	{
		setProperty("GENERAL_6",value);
	}

//	public String getGeneral6() throws NotFoundCodeException
//	{
//		return getProperty("GENERAL_6") != null ? (String)getProperty("GENERAL_6") : null;
//	}
//
//	public void setGeneral6(String value) throws NotFoundCodeException
//	{
//		setProperty("GENERAL_6",value);
//	}

	public String getPrimaryIdentifier2() throws NotFoundCodeException
	{
		return getProperty("PRIMARY_IDENTIFIER2") != null ? (String)getProperty("PRIMARY_IDENTIFIER2") : null;
	}

	public void setPrimaryIdentifier2(String value) throws NotFoundCodeException
	{
		setProperty("PRIMARY_IDENTIFIER2",value);
	}

	public String getGeneral9() throws NotFoundCodeException
	{
		return getProperty("GENERAL_9") != null ? (String)getProperty("GENERAL_9") : null;
	}

	public void setGeneral9(String value) throws NotFoundCodeException
	{
		setProperty("GENERAL_9",value);
	}

	public String getGeneral8() throws NotFoundCodeException
	{
		return getProperty("GENERAL_8") != null ? (String)getProperty("GENERAL_8") : null;
	}

	public void setGeneral8(String value) throws NotFoundCodeException
	{
		setProperty("GENERAL_8",value);
	}

	public Date getBirthDate() throws NotFoundCodeException
	{
		return getProperty("BIRTH_DATE") != null ? (Date)getProperty("BIRTH_DATE") : null;
	}

	public void setBirthDate(Date value) throws NotFoundCodeException
	{
		setProperty("BIRTH_DATE",value);
	}

	public String getPassword() throws NotFoundCodeException
	{
		return getProperty("PASSWORD") != null ? (String)getProperty("PASSWORD") : null;
	}

	public void setPassword(String value) throws NotFoundCodeException
	{
		setProperty("PASSWORD",value);
	}

	public String getEmailAddress() throws NotFoundCodeException
	{
		return getProperty("EMAIL_ADDRESS") != null ? (String)getProperty("EMAIL_ADDRESS") : null;
	}

	public void setEmailAddress(String value) throws NotFoundCodeException
	{
		setProperty("EMAIL_ADDRESS",value);
	}

	public String getEmployer() throws NotFoundCodeException
	{
		return getProperty("EMPLOYER") != null ? (String)getProperty("EMPLOYER") : null;
	}

	public void setEmployer(String value) throws NotFoundCodeException
	{
		setProperty("EMPLOYER",value);
	}

	public Long getNationalityCode() throws NotFoundCodeException
	{
		return getProperty("NATIONALITY_CODE") != null ? (Long)getProperty("NATIONALITY_CODE") : null;
	}

	public void setNationalityCode(Long value) throws NotFoundCodeException
	{
		setProperty("NATIONALITY_CODE",value);
	}

	public Long getSpokenLanguageCode() throws NotFoundCodeException
	{
		return getProperty("SPOKEN_LANGUAGE_CODE") != null ? (Long)getProperty("SPOKEN_LANGUAGE_CODE") : null;
	}

	public void setSpokenLanguageCode(Long value) throws NotFoundCodeException
	{
		setProperty("SPOKEN_LANGUAGE_CODE",value);
	}

	public String getHomePhoneNr() throws NotFoundCodeException
	{
		return getProperty("HOME_PHONE_NR") != null ? (String)getProperty("HOME_PHONE_NR") : null;
	}

	public void setHomePhoneNr(String value) throws NotFoundCodeException
	{
		setProperty("HOME_PHONE_NR",value);
	}

	public String getWorkPhoneNr() throws NotFoundCodeException
	{
		return getProperty("WORK_PHONE_NR") != null ? (String)getProperty("WORK_PHONE_NR") : null;
	}

	public void setWorkPhoneNr(String value) throws NotFoundCodeException
	{
		setProperty("WORK_PHONE_NR",value);
	}

	public String getMobilePhoneNr() throws NotFoundCodeException
	{
		return getProperty("MOBILE_PHONE_NR") != null ? (String)getProperty("MOBILE_PHONE_NR") : null;
	}

	public void setMobilePhoneNr(String value) throws NotFoundCodeException
	{
		setProperty("MOBILE_PHONE_NR",value);
	}

	public String getFaxPhoneNr() throws NotFoundCodeException
	{
		return getProperty("FAX_PHONE_NR") != null ? (String)getProperty("FAX_PHONE_NR") : null;
	}

	public void setFaxPhoneNr(String value) throws NotFoundCodeException
	{
		setProperty("FAX_PHONE_NR",value);
	}

	public String getHomeGeneral4() throws NotFoundCodeException
	{
		return getProperty("HOME_GENERAL_4") != null ? (String)getProperty("HOME_GENERAL_4") : null;
	}

	public void setHomeGeneral4(String value) throws NotFoundCodeException
	{
		setProperty("HOME_GENERAL_4",value);
	}

	public String getHomeGeneral3() throws NotFoundCodeException
	{
		return getProperty("HOME_GENERAL_3") != null ? (String)getProperty("HOME_GENERAL_3") : null;
	}

	public void setHomeGeneral3(String value) throws NotFoundCodeException
	{
		setProperty("HOME_GENERAL_3",value);
	}

	public String getHomeLine1() throws NotFoundCodeException
	{
		return getProperty("HOME_LINE_1") != null ? (String)getProperty("HOME_LINE_1") : null;
	}

	public void setHomeLine1(String value) throws NotFoundCodeException
	{
		setProperty("HOME_LINE_1",value);
	}

	public String getHomeLine2() throws NotFoundCodeException
	{
		return getProperty("HOME_LINE_2") != null ? (String)getProperty("HOME_LINE_2") : null;
	}

	public void setHomeLine2(String value) throws NotFoundCodeException
	{
		setProperty("HOME_LINE_2",value);
	}

	public String getHomeSuburb() throws NotFoundCodeException
	{
		return getProperty("HOME_SUBURB") != null ? (String)getProperty("HOME_SUBURB") : null;
	}

	public void setHomeSuburb(String value) throws NotFoundCodeException
	{
		setProperty("HOME_SUBURB",value);
	}

	public String getHomeCity() throws NotFoundCodeException
	{
		return getProperty("HOME_CITY") != null ? (String)getProperty("HOME_CITY") : null;
	}

	public void setHomeCity(String value) throws NotFoundCodeException
	{
		setProperty("HOME_CITY",value);
	}

	public String getHomeState() throws NotFoundCodeException
	{
		return getProperty("HOME_STATE") != null ? (String)getProperty("HOME_STATE") : null;
	}

	public void setHomeState(String value) throws NotFoundCodeException
	{
		setProperty("HOME_STATE",value);
	}

	public String getHomeGeneral1() throws NotFoundCodeException
	{
		return getProperty("HOME_GENERAL_1") != null ? (String)getProperty("HOME_GENERAL_1") : null;
	}

	public String getCompanyName() throws NotFoundCodeException
	{
		return getProperty("COMPANY_NAME") != null ? (String)getProperty("COMPANY_NAME") : null;
	}

	public void setCompanyName(String value) throws NotFoundCodeException
	{
		setProperty("COMPANY_NAME",value);
	}

	public void setHomeGeneral1(String value) throws NotFoundCodeException
	{
		setProperty("HOME_GENERAL_1",value);
	}

	public Long getGenderCode() throws NotFoundCodeException
	{
		return getProperty("GENDER_CODE") != null ? (Long)getProperty("GENDER_CODE") : null;
	}

	public void setGenderCode(Long value) throws NotFoundCodeException
	{
		setProperty("GENDER_CODE",value);
	}

	public Date getLastModified() throws NotFoundCodeException
	{
		return getProperty("LAST_MODIFIED") != null ? (Date)getProperty("LAST_MODIFIED") : null;
	}

	public void setLastModified(Date value) throws NotFoundCodeException
	{
		setProperty("LAST_MODIFIED",value);
	}

	public Date getEffectiveStartDate() throws NotFoundCodeException
	{
		return getProperty("EFFECTIVE_START_DATE") != null ? (Date)getProperty("EFFECTIVE_START_DATE") : null;
	}

	public void setEffectiveStartDate(Date value) throws NotFoundCodeException
	{
		setProperty("EFFECTIVE_START_DATE",value);
	}

	public Date getEffectiveEndDate() throws NotFoundCodeException
	{
		return getProperty("EFFECTIVE_END_DATE") != null ? (Date)getProperty("EFFECTIVE_END_DATE") : null;
	}

	public void setEffectiveEndDate(Date value) throws NotFoundCodeException
	{
		setProperty("EFFECTIVE_END_DATE",value);
	}

	/**
	 * select column_code, list_index, data_type from intect_object_detail where object_id = 4;
	 * @return String
	 *
	  select note_name, sv_field from param a, param_detail b
	  where a.param_id = b.param_id
	  and note_name = 'ID_NO';
	 */

	public String getIdCode(){
//		return "PERSON_ID";
		return "ACCOUNT_NUMBER"; //Final Victory modify for insert & search log
	}

	public Long getCustomerSegment() throws NotFoundCodeException
	{
		return getProperty("CUSTOMER_SEG") != null ? (Long)getProperty("CUSTOMER_SEG") : null;
	}

	public String getBusinessLicenses() throws NotFoundCodeException
	{
		return getProperty("LICENSES") != null ? (String)getProperty("LICENSES") : null;
	}

	public String getCustomerSegmentName() throws NotFoundCodeException
	{
		return getProperty("CUSTOMER_SEGMENT") != null ? (String)getProperty("CUSTOMER_SEGMENT") : null;
	}

	public String getFullName() throws NotFoundCodeException
	{
		return getProperty("FULL_NAME") != null ? (String)getProperty("FULL_NAME") : null;
	}

	public String getAccountNumber() throws NotFoundCodeException
	{
		return getProperty("ACCOUNT_NUMBER") != null ? (String)getProperty("ACCOUNT_NUMBER") : null;
	}

	public void setAccountNumber(String value) throws NotFoundCodeException
	{
		setProperty("ACCOUNT_NUMBER",value);
	}

}
