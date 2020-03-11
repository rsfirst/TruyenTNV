package vn.com.fis.model.css;

import java.util.List;

public class MGMPromotionModel {
	private List<Object> mvtPromotionSerial;
	private String mstrTransactionID;
	private String shopId;
	private String staffId;

	public List<Object> getMvtPromotionSerial() {
		return mvtPromotionSerial;
	}

	public void setMvtPromotionSerial(List<Object> mvtPromotionSerial) {
		this.mvtPromotionSerial = mvtPromotionSerial;
	}

	public String getMstrTransactionID() {
		return mstrTransactionID;
	}

	public void setMstrTransactionID(String mstrTransactionID) {
		this.mstrTransactionID = mstrTransactionID;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getStaffId() {
		return staffId;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

}
