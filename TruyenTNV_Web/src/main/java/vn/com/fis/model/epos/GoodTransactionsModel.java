package vn.com.fis.model.epos;

import java.util.List;

public class GoodTransactionsModel
{
	private String goodsId;
	private String goodsCode;
	private String checkQuantity;
	private String goodsGroupId;
	private String goodsType;
	private String checkSerial;
	private String name; // goodsName
	private String unit;
	private String status;
	private String notes;
	private String unitName;
	private String checkContran;
	private String checkWarranty;
	private String resourceCode;
	private String goodsGroupName;
	private String stockCode;
	private String stockName;
	private String stateId;
	private String quantityIssue;
	private String internalStockId;
	private String transactionId;
	private List<TransactionSerialList> lstTransSerial;
	private List<TransactionSerialList> lstSerialReceived;
	private List<TransactionSerialList> lstSerialDenied;
	private List<BlockList> lstBlockList;

	private String type; // 0: Ban dut 1: Ky gui
	private String quantityEffect;
	private String quantityRemain;
	private String stateName;
	private String quantity;
	private GoodsList goodsSelected;
	private StatesList stateSelected;
	private ApDomainModel resourceSelected;
	private KeyValueObj internalStockSelected;
	private String beginQuantity;
	private String stockId;
	private String getFromStockTransId;
	private String staffId;
	private String cmdId;
	private String noWarrantyQuantity;

	private String startQuantity;
	private String startQuantity1;
	private String startBalance;
	private String lstTransSerialString;
	private String check;
	

	public String getCheck() {
		return check;
	}

	public void setCheck(String check) {
		this.check = check;
	}

	private List<StatesList> listStateList;
	private int checkBox;
	
	public int getCheckBox() {
		return checkBox;
	}

	public void setCheckBox(int checkBox) {
		this.checkBox = checkBox;
	}

	public List<StatesList> getListStateList()
	{
		return listStateList;
	}

	public void setListStateList(List<StatesList> listStateList)
	{
		this.listStateList = listStateList;
	}

	public String getStartQuantity()
	{
		return startQuantity;
	}

	public void setStartQuantity(String startQuantity)
	{
		this.startQuantity = startQuantity;
	}

	public String getStartQuantity1()
	{
		return startQuantity1;
	}

	public void setStartQuantity1(String startQuantity1)
	{
		this.startQuantity1 = startQuantity1;
	}

	public String getStartBalance()
	{
		return startBalance;
	}

	public void setStartBalance(String startBalance)
	{
		this.startBalance = startBalance;
	}

	/**
	 * @return the noWarrantyQuantity
	 */
	public String getNoWarrantyQuantity()
	{
		return noWarrantyQuantity;
	}

	/**
	 * @param noWarrantyQuantity
	 *            the noWarrantyQuantity to set
	 */
	public void setNoWarrantyQuantity(String noWarrantyQuantity)
	{
		this.noWarrantyQuantity = noWarrantyQuantity;
	}

	/**
	 * @return the lstSerialReceived
	 */
	public List<TransactionSerialList> getLstSerialReceived()
	{
		return lstSerialReceived;
	}

	/**
	 * @param lstSerialReceived
	 *            the lstSerialReceived to set
	 */
	public void setLstSerialReceived(List<TransactionSerialList> lstSerialReceived)
	{
		this.lstSerialReceived = lstSerialReceived;
	}

	/**
	 * @return the lstSerialDenied
	 */
	public List<TransactionSerialList> getLstSerialDenied()
	{
		return lstSerialDenied;
	}

	/**
	 * @param lstSerialDenied
	 *            the lstSerialDenied to set
	 */
	public void setLstSerialDenied(List<TransactionSerialList> lstSerialDenied)
	{
		this.lstSerialDenied = lstSerialDenied;
	}

	/**
	 * @return the cmdId
	 */
	public String getCmdId()
	{
		return cmdId;
	}

	/**
	 * @param cmdId
	 *            the cmdId to set
	 */
	public void setCmdId(String cmdId)
	{
		this.cmdId = cmdId;
	}

	/**
	 * @return the staffId
	 */
	public String getStaffId()
	{
		return staffId;
	}

	/**
	 * @param staffId
	 *            the staffId to set
	 */
	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

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
	 * @return the getFromStockTransId
	 */
	public String getGetFromStockTransId()
	{
		return getFromStockTransId;
	}

	/**
	 * @param getFromStockTransId
	 *            the getFromStockTransId to set
	 */
	public void setGetFromStockTransId(String getFromStockTransId)
	{
		this.getFromStockTransId = getFromStockTransId;
	}

	public String getBeginQuantity()
	{
		return beginQuantity;
	}

	public void setBeginQuantity(String beginQuantity)
	{
		this.beginQuantity = beginQuantity;
	}

	public List<TransactionSerialList> getLstTransSerial()
	{
		return lstTransSerial;
	}

	public void setLstTransSerial(List<TransactionSerialList> lstTransSerial)
	{
		this.lstTransSerial = lstTransSerial;
	}

	public String getTransactionId()
	{
		return transactionId;
	}

	public void setTransactionId(String transactionId)
	{
		this.transactionId = transactionId;
	}

	public String getStockCode()
	{
		return stockCode;
	}

	public void setStockCode(String stockCode)
	{
		this.stockCode = stockCode;
	}

	public String getStockName()
	{
		return stockName;
	}

	public void setStockName(String stockName)
	{
		this.stockName = stockName;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getGoodsId()
	{
		return goodsId;
	}

	public void setGoodsId(String goodsId)
	{
		this.goodsId = goodsId;
	}

	public String getGoodsCode()
	{
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode)
	{
		this.goodsCode = goodsCode;
	}

	public String getCheckQuantity()
	{
		return checkQuantity;
	}

	public void setCheckQuantity(String checkQuantity)
	{
		this.checkQuantity = checkQuantity;
	}

	public String getGoodsGroupId()
	{
		return goodsGroupId;
	}

	public void setGoodsGroupId(String goodsGroupId)
	{
		this.goodsGroupId = goodsGroupId;
	}

	public String getGoodsType()
	{
		return goodsType;
	}

	public void setGoodsType(String goodsType)
	{
		this.goodsType = goodsType;
	}

	public String getCheckSerial()
	{
		return checkSerial;
	}

	public void setCheckSerial(String checkSerial)
	{
		this.checkSerial = checkSerial;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getUnit()
	{
		return unit;
	}

	public void setUnit(String unit)
	{
		this.unit = unit;
	}

	public String getNotes()
	{
		return notes;
	}

	public void setNotes(String notes)
	{
		this.notes = notes;
	}

	public String getUnitName()
	{
		return unitName;
	}

	public void setUnitName(String unitName)
	{
		this.unitName = unitName;
	}

	public String getCheckContran()
	{
		return checkContran;
	}

	public void setCheckContran(String checkContran)
	{
		this.checkContran = checkContran;
	}

	public String getCheckWarranty()
	{
		return checkWarranty;
	}

	public void setCheckWarranty(String checkWarranty)
	{
		this.checkWarranty = checkWarranty;
	}

	public String getResourceCode()
	{
		return resourceCode;
	}

	public void setResourceCode(String resourceCode)
	{
		this.resourceCode = resourceCode;
	}

	public String getGoodsGroupName()
	{
		return goodsGroupName;
	}

	public void setGoodsGroupName(String goodsGroupName)
	{
		this.goodsGroupName = goodsGroupName;
	}

	public String getStateId()
	{
		return stateId;
	}

	public void setStateId(String stateId)
	{
		this.stateId = stateId;
	}

	public String getQuantityIssue()
	{
		return quantityIssue;
	}

	public void setQuantityIssue(String quantityIssue)
	{
		this.quantityIssue = quantityIssue;
	}

	public String getInternalStockId()
	{
		return internalStockId;
	}

	public void setInternalStockId(String internalStockId)
	{
		this.internalStockId = internalStockId;
	}

	public List<BlockList> getLstBlockList()
	{
		return lstBlockList;
	}

	public void setLstBlockList(List<BlockList> lstBlockList)
	{
		this.lstBlockList = lstBlockList;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getQuantityEffect()
	{
		return quantityEffect;
	}

	public void setQuantityEffect(String quantityEffect)
	{
		this.quantityEffect = quantityEffect;
	}

	public String getQuantityRemain()
	{
		return quantityRemain;
	}

	public void setQuantityRemain(String quantityRemain)
	{
		this.quantityRemain = quantityRemain;
	}

	public String getStateName()
	{
		return stateName;
	}

	public void setStateName(String stateName)
	{
		this.stateName = stateName;
	}

	public String getQuantity()
	{
		return quantity;
	}

	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	public GoodsList getGoodsSelected()
	{
		return goodsSelected;
	}

	public void setGoodsSelected(GoodsList goodsSelected)
	{
		this.goodsSelected = goodsSelected;
	}

	public StatesList getStateSelected()
	{
		return stateSelected;
	}

	public void setStateSelected(StatesList stateSelected)
	{
		this.stateSelected = stateSelected;
	}

	public ApDomainModel getResourceSelected()
	{
		return resourceSelected;
	}

	public void setResourceSelected(ApDomainModel resourceSelected)
	{
		this.resourceSelected = resourceSelected;
	}

	public KeyValueObj getInternalStockSelected()
	{
		return internalStockSelected;
	}

	public void setInternalStockSelected(KeyValueObj internalStockSelected)
	{
		this.internalStockSelected = internalStockSelected;
	}

	public String getLstTransSerialString()
	{
		return lstTransSerialString;
	}

	public void setLstTransSerialString(String lstTransSerialString)
	{
		this.lstTransSerialString = lstTransSerialString;
	}

}
