package vn.com.fis.entity.css;

import java.util.Vector;

public class StockTransactionEntity extends SingleEntity
{
	public static final int SIZE = 45; // Size of entity

	public static final String CLASS_CODE = "StockTransaction"; // Class code to encrypt to DDTP

	// Element position to implement with table
	public static final int POS_STOCK_TRANSACTION_ID 	= 0;
	public static final int POS_STOCK_ID				= 1;
	public static final int POS_DELIVERER_STOCK_ID		= 2;
	public static final int POS_TYPE					= 3;
	public static final int POS_REASON_ID			 	= 4;
	public static final int POS_STATUS		 			= 5;
	public static final int POS_CREATE_DATETIME			= 6;
	public static final int POS_NOTE		 			= 7;

	public static final int POS_CMD_ID		 			= 8;
	public static final int POS_CMD_CODE	 			= 9;
	public static final int POS_CMD_STATUS	 			= 10;
	public static final int POS_CMD_DATE		 		= 11;
	public static final int POS_CMD_NOTE	 			= 12;
	public static final int POS_CMD_NAME	 			= 13;
	public static final int POS_CMD_STAFF_ID			= 14;
	public static final int POS_DES_DATE		 		= 40;
	public static final int POS_DES_STAFF_ID			= 41;

    public static final int POS_INSPECT_CMD_ID			= 15;
    public static final int POS_INSPECT_CMD_CODE	 	= 16;
    public static final int POS_INSPECT_CMD_STATUS	 	= 17;
    public static final int POS_INSPECT_CMD_DATE		= 18;
    public static final int POS_INSPECT_CMD_NOTE	 	= 19;
    public static final int POS_INSPECT_CMD_NAME	 	= 20;
    public static final int POS_INSPECT_CMD_STAFF_ID 	= 21;

    public static final int POS_EXEC_ID			= 22;
    public static final int POS_EXEC_CODE	 	= 23;
    public static final int POS_EXEC_STATUS	 	= 24;
    public static final int POS_EXEC_DATE		= 25;
    public static final int POS_EXEC_NOTE		= 26;
    public static final int POS_EXEC_NAME		= 27;
    public static final int POS_EXEC_STAFF_ID	= 28;

    public static final int POS_DESTROY_ID			= 29;
    public static final int POS_DESTROY_CODE	 	= 30;
    public static final int POS_DESTROY_STATUS	 	= 31;
    public static final int POS_DESTROY_DATE		= 32;
    public static final int POS_DESTROY_NOTE		= 33;
    public static final int POS_DESTROY_NAME		= 34;
    public static final int POS_DESTROY_STAFF_ID	= 35;
	public static final int POS_GET_FROM_STOCK_TRANS_ID = 36;
	public static final int POS_REASON_CODE			 	= 37;

	public static final int POS_RESOURCE_CODE	    = 38;
	public static final int POS_INTERNAL_STOCK_ID   = 39;
        //        TamND11 add
	public static final int COL_DELIVERER_STOCK_NAME     = 42;
	public static final int COL_STOCK_NAME               = 43;
	public static final int COL_EXEC_STAFF_NAME          = 44;
	///////////////////////////////////////////////////////////////////////////
	public StockTransactionEntity()
	{
		super();
	}

	///////////////////////////////////////////////////////////////////////////
	public StockTransactionEntity(Vector pvtData)
	{
		super(pvtData);
	}
	///////////////////////////////////////////////////////////////////////////
	protected void init()
	{
		mstrClassCode = CLASS_CODE;
		mintSize = SIZE;
	}

	///////////////////////////////////////////////////////////////////////////
	public void setID(String pstrID)
	{
		setElementAt(pstrID, POS_STOCK_TRANSACTION_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getID()
	{
		return getStrElementAt(POS_STOCK_TRANSACTION_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setStockID(String pstrStockID)
	{
		setElementAt(pstrStockID, POS_STOCK_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setStock(StockEntity pStock)
	{
		setStockID(pStock.getID());
	}

	///////////////////////////////////////////////////////////////////////////
	public String getStockID()
	{
		return getStrElementAt(POS_STOCK_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setDelivererStockID(String pstrDelivererStockID)
	{
		setElementAt(pstrDelivererStockID, POS_DELIVERER_STOCK_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setGetFromStockTransID(String pstrGetFromStockTransID)
	{
		setElementAt(pstrGetFromStockTransID, POS_GET_FROM_STOCK_TRANS_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setDelivererStock(StockEntity pDelivererStock)
	{
		setDelivererStockID(pDelivererStock.getID());
	}

	///////////////////////////////////////////////////////////////////////////
	public String getDelivererStockID()
	{
		return getStrElementAt(POS_DELIVERER_STOCK_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getGetFromStockTransID()
	{
		return getStrElementAt(POS_GET_FROM_STOCK_TRANS_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setType(String pstrType)
	{
		setElementAt(pstrType, POS_TYPE);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getType()
	{
		return getStrElementAt(POS_TYPE);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setReasonID(String pstrReasonID)
	{
		setElementAt(pstrReasonID, POS_REASON_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setReasonCode(String pstrReasonID)
	{
		setElementAt(pstrReasonID, POS_REASON_CODE);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setReason(ReasonEntity pReason)
	{
		setReasonID(pReason.getID());
		setReasonCode(pReason.getCode());
	}

	///////////////////////////////////////////////////////////////////////////
	public String getReasonID()
	{
		return getStrElementAt(POS_REASON_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getReasonCode()
	{
		return getStrElementAt(POS_REASON_CODE);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setStatus(String pstrStatus)
	{
		setElementAt(pstrStatus, POS_STATUS);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getStatus()
	{
		return getStrElementAt(POS_STATUS);
	}

	///////////////////////////////////////////////////////////////////////////
    public void setCmdID(String pstrCmdID)
    {
        setElementAt(pstrCmdID, POS_CMD_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdID()
    {
        return getStrElementAt(POS_CMD_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setCmdCode(String pstrCmdCode)
    {
        setElementAt(pstrCmdCode, POS_CMD_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdCode()
    {
        return getStrElementAt(POS_CMD_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setCmdName(String pstrCmdName)
    {
        setElementAt(pstrCmdName, POS_CMD_NAME);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdName()
    {
        return getStrElementAt(POS_CMD_NAME);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setCmdStatus(String pstrCmdStatus)
    {
        setElementAt(pstrCmdStatus, POS_CMD_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdStatus()
    {
        return getStrElementAt(POS_CMD_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setCmdDate(String pstrCmdDate)
    {
        setElementAt(pstrCmdDate, POS_CMD_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdDate()
    {
        return getStrElementAt(POS_CMD_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setCmdNote(String pstrCmdNote)
    {
        setElementAt(pstrCmdNote, POS_CMD_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdNote()
    {
        return getStrElementAt(POS_CMD_NOTE);
    }

    ///////////////////////////////////////////////////////////////////////////
    public void setCmdStaffID(String pstrCmdStaffID)
    {
        setElementAt(pstrCmdStaffID, POS_CMD_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getCmdStaffID()
    {
        return getStrElementAt(POS_CMD_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
	public void setDesDate(String pstrCmdDate)
	{
		setElementAt(pstrCmdDate, POS_DES_DATE);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getDesDate()
	{
		return getStrElementAt(POS_DES_DATE);
	}

	///////////////////////////////////////////////////////////////////////////
	public void setDesStaffID(String pstrCmdStaffID)
	{
		setElementAt(pstrCmdStaffID, POS_DES_STAFF_ID);
	}

	///////////////////////////////////////////////////////////////////////////
	public String getDesStaffID()
	{
		return getStrElementAt(POS_DES_STAFF_ID);
	}

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdID(String pstrInspectCmdID)
    {
        setElementAt(pstrInspectCmdID, POS_INSPECT_CMD_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdID()
    {
        return getStrElementAt(POS_INSPECT_CMD_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdCode(String pstrInspectCmdID)
    {
        setElementAt(pstrInspectCmdID, POS_INSPECT_CMD_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdCode()
    {
        return getStrElementAt(POS_INSPECT_CMD_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdName(String pstrInspectCmdName)
    {
        setElementAt(pstrInspectCmdName, POS_INSPECT_CMD_NAME);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdName()
    {
        return getStrElementAt(POS_INSPECT_CMD_NAME);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdStatus(String pstrInspectCmdStatus)
    {
        setElementAt(pstrInspectCmdStatus, POS_INSPECT_CMD_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdStatus()
    {
        return getStrElementAt(POS_INSPECT_CMD_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdDate(String pstrInspectCmdDate)
    {
        setElementAt(pstrInspectCmdDate, POS_INSPECT_CMD_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdDate()
    {
        return getStrElementAt(POS_INSPECT_CMD_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdNote(String pstrInspectCmdNote)
    {
        setElementAt(pstrInspectCmdNote, POS_INSPECT_CMD_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdNote()
    {
        return getStrElementAt(POS_INSPECT_CMD_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setInspectCmdStaffID(String pstrInspectCmdStaffID)
    {
        setElementAt(pstrInspectCmdStaffID, POS_INSPECT_CMD_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getInspectCmdStaffID()
    {
        return getStrElementAt(POS_INSPECT_CMD_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecID(String pstrExecID)
    {
        setElementAt(pstrExecID, POS_EXEC_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecID()
    {
        return getStrElementAt(POS_EXEC_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecCode(String pstrExecCode)
    {
        setElementAt(pstrExecCode, POS_EXEC_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecCode()
    {
        return getStrElementAt(POS_EXEC_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecStatus(String pstrExecStatus)
    {
        setElementAt(pstrExecStatus, POS_EXEC_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecStatus()
    {
        return getStrElementAt(POS_EXEC_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecDate(String pstrExecDate)
    {
        setElementAt(pstrExecDate, POS_EXEC_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecDate()
    {
        return getStrElementAt(POS_EXEC_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecNote(String pstrExecNote)
    {
        setElementAt(pstrExecNote, POS_EXEC_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecNote()
    {
        return getStrElementAt(POS_EXEC_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecName(String pstrExecName)
    {
        setElementAt(pstrExecName, POS_EXEC_NAME);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecName()
    {
        return getStrElementAt(POS_EXEC_NAME);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setExecStaffID(String pstrExecStaffID)
    {
        setElementAt(pstrExecStaffID, POS_EXEC_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getExecStaffID()
    {
        return getStrElementAt(POS_EXEC_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setDestroyID(String pstrDestroyID)
    {
        setElementAt(pstrDestroyID, POS_DESTROY_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getDestroyID()
    {
        return getStrElementAt(POS_DESTROY_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setDestroyCode(String pstrDestroyCode)
    {
        setElementAt(pstrDestroyCode, POS_DESTROY_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getDestroyCode()
    {
        return getStrElementAt(POS_DESTROY_CODE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setDestroyStatus(String pstrDestroyStatus)
    {
        setElementAt(pstrDestroyStatus, POS_DESTROY_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getDestroyStatus()
    {
        return getStrElementAt(POS_DESTROY_STATUS);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setDestroyDate(String pstrDestroyDate)
    {
        setElementAt(pstrDestroyDate, POS_DESTROY_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getDestroyDate()
    {
        return getStrElementAt(POS_DESTROY_DATE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setDestroyNote(String pstrDestroyNote)
    {
        setElementAt(pstrDestroyNote, POS_DESTROY_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getDestroyNote()
    {
        return getStrElementAt(POS_DESTROY_NOTE);
    }

	///////////////////////////////////////////////////////////////////////////
    public void setDestroyStaffID(String pstrDestroyStaffID)
    {
        setElementAt(pstrDestroyStaffID, POS_DESTROY_STAFF_ID);
    }

	///////////////////////////////////////////////////////////////////////////
    public String getDestroyStaffID()
    {
        return getStrElementAt(POS_DESTROY_STAFF_ID);
    }
	////////////////////////////////////////////////////////////////////////////
	public void setResourceCode(String pstrResourceCode)
	{
		setElementAt(pstrResourceCode, POS_RESOURCE_CODE);
	}
	public String getResourceCode()
	{
		return getStrElementAt(POS_RESOURCE_CODE);
	}
	////////////////////////////////////////////////////////////////////////////
	public void setInternalStockId(String pstrInternalStockId)
	{
		setElementAt(pstrInternalStockId, POS_INTERNAL_STOCK_ID);
	}
	public String getInternalStockId()
	{
		return getStrElementAt(POS_INTERNAL_STOCK_ID);
	}
        
        public void setDelivererStockName(String pstrDelivererStockName)
	{
		setElementAt(pstrDelivererStockName, COL_DELIVERER_STOCK_NAME);
	}
        public String getDelivererStockName()
	{
		return getStrElementAt(COL_DELIVERER_STOCK_NAME);
	}
        
        public void setStockName(String pstrStockName)
	{
		setElementAt(pstrStockName, COL_STOCK_NAME);
	}
        
	public String getStockName()
	{
		return getStrElementAt(COL_STOCK_NAME);
	}
        
        public void setExecStaffName(String pstrExecStaffName)
	{
		setElementAt(pstrExecStaffName, COL_EXEC_STAFF_NAME);
	}
	public String getExecStaffName()
	{
		return getStrElementAt(COL_EXEC_STAFF_NAME);
	}
}
