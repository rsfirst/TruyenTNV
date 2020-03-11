package vn.com.fis.model.mnpcm;;

public class MapAgentStockBatchFileExcelModel {
	
	private String msisdn;
	private String shopCode;
	private String staffCode;
	private boolean typeCheck;
	
	public boolean isTypeCheck() {
		return typeCheck;
	}
	public void setTypeCheck(boolean typeCheck) {
		this.typeCheck = typeCheck;
	}
	public String getStaffCode() {
		return staffCode;
	}
	public void setStaffCode(String staffCode) {
		this.staffCode = staffCode;
	}
	public String getMsisdn() {
		return msisdn;
	}
	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}
	public String getShopCode() {
		return shopCode;
	}
	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}
	
	

	public MapAgentStockBatchFileExcelModel(String msisdn, String shopCode, String staffCode, boolean typeCheck) {
		super();
		this.msisdn = msisdn;
		this.shopCode = shopCode;
		this.staffCode = staffCode;
		this.typeCheck = typeCheck;
	}
	public MapAgentStockBatchFileExcelModel()
	{
		
	}

}
