package vn.com.fis.entity.css;

import java.util.Vector;

public class PeriodEntity extends SingleEntity
{
    // Size of entity
    public static final int SIZE = 2;

    // Class code to encrypt to DDTP
    public static final String CLASS_CODE = "Period";

    // Element position to implement with table
    public static final int POS_FROM_DATE 	= 0;
    public static final int POS_TO_DATE		= 1;

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
    public PeriodEntity()
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
    public PeriodEntity(Vector pvtData)
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
    public void setFromDate(String pstrFromDate)
    {
        setElementAt(pstrFromDate, POS_FROM_DATE);
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
    public String getFromDate()
    {
        return getStrElementAt(POS_FROM_DATE);
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
    public void setToDate(String pstrToDate)
    {
        setElementAt(pstrToDate, POS_TO_DATE);
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
    public String getToDate()
    {
        return getStrElementAt(POS_TO_DATE);
    }

}
