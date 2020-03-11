package vn.com.fis.model.cinvoice;

public class VctPrintInvoice {
    private VctPayment vctPayment;
    private VctPaymentDetail vctPaymentDetail;
    private VctInvoice vctInvoice;
    private String mstrBlockNo;
    private String mstrSerialNo;
    private String shopCode;
    private String custInvoiceNum;
    private String userName;

    public VctPayment getVctPayment() {
        return vctPayment;
    }

    public void setVctPayment(VctPayment vctPayment) {
        this.vctPayment = vctPayment;
    }

    public VctPaymentDetail getVctPaymentDetail() {
        return vctPaymentDetail;
    }

    public void setVctPaymentDetail(VctPaymentDetail vctPaymentDetail) {
        this.vctPaymentDetail = vctPaymentDetail;
    }

    public VctInvoice getVctInvoice() {
        return vctInvoice;
    }

    public void setVctInvoice(VctInvoice vctInvoice) {
        this.vctInvoice = vctInvoice;
    }

    public String getMstrBlockNo() {
        return mstrBlockNo;
    }

    public void setMstrBlockNo(String mstrBlockNo) {
        this.mstrBlockNo = mstrBlockNo;
    }

    public String getMstrSerialNo() {
        return mstrSerialNo;
    }

    public void setMstrSerialNo(String mstrSerialNo) {
        this.mstrSerialNo = mstrSerialNo;
    }

    public String getShopCode() {
        return shopCode;
    }

    public void setShopCode(String shopCode) {
        this.shopCode = shopCode;
    }

    public String getCustInvoiceNum() {
        return custInvoiceNum;
    }

    public void setCustInvoiceNum(String custInvoiceNum) {
        this.custInvoiceNum = custInvoiceNum;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
