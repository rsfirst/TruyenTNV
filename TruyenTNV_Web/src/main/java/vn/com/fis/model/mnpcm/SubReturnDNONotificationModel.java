package vn.com.fis.model.mnpcm;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CommonUtils;
import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

public class SubReturnDNONotificationModel {

	private String dnoNetwork;

	private String reasonReturn;
	
	private String reasonReturnStr;
	
	private String comments;
	
	private String msisdn;
	
//	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date createdDate;
	
	private String createdDateStr;
	
	List<String> listSubscriber;
	
	List<AttachmentData> lisAttachMents;

	public String getDnoNetwork() {
		return dnoNetwork;
	}

	public void setDnoNetwork(String dnoNetwork) {
		this.dnoNetwork = dnoNetwork;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public List<String> getListSubscriber() {
		return listSubscriber;
	}

	public void setListSubscriber(List<String> listSubscriber) {
		this.listSubscriber = listSubscriber;
	}

	public List<AttachmentData> getLisAttachMents() {
		if(lisAttachMents == null) {
			lisAttachMents = new ArrayList<AttachmentData>();
		}
		return lisAttachMents;
	}

	public void setLisAttachMents(List<AttachmentData> lisAttachMents) {
		this.lisAttachMents = lisAttachMents;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public String getCreatedDateStr() {
		return CommonUtils.getDateToStringDDMMYYYYHHMMSS(this.createdDate);
	}

	public void setCreatedDateStr(String createdDateStr) {
		this.createdDateStr = createdDateStr;
	}

	public String getReasonReturn() {
		return reasonReturn;
	}

	public void setReasonReturn(String reasonReturn) {
		this.reasonReturn = reasonReturn;
	}

	public String getReasonReturnStr() {
		String reasonReturnStr = DataSourceEnum.getReasonReturnNotification(reasonReturn);
		return reasonReturnStr;
	}

	public void setReasonReturnStr(String reasonReturnStr) {
		this.reasonReturnStr = reasonReturnStr;
	}

	@Override
	public String toString() {
		return "SubReturnDNONotificationModel [dnoNetwork=" + dnoNetwork + ", reasonReturn=" + reasonReturn
				+ ", reasonReturnStr=" + reasonReturnStr + ", comments=" + comments + ", msisdn=" + msisdn
				+ ", createdDate=" + createdDate + ", createdDateStr=" + createdDateStr + "]";
	}
	
}
