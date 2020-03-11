package vn.com.fis.model.epos;

public class StockParent implements java.io.Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8542702897604332558L;

	private String stockId;
	private String shopStaffId;
	private String code;
	private String shopStaffParentId;
	private String name;
	private String type;
	private String status;
	private String parentNodeCode;
	private String nodeCode;
	private String nodeOrder;
	private String staffOrStock;
	private String address;

	/**
	 * @return the stockId
	 */
	public String getStockId()
	{
		return stockId;
	}

	/**
	 * @param stockId
	 *            the stockId to set
	 */
	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	/**
	 * @return the shopStaffId
	 */
	public String getShopStaffId()
	{
		return shopStaffId;
	}

	/**
	 * @param shopStaffId
	 *            the shopStaffId to set
	 */
	public void setShopStaffId(String shopStaffId)
	{
		this.shopStaffId = shopStaffId;
	}

	/**
	 * @return the code
	 */
	public String getCode()
	{
		return code;
	}

	/**
	 * @param code
	 *            the code to set
	 */
	public void setCode(String code)
	{
		this.code = code;
	}

	/**
	 * @return the shopStaffParentId
	 */
	public String getShopStaffParentId()
	{
		return shopStaffParentId;
	}

	/**
	 * @param shopStaffParentId
	 *            the shopStaffParentId to set
	 */
	public void setShopStaffParentId(String shopStaffParentId)
	{
		this.shopStaffParentId = shopStaffParentId;
	}

	/**
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * @return the type
	 */
	public String getType()
	{
		return type;
	}

	/**
	 * @param type
	 *            the type to set
	 */
	public void setType(String type)
	{
		this.type = type;
	}

	/**
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(String status)
	{
		this.status = status;
	}

	/**
	 * @return the parentNodeCode
	 */
	public String getParentNodeCode()
	{
		return parentNodeCode;
	}

	/**
	 * @param parentNodeCode
	 *            the parentNodeCode to set
	 */
	public void setParentNodeCode(String parentNodeCode)
	{
		this.parentNodeCode = parentNodeCode;
	}

	/**
	 * @return the nodeCode
	 */
	public String getNodeCode()
	{
		return nodeCode;
	}

	/**
	 * @param nodeCode
	 *            the nodeCode to set
	 */
	public void setNodeCode(String nodeCode)
	{
		this.nodeCode = nodeCode;
	}

	/**
	 * @return the nodeOrder
	 */
	public String getNodeOrder()
	{
		return nodeOrder;
	}

	/**
	 * @param nodeOrder
	 *            the nodeOrder to set
	 */
	public void setNodeOrder(String nodeOrder)
	{
		this.nodeOrder = nodeOrder;
	}

	/**
	 * @return the staffOrStock
	 */
	public String getStaffOrStock()
	{
		return staffOrStock;
	}

	/**
	 * @param staffOrStock
	 *            the staffOrStock to set
	 */
	public void setStaffOrStock(String staffOrStock)
	{
		this.staffOrStock = staffOrStock;
	}

	/**
	 * @return the address
	 */
	public String getAddress()
	{
		return address;
	}

	/**
	 * @param address
	 *            the address to set
	 */
	public void setAddress(String address)
	{
		this.address = address;
	}

}
