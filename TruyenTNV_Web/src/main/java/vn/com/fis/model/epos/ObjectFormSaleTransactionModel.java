package vn.com.fis.model.epos;

import java.util.List;

public class ObjectFormSaleTransactionModel {
	private String strPriceType;
	private List<InputSerialModel> lstSoldSerial;
	private List<SerialPromotionModel> lstSerialPromotion;
	private String mintHandsetCount;
	private String type;
	private String message;
	private String indexEdit;
	
	
	
	
	
	public String getIndexEdit() {
		return indexEdit;
	}
	public void setIndexEdit(String indexEdit) {
		this.indexEdit = indexEdit;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getMintHandsetCount() {
		return mintHandsetCount;
	}
	public void setMintHandsetCount(String mintHandsetCount) {
		this.mintHandsetCount = mintHandsetCount;
	}
	public String getStrPriceType() {
		return strPriceType;
	}
	public void setStrPriceType(String strPriceType) {
		this.strPriceType = strPriceType;
	}
	public List<InputSerialModel> getLstSoldSerial() {
		return lstSoldSerial;
	}
	public void setLstSoldSerial(List<InputSerialModel> lstSoldSerial) {
		this.lstSoldSerial = lstSoldSerial;
	}
	public List<SerialPromotionModel> getLstSerialPromotion() {
		return lstSerialPromotion;
	}
	public void setLstSerialPromotion(List<SerialPromotionModel> lstSerialPromotion) {
		this.lstSerialPromotion = lstSerialPromotion;
	}
}
