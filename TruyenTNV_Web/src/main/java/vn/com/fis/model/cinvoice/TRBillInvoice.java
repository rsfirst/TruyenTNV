package vn.com.fis.model.cinvoice;

import vn.com.fis.cinvoice.bean.HoaDonBean;
import vn.com.fis.cinvoice.bean.HoaDonCTBean;

import java.io.Serializable;
import java.util.List;

public class TRBillInvoice implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String billinvoiceId;
	public String getBillinvoiceId() {
		return billinvoiceId;
	}
	public void setBillinvoiceId(String billinvoiceId) {
		this.billinvoiceId = billinvoiceId;
	}
	private String shopCode;
	private HoaDonBean hoadon;
	private List<HoaDonCTBean> hoadonctbean;
	public String getShopCode() {
		return shopCode;
	}
	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}
	public HoaDonBean getHoadon() {
		return hoadon;
	}
	public void setHoadon(HoaDonBean hoadon) {
		this.hoadon = hoadon;
	}
	public List<HoaDonCTBean> getHoadonctbean() {
		return hoadonctbean;
	}
	public void setHoadonctbean(List<HoaDonCTBean> hoadonctbean) {
		this.hoadonctbean = hoadonctbean;
	}
	
}
