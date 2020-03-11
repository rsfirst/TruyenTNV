package vn.com.fis.model.epos;

import java.util.List;

public class onSearchExportToDealer {
	
	private String deliverer_stock_id;
	private String action_code;
	private String action_date;
	private String reason_id;
	private String status;
	private String note;
	private String stock_trans_id;
	private String type;
	private String name;
	private List<StockTransactionDetailActionModel> liStransactionDetail;
	public List<StockTransactionDetailActionModel> getLiStransactionDetail() {
		return liStransactionDetail;
	}
	public void setLiStransactionDetail(List<StockTransactionDetailActionModel> liStransactionDetail) {
		this.liStransactionDetail = liStransactionDetail;
	}
	public String getDeliverer_stock_id() {
		return deliverer_stock_id;
	}
	public void setDeliverer_stock_id(String deliverer_stock_id) {
		this.deliverer_stock_id = deliverer_stock_id;
	}
	public String getAction_code() {
		return action_code;
	}
	public void setAction_code(String action_code) {
		this.action_code = action_code;
	}
	public String getAction_date() {
		return action_date;
	}
	public void setAction_date(String action_date) {
		this.action_date = action_date;
	}
	public String getReason_id() {
		return reason_id;
	}
	public void setReason_id(String reason_id) {
		this.reason_id = reason_id;
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
	public String getStock_trans_id() {
		return stock_trans_id;
	}
	public void setStock_trans_id(String stock_trans_id) {
		this.stock_trans_id = stock_trans_id;
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
