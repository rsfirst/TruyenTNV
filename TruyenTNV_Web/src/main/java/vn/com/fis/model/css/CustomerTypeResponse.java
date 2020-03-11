package vn.com.fis.model.css;

/**
 * The Class CustomerResponse.
 */
public class CustomerTypeResponse
{

	/** The customer. */
	private String customer;

	/** The customer id. */
	private String customerId;

	/**
	 * Instantiates a new customer type response.
	 */
	public CustomerTypeResponse()
	{
	}

	/**
	 * Instantiates a new customer type response.
	 *
	 * @param customer
	 *            the customer
	 * @param customerId
	 *            the customer id
	 */
	public CustomerTypeResponse(String customer, String customerId)
	{
		this.customer = customer;
		this.customerId = customerId;
	}

	/**
	 * Gets the customer.
	 *
	 * @return the customer
	 */
	public String getCustomer()
	{
		return customer;
	}

	/**
	 * Sets the customer.
	 *
	 * @param customer
	 *            the new customer
	 */
	public void setCustomer(String customer)
	{
		this.customer = customer;
	}

	/**
	 * Gets the customer id.
	 *
	 * @return the customer id
	 */
	public String getCustomerId()
	{
		return customerId;
	}

	/**
	 * Sets the customer id.
	 *
	 * @param customerId
	 *            the new customer id
	 */
	public void setCustomerId(String customerId)
	{
		this.customerId = customerId;
	}

}
