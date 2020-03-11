package vn.com.fis.model.mnpcm;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

@Entity
@Table(name = "MNP_COS_REJECT")
public class MnpCosRejectModel
{

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MNP_COS_REJECT_SEQ")
	@SequenceGenerator(sequenceName = "MNP_COS_REJECT_SEQ", allocationSize = 1, name = "MNP_COS_REJECT_SEQ")
	private long id;
	
	@Column(name = "COS")
	private String cos;
	
	@Column(name = "COS_NAME")
	private String cosName;
	
	//@Temporal(TemporalType.DATE)
	//@Column(name = "DATE_TIME")
	//@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createdDate;
	
	@Transient
	private String createDateStr;
	
	@Column(name = "MSISDN_TYPE")
	private String msisdnType;
	
	public String getCos()
	{
		return cos;
	}
	public void setCos(String cos)
	{
		this.cos = cos;
	}
	public String getCosName()
	{
		return cosName;
	}
	public void setCosName(String cosName)
	{
		this.cosName = cosName;
	}

	public String getMsisdnType()
	{
		return msisdnType;
	}
	public void setMsisdnType(String msisdnType)
	{
		this.msisdnType = msisdnType;
	}
	public long getId()
	{
		return id;
	}
	public void setId(long id)
	{
		this.id = id;
	}
	public Date getCreatedDate()
	{
		return createdDate;
	}
	public void setCreatedDate(Date createdDate)
	{
		this.createdDate = createdDate;
	}
	public String getCreateDateStr()
	{
		return createDateStr;
	}
	public void setCreateDateStr(String createDateStr)
	{
		this.createDateStr = createDateStr;
	}
	
}
