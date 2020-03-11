package vn.com.fis.entity.epos;

import java.util.Vector;

public abstract class Entity {

	private Vector mvtData = null;
	protected String mstrClassCode = null;

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
	public Entity()
	{
		init();
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
	public Entity(Vector pvtData)
	{
		init();
		setVector(pvtData);
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
	protected abstract void init();
	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: Return a vector that used for table</p>
	 * @param  NA
	 * @return Vector	vector that used for table
	 * @throws NA
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public Vector getVector()
	{
		return mvtData;
	}

	/////////////////////////////////////////////////////////////////
	/**
	 * <p>Purpose: Set a vector that used for table</p>
	 * @param  pvtData	vector that used for table
	 * @return NA
	 * @throws NA
	 * @author Mai Thanh Trung
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public void setVector(Vector pvtData)
	{
		mvtData = pvtData;
	}
}
