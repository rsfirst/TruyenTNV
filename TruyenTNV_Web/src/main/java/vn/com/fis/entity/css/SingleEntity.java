package vn.com.fis.entity.css;

import java.util.Vector;

public class SingleEntity  extends Entity
{
	protected int mintSize;
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
	public SingleEntity()
	{
		super();
		initSize();
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
	public SingleEntity(Vector pvtData)
	{
		super(pvtData);
	}

    protected void init()
    {

    }

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: Use for interactive inner data structure</p>
	 * @param  pObj		Object set for inner data structure
	 * @param  pIndex	index of inner data structure
	 * @return NA
	 * @throws NA
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	protected void setElementAt(Object pObj, int pIndex)
	{
		getVector().setElementAt(pObj, pIndex);
	}

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: Use for interactive inner data structure</p>
	 * @param  pIndex	index of inner data structure
	 * @return Object	Object get for inner data structure
	 * @throws NA
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	protected Object getElementAt(int pIndex)
	{
		return getVector().elementAt(pIndex);
	}

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: Use for interactive inner data structure</p>
	 * @param  pIndex	index of inner data structure
	 * @return String	Object String get for inner data structure
	 * @throws NA
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	protected String getStrElementAt(int pIndex)
	{
		Object obj = this.getElementAt(pIndex);
		if (obj == null)
			return null;
		else
			return obj.toString();
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
	protected void initSize(int pintSize)
	{
		Vector vt = new Vector(pintSize);
		vt.setSize(pintSize);
		this.setVector(vt);
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
	protected void initSize()
	{
		initSize(mintSize);
	}
	/**
	 * <p>Purpose: </p>
	 * @param
	 * @return
	 * @throws
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */

	protected Vector getVectorElementAt(int pIndex)
	{
		Object obj = this.getElementAt(pIndex);
		if (obj == null)
			return null;
		else
			return (Vector)obj;

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
	public String getKey()
	{
		return "";
	}

    public boolean match(Vector vt)
    {
        return false;
    }
}
