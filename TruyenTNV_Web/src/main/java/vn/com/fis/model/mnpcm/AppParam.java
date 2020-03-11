package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the APP_PARAM database table.
 * 
 */
//@Entity
//@Table(name="APP_PARAM")
//@NamedQuery(name="AppParam.findAll", query="SELECT a FROM AppParam a")
public class AppParam implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name="APP_ID")
	private BigDecimal appId;

	@Column(name="APP_PARAM_ID")
	private BigDecimal appParamId;

	private String description;

	private String name;

	@Column(name="PARAM_TYPE")
	private String paramType;

	@Column(name="PARAM_VALUE")
	private String paramValue;

	private String status;

	public AppParam() {
	}

	public BigDecimal getAppId() {
		return this.appId;
	}

	public void setAppId(BigDecimal appId) {
		this.appId = appId;
	}

	public BigDecimal getAppParamId() {
		return this.appParamId;
	}

	public void setAppParamId(BigDecimal appParamId) {
		this.appParamId = appParamId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getParamType() {
		return this.paramType;
	}

	public void setParamType(String paramType) {
		this.paramType = paramType;
	}

	public String getParamValue() {
		return this.paramValue;
	}

	public void setParamValue(String paramValue) {
		this.paramValue = paramValue;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
