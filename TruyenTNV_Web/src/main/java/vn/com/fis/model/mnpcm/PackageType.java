package vn.com.fis.model.mnpcm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PackageType {

	@Column(name = "VALUE")
	private String value;

	@Id
	@Column(name = "NAME")
	private String name;

	@Column(name = "STATUS")
	private String status;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
