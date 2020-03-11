package vn.com.fis.model.epos;

public class Loginput implements java.io.Serializable
{

	private static final long serialVersionUID = 2015883083248317111L;

	private String transEntity;
	private String strAssetObj;
	private String strAssetCode;
	private String strAppCode;

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

	/**
	 * @return the strAssetObj
	 */
	public String getStrAssetObj()
	{
		return strAssetObj;
	}

	/**
	 * @param strAssetObj
	 *            the strAssetObj to set
	 */
	public void setStrAssetObj(String strAssetObj)
	{
		this.strAssetObj = strAssetObj;
	}

	/**
	 * @return the strAssetCode
	 */
	public String getStrAssetCode()
	{
		return strAssetCode;
	}

	/**
	 * @param strAssetCode
	 *            the strAssetCode to set
	 */
	public void setStrAssetCode(String strAssetCode)
	{
		this.strAssetCode = strAssetCode;
	}

	/**
	 * @return the strAppCode
	 */
	public String getStrAppCode()
	{
		return strAppCode;
	}

	/**
	 * @param strAppCode
	 *            the strAppCode to set
	 */
	public void setStrAppCode(String strAppCode)
	{
		this.strAppCode = strAppCode;
	}

}
