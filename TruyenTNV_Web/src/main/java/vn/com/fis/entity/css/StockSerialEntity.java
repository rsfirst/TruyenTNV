package vn.com.fis.entity.css;

import java.util.Vector;

public class StockSerialEntity extends SingleEntity
{
    // Size of entity
    public static final int SIZE = 10;

    // Class code to encrypt to DDTP
    public static final String CLASS_CODE = "StockSerial";

    // Element position to implement with table
    public static final int POS_STOCK_ID			= 0;
    public static final int POS_GOOD_ID				= 1;
    public static final int POS_STATE_ID			= 2;
    public static final int POS_SERIAL		        = 3;
    public static final int POS_STATUS		        = 4;
    public static final int POS_ISDN       		 	= 5;
    public static final int POS_ISDN_STATUS		 	= 6;
    public static final int POS_IMPORT_DATETIME		= 7;
    public static final int POS_PARTNER_ID		    = 8;
    public static final int POS_FAILURE_NOTE        = 9;

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
    public StockSerialEntity()
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
    public StockSerialEntity(Vector pvtData)
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
    public void setStockID(String pstrStockID)
    {
        setElementAt(pstrStockID, POS_STOCK_ID);
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
    public String getStockID()
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
     * @since  11/04/2006
     */
    /////////////////////////////////////////////////////////////////
    public void setStateID(String pstrStateID)
    {
        setElementAt(pstrStateID, POS_STATE_ID);
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
        setElementAt(pstrGoodID, POS_GOOD_ID);
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
    public void setSerial(String pstrSerial)
    {
        setElementAt(pstrSerial, POS_SERIAL);
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
    public String getSerial()
    {
        return getStrElementAt(POS_SERIAL);
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
    public void setISDN(String pstrISDN)
    {
        setElementAt(pstrISDN, POS_ISDN);
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
    public String getISDN()
    {
        return getStrElementAt(POS_ISDN);
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
     * @since  11/04/2006
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
     * @since  11/04/2006
     */
    /////////////////////////////////////////////////////////////////
    public void setISDNStatus(String pstrISDNStatus)
    {
        setElementAt(pstrISDNStatus, POS_ISDN_STATUS);
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
    public String getISDNStatus()
    {
        return getStrElementAt(POS_ISDN_STATUS);
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
        setElementAt(pstrPartnerID, POS_PARTNER_ID);
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
    public void setImportDate(String pstrImportDate)
    {
        setElementAt(pstrImportDate, POS_IMPORT_DATETIME);
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
    public String getImportDateTime()
    {
        return getStrElementAt(POS_IMPORT_DATETIME);
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
     public void setFailureNote(String pstrFailureNote)
     {
         setElementAt(pstrFailureNote, POS_FAILURE_NOTE);
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
     public String getFailureNote()
     {
         return getStrElementAt(POS_FAILURE_NOTE);
     }
}
