package vn.com.fis.model.epos;

public class CommonValuesOutput implements java.io.Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6349368305521947870L;

	private String sessionResourceCode;
	private String sessionStaffStockID;
	private String sessionStockID;
	private StockParent stockParent;

	/**
	 * @return the sessionResourceCode
	 */
	public String getSessionResourceCode()
	{
		return sessionResourceCode;
	}

	/**
	 * @param sessionResourceCode
	 *            the sessionResourceCode to set
	 */
	public void setSessionResourceCode(String sessionResourceCode)
	{
		this.sessionResourceCode = sessionResourceCode;
	}

	/**
	 * @return the sessionStaffStockID
	 */
	public String getSessionStaffStockID()
	{
		return sessionStaffStockID;
	}

	/**
	 * @param sessionStaffStockID
	 *            the sessionStaffStockID to set
	 */
	public void setSessionStaffStockID(String sessionStaffStockID)
	{
		this.sessionStaffStockID = sessionStaffStockID;
	}

	/**
	 * @return the sessionStockID
	 */
	public String getSessionStockID()
	{
		return sessionStockID;
	}

	/**
	 * @param sessionStockID
	 *            the sessionStockID to set
	 */
	public void setSessionStockID(String sessionStockID)
	{
		this.sessionStockID = sessionStockID;
	}

	/**
	 * @return the stockParent
	 */
	public StockParent getStockParent()
	{
		return stockParent;
	}

	/**
	 * @param stockParent
	 *            the stockParent to set
	 */
	public void setStockParent(StockParent stockParent)
	{
		this.stockParent = stockParent;
	}

}
