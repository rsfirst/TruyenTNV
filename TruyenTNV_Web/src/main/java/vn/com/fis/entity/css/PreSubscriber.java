package vn.com.fis.entity.css;

import java.util.List;

import javax.persistence.Entity;

/**
 * The Class PreSubscriber.
 */
public class PreSubscriber implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -6675533973027235851L;

	/** The Constant PROVISIONING. */
	public static final String PROVISIONING = "1";

	/** The Constant NO_PROVISIONING. */
	public static final String NO_PROVISIONING = "0";

	/** The Constant STATE_IDLE. */
	public static final String STATE_IDLE = "1";

	/** The Constant STATE_ACTIVE. */
	public static final String STATE_ACTIVE = "2";

	/** The subscriber id. */
	private String subscriberId;

	/** The imsi. */
	private String imsi;

	/** The serial. */
	private String serial;

	/** The mdn. */
	private Mdn mdn;

	/** The status. */
	private String status;

	/** The stock created. */
	private String stockCreated;

	/** The date created. */
	private String dateCreated;

	/** The stock modified. */
	private String stockModified;

	/** The last modify. */
	private String lastModify;

	/** The active date. */
	private String activeDate;

	/** The cos. */
	private String COS;

	/** The current state. */
	private String currentState;

	/** The provisionning. */
	private String provisionning;

	/** The sv product instance id. */
	private String svProductInstanceId;

	/** The vas. */
	private List vas;

	/** The pre balance list. */
	private PreBalanceList preBalanceList;

	/** The contract img 1. */
	private String contract_img1;

	/** The contract img 2. */
	private String contract_img2;

	/** The file id. */
	private String file_id;

	/** The file id 2. */
	private String file_id_2;

	/**
	 * Checks if is provisionning.
	 *
	 * @return true, if is provisionning
	 */
	public boolean isProvisionning()
	{
		if (provisionning == null || provisionning.equals(NO_PROVISIONING))
		{
			return false;
		}

		return true;
	}

	/**
	 * Gets the subscriber id.
	 *
	 * @return the subscriber id
	 */
	public String getSubscriberId()
	{
		return subscriberId;
	}

	/**
	 * Sets the subscriber id.
	 *
	 * @param subscriberId
	 *            the new subscriber id
	 */
	public void setSubscriberId(String subscriberId)
	{
		this.subscriberId = subscriberId;
	}

	/**
	 * Gets the imsi.
	 *
	 * @return the imsi
	 */
	public String getImsi()
	{
		return imsi;
	}

	/**
	 * Sets the imsi.
	 *
	 * @param imsi
	 *            the new imsi
	 */
	public void setImsi(String imsi)
	{
		this.imsi = imsi;
	}

	/**
	 * Gets the serial.
	 *
	 * @return the serial
	 */
	public String getSerial()
	{
		return serial;
	}

	/**
	 * Sets the serial.
	 *
	 * @param serial
	 *            the new serial
	 */
	public void setSerial(String serial)
	{
		this.serial = serial;
	}

	/**
	 * Gets the mdn.
	 *
	 * @return the mdn
	 */
	public Mdn getMdn()
	{
		return mdn;
	}

	/**
	 * Sets the mdn.
	 *
	 * @param mdn
	 *            the new mdn
	 */
	public void setMdn(Mdn mdn)
	{
		this.mdn = mdn;
	}

	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * Sets the status.
	 *
	 * @param status
	 *            the new status
	 */
	public void setStatus(String status)
	{
		this.status = status;
	}

	/**
	 * Gets the stock created.
	 *
	 * @return the stock created
	 */
	public String getStockCreated()
	{
		return stockCreated;
	}

	/**
	 * Sets the stock created.
	 *
	 * @param stockCreated
	 *            the new stock created
	 */
	public void setStockCreated(String stockCreated)
	{
		this.stockCreated = stockCreated;
	}

	/**
	 * Gets the date created.
	 *
	 * @return the date created
	 */
	public String getDateCreated()
	{
		return dateCreated;
	}

	/**
	 * Sets the date created.
	 *
	 * @param dateCreated
	 *            the new date created
	 */
	public void setDateCreated(String dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	/**
	 * Gets the stock modified.
	 *
	 * @return the stock modified
	 */
	public String getStockModified()
	{
		return stockModified;
	}

	/**
	 * Sets the stock modified.
	 *
	 * @param stockModified
	 *            the new stock modified
	 */
	public void setStockModified(String stockModified)
	{
		this.stockModified = stockModified;
	}

	/**
	 * Gets the last modify.
	 *
	 * @return the last modify
	 */
	public String getLastModify()
	{
		return lastModify;
	}

	/**
	 * Sets the last modify.
	 *
	 * @param lastModify
	 *            the new last modify
	 */
	public void setLastModify(String lastModify)
	{
		this.lastModify = lastModify;
	}

	/**
	 * Gets the active date.
	 *
	 * @return the active date
	 */
	public String getActiveDate()
	{
		return activeDate;
	}

	/**
	 * Sets the active date.
	 *
	 * @param activeDate
	 *            the new active date
	 */
	public void setActiveDate(String activeDate)
	{
		this.activeDate = activeDate;
	}

	/**
	 * Gets the cos.
	 *
	 * @return the cos
	 */
	public String getCOS()
	{
		return COS;
	}

	/**
	 * Sets the cos.
	 *
	 * @param cOS
	 *            the new cos
	 */
	public void setCOS(String cOS)
	{
		COS = cOS;
	}

	/**
	 * Gets the current state.
	 *
	 * @return the current state
	 */
	public String getCurrentState()
	{
		return currentState;
	}

	/**
	 * Sets the current state.
	 *
	 * @param currentState
	 *            the new current state
	 */
	public void setCurrentState(String currentState)
	{
		this.currentState = currentState;
	}

	/**
	 * Gets the provisionning.
	 *
	 * @return the provisionning
	 */
	public String getProvisionning()
	{
		return provisionning;
	}

	/**
	 * Sets the provisionning.
	 *
	 * @param provisionning
	 *            the new provisionning
	 */
	public void setProvisionning(String provisionning)
	{
		this.provisionning = provisionning;
	}

	/**
	 * Gets the sv product instance id.
	 *
	 * @return the sv product instance id
	 */
	public String getSvProductInstanceId()
	{
		return svProductInstanceId;
	}

	/**
	 * Sets the sv product instance id.
	 *
	 * @param svProductInstanceId
	 *            the new sv product instance id
	 */
	public void setSvProductInstanceId(String svProductInstanceId)
	{
		this.svProductInstanceId = svProductInstanceId;
	}

	/**
	 * Gets the vas.
	 *
	 * @return the vas
	 */
	public List getVas()
	{
		return vas;
	}

	/**
	 * Sets the vas.
	 *
	 * @param vas
	 *            the new vas
	 */
	public void setVas(List vas)
	{
		this.vas = vas;
	}

	/**
	 * Gets the pre balance list.
	 *
	 * @return the pre balance list
	 */
	public PreBalanceList getPreBalanceList()
	{
		return preBalanceList;
	}

	/**
	 * Sets the pre balance list.
	 *
	 * @param preBalanceList
	 *            the new pre balance list
	 */
	public void setPreBalanceList(PreBalanceList preBalanceList)
	{
		this.preBalanceList = preBalanceList;
	}

	/**
	 * Gets the contract img 1.
	 *
	 * @return the contract img 1
	 */
	public String getContract_img1()
	{
		return contract_img1;
	}

	/**
	 * Sets the contract img 1.
	 *
	 * @param contract_img1
	 *            the new contract img 1
	 */
	public void setContract_img1(String contract_img1)
	{
		this.contract_img1 = contract_img1;
	}

	/**
	 * Gets the contract img 2.
	 *
	 * @return the contract img 2
	 */
	public String getContract_img2()
	{
		return contract_img2;
	}

	/**
	 * Sets the contract img 2.
	 *
	 * @param contract_img2
	 *            the new contract img 2
	 */
	public void setContract_img2(String contract_img2)
	{
		this.contract_img2 = contract_img2;
	}

	/**
	 * Gets the file id.
	 *
	 * @return the file id
	 */
	public String getFile_id()
	{
		return file_id;
	}

	/**
	 * Sets the file id.
	 *
	 * @param file_id
	 *            the new file id
	 */
	public void setFile_id(String file_id)
	{
		this.file_id = file_id;
	}

	/**
	 * Gets the file id 2.
	 *
	 * @return the file id 2
	 */
	public String getFile_id_2()
	{
		return file_id_2;
	}

	/**
	 * Sets the file id 2.
	 *
	 * @param file_id_2
	 *            the new file id 2
	 */
	public void setFile_id_2(String file_id_2)
	{
		this.file_id_2 = file_id_2;
	}

}
