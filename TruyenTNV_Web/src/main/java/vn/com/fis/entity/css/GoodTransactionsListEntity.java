package vn.com.fis.entity.css;

import java.util.Vector;

public class GoodTransactionsListEntity extends ListEntity 
{
	// Class code for DDTP
	public static final String CLASS_CODE = "GoodTransactionsList";

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
	public GoodTransactionsListEntity()
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
	public GoodTransactionsListEntity(Vector pvtData)
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
    public GoodTransactionEntity getGoodTransaction(int intIndex)
    {
    	GoodTransactionEntity returnTransaction = new GoodTransactionEntity();
        elementAt(intIndex, returnTransaction);
        return returnTransaction;
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
    protected String getKey(int intIndex)
    {
        return getGoodTransaction(intIndex).getKey();
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
    public int find(GoodTransactionEntity goodTransaction)
    {
		return find(goodTransaction, 0);
    }

	public int find(GoodTransactionEntity goodTransaction, int intBegin)
	{
		int intReturn = -1;
		for (intBegin = intBegin; intBegin < size(); intBegin++)
		{
			GoodTransactionEntity member = getGoodTransaction(intBegin);
			if (member.getKey().equals(goodTransaction.getKey()))
			{
				intReturn = intBegin;
				break;
			}
		}
		return intReturn;
    }

    public void clearAllSerialList()
    {
        for (int i = 0; i < size(); i++)
        {
        	GoodTransactionEntity member = getGoodTransaction(i);
            if (member.getTransactionSerialList().size() > 0)
                member.clearSerialList();
        }
    }

    public void clearAllBlockList()
    {
        for (int i = 0; i < size(); i++)
        {
        	GoodTransactionEntity member = getGoodTransaction(i);
            if (member.getBlockList().size() > 0)
                member.clearBlockList();
        }
    }

    public int findInvalidGoodIssueBlock(GoodsListEntity pGoodList)
    {
        for (int i = 0; i < size(); i++)
        {
        	GoodTransactionEntity member = getGoodTransaction(i);
            GoodEntity goodFilter = new GoodEntity();
            goodFilter.setID(member.getGoodID());
            if (pGoodList.findUseHash(goodFilter).getType().equals("1"))
            {
                if (member.getQuantityIssue() != member.getBlockList().calculateSum())
                    return i;
            }
        }
        return -1;
    }


    public int findInvalidGoodIssueTransactionSerial(GoodsListEntity pGoodList)
    {
        return findInvalidGoodIssueTransactionSerial(pGoodList, false);
    }

    public int findInvalidGoodIssueTransactionSerial(GoodsListEntity pGoodList, boolean pblnIgnoreISDN)
    {
        for (int i = 0; i < size(); i++)
        {
            GoodTransactionEntity member = getGoodTransaction(i);
            GoodEntity goodFilter = new GoodEntity();
            goodFilter.setID(member.getGoodID());
            GoodEntity goodFound = pGoodList.findUseHash(goodFilter);
            if (goodFound.isCheckSerial() && !(pblnIgnoreISDN && goodFound.getType().equals("1")))
            {
                if (member.getQuantityIssue() != member.getTransactionSerialList().calculateSum())
                    return i;
            }
        }
        return -1;
    }



    public int findInvalidGoodTransactionIssue()
    {
        for (int i = 0; i < size(); i++)
        {
            GoodTransactionEntity member = getGoodTransaction(i);
            if ((member.getQuantityIssue() <= 0))
                return i;
        }
        return -1;
    }

    public int findInvalidGoodTransactionEffect()
    {
        for (int i = 0; i < size(); i++)
        {
            GoodTransactionEntity member = getGoodTransaction(i);
            if ((member.getQuantityEffect() <= 0))
                return i;
        }
        return -1;
    }

    public int findInvalidGoodTransaction()
    {
        for (int i = 0; i < size(); i++)
        {
            GoodTransactionEntity member = getGoodTransaction(i);
            if ((member.getQuantityIssue() <= 0) ||
                (member.getQuantityEffect() <= 0) ||
                (member.getQuantityIssue() < member.getQuantityEffect()))
                return i;
        }
        return -1;
    }

}
