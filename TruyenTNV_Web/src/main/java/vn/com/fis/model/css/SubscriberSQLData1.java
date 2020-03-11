package vn.com.fis.model.css;

import java.sql.Date;
import java.sql.SQLData;
import java.sql.SQLException;
import java.sql.SQLInput;
import java.sql.SQLOutput;

/**
 * The Class SubscriberSQLData1.
 */
public class SubscriberSQLData1 implements SQLData
{

	/** The sql type. */
	private String sql_type = "EPOS2.SUB_IN_OBJ_2";

	/** The subscriber id. */
	protected String subscriberId;

	/** The imsi. */
	protected String imsi;

	/** The serial. */
	protected String serial;

	/** The mdn. */
	protected String mdn;

	/** The status. */
	protected String status;

	/** The stock created. */
	protected String stockCreated;

	/** The date created. */
	protected Date dateCreated;

	/** The stock modified. */
	protected String stockModified;

	/** The last modify. */
	protected Date lastModify;

	/** The active date. */
	protected Date activeDate;

	/** The cos. */
	protected String COS;

	/** The current state. */
	protected String currentState;

	/** The provisionning. */
	protected String provisionning;

	/** The sv product instance id. */
	protected String svProductInstanceId;

	/** The attack ID. */
	protected String attackID;

	/** The channel id. */
	protected String channelId;

	/** The trans id. */
	protected String transId;

	/** The channel. */
	protected String channel;

	/** The des. */
	protected String des;

	/** The reason id. */
	protected String reasonId;

	/** The file id 2. */
	protected String file_id_2;

	/** The contract img 1. */
	protected String contract_img1;

	/** The contract img 2. */
	protected String contract_img2;

	protected String img_old_1;
	protected String img_old_2;
	protected String coment;
	protected String img_cmgs;

	protected String sub_use_type;
	protected String sub_payment_type;
	protected String shop_code;
	protected String staff_code;

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#getSQLTypeName()
	 */
	public String getSQLTypeName() throws SQLException
	{
		return this.sql_type;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#readSQL(java.sql.SQLInput, java.lang.String)
	 */
	public void readSQL(SQLInput stream, String typeName) throws SQLException
	{
		this.sql_type = typeName;
		this.subscriberId = stream.readString();
		this.imsi = stream.readString();
		this.serial = stream.readString();
		this.mdn = stream.readString();
		this.status = stream.readString();
		this.stockCreated = stream.readString();
		this.dateCreated = stream.readDate();
		this.stockModified = stream.readString();
		this.lastModify = stream.readDate();
		this.activeDate = stream.readDate();
		this.COS = stream.readString();
		this.currentState = stream.readString();
		this.provisionning = stream.readString();
		this.svProductInstanceId = stream.readString();
		this.attackID = stream.readString();
		this.channelId = stream.readString();
		this.transId = stream.readString();
		this.channel = stream.readString();
		this.des = stream.readString();
		this.reasonId = stream.readString();
		this.file_id_2 = stream.readString();
		this.contract_img1 = stream.readString();
		this.contract_img2 = stream.readString();
		this.img_old_1 = stream.readString();
		this.img_old_2 = stream.readString();
		this.coment = stream.readString();
		this.img_cmgs = stream.readString();
		this.sub_use_type = stream.readString();
		this.sub_payment_type = stream.readString();
		this.shop_code = stream.readString();
		this.staff_code = stream.readString();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.sql.SQLData#writeSQL(java.sql.SQLOutput)
	 */
	public void writeSQL(SQLOutput stream) throws SQLException
	{
		stream.writeString(this.subscriberId);
		stream.writeString(this.imsi);
		stream.writeString(this.serial);
		stream.writeString(this.mdn);
		stream.writeString(this.status);
		stream.writeString(this.stockCreated);
		stream.writeDate(this.dateCreated);
		stream.writeString(this.stockModified);
		stream.writeDate(this.lastModify);
		stream.writeDate(this.activeDate);
		stream.writeString(this.COS);
		stream.writeString(this.currentState);
		stream.writeString(this.provisionning);
		stream.writeString(this.svProductInstanceId);
		stream.writeString(this.attackID);
		stream.writeString(this.channelId);
		stream.writeString(this.transId);
		stream.writeString(this.channel);
		stream.writeString(this.des);
		stream.writeString(this.reasonId);
		stream.writeString(this.file_id_2);
		stream.writeString(this.contract_img1);
		stream.writeString(this.contract_img2);
		stream.writeString(this.img_old_1);
		stream.writeString(this.img_old_2);
		stream.writeString(this.coment);
		stream.writeString(this.img_cmgs);
		stream.writeString(this.sub_use_type);
		stream.writeString(this.sub_payment_type);
		stream.writeString(this.shop_code);
		stream.writeString(this.staff_code);
	
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
	 * Gets the subscriber id.
	 *
	 * @return the subscriber id
	 */
	public String getSubscriberId()
	{
		return subscriberId;
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
	 * Gets the imsi.
	 *
	 * @return the imsi
	 */
	public String getImsi()
	{
		return imsi;
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
	 * Gets the serial.
	 *
	 * @return the serial
	 */
	public String getSerial()
	{
		return serial;
	}

	/**
	 * Sets the mdn.
	 *
	 * @param mdn
	 *            the new mdn
	 */
	public void setMdn(String mdn)
	{
		this.mdn = mdn;
	}

	/**
	 * Gets the mdn.
	 *
	 * @return the mdn
	 */
	public String getMdn()
	{
		return mdn;
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
	 * Gets the status.
	 *
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
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
	 * Gets the stock created.
	 *
	 * @return the stock created
	 */
	public String getStockCreated()
	{
		return stockCreated;
	}

	/**
	 * Sets the date created.
	 *
	 * @param dateCreated
	 *            the new date created
	 */
	public void setDateCreated(Date dateCreated)
	{
		this.dateCreated = dateCreated;
	}

	/**
	 * Gets the date created.
	 *
	 * @return the date created
	 */
	public Date getDateCreated()
	{
		return dateCreated;
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
	 * Gets the stock modified.
	 *
	 * @return the stock modified
	 */
	public String getStockModified()
	{
		return stockModified;
	}

	/**
	 * Sets the last modify.
	 *
	 * @param lastModify
	 *            the new last modify
	 */
	public void setLastModify(Date lastModify)
	{
		this.lastModify = lastModify;
	}

	/**
	 * Gets the last modify.
	 *
	 * @return the last modify
	 */
	public Date getLastModify()
	{
		return lastModify;
	}

	/**
	 * Sets the active date.
	 *
	 * @param activeDate
	 *            the new active date
	 */
	public void setActiveDate(Date activeDate)
	{
		this.activeDate = activeDate;
	}

	/**
	 * Gets the active date.
	 *
	 * @return the active date
	 */
	public Date getActiveDate()
	{
		return activeDate;
	}

	/**
	 * Sets the cos.
	 *
	 * @param COS
	 *            the new cos
	 */
	public void setCOS(String COS)
	{
		this.COS = COS;
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
	 * Gets the current state.
	 *
	 * @return the current state
	 */
	public String getCurrentState()
	{
		return currentState;
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
	 * Gets the provisionning.
	 *
	 * @return the provisionning
	 */
	public String getProvisionning()
	{
		return provisionning;
	}

	/**
	 * Sets the SV product instance id.
	 *
	 * @param svProductInstanceId
	 *            the new SV product instance id
	 */
	public void setSVProductInstanceId(String svProductInstanceId)
	{
		this.svProductInstanceId = svProductInstanceId;
	}

	/**
	 * Gets the SV product instance id.
	 *
	 * @return the SV product instance id
	 */
	public String getSVProductInstanceId()
	{
		return svProductInstanceId;
	}

	/**
	 * Sets the attack ID.
	 *
	 * @param attackID
	 *            the new attack ID
	 */
	public void setattackID(String attackID)
	{
		this.attackID = attackID;
	}

	/**
	 * Gets the attack ID.
	 *
	 * @return the attack ID
	 */
	public String getattackID()
	{
		return attackID;
	}

	/**
	 * Sets the chanel id.
	 *
	 * @param value
	 *            the new chanel id
	 */
	public void setChanelId(String value)
	{
		this.channelId = value;
	}

	/**
	 * Gets the chanel id.
	 *
	 * @return the chanel id
	 */
	public String getChanelId()
	{
		return channelId;
	}

	/**
	 * Sets the trans id.
	 *
	 * @param value
	 *            the new trans id
	 */
	public void setTransId(String value)
	{
		this.transId = value;
	}

	/**
	 * Gets the trans id.
	 *
	 * @return the trans id
	 */
	public String getTransId()
	{
		return transId;
	}

	/**
	 * Sets the chanel.
	 *
	 * @param value
	 *            the new chanel
	 */
	public void setChanel(String value)
	{
		this.channel = value;
	}

	/**
	 * Gets the channel.
	 *
	 * @return the channel
	 */
	public String getChannel()
	{
		return channel;
	}

	/**
	 * Sets the des.
	 *
	 * @param value
	 *            the new des
	 */
	public void setDes(String value)
	{
		this.des = value;
	}

	/**
	 * Gets the des.
	 *
	 * @return the des
	 */
	public String getDes()
	{
		return des;
	}

	/**
	 * Sets the reason id.
	 *
	 * @param value
	 *            the new reason id
	 */
	public void setReasonId(String value)
	{
		this.reasonId = value;
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
	 * Gets the file id 2.
	 *
	 * @return the file_id_2
	 */
	public String getFile_id_2()
	{
		return file_id_2;
	}

	/**
	 * Sets the file id 2.
	 *
	 * @param file_id_2
	 *            the file_id_2 to set
	 */
	public void setFile_id_2(String file_id_2)
	{
		this.file_id_2 = file_id_2;
	}

	/**
	 * Gets the contract img 1.
	 *
	 * @return the contract_img1
	 */
	public String getContract_img1()
	{
		return contract_img1;
	}

	/**
	 * Sets the contract img 1.
	 *
	 * @param contract_img1
	 *            the contract_img1 to set
	 */
	public void setContract_img1(String contract_img1)
	{
		this.contract_img1 = contract_img1;
	}

	/**
	 * Gets the contract img 2.
	 *
	 * @return the contract_img2
	 */
	public String getContract_img2()
	{
		return contract_img2;
	}

	/**
	 * Sets the contract img 2.
	 *
	 * @param contract_img2
	 *            the contract_img2 to set
	 */
	public void setContract_img2(String contract_img2)
	{
		this.contract_img2 = contract_img2;
	}

	/**
	 * @return the sub_use_type
	 */
	public String getSub_use_type()
	{
		return sub_use_type;
	}

	/**
	 * @param sub_use_type
	 *            the sub_use_type to set
	 */
	public void setSub_use_type(String sub_use_type)
	{
		this.sub_use_type = sub_use_type;
	}

	/**
	 * @return the sub_payment_type
	 */
	public String getSub_payment_type()
	{
		return sub_payment_type;
	}

	/**
	 * @param sub_payment_type
	 *            the sub_payment_type to set
	 */
	public void setSub_payment_type(String sub_payment_type)
	{
		this.sub_payment_type = sub_payment_type;
	}

	/**
	 * @return the shop_code
	 */
	public String getShop_code()
	{
		return shop_code;
	}

	/**
	 * @param shop_code
	 *            the shop_code to set
	 */
	public void setShop_code(String shop_code)
	{
		this.shop_code = shop_code;
	}

	/**
	 * @return the staff_code
	 */
	public String getStaff_code()
	{
		return staff_code;
	}

	/**
	 * @param staff_code
	 *            the staff_code to set
	 */
	public void setStaff_code(String staff_code)
	{
		this.staff_code = staff_code;
	}

	/**
	 * @return the img_old_1
	 */
	public String getImg_old_1()
	{
		return img_old_1;
	}

	/**
	 * @param img_old_1
	 *            the img_old_1 to set
	 */
	public void setImg_old_1(String img_old_1)
	{
		this.img_old_1 = img_old_1;
	}

	/**
	 * @return the img_old_2
	 */
	public String getImg_old_2()
	{
		return img_old_2;
	}

	/**
	 * @param img_old_2
	 *            the img_old_2 to set
	 */
	public void setImg_old_2(String img_old_2)
	{
		this.img_old_2 = img_old_2;
	}

	/**
	 * @return the coment
	 */
	public String getComent()
	{
		return coment;
	}

	/**
	 * @param coment
	 *            the coment to set
	 */
	public void setComent(String coment)
	{
		this.coment = coment;
	}

	/**
	 * @return the img_cmgs
	 */
	public String getImg_cmgs()
	{
		return img_cmgs;
	}

	/**
	 * @param img_cmgs
	 *            the img_cmgs to set
	 */
	public void setImg_cmgs(String img_cmgs)
	{
		this.img_cmgs = img_cmgs;
	}

}
