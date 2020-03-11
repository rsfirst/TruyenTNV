package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


/**
 * The persistent class for the MNP_REQUEST_LOG database table.
 * 
 */
@Entity
@Table(name="MNP_REQUEST_LOG")
@NamedQuery(name="MnpRequestLog.findAll", query="SELECT m FROM MnpRequestLog m")
public class MnpRequestLog implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MNP_REQUEST_LOG_SEQ")
    @SequenceGenerator(sequenceName = "MNP_REQUEST_LOG_SEQ", allocationSize = 1, name = "MNP_REQUEST_LOG_SEQ")
	
	@Column(name="REQUEST_LOG_ID")
	private long requestLogId;

	@Temporal(TemporalType.DATE)
	@Column(name="CREATE_DATE")
	private Date createDate;

	@Column(name="MESSAGE")
	private String message;

	@Column(name="STATUS")
	private String status;

	@Column(name="TRANSACTION_ID")
	private String transactionId;

	@Column(name="TYPE_REQUEST")
	private String typeRequest;

	@Column(name="USER_NAME")
	private String userName;

	public MnpRequestLog() {
	}

	public long getRequestLogId() {
		return this.requestLogId;
	}

	public void setRequestLogId(long requestLogId) {
		this.requestLogId = requestLogId;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getMessage() {
		return this.message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getTransactionId() {
		return this.transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

	public String getTypeRequest() {
		return this.typeRequest;
	}

	public void setTypeRequest(String typeRequest) {
		this.typeRequest = typeRequest;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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
