package vn.com.fis.model.css;

/**
 * The Class CustomerResponse.
 */
public class CountryResponse
{

	/** The province. */
	private String country;

	/** The full name. */
	private String countryId;

	public CountryResponse()
	{
	}

	/**
	 * Instantiates a new district response.
	 *
	 * @param country
	 *            the country
	 * @param countryId
	 *            the country id
	 */
	public CountryResponse(String country, String countryId)
	{
		this.country = country;
		this.countryId = countryId;
	}

	/**
	 * Gets the country.
	 *
	 * @return the country
	 */
	public String getCountry()
	{
		return country;
	}

	/**
	 * Sets the country.
	 *
	 * @param country
	 *            the new country
	 */
	public void setCountry(String country)
	{
		this.country = country;
	}

	/**
	 * Gets the country id.
	 *
	 * @return the country id
	 */
	public String getCountryId()
	{
		return countryId;
	}

	/**
	 * Sets the country id.
	 *
	 * @param countryId
	 *            the new country id
	 */
	public void setCountryId(String countryId)
	{
		this.countryId = countryId;
	}

}
