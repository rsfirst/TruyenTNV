package vn.com.fis.entity.css;

import com.fss.util.StringUtil;

import java.util.Vector;

public class BlockListEntity extends ListEntity
{
	// Class code for DDTP
	public static final String CLASS_CODE = "BlockList";

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
	public BlockListEntity()
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
	public BlockListEntity(Vector pvtData)
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

	public BlockEntity getBlock(int intIndex)
	{
		BlockEntity block = new BlockEntity();
		elementAt(intIndex,block);
		return block;
	}
	public int calculateSum()
	{
		int quantity = 0;
		for (int i = 0; i < size(); i++)
		{
			BlockEntity block = getBlock(i);
			int iQuantity = Integer.parseInt(StringUtil.nvl(block.getQuantity(),"0"));
			quantity += iQuantity;
		}
		return quantity;
	}
}
