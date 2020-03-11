package vn.com.fis.entity.css;

import java.util.Vector;

public class GoodEntity extends SingleEntity
{
	// Size of entity
	public static final int SIZE = 14;

	// Class code to encrypt to DDTP
	public static final String CLASS_CODE = "Good";

	// Element position to implement with table
	public static final int POS_GOODS_ID 		= 0;
	public static final int POS_GOODS_CODE		= 1;
	public static final int POS_GOODS_GROUP_ID	= 2;
	public static final int POS_GOODS_TYPE 		= 3;
	public static final int POS_CHECK_SERIAL	= 4;
	public static final int POS_NAME	 		= 5;
	public static final int POS_UNIT		 	= 6;
	public static final int POS_STATUS	 		= 7;
	public static final int POS_NOTE	 		= 8;
	public static final int POS_UNIT_NAME 		= 9;
    public static final int POS_CHECK_QUANTITY  = 10;
    public static final int POS_CHECK_CONTRA    = 11;
	public static final int POS_CHECK_WARRANTY  = 12;
	public static final int POS_RESOURCE_CODE   = 13;

	// Check serial or not
	public static final String CHECK_SERIAL = "1";
	public static final String NOT_CHECK_SERIAL = "0";
	public static final String CHECK_QUANTITY = "1";
    public static final String CHECK_CONTRA = "1";
	public static final String CHECK_WARRANTY = "1";


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
	public GoodEntity()
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
	public GoodEntity(Vector pvtData)
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
	public void setID(String pstrID)
	{
		setElementAt(pstrID, POS_GOODS_ID);
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
	public String getID()
	{
		return getStrElementAt(POS_GOODS_ID);
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
	public void setCode(String pstrCode)
	{
		setElementAt(pstrCode, POS_GOODS_CODE);
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
	public String getCode()
	{
		return getStrElementAt(POS_GOODS_CODE);
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
	public void setGroupID(String pstrGroupID)
	{
		setElementAt(pstrGroupID, POS_GOODS_GROUP_ID);
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
	public String getGroupID()
	{
		return getStrElementAt(POS_GOODS_GROUP_ID);
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
	public void setType(String pstrType)
	{
		setElementAt(pstrType, POS_GOODS_TYPE);
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
	public String getType()
	{
		return getStrElementAt(POS_GOODS_TYPE);
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
	public void setName(String pstrName)
	{
		setElementAt(pstrName, POS_NAME);
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
	public String getName()
	{
		return getStrElementAt(POS_NAME);
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
	public void setUnit(String pstrUnit)
	{
		setElementAt(pstrUnit, POS_UNIT);
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
	public String getUnit()
	{
		return getStrElementAt(POS_UNIT);
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
	public void setStatus(String pstrStatus)
	{
		setElementAt(pstrStatus, POS_STATUS);
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
	public String getStatus()
	{
		return getStrElementAt(POS_STATUS);
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
	public boolean isCheckSerial()
	{
		String strCheckSerial = getStrElementAt(POS_CHECK_SERIAL);
		if (strCheckSerial == null)
			return false;
		else
			return strCheckSerial.equals(CHECK_SERIAL);
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
	public void setCheckSerial(boolean pblnCheckSerial)
	{
		if (pblnCheckSerial)
			setElementAt(CHECK_SERIAL, POS_CHECK_SERIAL);
		else
			setElementAt(NOT_CHECK_SERIAL, POS_CHECK_SERIAL);
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
    public void setCheckSerial(String pstrCheckSerial)
    {
        setElementAt(pstrCheckSerial, POS_CHECK_SERIAL);
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
	public String getCheckSerial()
	{
		return getStrElementAt(POS_CHECK_SERIAL);
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
        setElementAt(pstrNote, POS_NOTE);
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

    public boolean matchFilter(GoodEntity pGood)
    {
        boolean blnMatch1 = true;
        boolean blnMatch2 = true;
        if ((getCode() != null) && (pGood.getCode() != null))
            blnMatch1 = (pGood.getCode().toUpperCase().indexOf(getCode().toUpperCase()) >= 0);
        if ((getName() != null) && (pGood.getName() != null))
            blnMatch2 = (pGood.getName().toUpperCase().indexOf(getName().toUpperCase()) >= 0);
        return (blnMatch1 && blnMatch2);
    }

    public String getKey()
    {
        return getID();
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
    public void setUnitName(String pstrUnitName)
    {
        setElementAt(pstrUnitName, POS_UNIT_NAME);
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
    public String getUnitName()
    {
        return getStrElementAt(POS_UNIT_NAME);
    }

    public void setCheckQuantity(String pstrCheckQuantity)
    {
        setElementAt(pstrCheckQuantity, POS_CHECK_QUANTITY);
    }

	public String getCheckQuantity()
	{
		return getStrElementAt(POS_CHECK_QUANTITY);
	}

	public String getCheckWarranty()
	{
		return getStrElementAt(POS_CHECK_WARRANTY);
	}

    public boolean isCheckQuantity()
    {
        String strCheckQuantity = getStrElementAt(POS_CHECK_QUANTITY);
        if (strCheckQuantity == null)
            return true;
        else
            return strCheckQuantity.equals(CHECK_QUANTITY);

    }

    public void setCheckContra(String pstrCheckContra)
    {
        setElementAt(pstrCheckContra, POS_CHECK_CONTRA);
    }

	public void setCheckWarranty(String pstrCheckWarranty)
	{
		setElementAt(pstrCheckWarranty,POS_CHECK_WARRANTY);
	}

    public String getCheckContra()
    {
        return getStrElementAt(POS_CHECK_CONTRA);
    }


    public boolean isCheckContra()
    {
        String strCheckQuantity = getStrElementAt(POS_CHECK_CONTRA);
        if (strCheckQuantity == null)
            return true;
        else
            return strCheckQuantity.equals(CHECK_CONTRA);
    }

	public boolean isCheckWarranty()
	{
		String strCheckQuantity = getStrElementAt(POS_CHECK_WARRANTY);
		if(strCheckQuantity == null)
			return true;
		else
			return strCheckQuantity.equals(CHECK_WARRANTY);

	}

	/**
	 * getResourceCode
	 */
	public void setResourceCode(String pstrResourceCode)
	{
		setElementAt(pstrResourceCode,POS_RESOURCE_CODE);
	}
	public String getResourceCode()
	{
		return getStrElementAt(POS_RESOURCE_CODE);
	}
}
