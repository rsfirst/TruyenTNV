package vn.com.fis.model.css;

/**
 * The Class PerPaidSearchCustomerInput.
 */
public class PerPaidSearchCustomerBundleInput implements java.io.Serializable {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 6067086922247878937L;

	private String mdn;
	private String name;
	private String docType;
	private String docNumber;
	private String shopId;

	public String getMdn() {
		return mdn;
	}

	public void setMdn(String mdn) {
		this.mdn = mdn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	public String getDocNumber() {
		return docNumber;
	}

	public void setDocNumber(String docNumber) {
		this.docNumber = docNumber;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

}
