package vn.com.fis.entity.css;

import java.util.Vector;

public class TransactionSerialWarrantyEntity extends TransactionSerialEntity{
	public static final int SIZE = 28;

	public static final int POS_WARR_ID = 10;
	public static final int POS_WARR_GOODS_ID = 11;
	public static final int POS_WARR_ESN = 12;
	public static final int POS_WARR_SERIAL_1 = 13;
	public static final int POS_WARR_SERIAL_2 = 14;
	public static final int POS_WARR_SERIAL_3 = 15;
	public static final int POS_WARR_SERIAL_4 = 16;
	public static final int POS_WARR_SERIAL_5 = 17;
	public static final int POS_WARR_NO = 18;
	public static final int POS_WARR_READ_ONLY = 19;
	public static final int POS_WARR_CREATE_DATETIME = 20;
	public static final int POS_WARR_EXPIRED_DATETIME = 21;
	public static final int POS_GOODS_CODE = 22;
	public static final int POS_ADDRESS = 23;
	public static final int POS_COLOR = 24;
	public static final int POS_CREATE_DATE = 25;

	// Constructor
	public TransactionSerialWarrantyEntity()
	{
		super();
	}

	///////////////////////////////////////////////////////////
	public TransactionSerialWarrantyEntity(Vector pvtData)
	{
		super(pvtData);
	}

	protected void init()
	{
		mstrClassCode = CLASS_CODE;
		mintSize = SIZE;
	}

	//////////////////////////////////////////////////////////
	public String getWarrantyID()
	{
		return getStrElementAt(POS_STATE_ID);
	}

	public void setWarrantyID(String pstrWarrID)
	{
		setElementAt(pstrWarrID,POS_WARR_ID);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantyESN()
	{
		return getStrElementAt(POS_WARR_ESN);
	}

	public void setWarrantyESN(String pstrWarrESN)
	{
		setElementAt(pstrWarrESN,POS_WARR_ESN);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantyGoodsID()
	{
		return getStrElementAt(POS_WARR_GOODS_ID);
	}

	public void setWarrantyGoodsID(String pstrWarrantyGoodsID)
	{
		setElementAt(pstrWarrantyGoodsID,POS_WARR_GOODS_ID);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantySerial1()
	{
		return getStrElementAt(POS_WARR_SERIAL_1);
	}

	public void setWarrantySerial1(String pstrWarrantySerial1)
	{
		setElementAt(pstrWarrantySerial1,POS_WARR_SERIAL_1);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantySerial2()
	{
		return getStrElementAt(POS_WARR_SERIAL_2);
	}

	public void setWarrantySerial2(String pstrWarrantySerial2)
	{
		setElementAt(pstrWarrantySerial2,POS_WARR_SERIAL_2);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantySerial3()
	{
		return getStrElementAt(POS_WARR_SERIAL_3);
	}

	public void setWarrantySerial3(String pstrWarrantySerial3)
	{
		setElementAt(pstrWarrantySerial3,POS_WARR_SERIAL_3);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantySerial4()
	{
		return getStrElementAt(POS_WARR_SERIAL_4);
	}

	public void setWarrantySerial4(String pstrWarrantySerial4)
	{
		setElementAt(pstrWarrantySerial4,POS_WARR_SERIAL_4);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantySerial5()
	{
		return getStrElementAt(POS_WARR_SERIAL_5);
	}

	public void setWarrantySerial5(String pstrWarrantySerial5)
	{
		setElementAt(pstrWarrantySerial5,POS_WARR_SERIAL_5);
	}

	//////////////////////////////////////////////////////////
	public String getWarrantyNo()
	{
		return getStrElementAt(POS_WARR_NO);
	}

	public void setWarrantyNo(String pstrWarrantyNo)
	{
		setElementAt(pstrWarrantyNo,POS_WARR_NO);
	}
	public String getWarrantyReadOnly()
	{
		return getStrElementAt(POS_WARR_READ_ONLY);
	}

	public void setWarrantyReadOnly(String pstrWarrantyReadonly)
	{
		setElementAt(pstrWarrantyReadonly,POS_WARR_READ_ONLY);
	}
	//////////////////////////////////////////////////////////
	public String getWarrantyCreateDateTime()
	{
		return getStrElementAt(POS_WARR_CREATE_DATETIME);
	}

	public void setWarrantyCreateDateTime(String pstr_POS_WARR_CREATE_DATETIME )
	{
		setElementAt(pstr_POS_WARR_CREATE_DATETIME,POS_WARR_CREATE_DATETIME);
	}
	//////////////////////////////////////////////////////////
	public String getWarrantyExpiredDateTime()
	{
		return getStrElementAt(POS_WARR_EXPIRED_DATETIME);
	}

	public void setWarrantyExpiredDateTime(String pstr_POS_WARR_EXPIRED_DATETIME)
	{
		setElementAt(pstr_POS_WARR_EXPIRED_DATETIME,POS_WARR_EXPIRED_DATETIME);
	}
	//////////////////////////////////////////////////////////
	public String getGoodsCode()
	{
		return getStrElementAt(POS_GOODS_CODE);
	}

	public void setGoodsCode(String pstr_POS_GOODS_CODE)
	{
		setElementAt(pstr_POS_GOODS_CODE,POS_GOODS_CODE);
	}
	//////////////////////////////////////////////////////////
	public String getAddress()
	{
		return getStrElementAt(POS_ADDRESS);
	}

	public void setAddress(String pstr_POS_ADDRESS)
	{
		setElementAt(pstr_POS_ADDRESS,POS_ADDRESS);
	}
	//////////////////////////////////////////////////////////
	public String getColor()
	{
		return getStrElementAt(POS_COLOR);
	}

	public void setColor(String pstr_POS_COLOR)
	{
		setElementAt(pstr_POS_COLOR,POS_COLOR);
	}
	//////////////////////////////////////////////////////////
	public String getCreateDate()
	{
		return getStrElementAt(POS_CREATE_DATE);
	}

	public void setCreateDate(String pstr_POS_CREATE_DATE)
	{
		setElementAt(pstr_POS_CREATE_DATE,POS_CREATE_DATE);
	}	

}
