package vn.com.fis.model.epos;

import java.util.List;

public class DataSearchInVoiceApprove {
	private String strShopId;
	private String strStaffId;
	private String strFromDate;
	private String strToDate;
	private String strStatus;
	private String strInvoiceNo;
	private String strPayMethod;
	private String strAgentId;
	private String transtype;
	private String strInvoiceType;
	private List<ObjectInvoiceApproveModel> listInvoice;
	private String sessionStaffId;
	private String createDate;
	private String status ;
	
	public List<ObjectInvoiceApproveModel> getListInvoice() {
		return listInvoice;
	}
	public void setListInvoice(List<ObjectInvoiceApproveModel> listInvoice) {
		this.listInvoice = listInvoice;
	}
	public String getSessionStaffId() {
		return sessionStaffId;
	}
	public void setSessionStaffId(String sessionStaffId) {
		this.sessionStaffId = sessionStaffId;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStrInvoiceType() {
		return strInvoiceType;
	}
	public void setStrInvoiceType(String strInvoiceType) {
		this.strInvoiceType = strInvoiceType;
	}
	public String getStrShopId() {
		return strShopId;
	}
	public void setStrShopId(String strShopId) {
		this.strShopId = strShopId;
	}
	public String getStrStaffId() {
		return strStaffId;
	}
	public void setStrStaffId(String strStaffId) {
		this.strStaffId = strStaffId;
	}
	public String getStrFromDate() {
		return strFromDate;
	}
	public void setStrFromDate(String strFromDate) {
		this.strFromDate = strFromDate;
	}
	public String getStrToDate() {
		return strToDate;
	}
	public void setStrToDate(String strToDate) {
		this.strToDate = strToDate;
	}
	public String getStrStatus() {
		return strStatus;
	}
	public void setStrStatus(String strStatus) {
		this.strStatus = strStatus;
	}
	public String getStrInvoiceNo() {
		return strInvoiceNo;
	}
	public void setStrInvoiceNo(String strInvoiceNo) {
		this.strInvoiceNo = strInvoiceNo;
	}
	public String getStrPayMethod() {
		return strPayMethod;
	}
	public void setStrPayMethod(String strPayMethod) {
		this.strPayMethod = strPayMethod;
	}
	public String getStrAgentId() {
		return strAgentId;
	}
	public void setStrAgentId(String strAgentId) {
		this.strAgentId = strAgentId;
	}
	public String getTranstype() {
		return transtype;
	}
	public void setTranstype(String transtype) {
		this.transtype = transtype;
	}
	

}
