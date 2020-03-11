package vn.com.fis.entity.css;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Resultset2StockTransEntity extends Resultset2Entity
{
	// Element position to Simplement with table
	public static final String COL_STOCK_TRANS_ID           = "stock_trans_id";
	public static final String COL_STOCK_ID                 = "stock_id";
	public static final String COL_DELIVERER_STOCK_ID       = "deliverer_stock_id";
	public static final String COL_CREATE_DATEIME           = "create_datetime";
	public static final String COL_TYPE                     = "Type";
	public static final String COL_REASON_ID                = "reason_id";
	public static final String COL_STATUS                   = "status";
	public static final String COL_NOTE                     = "note";
	public static final String COL_GET_FROM_STOCK_TRANS_ID  = "get_from_stock_trans_id";
	public static final String COL_REASON_CODE              = "reason_code";
	public static final String COL_CMD_ID                   = "cmd_id";
	public static final String COL_CMD_CODE                 = "cmd_code";
	public static final String COL_CMD_NAME                 = "cmd_name";
	public static final String COL_CMD_STATUS               = "cmd_status";
	public static final String COL_CMD_DATE                 = "cmd_date";
	public static final String COL_CMD_NOTE                 = "cmd_note";
	public static final String COL_CMD_STAFF_ID             = "cmd_staff_id";
	public static final String COL_DES_DATE                 = "destroy_date";
	public static final String COL_DES_STAFF_ID             = "destroy_staff_id";

	public static final String COL_INSP_CMD_ID              = "inspect_cmd_id";
	public static final String COL_INSP_CMD_CODE            = "inspect_cmd_code";
	public static final String COL_INSP_CMD_STATUS          = "inspect_cmd_status";
	public static final String COL_INSP_CMD_DATE            = "inspect_cmd_date";
	public static final String COL_INSP_CMD_NOTE            = "inspect_cmd_note";
	public static final String COL_INSP_CMD_NAME            = "inspect_cmd_name";
	public static final String COL_INSP_CMD_STAFF_ID        = "inspect_cmd_staff_id";

	public static final String COL_EXEC_ID                  = "exec_id";
	public static final String COL_EXEC_STATUS              = "exec_status";
	public static final String COL_EXEC_DATE                = "exec_date";
	public static final String COL_EXEC_NOTE                = "exec_note";
	public static final String COL_EXEC_NAME                = "exec_name";
	public static final String COL_EXEC_STAFF_ID            = "exec_staff_id";

	public static final String COL_RESOURCE_CODE            = "resource_code";
	public static final String COL_INTERNAL_STOCK_ID        = "internal_stock_id";
        
	public static final String COL_DELIVERER_STOCK_NAME     = "deliverer_stock_name";
	public static final String COL_STOCK_NAME               = "stock_name";
	public static final String COL_EXEC_STAFF_NAME          = "exec_staff_name";
	private boolean mblnSwitchStockAndDeliver = false;

	/////////////////////////////////////////////////////////////////
/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public Resultset2StockTransEntity(ResultSet pResultSet) throws SQLException
	{
		super(pResultSet);
	}

	public void switchStock2DeliverStock(boolean pbln)
	{
		mblnSwitchStockAndDeliver = pbln;
	}

	/////////////////////////////////////////////////////////////////
/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	protected SingleEntity toSingleEntity() throws SQLException
	{
		StockTransactionEntity stockTrans = new StockTransactionEntity();

		stockTrans.setID(getString(COL_STOCK_TRANS_ID));

		if(!mblnSwitchStockAndDeliver)
		{
			stockTrans.setStockID(getString(COL_STOCK_ID));
			stockTrans.setDelivererStockID(getString(COL_DELIVERER_STOCK_ID));
		}
		else
		{
			stockTrans.setStockID(getString(COL_DELIVERER_STOCK_ID));
			stockTrans.setDelivererStockID(getString(COL_STOCK_ID));
		}
		stockTrans.setType(getString(COL_TYPE));
		stockTrans.setReasonID(getString(COL_REASON_ID));
		stockTrans.setStatus(getString(COL_STATUS));

		stockTrans.setCmdID(getString(COL_CMD_ID));
		stockTrans.setCmdCode(getString(COL_CMD_CODE));
		stockTrans.setCmdStatus(getString(COL_CMD_STATUS));
		stockTrans.setCmdDate(getString(COL_CMD_DATE));
		stockTrans.setCmdName(getString(COL_CMD_NAME));
		stockTrans.setCmdNote(getString(COL_CMD_NOTE));
		stockTrans.setCmdStaffID(getString(COL_CMD_STAFF_ID));
		stockTrans.setDesDate(getString(COL_DES_DATE));
		stockTrans.setDesStaffID(getString(COL_DES_STAFF_ID));
		stockTrans.setGetFromStockTransID(getString(COL_GET_FROM_STOCK_TRANS_ID));
		stockTrans.setReasonCode(getString(COL_REASON_CODE));

		stockTrans.setInspectCmdID(getString(COL_INSP_CMD_ID));
		stockTrans.setInspectCmdCode(getString(COL_INSP_CMD_CODE));
		stockTrans.setInspectCmdStatus(getString(COL_INSP_CMD_STATUS));
		stockTrans.setInspectCmdDate(getString(COL_INSP_CMD_DATE));
		stockTrans.setInspectCmdNote(getString(COL_INSP_CMD_NOTE));
		stockTrans.setInspectCmdStaffID(getString(COL_INSP_CMD_STAFF_ID));

		stockTrans.setExecID(getString(COL_EXEC_ID));
		stockTrans.setExecStatus(getString(COL_EXEC_STATUS));
		stockTrans.setExecDate(getString(COL_EXEC_DATE));
		stockTrans.setExecNote(getString(COL_EXEC_NOTE));
		stockTrans.setExecStaffID(getString(COL_EXEC_STAFF_ID));
		stockTrans.setExecName(getString(COL_EXEC_NAME));

		stockTrans.setResourceCode(getString(COL_RESOURCE_CODE));
		stockTrans.setInternalStockId(getString(COL_INTERNAL_STOCK_ID));
//                TamND11 add
		stockTrans.setDelivererStockName(getString(COL_DELIVERER_STOCK_NAME));
		stockTrans.setStockName(getString(COL_STOCK_NAME));
		stockTrans.setExecStaffName(getString(COL_EXEC_STAFF_NAME));
		return stockTrans;
	}
}
