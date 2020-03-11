package vn.com.fis.model.mnpcm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AppDomainModel {
			
	
	@Column(name = "TYPE")
	private String type;

	@Column(name = "CODE")
	private String code;

	@Id
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "STATUS")
	private String status;
	
	@Column(name = "VALUE")
	private String value;
	
	@Column(name = "REASON_TYPE")
	private String reasonType;
	
	@Column(name = "GROUP_CODE")
	private String groupCode;
	
	@Column(name = "CHARGE_TYPE")
	private String chargeType;
	
	@Column(name = "NB_DATE_CANCEL")
	private String nbDateCancel;

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getCode()
	{
		return code;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getValue()
	{
		return value;
	}

	public void setValue(String value)
	{
		this.value = value;
	}

	public String getReasonType()
	{
		return reasonType;
	}

	public void setReasonType(String reasonType)
	{
		this.reasonType = reasonType;
	}

	public String getGroupCode()
	{
		return groupCode;
	}

	public void setGroupCode(String groupCode)
	{
		this.groupCode = groupCode;
	}

	public String getChargeType()
	{
		return chargeType;
	}

	public void setChargeType(String chargeType)
	{
		this.chargeType = chargeType;
	}

	public String getNbDateCancel()
	{
		return nbDateCancel;
	}

	public void setNbDateCancel(String nbDateCancel)
	{
		this.nbDateCancel = nbDateCancel;
	}
	
	
}
