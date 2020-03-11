package vn.com.fis.entity.css;

import java.util.Vector;

public class StockSerialsListEntity extends ListEntity {
    // Class code for DDTP
    public static final String CLASS_CODE = "StockSerialsList";

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
    public StockSerialsListEntity()
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
    public StockSerialsListEntity(Vector pvtData)
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
    public StockSerialEntity getStockSerial(int intIndex)
    {
    	StockSerialEntity stockSerial = new StockSerialEntity();
        elementAt(intIndex, stockSerial);
        return stockSerial;
    }

    public StockSerialsListEntity getStockSerialsList(int pintFrom, int pintTo)
    {
    	StockSerialsListEntity pSerialsList = new StockSerialsListEntity();
        for (int i = pintFrom; i <= pintTo; i++)
        {
            StockSerialEntity stockSerial = getStockSerial(i);
            pSerialsList.add(stockSerial);
        }
        return pSerialsList;
    }
}
