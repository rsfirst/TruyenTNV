package vn.com.fis.entity.css;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ResultSet2GoodTransactionEntity extends Resultset2Entity
{
	public static final String COL_STOCK_TRANS_ID    = "stock_trans_id";
	public static final String COL_GOODS_ID          = "goods_id";
	public static final String COL_STATE_ID          = "state_id";
	public static final String COL_QUANTITY_ISSUE    = "quantity_issue";
	public static final String COL_QUANTITY_EFFECT   = "quantity_effect";
	public static final String COL_NOTE              = "note";
	public static final String COL_CHECK_SERIAL      = "check_serial";
	public static final String COL_CHECK_WARRANTY    = "check_warranty";
	public static final String COL_INTERNAL_STOCK_ID = "internal_stock_id";
	public static final String COL_RESOURCE_CODE     = "resource_code";
	public static final String COL_BEGIN_QUANTITY    = "begin_quantity";

	//CuongBV dung de xac dinh doi voi hang khong co Serial: Hang cap tren nhan ve + Hang cap tren tu choi
	public static final String COL_TOTAL_QUANTITY    = "total_quantity";

    public static final String COL_GOOD_CODE    = "good_code";
    public static final String COL_NAME    = "name";
    public static final String COL_PRIMARY_UNIT_OF_MEASURE    = "primary_unit_of_measure";

/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author VinhBT
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public ResultSet2GoodTransactionEntity(ResultSet pResultSet) throws Exception
	{
		super(pResultSet);
	}

	/////////////////////////////////////////////////////////////////
/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author VinhBT
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	protected SingleEntity toSingleEntity() throws SQLException
	{
		GoodTransactionEntity goodTrans = new GoodTransactionEntity();
		goodTrans.setQuantityIssue(getString(COL_QUANTITY_ISSUE));
		goodTrans.setGoodID(getString(COL_GOODS_ID));
		goodTrans.setStateID(getString(COL_STATE_ID));
		goodTrans.setTransactionID(getString(COL_STOCK_TRANS_ID));
		goodTrans.setQuantityEffect(getString(COL_QUANTITY_EFFECT));
		goodTrans.setNote(getString(COL_NOTE));
		goodTrans.setCheckSerial(getString(COL_CHECK_SERIAL));
		goodTrans.setCheckWarranty(getString(COL_CHECK_WARRANTY));
		goodTrans.setInternalSotckId(getString(COL_INTERNAL_STOCK_ID));
		goodTrans.setResourceCode(getString(COL_RESOURCE_CODE));
		goodTrans.setBeginQuantity(getString(COL_BEGIN_QUANTITY));
		goodTrans.setTotalQuantity(getString(COL_TOTAL_QUANTITY));

                goodTrans.setGoodCode(getString(COL_GOOD_CODE));
                goodTrans.setName(getString(COL_NAME));
                goodTrans.setPrimaryUnitOfMeasure(getString(COL_PRIMARY_UNIT_OF_MEASURE));

		return goodTrans;
	}
}
