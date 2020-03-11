package vn.com.fis.model.epos;

public class ActionLogSearchObject {
	private String vstrShopID;
	private String vstrStaffID;
	private String vstrFromDate;
	private String vstrToDate;
	private String vstrActionCode; 
	public ActionLogSearchObject() {
		// TODO Auto-generated constructor stub
	}
	public ActionLogSearchObject(String vstrShopID, String vstrStaffID, String vstrFromDate, String vstrToDate,
			String vstrActionCode) {
		super();
		this.vstrShopID = vstrShopID;
		this.vstrStaffID = vstrStaffID;
		this.vstrFromDate = vstrFromDate;
		this.vstrToDate = vstrToDate;
		this.vstrActionCode = vstrActionCode;
	}
	public String getVstrShopID() {
		return vstrShopID;
	}
	public void setVstrShopID(String vstrShopID) {
		this.vstrShopID = vstrShopID;
	}
	public String getVstrStaffID() {
		return vstrStaffID;
	}
	public void setVstrStaffID(String vstrStaffID) {
		this.vstrStaffID = vstrStaffID;
	}
	public String getVstrFromDate() {
		return vstrFromDate;
	}
	public void setVstrFromDate(String vstrFromDate) {
		this.vstrFromDate = vstrFromDate;
	}
	public String getVstrToDate() {
		return vstrToDate;
	}
	public void setVstrToDate(String vstrToDate) {
		this.vstrToDate = vstrToDate;
	}
	public String getVstrActionCode() {
		return vstrActionCode;
	}
	public void setVstrActionCode(String vstrActionCode) {
		this.vstrActionCode = vstrActionCode;
	}
	
}
