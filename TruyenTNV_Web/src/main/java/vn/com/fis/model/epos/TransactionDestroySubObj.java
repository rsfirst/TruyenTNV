package vn.com.fis.model.epos;

import java.util.List;

public class TransactionDestroySubObj
{
	private String pc;
	private String shopId;
	private String staffId;
	private List<TransactionDestroyObj> lstTransactionDestroyObj;
	
	/**
	 * @return the pc
	 */
	public String getPc()
	{
		return pc;
	}
	/**
	 * @param pc the pc to set
	 */
	public void setPc(String pc)
	{
		this.pc = pc;
	}
	/**
	 * @return the shopId
	 */
	public String getShopId()
	{
		return shopId;
	}
	/**
	 * @param shopId the shopId to set
	 */
	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}
	/**
	 * @return the staffId
	 */
	public String getStaffId()
	{
		return staffId;
	}
	/**
	 * @param staffId the staffId to set
	 */
	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}
	/**
	 * @return the lstTransactionDestroyObj
	 */
	public List<TransactionDestroyObj> getLstTransactionDestroyObj()
	{
		return lstTransactionDestroyObj;
	}
	/**
	 * @param lstTransactionDestroyObj the lstTransactionDestroyObj to set
	 */
	public void setLstTransactionDestroyObj(List<TransactionDestroyObj> lstTransactionDestroyObj)
	{
		this.lstTransactionDestroyObj = lstTransactionDestroyObj;
	}

	
}
