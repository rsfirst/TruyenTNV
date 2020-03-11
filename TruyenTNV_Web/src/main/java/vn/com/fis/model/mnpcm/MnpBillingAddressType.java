
package vn.com.fis.model.mnpcm;

public class MnpBillingAddressType
{

	protected String billRegion;
	protected String billProvince;
	protected String billDistrict;
	protected String billAddressLine;
	protected String billCountry;

	protected String billTow;
	protected String billRoad;
	protected String billNumberHome;
	protected String billBuildingName;
	protected String billRoomNumber;

	public String getBillRegion()
	{
		return billRegion;
	}

	public void setBillRegion(String value)
	{
		this.billRegion = value;
	}

	public String getBillProvince()
	{
		return billProvince;
	}

	public void setBillProvince(String value)
	{
		this.billProvince = value;
	}

	public String getBillDistrict()
	{
		return billDistrict;
	}

	public void setBillDistrict(String value)
	{
		this.billDistrict = value;
	}

	public String getBillAddressLine()
	{
		return billAddressLine;
	}

	public void setBillAddressLine(String value)
	{
		this.billAddressLine = value;
	}

	public String getBillCountry()
	{
		return billCountry;
	}

	public void setBillCountry(String value)
	{
		this.billCountry = value;
	}

	public String getBillTow()
	{
		return billTow;
	}

	public void setBillTow(String billTow)
	{
		this.billTow = billTow;
	}

	public String getBillRoad()
	{
		return billRoad;
	}

	public void setBillRoad(String billRoad)
	{
		this.billRoad = billRoad;
	}

	public String getBillNumberHome()
	{
		return billNumberHome;
	}

	public void setBillNumberHome(String billNumberHome)
	{
		this.billNumberHome = billNumberHome;
	}

	public String getBillBuildingName()
	{
		return billBuildingName;
	}

	public void setBillBuildingName(String billBuildingName)
	{
		this.billBuildingName = billBuildingName;
	}

	public String getBillRoomNumber()
	{
		return billRoomNumber;
	}

	public void setBillRoomNumber(String billRoomNumber)
	{
		this.billRoomNumber = billRoomNumber;
	}

	@Override
	public String toString()
	{
		return "MnpBillingAddressType [billRegion=" + billRegion + ", billProvince=" + billProvince + ", billDistrict=" + billDistrict + ", billAddressLine="
				+ billAddressLine + ", billCountry=" + billCountry + ", billTow=" + billTow + ", billRoad=" + billRoad + ", billNumberHome=" + billNumberHome
				+ ", billBuildingName=" + billBuildingName + ", billRoomNumber=" + billRoomNumber + "]";
	}

	
}
