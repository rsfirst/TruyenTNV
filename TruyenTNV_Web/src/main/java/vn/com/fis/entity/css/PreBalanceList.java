package vn.com.fis.entity.css;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

// TODO: Auto-generated Javadoc
/**
 * The Class PreBalanceList.
 */
public class PreBalanceList implements Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 4130612822748640693L;

	/** The balances. */
	private List<PreBalance> balances = new ArrayList<PreBalance>();

	/** The Constant CORE_BALANCE. */
	private static final String CORE_BALANCE = "core";

	/**
	 * Instantiates a new pre balance list.
	 */
	public PreBalanceList()
	{

	}

	/**
	 * Gets the balance.
	 *
	 * @param balanceName
	 *            the balance name
	 * @return the balance
	 */
	public PreBalance getBalance(String balanceName)
	{
		for (PreBalance balance : balances)
			if (balance.getAccountName().equals(balanceName))
				return balance;
		return null;
	}

	/**
	 * Gets the balances.
	 *
	 * @return the balances
	 */
	public List<PreBalance> getBalances()
	{
		return balances;
	}

	/**
	 * Sets the balances.
	 *
	 * @param balances
	 *            the new balances
	 */
	public void setBalances(List<PreBalance> balances)
	{
		this.balances = balances;
	}

	/**
	 * Gets the core balance.
	 *
	 * @return the core balance
	 */
	public PreBalance getCoreBalance()
	{
		return getBalance(CORE_BALANCE);
	}

	/**
	 * Adds the balance.
	 *
	 * @param balance
	 *            the balance
	 */
	public void addBalance(PreBalance balance)
	{
		balances.add(balance);
	}

	/**
	 * Removes the balance.
	 *
	 * @param balance
	 *            the balance
	 */
	public void removeBalance(PreBalance balance)
	{
		for (int i = balances.size() - 1; i >= 0; i--)
			if (balances.get(i).getAccountName().equals(balance.getAccountName()))
				balances.remove(i);
	}

}
