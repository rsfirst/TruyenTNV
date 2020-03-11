package vn.com.fis.entity.css;

import java.util.Vector;

public class GoodsListEntity extends ListEntity {
	// Class code for DDTP
	public static final String CLASS_CODE = "GoodsList";

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
	public GoodsListEntity()
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
	public GoodsListEntity(Vector pvtData)
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
    public GoodEntity getGood(int intIndex)
    {
    	GoodEntity good = new GoodEntity();
        elementAt(intIndex, good);
        return good;
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
    public GoodsListEntity filter(GoodEntity pgoodFilter)
    {
    	GoodsListEntity goodsList = new GoodsListEntity();
        for (int i = 0; i < size(); i++)
        {
        	GoodEntity goodMatch = getGood(i);
            if (pgoodFilter.matchFilter(goodMatch))
                goodsList.add(goodMatch);
        }
        return goodsList;
    }

    public GoodEntity findUseHash(GoodEntity pgoodFilter)
    {
        for (int i = 0; i < this.size(); i++)
        {
        	GoodEntity matchGood = getGood(i);
            if (matchGood.getKey().equals(pgoodFilter.getKey()))
                return matchGood;
        }
        return null;
    }

	public int findIndex(GoodEntity pgoodFilter)
	{
		for (int i = 0; i < this.size(); i++)
		{
			GoodEntity matchGood = getGood(i);
			if (matchGood.getKey().equals(pgoodFilter.getKey()))
				return i;
		}
		return -1;
	}
}
