package vn.com.fis.model.ProductOrder;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class SAProvinceReponse
{
	String staffCode;
	
	String province;
	String proId;

	@Temporal(TemporalType.DATE)
	Date createDate;
	
	@Temporal(TemporalType.DATE)
	Date endDate;
	
	String createBy;
	String status;
	
	public SAProvinceReponse(String staffCode, String province, String proId, Date createDate, Date endDate,
			String createBy, String status)
	{
		this.staffCode = staffCode;
		this.province = province;
		this.proId = proId;
		this.createDate = createDate;
		this.endDate = endDate;
		this.createBy = createBy;
		this.status = status;
	}
	public SAProvinceReponse() {
		
	}
	public String getStaffCode()
	{
		return staffCode;
	}
	public void setStaffCode(String staffCode)
	{
		this.staffCode = staffCode;
	}
	public String getProvince()
	{
		return province;
	}
	public void setProvince(String province)
	{
		this.province = province;
	}
	public String getProId()
	{
		return proId;
	}
	public void setProId(String proId)
	{
		this.proId = proId;
	}
	public Date getCreateDate()
	{
		return createDate;
	}
	public void setCreateDate(Date createDate)
	{
		this.createDate = createDate;
	}
	public Date getEndDate()
	{
		return endDate;
	}
	public void setEndDate(Date endDate)
	{
		this.endDate = endDate;
	}
	public String getCreateBy()
	{
		return createBy;
	}
	public void setCreateBy(String createBy)
	{
		this.createBy = createBy;
	}
	public String getStatus()
	{
		return status;
	}
	public void setStatus(String status)
	{
		this.status = status;
	}
}
