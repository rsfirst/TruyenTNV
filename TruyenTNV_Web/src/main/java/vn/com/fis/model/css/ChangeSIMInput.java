package vn.com.fis.model.css;

import java.util.List;

/**
 * The Class ChangeSIMInput.
 */
public class ChangeSIMInput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1913994514705339454L;

	private String mdn;

	/** The old serial. */
	private String oldSerial;

	/** The new serial. */
	private String newSerial;

	/** The reason id. */
	private String reasonId;

	private String reasonName;

	private String shopId;

	private List<String> listMsisdnCall;

	private RequestChangeServicePanel customer;

	private SecondInfomationModel secondInfomationModel;
	
	public String getIsdnCallStatus()
	{
		return isdnCallStatus;
	}

	public void setIsdnCallStatus(String isdnCallStatus)
	{
		this.isdnCallStatus = isdnCallStatus;
	}

	private String isdnCallStatus;

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	/**
	 * Gets the old serial.
	 *
	 * @return the old serial
	 */
	public String getOldSerial()
	{
		return oldSerial;
	}

	/**
	 * Sets the old serial.
	 *
	 * @param oldSerial
	 *            the new old serial
	 */
	public void setOldSerial(String oldSerial)
	{
		this.oldSerial = oldSerial;
	}

	/**
	 * Gets the new serial.
	 *
	 * @return the new serial
	 */
	public String getNewSerial()
	{
		return newSerial;
	}

	/**
	 * Sets the new serial.
	 *
	 * @param newSerial
	 *            the new new serial
	 */
	public void setNewSerial(String newSerial)
	{
		this.newSerial = newSerial;
	}

	/**
	 * Gets the reason id.
	 *
	 * @return the reason id
	 */
	public String getReasonId()
	{
		return reasonId;
	}

	/**
	 * Sets the reason id.
	 *
	 * @param reasonId
	 *            the new reason id
	 */
	public void setReasonId(String reasonId)
	{
		this.reasonId = reasonId;
	}

	public RequestChangeServicePanel getCustomer()
	{
		return customer;
	}

	public void setCustomer(RequestChangeServicePanel customer)
	{
		this.customer = customer;
	}

	public List<String> getListMsisdnCall()
	{
		return listMsisdnCall;
	}

	public void setListMsisdnCall(List<String> listMsisdnCall)
	{
		this.listMsisdnCall = listMsisdnCall;
	}

	public String getMdn()
	{
		return mdn;
	}

	public void setMdn(String mdn)
	{
		this.mdn = mdn;
	}

	public SecondInfomationModel getSecondInfomationModel()
	{
		return secondInfomationModel;
	}

	public void setSecondInfomationModel(SecondInfomationModel secondInfomationModel)
	{
		this.secondInfomationModel = secondInfomationModel;
	}

	public String getReasonName()
	{
		return reasonName;
	}

	public void setReasonName(String reasonName)
	{
		this.reasonName = reasonName;
	}

	@Override
	public String toString()
	{
		return "ChangeSIMInput [mdn=" + mdn + ", oldSerial=" + oldSerial + ", newSerial=" + newSerial + ", reasonId=" + reasonId + ", reasonName=" + reasonName
				+ ", shopId=" + shopId + ", listMsisdnCall=" + listMsisdnCall + ", customer=" + customer + ", secondInfomationModel=" + secondInfomationModel
				+ ", isdnCallStatus=" + isdnCallStatus + "]";
	}
	
	

}
