
package vn.com.fis.model.mnpcm;

public class MnpPostalAddressType
{

	protected String postalRegion;
	protected String postalProvince;
	protected String postalDistrict;
	protected String postalAddressLine;
	protected String postalCountry;

	protected String postalTow;
	protected String postalRoad;
	protected String postalNumberHome;
	protected String postalBuildingName;
	protected String postalRoomNumber;

	public String getPostalRegion()
	{
		return postalRegion;
	}

	public void setPostalRegion(String value)
	{
		this.postalRegion = value;
	}

	public String getPostalProvince()
	{
		return postalProvince;
	}

	public void setPostalProvince(String value)
	{
		this.postalProvince = value;
	}

	public String getPostalDistrict()
	{
		return postalDistrict;
	}

	public void setPostalDistrict(String value)
	{
		this.postalDistrict = value;
	}

	public String getPostalAddressLine()
	{
		return postalAddressLine;
	}

	public void setPostalAddressLine(String value)
	{
		this.postalAddressLine = value;
	}

	public String getPostalCountry()
	{
		return postalCountry;
	}

	public void setPostalCountry(String value)
	{
		this.postalCountry = value;
	}

	public String getPostalTow()
	{
		return postalTow;
	}

	public void setPostalTow(String postalTow)
	{
		this.postalTow = postalTow;
	}

	public String getPostalRoad()
	{
		return postalRoad;
	}

	public void setPostalRoad(String postalRoad)
	{
		this.postalRoad = postalRoad;
	}

	public String getPostalNumberHome()
	{
		return postalNumberHome;
	}

	public void setPostalNumberHome(String postalNumberHome)
	{
		this.postalNumberHome = postalNumberHome;
	}

	public String getPostalBuildingName()
	{
		return postalBuildingName;
	}

	public void setPostalBuildingName(String postalBuildingName)
	{
		this.postalBuildingName = postalBuildingName;
	}

	public String getPostalRoomNumber()
	{
		return postalRoomNumber;
	}

	public void setPostalRoomNumber(String postalRoomNumber)
	{
		this.postalRoomNumber = postalRoomNumber;
	}

	@Override
	public String toString()
	{
		return "MnpPostalAddressType [postalRegion=" + postalRegion + ", postalProvince=" + postalProvince + ", postalDistrict=" + postalDistrict
				+ ", postalAddressLine=" + postalAddressLine + ", postalCountry=" + postalCountry + ", postalTow=" + postalTow + ", postalRoad=" + postalRoad
				+ ", postalNumberHome=" + postalNumberHome + ", postalBuildingName=" + postalBuildingName + ", postalRoomNumber=" + postalRoomNumber + "]";
	}

}
