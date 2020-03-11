package vn.com.fis.model.epos;

public class SuperiorGoodImportEntity {
	private String stock_trans_id;
	private String stock_id;
	private String deliverer_stock_id;
	private String create_datetime;
	private String type;
	private String reason_id;
	private String status;
	private String note;
	private String cmd_code;
	private String cmd_status;
	private String cmd_date;
	private String cmd_note;
	private String cmd_staff_id;
	private String exec_name;
	private String internal_stock_id;
	private String internalStockName;
	private String action_code;
	private String fromdate;
	private String todate;
	private String exec_staff_id;
	
private String goods_id, state_id, from_serial, to_serial, quantity;
	
	
	public String getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(String goods_id) {
		this.goods_id = goods_id;
	}
	public String getState_id() {
		return state_id;
	}
	public void setState_id(String state_id) {
		this.state_id = state_id;
	}
	public String getFrom_serial() {
		return from_serial;
	}
	public void setFrom_serial(String from_serial) {
		this.from_serial = from_serial;
	}
	public String getTo_serial() {
		return to_serial;
	}
	public void setTo_serial(String to_serial) {
		this.to_serial = to_serial;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getExec_staff_id() {
		return exec_staff_id;
	}
	public void setExec_staff_id(String exec_staff_id) {
		this.exec_staff_id = exec_staff_id;
	}
	public String getAction_code() {
		return action_code;
	}
	public void setAction_code(String action_code) {
		this.action_code = action_code;
	}
	public String getFromdate() {
		return fromdate;
	}
	public void setFromdate(String fromdate) {
		this.fromdate = fromdate;
	}
	public String getTodate() {
		return todate;
	}
	public void setTodate(String todate) {
		this.todate = todate;
	}
	public SuperiorGoodImportEntity() {
		super();
	}
	public SuperiorGoodImportEntity(String stock_trans_id, String stock_id, String deliverer_stock_id,
			String create_datetime, String type, String reason_id, String status, String note, String cmd_code,
			String cmd_status, String cmd_date, String cmd_note, String cmd_staff_id, String exec_name,
			String internal_stock_id, String internalStockName) {
		super();
		this.stock_trans_id = stock_trans_id;
		this.stock_id = stock_id;
		this.deliverer_stock_id = deliverer_stock_id;
		this.create_datetime = create_datetime;
		this.type = type;
		this.reason_id = reason_id;
		this.status = status;
		this.note = note;
		this.cmd_code = cmd_code;
		this.cmd_status = cmd_status;
		this.cmd_date = cmd_date;
		this.cmd_note = cmd_note;
		this.cmd_staff_id = cmd_staff_id;
		this.exec_name = exec_name;
		this.internal_stock_id = internal_stock_id;
		this.internalStockName = internalStockName;
	}
	public String getStock_trans_id() {
		return stock_trans_id;
	}
	public void setStock_trans_id(String stock_trans_id) {
		this.stock_trans_id = stock_trans_id;
	}
	public String getStock_id() {
		return stock_id;
	}
	public void setStock_id(String stock_id) {
		this.stock_id = stock_id;
	}
	public String getDeliverer_stock_id() {
		return deliverer_stock_id;
	}
	public void setDeliverer_stock_id(String deliverer_stock_id) {
		this.deliverer_stock_id = deliverer_stock_id;
	}
	public String getCreate_datetime() {
		return create_datetime;
	}
	public void setCreate_datetime(String create_datetime) {
		this.create_datetime = create_datetime;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public String getCmd_code() {
		return cmd_code;
	}
	public void setCmd_code(String cmd_code) {
		this.cmd_code = cmd_code;
	}
	public String getCmd_status() {
		return cmd_status;
	}
	public void setCmd_status(String cmd_status) {
		this.cmd_status = cmd_status;
	}
	public String getCmd_date() {
		return cmd_date;
	}
	public void setCmd_date(String cmd_date) {
		this.cmd_date = cmd_date;
	}
	public String getCmd_note() {
		return cmd_note;
	}
	public void setCmd_note(String cmd_note) {
		this.cmd_note = cmd_note;
	}
	public String getCmd_staff_id() {
		return cmd_staff_id;
	}
	public void setCmd_staff_id(String cmd_staff_id) {
		this.cmd_staff_id = cmd_staff_id;
	}
	public String getExec_name() {
		return exec_name;
	}
	public void setExec_name(String exec_name) {
		this.exec_name = exec_name;
	}
	public String getInternal_stock_id() {
		return internal_stock_id;
	}
	public void setInternal_stock_id(String internal_stock_id) {
		this.internal_stock_id = internal_stock_id;
	}
	public String getInternalStockName() {
		return internalStockName;
	}
	public void setInternalStockName(String internalStockName) {
		this.internalStockName = internalStockName;
	}
	
	
}
