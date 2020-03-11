package vn.com.fis.model.epos;

import java.util.List;

public class ObjectFormEnqueryWar {
	private String warrantyNo;
	private String goodsEsn;
	private String status;
	private String serial1;
	private String serial2;
	private String serial3;
	private String serial4;
	private String serial5;
	private String goodsId;
	private String pWarrantyId;
	private String receiveDate;
	private String warrantyId;
	private String effectDate;
	private String goodsCode;
	private String color;
	private String effectDate1;
	private String goodsCode1;
	private String goodsEsn1;
	private String shopName;
	private String address;
	private String name;
	private String importInfor;
	
	
	public String getGoodsCode() {
		return goodsCode;
	}
	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getEffectDate1() {
		return effectDate1;
	}
	public void setEffectDate1(String effectDate1) {
		this.effectDate1 = effectDate1;
	}
	public String getGoodsCode1() {
		return goodsCode1;
	}
	public void setGoodsCode1(String goodsCode1) {
		this.goodsCode1 = goodsCode1;
	}
	public String getGoodsEsn1() {
		return goodsEsn1;
	}
	public void setGoodsEsn1(String goodsEsn1) {
		this.goodsEsn1 = goodsEsn1;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImportInfor() {
		return importInfor;
	}
	public void setImportInfor(String importInfor) {
		this.importInfor = importInfor;
	}
	private List<DataSearchFormEnqueryWar> listGoodsInforMation;
	public ObjectFormEnqueryWar(String warrantyNo, String goodsEsn, String status, String serial1, String serial2,
			String serial3, String serial4, String serial5, String goodsId, String pWarrantyId, String receiveDate,
			String warrantyId, String effectDate, List<DataSearchFormEnqueryWar> listGoodsInforMation,
			List<DataSearchFormEnqueryWar> listWarrantyHistory) {
		super();
		this.warrantyNo = warrantyNo;
		this.goodsEsn = goodsEsn;
		this.status = status;
		this.serial1 = serial1;
		this.serial2 = serial2;
		this.serial3 = serial3;
		this.serial4 = serial4;
		this.serial5 = serial5;
		this.goodsId = goodsId;
		this.pWarrantyId = pWarrantyId;
		this.receiveDate = receiveDate;
		this.warrantyId = warrantyId;
		this.effectDate = effectDate;
		this.listGoodsInforMation = listGoodsInforMation;
		this.listWarrantyHistory = listWarrantyHistory;
	}
	public ObjectFormEnqueryWar() {
		super();
	}
	private List<DataSearchFormEnqueryWar> listWarrantyHistory;
	
	public List<DataSearchFormEnqueryWar> getListGoodsInforMation() {
		return listGoodsInforMation;
	}
	public void setListGoodsInforMation(List<DataSearchFormEnqueryWar> listGoodsInforMation) {
		this.listGoodsInforMation = listGoodsInforMation;
	}
	public List<DataSearchFormEnqueryWar> getListWarrantyHistory() {
		return listWarrantyHistory;
	}
	public void setListWarrantyHistory(List<DataSearchFormEnqueryWar> listWarrantyHistory) {
		this.listWarrantyHistory = listWarrantyHistory;
	}
	public String getEffectDate() {
		return effectDate;
	}
	public void setEffectDate(String effectDate) {
		this.effectDate = effectDate;
	}
	public String getWarrantyNo() {
		return warrantyNo;
	}
	public void setWarrantyNo(String warrantyNo) {
		this.warrantyNo = warrantyNo;
	}
	public String getGoodsEsn() {
		return goodsEsn;
	}
	public void setGoodsEsn(String goodsEsn) {
		this.goodsEsn = goodsEsn;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSerial1() {
		return serial1;
	}
	public void setSerial1(String serial1) {
		this.serial1 = serial1;
	}
	public String getSerial2() {
		return serial2;
	}
	public void setSerial2(String serial2) {
		this.serial2 = serial2;
	}
	public String getSerial3() {
		return serial3;
	}
	public void setSerial3(String serial3) {
		this.serial3 = serial3;
	}
	public String getSerial4() {
		return serial4;
	}
	public void setSerial4(String serial4) {
		this.serial4 = serial4;
	}
	public String getSerial5() {
		return serial5;
	}
	public void setSerial5(String serial5) {
		this.serial5 = serial5;
	}
	public String getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}
	public String getpWarrantyId() {
		return pWarrantyId;
	}
	public void setpWarrantyId(String pWarrantyId) {
		this.pWarrantyId = pWarrantyId;
	}
	public String getReceiveDate() {
		return receiveDate;
	}
	public void setReceiveDate(String receiveDate) {
		this.receiveDate = receiveDate;
	}
	public String getWarrantyId() {
		return warrantyId;
	}
	public void setWarrantyId(String warrantyId) {
		this.warrantyId = warrantyId;
	}
	
}
