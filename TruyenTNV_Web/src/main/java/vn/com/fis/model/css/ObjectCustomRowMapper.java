package vn.com.fis.model.css;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import vn.com.fis.utils.css.CommonConstant;


/**
 * The Class PerPaidSearchHistObject.
 */
public class ObjectCustomRowMapper implements RowMapper
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ObjectCustomRowMapper.class);

	public RequestChangeServicesInput mapRowRequestChangeService(ResultSet rs, int rowNum) throws Exception
	{

		RequestChangeServicesInput request = new RequestChangeServicesInput();
		request.setRequestId(rs.getString("request_id"));
		request.setMsisdn(rs.getString("msisdn"));
		request.setStatus(rs.getString("status"));
		request.setServiceCode(rs.getString("service_code"));
		request.setType(rs.getString("TYPE"));
		request.setCmt(rs.getString("cmt"));
		request.setCreater(rs.getString("creater"));
		request.setCreateDate(rs.getString("create_date"));
		request.setExecuter(rs.getString("EXECUTER"));
		request.setExecuteDate(rs.getString("execute_date"));
		request.setCustomerName(rs.getString("customer_name"));
		request.setBirthdate(rs.getString("birthdate"));
		request.setAddress(rs.getString("address"));
		request.setPhone(rs.getString("phone"));
		request.setIdcard(rs.getString("idcard"));
		request.setMdnsVerify(rs.getString("mdns_verify"));

		request.setDescription(rs.getString("description"));

		if ("1".equals(request.getServiceCode()))
		{
			String description = convertDescription(rs.getString("description"));
			request.setDescription(description);
		}

		request.setPlaceissue(rs.getString("place_issue"));
		request.setDateissue(rs.getString("date_issue"));
		request.setApprover(rs.getString("approver"));
		request.setApproveDate(rs.getString("approve_date"));
		request.setReviewer(rs.getString("reviewer"));
		request.setReview_date(rs.getString("review_date"));
		request.setReview_reason(rs.getString("review_reason"));

		request.setImg_id(rs.getString("image_id"));
		request.setImg_id_2(rs.getString("img_id_2"));
		request.setFile_id(rs.getString("file_id"));
		request.setFile_id2(rs.getString("file_id2"));
		request.setCust_img(rs.getString("cust_img"));
		request.setBus_permit_no_img1(rs.getString("bus_permit_no_img1"));
		request.setContract_img1(rs.getString("contract_img1"));
		request.setContract_img2(rs.getString("contract_img2"));
		request.setAuthorized_img(rs.getString("authorized_img"));

		String des = rs.getString("description");
		if (des.contains("OldIdNo_IMG"))
		{
			request.setOld_idno_img(des.substring(des.indexOf("OldIdNo_IMG:") + 12, des.indexOf("OldIdNo2_IMG:")));
			request.setOld_idno_2_img(des.substring(des.indexOf("OldIdNo2_IMG:") + 13, des.indexOf("CK_IMG:")));
			request.setCk_img(des.substring(des.indexOf("CK_IMG:") + 7, des.indexOf("BUS_PERMIT_NO_IMG2:")));
		}
		else
		{
			request.setOld_idno_img("");
			request.setOld_idno_2_img("");
			request.setCk_img("");
		}

		// pcr 169 them anh img_cmgs
		request.setImgCmgs(rs.getString("img_cmgs"));

		return request;
	}

	public CusHistObject mapRow(ResultSet rs, int rowNum) throws SQLException
	{
		CusHistObject cus = new CusHistObject();
		cus.setRownum(rs.getString("ROWNUM"));
		cus.setAction_name(rs.getString("ACTION_NAME"));
		cus.setStaff(rs.getString("STAFF"));
		cus.setShop(rs.getString("SHOP"));
		cus.setDatetime(rs.getString("DATETIME"));
		cus.setName(rs.getString("NAME"));
		cus.setGender(rs.getString("GENDER"));
		cus.setDob(rs.getString("DOB"));
		cus.setIdcard(rs.getString("IDCARD"));
		cus.setPlaceOfIssue(rs.getString("PLACE_OF_ISSUE"));
		cus.setDateOfIssue(rs.getString("DATE_OF_ISSUE"));
		cus.setCompany(rs.getString("COMPANY"));
		cus.setTax(rs.getString("TAX"));
		cus.setCountry(rs.getString("COUNTRY"));
		cus.setAddress(rs.getString("ADDRESS"));
		cus.setProvince(rs.getString("PROVINCE"));
		cus.setDistrict(rs.getString("DISTRICT"));
		cus.setImgId(rs.getString("IMG_ID"));
		cus.setDescription(rs.getString("DESCRIPTION"));
		return cus;
	}

	public String convertDescription(String description) throws Exception
	{
		String nomeMetodo = ".convertDescription()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		LOG.info("description=" + description);
		String result = "";
		try
		{
			String str1 = description.substring(0, description.indexOf("SIM cu:"));
			String newSerial = description.substring(description.indexOf("SIM cu:"), description.indexOf("SIM cu:") + 26);
			String oldSerial = description.substring(description.indexOf("SIM moi:"), description.indexOf("SIM moi:") + 27);
			String str2 = "";

			if (description.contains("Ly do: "))
			{
				if ((description.charAt(description.indexOf("SIM moi:") + 27) >= 'A' && description.charAt(description.indexOf("SIM moi:") + 27) <= 'Z')
						|| (description.charAt(description.indexOf("SIM moi:") + 27) >= 'a' && description.charAt(description.indexOf("SIM moi:") + 27) <= 'z'))
				{
					str2 = description.substring(description.indexOf("SIM moi:") + 27);
				}
				else
				{
					str2 = description.substring(description.indexOf("SIM moi:") + 28);
				}
			}

			result = str1 + newSerial + oldSerial + str2;
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage());
			throw e;
		}
		LOG.info("result=" + result);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return result;
	}
}
