package vn.com.fis.model.epos;

import java.util.List;

public class ImportStaffBalanceModel {
	private String shopStockId;
	private String internalStockId;
	private String sessionStaffId;
	private String reasonId;
	private String exeCode;
	private String cmdNode;
	private String delivererStockId;
	private String shopId;
	
	public String getShopId() {
		return shopId;
	}
	public void setShopId(String shopId) {
		this.shopId = shopId;
	}
	private List<GoodTransactionsModel> listGoodTransactionModel;
	
	public String getReasonId() {
		return reasonId;
	}
	public void setReasonId(String reasonId) {
		this.reasonId = reasonId;
	}
	public String getExeCode() {
		return exeCode;
	}
	public void setExeCode(String exeCode) {
		this.exeCode = exeCode;
	}
	public String getCmdNode() {
		return cmdNode;
	}
	public void setCmdNode(String cmdNode) {
		this.cmdNode = cmdNode;
	}
	public String getDelivererStockId() {
		return delivererStockId;
	}
	public void setDelivererStockId(String delivererStockId) {
		this.delivererStockId = delivererStockId;
	}
	public String getShopStockId() {
		return shopStockId;
	}
	public void setShopStockId(String shopStockId) {
		this.shopStockId = shopStockId;
	}
	public String getInternalStockId() {
		return internalStockId;
	}
	public void setInternalStockId(String internalStockId) {
		this.internalStockId = internalStockId;
	}
	public String getSessionStaffId() {
		return sessionStaffId;
	}
	public void setSessionStaffId(String sessionStaffId) {
		this.sessionStaffId = sessionStaffId;
	}
	public List<GoodTransactionsModel> getListGoodTransactionModel() {
		return listGoodTransactionModel;
	}
	public void setListGoodTransactionModel(List<GoodTransactionsModel> listGoodTransactionModel) {
		this.listGoodTransactionModel = listGoodTransactionModel;
	}
	

}
