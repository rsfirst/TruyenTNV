package vn.com.fis.model.epos;

import java.util.List;

public class StockTransactionObj
{
	private String txtOrderCode;
	private String status;
	private String lovAgent;
	private String lovReason;
	private String resourceCode;
	private String txtReceiptCode;
	private String txtNote;
	private String shopType;
	private String dtFromDate;
	private String type;
	private String Id;
	private String stockId;
	private String orderCode;
	private List<GoodTransactionsModel> lstGoodsTransaction;
	
	private String staffId;
	private String staffName;
	private String internalStockId;
	private String strTransDetail;
	private String shopId;
	private String stockTransId;
	private String goodsIdSerial;
	private String stateIdSerial;
	
	

	
	/**
	 * @return the goodsIdSerial
	 */
	public String getGoodsIdSerial()
	{
		return goodsIdSerial;
	}

	/**
	 * @param goodsIdSerial the goodsIdSerial to set
	 */
	public void setGoodsIdSerial(String goodsIdSerial)
	{
		this.goodsIdSerial = goodsIdSerial;
	}

	/**
	 * @return the stateIdSerial
	 */
	public String getStateIdSerial()
	{
		return stateIdSerial;
	}

	/**
	 * @param stateIdSerial the stateIdSerial to set
	 */
	public void setStateIdSerial(String stateIdSerial)
	{
		this.stateIdSerial = stateIdSerial;
	}

	public String getStockTransId()
	{
		return stockTransId;
	}

	public void setStockTransId(String stockTransId)
	{
		this.stockTransId = stockTransId;
	}

	public String getStrTransDetail()
	{
		return strTransDetail;
	}

	public void setStrTransDetail(String strTransDetail)
	{
		this.strTransDetail = strTransDetail;
	}

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	public List<GoodTransactionsModel> getLstGoodsTransaction()
	{
		return lstGoodsTransaction;
	}

	public void setLstGoodsTransaction(List<GoodTransactionsModel> lstGoodsTransaction)
	{
		this.lstGoodsTransaction = lstGoodsTransaction;
	}

	public String getOrderCode()
	{
		return orderCode;
	}

	public void setOrderCode(String orderCode)
	{
		this.orderCode = orderCode;
	}

	public String getStaffId()
	{
		return staffId;
	}

	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

	public String getStaffName()
	{
		return staffName;
	}

	public void setStaffName(String staffName)
	{
		this.staffName = staffName;
	}

	public String getInternalStockId()
	{
		return internalStockId;
	}

	public void setInternalStockId(String internalStockId)
	{
		this.internalStockId = internalStockId;
	}

	public String getTxtOrderCode()
	{
		return txtOrderCode;
	}

	public void setTxtOrderCode(String txtOrderCode)
	{
		this.txtOrderCode = txtOrderCode;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getLovAgent()
	{
		return lovAgent;
	}

	public void setLovAgent(String lovAgent)
	{
		this.lovAgent = lovAgent;
	}

	public String getLovReason()
	{
		return lovReason;
	}

	public void setLovReason(String lovReason)
	{
		this.lovReason = lovReason;
	}

	public String getResourceCode()
	{
		return resourceCode;
	}

	public void setResourceCode(String resourceCode)
	{
		this.resourceCode = resourceCode;
	}

	public String getTxtReceiptCode()
	{
		return txtReceiptCode;
	}

	public void setTxtReceiptCode(String txtReceiptCode)
	{
		this.txtReceiptCode = txtReceiptCode;
	}

	public String getTxtNote()
	{
		return txtNote;
	}

	public void setTxtNote(String txtNote)
	{
		this.txtNote = txtNote;
	}

	public String getShopType()
	{
		return shopType;
	}

	public void setShopType(String shopType)
	{
		this.shopType = shopType;
	}

	public String getDtFromDate()
	{
		return dtFromDate;
	}

	public void setDtFromDate(String dtFromDate)
	{
		this.dtFromDate = dtFromDate;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getId()
	{
		return Id;
	}

	public void setId(String id)
	{
		Id = id;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

}
