package vn.com.fis.model.mnpcm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
public class Province {

	@Id
	@Column(name = "PROVINCE_ID")
	private String province_id;

	@Column(name = "PRO_ID")
	private String proId;

	@Column(name = "PROVINCE")
	private String provinceName;
	
	@Column(name = "REGION")
	private String region;

	public String getProvince_id() {
		return province_id;
	}

	public void setProvince_id(String province_id) {
		this.province_id = province_id;
	}

	public String getProId() {
		return proId;
	}

	public void setProId(String proId) {
		this.proId = proId;
	}

	public String getProvinceName() {
		return provinceName;
	}

	public void setProvinceName(String provinceName) {
		this.provinceName = provinceName;
	}

	public String getRegion()
	{
		return region;
	}

	public void setRegion(String region)
	{
		this.region = region;
	}
}
