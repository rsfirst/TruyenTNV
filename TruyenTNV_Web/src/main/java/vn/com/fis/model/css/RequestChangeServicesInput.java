package vn.com.fis.model.css;

import java.io.Serializable;

public class RequestChangeServicesInput implements Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7052123655023500195L;

	private String requestId;
	private String msisdn;
	private String customerName;
	private String serviceCode;
	private String creater;
	private String groupCreater;
	private String mdnsVerify;
	private String type;
	private String birthdate;
	private String address;
	private String phone;
	private String idcard;
	private String placeissue;
	private String dateissue;
	private String description;
	private String productChange;

	private String img_id;
	private String file_id;
	private String img_id_2;
	private String file_id2;
	private String cust_img;
	private String bus_permit_no_img1;
	private String contract_img1;
	private String contract_img2;
	private String authorized_img;

	private String executer;
	private String log_id;
	private String cmt;
	private String comm_money;
	private String create_stock;
	private String modify_stock;
	private String release_deposit_des;
	private String release_deposit_amount;
	private String release_deposit_date;
	private String reviewer;
	private String review_date;
	private String review_reason;
	private String status;
	private String createDate;
	private String modifyDate;
	private String approveDate;
	private String executeDate;
	private String approver;
	private String shopId;
	private String createFromDate;
	private String createToDate;
	private String imgTye;
	
	private String channel;
	
	private String old_idno_img;
	private String old_idno_2_img;
	private String ck_img;
	
	private String imgCmgs;
	
	public RequestChangeServicesInput() {
		
	};
	
	public RequestChangeServicesInput(String requestId, String msisdn, String customerName, String serviceCode, String creater, String groupCreater,
			String mdnsVerify, String type, String birthdate, String address, String phone, String idcard, String placeissue, String dateissue,
			String description, String productChange, String img_id, String file_id, String img_id_2, String file_id2, String cust_img,
			String bus_permit_no_img1, String contract_img1, String contract_img2, String authorized_img, String executer, String log_id, String cmt,
			String comm_money, String create_stock, String modify_stock, String release_deposit_des, String release_deposit_amount, String release_deposit_date,
			String reviewer, String review_date, String review_reason, String status, String createDate, String modifyDate, String approveDate,
			String executeDate, String approver, String shopId, String createFromDate, String createToDate, String imgTye, String channel, String commentReview)
	{
		super();
		this.requestId = requestId;
		this.msisdn = msisdn;
		this.customerName = customerName;
		this.serviceCode = serviceCode;
		this.creater = creater;
		this.groupCreater = groupCreater;
		this.mdnsVerify = mdnsVerify;
		this.type = type;
		this.birthdate = birthdate;
		this.address = address;
		this.phone = phone;
		this.idcard = idcard;
		this.placeissue = placeissue;
		this.dateissue = dateissue;
		this.description = description;
		this.productChange = productChange;
		this.img_id = img_id;
		this.file_id = file_id;
		this.img_id_2 = img_id_2;
		this.file_id2 = file_id2;
		this.cust_img = cust_img;
		this.bus_permit_no_img1 = bus_permit_no_img1;
		this.contract_img1 = contract_img1;
		this.contract_img2 = contract_img2;
		this.authorized_img = authorized_img;
		this.executer = executer;
		this.log_id = log_id;
		this.cmt = cmt;
		this.comm_money = comm_money;
		this.create_stock = create_stock;
		this.modify_stock = modify_stock;
		this.release_deposit_des = release_deposit_des;
		this.release_deposit_amount = release_deposit_amount;
		this.release_deposit_date = release_deposit_date;
		this.reviewer = reviewer;
		this.review_date = review_date;
		this.review_reason = review_reason;
		this.status = status;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.approveDate = approveDate;
		this.executeDate = executeDate;
		this.approver = approver;
		this.shopId = shopId;
		this.createFromDate = createFromDate;
		this.createToDate = createToDate;
		this.imgTye = imgTye;
		this.channel = channel;
		this.commentReview = commentReview;
	}

	public String getChannel()
	{
		return channel;
	}

	public void setChannel(String channel)
	{
		this.channel = channel;
	}

	public String getImgTye()
	{
		return imgTye;
	}

	public void setImgTye(String imgTye)
	{
		this.imgTye = imgTye;
	}

	private String commentReview;

	public String getRequestId()
	{
		return requestId;
	}

	public void setRequestId(String requestId)
	{
		this.requestId = requestId;
	}

	public String getMsisdn()
	{
		return msisdn;
	}

	public void setMsisdn(String msisdn)
	{
		this.msisdn = msisdn;
	}

	public String getCustomerName()
	{
		return customerName;
	}

	public void setCustomerName(String customerName)
	{
		this.customerName = customerName;
	}

	public String getServiceCode()
	{
		return serviceCode;
	}

	public void setServiceCode(String serviceCode)
	{
		this.serviceCode = serviceCode;
	}

	public String getCreater()
	{
		return creater;
	}

	public void setCreater(String creater)
	{
		this.creater = creater;
	}

	public String getMdnsVerify()
	{
		return mdnsVerify;
	}

	public void setMdnsVerify(String mdnsVerify)
	{
		this.mdnsVerify = mdnsVerify;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getBirthdate()
	{
		return birthdate;
	}

	public void setBirthdate(String birthdate)
	{
		this.birthdate = birthdate;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public String getPhone()
	{
		return phone;
	}

	public void setPhone(String phone)
	{
		this.phone = phone;
	}

	public String getIdcard()
	{
		return idcard;
	}

	public void setIdcard(String idcard)
	{
		this.idcard = idcard;
	}

	public String getPlaceissue()
	{
		return placeissue;
	}

	public void setPlaceissue(String placeissue)
	{
		this.placeissue = placeissue;
	}

	public String getDateissue()
	{
		return dateissue;
	}

	public void setDateissue(String dateissue)
	{
		this.dateissue = dateissue;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getProductChange()
	{
		return productChange;
	}

	public void setProductChange(String productChange)
	{
		this.productChange = productChange;
	}

	public String getImg_id()
	{
		return img_id;
	}

	public void setImg_id(String img_id)
	{
		this.img_id = img_id;
	}

	public String getFile_id()
	{
		return file_id;
	}

	public void setFile_id(String file_id)
	{
		this.file_id = file_id;
	}

	public String getImg_id_2()
	{
		return img_id_2;
	}

	public void setImg_id_2(String img_id_2)
	{
		this.img_id_2 = img_id_2;
	}

	public String getFile_id2()
	{
		return file_id2;
	}

	public void setFile_id2(String file_id2)
	{
		this.file_id2 = file_id2;
	}

	public String getCust_img()
	{
		return cust_img;
	}

	public void setCust_img(String cust_img)
	{
		this.cust_img = cust_img;
	}

	public String getBus_permit_no_img1()
	{
		return bus_permit_no_img1;
	}

	public void setBus_permit_no_img1(String bus_permit_no_img1)
	{
		this.bus_permit_no_img1 = bus_permit_no_img1;
	}

	public String getContract_img1()
	{
		return contract_img1;
	}

	public void setContract_img1(String contract_img1)
	{
		this.contract_img1 = contract_img1;
	}

	public String getContract_img2()
	{
		return contract_img2;
	}

	public void setContract_img2(String contract_img2)
	{
		this.contract_img2 = contract_img2;
	}

	public String getAuthorized_img()
	{
		return authorized_img;
	}

	public void setAuthorized_img(String authorized_img)
	{
		this.authorized_img = authorized_img;
	}

	public static long getSerialversionuid()
	{
		return serialVersionUID;
	}

	public String getExecuter()
	{
		return executer;
	}

	public void setExecuter(String executer)
	{
		this.executer = executer;
	}

	public String getLog_id()
	{
		return log_id;
	}

	public void setLog_id(String log_id)
	{
		this.log_id = log_id;
	}

	public String getCmt()
	{
		return cmt;
	}

	public void setCmt(String cmt)
	{
		this.cmt = cmt;
	}

	public String getComm_money()
	{
		return comm_money;
	}

	public void setComm_money(String comm_money)
	{
		this.comm_money = comm_money;
	}

	public String getCreate_stock()
	{
		return create_stock;
	}

	public void setCreate_stock(String create_stock)
	{
		this.create_stock = create_stock;
	}

	public String getModify_stock()
	{
		return modify_stock;
	}

	public void setModify_stock(String modify_stock)
	{
		this.modify_stock = modify_stock;
	}

	public String getRelease_deposit_des()
	{
		return release_deposit_des;
	}

	public void setRelease_deposit_des(String release_deposit_des)
	{
		this.release_deposit_des = release_deposit_des;
	}

	public String getRelease_deposit_amount()
	{
		return release_deposit_amount;
	}

	public void setRelease_deposit_amount(String release_deposit_amount)
	{
		this.release_deposit_amount = release_deposit_amount;
	}

	public String getRelease_deposit_date()
	{
		return release_deposit_date;
	}

	public void setRelease_deposit_date(String release_deposit_date)
	{
		this.release_deposit_date = release_deposit_date;
	}

	public String getReviewer()
	{
		return reviewer;
	}

	public void setReviewer(String reviewer)
	{
		this.reviewer = reviewer;
	}

	public String getReview_date()
	{
		return review_date;
	}

	public void setReview_date(String review_date)
	{
		this.review_date = review_date;
	}

	public String getReview_reason()
	{
		return review_reason;
	}

	public void setReview_reason(String review_reason)
	{
		this.review_reason = review_reason;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	;

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public String getModifyDate()
	{
		return modifyDate;
	}

	public void setModifyDate(String modifyDate)
	{
		this.modifyDate = modifyDate;
	}

	public String getApproveDate()
	{
		return approveDate;
	}

	public void setApproveDate(String approveDate)
	{
		this.approveDate = approveDate;
	}

	public String getExecuteDate()
	{
		return executeDate;
	}

	public void setExecuteDate(String executeDate)
	{
		this.executeDate = executeDate;
	}

	public String getApprover()
	{
		return approver;
	}

	public void setApprover(String approver)
	{
		this.approver = approver;
	}

	public String getGroupCreater()
	{
		return groupCreater;
	}

	public void setGroupCreater(String groupCreater)
	{
		this.groupCreater = groupCreater;
	}

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	public String getCommentReview()
	{
		return commentReview;
	}

	public void setCommentReview(String commentReview)
	{
		this.commentReview = commentReview;
	}

	public String getCreateFromDate()
	{
		return createFromDate;
	}

	public void setCreateFromDate(String createFromDate)
	{
		this.createFromDate = createFromDate;
	}

	public String getCreateToDate()
	{
		return createToDate;
	}

	public void setCreateToDate(String createToDate)
	{
		this.createToDate = createToDate;
	}

	public String getOld_idno_img() {
		return old_idno_img;
	}

	public void setOld_idno_img(String old_idno_img) {
		this.old_idno_img = old_idno_img;
	}

	public String getOld_idno_2_img() {
		return old_idno_2_img;
	}

	public void setOld_idno_2_img(String old_idno_2_img) {
		this.old_idno_2_img = old_idno_2_img;
	}

	public String getCk_img() {
		return ck_img;
	}

	public void setCk_img(String ck_img) {
		this.ck_img = ck_img;
	}

	public String getImgCmgs()
	{
		return imgCmgs;
	}

	public void setImgCmgs(String imgCmgs)
	{
		this.imgCmgs = imgCmgs;
	}

	@Override
	public String toString()
	{
		return "RequestChangeServicesInput [requestId=" + requestId + ", msisdn=" + msisdn + ", customerName=" + customerName + ", serviceCode=" + serviceCode
				+ ", creater=" + creater + ", groupCreater=" + groupCreater + ", mdnsVerify=" + mdnsVerify + ", type=" + type + ", birthdate=" + birthdate
				+ ", address=" + address + ", phone=" + phone + ", idcard=" + idcard + ", placeissue=" + placeissue + ", dateissue=" + dateissue
				+ ", description=" + description + ", productChange=" + productChange + ", img_id=" + img_id + ", file_id=" + file_id + ", img_id_2=" + img_id_2
				+ ", file_id2=" + file_id2 + ", cust_img=" + cust_img + ", bus_permit_no_img1=" + bus_permit_no_img1 + ", contract_img1=" + contract_img1
				+ ", contract_img2=" + contract_img2 + ", authorized_img=" + authorized_img + ", executer=" + executer + ", log_id=" + log_id + ", cmt=" + cmt
				+ ", comm_money=" + comm_money + ", create_stock=" + create_stock + ", modify_stock=" + modify_stock + ", release_deposit_des="
				+ release_deposit_des + ", release_deposit_amount=" + release_deposit_amount + ", release_deposit_date=" + release_deposit_date + ", reviewer="
				+ reviewer + ", review_date=" + review_date + ", review_reason=" + review_reason + ", status=" + status + ", createDate=" + createDate
				+ ", modifyDate=" + modifyDate + ", approveDate=" + approveDate + ", executeDate=" + executeDate + ", approver=" + approver + ", shopId="
				+ shopId + ", createFromDate=" + createFromDate + ", createToDate=" + createToDate + ", imgTye=" + imgTye + ", channel=" + channel
				+ ", commentReview=" + commentReview + "]";
	}

	
}
