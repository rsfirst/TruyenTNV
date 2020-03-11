package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * The Class LogRelatedEntity.
 */
@XmlRootElement
public class LogRelatedEntity implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -3888383573975161721L;

	/** The value. */
	private String value;

	/** The children. */
	private List<LogRelatedEntity> children = new ArrayList<LogRelatedEntity>();

	/**
	 * Instantiates a new log related entity.
	 */
	public LogRelatedEntity()
	{
		super();
	}

	/**
	 * Instantiates a new log related entity.
	 *
	 * @param value
	 *            the value
	 */
	public LogRelatedEntity(String value)
	{
		super();
		this.value = value;
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
	 * Gets the children.
	 *
	 * @return the children
	 */
	public List<LogRelatedEntity> getChildren()
	{
		return children;
	}

	/**
	 * Sets the children.
	 *
	 * @param children
	 *            the new children
	 */
	public void setChildren(List<LogRelatedEntity> children)
	{
		this.children = children;
	}
}
