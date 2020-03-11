package vn.com.fis.model.css;

/**
 * The Class ReasonChangeSIMObject.
 */
public class ReasonChangeSIMObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -9006718011334216870L;

	/** The value. */
	private String value;

	/** The name. */
	private String name;

	/**
	 * Instantiates a new reason change SIM object.
	 *
	 * @param value
	 *            the value
	 * @param name
	 *            the name
	 */
	public ReasonChangeSIMObject(String value, String name)
	{
		this.value = value;
		this.name = name;
	}

	/**
	 * Instantiates a new reason change SIM object.
	 */
	public ReasonChangeSIMObject()
	{

	}

	/**
	 * Gets the value.
	 *
	 * @return the value
	 */
	public String getValue()
	{
		return value;
	}

	/**
	 * Sets the value.
	 *
	 * @param value
	 *            the new value
	 */
	public void setValue(String value)
	{
		this.value = value;
	}

	/**
	 * Gets the name.
	 *
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name
	 *            the new name
	 */
	public void setName(String name)
	{
		this.name = name;
	}

}
