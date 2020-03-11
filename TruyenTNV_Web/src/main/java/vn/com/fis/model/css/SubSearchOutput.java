package vn.com.fis.model.css;

import java.io.Serializable;
import java.util.List;

public class SubSearchOutput implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String customerId;
	private String subscriberId;
	private String currentState;
	private String idCard;
	private String isdnType;
	private String simNumber;
	private String shopId;
	private String staffId;

	private String msisdn;

	private String msisdnCall;

	private List<String> listMsisdnCall;

	private boolean statusNumber;
	private String customerType;

	public boolean getStatusNumber() {
		return statusNumber;
	}

	public void setStatusNumber(boolean statusNumber) {
		this.statusNumber = statusNumber;
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

	public String getMsisdnCall() {
		return msisdnCall;
	}

	public void setMsisdnCall(String msisdnCall) {
		this.msisdnCall = msisdnCall;
	}

	public String getSimNumber() {
		return simNumber;
	}

	public void setSimNumber(String simNumber) {
		this.simNumber = simNumber;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getSubscriberId() {
		return subscriberId;
	}

	public void setSubscriberId(String subscriberId) {
		this.subscriberId = subscriberId;
	}

	public String getCurrentState() {
		return currentState;
	}

	public void setCurrentState(String currentState) {
		this.currentState = currentState;
	}

	public String getIdCard() {
		return idCard;
	}

	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}

	public String getIsdnType() {
		return isdnType;
	}

	public void setIsdnType(String isdnType) {
		this.isdnType = isdnType;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public List<String> getListMsisdnCall() {
		return listMsisdnCall;
	}

	public void setListMsisdnCall(List<String> listMsisdnCall) {
		this.listMsisdnCall = listMsisdnCall;
	}

	/**
	 * @return the customerType
	 */
	public String getCustomerType() {
		return customerType;
	}

	/**
	 * @param customerType
	 *            the customerType to set
	 */
	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}

	@Override
	public String toString() {
		return "SubSearchOutput [customerId=" + customerId + ", subscriberId=" + subscriberId + ", currentState="
				+ currentState + ", idCard=" + idCard + ", isdnType=" + isdnType + ", simNumber=" + simNumber
				+ ", shopId=" + shopId + ", staffId=" + staffId + ", msisdn=" + msisdn + ", msisdnCall=" + msisdnCall
				+ ", listMsisdnCall=" + listMsisdnCall + "]";
	}

}
