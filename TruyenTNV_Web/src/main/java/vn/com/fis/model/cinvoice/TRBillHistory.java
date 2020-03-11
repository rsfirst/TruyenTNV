package vn.com.fis.model.cinvoice;

/**
 * Created by vumin on 12/18/2018.
 */
public class TRBillHistory {
    private String bill_Date;
    private String amount;
    private String amount_Paid;
    private String bill_Status;
    private String payment_Status;
    private String amount_Paid2;
    private String balance_Brought_Forward;
    private String balance_Due;
    private String bill_Due_Date;
    private String bill_Type;
    private String invoice_Image_Path;
    private String invoice_Number;
    private String issueDate;
    public String getBill_Date() {
        return this.bill_Date;
    }

    public void setBill_Date(String bill_Date) {
        this.bill_Date = bill_Date;
    }

    public String getAmount() {
        return this.amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getAmount_Paid() {
        return this.amount_Paid;
    }

    public void setAmount_Paid(String amount_Paid) {
        this.amount_Paid = amount_Paid;
    }

    public String getBill_Status() {
        return this.bill_Status;
    }

    public void setBill_Status(String bill_Status) {
        this.bill_Status = bill_Status;
    }

    public String getPayment_Status() {
        return this.payment_Status;
    }

    public void setPayment_Status(String payment_Status) {
        this.payment_Status = payment_Status;
    }

    public String getAmount_Paid2() {
        return this.amount_Paid2;
    }

    public void setAmount_Paid2(String amount_Paid2) {
        this.amount_Paid2 = amount_Paid2;
    }

    public String getBalance_Brought_Forward() {
        return this.balance_Brought_Forward;
    }

    public void setBalance_Brought_Forward(String balance_Brought_Forward) {
        this.balance_Brought_Forward = balance_Brought_Forward;
    }

    public String getBalance_Due() {
        return this.balance_Due;
    }

    public void setBalance_Due(String balance_Due) {
        this.balance_Due = balance_Due;
    }

    public String getBill_Due_Date() {
        return this.bill_Due_Date;
    }

    public void setBill_Due_Date(String bill_Due_Date) {
        this.bill_Due_Date = bill_Due_Date;
    }

    public String getBill_Type() {
        return this.bill_Type;
    }

    public void setBill_Type(String bill_Type) {
        this.bill_Type = bill_Type;
    }

    public String getInvoice_Image_Path() {
        return this.invoice_Image_Path;
    }

    public void setInvoice_Image_Path(String invoice_Image_Path) {
        this.invoice_Image_Path = invoice_Image_Path;
    }

    public String getInvoice_Number() {
        return this.invoice_Number;
    }

    public void setInvoice_Number(String invoice_Number) {
        this.invoice_Number = invoice_Number;
    }

	public String getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}
    
}
