package vn.com.fis.model.epos;

/**
 * The Class StaffObject.
 */
public class StaffObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -3521167464889512139L;

	/** The value. */
	private String value;

	/** The name. */
	private String name;

	private String code;

	private String staffId;

	public StaffObject()
	{
	}

	public StaffObject(String value, String name, String code, String staffId)
	{
		this.value = value;
		this.name = name;
		this.code = code;
		this.staffId = staffId;
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

	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getStaffId()
	{
		return staffId;
	}

	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

}
