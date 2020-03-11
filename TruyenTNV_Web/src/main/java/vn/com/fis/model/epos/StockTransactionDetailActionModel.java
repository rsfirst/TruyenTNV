package vn.com.fis.model.epos;

import java.util.List;

public class StockTransactionDetailActionModel {
	
	private String stockTransId;
	private String goodsId;
	private String stateId;
	private String quantityIssue;
	private String quantityEffect;
	private String note;
	private String posSerial;
	private String posBlock;
	private String type;
	private String checkSerial;
	private String checkWarranty;
	private String posSerialIsDenied;
	private String internalStockId;
	private String resourceCode;
	private String beginQuantity;
	private String totalQuantity;
	private List<StatesList> liStateList ;
	private GoodsList listGoodsList;
	private List<TransactionSerialList> lstTransSerial;
	private List<TransactionSerialList> lstSerialReceived;
	private List<TransactionSerialList> lstSerialDenied;
	
	
	public List<TransactionSerialList> getLstTransSerial() {
		return lstTransSerial;
	}
	public void setLstTransSerial(List<TransactionSerialList> lstTransSerial) {
		this.lstTransSerial = lstTransSerial;
	}
	public List<TransactionSerialList> getLstSerialReceived() {
		return lstSerialReceived;
	}
	public void setLstSerialReceived(List<TransactionSerialList> lstSerialReceived) {
		this.lstSerialReceived = lstSerialReceived;
	}
	public List<TransactionSerialList> getLstSerialDenied() {
		return lstSerialDenied;
	}
	public void setLstSerialDenied(List<TransactionSerialList> lstSerialDenied) {
		this.lstSerialDenied = lstSerialDenied;
	}
	public GoodsList getListGoodsList() {
		return listGoodsList;
	}
	public GoodsList getGoodsList() {
		return listGoodsList;
	}
	public void setListGoodsList(GoodsList listGoodsList) {
		this.listGoodsList = listGoodsList;
	}
	public List<StatesList> getLiStateList() {
		return liStateList;
	}
	public void setLiStateList(List<StatesList> liStateList) {
		this.liStateList = liStateList;
	}
	public String getStockTransId() {
		return stockTransId;
	}
	public void setStockTransId(String stockTransId) {
		this.stockTransId = stockTransId;
	}
	public String getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}
	public String getStateId() {
		return stateId;
	}
	public void setStateId(String stateId) {
		this.stateId = stateId;
	}
	public String getQuantityIssue() {
		return quantityIssue;
	}
	public void setQuantityIssue(String quantityIssue) {
		this.quantityIssue = quantityIssue;
	}
	public String getQuantityEffect() {
		return quantityEffect;
	}
	public void setQuantityEffect(String quantityEffect) {
		this.quantityEffect = quantityEffect;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getPosSerial() {
		return posSerial;
	}
	public void setPosSerial(String posSerial) {
		this.posSerial = posSerial;
	}
	public String getPosBlock() {
		return posBlock;
	}
	public void setPosBlock(String posBlock) {
		this.posBlock = posBlock;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCheckSerial() {
		return checkSerial;
	}
	public void setCheckSerial(String checkSerial) {
		this.checkSerial = checkSerial;
	}
	public String getCheckWarranty() {
		return checkWarranty;
	}
	public void setCheckWarranty(String checkWarranty) {
		this.checkWarranty = checkWarranty;
	}
	public String getPosSerialIsDenied() {
		return posSerialIsDenied;
	}
	public void setPosSerialIsDenied(String posSerialIsDenied) {
		this.posSerialIsDenied = posSerialIsDenied;
	}
	public String getInternalStockId() {
		return internalStockId;
	}
	public void setInternalStockId(String internalStockId) {
		this.internalStockId = internalStockId;
	}
	public String getResourceCode() {
		return resourceCode;
	}
	public void setResourceCode(String resourceCode) {
		this.resourceCode = resourceCode;
	}
	public String getBeginQuantity() {
		return beginQuantity;
	}
	public void setBeginQuantity(String beginQuantity) {
		this.beginQuantity = beginQuantity;
	}
	public String getTotalQuantity() {
		return totalQuantity;
	}
	public void setTotalQuantity(String totalQuantity) {
		this.totalQuantity = totalQuantity;
	}
	
	

}
