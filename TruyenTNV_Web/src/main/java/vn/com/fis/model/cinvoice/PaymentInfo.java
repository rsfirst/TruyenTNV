package vn.com.fis.model.cinvoice;

import java.io.Serializable;
import java.util.List;

public class PaymentInfo implements Serializable {

	private static final long serialVersionUID = -6759939514491881190L;
	private String shopCode;
	private String iAccountNo;
	private VectorPayment vtcPayment;
	private VectorPaymentInsert vtcPaymentInsert;
	private List<VectorPaymentDetail> lstVctPaymentDetail;
	private List<VectorInvoice> lstVctInvoice;
	private DepositTrans depositTrans;
	private String shopId;
	private String cusName;
	private String checkInvoice;
	private String cusType;
	private String ipClient;
	private String staffId;
	private String staffCode;

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getCusName() {
		return cusName;
	}

	public void setCusName(String cusName) {
		this.cusName = cusName;
	}

	public PaymentInfo() {

	}

	public DepositTrans getDepositTrans() {
		return depositTrans;
	}

	public void setDepositTrans(DepositTrans depositTrans) {
		this.depositTrans = depositTrans;
	}

	public String getiAccountNo() {
		return iAccountNo;
	}

	public void setiAccountNo(String iAccountNo) {
		this.iAccountNo = iAccountNo;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public VectorPayment getVtcPayment() {
		return vtcPayment;
	}

	public void setVtcPayment(VectorPayment vtcPayment) {
		this.vtcPayment = vtcPayment;
	}

	public VectorPaymentInsert getVtcPaymentInsert() {
		return vtcPaymentInsert;
	}

	public void setVtcPaymentInsert(VectorPaymentInsert vtcPaymentInsert) {
		this.vtcPaymentInsert = vtcPaymentInsert;
	}

	/*
	 * public VectorPaymentDetail getVctPaymentDetail() { return
	 * vctPaymentDetail; } public void setVctPaymentDetail(VectorPaymentDetail
	 * vctPaymentDetail) { this.vctPaymentDetail = vctPaymentDetail; } public
	 * VectorInvoice getVctInvoice() { return vctInvoice; } public void
	 * setVctInvoice(VectorInvoice vctInvoice) { this.vctInvoice = vctInvoice; }
	 */
	public List<VectorPaymentDetail> getLstVctPaymentDetail() {
		return lstVctPaymentDetail;
	}

	public void setLstVctPaymentDetail(List<VectorPaymentDetail> lstVctPaymentDetail) {
		this.lstVctPaymentDetail = lstVctPaymentDetail;
	}

	public List<VectorInvoice> getLstVctInvoice() {
		return lstVctInvoice;
	}

	public void setLstVctInvoice(List<VectorInvoice> lstVctInvoice) {
		this.lstVctInvoice = lstVctInvoice;
	}

	public String getCheckInvoice() {
		return checkInvoice;
	}

	public void setCheckInvoice(String checkInvoice) {
		this.checkInvoice = checkInvoice;
	}

	public String getCusType() {
		return cusType;
	}

	public void setCusType(String cusType) {
		this.cusType = cusType;
	}

	public String getIpClient() {
		return ipClient;
	}

	public void setIpClient(String ipClient) {
		this.ipClient = ipClient;
	}

	public String getStaffId() {
		return staffId;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

	public String getStaffCode() {
		return staffCode;
	}

	public void setStaffCode(String staffCode) {
		this.staffCode = staffCode;
	}

}
