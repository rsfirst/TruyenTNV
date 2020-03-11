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
@Table(name = "PREORDER_TRANS")
public class MnpPreOrderTransType {
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MNP_GROUP_SEQ")
	@SequenceGenerator(sequenceName = "MNP_GROUP_SEQ", allocationSize = 1, name = "MNP_GROUP_SEQ")
	private long id;
	
	@Column(name = "PRE_ORDER_ID")
	private String preOrderId;
	
	@Column(name = "TRANS_ID")
	private String transId;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "CREATE_DATE")
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createDate;
	
	@Column(name = "REJECT_REASON")
	private String rejectReason;
	
	@Column(name = "STATUS")
	private String status;
	
	@Transient
	private String createDateStr;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPreOrderId() {
		return preOrderId;
	}

	public void setPreOrderId(String preOrderId) {
		this.preOrderId = preOrderId;
	}

	public String getTransId() {
		return transId;
	}

	public void setTransId(String transID) {
		this.transId = transID;
	}


	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getRejectReason() {
		return rejectReason;
	}

	public void setRejectReason(String rejectReason) {
		this.rejectReason = rejectReason;
	}

	public String getCreateDateStr() {
		return createDateStr;
	}

	public void setCreateDateStr(String createDateStr) {
		this.createDateStr = createDateStr;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
