package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * The Class LogInputParams.
 */
@XmlRootElement
public class LogInputParams implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -7400548099047071920L;

	/** The table name. */
	private String tableName = "";

	/** The primary key name. */
	private String primaryKeyName = "";

	/** The primary key value. */
	private String primaryKeyValue = "";

	/** The module name. */
	private String moduleName = "";

	/** The ip address. */
	private String ipAddress = "";

	/** The v object related. */
	private LogRelatedEntity vObjectRelated;

	/**
	 * Gets the table name.
	 *
	 * @return the table name
	 */
	public String getTableName()
	{
		return tableName;
	}

	/**
	 * Sets the table name.
	 *
	 * @param tableName
	 *            the new table name
	 */
	public void setTableName(String tableName)
	{
		this.tableName = tableName;
	}

	/**
	 * Gets the primary key name.
	 *
	 * @return the primary key name
	 */
	public String getPrimaryKeyName()
	{
		return primaryKeyName;
	}

	/**
	 * Sets the primary key name.
	 *
	 * @param primaryKeyName
	 *            the new primary key name
	 */
	public void setPrimaryKeyName(String primaryKeyName)
	{
		this.primaryKeyName = primaryKeyName;
	}

	/**
	 * Gets the primary key value.
	 *
	 * @return the primary key value
	 */
	public String getPrimaryKeyValue()
	{
		return primaryKeyValue;
	}

	/**
	 * Sets the primary key value.
	 *
	 * @param primaryKeyValue
	 *            the new primary key value
	 */
	public void setPrimaryKeyValue(String primaryKeyValue)
	{
		this.primaryKeyValue = primaryKeyValue;
	}

	/**
	 * Gets the module name.
	 *
	 * @return the module name
	 */
	public String getModuleName()
	{
		return moduleName;
	}

	/**
	 * Sets the module name.
	 *
	 * @param moduleName
	 *            the new module name
	 */
	public void setModuleName(String moduleName)
	{
		this.moduleName = moduleName;
	}

	/**
	 * Gets the ip address.
	 *
	 * @return the ip address
	 */
	public String getIpAddress()
	{
		return ipAddress;
	}

	/**
	 * Sets the ip address.
	 *
	 * @param ipAddress
	 *            the new ip address
	 */
	public void setIpAddress(String ipAddress)
	{
		this.ipAddress = ipAddress;
	}

	/**
	 * Gets the v object related.
	 *
	 * @return the v object related
	 */
	public LogRelatedEntity getvObjectRelated()
	{
		return vObjectRelated;
	}

	/**
	 * Sets the v object related.
	 *
	 * @param vObjectRelated
	 *            the new v object related
	 */
	public void setvObjectRelated(LogRelatedEntity vObjectRelated)
	{
		this.vObjectRelated = vObjectRelated;
	}
}
