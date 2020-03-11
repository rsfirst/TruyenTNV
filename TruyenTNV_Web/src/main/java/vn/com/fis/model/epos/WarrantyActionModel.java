package vn.com.fis.model.epos;

import java.util.List;

public class WarrantyActionModel {
	private String warActionId;
	private String type;
	private String reasonId;
	private String fromStaffId;
	private String toStaffId;
	private String approveStaffId;
	private String destroyStaffId;
	private String createDateTime;
	private String approveDateTime;
	private String destroyDataTime;
	private String stockId;
	private String delivererStockId;
	private String toStaffName; 
	private List<WarrantyDetail> listWarrantyDetail;
	private List<GoodTransactionsModel> listWarActionGoodsList;
	
	public List<GoodTransactionsModel> getListWarActionGoodsList() {
		return listWarActionGoodsList;
	}
	public void setListWarActionGoodsList(List<GoodTransactionsModel> listWarActionGoodsList) {
		this.listWarActionGoodsList = listWarActionGoodsList;
	}
	public String getWarActionId() {
		return warActionId;
	}
	public void setWarActionId(String warActionId) {
		this.warActionId = warActionId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getReasonId() {
		return reasonId;
	}
	public void setReasonId(String reasonId) {
		this.reasonId = reasonId;
	}
	public String getFromStaffId() {
		return fromStaffId;
	}
	public void setFromStaffId(String fromStaffId) {
		this.fromStaffId = fromStaffId;
	}
	public String getToStaffId() {
		return toStaffId;
	}
	public void setToStaffId(String toStaffId) {
		this.toStaffId = toStaffId;
	}
	public String getApproveStaffId() {
		return approveStaffId;
	}
	public void setApproveStaffId(String approveStaffId) {
		this.approveStaffId = approveStaffId;
	}
	public String getDestroyStaffId() {
		return destroyStaffId;
	}
	public void setDestroyStaffId(String destroyStaffId) {
		this.destroyStaffId = destroyStaffId;
	}
	public String getCreateDateTime() {
		return createDateTime;
	}
	public void setCreateDateTime(String createDateTime) {
		this.createDateTime = createDateTime;
	}
	public String getApproveDateTime() {
		return approveDateTime;
	}
	public void setApproveDateTime(String approveDateTime) {
		this.approveDateTime = approveDateTime;
	}
	public String getDestroyDataTime() {
		return destroyDataTime;
	}
	public void setDestroyDataTime(String destroyDataTime) {
		this.destroyDataTime = destroyDataTime;
	}
	public String getStockId() {
		return stockId;
	}
	public void setStockId(String stockId) {
		this.stockId = stockId;
	}
	public String getDelivererStockId() {
		return delivererStockId;
	}
	public void setDelivererStockId(String delivererStockId) {
		this.delivererStockId = delivererStockId;
	}
	public String getToStaffName() {
		return toStaffName;
	}
	public void setToStaffName(String toStaffName) {
		this.toStaffName = toStaffName;
	}
	public List<WarrantyDetail> getListWarrantyDetail() {
		return listWarrantyDetail;
	}
	public void setListWarrantyDetail(List<WarrantyDetail> listWarrantyDetail) {
		this.listWarrantyDetail = listWarrantyDetail;
	}
	

}
