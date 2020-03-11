package vn.com.fis.model.css;

import java.io.Serializable;

public class ResponseModel implements Serializable {
	private String code;
	private String description;
	private Object payload;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Object getPayload() {
		return payload;
	}

	public void setPayload(Object payload) {
		this.payload = payload;
	}

}
