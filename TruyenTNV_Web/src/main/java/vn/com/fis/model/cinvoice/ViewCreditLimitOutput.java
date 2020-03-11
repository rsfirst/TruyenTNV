package vn.com.fis.model.cinvoice;

import java.io.Serializable;

public class ViewCreditLimitOutput implements Serializable{
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	private String account_Status;
	private String bill_Cycle;
	private String last_Billing_Date;
	private String payment_Due_Date;
	private String remaining_Credit_Limit;
	private String total_Credit_Limit;
	private String status;
	private String status_Text;


	public ViewCreditLimitOutput() {

	}

	public ViewCreditLimitOutput(
		   String account_Status,
		   String bill_Cycle,
		   String last_Billing_Date,
		   String payment_Due_Date,
		   String remaining_Credit_Limit,
		   String total_Credit_Limit,
		   String status,
		   String status_Text) {
		   this.account_Status = account_Status;
		   this.bill_Cycle = bill_Cycle;
		   this.last_Billing_Date = last_Billing_Date;
		   this.payment_Due_Date = payment_Due_Date;
		   this.remaining_Credit_Limit = remaining_Credit_Limit;
		   this.total_Credit_Limit = total_Credit_Limit;
		   this.status = status;
		   this.status_Text = status_Text;
	}


	/**
	 * Gets the account_Status value for this Response.
	 *
	 * @return account_Status
	 */
	public String getAccount_Status() {
		return account_Status;
	}


	/**
	 * Sets the account_Status value for this Response.
	 *
	 * @param account_Status
	 */
	public void setAccount_Status(String account_Status) {
		this.account_Status = account_Status;
	}


	/**
	 * Gets the bill_Cycle value for this Response.
	 *
	 * @return bill_Cycle
	 */
	public String getBill_Cycle() {
		return bill_Cycle;
	}


	/**
	 * Sets the bill_Cycle value for this Response.
	 *
	 * @param bill_Cycle
	 */
	public void setBill_Cycle(String bill_Cycle) {
		this.bill_Cycle = bill_Cycle;
	}


	/**
	 * Gets the last_Billing_Date value for this Response.
	 *
	 * @return last_Billing_Date
	 */
	public String getLast_Billing_Date() {
		return last_Billing_Date;
	}


	/**
	 * Sets the last_Billing_Date value for this Response.
	 *
	 * @param last_Billing_Date
	 */
	public void setLast_Billing_Date(String last_Billing_Date) {
		this.last_Billing_Date = last_Billing_Date;
	}


	/**
	 * Gets the payment_Due_Date value for this Response.
	 *
	 * @return payment_Due_Date
	 */
	public String getPayment_Due_Date() {
		return payment_Due_Date;
	}


	/**
	 * Sets the payment_Due_Date value for this Response.
	 *
	 * @param payment_Due_Date
	 */
	public void setPayment_Due_Date(String payment_Due_Date) {
		this.payment_Due_Date = payment_Due_Date;
	}


	/**
	 * Gets the remaining_Credit_Limit value for this Response.
	 *
	 * @return remaining_Credit_Limit
	 */
	public String getRemaining_Credit_Limit() {
		return remaining_Credit_Limit;
	}


	/**
	 * Sets the remaining_Credit_Limit value for this Response.
	 *
	 * @param remaining_Credit_Limit
	 */
	public void setRemaining_Credit_Limit(String remaining_Credit_Limit) {
		this.remaining_Credit_Limit = remaining_Credit_Limit;
	}


	/**
	 * Gets the total_Credit_Limit value for this Response.
	 *
	 * @return total_Credit_Limit
	 */
	public String getTotal_Credit_Limit() {
		return total_Credit_Limit;
	}


	/**
	 * Sets the total_Credit_Limit value for this Response.
	 *
	 * @param total_Credit_Limit
	 */
	public void setTotal_Credit_Limit(String total_Credit_Limit) {
		this.total_Credit_Limit = total_Credit_Limit;
	}


	/**
	 * Gets the status value for this Response.
	 *
	 * @return status
	 */
	public String getStatus() {
		return status;
	}


	/**
	 * Sets the status value for this Response.
	 *
	 * @param status
	 */
	public void setStatus(String status) {
		this.status = status;
	}


	/**
	 * Gets the status_Text value for this Response.
	 *
	 * @return status_Text
	 */
	public String getStatus_Text() {
		return status_Text;
	}


	/**
	 * Sets the status_Text value for this Response.
	 *
	 * @param status_Text
	 */
	public void setStatus_Text(String status_Text) {
		this.status_Text = status_Text;
	}


}
