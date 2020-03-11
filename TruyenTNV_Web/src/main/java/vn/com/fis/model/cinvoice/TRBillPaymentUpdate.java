package vn.com.fis.model.cinvoice;

import java.util.List;

public class TRBillPaymentUpdate {

	private List<VectorPaymentDetail> vtPaymentDetail;
	private VectorPayment vtPayment;
	private List<VectorInvoice> vtInvoice;


	public List<VectorPaymentDetail> getVtPaymentDetail() {
		return vtPaymentDetail;
	}

	public void setVtPaymentDetail(List<VectorPaymentDetail> vtPaymentDetail) {
		this.vtPaymentDetail = vtPaymentDetail;
	}

	public VectorPayment getVtPayment() {
		return vtPayment;
	}

	public void setVtPayment(VectorPayment vtPayment) {
		this.vtPayment = vtPayment;
	}

	public List<VectorInvoice> getVtInvoice() {
		return vtInvoice;
	}

	public void setVtInvoice(List<VectorInvoice> vtInvoice) {
		this.vtInvoice = vtInvoice;
	}

}
