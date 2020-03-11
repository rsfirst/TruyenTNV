package vn.com.fis.model.epos;

import java.util.List;

public class StockShopEntity {
	private static final long serialVersionUID = -1044156697296115824L;
	private String stock_id;
	private String shop_staff_id;
	private String staff_id;
	private String shop_staff_parent_id;
	private String code;
	private String name;
	private String type;
	private String status;
	private String address;
	private String staff_or_stock;
	private String node_code;
	private String parent_node_code;
	private String sessionStockID;
	
	private String shipment;
	private String xuatkhocode;
	private String lydocode;
	private String todate;
	private String fromdate;
	
	private String stock_trans_id;
	private String deliverer_stock_id;
	private String cmd_code;
	private String exec_staff_id;
	private String exec_date;
	private String cmd_date;
	private String deliverer_stock_name;
	private String stock_name;
	private String exec_staff_name;
	
	private String goodsid;
	private String primary_unit_of_measure;
	private String quantity_issue;
	List<StockShopDetailsGoodsEntity> listGoods;
	public List<StockShopDetailsGoodsEntity> getListGoods() {
	return listGoods;
}
	
public String getSessionStockID()
	{
		return sessionStockID;
	}

	public void setSessionStockID(String sessionStockID)
	{
		this.sessionStockID = sessionStockID;
	}

public void setListGoods(List<StockShopDetailsGoodsEntity> listGoods) {
	this.listGoods = listGoods;
}

	public StockShopEntity() {
		super();
	}
	public StockShopEntity(String stock_id, String shop_staff_id, String staff_id, String shop_staff_parent_id,
			String code, String name, String type, String status, String address, String staff_or_stock,
			String node_code, String parent_node_code, String shipment, String xuatkhocode, String lydocode,
			String todate, String fromdate, String stock_trans_id, String deliverer_stock_id, String cmd_code,
			String exec_staff_id, String exec_date, String cmd_date, String deliverer_stock_name, String stock_name,
			String exec_staff_name, String goodsid, String primary_unit_of_measure, String quantity_issue) {
		super();
		this.stock_id = stock_id;
		this.shop_staff_id = shop_staff_id;
		this.staff_id = staff_id;
		this.shop_staff_parent_id = shop_staff_parent_id;
		this.code = code;
		this.name = name;
		this.type = type;
		this.status = status;
		this.address = address;
		this.staff_or_stock = staff_or_stock;
		this.node_code = node_code;
		this.parent_node_code = parent_node_code;
		this.shipment = shipment;
		this.xuatkhocode = xuatkhocode;
		this.lydocode = lydocode;
		this.todate = todate;
		this.fromdate = fromdate;
		this.stock_trans_id = stock_trans_id;
		this.deliverer_stock_id = deliverer_stock_id;
		this.cmd_code = cmd_code;
		this.exec_staff_id = exec_staff_id;
		this.exec_date = exec_date;
		this.cmd_date = cmd_date;
		this.deliverer_stock_name = deliverer_stock_name;
		this.stock_name = stock_name;
		this.exec_staff_name = exec_staff_name;
		this.goodsid = goodsid;
		this.primary_unit_of_measure = primary_unit_of_measure;
		this.quantity_issue = quantity_issue;
	}
	public String getGoodsid() {
		return goodsid;
	}
	public void setGoodsid(String goodsid) {
		this.goodsid = goodsid;
	}
	public String getPrimary_unit_of_measure() {
		return primary_unit_of_measure;
	}
	public void setPrimary_unit_of_measure(String primary_unit_of_measure) {
		this.primary_unit_of_measure = primary_unit_of_measure;
	}
	public String getQuantity_issue() {
		return quantity_issue;
	}
	public void setQuantity_issue(String quantity_issue) {
		this.quantity_issue = quantity_issue;
	}
	public String getStock_trans_id() {
		return stock_trans_id;
	}
	public void setStock_trans_id(String stock_trans_id) {
		this.stock_trans_id = stock_trans_id;
	}
	public String getDeliverer_stock_id() {
		return deliverer_stock_id;
	}
	public void setDeliverer_stock_id(String deliverer_stock_id) {
		this.deliverer_stock_id = deliverer_stock_id;
	}
	public String getCmd_code() {
		return cmd_code;
	}
	public void setCmd_code(String cmd_code) {
		this.cmd_code = cmd_code;
	}
	public String getExec_staff_id() {
		return exec_staff_id;
	}
	public void setExec_staff_id(String exec_staff_id) {
		this.exec_staff_id = exec_staff_id;
	}
	public String getExec_date() {
		return exec_date;
	}
	public void setExec_date(String exec_date) {
		this.exec_date = exec_date;
	}
	public String getCmd_date() {
		return cmd_date;
	}
	public void setCmd_date(String cmd_date) {
		this.cmd_date = cmd_date;
	}
	public String getDeliverer_stock_name() {
		return deliverer_stock_name;
	}
	public void setDeliverer_stock_name(String deliverer_stock_name) {
		this.deliverer_stock_name = deliverer_stock_name;
	}
	public String getStock_name() {
		return stock_name;
	}
	public void setStock_name(String stock_name) {
		this.stock_name = stock_name;
	}
	public String getExec_staff_name() {
		return exec_staff_name;
	}
	public void setExec_staff_name(String exec_staff_name) {
		this.exec_staff_name = exec_staff_name;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getShipment() {
		return shipment;
	}
	public void setShipment(String shipment) {
		this.shipment = shipment;
	}
	public String getXuatkhocode() {
		return xuatkhocode;
	}
	public void setXuatkhocode(String xuatkhocode) {
		this.xuatkhocode = xuatkhocode;
	}
	public String getLydocode() {
		return lydocode;
	}
	public void setLydocode(String lydocode) {
		this.lydocode = lydocode;
	}
	public String getTodate() {
		return todate;
	}
	public void setTodate(String todate) {
		this.todate = todate;
	}
	public String getFromdate() {
		return fromdate;
	}
	public void setFromdate(String fromdate) {
		this.fromdate = fromdate;
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
	public String getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(String staff_id) {
		this.staff_id = staff_id;
	}
	public String getShop_staff_parent_id() {
		return shop_staff_parent_id;
	}
	public void setShop_staff_parent_id(String shop_staff_parent_id) {
		this.shop_staff_parent_id = shop_staff_parent_id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getStaff_or_stock() {
		return staff_or_stock;
	}
	public void setStaff_or_stock(String staff_or_stock) {
		this.staff_or_stock = staff_or_stock;
	}
	public String getNode_code() {
		return node_code;
	}
	public void setNode_code(String node_code) {
		this.node_code = node_code;
	}
	public String getParent_node_code() {
		return parent_node_code;
	}
	public void setParent_node_code(String parent_node_code) {
		this.parent_node_code = parent_node_code;
	}
	
}
