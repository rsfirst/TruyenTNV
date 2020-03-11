package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * The Class LocationOutput.
 */
@XmlRootElement
public class LocationOutput implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 4920806880782394935L;

	/** The error code. */
	private String errorCode;

	/** The error message. */
	private String errorMessage;

	/** The error cause. */
	private String errorCause;

	/** The error recommend. */
	private String errorRecommend;

	/** The locations. */
	private List<LocationEntity> locations;

	/** The status. */
	private String status;

	/**
	 * Instantiates a new location output.
	 */
	public LocationOutput()
	{

		super();
	}

	/**
	 * Gets the error code.
	 *
	 * @return the error code
	 */
	public String getErrorCode()
	{
		return errorCode;
	}

	/**
	 * Gets the error message.
	 *
	 * @return the error message
	 */
	public String getErrorMessage()
	{
		return errorMessage;
	}

	/**
	 * Gets the error cause.
	 *
	 * @return the error cause
	 */
	public String getErrorCause()
	{
		return errorCause;
	}

	/**
	 * Gets the error recommend.
	 *
	 * @return the error recommend
	 */
	public String getErrorRecommend()
	{
		return errorRecommend;
	}

	/**
	 * Sets the error code.
	 *
	 * @param errorCode
	 *            the new error code
	 */
	public void setErrorCode(String errorCode)
	{
		this.errorCode = errorCode;
	}

	/**
	 * Sets the error message.
	 *
	 * @param errorMessage
	 *            the new error message
	 */
	public void setErrorMessage(String errorMessage)
	{
		this.errorMessage = errorMessage;
	}

	/**
	 * Sets the error cause.
	 *
	 * @param errorCause
	 *            the new error cause
	 */
	public void setErrorCause(String errorCause)
	{
		this.errorCause = errorCause;
	}

	/**
	 * Sets the error recommend.
	 *
	 * @param errorRecommend
	 *            the new error recommend
	 */
	public void setErrorRecommend(String errorRecommend)
	{
		this.errorRecommend = errorRecommend;
	}

	/**
	 * Gets the locations.
	 *
	 * @return the locations
	 */
	public List<LocationEntity> getLocations()
	{
		return locations;
	}

	/**
	 * Sets the locations.
	 *
	 * @param locations
	 *            the new locations
	 */
	public void setLocations(List<LocationEntity> locations)
	{
		this.locations = locations;
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

}
