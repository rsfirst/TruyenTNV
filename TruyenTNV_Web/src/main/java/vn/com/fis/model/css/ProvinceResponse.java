package vn.com.fis.model.css;

// TODO: Auto-generated Javadoc
/**
 * The Class CustomerResponse.
 */
public class ProvinceResponse
{

	/** The province. */
	private String province;

	/** The full name. */
	private String proId;

	private String region;
	
	private String shop;

	public ProvinceResponse()
	{
	}

	/**
	 * Instantiates a new province response.
	 *
	 * @param province
	 *            the province
	 * @param proId
	 *            the pro id
	 */
	public ProvinceResponse(String province, String proId)
	{
		this.province = province;
		this.proId = proId;
	}

	/**
	 * Gets the province.
	 *
	 * @return the province
	 */
	public String getProvince()
	{
		return province;
	}

	/**
	 * Sets the province.
	 *
	 * @param province
	 *            the new province
	 */
	public void setProvince(String province)
	{
		this.province = province;
	}

	/**
	 * Gets the pro id.
	 *
	 * @return the pro id
	 */
	public String getProId()
	{
		return proId;
	}

	/**
	 * Sets the pro id.
	 *
	 * @param proId
	 *            the new pro id
	 */
	public void setProId(String proId)
	{
		this.proId = proId;
	}

	public String getRegion()
	{
		return region;
	}

	public void setRegion(String region)
	{
		this.region = region;
	}

	public String getShop()
	{
		return shop;
	}

	public void setShop(String shop)
	{
		this.shop = shop;
	}

}
