package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * The Class TransNotify.
 */
@XmlRootElement
public class TransNotify implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -5021393854840697025L;

	/** The trans id. */
	private String transId;

	/** The type. */
	private String type;

	/** The code. */
	private String code;

	/** The message. */
	private String message;

	/** The status. */
	private String status;

	/**
	 * Instantiates a new trans notify.
	 */
	public TransNotify()
	{
		super();
	}

	/**
	 * Gets the trans id.
	 *
	 * @return the trans id
	 */
	public String getTransId()
	{
		return transId;
	}

	/**
	 * Sets the trans id.
	 *
	 * @param transId
	 *            the new trans id
	 */
	public void setTransId(String transId)
	{
		this.transId = transId;
	}

	/**
	 * Gets the type.
	 *
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * Sets the type.
	 *
	 * @param type
	 *            the new type
	 */
	public void setType(String type)
	{
		this.type = type;
	}

	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * Sets the status.
	 *
	 * @param status
	 *            the new status
	 */
	public void setStatus(String status)
	{
		this.status = status;
	}

	/**
	 * Gets the message.
	 *
	 * @return the message
	 */
	public String getMessage()
	{
		return message;
	}

	/**
	 * Sets the message.
	 *
	 * @param message
	 *            the new message
	 */
	public void setMessage(String message)
	{
		this.message = message;
	}

	/**
	 * Gets the code.
	 *
	 * @return the code
	 */
	public String getCode()
	{
		return code;
	}

	/**
	 * Sets the code.
	 *
	 * @param code
	 *            the new code
	 */
	public void setCode(String code)
	{
		this.code = code;
	}

}
