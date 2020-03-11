package vn.com.fis.entity.css;

import vn.com.fis.common.css.CommonConvert;
import vn.com.fis.model.css.CustomerSQLData_1;
import vn.com.fis.model.css.SubscriberSQLData1;
import vn.com.fis.utils.css.CommonConstant;

import java.sql.SQLException;
import java.util.Calendar;

/**
 * The Class SQLObjectConverter.
 */
public class SQLObjectConverter
{

	/**
	 * Convert sub to DB in obj with attack.
	 *
	 * @param preSub
	 *            the pre sub
	 * @param chanelId
	 *            the chanel id
	 * @param transId
	 *            the trans id
	 * @param chanel
	 *            the chanel
	 * @param des
	 *            the des
	 * @param reasonId
	 *            the reason id
	 * @return the subscriber SQL data 1
	 * @throws SQLException
	 *             the SQL exception
	 * @throws Exception
	 *             the exception
	 */
	public static SubscriberSQLData1 convertSubToDBInObjWithAttack(vn.com.fis.tibco.model.entity.PreSubscriber preSub, String chanelId, String transId,
			String chanel, String des, String reasonId) throws SQLException, Exception
	{
		SubscriberSQLData1 subDataINObj = new SubscriberSQLData1();
		subDataINObj = convertSubToDBInObj1(preSub, chanelId, transId, chanel, des, reasonId);

		return subDataINObj;
	}

	/**
	 * Convert cust to DB in obj with img.
	 *
	 * @param preCust
	 *            the pre cust
	 * @return the customer SQL data 1
	 * @throws SQLException
	 *             the SQL exception
	 * @throws Exception
	 *             the exception
	 */
	public static CustomerSQLData_1 convertCustToDBInObjWithImg(vn.com.fis.tibco.model.entity.PreCustomer preCust) throws SQLException, Exception
	{
		CustomerSQLData_1 custDataINObj = new CustomerSQLData_1();
		custDataINObj = convertCustToDBInObj1(preCust);

		return custDataINObj;
	}

	/**
	 * Convert sub to DB in obj 1.
	 *
	 * @param preSub
	 *            the pre sub
	 * @param chanelId
	 *            the chanel id
	 * @param transId
	 *            the trans id
	 * @param chanel
	 *            the chanel
	 * @param des
	 *            the des
	 * @param reasonId
	 *            the reason id
	 * @return the subscriber SQL data 1
	 * @throws SQLException
	 *             the SQL exception
	 * @throws Exception
	 *             the exception
	 */
	public static SubscriberSQLData1 convertSubToDBInObj1(vn.com.fis.tibco.model.entity.PreSubscriber preSub, String chanelId, String transId, String chanel,
			String des, String reasonId) throws SQLException, Exception
	{
		SubscriberSQLData1 subDataINObj = new SubscriberSQLData1();
		if (preSub.getSubscriberId() != "0")
		{
			subDataINObj.setSubscriberId(String.valueOf(preSub.getSubscriberId()));
		}
		subDataINObj.setImsi(preSub.getImsi());
		subDataINObj.setSerial(preSub.getSerial().trim());
		subDataINObj.setMdn(preSub.getMdn().getMdn().substring(1, preSub.getMdn().getMdn().length()));

		subDataINObj.setStatus(preSub.getStatus());
		if (preSub.getStockCreated() != "0")
		{
			subDataINObj.setStockCreated(String.valueOf(preSub.getStockCreated()));
		}
		if (preSub.getDateCreated() != null)
		{
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(CommonConvert.convert(preSub.getDateCreated(), CommonConstant.YYYYMMDD_S));
			subDataINObj.setDateCreated(new java.sql.Date(calendar.getTimeInMillis()));
		}
		if (preSub.getStockModified() != "0")
		{
			subDataINObj.setStockModified(String.valueOf(preSub.getStockModified()));
		}
		if (preSub.getLastModify() != null)
		{
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(CommonConvert.convert(preSub.getLastModify(), CommonConstant.YYYYMMDD_S));
			subDataINObj.setLastModify(new java.sql.Date(calendar.getTimeInMillis()));
		}
		if (preSub.getActiveDate() != null)
		{
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(CommonConvert.convert(preSub.getActiveDate(), CommonConstant.YYYYMMDD_S));
			subDataINObj.setActiveDate(new java.sql.Date(calendar.getTimeInMillis()));
		}

		subDataINObj.setCOS(preSub.getCOS());
		subDataINObj.setCurrentState(preSub.getCurrentState());
		subDataINObj.setProvisionning(preSub.getProvisionning());
		if (preSub.getSvProductInstanceId() != null)
		{
			subDataINObj.setSVProductInstanceId(String.valueOf(preSub.getSvProductInstanceId()));
		}

		subDataINObj.setChanelId(chanelId);
		subDataINObj.setTransId(transId);
		subDataINObj.setChanel(chanel);
		subDataINObj.setDes(des);
		subDataINObj.setReasonId(reasonId);
		subDataINObj.setattackID(preSub.getFile_id());
		subDataINObj.setFile_id_2(preSub.getFile_id_2());
		subDataINObj.setContract_img1(preSub.getContract_img1());
		subDataINObj.setContract_img2(preSub.getContract_img2());
		subDataINObj.setSub_use_type(preSub.getSub_user_type());
		subDataINObj.setSub_payment_type(preSub.getSub_payment_type());
		subDataINObj.setShop_code(preSub.getShopCode());
		subDataINObj.setStaff_code(preSub.getCreateUser());

		return subDataINObj;
	}

	/**
	 * Convert cust to DB in obj 1.
	 *
	 * @param preCust
	 *            the pre cust
	 * @return the customer SQL data 1
	 * @throws SQLException
	 *             the SQL exception
	 * @throws Exception
	 *             the exception
	 */
	public static CustomerSQLData_1 convertCustToDBInObj1(vn.com.fis.tibco.model.entity.PreCustomer preCust) throws SQLException, Exception
	{
		CustomerSQLData_1 custDataINObj = new CustomerSQLData_1();
		if(preCust.getCustomerId() == null) {
			custDataINObj.setCustomerId("0"); //DatBD2 update
		}else {
			//if (preCust.getCustomerId() != "0")
			custDataINObj.setCustomerId(preCust.getCustomerId()); 
		}
		custDataINObj.setFirstName(preCust.getFirstName());
		custDataINObj.setLastName(preCust.getLastName());
		custDataINObj.setFullName(preCust.getFullName());

		if (preCust.getDob() != null)
		{
			Calendar calendar = Calendar.getInstance();
			if (preCust.getDob().indexOf("/") > 0)
			{
				calendar.setTime(CommonConvert.convert(preCust.getDob(), CommonConstant.ddMMyyyy));
			}
			else
			{
				calendar.setTime(CommonConvert.convert(preCust.getDob(), CommonConstant.YYYYMMDD_S));
			}
			custDataINObj.setDob(new java.sql.Date(calendar.getTimeInMillis()));
		}
		custDataINObj.setIdCard(String.valueOf(preCust.getIdCard()));
		custDataINObj.setPlaceOfIssue(preCust.getPlaceOfIssue());
		if (preCust.getDateOfIssue() != null)
		{
			Calendar calendar = Calendar.getInstance();
			if (preCust.getDateOfIssue().indexOf("/") > 0)
			{
				calendar.setTime(CommonConvert.convert(preCust.getDateOfIssue(), CommonConstant.ddMMyyyy));
			}
			else
			{
				calendar.setTime(CommonConvert.convert(preCust.getDateOfIssue(), CommonConstant.YYYYMMDD_S));
			}
			custDataINObj.setDateOfIssue(new java.sql.Date(calendar.getTimeInMillis()));
		}
		custDataINObj.setCountry(preCust.getCountry());

		custDataINObj.setRegion(preCust.getRegion());
		custDataINObj.setProvince(preCust.getProvince());
		custDataINObj.setDistrict(preCust.getDistrict());
		custDataINObj.setAddress(preCust.getAddress());
		custDataINObj.setCustomerType(preCust.getCustomerType());
		custDataINObj.setCompanyName(preCust.getCompanyName());
		if (preCust.getStockCreated() != "0")
			custDataINObj.setStockCreated(String.valueOf(preCust.getStockCreated()));

		if (preCust.getDateCreated() != null)
		{
			Calendar calendar = Calendar.getInstance();
			if (preCust.getDateCreated().indexOf("/") > 0)
			{
				calendar.setTime(CommonConvert.convert(preCust.getDateCreated(), CommonConstant.ddMMyyyy));
			}
			else
			{
				calendar.setTime(CommonConvert.convert(preCust.getDateCreated(), CommonConstant.YYYYMMDD_S));
			}
			custDataINObj.setDateCreated(new java.sql.Date(calendar.getTimeInMillis()));
		}
		if (preCust.getLastModify() != null)
		{
			Calendar calendar = Calendar.getInstance();
			if (preCust.getLastModify().indexOf("/") > 0)
			{
				calendar.setTime(CommonConvert.convert(preCust.getLastModify(), CommonConstant.ddMMyyyy));
			}
			else
			{
				calendar.setTime(CommonConvert.convert(preCust.getLastModify(), CommonConstant.YYYYMMDD_S));
			}
			custDataINObj.setLastModify(new java.sql.Date(calendar.getTimeInMillis()));
		}
		if (preCust.getSvCustomerNodeId() != null)
			custDataINObj.setSvCustomerNodeId(String.valueOf(preCust.getSvCustomerNodeId()));

		custDataINObj.setCompanyName(preCust.getCompanyName());
		if (preCust.getStockModified() != "0")
			custDataINObj.setStockModified(String.valueOf(preCust.getStockModified()));
		custDataINObj.setTaxCode(preCust.getTaxCode());
		custDataINObj.setGender(preCust.getGender());
		custDataINObj.setImgID(preCust.getImg_id());
		custDataINObj.setImgID_2(preCust.getImg_id_2());
		custDataINObj.setAuthorized_img(preCust.getAuthorized_img());
		custDataINObj.setBus_permit_no_img1(preCust.getBus_permit_no_img1());
		custDataINObj.setContract_img1("");
		custDataINObj.setContract_img2("");
		custDataINObj.setCust_img(preCust.getCust_img());
		custDataINObj.setType_card(preCust.getType_card());
		custDataINObj.setType_card_company(preCust.getType_card_company());
		custDataINObj.setParent_customer_id(preCust.getParent_customer_id());
		custDataINObj.setAddress_company(preCust.getAddress_company());
		custDataINObj.setParent_img(preCust.getParent_img());
		custDataINObj.setBus_permit_no_img2(preCust.getBus_permit_no_img2());
		return custDataINObj;
	}
}
