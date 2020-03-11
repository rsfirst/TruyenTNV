package vn.com.fis.report.css;

import java.io.Serializable;

public class RequestEformParam implements Serializable
{

	private String isdn;
	private String requestId;
	private String staffName;
	private String shopCode;
	private String reportType;

	public String getIsdn()
	{
		return isdn;
	}

	public void setIsdn(String isdn)
	{
		this.isdn = isdn;
	}

	public String getRequestId()
	{
		return requestId;
	}

	public void setRequestId(String requestId)
	{
		this.requestId = requestId;
	}

	public String getStaffName()
	{
		return staffName;
	}

	public void setStaffName(String staffName)
	{
		this.staffName = staffName;
	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	public String getReportType()
	{
		return reportType;
	}

	public void setReportType(String reportType)
	{
		this.reportType = reportType;
	}

}
