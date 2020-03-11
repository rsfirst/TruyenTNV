package vn.com.fis.entity.css;

import java.util.Vector;

public class BlockEntity extends SingleEntity {
	
	// Size of entity
	public static final int SIZE = 13;

	// Class code to encrypt to DDTP
	public static final String CLASS_CODE = "Block";

	// Element position to implement with table
	public static final int POS_ROW_NUM = 0;
	public static final int POS_FROM_NUMBER = 1;
	public static final int POS_TO_NUMBER = 2;
	public static final int POS_QUANTITY = 3;
	public static final int POS_BLOCK_ID = 4;
	public static final int POS_STATUS = 5;
	public static final int POS_CREATE_DATE = 6;
	public static final int POS_END_DATE = 7;
	public static final int POS_SHOP_ID = 8;
	public static final int POS_STAFF_ID = 9;
	public static final int POS_STOCK_TRANS_ID = 10;
	public static final int POS_BLOCK_TYPE = 11;
	public static final int POS_BLOCK_AMOUNT_TYPE = 12;


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
	public BlockEntity()
	{
		super();
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
	public BlockEntity(Vector pvtData)
	{
		super(pvtData);
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
	protected void init()
	{
		mstrClassCode = CLASS_CODE;
		mintSize = SIZE;
	}

	public void setBlockId(String pstrBlockId)
	{
		setElementAt(pstrBlockId,POS_BLOCK_ID);
	}

	public void setStatus(String pstrStatus)
	{
		setElementAt(pstrStatus,POS_STATUS);
	}

	public void setCreateDate(String pstrCreateDate)
	{
		setElementAt(pstrCreateDate,POS_CREATE_DATE);
	}

	public void setEndDate(String pstrEndDate)
	{
		setElementAt(pstrEndDate,POS_END_DATE);
	}

	public void setShopId(String pstrShopId)
	{
		setElementAt(pstrShopId,POS_SHOP_ID);
	}

	public void setStaffId(String pstrStaffId)
	{
		setElementAt(pstrStaffId,POS_STAFF_ID);
	}

	public void setStockTransId(String pstrStockTransId)
	{
		setElementAt(pstrStockTransId,POS_STOCK_TRANS_ID);
	}

	public void setFromNumber(String pstrFromNumber)
	{
		setElementAt(pstrFromNumber,POS_FROM_NUMBER);
	}

	public void setToNumber(String pstrToNumber)
	{
		setElementAt(pstrToNumber,POS_TO_NUMBER);
	}

	public void setQuantity(String pstrQuantity)
	{
		setElementAt(pstrQuantity,POS_QUANTITY);
	}
	public void setBlockType(String pstrBlockType)
	{
		setElementAt(pstrBlockType,POS_BLOCK_TYPE);
	}
	public void setBlockAmountType(String pstrBlockAmountType)
	{
		setElementAt(pstrBlockAmountType,POS_BLOCK_AMOUNT_TYPE);
	}

	public void setRownum(String pstrRownum)
	{
		setElementAt(pstrRownum,POS_ROW_NUM);
	}

	public String getBlockId()
	{
		return getStrElementAt(POS_BLOCK_ID);
	}

	public String getStatus()
	{
		return getStrElementAt(POS_STATUS);
	}

	public String getCreateDate()
	{
		return getStrElementAt(POS_CREATE_DATE);
	}

	public String getEndDate()
	{
		return getStrElementAt(POS_END_DATE);
	}

	public String getShopId()
	{
		return getStrElementAt(POS_SHOP_ID);
	}

	public String getStaffId()
	{
		return getStrElementAt(POS_STAFF_ID);
	}

	public String getStockTransId()
	{
		return getStrElementAt(POS_STOCK_TRANS_ID);
	}

	public String getFromNumber()
	{
		return getStrElementAt(POS_FROM_NUMBER);
	}

	public String getToNumber()
	{
		return getStrElementAt(POS_TO_NUMBER);
	}

	public String getQuantity()
	{
		return getStrElementAt(POS_QUANTITY);
	}
	public String getBlockType()
	{
		return getStrElementAt(POS_BLOCK_TYPE);
	}
	public String getBlockAmountType()
	{
		return getStrElementAt(POS_BLOCK_AMOUNT_TYPE);
	}
}
