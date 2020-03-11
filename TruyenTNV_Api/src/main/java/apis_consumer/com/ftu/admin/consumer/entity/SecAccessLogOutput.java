package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * The Class SecAccessLogOutput.
 */
@XmlRootElement
public class SecAccessLogOutput extends ResponseOutput implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -2466489962678746520L;

	/** The lst sec access. */
	private List<SecAccessLogEntity> lstSecAccess = new ArrayList<SecAccessLogEntity>();

	/**
	 * Instantiates a new sec access log output.
	 */
	public SecAccessLogOutput()
	{
		super();
	}

	/**
	 * Gets the lst sec access.
	 *
	 * @return the lst sec access
	 */
	public List<SecAccessLogEntity> getLstSecAccess()
	{
		return lstSecAccess;
	}

	/**
	 * Sets the lst sec access.
	 *
	 * @param lstSecAccess
	 *            the new lst sec access
	 */
	public void setLstSecAccess(List<SecAccessLogEntity> lstSecAccess)
	{
		this.lstSecAccess = lstSecAccess;
	}

}
