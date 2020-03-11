package vn.com.fis.model.css;

public class ShipmentDetailOutput 
{
	private String stock_trans_id = "";
	private String goods_id = "";
	private String state_id = "";
	private String quantity_issue = "";
	private String quantity_effect = "";
	private String note = "";
	private String check_serial = "";
	private String check_warranty = "";

	private String internal_stock_id = "";
	private String resource_code = "";
	private String good_code = "";

	private String name = "";
	private String primary_unit_of_measure = "";
	
	private String cust_po_number = "";
	private String unit_name = "";
	private String deliveryNoteId = "";
	private String nameOfMD = "";
	private String shippedDate = "";
	private String eposUpdateDate = "";
	private String eposMessage = "";
	private String eposError = "";
	private String submittedDate = "";
	private String grossValue = "";
	private String lineDiscTotal = "";
	private String docDiscTotal = "";
	private String finalValue  = "";
	private String expiredDate = "";
	private String deliveryNotePrice = "";
	private String grossValue2 = "";
	private String phoneNumber = "";
	private String itemExpiryDate = "";
	private String unitQty3 = "";
	private String status = "";
	private String submittedBy = "";
	private String mdId = "";
	private String mdAddr = "";
	private String poCreateDate = "";
	private String brandedShopCreateDate = "";
	public ShipmentDetailOutput () {
		
	}
	
	
	public ShipmentDetailOutput(String stock_trans_id, String goods_id, String state_id, String quantity_issue,
			String quantity_effect, String note, String check_serial, String check_warranty, String internal_stock_id,
			String resource_code, String good_code, String name, String primary_unit_of_measure,
			String cust_po_number) 
	{
		this.stock_trans_id = stock_trans_id;
		this.goods_id = goods_id;
		this.state_id = state_id;
		this.quantity_issue = quantity_issue;
		this.quantity_effect = quantity_effect;
		this.note = note;
		this.check_serial = check_serial;
		this.check_warranty = check_warranty;
		this.internal_stock_id = internal_stock_id;
		this.resource_code = resource_code;
		this.good_code = good_code;
		this.name = name;
		this.primary_unit_of_measure = primary_unit_of_measure;
		this.cust_po_number = cust_po_number;
	}

	public String getStock_trans_id() {
		return stock_trans_id;
	}

	public void setStock_trans_id(String stock_trans_id) {
		this.stock_trans_id = stock_trans_id;
	}

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

	public String getQuantity_issue() {
		return quantity_issue;
	}

	public void setQuantity_issue(String quantity_issue) {
		this.quantity_issue = quantity_issue;
	}

	public String getQuantity_effect() {
		return quantity_effect;
	}

	public void setQuantity_effect(String quantity_effect) {
		this.quantity_effect = quantity_effect;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getCheck_serial() {
		return check_serial;
	}

	public void setCheck_serial(String check_serial) {
		this.check_serial = check_serial;
	}

	public String getCheck_warranty() {
		return check_warranty;
	}

	public void setCheck_warranty(String check_warranty) {
		this.check_warranty = check_warranty;
	}

	public String getInternal_stock_id() {
		return internal_stock_id;
	}

	public void setInternal_stock_id(String internal_stock_id) {
		this.internal_stock_id = internal_stock_id;
	}

	public String getResource_code() {
		return resource_code;
	}

	public void setResource_code(String resource_code) {
		this.resource_code = resource_code;
	}

	public String getGood_code() {
		return good_code;
	}

	public void setGood_code(String good_code) {
		this.good_code = good_code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrimary_unit_of_measure() {
		return primary_unit_of_measure;
	}

	public void setPrimary_unit_of_measure(String primary_unit_of_measure) {
		this.primary_unit_of_measure = primary_unit_of_measure;
	}

	public String getCust_po_number() {
		return cust_po_number;
	}

	public void setCust_po_number(String cust_po_number) {
		this.cust_po_number = cust_po_number;
	}

}
