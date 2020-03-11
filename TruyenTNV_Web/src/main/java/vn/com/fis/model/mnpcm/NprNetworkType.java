package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the NPR_NETWORK_TYPE database table.
 * 
 */
@Entity
@Table(name="NPR_NETWORK_TYPE")
public class NprNetworkType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="NETWORK_ID")
	private String networkId;

	@Column(name="NETWORK_NAME")
	private String networkName;

	@Column(name="NPR_NETWORK_ID")
	private BigDecimal nprNetworkId;

	@Column(name="STATUS")
	private String status;
	
	public NprNetworkType() {
	}

	public String getNetworkId() {
		return this.networkId;
	}

	public void setNetworkId(String networkId) {
		this.networkId = networkId;
	}

	public String getNetworkName() {
		return this.networkName;
	}

	public void setNetworkName(String networkName) {
		this.networkName = networkName;
	}

	public BigDecimal getNprNetworkId() {
		return this.nprNetworkId;
	}

	public void setNprNetworkId(BigDecimal nprNetworkId) {
		this.nprNetworkId = nprNetworkId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
