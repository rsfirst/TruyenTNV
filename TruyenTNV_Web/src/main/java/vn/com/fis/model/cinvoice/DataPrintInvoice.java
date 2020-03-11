package vn.com.fis.model.cinvoice;

import java.util.List;

public class DataPrintInvoice {

	private List<CustCinvoiceData> lstCustCinvoiceData;
    private String mstrBlockNo;
    private String mstrSerialNo;
    private String shopCode;
    private String custInvoiceNum;
    private String userName;
    private String chkPrintCombine;
    private String staff_id;
    private String shop_id;

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

	public List<CustCinvoiceData> getLstCustCinvoiceData()
	{
		return lstCustCinvoiceData;
	}

	public void setLstCustCinvoiceData(List<CustCinvoiceData> lstCustCinvoiceData)
	{
		this.lstCustCinvoiceData = lstCustCinvoiceData;
	}

	public String getChkPrintCombine()
	{
		return chkPrintCombine;
	}

	public void setChkPrintCombine(String chkPrintCombine)
	{
		this.chkPrintCombine = chkPrintCombine;
	}

	public String getStaff_id()
	{
		return staff_id;
	}

	public void setStaff_id(String staff_id)
	{
		this.staff_id = staff_id;
	}

	public String getShop_id()
	{
		return shop_id;
	}

	public void setShop_id(String shop_id)
	{
		this.shop_id = shop_id;
	}
    
}
