package apis_consumer.com.ftu.admin.consumer.entity;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RoleEntity implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1535784312685089710L;
	private int roleId;
	private String code;
	private String name;
	private String status;
	// private Set secIdentityRoles = new HashSet(0);

	public RoleEntity() {
	}

	public RoleEntity(int roleId, String code, String name, String status) {
		this.roleId = roleId;
		this.code = code;
		this.name = name;
		this.status = status;
	}

	public int getRoleId() {
		return this.roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
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

	// public Set getSecIdentityRoles() {
	// return this.secIdentityRoles;
	// }
	//
	// public void setSecIdentityRoles(Set secIdentityRoles) {
	// this.secIdentityRoles = secIdentityRoles;
	// }

}
