package vn.com.fis.model.css;

import java.util.List;

public class InputPostpaid {
	private String staffId;
	private String shopId;
	private List<PostpaidPersonObject> lstPerson;
	private String newSerial;
	private String strComment;
	private PostpaidPersonObject currCust;

	/**
	 * @return the newSerial
	 */
	public String getNewSerial() {
		return newSerial;
	}

	/**
	 * @param newSerial
	 *            the newSerial to set
	 */
	public void setNewSerial(String newSerial) {
		this.newSerial = newSerial;
	}

	/**
	 * @return the strComment
	 */
	public String getStrComment() {
		return strComment;
	}

	/**
	 * @param strComment
	 *            the strComment to set
	 */
	public void setStrComment(String strComment) {
		this.strComment = strComment;
	}

	/**
	 * @return the currCust
	 */
	public PostpaidPersonObject getCurrCust() {
		return currCust;
	}

	/**
	 * @param currCust
	 *            the currCust to set
	 */
	public void setCurrCust(PostpaidPersonObject currCust) {
		this.currCust = currCust;
	}

	/**
	 * @return the staffId
	 */
	public String getStaffId() {
		return staffId;
	}

	/**
	 * @param staffId
	 *            the staffId to set
	 */
	public void setStaffId(String staffId) {
		this.staffId = staffId;
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
	 * @return the lstPerson
	 */
	public List<PostpaidPersonObject> getLstPerson() {
		return lstPerson;
	}

	/**
	 * @param lstPerson
	 *            the lstPerson to set
	 */
	public void setLstPerson(List<PostpaidPersonObject> lstPerson) {
		this.lstPerson = lstPerson;
	}

}
