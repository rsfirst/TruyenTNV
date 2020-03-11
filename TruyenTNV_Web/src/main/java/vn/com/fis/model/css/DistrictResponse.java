package vn.com.fis.model.css;

// TODO: Auto-generated Javadoc
/**
 * The Class CustomerResponse.
 */
public class DistrictResponse
{

	/** The province. */
	private String district;

	/** The full name. */
	private String disId;

	public DistrictResponse()
	{
	}

	/**
	 * Instantiates a new district response.
	 *
	 * @param district
	 *            the district
	 * @param disId
	 *            the dis id
	 */
	public DistrictResponse(String district, String disId)
	{
		this.district = district;
		this.disId = disId;
	}

	/**
	 * Gets the district.
	 *
	 * @return the district
	 */
	public String getDistrict()
	{
		return district;
	}

	/**
	 * Sets the district.
	 *
	 * @param district
	 *            the new district
	 */
	public void setDistrict(String district)
	{
		this.district = district;
	}

	/**
	 * Gets the dis id.
	 *
	 * @return the dis id
	 */
	public String getDisId()
	{
		return disId;
	}

	/**
	 * Sets the dis id.
	 *
	 * @param disId
	 *            the new dis id
	 */
	public void setDisId(String disId)
	{
		this.disId = disId;
	}

}
