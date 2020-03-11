package vn.com.fis.model.cinvoice;

public class CustomerSearch
{
    private String MDN;
    private String customerName;
    private String identifyCard;
    private String SIM;
    private String accountNo;
    private String taxCode;
    private String parentAccountNo;
    private String blPayment;

    public String getMDN() {
        return MDN;
    }

    public void setMDN(String mDN)
    {
        MDN = mDN;
    }

    public String getCustomerName()
    {
        return customerName;
    }

    public void setCustomerName(String customerName)
    {
        this.customerName = customerName;
    }

    public String getIdentifyCard()
    {
        return identifyCard;
    }

    public void setIdentifyCard(String identifyCard)
    {
        this.identifyCard = identifyCard;
    }

    public String getSIM()
    {
        return SIM;
    }

    public void setSIM(String sIM)
    {
        SIM = sIM;
    }

    public String getAccountNo()
    {
        return accountNo;
    }

    public void setAccountNo(String accountNo)
    {
        this.accountNo = accountNo;
    }

    public String getTaxCode()
    {
        return taxCode;
    }

    public void setTaxCode(String taxCode)
    {
        this.taxCode = taxCode;
    }

    public String getParentAccountNo()
    {
        return parentAccountNo;
    }

    public void setParentAccountNo(String parentAccountNo)
    {
        this.parentAccountNo = parentAccountNo;
    }

    public String getBlPayment() {
        return blPayment;
    }

    public void setBlPayment(String blPayment)
    {
        if (blPayment != null && !"".equals(blPayment)) {
            this.blPayment = blPayment;
        } else {
            this.blPayment = "false";
        }
    }

}
