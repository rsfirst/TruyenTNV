package vn.com.fis.model.mnpcm;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;


public class MnpVipWhiteListModel {

	private String msisdn;


	private Date createDate;


	private String status;


	private Date modifyDate;


	private String createUser;


	private String modifyUser;


	private String type;


	private String notes;


	private List<String> note;


	private String createdDateStr;


	private String modifyDateStr;

	private String statusCreate;

	private String fromDate;

	private String toDate;

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getStatusCreate() {
		return statusCreate;
	}

	public void setStatusCreate(String statusCreate) {
		this.statusCreate = statusCreate;
	}

	public List<String> getNote() {
		if (note == null) {
			return new ArrayList<String>();
		}
		return note;
	}

	public void setNote(List<String> note) {
		this.note = note;
	}

	public void setCreatedDateStr(String createdDateStr) {
		this.createdDateStr = createdDateStr;
	}

	public void setModifyDateStr(String modifyDateStr) {
		this.modifyDateStr = modifyDateStr;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public String getModifyUser() {
		return modifyUser;
	}

	public void setModifyUser(String modifyUser) {
		this.modifyUser = modifyUser;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getCreatedDateStr() {
		return this.createdDateStr;
	}

	public String getModifyDateStr() {
		return this.modifyDateStr;
	}

}
