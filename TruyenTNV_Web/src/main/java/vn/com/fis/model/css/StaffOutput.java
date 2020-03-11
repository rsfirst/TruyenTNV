package vn.com.fis.model.css;

import java.util.Date;

public class StaffOutput 
{

	String stock_id = "";
	String shop_staff_id = "";
	String code = "";
	String shop_staff_parent_id= "";
	String name = "";
	String type = "";
	String status = "";
	String parent_node_code = "";
	String node_code = "";
	String node_order ="";
	String staff_or_stock = "";
	String address = "";
	
	public StaffOutput(String stock_id, String shop_staff_id, String code, String shop_staff_parent_id, String name,
			String type, String status, String parent_node_code, String node_code, String node_order,
			String staff_or_stock, String address) {
		this.stock_id = stock_id;
		this.shop_staff_id = shop_staff_id;
		this.code = code;
		this.shop_staff_parent_id = shop_staff_parent_id;
		this.name = name;
		this.type = type;
		this.status = status;
		this.parent_node_code = parent_node_code;
		this.node_code = node_code;
		this.node_order = node_order;
		this.staff_or_stock = staff_or_stock;
		this.address = address;
	}
	public String getStock_id() {
		return stock_id;
	}
	public void setStock_id(String stock_id) {
		this.stock_id = stock_id;
	}
	public String getShop_staff_id() {
		return shop_staff_id;
	}
	public void setShop_staff_id(String shop_staff_id) {
		this.shop_staff_id = shop_staff_id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getShop_staff_parent_id() {
		return shop_staff_parent_id;
	}
	public void setShop_staff_parent_id(String shop_staff_parent_id) {
		this.shop_staff_parent_id = shop_staff_parent_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getParent_node_code() {
		return parent_node_code;
	}
	public void setParent_node_code(String parent_node_code) {
		this.parent_node_code = parent_node_code;
	}
	public String getNode_code() {
		return node_code;
	}
	public void setNode_code(String node_code) {
		this.node_code = node_code;
	}
	public String getNode_order() {
		return node_order;
	}
	public void setNode_order(String node_order) {
		this.node_order = node_order;
	}
	public String getStaff_or_stock() {
		return staff_or_stock;
	}
	public void setStaff_or_stock(String staff_or_stock) {
		this.staff_or_stock = staff_or_stock;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
