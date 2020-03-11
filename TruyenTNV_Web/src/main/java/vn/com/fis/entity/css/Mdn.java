package vn.com.fis.entity.css;

public class Mdn implements java.io.Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6920228046286799479L;
	/** The mdn. */
	private String mdn;

	public Mdn(String mdn){
		this.mdn = mdn;
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
	
	public String getNormalMdn(){
		return "0" + mdn;
	}

	public String getFullMdn(){
		return "84" + mdn;
	}

	public String getCompactMdn(){
		return mdn;
	}
}
