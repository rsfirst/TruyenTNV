package vn.com.fis.model.css;

import java.io.Serializable;

public class ServiceCodeRequest implements Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6582558100074868923L;

	private String name;
	private String code;
	private String type;

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

}
