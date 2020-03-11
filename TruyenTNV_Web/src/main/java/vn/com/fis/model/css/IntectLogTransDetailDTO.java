package vn.com.fis.model.css;


public class IntectLogTransDetailDTO
{
	private String logTranObjectId;
	private String propertyCode;
	private String propertyOldValue;
	private String propertyNewValue;

	public IntectLogTransDetailDTO()
	{
	}

	public IntectLogTransDetailDTO(String logTranObjectId, String propertyCode, String propertyOldValue, String propertyNewValue)
	{
		this.logTranObjectId = logTranObjectId;
		this.propertyCode = propertyCode;
		this.propertyOldValue = propertyOldValue;
		this.propertyNewValue = propertyNewValue;
	}

	public String getLogTranObjectId()
	{
		return logTranObjectId;
	}

	public void setLogTranObjectId(String logTranObjectId)
	{
		this.logTranObjectId = logTranObjectId;
	}

	public String getPropertyCode()
	{
		return propertyCode;
	}

	public void setPropertyCode(String propertyCode)
	{
		this.propertyCode = propertyCode;
	}

	public String getPropertyOldValue()
	{
		return propertyOldValue;
	}

	public void setPropertyOldValue(String propertyOldValue)
	{
		this.propertyOldValue = propertyOldValue;
	}

	public String getPropertyNewValue()
	{
		return propertyNewValue;
	}

	public void setPropertyNewValue(String propertyNewValue)
	{
		this.propertyNewValue = propertyNewValue;
	}
}
