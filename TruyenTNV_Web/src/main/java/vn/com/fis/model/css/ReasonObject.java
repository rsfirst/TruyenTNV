package vn.com.fis.model.css;

public class ReasonObject {

	public ReasonObject () {
		
	}
	
	public ReasonObject (long reasonId, String code, String name, String status) {
		super();
		this.reasonId = reasonId;
		this.code = code;
		this.name = name;
		this.status = status;
	}

	public ReasonObject(long reasonId, String code, String type, String name, String description, String status)
	{
		super();
		this.reasonId = reasonId;
		this.code = code;
		this.type = type;
		this.name = name;
		this.description = description;
		this.status = status;
	}


	long reasonId;
	String code;
	String type;
	String name;
	String description;
	String status;
	public long getReasonId()
	{
		return reasonId;
	}

	public void setReasonId(long reasonId)
	{
		this.reasonId = reasonId;
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

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
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
