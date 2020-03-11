package vn.com.fis.model.cinvoice;

/**
 * Created by vumin on 12/18/2018.
 */
public class TRBillPayment {
    private String payment_Type_Name;
    private String payment_Recieved_Date;
    private String amount;
    private String created_Date;
    private String applied_Date;
    private String payment_Id;
    private String payment_Method_Name;
    private String paymentTxt;

    public String getPaymentTxt() {
		return paymentTxt;
	}

	public void setPaymentTxt(String paymentTxt) {
		this.paymentTxt = paymentTxt;
	}

	public String getPayment_Type_Name() {
        return this.payment_Type_Name;
    }

    public void setPayment_Type_Name(String payment_Type_Name) {
        this.payment_Type_Name = payment_Type_Name;
    }

    public String getPayment_Recieved_Date() {
        return this.payment_Recieved_Date;
    }

    public void setPayment_Recieved_Date(String payment_Recieved_Date) {
        this.payment_Recieved_Date = payment_Recieved_Date;
    }

    public String getAmount() {
        return this.amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getCreated_Date() {
        return this.created_Date;
    }

    public void setCreated_Date(String created_Date) {
        this.created_Date = created_Date;
    }

    public String getApplied_Date() {
        return this.applied_Date;
    }

    public void setApplied_Date(String applied_Date) {
        this.applied_Date = applied_Date;
    }

    public String getPayment_Id() {
        return this.payment_Id;
    }

    public void setPayment_Id(String payment_Id) {
        this.payment_Id = payment_Id;
    }

    public String getPayment_Method_Name() {
        return this.payment_Method_Name;
    }

    public void setPayment_Method_Name(String payment_Method_Name) {
        this.payment_Method_Name = payment_Method_Name;
    }

    public String getPayment_Txt() {
        return this.payment_Txt;
    }

    public void setPayment_Txt(String payment_Txt) {
        this.payment_Txt = payment_Txt;
    }

    private String payment_Txt;
}
