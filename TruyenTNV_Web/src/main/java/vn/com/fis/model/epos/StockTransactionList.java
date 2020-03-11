package vn.com.fis.model.epos;

import java.util.List;

public class StockTransactionList {
	private String delivererStockId;
	private String actionCode;
	private String actionDate;
	private String reasonId;
	private String status;
	private String note;
	private String stockTransId;
	private String type;
	private String name;
	private String orderCode;
	private List<GoodsList> goodsList;
	private String getFromStockTransId;
	
	/**
	 * @return the getFromStockTransId
	 */
	public String getGetFromStockTransId() {
		return getFromStockTransId;
	}

	/**
	 * @param getFromStockTransId the getFromStockTransId to set
	 */
	public void setGetFromStockTransId(String getFromStockTransId) {
		this.getFromStockTransId = getFromStockTransId;
	}

	/**
	 * @return the delivererStockId
	 */
	private List<GoodTransactionsModel> lstGoodsTransaction;
	private String staffId;
	private String staffName;
	private String internalStockId;
	
	
	public List<GoodTransactionsModel> getLstGoodsTransaction()
	{
		return lstGoodsTransaction;
	}
	public void setLstGoodsTransaction(List<GoodTransactionsModel> lstGoodsTransaction)
	{
		this.lstGoodsTransaction = lstGoodsTransaction;
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
	public String getOrderCode() {
		return orderCode;
	}
	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
	}
	public List<GoodsList> getGoodsList() {
		return goodsList;
	}
	public void setGoodsList(List<GoodsList> goodsList) {
		this.goodsList = goodsList;
	}
	public String getDelivererStockId() {
		return delivererStockId;
	}
	public void setDelivererStockId(String delivererStockId) {
		this.delivererStockId = delivererStockId;
	}
	public String getActionCode() {
		return actionCode;
	}
	public void setActionCode(String actionCode) {
		this.actionCode = actionCode;
	}
	public String getActionDate() {
		return actionDate;
	}
	public void setActionDate(String actionDate) {
		this.actionDate = actionDate;
	}
	public String getReasonId() {
		return reasonId;
	}
	public void setReasonId(String reasonId) {
		this.reasonId = reasonId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getStockTransId() {
		return stockTransId;
	}
	public void setStockTransId(String stockTransId) {
		this.stockTransId = stockTransId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	
	
}
