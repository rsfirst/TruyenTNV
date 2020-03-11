package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;
import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * The Class TransEntity.
 */
@XmlRootElement
public class TransEntity implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -4407706117862734343L;

	/** The app code. */
	private String appCode;

	/** The identity id. */
	private String identityId;

	/** The username. */
	private String username;

	/** The trans id. */
	private String transId;

	/** The remote addr. */
	private String remoteAddr;

	/** The interval. */
	private int interval;

	/** The create time. */
	private Date createTime;

	/**
	 * Gets the app code.
	 *
	 * @return the app code
	 */
	public String getAppCode()
	{
		return appCode;
	}

	/**
	 * Sets the app code.
	 *
	 * @param appCode
	 *            the new app code
	 */
	public void setAppCode(String appCode)
	{
		this.appCode = appCode;
	}

	/**
	 * Gets the username.
	 *
	 * @return the username
	 */
	public String getUsername()
	{
		return username;
	}

	/**
	 * Sets the username.
	 *
	 * @param username
	 *            the new username
	 */
	public void setUsername(String username)
	{
		this.username = username;
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
	 * Gets the remote addr.
	 *
	 * @return the remote addr
	 */
	public String getRemoteAddr()
	{
		return remoteAddr;
	}

	/**
	 * Sets the remote addr.
	 *
	 * @param remoteAddr
	 *            the new remote addr
	 */
	public void setRemoteAddr(String remoteAddr)
	{
		this.remoteAddr = remoteAddr;
	}

	/**
	 * Gets the interval.
	 *
	 * @return the interval
	 */
	public int getInterval()
	{
		return interval;
	}

	/**
	 * Sets the interval.
	 *
	 * @param interval
	 *            the new interval
	 */
	public void setInterval(int interval)
	{
		this.interval = interval;
	}

	/**
	 * Gets the creates the time.
	 *
	 * @return the creates the time
	 */
	public Date getCreateTime()
	{
		return createTime;
	}

	/**
	 * Sets the creates the time.
	 *
	 * @param createTime
	 *            the new creates the time
	 */
	public void setCreateTime(Date createTime)
	{
		this.createTime = createTime;
	}

	/**
	 * Gets the identity id.
	 *
	 * @return the identity id
	 */
	public String getIdentityId()
	{
		return identityId;
	}

	/**
	 * Sets the identity id.
	 *
	 * @param identityId
	 *            the new identity id
	 */
	public void setIdentityId(String identityId)
	{
		this.identityId = identityId;
	}
}
