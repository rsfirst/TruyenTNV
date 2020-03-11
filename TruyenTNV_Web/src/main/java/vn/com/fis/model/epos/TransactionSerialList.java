package vn.com.fis.model.epos;

import java.util.List;

public class TransactionSerialList implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 10239092617346784L;
	private String stockId;
	private String goodsId;
	private String stateId;
	private String fromSerial;
	private String toSerial;
	private String quantity;
	private String partnerId;
	private String internalStockId;
	private String warrantyNo;
	private String warrantyId;
	private String typeSerialSearch;
	private String isCheckQtyIssue;
	private String status;
	private String getFromStockTransId;
	private String warrantySerial1;
	private String warrantySerial2;
	private String warrantySerial3;
	private String warrantySerial4;
	private String warrantySerial5;
	private String warrantyReadOnly;
	private String strQuatity;
	private String shopId;
	private String goodsEsn;
	private String createDateTime;
	private String expiredDateTime;
	private String goodsCode;
	private String address;
	private String color;
	private String createDate;
	private String warrGoodsId;
	private String isError;
	private List<TransactionSerialList> lstTransSerial;
	private String serialDesTroy;
	private String transSerialId;
	private String importDateTime;
	private String str1;
	private String transId;

	private String staffId;
	/**
	 * @return the transId
	 */
	public String getTransId() {
		return transId;
	}

	/**
	 * @param transId
	 *            the transId to set
	 */
	public void setTransId(String transId) {
		this.transId = transId;
	}

	/**
	 * @return the importDateTime
	 */
	public String getImportDateTime() {
		return importDateTime;
	}

	/**
	 * @param importDateTime
	 *            the importDateTime to set
	 */
	public void setImportDateTime(String importDateTime) {
		this.importDateTime = importDateTime;
	}

	/**
	 * @return the str1
	 */
	public String getStr1() {
		return str1;
	}

	/**
	 * @param str1
	 *            the str1 to set
	 */
	public void setStr1(String str1) {
		this.str1 = str1;
	}

	/**
	 * @return the serialDesTroy
	 */
	public String getSerialDesTroy() {
		return serialDesTroy;
	}

	/**
	 * @param serialDesTroy
	 *            the serialDesTroy to set
	 */
	public void setSerialDesTroy(String serialDesTroy) {
		this.serialDesTroy = serialDesTroy;
	}

	/**
	 * @return the transSerialId
	 */
	public String getTransSerialId() {
		return transSerialId;
	}

	/**
	 * @param transSerialId
	 *            the transSerialId to set
	 */
	public void setTransSerialId(String transSerialId) {
		this.transSerialId = transSerialId;
	}

	public List<TransactionSerialList> getLstTransSerial() {
		return lstTransSerial;
	}

	public void setLstTransSerial(List<TransactionSerialList> lstTransSerial) {
		this.lstTransSerial = lstTransSerial;
	}

	/**
	 * @return the isError
	 */
	public String getIsError() {
		return isError;
	}

	/**
	 * @param isError
	 *            the isError to set
	 */
	public void setIsError(String isError) {
		this.isError = isError;
	}

	/**
	 * @return the warrGoodsId
	 */
	public String getWarrGoodsId() {
		return warrGoodsId;
	}

	/**
	 * @param warrGoodsId
	 *            the warrGoodsId to set
	 */
	public void setWarrGoodsId(String warrGoodsId) {
		this.warrGoodsId = warrGoodsId;
	}

	/**
	 * @return the createDateTime
	 */
	public String getCreateDateTime() {
		return createDateTime;
	}

	/**
	 * @param createDateTime
	 *            the createDateTime to set
	 */
	public void setCreateDateTime(String createDateTime) {
		this.createDateTime = createDateTime;
	}

	/**
	 * @return the expiredDateTime
	 */
	public String getExpiredDateTime() {
		return expiredDateTime;
	}

	/**
	 * @param expiredDateTime
	 *            the expiredDateTime to set
	 */
	public void setExpiredDateTime(String expiredDateTime) {
		this.expiredDateTime = expiredDateTime;
	}

	/**
	 * @return the goodsCode
	 */
	public String getGoodsCode() {
		return goodsCode;
	}

	/**
	 * @param goodsCode
	 *            the goodsCode to set
	 */
	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address
	 *            the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

	/**
	 * @param color
	 *            the color to set
	 */
	public void setColor(String color) {
		this.color = color;
	}

	/**
	 * @return the goodsEsn
	 */
	public String getGoodsEsn() {
		return goodsEsn;
	}

	/**
	 * @param goodsEsn
	 *            the goodsEsn to set
	 */
	public void setGoodsEsn(String goodsEsn) {
		this.goodsEsn = goodsEsn;
	}

	/**
	 * @return the shopId
	 */
	public String getShopId() {
		return shopId;
	}

	/**
	 * @param shopId
	 *            the shopId to set
	 */
	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	/**
	 * @return the strQuatity
	 */
	public String getStrQuatity() {
		return strQuatity;
	}

	/**
	 * @param strQuatity
	 *            the strQuatity to set
	 */
	public void setStrQuatity(String strQuatity) {
		this.strQuatity = strQuatity;
	}

	/**
	 * @return the warrantySerial1
	 */
	public String getWarrantySerial1() {
		return warrantySerial1;
	}

	/**
	 * @param warrantySerial1
	 *            the warrantySerial1 to set
	 */
	public void setWarrantySerial1(String warrantySerial1) {
		this.warrantySerial1 = warrantySerial1;
	}

	/**
	 * @return the warrantySerial2
	 */
	public String getWarrantySerial2() {
		return warrantySerial2;
	}

	/**
	 * @param warrantySerial2
	 *            the warrantySerial2 to set
	 */
	public void setWarrantySerial2(String warrantySerial2) {
		this.warrantySerial2 = warrantySerial2;
	}

	/**
	 * @return the warrantySerial3
	 */
	public String getWarrantySerial3() {
		return warrantySerial3;
	}

	/**
	 * @param warrantySerial3
	 *            the warrantySerial3 to set
	 */
	public void setWarrantySerial3(String warrantySerial3) {
		this.warrantySerial3 = warrantySerial3;
	}

	/**
	 * @return the warrantySerial4
	 */
	public String getWarrantySerial4() {
		return warrantySerial4;
	}

	/**
	 * @param warrantySerial4
	 *            the warrantySerial4 to set
	 */
	public void setWarrantySerial4(String warrantySerial4) {
		this.warrantySerial4 = warrantySerial4;
	}

	/**
	 * @return the warrantySerial5
	 */
	public String getWarrantySerial5() {
		return warrantySerial5;
	}

	/**
	 * @param warrantySerial5
	 *            the warrantySerial5 to set
	 */
	public void setWarrantySerial5(String warrantySerial5) {
		this.warrantySerial5 = warrantySerial5;
	}

	/**
	 * @return the warrantyReadOnly
	 */
	public String getWarrantyReadOnly() {
		return warrantyReadOnly;
	}

	/**
	 * @param warrantyReadOnly
	 *            the warrantyReadOnly to set
	 */
	public void setWarrantyReadOnly(String warrantyReadOnly) {
		this.warrantyReadOnly = warrantyReadOnly;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/**
	 * @return the getFromStockTransId
	 */
	public String getGetFromStockTransId() {
		return getFromStockTransId;
	}

	/**
	 * @param getFromStockTransId
	 *            the getFromStockTransId to set
	 */
	public void setGetFromStockTransId(String getFromStockTransId) {
		this.getFromStockTransId = getFromStockTransId;
	}

	/**
	 * @return the stockId
	 */
	public String getStockId() {
		return stockId;
	}

	/**
	 * @param stockId
	 *            the stockId to set
	 */
	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	/**
	 * @return the goodsId
	 */
	public String getGoodsId() {
		return goodsId;
	}

	/**
	 * @param goodsId
	 *            the goodsId to set
	 */
	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}

	/**
	 * @return the stateId
	 */
	public String getStateId() {
		return stateId;
	}

	/**
	 * @param stateId
	 *            the stateId to set
	 */
	public void setStateId(String stateId) {
		this.stateId = stateId;
	}

	/**
	 * @return the fromSerial
	 */
	public String getFromSerial() {
		return fromSerial;
	}

	/**
	 * @param fromSerial
	 *            the fromSerial to set
	 */
	public void setFromSerial(String fromSerial) {
		this.fromSerial = fromSerial;
	}

	/**
	 * @return the toSerial
	 */
	public String getToSerial() {
		return toSerial;
	}

	/**
	 * @param toSerial
	 *            the toSerial to set
	 */
	public void setToSerial(String toSerial) {
		this.toSerial = toSerial;
	}

	/**
	 * @return the quantity
	 */
	public String getQuantity() {
		return quantity;
	}

	/**
	 * @param quantity
	 *            the quantity to set
	 */
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	/**
	 * @return the partnerId
	 */
	public String getPartnerId() {
		return partnerId;
	}

	/**
	 * @param partnerId
	 *            the partnerId to set
	 */
	public void setPartnerId(String partnerId) {
		this.partnerId = partnerId;
	}

	/**
	 * @return the internalStockId
	 */
	public String getInternalStockId() {
		return internalStockId;
	}

	/**
	 * @param internalStockId
	 *            the internalStockId to set
	 */
	public void setInternalStockId(String internalStockId) {
		this.internalStockId = internalStockId;
	}

	/**
	 * @return the warrantyNo
	 */
	public String getWarrantyNo() {
		return warrantyNo;
	}

	/**
	 * @param warrantyNo
	 *            the warrantyNo to set
	 */
	public void setWarrantyNo(String warrantyNo) {
		this.warrantyNo = warrantyNo;
	}

	/**
	 * @return the warrantyId
	 */
	public String getWarrantyId() {
		return warrantyId;
	}

	/**
	 * @param warrantyId
	 *            the warrantyId to set
	 */
	public void setWarrantyId(String warrantyId) {
		this.warrantyId = warrantyId;
	}

	/**
	 * @return the isCheckQtyIssue
	 */
	public String getIsCheckQtyIssue() {
		return isCheckQtyIssue;
	}

	/**
	 * @param isCheckQtyIssue
	 *            the isCheckQtyIssue to set
	 */
	public void setIsCheckQtyIssue(String isCheckQtyIssue) {
		this.isCheckQtyIssue = isCheckQtyIssue;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the typeSerialSearch
	 */
	public String getTypeSerialSearch() {
		return typeSerialSearch;
	}

	/**
	 * @param typeSerialSearch
	 *            the typeSerialSearch to set
	 */
	public void setTypeSerialSearch(String typeSerialSearch) {
		this.typeSerialSearch = typeSerialSearch;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getStaffId()
	{
		return staffId;
	}

	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

}