package vn.com.fis.model.mnpcm;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

public class SearchDataInputModel {

	private long nprId;
	
	private String receipient;

	private String msisdn;
	
	private String transactionID;
	
	private String statusNPRRequest;
	
	private String returnReason;
	
	private String comments;
	
	private String checkForceAccept;
	
	private NPR npr;
	
	List<NprSubscriber> listNprSubscribers;
	
	List<AttachmentData> listAttachMentData;
	
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date startDate;

	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date endDate;

	public String getReceipient() {
		return receipient;
	}

	public void setReceipient(String receipient) {
		this.receipient = receipient;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(String transactionID) {
		this.transactionID = transactionID;
	}

	public String getStatusNPRRequest() {
		return statusNPRRequest;
	}

	public void setStatusNPRRequest(String statusNPRRequest) {
		this.statusNPRRequest = statusNPRRequest;
	}

	public long getNprId() {
		return nprId;
	}

	public void setNprId(long nprId) {
		this.nprId = nprId;
	}

	public List<NprSubscriber> getListNprSubscribers() {
		return listNprSubscribers;
	}

	public void setListNprSubscribers(List<NprSubscriber> listNprSubscribers) {
		this.listNprSubscribers = listNprSubscribers;
	}

	public List<AttachmentData> getListAttachMentData() {
		return listAttachMentData;
	}

	public void setListAttachMentData(List<AttachmentData> listAttachMentData) {
		this.listAttachMentData = listAttachMentData;
	}

	public String getReturnReason() {
		return returnReason;
	}

	public void setReturnReason(String returnReason) {
		this.returnReason = returnReason;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public NPR getNpr()
	{
		return npr;
	}

	public void setNpr(NPR npr)
	{
		this.npr = npr;
	}

	public String getCheckForceAccept()
	{
		return checkForceAccept;
	}

	public void setCheckForceAccept(String checkForceAccept)
	{
		this.checkForceAccept = checkForceAccept;
	}

	@Override
	public String toString() {
		return "SearchDataInputModel [nprId=" + nprId + ", receipient=" + receipient + ", msisdn=" + msisdn
				+ ", transactionID=" + transactionID + ", statusNPRRequest=" + statusNPRRequest + ", returnReason="
				+ returnReason + ", comments=" + comments + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}

}
