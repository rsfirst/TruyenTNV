package vn.com.fis.entity.css;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;

// TODO: Auto-generated Javadoc
/**
 * The Class PreBalance.
 */
public class PreBalance implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -3138287454780763148L;

	/** The balance. */
	private double balance;

	/** The account expiration. */
	private Date accountExpiration;

	/** The account name. */
	private String accountName;

	/**
	 * Instantiates a new pre balance.
	 */
	public PreBalance()
	{
		this(0.0, null, "");
	}

	/**
	 * Instantiates a new pre balance.
	 *
	 * @param balance
	 *            the balance
	 * @param accountExpiration
	 *            the account expiration
	 * @param accountName
	 *            the account name
	 */
	public PreBalance(double balance, Date accountExpiration, String accountName)
	{
		this.balance = balance;
		this.accountExpiration = accountExpiration;
		this.accountName = accountName;
	}

	/**
	 * Gets the balance.
	 *
	 * @return the balance
	 */
	public double getBalance()
	{
		return balance;
	}

	/**
	 * Sets the balance.
	 *
	 * @param balance
	 *            the new balance
	 */
	public void setBalance(double balance)
	{
		this.balance = balance;
	}

	/**
	 * Gets the account expiration.
	 *
	 * @return the account expiration
	 */
	public Date getAccountExpiration()
	{
		return accountExpiration;
	}

	/**
	 * Sets the account expiration.
	 *
	 * @param accountExpiration
	 *            the new account expiration
	 */
	public void setAccountExpiration(Date accountExpiration)
	{
		this.accountExpiration = accountExpiration;
	}

	/**
	 * Gets the account name.
	 *
	 * @return the account name
	 */
	public String getAccountName()
	{
		return accountName;
	}

	/**
	 * Sets the account name.
	 *
	 * @param accountName
	 *            the new account name
	 */
	public void setAccountName(String accountName)
	{
		this.accountName = accountName;
	}
}
