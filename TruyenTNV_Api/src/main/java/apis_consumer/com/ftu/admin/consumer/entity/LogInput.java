package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;

/**
 * The Class LogInput.
 */
public class LogInput implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 350530759336369816L;

	/** The trans entity. */
	private TransEntity transEntity;

	/** The str asset obj. */
	private String strAssetObj;

	/** The str asset code. */
	private String strAssetCode;

	/** The str app code. */
	private String strAppCode;

	/**
	 * Gets the trans entity.
	 *
	 * @return the trans entity
	 */
	public TransEntity getTransEntity()
	{
		return transEntity;
	}

	/**
	 * Sets the trans entity.
	 *
	 * @param transEntity
	 *            the new trans entity
	 */
	public void setTransEntity(TransEntity transEntity)
	{
		this.transEntity = transEntity;
	}

	/**
	 * Gets the str asset obj.
	 *
	 * @return the str asset obj
	 */
	public String getStrAssetObj()
	{
		return strAssetObj;
	}

	/**
	 * Sets the str asset obj.
	 *
	 * @param strAssetObj
	 *            the new str asset obj
	 */
	public void setStrAssetObj(String strAssetObj)
	{
		this.strAssetObj = strAssetObj;
	}

	/**
	 * Gets the str asset code.
	 *
	 * @return the str asset code
	 */
	public String getStrAssetCode()
	{
		return strAssetCode;
	}

	/**
	 * Sets the str asset code.
	 *
	 * @param strAssetCode
	 *            the new str asset code
	 */
	public void setStrAssetCode(String strAssetCode)
	{
		this.strAssetCode = strAssetCode;
	}

	/**
	 * Gets the str app code.
	 *
	 * @return the str app code
	 */
	public String getStrAppCode()
	{
		return strAppCode;
	}

	/**
	 * Sets the str app code.
	 *
	 * @param strAppCode
	 *            the new str app code
	 */
	public void setStrAppCode(String strAppCode)
	{
		this.strAppCode = strAppCode;
	}

}
