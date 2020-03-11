package vn.com.fis.model.css;

import java.util.List;

// TODO: Auto-generated Javadoc
/**
 * The Class PerPaidSearchHistObject.
 */
public class SubHistOutput implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1617646592818881070L;

	/** The rownum. */
	private String id;

	/** The action name. */
	private String mdn;

	/** The staff. */
	private List<CusHistOutput> subHist;

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public String getId()
	{
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id
	 *            the new id
	 */
	public void setId(String id)
	{
		this.id = id;
	}

	/**
	 * Gets the mdn.
	 *
	 * @return the mdn
	 */
	public String getMdn()
	{
		return mdn;
	}

	/**
	 * Sets the mdn.
	 *
	 * @param mdn
	 *            the new mdn
	 */
	public void setMdn(String mdn)
	{
		this.mdn = mdn;
	}

	/**
	 * Gets the sub hist.
	 *
	 * @return the sub hist
	 */
	public List<CusHistOutput> getSubHist()
	{
		return subHist;
	}

	/**
	 * Sets the sub hist.
	 *
	 * @param subHist
	 *            the new sub hist
	 */
	public void setSubHist(List<CusHistOutput> subHist)
	{
		this.subHist = subHist;
	}

}
