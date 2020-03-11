package vn.com.fis.model.css;

import java.util.List;

/**
 * The Class CustomerResponse.
 */
public class CusHistOutput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 630409540159538786L;

	/** The rownum. */
	private String rownum;

	/** The action name. */
	private String action_name;

	/** The staff. */
	private String staff;

	/** The shop. */
	private String shop;

	/** The datetime. */
	private String datetime;

	/** The description. */
	private String description;

	/** The diff. */
	private List<DifferentObject> diff;

	/**
	 * Gets the rownum.
	 *
	 * @return the rownum
	 */
	public String getRownum()
	{
		return rownum;
	}

	/**
	 * Sets the rownum.
	 *
	 * @param rownum
	 *            the new rownum
	 */
	public void setRownum(String rownum)
	{
		this.rownum = rownum;
	}

	/**
	 * Gets the action name.
	 *
	 * @return the action name
	 */
	public String getAction_name()
	{
		return action_name;
	}

	/**
	 * Sets the action name.
	 *
	 * @param action_name
	 *            the new action name
	 */
	public void setAction_name(String action_name)
	{
		this.action_name = action_name;
	}

	/**
	 * Gets the staff.
	 *
	 * @return the staff
	 */
	public String getStaff()
	{
		return staff;
	}

	/**
	 * Sets the staff.
	 *
	 * @param staff
	 *            the new staff
	 */
	public void setStaff(String staff)
	{
		this.staff = staff;
	}

	/**
	 * Gets the shop.
	 *
	 * @return the shop
	 */
	public String getShop()
	{
		return shop;
	}

	/**
	 * Sets the shop.
	 *
	 * @param shop
	 *            the new shop
	 */
	public void setShop(String shop)
	{
		this.shop = shop;
	}

	/**
	 * Gets the datetime.
	 *
	 * @return the datetime
	 */
	public String getDatetime()
	{
		return datetime;
	}

	/**
	 * Sets the datetime.
	 *
	 * @param datetime
	 *            the new datetime
	 */
	public void setDatetime(String datetime)
	{
		this.datetime = datetime;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription()
	{
		return description;
	}

	/**
	 * Sets the description.
	 *
	 * @param description
	 *            the new description
	 */
	public void setDescription(String description)
	{
		this.description = description;
	}

	/**
	 * Gets the diff.
	 *
	 * @return the diff
	 */
	public List<DifferentObject> getDiff()
	{
		return diff;
	}

	/**
	 * Sets the diff.
	 *
	 * @param diff
	 *            the new diff
	 */
	public void setDiff(List<DifferentObject> diff)
	{
		this.diff = diff;
	}
}
