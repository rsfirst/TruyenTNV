	package vn.com.fis.model.epos;

// TODO: Auto-generated Javadoc
/**
 * The Class COSObject.
 */
public class ApDomainModel implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -2141009478876314259L;

	/** The value. */
	private String value;

	/** The name. */
	private String name;

	/** The group code. */
	private String groupCode;
	private String status;
	private String code;
	private String type;

	public ApDomainModel()
	{
		// TODO Auto-generated constructor stub
	}

	public ApDomainModel(String value, String name, String groupCode, String status, String code, String type)
	{
		this.value = value;
		this.name = name;
		this.groupCode = groupCode;
		this.status = status;
		this.code = code;
		this.type = type;

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

	/**
	 * Gets the group code.
	 *
	 * @return the group code
	 */
	public String getGroupCode()
	{
		return groupCode;
	}

	/**
	 * Sets the group code.
	 *
	 * @param groupCode
	 *            the new group code
	 */
	public void setGroupCode(String groupCode)
	{
		this.groupCode = groupCode;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

}
