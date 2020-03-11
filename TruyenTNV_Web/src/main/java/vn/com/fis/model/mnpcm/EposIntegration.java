package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


/**
 * The persistent class for the EPOS_INTEGRATION database table.
 * 
 */
@Entity
@Table(name="EPOS_INTEGRATION")
@NamedQuery(name="EposIntegration.findAll", query="SELECT e FROM EposIntegration e")
public class EposIntegration implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="EPOS_INTEGRATION_ID")
	private long eposIntegrationId;

	@Temporal(TemporalType.DATE)
	@Column(name="CREATED_DATE")
	private Date createdDate;

	private String msg;

	@Column(name="NPR_ID")
	private BigDecimal nprId;

	private String status;

	//bi-directional many-to-one association to EposCommand
	@ManyToOne
	@JoinColumn(name="EPOS_COMMAND_ID")
	private EposCommand eposCommand;

	//bi-directional many-to-one association to NprActionAudit
	@ManyToOne
	@JoinColumn(name="NPR_ACTION_AUDIT_ID")
	private NprActionAudit nprActionAudit;

	public EposIntegration() {
	}

	public long getEposIntegrationId() {
		return this.eposIntegrationId;
	}

	public void setEposIntegrationId(long eposIntegrationId) {
		this.eposIntegrationId = eposIntegrationId;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getMsg() {
		return this.msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public BigDecimal getNprId() {
		return this.nprId;
	}

	public void setNprId(BigDecimal nprId) {
		this.nprId = nprId;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public EposCommand getEposCommand() {
		return this.eposCommand;
	}

	public void setEposCommand(EposCommand eposCommand) {
		this.eposCommand = eposCommand;
	}

	public NprActionAudit getNprActionAudit() {
		return this.nprActionAudit;
	}

	public void setNprActionAudit(NprActionAudit nprActionAudit) {
		this.nprActionAudit = nprActionAudit;
	}

}
