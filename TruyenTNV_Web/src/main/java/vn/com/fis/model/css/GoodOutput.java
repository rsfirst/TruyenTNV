package vn.com.fis.model.css;
 
public class GoodOutput
{
	long  goods_id = 0L;
	String goods_code = "";
	long goods_group_id = 0L;
	String good_type = "";
	String check_serial = "";
	String goods_name = "";
	String unit = "";
	String status = "";
	String notes = "";
	String unit_name = "";
	long check_quantity = 0L;
	String check_contran = "";
	String resource_code = "";
	long check_warranty = 0L;
	private String stock_id = "";
	int totalQuantityForExport = 0;
	long state_id = 0L;
	String exeIEStaffResult = ""; 
	String exeIESerialStaffResult = ""; 

	//GoodDetailOutput detailOuput = new GoodDetailOutput();
	public GoodOutput() {
		
	}
	public GoodOutput(long goods_id,String goods_code,long state_id)
	{
		this.goods_id = goods_id;
		this.goods_code = goods_code;
		this.state_id = state_id;
	}
	
	public GoodOutput(long goods_id, String goods_code, long goods_group_id, String good_type, String check_serial,
			String goods_name, String unit, String status, String notes, String unit_name, long check_quantity,
			String check_contran, String resource_code, long check_warranty,String stock_id) {
		this.goods_id = goods_id;
		this.goods_code = goods_code;
		this.goods_group_id = goods_group_id;
		this.good_type = good_type;
		this.check_serial = check_serial;
		this.goods_name = goods_name;
		this.unit = unit;
		this.status = status;
		this.notes = notes;
		this.unit_name = unit_name;
		this.check_quantity = check_quantity;
		this.check_contran = check_contran;
		this.resource_code = resource_code;
		this.check_warranty = check_warranty;
		this.stock_id = stock_id;
	}
	public long getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(long goods_id) {
		this.goods_id = goods_id;
	}
	public String getGoods_code() {
		return goods_code;
	}
	public void setGoods_code(String goods_code) {
		this.goods_code = goods_code;
	}
	public long getGoods_group_id() {
		return goods_group_id;
	}
	public void setGoods_group_id(long goods_group_id) {
		this.goods_group_id = goods_group_id;
	}
	public String getGood_type() {
		return good_type;
	}
	public void setGood_type(String good_type) {
		this.good_type = good_type;
	}
	public String getCheck_serial() {
		return check_serial;
	}
	public void setCheck_serial(String check_serial) {
		this.check_serial = check_serial;
	}
	public String getGoods_name() {
		return goods_name;
	}
	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getUnit_name() {
		return unit_name;
	}
	public void setUnit_name(String unit_name) {
		this.unit_name = unit_name;
	}
	public long getCheck_quantity() {
		return check_quantity;
	}
	public void setCheck_quantity(long check_quantity) {
		this.check_quantity = check_quantity;
	}
	public String getCheck_contran() {
		return check_contran;
	}
	public void setCheck_contran(String check_contran) {
		this.check_contran = check_contran;
	}
	public String getResource_code() {
		return resource_code;
	}
	public void setResource_code(String resource_code) {
		this.resource_code = resource_code;
	}
	public long getCheck_warranty() {
		return check_warranty;
	}
	public void setCheck_warranty(long check_warranty) {
		this.check_warranty = check_warranty;
	}
	public String getStock_id() {
		return stock_id;
	}
	public void setStock_id(String stock_id) {
		this.stock_id = stock_id;
	}
//	public void setGoodDetailOutput (GoodDetailOutput object)
//	{
//		this.detailOuput = object;
//	}
//	public GoodDetailOutput getGoodDetailOutput()
//	{
//		return detailOuput;
//	}
//	public static void main(String agrs[])
//	{
//		String formSerial = "312";
//		String toSerial = "412";
//		System.out.println(formSerial.compareTo(toSerial));
//	}
	public int getTotalQuantityForExport() {
		return totalQuantityForExport;
	}
	public void setTotalQuantityForExport(int totalQuantityForExport) {
		this.totalQuantityForExport = totalQuantityForExport;
	}
	public long getState_id() {
		return state_id;
	}
	public void setState_id(long state_id) {
		this.state_id = state_id;
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
}
