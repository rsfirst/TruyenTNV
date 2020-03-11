package apis_consumer.com.ftu.admin.consumer.entity;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class IPAddressEntity implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1661010197566500546L;
	private String ipAddress;
	private String ipGroupCode;

	public IPAddressEntity() {
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getIpGroupCode() {
		return ipGroupCode;
	}

	public void setIpGroupCode(String ipGroupCode) {
		this.ipGroupCode = ipGroupCode;
	}

}
