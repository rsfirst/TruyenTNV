package vn.com.fis.model.css;

/**
 * The Class PerPaidSearchHistObject.
 */
public class DifferentObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -3008339994950468027L;

	/** The name. */
	private String name;

	/** The value old. */
	private String valueOld;

	/** The value new. */
	private String valueNew;

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

	/**
	 * Gets the value old.
	 *
	 * @return the value old
	 */
	public String getValueOld()
	{
		return valueOld;
	}

	/**
	 * Sets the value old.
	 *
	 * @param valueOld
	 *            the new value old
	 */
	public void setValueOld(String valueOld)
	{
		this.valueOld = valueOld;
	}

	/**
	 * Gets the value new.
	 *
	 * @return the value new
	 */
	public String getValueNew()
	{
		return valueNew;
	}

	/**
	 * Sets the value new.
	 *
	 * @param valueNew
	 *            the new value new
	 */
	public void setValueNew(String valueNew)
	{
		this.valueNew = valueNew;
	}
}
