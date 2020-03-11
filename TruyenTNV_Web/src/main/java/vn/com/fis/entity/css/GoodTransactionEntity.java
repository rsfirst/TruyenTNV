package vn.com.fis.entity.css;

import java.util.Vector;

public class GoodTransactionEntity extends SingleEntity
{
	// Size of entity
	public static final int SIZE = 19;

	// Class code to encrypt to DDTP
	public static final String CLASS_CODE = "GoodTransaction";

	// Element position to implement with table
	public static final int POS_STOCK_TRANSACTION_ID    = 0;
	public static final int POS_GOOD_ID                 = 1;
	public static final int POS_STATE_ID                = 2;
	public static final int POS_QUANTITY_ISSUE          = 3;
	public static final int POS_QUANTITY_EFFECT         = 4;
	public static final int POS_NOTE                    = 5;
	public static final int POS_SERIAL                  = 6;
	public static final int POS_BLOCK                   = 7;
	public static final int POS_TYPE                    = 8;
	public static final int POS_CHECK_SERIAL            = 9;
	public static final int POS_CHECK_WARRANTY          = 10;
	public static final int POS_SERIAL_IS_DENIED        = 11;
	public static final int POS_INTERNAL_STOCK_ID       = 12;
	public static final int POS_RESOURCE_CODE           = 13;
	public static final int POS_BEGIN_QUANTITY          = 14;

	//CuongBV dung de xac dinh doi voi hang khong co Serial: Hang cap tren nhan ve + Hang cap tren tu choi
	public static final int POS_TOTAL_QUANTITY          = 15;
        
        public static final int POS_GOOD_CODE                = 16;
        public static final int POS_NAME                     = 17;
        public static final int POS_PRIMARY_UNIT_OF_MEASURE  = 18;


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
	public GoodTransactionEntity()
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
	public GoodTransactionEntity(Vector pvtData)
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
	public void setTransactionID(String pstrTransactionID)
	{
		setElementAt(pstrTransactionID,POS_STOCK_TRANSACTION_ID);
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
	public String getTransactionID()
	{
		return getStrElementAt(POS_STOCK_TRANSACTION_ID);
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
	public void setGoodID(String pstrGoodID)
	{
		setElementAt(pstrGoodID,POS_GOOD_ID);
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
	public void setGood(GoodEntity pGood)
	{
		setGoodID(pGood.getID());
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
	public String getGoodID()
	{
		return getStrElementAt(POS_GOOD_ID);
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
	public void setStateID(String pstrStateID)
	{
		setElementAt(pstrStateID,POS_STATE_ID);
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
	public void setState(StateEntity pState)
	{
		setStateID(pState.getID());
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
	public String getStateID()
	{
		return getStrElementAt(POS_STATE_ID);
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
	public void setQuantityIssue(int pintQuantity)
	{
		setElementAt("" + pintQuantity,POS_QUANTITY_ISSUE);
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
	public void setQuantityIssue(String pstrQuantity)
	{
		setElementAt(pstrQuantity,POS_QUANTITY_ISSUE);
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
	public void setNullQuantityIssue()
	{
		setElementAt(null,POS_QUANTITY_ISSUE);
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
	public String getStrQuantityIssue()
	{
		return getStrElementAt(POS_QUANTITY_ISSUE);
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
	public int getQuantityIssue()
	{
		String strQuantity = getStrQuantityIssue();
		if(strQuantity == null)
			return 0;
		else
			return Integer.parseInt(strQuantity);
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
	public void setQuantityEffect(int pintQuantity)
	{
		setElementAt("" + pintQuantity,POS_QUANTITY_EFFECT);
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
	public void setQuantityEffect(String pintQuantity)
	{
		setElementAt(pintQuantity,POS_QUANTITY_EFFECT);
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
	public void setNullQuantityEffect()
	{
		setElementAt(null,POS_QUANTITY_EFFECT);
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
	public String getStrQuantityEffect()
	{
		return getStrElementAt(POS_QUANTITY_EFFECT);
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
	public int getQuantityEffect()
	{
		String strQuantity = getStrQuantityEffect();
		if(strQuantity == null)
			return 0;
		else
			return Integer.parseInt(strQuantity);
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
	public void setNote(String pstrNote)
	{
		setElementAt(pstrNote,POS_NOTE);
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
	public String getNote()
	{
		return getStrElementAt(POS_NOTE);
	}

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public String getKey()
	{
		return this.getGoodID() + "$" + this.getStateID();
	}

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public TransactionSerialListEntity getTransactionSerialList()
	{
		Object obj = getVector().elementAt(POS_SERIAL);

		if((obj == null) || (!(obj instanceof Vector)))
		{
			TransactionSerialListEntity serialList = new TransactionSerialListEntity();
			setTransactionSerialList(serialList);
			return serialList;
		}

		TransactionSerialListEntity serialList = new TransactionSerialListEntity((Vector)getVector().elementAt(GoodTransactionEntity.POS_SERIAL));
		return serialList;
	}
	public TransactionSerialListEntity getTransactionSerialListIsDenied()
	{
		Object obj = getVector().elementAt(POS_SERIAL_IS_DENIED);

		if((obj == null) || (!(obj instanceof Vector)))
		{
			TransactionSerialListEntity serialList = new TransactionSerialListEntity();
			setTransactionSerialList(serialList);
			return serialList;
		}

		TransactionSerialListEntity serialList = new TransactionSerialListEntity((Vector)getVector().elementAt(GoodTransactionEntity.POS_SERIAL_IS_DENIED));
		return serialList;
	}
	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public void setTransactionSerialList(TransactionSerialListEntity transSerialList)
	{
		setElementAt(transSerialList.getVector(),POS_SERIAL);
	}
	public void setTransactionSerialListIsDenied(TransactionSerialListEntity transSerialList)
	{
		setElementAt(transSerialList.getVector(),POS_SERIAL_IS_DENIED);
	}
	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public BlockListEntity getBlockList()
	{
		Object obj = getVector().elementAt(POS_BLOCK);

		if((obj == null) || (!(obj instanceof Vector)))
		{
			BlockListEntity blockList = new BlockListEntity();
			setBlockList(blockList);
			return blockList;
		}

		BlockListEntity blockList = new BlockListEntity((Vector)getVector().elementAt(GoodTransactionEntity.POS_BLOCK));
		return blockList;
	}

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public void setBlockList(BlockListEntity pBlockList)
	{
		setElementAt(pBlockList.getVector(),POS_BLOCK);
	}

	public void clearBlockList()
	{
		if(getBlockList().size() > 0)
		{
			setBlockList(new BlockListEntity());
			setQuantityIssue(0);
		}
	}

	public void clearSerialList()
	{
		if(getTransactionSerialList().size() > 0)
		{
			setTransactionSerialList(new TransactionSerialListEntity());
			setQuantityIssue(0);
		}
	}

	public void setType(String pstrType)
	{
		setElementAt(pstrType,POS_TYPE);
	}

	public String getType()
	{
		return getStrElementAt(POS_TYPE);
	}
	////////////////////////////////////////////////////////////
	public void setCheckSerial(String pstrCheckSerial)
	{
		setElementAt(pstrCheckSerial,POS_CHECK_SERIAL);
	}

	public String getCheckSerial()
	{
		return getStrElementAt(POS_CHECK_SERIAL);
	}
	/////////////////////////////////////////////////////////////

	public void setCheckWarranty(String pstrCheckWarranty)
	{
		setElementAt(pstrCheckWarranty,POS_CHECK_WARRANTY);
	}

	public String getCheckWarranty()
	{
		return getStrElementAt(POS_CHECK_WARRANTY);
	}
	////////////////////////////////////////////////////////////
	public void setResourceCode(String pstrResourceCode)
	{
		setElementAt(pstrResourceCode,POS_RESOURCE_CODE);
	}

	public String getResourceCode()
	{
		return getStrElementAt(POS_RESOURCE_CODE);
	}

	public void setInternalSotckId(String pstrInternalStockId)
	{
		setElementAt(pstrInternalStockId,POS_INTERNAL_STOCK_ID);
	}

	public String getInternalStockId()
	{
		return getStrElementAt(POS_INTERNAL_STOCK_ID);
	}

	public void setBeginQuantity(String pstrBeginQuantity)
	{
		setElementAt(pstrBeginQuantity,POS_BEGIN_QUANTITY);
	}

	public String getBeginQuantity()
	{
		return getStrElementAt(POS_TOTAL_QUANTITY);
	}
	public void setTotalQuantity(String pstrTotalQuantity)
	{
		setElementAt(pstrTotalQuantity,POS_TOTAL_QUANTITY);
	}

	public String getTotalQuantity()
	{
		return getStrElementAt(POS_TOTAL_QUANTITY);
	}
        
//        TamND11 add
        public void setGoodCode(String pstrGoodCode)
	{
		setElementAt(pstrGoodCode,POS_GOOD_CODE);
	}

	public String getGoodCode()
	{
		return getStrElementAt(POS_GOOD_CODE);
	}
        public void setName(String pstrName)
	{
		setElementAt(pstrName,POS_NAME);
	}

	public String getName()
	{
		return getStrElementAt(POS_NAME);
	}
        public void setPrimaryUnitOfMeasure(String pstrPrimaryUnitOfMeasure)
	{
		setElementAt(pstrPrimaryUnitOfMeasure,POS_PRIMARY_UNIT_OF_MEASURE);
	}

	public String getPrimaryUnitOfMeasure()
	{
		return getStrElementAt(POS_PRIMARY_UNIT_OF_MEASURE);
	}
        
//        TamND11 End add
	// Lay tong so luong cac serial chua duoc cap phieu bao hanh
	public String getNoWarrantyQuantity()
	{
		int intQuantity = 0;
		for(int j = 0;j < getTransactionSerialList().size();j++)
		{
			// Insert warranty

			Vector vtTransSerialList = getTransactionSerialList().getVector();
			if (vtTransSerialList == null || vtTransSerialList.size() <= 0)
			{
				return "0";
			}

			TransactionSerialWarrantyEntity tranSerialWarr = new TransactionSerialWarrantyEntity((Vector)getTransactionSerialList().getVector().
																					 get(j));
			if (tranSerialWarr.getWarrantyReadOnly().equalsIgnoreCase("false"))
			{
				intQuantity++;
			}
		}

		return String.valueOf(intQuantity);
	}
}
