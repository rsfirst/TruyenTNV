package vn.com.fis.model.mnpcm;

public class MnpStaffLocationType {
	private long id;
	
	private String staff_code;
	
	private String namestaff;
	
	private String province_id;
	
	private String nameprovince;
	
	private String district_id;
	
	private String namedistrict;
	
	private String create_date;
	
	private String status;
	
	private String checkstatus;

	public String getCheckstatus() {
		return checkstatus;
	}

	public void setCheckstatus(String checkstatus) {
		this.checkstatus = checkstatus;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStaff_code() {
		return staff_code;
	}

	public void setStaff_code(String staff_code) {
		this.staff_code = staff_code;
	}

	public String getProvince_id() {
		return province_id;
	}

	public void setProvince_id(String province_id) {
		this.province_id = province_id;
	}

	public String getDistrict_id() {
		return district_id;
	}

	public void setDistrict_id(String district_id) {
		this.district_id = district_id;
	}

	public String getCreate_date() {
		return create_date;
	}

	public void setCreate_date(String create_date) {
		this.create_date = create_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	public String getNamestaff() {
		return namestaff;
	}

	public void setNamestaff(String namestaff) {
		this.namestaff = namestaff;
	}

	public String getNameprovince() {
		return nameprovince;
	}

	public void setNameprovince(String nameprovince) {
		this.nameprovince = nameprovince;
	}

	public String getNamedistrict() {
		return namedistrict;
	}

	public void setNamedistrict(String namedistrict) {
		this.namedistrict = namedistrict;
	}
	
	
	
}
