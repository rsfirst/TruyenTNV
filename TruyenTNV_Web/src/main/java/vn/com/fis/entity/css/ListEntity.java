package vn.com.fis.entity.css;

import java.util.Hashtable;
import java.util.Vector;

public abstract class ListEntity extends Entity 
{

	private Hashtable mhshMapping = new Hashtable();

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
	public ListEntity()
	{
		super();
		Vector vt = new Vector();
		setVector(vt);
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
	public ListEntity(Vector pvtData)
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
	public void buildHash()
	{
		mhshMapping = new Hashtable();
		Vector vtTable = getVector();
		for (int i = 0; i < vtTable.size(); i++)
		{
			String strKey = getKey(i);
			if (strKey != null)
			{
				Vector vtRow = (Vector) vtTable.elementAt(i);
				mhshMapping.put(strKey, vtRow);
			}
		}
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
		return null;
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
	public boolean findHash(SingleEntity pConditionSingleEntity, SingleEntity pReturnSingleEntity)
	{
		if (mhshMapping == null)
			buildHash();

		String strKey = pConditionSingleEntity.getKey();
		if (strKey == null)
			return false;

		Vector vtReturn = (Vector) mhshMapping.get(strKey);
		if (vtReturn == null)
			return true;

		pReturnSingleEntity.setVector(vtReturn);
		return true;
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
    public boolean find(SingleEntity pConditionSingleEntity, SingleEntity pReturnSingleEntity)
    {
        if (mhshMapping == null)
            buildHash();

        String strKey = pConditionSingleEntity.getKey();
        if (strKey == null)
            return false;

        Vector vtReturn = (Vector) mhshMapping.get(strKey);
        if (vtReturn == null)
            return true;

        pReturnSingleEntity.setVector(vtReturn);
        return true;
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
	public int size()
	{
		return getVector().size();
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
	public void elementAt(int intIndex, SingleEntity pSingleEntity)
	{
		pSingleEntity.setVector((Vector) getVector().elementAt(intIndex));
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
	public void setElementAt(int intIndex, SingleEntity pSingleEntity)
	{
		getVector().setElementAt(pSingleEntity.getVector(), intIndex);
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
	public void add(SingleEntity pSingleEntity)
	{
        String strKey =pSingleEntity.getKey();
        if (strKey != null)
            this.mhshMapping.put(strKey, pSingleEntity.getVector());
		getVector().add(pSingleEntity.getVector());
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
    protected void filter(SingleEntity filter, ListEntity list)
    {
    }
}
