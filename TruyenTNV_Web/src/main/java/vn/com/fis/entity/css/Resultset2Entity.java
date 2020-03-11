package vn.com.fis.entity.css;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.Hashtable;

public class Resultset2Entity {
	protected ResultSet mResultSet;
    private Hashtable mhsh = null;
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
	public Resultset2Entity(ResultSet pResultSet) throws SQLException
	{
		setResultSet(pResultSet);
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
	public void setResultSet(ResultSet pResultSet) throws SQLException
	{
		mResultSet = pResultSet;
        ResultSetMetaData meta = mResultSet.getMetaData();
        mhsh = new Hashtable();
        int intColcount = meta.getColumnCount();
        for (int i = 1; i <= intColcount; i++)
        {
            String strColName = meta.getColumnName(i);
            mhsh.put(strColName.toUpperCase(), new Boolean(true));
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
	public boolean toSingleEntity(SingleEntity pSingleEntity) throws SQLException
	{
        if (mResultSet.next())
        {
            SingleEntity singleEntity = toSingleEntity();
            //pSingleEntity = toSingleEntity();
            pSingleEntity.setVector(singleEntity.getVector());
            return true;
            //pSingleEntity.setVector(singleEntity.getVector());
        }
        else
        {
            pSingleEntity = null;
            return false;
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
	protected SingleEntity toSingleEntity() throws SQLException
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
	 * @since  06/04/2006
	 */
	/////////////////////////////////////////////////////////////////
	public void toListEntity(ListEntity pListEntity) throws SQLException
	{
		//SingleEntity singleEntity =
		while(mResultSet.next())
		{
			SingleEntity singleEntity = toSingleEntity();
			pListEntity.add(singleEntity);
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
	public String getString(String pstrColName) throws SQLException
	{

		if (mhsh.containsKey(pstrColName.toUpperCase()))
			return mResultSet.getString(pstrColName);
		else
			return null;
	}
}
