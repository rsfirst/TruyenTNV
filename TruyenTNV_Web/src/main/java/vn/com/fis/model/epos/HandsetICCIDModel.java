package vn.com.fis.model.epos;

import java.util.List;

public class HandsetICCIDModel {
	private String strPriceType;
	private List<SerialPromotionModel> lstPromotionSerialDlg;
	private List<String> lstPromotionSerial;
	public String getStrPriceType() {
		return strPriceType;
	}
	public void setStrPriceType(String strPriceType) {
		this.strPriceType = strPriceType;
	}
	public List<SerialPromotionModel> getLstPromotionSerialDlg() {
		return lstPromotionSerialDlg;
	}
	public void setLstPromotionSerialDlg(List<SerialPromotionModel> lstPromotionSerialDlg) {
		this.lstPromotionSerialDlg = lstPromotionSerialDlg;
	}
	public List<String> getLstPromotionSerial() {
		return lstPromotionSerial;
	}
	public void setLstPromotionSerial(List<String> lstPromotionSerial) {
		this.lstPromotionSerial = lstPromotionSerial;
	}
	
	
}
