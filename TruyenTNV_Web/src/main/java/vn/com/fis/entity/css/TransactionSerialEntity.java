package vn.com.fis.entity.css;

import java.util.Vector;

public class TransactionSerialEntity extends SingleEntity implements Comparable
{
	// Size of entity
	public static final int SIZE = 13;

	// Class code to encrypt to DDTP
	public static final String CLASS_CODE = "TransactionSerial";

	// Element position to implement with table
	public static final int POS_ROW_NUM = 0;
	public static final int POS_FROM_NUMBER = 1;
	public static final int POS_TO_NUMBER = 2;
	public static final int POS_QUANTITY = 3;
	public static final int POS_FROM = 4;
	public static final int POS_TO = 5;
	public static final int POS_STOCK_TRANS_ID = 6;
	public static final int POS_GOOD_ID = 7;
	public static final int POS_STATE_ID = 8;
	public static final int POS_PARTNER_ID = 9;
	public static final int POS_INTERNAL_STOCK_ID = 10;
	public static final int POS_WARRANTY_NO = 11;
	public static final int POS_WARRANTY_ID = 12;


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
	public TransactionSerialEntity()
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
	public TransactionSerialEntity(Vector pvtData)
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
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public void setTransID(String pstrTransID)
	{
		setElementAt(pstrTransID,POS_STOCK_TRANS_ID);
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
	public String getTransID()
	{
		return getStrElementAt(POS_STOCK_TRANS_ID);
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
	 * @since  11/04/2006
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
	 * @since  11/04/2006
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
	 * @since  11/04/2006
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
	 * @since  11/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public void setFromSerial(String pstrFromSerial)
	{
		setElementAt(pstrFromSerial,POS_FROM);
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
	public String getFromSerial()
	{
		return getStrElementAt(POS_FROM);
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
	public void setPartnerID(String pstrPartnerID)
	{
		setElementAt(pstrPartnerID,POS_PARTNER_ID);
	}
	public void setRownum(String pstrRownum)
	{
		setElementAt(pstrRownum,POS_ROW_NUM);
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
	public String getPartnerID()
	{
		return getStrElementAt(POS_PARTNER_ID);
	}

	public void setInternalStockID(String pstrInternalStockID)
	{
		setElementAt(pstrInternalStockID, POS_INTERNAL_STOCK_ID);
	}

	public String getInternalStockID()
	{
		return getStrElementAt(POS_INTERNAL_STOCK_ID);
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
	public void setToSerial(String pstrToSerial)
	{
		setElementAt(pstrToSerial,POS_TO);
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
	public String getToSerial()
	{
		return getStrElementAt(POS_TO);
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
	public void setQuantity(String pstrQuantity)
	{
		setElementAt(pstrQuantity,POS_QUANTITY);
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
	public String getStrQuantity()
	{
		return getStrElementAt(POS_QUANTITY);
	}

	/////////////////////////////////////////////////////////////////
	public void setWarrantyNo(String pstrWarrantyNo)
	{
		setElementAt(pstrWarrantyNo,POS_WARRANTY_NO);
	}
	/////////////////////////////////////////////////////////////////
	public String getWarrantyNo()
	{
		return getStrElementAt(POS_WARRANTY_NO);
	}

	/////////////////////////////////////////////////////////////////
	public void setWarrantyID(String pstrWarrantyID)
	{
		setElementAt(pstrWarrantyID,POS_WARRANTY_ID);
	}
	/////////////////////////////////////////////////////////////////
	public String getWarrantyID()
	{
		return getStrElementAt(POS_WARRANTY_ID);
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
	public void setFromNumber(String pstrFrom)
	{
		setElementAt(pstrFrom,POS_FROM_NUMBER);
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
	public String getFromNumber()
	{
		return getStrElementAt(POS_FROM_NUMBER);
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
	public void setToNumber(String pstrTo)
	{
		setElementAt(pstrTo,POS_TO_NUMBER);
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
	public String getToNumber()
	{
		return getStrElementAt(POS_TO_NUMBER);
	}
	public String getRownum()
	{
		return getStrElementAt(POS_ROW_NUM);
	}
	/**
	 * Description: Compare to other object
	 * @param o Object
	 * @return int (0: Bang, 1: Khong bang)
	 */
	public int compareTo(Object o)
	{
		if(!(o instanceof TransactionSerialEntity))
			return 1;   //Khong bang

		TransactionSerialEntity other = (TransactionSerialEntity)o;

		if(this.getVector() == null && other.getVector() == null)
			return 0;   //Neu ca 2 doi tuong la rong thi bang
		if(this.getVector() == null || other.getVector() == null)
			return 1;   //Neu 1 trong 2 cai rong thi khong bang
		if(this.getVector().size() != other.getVector().size())
			return 1;   //Neu size khac nhau thi khong bang
		for(int i = 0; i < this.getVector().size(); i++)
		{
			Object objA = this.getVector().get(i);
			Object objB = other.getVector().get(i);

			if (objA == null && objB == null)
			{
				return 0;
			}
			if (objA == null || objB == null)
			{
				return 1;
			}
			if(!this.getVector().elementAt(i).equals(other.getVector().elementAt(i)))
				return 1;  //Moi gia tri trong vector khac nhau thi khong bang
		}
		return 0; //Bang
	}
}
