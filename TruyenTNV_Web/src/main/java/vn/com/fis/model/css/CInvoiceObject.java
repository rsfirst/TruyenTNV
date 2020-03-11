package vn.com.fis.model.css;

public class CInvoiceObject {

	public CInvoiceObject() {

	}

	private int index;
	private String cInvoiceId;
	private String invoiceOldId;
	private String invoiceNewId;
	private String transInvId;
	private String invoiceType;
	private String invoiceQuery;
	private String createDate;
	private String userCreate;
	private String billInvoiceType;
	private String invoiceFull;
	private String invoiceStatus;
	private String email;
	private String linkPrint;
	private String shopCode;
	private String result;
	private String invoiceId;

	private String invoiceStatusName;

	public String getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String logData() {
		StringBuilder str = new StringBuilder();
		str.append("cInvoiceId = " + this.cInvoiceId + ";");
		str.append("invoiceOldId = " + this.invoiceOldId + ";");
		str.append("invoiceNewId = " + this.invoiceNewId + ";");
		str.append("transInvId = " + this.transInvId + ";");
		str.append("invoiceType = " + this.invoiceType + ";");
		str.append("invoiceQuery = " + this.invoiceQuery + ";");
		str.append("createDate = " + this.createDate + ";");
		str.append("userCreate = " + this.userCreate + ";");
		str.append("billInvoiceType = " + this.billInvoiceType + ";");
		str.append("invoiceFull = " + this.invoiceFull + ";");
		str.append("invoiceStatus = " + this.invoiceStatus + ";");
		str.append("email = " + this.email + ";");
		str.append("linkPrint = " + this.linkPrint + ";");
		str.append("shopCode = " + this.shopCode + ";");

		return str.toString();
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public String getInvoiceStatusName() {
		return invoiceStatusName;
	}

	public void setInvoiceStatusName(String invoiceStatusName) {
		this.invoiceStatusName = invoiceStatusName;
	}

	public String getcInvoiceId() {
		return cInvoiceId;
	}

	public void setcInvoiceId(String cInvoiceId) {
		this.cInvoiceId = cInvoiceId;
	}

	public String getInvoiceOldId() {
		return invoiceOldId;
	}

	public void setInvoiceOldId(String invoiceOldId) {
		this.invoiceOldId = invoiceOldId;
	}

	public String getInvoiceNewId() {
		return invoiceNewId;
	}

	public void setInvoiceNewId(String invoiceNewId) {
		this.invoiceNewId = invoiceNewId;
	}

	public String getTransInvId() {
		return transInvId;
	}

	public void setTransInvId(String transInvId) {
		this.transInvId = transInvId;
	}

	public String getInvocieType() {
		return invoiceType;
	}

	public void setInvocieType(String invoiceType) {
		this.invoiceType = invoiceType;
	}

	public String getInvocieQuery() {
		return invoiceQuery;
	}

	public void setInvocieQuery(String invoiceQuery) {
		this.invoiceQuery = invoiceQuery;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getUserCreate() {
		return userCreate;
	}

	public void setUserCreate(String userCreate) {
		this.userCreate = userCreate;
	}

	public String getBillInvoiceType() {
		return billInvoiceType;
	}

	public void setBillInvoiceType(String billInvoiceType) {
		this.billInvoiceType = billInvoiceType;
	}

	public String getInvoiceFull() {
		return invoiceFull;
	}

	public void setInvoiceFull(String invoiceFull) {
		this.invoiceFull = invoiceFull;
	}

	public String getInvoiceStatus() {
		return invoiceStatus;
	}

	public void setInvoiceStatus(String invoiceStatus) {
		this.invoiceStatus = invoiceStatus;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getInvoiceType() {
		return invoiceType;
	}

	public void setInvoiceType(String invoiceType) {
		this.invoiceType = invoiceType;
	}

	public String getInvoiceQuery() {
		return invoiceQuery;
	}

	public void setInvoiceQuery(String invoiceQuery) {
		this.invoiceQuery = invoiceQuery;
	}

	public String getLinkPrint() {
		return linkPrint;
	}

	public void setLinkPrint(String linkPrint) {
		this.linkPrint = linkPrint;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

}
