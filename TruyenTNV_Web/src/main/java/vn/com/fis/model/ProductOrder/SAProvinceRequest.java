package vn.com.fis.model.ProductOrder;

import java.util.List;

import vn.com.fis.model.epos.ProvinceResponse;


public class SAProvinceRequest
{
	@Override
	public String toString()
	{
		return "SAProvinceRequest [startDate=" + startDate + ", endDate=" + endDate + ", staffCode=" + staffCode
				+ ", lstProvince=" + lstProvince + "]";
	}
	String startDate;
	String endDate;
	String staffCode;
	
	List<ProvinceResponse> lstProvince;
	
	public String getStartDate()
	{
		return startDate;
	}
	public void setStartDate(String startDate)
	{
		this.startDate = startDate;
	}
	public String getEndDate()
	{
		return endDate;
	}
	public void setEndDate(String endDate)
	{
		this.endDate = endDate;
	}
	public String getStaffCode()
	{
		return staffCode;
	}
	public void setStaffCode(String staffCode)
	{
		this.staffCode = staffCode;
	}
	public List<ProvinceResponse> getLstProvince()
	{
		return lstProvince;
	}
	public void setLstProvince(List<ProvinceResponse> lstProvince)
	{
		this.lstProvince = lstProvince;
	}
}
