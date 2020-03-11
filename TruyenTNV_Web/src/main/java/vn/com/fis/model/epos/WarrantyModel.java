package vn.com.fis.model.epos;

import java.util.List;

public class WarrantyModel
{

	private String warAction;
	private String type;
	private String reasonId;
	private String fromStaffId;
	private String toStaffId;
	private String approveSStaffId;
	private String destroyStaffId;
	private String createDatetime;
	private String approveDatetime;
	private String destroyDatatime;
	private String stockId;
	private String delivererStockId;
	private String staffName;
	private List<WarrantyDetail> lstWarrantyDetail;
	private List<GoodTransactionsModel> lstGoodsTransaction;
	private String shopId;
	

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

	public String getWarAction()
	{
		return warAction;
	}

	public void setWarAction(String warAction)
	{
		this.warAction = warAction;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getReasonId()
	{
		return reasonId;
	}

	public void setReasonId(String reasonId)
	{
		this.reasonId = reasonId;
	}

	public String getFromStaffId()
	{
		return fromStaffId;
	}

	public void setFromStaffId(String fromStaffId)
	{
		this.fromStaffId = fromStaffId;
	}

	public String getToStaffId()
	{
		return toStaffId;
	}

	public void setToStaffId(String toStaffId)
	{
		this.toStaffId = toStaffId;
	}

	public String getApproveSStaffId()
	{
		return approveSStaffId;
	}

	public void setApproveSStaffId(String approveSStaffId)
	{
		this.approveSStaffId = approveSStaffId;
	}

	public String getDestroyStaffId()
	{
		return destroyStaffId;
	}

	public void setDestroyStaffId(String destroyStaffId)
	{
		this.destroyStaffId = destroyStaffId;
	}

	public String getCreateDatetime()
	{
		return createDatetime;
	}

	public void setCreateDatetime(String createDatetime)
	{
		this.createDatetime = createDatetime;
	}

	public String getApproveDatetime()
	{
		return approveDatetime;
	}

	public void setApproveDatetime(String approveDatetime)
	{
		this.approveDatetime = approveDatetime;
	}

	public String getDestroyDatatime()
	{
		return destroyDatatime;
	}

	public void setDestroyDatatime(String destroyDatatime)
	{
		this.destroyDatatime = destroyDatatime;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public String getDelivererStockId()
	{
		return delivererStockId;
	}

	public void setDelivererStockId(String delivererStockId)
	{
		this.delivererStockId = delivererStockId;
	}

	public String getStaffName()
	{
		return staffName;
	}

	public void setStaffName(String staffName)
	{
		this.staffName = staffName;
	}

	public List<WarrantyDetail> getLstWarrantyDetail()
	{
		return lstWarrantyDetail;
	}

	public void setLstWarrantyDetail(List<WarrantyDetail> lstWarrantyDetail)
	{
		this.lstWarrantyDetail = lstWarrantyDetail;
	}

	public List<GoodTransactionsModel> getLstGoodsTransaction()
	{
		return lstGoodsTransaction;
	}

	public void setLstGoodsTransaction(List<GoodTransactionsModel> lstGoodsTransaction)
	{
		this.lstGoodsTransaction = lstGoodsTransaction;
	}

}
