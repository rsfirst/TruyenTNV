package vn.com.fis.entity.css;

import java.util.Vector;

public class StockEntity extends SingleEntity
{

	// Size of entity
	public static final int SIZE = 15;

	// Class code to encrypt to DDTP
	public static final String CLASS_CODE = "Stock";

	// Element position to implement with table
	public static final int POS_STOCK_ID 		= 0;
	public static final int POS_SHOP_ID	        = 1;
	public static final int POS_STAFF_ID	    = 2;
	public static final int POS_SHOP_PARENT_ID	= 3;
	public static final int POS_CODE 			= 4;
	public static final int POS_NAME 			= 5;
	public static final int POS_TYPE 			= 6;
	public static final int POS_STATUS 			= 7;
	public static final int POS_ADDRESS 		= 8;
	public static final int POS_STOCK_OR_STAFF 	= 9;
	public static final int POS_NODE_CODE 		= 10;
	public static final int POS_PARENT_CODE 	= 11;
	public static final int POS_COMPANY 	    = 12;
	public static final int POS_TIN 	        = 13;
	public static final int POS_ACCOUNT 	    = 14;

	// Stock of shop or staff
	public static final String STOCK_OF_SHOP = "0";
	public static final String STOCK_OF_STAFF = "1";

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
	public StockEntity()
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
	public StockEntity(Vector pvtData)
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
	public String getID()
	{
		return getStrElementAt(POS_STOCK_ID);
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
	public void setID(String pstrStockID)
	{
		setElementAt(pstrStockID, POS_STOCK_ID);
	}

    /////////////////////////////////////////////////////////////////
    public String getShopID()
    {
        return getStrElementAt(POS_SHOP_ID);
    }
	/////////////////////////////////////////////////////////////////
	public String getStaffID()
	{
		return getStrElementAt(POS_STAFF_ID);
	}


    /////////////////////////////////////////////////////////////////
    public void setShopID(String pstrShopID)
    {
        setElementAt(pstrShopID, POS_SHOP_ID);
    }
	/////////////////////////////////////////////////////////////////
	public void setStaffID(String pstrStaffID)
	{
		setElementAt(pstrStaffID, POS_STAFF_ID);
    }

    /////////////////////////////////////////////////////////////////
    public String getShopParentID()
    {
        return getStrElementAt(POS_SHOP_PARENT_ID);
    }

    /////////////////////////////////////////////////////////////////
    public void setShopParentID(String pstrShopParentID)
    {
        setElementAt(pstrShopParentID, POS_SHOP_PARENT_ID);
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
		return getStrElementAt(POS_CODE);
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
		setElementAt(pstrCode, POS_CODE);
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
	public String getType()
	{
		return getStrElementAt(POS_TYPE);
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
		setElementAt(pstrType, POS_TYPE);
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
	public String getAddress()
	{
		return getStrElementAt(POS_ADDRESS);
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
	public void setAddress(String pstrAddress)
	{
		setElementAt(pstrAddress, POS_ADDRESS);
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
	public boolean isStockOfShop()
	{
		String strStockOrStaff = getStrElementAt(POS_STOCK_OR_STAFF);
		if (strStockOrStaff == null)
			return true;
		else
			return strStockOrStaff.equals(STOCK_OF_SHOP);
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
	public boolean isStockOfStaff()
	{
		return !isStockOfShop();
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
	public void setStockOfShop(boolean pblnShopOfStock)
	{
		if (pblnShopOfStock)
			setElementAt(STOCK_OF_SHOP, POS_STOCK_OR_STAFF);
		else
			setElementAt(STOCK_OF_STAFF, POS_STOCK_OR_STAFF);
	}

    /////////////////////////////////////////////////////////////////
    /**
     * <p>Purpose: </p>
     * @param  pstrStockOrStaff = 0 neu la shop, = 1 neu la nv
     * @return
     * @throws
     * @author Mai Thanh Trung
     * @since  06/04/2006
     */
    /////////////////////////////////////////////////////////////////
    public void setShopOrStaff(String pstrShopOrStaff)
    {
         setElementAt(pstrShopOrStaff, POS_STOCK_OR_STAFF);
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
    public void setNodeCode(String pstrNodeCode)
    {
        setElementAt(pstrNodeCode, POS_NODE_CODE);
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
	public String getNodeCode()
	{
		return getStrElementAt(POS_NODE_CODE);
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
    public void setParentCode(String pstrParentNodeCode)
    {
        setElementAt(pstrParentNodeCode, POS_PARENT_CODE);
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
	public String getParentCode()
	{
		return getStrElementAt(POS_PARENT_CODE);
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

    public boolean isShopAtEndNode()
    {
        String strType = com.fss.util.StringUtil.nvl(getType(), "");
        return (strType.equals("9") || strType.equals("1") || strType.equals("2") || strType.equals("3") || strType.equals("4") || strType.equals("5"));
    }
	/////////////////////////////////////////////////////////////////
	public String getCompany()
	{
		return getStrElementAt(POS_COMPANY);
	}
	/////////////////////////////////////////////////////////////////
	public void setCompany(String pstrCompany)
	{
		setElementAt(pstrCompany, POS_COMPANY);
    }
	/////////////////////////////////////////////////////////////////
	public String getAccount()
	{
		return getStrElementAt(POS_ACCOUNT);
	}
	/////////////////////////////////////////////////////////////////
	public void setAccount(String pstrAccount)
	{
		setElementAt(pstrAccount, POS_ACCOUNT);
    }
	/////////////////////////////////////////////////////////////////
	public String getTIN()
	{
		return getStrElementAt(POS_TIN);
	}
	/////////////////////////////////////////////////////////////////
	public void setTIN(String pstrTIN)
	{
		setElementAt(pstrTIN, POS_TIN);
    }
}
