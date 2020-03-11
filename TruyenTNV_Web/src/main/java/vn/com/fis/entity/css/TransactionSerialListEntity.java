package vn.com.fis.entity.css;

import com.fss.util.StringUtil;

import java.util.Vector;

public class TransactionSerialListEntity extends ListEntity implements Comparable
{
	// Class code for DDTP
	public static final String CLASS_CODE = "TransactionSerialList";

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
	public TransactionSerialListEntity()
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
	public TransactionSerialListEntity(Vector pvtData)
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
    public TransactionSerialEntity getTransactionSerial(int intIndex)
    {
    	TransactionSerialEntity transSerial = new TransactionSerialEntity();
        elementAt(intIndex, transSerial);
        return transSerial;
    }

	public TransactionSerialListEntity getTransSerialList(int pintFrom, int pintTo)
	{
		TransactionSerialListEntity pTransSerialList = new TransactionSerialListEntity();
		for (int i = pintFrom; i <= pintTo; i++)
		{
			TransactionSerialEntity vTransSerial = getTransactionSerial(i);
			pTransSerialList.add(vTransSerial);
		}
		return pTransSerialList;
	}

	public int calculateSum()
	{
		int quantity = 0;
		for (int i = 0; i < size(); i++)
		{
			TransactionSerialEntity transSerial = getTransactionSerial(i);
			int iQuantity = Integer.parseInt(StringUtil.nvl(transSerial.getStrQuantity(),"0").equals("") ? "0" : StringUtil.nvl(transSerial.getStrQuantity(),"0"));
			quantity += iQuantity;
		}
		if(quantity == 0)
		{
			quantity = size();
		}
		return quantity;
	}

	public int compareTo(Object o)
	{
		if(!(o instanceof TransactionSerialListEntity))
			return 1;   //Khong bang

		TransactionSerialListEntity other = (TransactionSerialListEntity)o;

		if(this.getVector() == null && other.getVector() == null)
			return 0;
		if(this.getVector() == null || other.getVector() == null)
			return 1;
		if(this.getVector().size() != other.getVector().size())
			return 1;

		for(int i = 0; i < this.getVector().size(); i++)
		{
			TransactionSerialEntity serialMine = this.getTransactionSerial(i);
			TransactionSerialEntity serialOther = other.getTransactionSerial(i);
			if(serialMine.compareTo(serialOther) != 0)
			{
				return 1;  //Khong bang
			}
		}
		return 0;  //Bang
	}
}
