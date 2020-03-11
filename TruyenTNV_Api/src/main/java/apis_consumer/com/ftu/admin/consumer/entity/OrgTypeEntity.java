package apis_consumer.com.ftu.admin.consumer.entity;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class OrgTypeEntity implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3596991206459234038L;
	private int orgTypeId;
	private String code;
	private String name;
	private String status;

	public OrgTypeEntity() {
	}

	public OrgTypeEntity(int orgTypeId, String code, String name, String status) {
		this.orgTypeId = orgTypeId;
		this.code = code;
		this.name = name;
		this.status = status;
	}

	public int getOrgTypeId() {
		return this.orgTypeId;
	}

	public void setOrgTypeId(int orgTypeId) {
		this.orgTypeId = orgTypeId;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
