package vn.com.fis.model.css;

public class CustomerCriteria  implements java.io.Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	
	private String MDN;
	private String CustomerName;
	private String CustomerType;
	private String SimSerial;
	private String iDCard;
	private String TaxCode;
	private String type_card;
	private String type_card_company;
	private String parent_customer_id;

	public String getParent_customer_id()
	{
		return parent_customer_id;
	}

	public void setParent_customer_id(String parent_customer_id)
	{
		this.parent_customer_id = parent_customer_id;
	}

	private int customerId;

	public String getType_card()
	{
		return type_card;
	}

	public void setType_card(String type_card)
	{
		this.type_card = type_card;
	}

	public String getType_card_company()
	{
		return type_card_company;
	}

	public void setType_card_company(String type_card_company)
	{
		this.type_card_company = type_card_company;
	}

	public String getMDN() {
		return MDN;
	}

	public void setMDN(String MDN) {
		this.MDN = MDN;
	}

	public void setCustomerName(String CustomerName) {
		this.CustomerName = CustomerName;
	}

	public String getCustomerName() {
		return CustomerName;
	}

	public void setCustomerType(String CustomerType) {
		this.CustomerType = CustomerType;
	}

	public String getCustomerType() {
		return CustomerType;
	}

	public void setSimSerial(String SimSerial) {
		this.SimSerial = SimSerial;
	}

	public String getSimSerial() {
		return SimSerial;
	}

	public void setIDCard(String iDCard) {
		this.iDCard = iDCard;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public void setTaxCode(String TaxCode) {
		this.TaxCode = TaxCode;
	}

	public String getIDCard() {
		return iDCard;
	}

	public int getCustomerId() {
		return customerId;
	}

	public String getTaxCode() {
		return TaxCode;
	}

}
