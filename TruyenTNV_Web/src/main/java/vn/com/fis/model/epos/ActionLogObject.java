package vn.com.fis.model.epos;

public class ActionLogObject {
	private String action;
	private String date;
	private String staff;
	private String address;
	private String status;
	private String description;	
	public ActionLogObject() {
		// TODO Auto-generated constructor stub
	}
	public ActionLogObject(String action, String date, String staff, String address, String status,
			String description) {
		super();
		this.action = action;
		this.date = date;
		this.staff = staff;
		this.address = address;
		this.status = status;
		this.description = description;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStaff() {
		return staff;
	}
	public void setStaff(String staff) {
		this.staff = staff;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
