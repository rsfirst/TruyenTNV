package vn.com.fis.model.css;

import java.util.List;

// TODO: Auto-generated Javadoc
/**
 * The Class PerPaidSearchCustomerInput.
 */
public class ShopObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -8396223818824082075L;

	/** The shop id. */
	private String shopId;

	/** The shop code. */
	private String shopCode;

	/** The name shop name. */
	private String shopName;

	/** The parent shop id. */
	private String parentShopId;

	/** The staff id. */
	private String staffId;

	/** The staff code. */
	private String staffCode;

	/** The name staff name. */
	private String staffName;

	/** The shop type. */
	private String shopType;

	/** The tariff id. */
	private String tariffId;

	/** The address. */
	private String address;

	/** The center code. */
	private String centerCode;

	/** The issued at. */
	private String issuedAt;

	/** The province. */
	private String province;

	/** The create date. */
	private String createDate;

	private String statusUpdate;

	private String company;

	private String tin;

	private String account;

	List<String> listNoteRecord;

	public ShopObject()
	{
		// TODO Auto-generated constructor stub
	}

	public ShopObject(String shopId, String shopCode, String shopName, String parentShopId, String staffId, String staffCode, String staffName, String shopType,
			String tariffId, String address, String centerCode, String issuedAt, String province, String createDate, String statusUpdate,
			List<String> listNoteRecord, String company, String tin, String account)
	{
		this.shopId = shopId;
		this.shopCode = shopCode;
		this.shopName = shopName;
		this.parentShopId = parentShopId;
		this.staffId = staffId;
		this.staffCode = staffCode;
		this.staffName = staffName;
		this.shopType = shopType;
		this.tariffId = tariffId;
		this.address = address;
		this.centerCode = centerCode;
		this.issuedAt = issuedAt;
		this.province = province;
		this.createDate = createDate;
		this.statusUpdate = statusUpdate;
		this.listNoteRecord = listNoteRecord;
		this.company = company;
		this.tin = tin;
		this.account = account;

	}

	/**
	 * Gets the shop id.
	 *
	 * @return the shop id
	 */
	public String getShopId()
	{
		return shopId;
	}

	/**
	 * Sets the shop id.
	 *
	 * @param shopId
	 *            the new shop id
	 */
	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	/**
	 * Gets the shop code.
	 *
	 * @return the shop code
	 */
	public String getShopCode()
	{
		return shopCode;
	}

	/**
	 * Sets the shop code.
	 *
	 * @param shopCode
	 *            the new shop code
	 */
	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	/**
	 * Gets the parent shop id.
	 *
	 * @return the parent shop id
	 */
	public String getParentShopId()
	{
		return parentShopId;
	}

	/**
	 * Sets the parent shop id.
	 *
	 * @param parentShopId
	 *            the new parent shop id
	 */
	public void setParentShopId(String parentShopId)
	{
		this.parentShopId = parentShopId;
	}

	/**
	 * Gets the staff id.
	 *
	 * @return the staff id
	 */
	public String getStaffId()
	{
		return staffId;
	}

	/**
	 * Sets the staff id.
	 *
	 * @param staffId
	 *            the new staff id
	 */
	public void setStaffId(String staffId)
	{
		this.staffId = staffId;
	}

	/**
	 * Gets the staff code.
	 *
	 * @return the staff code
	 */
	public String getStaffCode()
	{
		return staffCode;
	}

	/**
	 * Sets the staff code.
	 *
	 * @param staffCode
	 *            the new staff code
	 */
	public void setStaffCode(String staffCode)
	{
		this.staffCode = staffCode;
	}

	/**
	 * Gets the shop type.
	 *
	 * @return the shop type
	 */
	public String getShopType()
	{
		return shopType;
	}

	/**
	 * Sets the shop type.
	 *
	 * @param shopType
	 *            the new shop type
	 */
	public void setShopType(String shopType)
	{
		this.shopType = shopType;
	}

	/**
	 * Gets the tariff id.
	 *
	 * @return the tariff id
	 */
	public String getTariffId()
	{
		return tariffId;
	}

	/**
	 * Sets the tariff id.
	 *
	 * @param tariffId
	 *            the new tariff id
	 */
	public void setTariffId(String tariffId)
	{
		this.tariffId = tariffId;
	}

	/**
	 * Gets the address.
	 *
	 * @return the address
	 */
	public String getAddress()
	{
		return address;
	}

	/**
	 * Sets the address.
	 *
	 * @param address
	 *            the new address
	 */
	public void setAddress(String address)
	{
		this.address = address;
	}

	/**
	 * Gets the center code.
	 *
	 * @return the center code
	 */
	public String getCenterCode()
	{
		return centerCode;
	}

	/**
	 * Sets the center code.
	 *
	 * @param centerCode
	 *            the new center code
	 */
	public void setCenterCode(String centerCode)
	{
		this.centerCode = centerCode;
	}

	/**
	 * Gets the issued at.
	 *
	 * @return the issued at
	 */
	public String getIssuedAt()
	{
		return issuedAt;
	}

	/**
	 * Sets the issued at.
	 *
	 * @param issuedAt
	 *            the new issued at
	 */
	public void setIssuedAt(String issuedAt)
	{
		this.issuedAt = issuedAt;
	}

	/**
	 * Gets the province.
	 *
	 * @return the province
	 */
	public String getProvince()
	{
		return province;
	}

	/**
	 * Sets the province.
	 *
	 * @param province
	 *            the new province
	 */
	public void setProvince(String province)
	{
		this.province = province;
	}

	public String getShopName()
	{
		return shopName;
	}

	public void setShopName(String shopName)
	{
		this.shopName = shopName;
	}

	public String getStaffName()
	{
		return staffName;
	}

	public void setStaffName(String staffName)
	{
		this.staffName = staffName;
	}

	public String getCreateDate()
	{
		return createDate;
	}

	public void setCreateDate(String createDate)
	{
		this.createDate = createDate;
	}

	public List<String> getListNoteRecord()
	{
		return listNoteRecord;
	}

	public String getStatusUpdate()
	{
		return statusUpdate;
	}

	public void setStatusUpdate(String statusUpdate)
	{
		this.statusUpdate = statusUpdate;
	}

	public void setListNoteRecord(List<String> listNoteRecord)
	{
		this.listNoteRecord = listNoteRecord;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(String company)
	{
		this.company = company;
	}

	public String getTin()
	{
		return tin;
	}

	public void setTin(String tin)
	{
		this.tin = tin;
	}

	public String getAccount()
	{
		return account;
	}

	public void setAccount(String account)
	{
		this.account = account;
	}

}
