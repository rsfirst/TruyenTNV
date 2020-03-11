package vn.com.fis.model.mnpcm;

import java.util.List;

public class JMessage {
	private Integer code;
	private String message;
	private Object obj;
	private String status;
	private List listResult;
	
	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getObj() {
		return obj;
	}

	public void setObj(Object obj) {
		this.obj = obj;
	}

	public List getListResult() {
		return listResult;
	}

	public void setListResult(List listResult) {
		this.listResult = listResult;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}
}
