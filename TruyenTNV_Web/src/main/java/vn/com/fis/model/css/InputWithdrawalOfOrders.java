package vn.com.fis.model.css;

import java.util.List;

public class InputWithdrawalOfOrders {
	private String shopId;
	private String parentStaffId;
	private String parentStaffName;
	private String receiptNo;
	private String notes;
	private String deliveryStockId;
	private String internalStockId;
	private String orderId;
	private List<GoodDetailOutput> listGoodDetail;

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
	 * @return the parentStaffId
	 */
	public String getParentStaffId() {
		return parentStaffId;
	}

	/**
	 * @param parentStaffId
	 *            the parentStaffId to set
	 */
	public void setParentStaffId(String parentStaffId) {
		this.parentStaffId = parentStaffId;
	}

	/**
	 * @return the parentStaffName
	 */
	public String getParentStaffName() {
		return parentStaffName;
	}

	/**
	 * @param parentStaffName
	 *            the parentStaffName to set
	 */
	public void setParentStaffName(String parentStaffName) {
		this.parentStaffName = parentStaffName;
	}

	/**
	 * @return the receiptNo
	 */
	public String getReceiptNo() {
		return receiptNo;
	}

	/**
	 * @param receiptNo
	 *            the receiptNo to set
	 */
	public void setReceiptNo(String receiptNo) {
		this.receiptNo = receiptNo;
	}

	/**
	 * @return the notes
	 */
	public String getNotes() {
		return notes;
	}

	/**
	 * @param notes
	 *            the notes to set
	 */
	public void setNotes(String notes) {
		this.notes = notes;
	}

	/**
	 * @return the deliveryStockId
	 */
	public String getDeliveryStockId() {
		return deliveryStockId;
	}

	/**
	 * @param deliveryStockId
	 *            the deliveryStockId to set
	 */
	public void setDeliveryStockId(String deliveryStockId) {
		this.deliveryStockId = deliveryStockId;
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
	 * @return the orderId
	 */
	public String getOrderId() {
		return orderId;
	}

	/**
	 * @param orderId
	 *            the orderId to set
	 */
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	/**
	 * @return the listGoodDetail
	 */
	public List<GoodDetailOutput> getListGoodDetail() {
		return listGoodDetail;
	}

	/**
	 * @param listGoodDetail
	 *            the listGoodDetail to set
	 */
	public void setListGoodDetail(List<GoodDetailOutput> listGoodDetail) {
		this.listGoodDetail = listGoodDetail;
	}

}
