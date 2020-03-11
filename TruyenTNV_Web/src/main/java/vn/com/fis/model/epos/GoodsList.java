package vn.com.fis.model.epos;

import java.util.List;

public class GoodsList implements java.io.Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 8340690626331560701L;
	private String goodsId;
	private String goodsCode;
	private String checkQuantity;
	private String goodsGroupId;
	private String goodsType;
	private String checkSerial;
	private String name;
	private String unit;
	private String status;
	private String notes;
	private String unitName;
	private String checkContran;
	private String checkWarranty;
	private String resourceCode;
	private String goodsGroupName;
	private List<TransactionSerialList> lstTransactionSerial;
	private List<TransactionSerialList> lstTransactionSerialDenied;
	private String stockTransId;
	private String stateId;
	private String quantityIssue;
	private String quantityEffect;
	private String POS_SERIAL;
	private String POS_BLOCK;
	private String type;
	private String POS_SERIAL_IS_DENIED;
	private String INTERNAL_STOCK_ID;
	private String beginQuantity;
	private String totalQuantity;
	private String quantityRemain;
	private String strPriceType;
	private String groupAttach;
	private String quantityAffect;
	private String price;
	private String priceId;
	private String promotionId;
	private String promotionTotal;
	private String str1;
	private String str2;
	private String quantity;
	private GoodsSaleTransaction goodSale;
	private String maxQuantity;
	
	/**
	 * @return the str2
	 */
	public String getStr2() {
		return str2;
	}

	/**
	 * @param str2 the str2 to set
	 */
	public void setStr2(String str2) {
		this.str2 = str2;
	}

	/**
	 * @return the maxQuantity
	 */
	public String getMaxQuantity() {
		return maxQuantity;
	}

	/**
	 * @param maxQuantity the maxQuantity to set
	 */
	public void setMaxQuantity(String maxQuantity) {
		this.maxQuantity = maxQuantity;
	}

	/**
	 * @return the goodSale
	 */
	public GoodsSaleTransaction getGoodSale() {
		return goodSale;
	}

	/**
	 * @param goodSale the goodSale to set
	 */
	public void setGoodSale(GoodsSaleTransaction goodSale) {
		this.goodSale = goodSale;
	}

	/**
	 * @return the quantity
	 */
	public String getQuantity() {
		return quantity;
	}

	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	/**
	 * @return the strPriceType
	 */
	public String getStrPriceType() {
		return strPriceType;
	}

	/**
	 * @param strPriceType the strPriceType to set
	 */
	public void setStrPriceType(String strPriceType) {
		this.strPriceType = strPriceType;
	}

	/**
	 * @return the groupAttach
	 */
	public String getGroupAttach() {
		return groupAttach;
	}

	/**
	 * @param groupAttach the groupAttach to set
	 */
	public void setGroupAttach(String groupAttach) {
		this.groupAttach = groupAttach;
	}

	/**
	 * @return the quantityAffect
	 */
	public String getQuantityAffect() {
		return quantityAffect;
	}

	/**
	 * @param quantityAffect the quantityAffect to set
	 */
	public void setQuantityAffect(String quantityAffect) {
		this.quantityAffect = quantityAffect;
	}

	/**
	 * @return the price
	 */
	public String getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(String price) {
		this.price = price;
	}

	/**
	 * @return the priceId
	 */
	public String getPriceId() {
		return priceId;
	}

	/**
	 * @param priceId the priceId to set
	 */
	public void setPriceId(String priceId) {
		this.priceId = priceId;
	}

	/**
	 * @return the promotionId
	 */
	public String getPromotionId() {
		return promotionId;
	}

	/**
	 * @param promotionId the promotionId to set
	 */
	public void setPromotionId(String promotionId) {
		this.promotionId = promotionId;
	}

	/**
	 * @return the promotionTotal
	 */
	public String getPromotionTotal() {
		return promotionTotal;
	}

	/**
	 * @param promotionTotal the promotionTotal to set
	 */
	public void setPromotionTotal(String promotionTotal) {
		this.promotionTotal = promotionTotal;
	}

	/**
	 * @return the str1
	 */
	public String getStr1() {
		return str1;
	}

	/**
	 * @param str1 the str1 to set
	 */
	public void setStr1(String str1) {
		this.str1 = str1;
	}

	/**
	 * @return the goodsId
	 */
	public String getGoodsId() {
		return goodsId;
	}

	/**
	 * @param goodsId the goodsId to set
	 */
	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}

	/**
	 * @return the goodsCode
	 */
	public String getGoodsCode() {
		return goodsCode;
	}

	/**
	 * @param goodsCode the goodsCode to set
	 */
	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}

	/**
	 * @return the checkQuantity
	 */
	public String getCheckQuantity() {
		return checkQuantity;
	}

	/**
	 * @param checkQuantity the checkQuantity to set
	 */
	public void setCheckQuantity(String checkQuantity) {
		this.checkQuantity = checkQuantity;
	}

	/**
	 * @return the goodsGroupId
	 */
	public String getGoodsGroupId() {
		return goodsGroupId;
	}

	/**
	 * @param goodsGroupId the goodsGroupId to set
	 */
	public void setGoodsGroupId(String goodsGroupId) {
		this.goodsGroupId = goodsGroupId;
	}

	/**
	 * @return the goodsType
	 */
	public String getGoodsType() {
		return goodsType;
	}

	/**
	 * @param goodsType the goodsType to set
	 */
	public void setGoodsType(String goodsType) {
		this.goodsType = goodsType;
	}

	/**
	 * @return the checkSerial
	 */
	public String getCheckSerial() {
		return checkSerial;
	}

	/**
	 * @param checkSerial the checkSerial to set
	 */
	public void setCheckSerial(String checkSerial) {
		this.checkSerial = checkSerial;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the unit
	 */
	public String getUnit() {
		return unit;
	}

	/**
	 * @param unit the unit to set
	 */
	public void setUnit(String unit) {
		this.unit = unit;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the notes
	 */
	public String getNotes() {
		return notes;
	}

	/**
	 * @param notes the notes to set
	 */
	public void setNotes(String notes) {
		this.notes = notes;
	}

	/**
	 * @return the unitName
	 */
	public String getUnitName() {
		return unitName;
	}

	/**
	 * @param unitName the unitName to set
	 */
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	/**
	 * @return the checkContran
	 */
	public String getCheckContran() {
		return checkContran;
	}

	/**
	 * @param checkContran the checkContran to set
	 */
	public void setCheckContran(String checkContran) {
		this.checkContran = checkContran;
	}

	/**
	 * @return the checkWarranty
	 */
	public String getCheckWarranty() {
		return checkWarranty;
	}

	/**
	 * @param checkWarranty the checkWarranty to set
	 */
	public void setCheckWarranty(String checkWarranty) {
		this.checkWarranty = checkWarranty;
	}

	/**
	 * @return the resourceCode
	 */
	public String getResourceCode() {
		return resourceCode;
	}

	/**
	 * @param resourceCode the resourceCode to set
	 */
	public void setResourceCode(String resourceCode) {
		this.resourceCode = resourceCode;
	}

	/**
	 * @return the goodsGroupName
	 */
	public String getGoodsGroupName() {
		return goodsGroupName;
	}

	/**
	 * @param goodsGroupName the goodsGroupName to set
	 */
	public void setGoodsGroupName(String goodsGroupName) {
		this.goodsGroupName = goodsGroupName;
	}

	/**
	 * @return the lstTransactionSerial
	 */
	public List<TransactionSerialList> getLstTransactionSerial() {
		return lstTransactionSerial;
	}

	/**
	 * @param lstTransactionSerial the lstTransactionSerial to set
	 */
	public void setLstTransactionSerial(List<TransactionSerialList> lstTransactionSerial) {
		this.lstTransactionSerial = lstTransactionSerial;
	}

	/**
	 * @return the stockTransId
	 */
	public String getStockTransId() {
		return stockTransId;
	}

	/**
	 * @param stockTransId the stockTransId to set
	 */
	public void setStockTransId(String stockTransId) {
		this.stockTransId = stockTransId;
	}

	/**
	 * @return the stateId
	 */
	public String getStateId() {
		return stateId;
	}

	/**
	 * @param stateId the stateId to set
	 */
	public void setStateId(String stateId) {
		this.stateId = stateId;
	}

	/**
	 * @return the quantityIssue
	 */
	public String getQuantityIssue() {
		return quantityIssue;
	}

	/**
	 * @param quantityIssue the quantityIssue to set
	 */
	public void setQuantityIssue(String quantityIssue) {
		this.quantityIssue = quantityIssue;
	}

	/**
	 * @return the quantityEffect
	 */
	public String getQuantityEffect() {
		return quantityEffect;
	}

	/**
	 * @param quantityEffect the quantityEffect to set
	 */
	public void setQuantityEffect(String quantityEffect) {
		this.quantityEffect = quantityEffect;
	}

	/**
	 * @return the pOS_SERIAL
	 */
	public String getPOS_SERIAL() {
		return POS_SERIAL;
	}

	/**
	 * @param pOS_SERIAL the pOS_SERIAL to set
	 */
	public void setPOS_SERIAL(String pOS_SERIAL) {
		POS_SERIAL = pOS_SERIAL;
	}

	/**
	 * @return the pOS_BLOCK
	 */
	public String getPOS_BLOCK() {
		return POS_BLOCK;
	}

	/**
	 * @param pOS_BLOCK the pOS_BLOCK to set
	 */
	public void setPOS_BLOCK(String pOS_BLOCK) {
		POS_BLOCK = pOS_BLOCK;
	}

	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return the pOS_SERIAL_IS_DENIED
	 */
	public String getPOS_SERIAL_IS_DENIED() {
		return POS_SERIAL_IS_DENIED;
	}

	/**
	 * @param pOS_SERIAL_IS_DENIED the pOS_SERIAL_IS_DENIED to set
	 */
	public void setPOS_SERIAL_IS_DENIED(String pOS_SERIAL_IS_DENIED) {
		POS_SERIAL_IS_DENIED = pOS_SERIAL_IS_DENIED;
	}

	/**
	 * @return the iNTERNAL_STOCK_ID
	 */
	public String getINTERNAL_STOCK_ID() {
		return INTERNAL_STOCK_ID;
	}

	/**
	 * @param iNTERNAL_STOCK_ID the iNTERNAL_STOCK_ID to set
	 */
	public void setINTERNAL_STOCK_ID(String iNTERNAL_STOCK_ID) {
		INTERNAL_STOCK_ID = iNTERNAL_STOCK_ID;
	}

	/**
	 * @return the beginQuantity
	 */
	public String getBeginQuantity() {
		return beginQuantity;
	}

	/**
	 * @param beginQuantity the beginQuantity to set
	 */
	public void setBeginQuantity(String beginQuantity) {
		this.beginQuantity = beginQuantity;
	}

	/**
	 * @return the totalQuantity
	 */
	public String getTotalQuantity() {
		return totalQuantity;
	}

	/**
	 * @param totalQuantity the totalQuantity to set
	 */
	public void setTotalQuantity(String totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	/**
	 * @return the lstTransactionSerialDenied
	 */
	public List<TransactionSerialList> getLstTransactionSerialDenied() {
		return lstTransactionSerialDenied;
	}

	/**
	 * @param lstTransactionSerialDenied the lstTransactionSerialDenied to set
	 */
	public void setLstTransactionSerialDenied(List<TransactionSerialList> lstTransactionSerialDenied) {
		this.lstTransactionSerialDenied = lstTransactionSerialDenied;
	}

	public String getQuantityRemain() {
		return quantityRemain;
	}

	public void setQuantityRemain(String quantityRemain) {
		this.quantityRemain = quantityRemain;
	}

}
