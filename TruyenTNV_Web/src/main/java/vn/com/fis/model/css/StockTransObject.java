package vn.com.fis.model.css;

public class StockTransObject
{

	public StockTransObject()
	{

	}

	public StockTransObject(long stockTransId, String createDateTime, String note, String status)
	{
		super();
		this.stockTransId = stockTransId;
		this.createDateTime = createDateTime;
		this.note = note;
		this.status = status;
	}

	public StockTransObject(long stockTransId, long stockId, String shopName, long delivererStockId, String shopDeliveryName, String createDateTime,
			String type, String typeName, long reasonId, String reasonName, String status, String note, String cmdCode, String cmdStatus, String cmdStatusName,
			String cmdDate, String destroyDate, String destroyStaffId, String destroyStaffName, String cmdNote, long cmdStaffId, String cmdStaffname,
			String execName, long internalStockId, long fromStockTransId, String reasonCode,String rowNum)
	{
		super();
		this.stockTransId = stockTransId;
		this.stockId = stockId;
		this.shopName = shopName;
		this.delivererStockId = delivererStockId;
		this.shopDeliveryName = shopDeliveryName;
		this.createDateTime = createDateTime;
		this.type = type;
		this.typeName = typeName;
		this.reasonId = reasonId;
		this.reasonName = reasonName;
		this.status = status;
		this.note = note;
		this.cmdCode = cmdCode;
		this.cmdStatus = cmdStatus;
		this.cmdStatusName = cmdStatusName;
		this.cmdDate = cmdDate;
		this.destroyDate = destroyDate;
		this.destroyStaffId = destroyStaffId;
		this.destroyStaffName = destroyStaffName;
		this.cmdNote = cmdNote;
		this.cmdStaffId = cmdStaffId;
		this.cmdStaffname = cmdStaffname;
		this.execName = execName;
		this.internalStockId = internalStockId;
		this.fromStockTransId = fromStockTransId;
		this.reasonCode = reasonCode;
		this.rowNum = rowNum;
	}




	long stockTransId;
	long stockId;
	String shopName;
	long delivererStockId;
	String shopDeliveryName;
	String createDateTime;
	String type;
	String typeName;
	long reasonId;
	String reasonName;
	String status;
	String note;
	String cmdCode;
	String cmdStatus;
	String cmdStatusName;
	String cmdDate;
	String destroyDate;
	String destroyStaffId;
	String destroyStaffName;
	String cmdNote;
	long cmdStaffId;
	String cmdStaffname;
	String execName;
	long internalStockId;
	long fromStockTransId;
	String reasonCode;
	String rowNum;

	public String getReasonName()
	{
		return reasonName;
	}

	public void setReasonName(String reasonName)
	{
		this.reasonName = reasonName;
	}

	public String getCmdStatusName()
	{
		return cmdStatusName;
	}

	public void setCmdStatusName(String cmdStatusName)
	{
		this.cmdStatusName = cmdStatusName;
	}

	public String getCmdNote()
	{
		return cmdNote;
	}

	public void setCmdNote(String cmdNote)
	{
		this.cmdNote = cmdNote;
	}

	public long getStockTransId()
	{
		return stockTransId;
	}

	public void setStockTransId(long stockTransId)
	{
		this.stockTransId = stockTransId;
	}

	public long getStockId()
	{
		return stockId;
	}

	public void setStockId(long stockId)
	{
		this.stockId = stockId;
	}

	public long getDelivererStockId()
	{
		return delivererStockId;
	}

	public void setDelivererStockId(long delivererStockId)
	{
		this.delivererStockId = delivererStockId;
	}

	public String getCreateDateTime()
	{
		return createDateTime;
	}

	public void setCreateDateTime(String createDateTime)
	{
		this.createDateTime = createDateTime;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public long getReasonId()
	{
		return reasonId;
	}

	public void setReasonId(long reasonId)
	{
		this.reasonId = reasonId;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public String getCmdCode()
	{
		return cmdCode;
	}

	public void setCmdCode(String cmdCode)
	{
		this.cmdCode = cmdCode;
	}

	public String getCmdStatus()
	{
		return cmdStatus;
	}

	public void setCmdStatus(String cmdStatus)
	{
		this.cmdStatus = cmdStatus;
	}

	public String getCmdDate()
	{
		return cmdDate;
	}

	public void setCmdDate(String cmdDate)
	{
		this.cmdDate = cmdDate;
	}

	public long getCmdStaffId()
	{
		return cmdStaffId;
	}

	public void setCmdStaffId(long cmdStaffId)
	{
		this.cmdStaffId = cmdStaffId;
	}

	public String getExecName()
	{
		return execName;
	}

	public void setExecName(String execName)
	{
		this.execName = execName;
	}

	public long getInternalStockId()
	{
		return internalStockId;
	}

	public void setInternalStockId(long internalStockId)
	{
		this.internalStockId = internalStockId;
	}

	public String getDestroyDate()
	{
		return destroyDate;
	}

	public void setDestroyDate(String destroyDate)
	{
		this.destroyDate = destroyDate;
	}

	public String getDestroyStaffId()
	{
		return destroyStaffId;
	}

	public void setDestroyStaffId(String destroyStaffId)
	{
		this.destroyStaffId = destroyStaffId;
	}

	public long getFromStockTransId()
	{
		return fromStockTransId;
	}

	public void setFromStockTransId(long fromStockTransId)
	{
		this.fromStockTransId = fromStockTransId;
	}

	public String getReasonCode()
	{
		return reasonCode;
	}

	public void setReasonCode(String reasonCode)
	{
		this.reasonCode = reasonCode;
	}

	public String getShopName()
	{
		return shopName;
	}

	public void setShopName(String shopName)
	{
		this.shopName = shopName;
	}

	public String getShopDeliveryName()
	{
		return shopDeliveryName;
	}

	public void setShopDeliveryName(String shopDeliveryName)
	{
		this.shopDeliveryName = shopDeliveryName;
	}

	public String getTypeName()
	{
		return typeName;
	}

	public void setTypeName(String typeName)
	{
		this.typeName = typeName;
	}

	public String getDestroyStaffName()
	{
		return destroyStaffName;
	}

	public void setDestroyStaffName(String destroyStaffName)
	{
		this.destroyStaffName = destroyStaffName;
	}

	public String getCmdStaffname()
	{
		return cmdStaffname;
	}

	public void setCmdStaffname(String cmdStaffname)
	{
		this.cmdStaffname = cmdStaffname;
	}

	public String getRowNum()
	{
		return rowNum;
	}

	public void setRowNum(String rowNum)
	{
		this.rowNum = rowNum;
	}
}
