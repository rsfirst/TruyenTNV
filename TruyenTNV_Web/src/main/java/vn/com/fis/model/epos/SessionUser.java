package vn.com.fis.model.epos;

public class SessionUser implements java.io.Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3133049369009695775L;

	private String userName;
	private String transEntity;

	/**
	 * @return the userName
	 */
	public String getUserName()
	{
		return userName;
	}

	/**
	 * @param userName
	 *            the userName to set
	 */
	public void setUserName(String userName)
	{
		this.userName = userName;
	}

	/**
	 * @return the transEntity
	 */
	public String getTransEntity()
	{
		return transEntity;
	}

	/**
	 * @param transEntity
	 *            the transEntity to set
	 */
	public void setTransEntity(String transEntity)
	{
		this.transEntity = transEntity;
	}

}
