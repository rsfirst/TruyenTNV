package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;

import vn.com.fis.utils.mnpcm.CommonUtils;

/**
 * The persistent class for the NPR_SUBSCRIBER database table.
 * 
 */
@Entity
@Table(name = "NPR_SUBSCRIBER")
public class NprSubscriber implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "NPR_SUBSCRIBER_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "NPR_SUBSCRIBER_SEQ")
	@SequenceGenerator(sequenceName = "NPR_SUBSCRIBER_SEQ", allocationSize = 1, name = "NPR_SUBSCRIBER_SEQ")
	private long nprSubscriberId;

	@Column(name = "VIOLATION_FLAG")
	private String violationFlag;

	@Column(name = "VIOLATION_REASON")
	private String violationReason;

	@Column(name = "VIOLATION_STATUS")
	private String violationStatus;

	@Column(name = "VNM_VIOLATION")
	private String vnmViolationStatus;

	@Column(name = "REJECT_TYPE")
	private String rejectType;

	public String getRejectType()
	{
		return rejectType;
	}

	public void setRejectType(String rejectType)
	{
		this.rejectType = rejectType;
	}

	@Transient
	private String violationStatusIndex;

	@Column(name = "ACCOUNT_TYPE")
	private String accountType;

	@Transient
	private String accountTypeStr;

	@Transient
	private String msisdnGroupType;
	
	@Column(name = "MSISDN")
	private String msisdn;

	@Column(name = "PRIMARY")
	private String primary;

	@Column(name = "CUS_ID")
	private String customerId;

	@Transient
	private String serialSim;

	@Transient
	private String note;

	@Transient
	private String approvedNPR;

	@Transient
	private String approveViolation;

	@Column(name = "REJECT_REASON")
	private String rejectReason;

	@ManyToOne
	@JoinColumn(name = "NPR_ID")
	private NPR nprSubscriber;

	public NprSubscriber()
	{
	}

	public long getNprSubscriberId()
	{
		return this.nprSubscriberId;
	}

	public void setNprSubscriberId(long nprSubscriberId)
	{
		this.nprSubscriberId = nprSubscriberId;
	}

	public String getViolationFlag()
	{
		return this.violationFlag;
	}

	public void setViolationFlag(String violationFlag)
	{
		this.violationFlag = violationFlag;
	}

	public String getViolationReason()
	{
		return this.violationReason;
	}

	public void setViolationReason(String violationReason)
	{
		this.violationReason = violationReason;
	}

	public String getViolationStatus()
	{
		return this.violationStatus;
	}

	public void setViolationStatus(String violationStatus)
	{
		this.violationStatus = violationStatus;
	}

	public String getAccountType()
	{
		return accountType;
	}

	public void setAccountType(String accountType)
	{
		this.accountType = accountType;
	}

	public String getMsisdn()
	{
		return msisdn;
	}

	public void setMsisdn(String msisdn)
	{
		this.msisdn = msisdn;
	}

	public void setNprSubscriber(NPR nprSubscriber)
	{
		this.nprSubscriber = nprSubscriber;
	}

	public String getPrimary()
	{
		return primary;
	}

	public void setPrimary(String primary)
	{
		this.primary = primary;
	}

	public String getAccountTypeStr()
	{
		return CommonUtils.getAccountTypeStr(this.accountType);
	}

	public void setAccountTypeStr(String accountTypeStr)
	{
		this.accountTypeStr = accountTypeStr;
	}

	public String getViolationStatusIndex()
	{
		return violationStatusIndex;
	}

	public void setViolationStatusIndex(String violationStatusIndex)
	{
		this.violationStatusIndex = violationStatusIndex;
	}

	public String getVnmViolationStatus()
	{
		return vnmViolationStatus;
	}

	public void setVnmViolationStatus(String vnmViolationStatus)
	{
		this.vnmViolationStatus = vnmViolationStatus;
	}

	public String getSerialSim()
	{
		return serialSim;
	}

	public void setSerialSim(String serialSim)
	{
		this.serialSim = serialSim;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public String getApprovedNPR()
	{
		return approvedNPR;
	}

	public void setApprovedNPR(String approvedNPR)
	{
		this.approvedNPR = approvedNPR;
	}

	public String getRejectReason()
	{
		return rejectReason;
	}

	public void setRejectReason(String rejectReason)
	{
		this.rejectReason = rejectReason;
	}

	public String getApproveViolation()
	{
		return approveViolation;
	}

	public void setApproveViolation(String approveViolation)
	{
		this.approveViolation = approveViolation;
	}

	public String getMsisdnGroupType()
	{
		return msisdnGroupType;
	}

	public void setMsisdnGroupType(String msisdnGroupType)
	{
		this.msisdnGroupType = msisdnGroupType;
	}

	@Override
	public String toString()
	{
		return "Data NprSubscriber [nprSubscriberId=" + nprSubscriberId + ", violationFlag=" + violationFlag + ", violationReason=" + violationReason
				+ ", violationStatus=" + violationStatus + ", vnmViolationStatus=" + vnmViolationStatus + ", rejectType=" + rejectType
				+ ", violationStatusIndex=" + violationStatusIndex + ", accountType=" + accountType + ", accountTypeStr=" + accountTypeStr + ", msisdn="
				+ msisdn + ", primary=" + primary + ", customerId=" + customerId + ", serialSim=" + serialSim + ", note=" + note + ", approvedNPR="
				+ approvedNPR + ", approveViolation=" + approveViolation + ", rejectReason=" + rejectReason + "]";
	}
}
