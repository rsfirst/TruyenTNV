package vn.com.fis.model.css;

import java.util.ArrayList;
import java.util.List;

public class GoodDetailOutput 
{
	long stock_id = 0L;
	long goods_id = 0L;
	long state_id = 0L;
	long quantity_issue = 0L;
	long quantity_effect = 0L;
	long quantity_remain = 0L;
	String goods_code = "";
	String goods_name = "";
	long check_warranty = 0L;
	String oneSerial = "";
	String notes = "";
	String name = "";
	String exeIEStaffResult = ""; 
	String exeIESerialStaffResult = ""; 
	
	List<String> serial = new ArrayList<String>();
	
	public GoodDetailOutput()
	{
		
	}
	public GoodDetailOutput copyGoodDetailOutput()
	{
		GoodDetailOutput object = new GoodDetailOutput(getStock_id(),getGoods_id(),getState_id(),getQuantity_issue(),
				getQuantity_effect(),getQuantity_remain(), getName());
		object.setGoods_code(getGoods_code());
		object.setGoods_name(getGoods_name());
		return object;
	}
	public GoodDetailOutput(long stock_id, long goods_id, long state_id, long quantity_issue, long quantity_effect,
			long quantity_remain, String name) {
		this.stock_id = stock_id;
		this.goods_id = goods_id;
		this.state_id = state_id;
		this.quantity_issue = quantity_issue;
		this.quantity_effect = quantity_effect;
		this.quantity_remain = quantity_remain;
		this.name = name;
	}
	public long getStock_id() {
		return stock_id;
	}
	public void setStock_id(long stock_id) {
		this.stock_id = stock_id;
	}
	public long getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(long goods_id) {
		this.goods_id = goods_id;
	}
	public long getState_id() {
		return state_id;
	}
	public void setState_id(long state_id) {
		this.state_id = state_id;
	}
	public long getQuantity_issue() {
		return quantity_issue;
	}
	public void setQuantity_issue(long quantity_issue) {
		this.quantity_issue = quantity_issue;
	}
	public long getQuantity_effect() {
		return quantity_effect;
	}
	public void setQuantity_effect(long quantity_effect) {
		this.quantity_effect = quantity_effect;
	}
	public long getQuantity_remain() {
		return quantity_remain;
	}
	public void setQuantity_remain(long quantity_remain) {
		this.quantity_remain = quantity_remain;
	}
	public String getGoods_code() {
		return goods_code;
	}
	public void setGoods_code(String goods_code) {
		this.goods_code = goods_code;
	}
	public String getGoods_name() {
		return goods_name;
	}
	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}
	public long getCheck_warranty() {
		return check_warranty;
	}
	public void setCheck_warranty(long check_warranty) {
		this.check_warranty = check_warranty;
	}
	public List<String> getSerial() {
		return serial;
	}
	public void setSerial(List<String> serial) {
		this.serial = serial;
	}
	public String getOneSerial() {
		return oneSerial;
	}
	public void setOneSerial(String oneSerial) {
		this.oneSerial = oneSerial;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getExeIEStaffResult() {
		return exeIEStaffResult;
	}
	public void setExeIEStaffResult(String exeIEStaffResult) {
		this.exeIEStaffResult = exeIEStaffResult;
	}
	public String getExeIESerialStaffResult() {
		return exeIESerialStaffResult;
	}
	public void setExeIESerialStaffResult(String exeIESerialStaffResult) {
		this.exeIESerialStaffResult = exeIESerialStaffResult;
	}
	public String getName()
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
}
