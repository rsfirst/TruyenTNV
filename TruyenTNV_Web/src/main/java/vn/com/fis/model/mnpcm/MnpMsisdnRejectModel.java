package vn.com.fis.model.mnpcm;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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


public class MnpMsisdnRejectModel
{

	private long id;


	private String msisdn;


	private String msisdnType;
	

	private String department;

	private String comments;

	private String createUser;
	
	
	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}


	private String msisdnTypeStr;

	private String status;

	private List<String> note;


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

	public Date getCreatedDate()
	{
		return createdDate;
	}

	public void setCreatedDate(Date createdDate)
	{
		this.createdDate = createdDate;
	}

	public String getMsisdn()
	{
		return msisdn;
	}

	public void setMsisdn(String msisdn)
	{
		this.msisdn = msisdn;
	}

	public String getMsisdnType()
	{
		return msisdnType;
	}

	public void setMsisdnType(String msisdnType)
	{
		this.msisdnType = msisdnType;
	}

	public String getMsisdnTypeStr()
	{
		return msisdnTypeStr;
	}

	public void setMsisdnTypeStr(String msisdnTypeStr)
	{
		this.msisdnTypeStr = msisdnTypeStr;
	}

	public void setCreatedDateStr(String createdDateStr)
	{
		this.createdDateStr = createdDateStr;
	}

	public String getCreatedDateStr()
	{
		return createdDateStr;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public List<String> getNote()
	{
		if (note == null)
		{
			return new ArrayList<String>();
		}
		return note;
	}

	public void setNote(List<String> note)
	{
		this.note = note;
	}

	public String getDepartment()
	{
		return department;
	}

	public void setDepartment(String department)
	{
		this.department = department;
	}

	public String getComments()
	{
		return comments;
	}

	public void setComments(String comments)
	{
		this.comments = comments;
	}

}
