package vn.com.fis.model.epos;

import java.util.List;

public class SalesTransaction {
	private List<GoodsSaleTransaction> vctGood;
	private List<CardNoModel> vtCreditNo;
	private List<ObjectForDoSomething> vtHandsetICCIDList;
	private String strStockID;
	private String strShopID;
	private String strStaffID;
	private String strPayMethod;
	private String strAmount;
	private String strAmountTax;
	private String strTax;
	private String strOrgTotal;
	private String strGrandTotal;
	private String strDiscount;
	private String strPromotion;
	private String strCreateDateTime;
	private String strStatus;
	private String strUserName;
	private String strCustType;
	private String strTaxRate;
	private String strCustId;
	private String strCustName;
	private String strCustAddress;
	private String strTaxCode;
	private String strBillAccount;
	private String strExchange; // Goi tu form doi hang bao hanh
	private String strWarrantyTransLogID;
	private String strCompnay;
	private String strProcessStatus;
	private String sessionClientIp;

	public List<GoodsSaleTransaction> getVctGood() {
		return vctGood;
	}

	public void setVctGood(List<GoodsSaleTransaction> vctGood) {
		this.vctGood = vctGood;
	}

	public List<CardNoModel> getVtCreditNo() {
		return vtCreditNo;
	}

	public void setVtCreditNo(List<CardNoModel> vtCreditNo) {
		this.vtCreditNo = vtCreditNo;
	}

	public String getStrStockID() {
		return strStockID;
	}

	public void setStrStockID(String strStockID) {
		this.strStockID = strStockID;
	}

	public String getStrShopID() {
		return strShopID;
	}

	public void setStrShopID(String strShopID) {
		this.strShopID = strShopID;
	}

	public String getStrStaffID() {
		return strStaffID;
	}

	public void setStrStaffID(String strStaffID) {
		this.strStaffID = strStaffID;
	}

	public String getStrPayMethod() {
		return strPayMethod;
	}

	public void setStrPayMethod(String strPayMethod) {
		this.strPayMethod = strPayMethod;
	}

	public String getStrAmount() {
		return strAmount;
	}

	public void setStrAmount(String strAmount) {
		this.strAmount = strAmount;
	}

	public String getStrAmountTax() {
		return strAmountTax;
	}

	public void setStrAmountTax(String strAmountTax) {
		this.strAmountTax = strAmountTax;
	}

	public String getStrTax() {
		return strTax;
	}

	public void setStrTax(String strTax) {
		this.strTax = strTax;
	}

	public String getStrOrgTotal() {
		return strOrgTotal;
	}

	public void setStrOrgTotal(String strOrgTotal) {
		this.strOrgTotal = strOrgTotal;
	}

	public String getStrGrandTotal() {
		return strGrandTotal;
	}

	public void setStrGrandTotal(String strGrandTotal) {
		this.strGrandTotal = strGrandTotal;
	}

	public String getStrDiscount() {
		return strDiscount;
	}

	public void setStrDiscount(String strDiscount) {
		this.strDiscount = strDiscount;
	}

	public String getStrPromotion() {
		return strPromotion;
	}

	public void setStrPromotion(String strPromotion) {
		this.strPromotion = strPromotion;
	}

	public String getStrCreateDateTime() {
		return strCreateDateTime;
	}

	public void setStrCreateDateTime(String strCreateDateTime) {
		this.strCreateDateTime = strCreateDateTime;
	}

	public String getStrStatus() {
		return strStatus;
	}

	public void setStrStatus(String strStatus) {
		this.strStatus = strStatus;
	}

	public String getStrUserName() {
		return strUserName;
	}

	public void setStrUserName(String strUserName) {
		this.strUserName = strUserName;
	}

	public String getStrCustType() {
		return strCustType;
	}

	public void setStrCustType(String strCustType) {
		this.strCustType = strCustType;
	}

	public String getStrTaxRate() {
		return strTaxRate;
	}

	public void setStrTaxRate(String strTaxRate) {
		this.strTaxRate = strTaxRate;
	}

	public String getStrCustId() {
		return strCustId;
	}

	public void setStrCustId(String strCustId) {
		this.strCustId = strCustId;
	}

	public String getStrCustName() {
		return strCustName;
	}

	public void setStrCustName(String strCustName) {
		this.strCustName = strCustName;
	}

	public String getStrCustAddress() {
		return strCustAddress;
	}

	public void setStrCustAddress(String strCustAddress) {
		this.strCustAddress = strCustAddress;
	}

	public String getStrTaxCode() {
		return strTaxCode;
	}

	public void setStrTaxCode(String strTaxCode) {
		this.strTaxCode = strTaxCode;
	}

	public String getStrBillAccount() {
		return strBillAccount;
	}

	public void setStrBillAccount(String strBillAccount) {
		this.strBillAccount = strBillAccount;
	}

	public String getStrExchange() {
		return strExchange;
	}

	public void setStrExchange(String strExchange) {
		this.strExchange = strExchange;
	}

	public String getStrWarrantyTransLogID() {
		return strWarrantyTransLogID;
	}

	public void setStrWarrantyTransLogID(String strWarrantyTransLogID) {
		this.strWarrantyTransLogID = strWarrantyTransLogID;
	}

	public String getStrCompnay() {
		return strCompnay;
	}

	public void setStrCompnay(String strCompnay) {
		this.strCompnay = strCompnay;
	}

	public String getStrProcessStatus() {
		return strProcessStatus;
	}

	public void setStrProcessStatus(String strProcessStatus) {
		this.strProcessStatus = strProcessStatus;
	}

	public String getSessionClientIp() {
		return sessionClientIp;
	}

	public void setSessionClientIp(String sessionClientIp) {
		this.sessionClientIp = sessionClientIp;
	}

	public List<ObjectForDoSomething> getVtHandsetICCIDList() {
		return vtHandsetICCIDList;
	}

	public void setVtHandsetICCIDList(List<ObjectForDoSomething> vtHandsetICCIDList) {
		this.vtHandsetICCIDList = vtHandsetICCIDList;
	}

}
