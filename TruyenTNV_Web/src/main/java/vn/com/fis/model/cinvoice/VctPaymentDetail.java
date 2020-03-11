package vn.com.fis.model.cinvoice;

public class VctPaymentDetail {
    private String payment_id;
    private String create_date;
    private String account_id;
    private String start_cycle;
    private String end_cycle;
    private String amount_org;
    private String amount_vat;
    private String amount;
    private String amount_none_vat;
    private String amount_over_debit;
    private String amound_debit;
    private String bill_invoice_no;
    private String sv_invoice_id;

    public String getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(String payment_id) {
        this.payment_id = payment_id;
    }

    public String getCreate_date() {
        return create_date;
    }

    public void setCreate_date(String create_date) {
        this.create_date = create_date;
    }

    public String getAccount_id() {
        return account_id;
    }

    public void setAccount_id(String account_id) {
        this.account_id = account_id;
    }

    public String getStart_cycle() {
        return start_cycle;
    }

    public void setStart_cycle(String start_cycle) {
        this.start_cycle = start_cycle;
    }

    public String getEnd_cycle() {
        return end_cycle;
    }

    public void setEnd_cycle(String end_cycle) {
        this.end_cycle = end_cycle;
    }

    public String getAmount_org() {
        return amount_org;
    }

    public void setAmount_org(String amount_org) {
        this.amount_org = amount_org;
    }

    public String getAmount_vat() {
        return amount_vat;
    }

    public void setAmount_vat(String amount_vat) {
        this.amount_vat = amount_vat;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getAmount_none_vat() {
        return amount_none_vat;
    }

    public void setAmount_none_vat(String amount_none_vat) {
        this.amount_none_vat = amount_none_vat;
    }

    public String getAmount_over_debit() {
        return amount_over_debit;
    }

    public void setAmount_over_debit(String amount_over_debit) {
        this.amount_over_debit = amount_over_debit;
    }

    public String getAmound_debit() {
        return amound_debit;
    }

    public void setAmound_debit(String amound_debit) {
        this.amound_debit = amound_debit;
    }

    public String getBill_invoice_no() {
        return bill_invoice_no;
    }

    public void setBill_invoice_no(String bill_invoice_no) {
        this.bill_invoice_no = bill_invoice_no;
    }

    public String getSv_invoice_id() {
        return sv_invoice_id;
    }

    public void setSv_invoice_id(String sv_invoice_id) {
        this.sv_invoice_id = sv_invoice_id;
    }
}
