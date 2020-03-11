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


public class MnpMsisdnGroupRejectModel
{

	private long id;


	private String groupId;
	

	private String msisdnGroup;

	private Date createdDate;
	

	private String createdDateStr;

	public long getId()
	{
		return id;
	}

	public void setId(long id)
	{
		this.id = id;
	}

	public String getGroupId()
	{
		return groupId;
	}

	public void setGroupId(String groupId)
	{
		this.groupId = groupId;
	}

	public Date getCreatedDate()
	{
		return createdDate;
	}

	public void setCreatedDate(Date createdDate)
	{
		this.createdDate = createdDate;
	}

	public String getCreatedDateStr()
	{
		return createdDateStr;
	}

	public void setCreatedDateStr(String createdDateStr)
	{
		this.createdDateStr = createdDateStr;
	}

	public String getMsisdnGroup()
	{
		return msisdnGroup;
	}

	public void setMsisdnGroup(String msisdnGroup)
	{
		this.msisdnGroup = msisdnGroup;
	}

}
