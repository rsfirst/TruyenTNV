package vn.com.fis.model.css;


import vn.com.fis.utils.css.CommonConstant;

/**
 * The Class SecondInfomationModel.
 */
public class SecondInfomationModel
{

	/** The type of check box. */
	private String typeOfCheckBox;

	/** The date of registration. */
	private String dateOfRegistration;

	/** The last card loaded. */
	private String lastCardLoaded;

	/** The main account. */
	private String mainAccount;

	/**
	 * Gets the date of registration.
	 *
	 * @return the date of registration
	 */
	public String getDateOfRegistration()
	{
		return dateOfRegistration;
	}

	/**
	 * Sets the date of registration.
	 *
	 * @param dateOfRegistration
	 *            the new date of registration
	 */
	public void setDateOfRegistration(String dateOfRegistration)
	{
		this.dateOfRegistration = dateOfRegistration;
	}

	/**
	 * Gets the last card loaded.
	 *
	 * @return the last card loaded
	 */
	public String getLastCardLoaded()
	{
		return lastCardLoaded;
	}

	/**
	 * Sets the last card loaded.
	 *
	 * @param lastCardLoaded
	 *            the new last card loaded
	 */
	public void setLastCardLoaded(String lastCardLoaded)
	{
		this.lastCardLoaded = lastCardLoaded;
	}

	/**
	 * Gets the main account.
	 *
	 * @return the main account
	 */
	public String getMainAccount()
	{
		return mainAccount;
	}

	/**
	 * Sets the main account.
	 *
	 * @param mainAccount
	 *            the new main account
	 */
	public void setMainAccount(String mainAccount)
	{
		this.mainAccount = mainAccount;
	}

	/**
	 * Gets the type of check box.
	 *
	 * @return the type of check box
	 */
	public String getTypeOfCheckBox()
	{
		return typeOfCheckBox;
	}

	/**
	 * Sets the type of check box.
	 *
	 * @param typeOfCheckBox
	 *            the new type of check box
	 */
	public void setTypeOfCheckBox(String typeOfCheckBox)
	{
		this.typeOfCheckBox = typeOfCheckBox;
	}

	public String getVerification()
	{
		String strReturn = "";
		if (!CommonConstant.EMPTY.equals(getDateOfRegistration()))
			strReturn += "Ngay Sinh: " + getDateOfRegistration().trim();
		else
			strReturn += "Ngay Sinh: ";
		if (!CommonConstant.EMPTY.equals(getLastCardLoaded()))
			strReturn += " The nap: " + getLastCardLoaded().trim();
		else
			strReturn += " The nap: ";
		if (!CommonConstant.EMPTY.equals(getMainAccount()))
			strReturn += " TK chinh: " + getMainAccount().trim();
		else
			strReturn += " TK chinh: ";
		return strReturn;
	}

}
