package vn.com.fis.model.css;

import java.util.Hashtable;

/**
 * vn.com.fis.branded_shop.model.Subscriber
 * by sondt18
 * at 14/01/2019 4:00 PM
 */
public class Subscriber implements java.io.Serializable
{

    public static final int SIZE = 8;
    public static final String CLASS_CODE = "StockIsdn";
    public static final String ISDN 	= "ISDN";
    public static final String SERIAL 	=  "SERIAL";
    public static final String STOCK_ISDN 	=  "STOCK_ISDN";
    public static final String STATUS 	=  "STATUS";
    public static final String CODEERROR 	=  "CODEERROR";
    public static final String DESCRIPTION 	=  "DESCRIPTION";
    public static final String IMSI 	=  "IMSI";
    public static final String HLRSTATUS 	=  "HLRSTATUS";
    public static final String INSTATUS 	=  "INSTATUS";
    public static final String AUCSTATUS 	=  "AUCSTATUS";



    private Hashtable data=null;
    private String mstrClassCode = null;

    public Subscriber()
    {
        super();
        init();
        setIsdn("");
        setImsi("");
        setSerial("");
        setCodeError("");
        setDescription("");
        setHlrStatus(false);
        setINStatus(false);


    }
    protected void init()
    {
        mstrClassCode = CLASS_CODE;
        data=new Hashtable(SIZE);
    }

    public void setImsi(String pstrIMSI)
    {
        setElementAt(pstrIMSI, IMSI);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getImsi()
    {
        return getStrElementAt(IMSI);
    }

    public void setHlrStatus(boolean pstrHLRSTATUS)
    {
        setElementAt(pstrHLRSTATUS, HLRSTATUS);
    }

    ///////////////////////////////////////////////////////////////////////////
    public boolean getHlrStatus()
    {
        return  getElementAt(HLRSTATUS).equals(true);
    }


    public void setINStatus(boolean pstrINTATUS)
    {
        setElementAt(pstrINTATUS, INSTATUS);
    }

    ///////////////////////////////////////////////////////////////////////////
    public boolean getINStatus()
    {
        return  getElementAt(INSTATUS).equals(true);
    }
    public void setStatus(String pstrHLRSTATUS)
    {
        setElementAt(pstrHLRSTATUS, STATUS);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getStatus()
    {
        return getStrElementAt(STATUS);
    }
    //------------------------add
    public void setAucStatus(boolean pstrAUCSTATUS)
    {
        setElementAt(pstrAUCSTATUS, AUCSTATUS);
    }

    ///////////////////////////////////////////////////////////////////////////
    public boolean getAucStatus()
    {
        return getElementAt(AUCSTATUS).equals(true);
    }

    //========================================================================


    public void setCodeError(String pstrHLRSTATUS)
    {
        setElementAt(pstrHLRSTATUS, CODEERROR);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getCodeError()
    {
        return getStrElementAt(CODEERROR);
    }

    public void setDescription(String pstrDiscription)
    {
        setElementAt(pstrDiscription, DESCRIPTION);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getDescription()
    {
        return getStrElementAt(DESCRIPTION);
    }

    public void setSerial(String pstrIsdnPrice)
    {
        setElementAt(pstrIsdnPrice, SERIAL);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getSerial()
    {
        return getStrElementAt(SERIAL);
    }





    public void setIsdn(String pstrISDN)
    {
        setElementAt(pstrISDN, ISDN);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getIsdn()
    {
        return getStrElementAt(ISDN);
    }

    public void setStockIsdn(String pstrSTOCK_ISDN)
    {
        setElementAt(pstrSTOCK_ISDN, STOCK_ISDN);
    }

    ///////////////////////////////////////////////////////////////////////////
    public String getStockIsdn()
    {
        return getStrElementAt(STOCK_ISDN);
    }



    public void setElementAt(Object pObj, String pIndex)
    {
        data.put(pIndex,pObj);
    }

    public String getStrElementAt(String pIndex)
    {
        return (String)data.get(pIndex) ;
    }
    public Object getElementAt(String pIndex)
    {
        return (Object)data.get(pIndex) ;
    }



}
