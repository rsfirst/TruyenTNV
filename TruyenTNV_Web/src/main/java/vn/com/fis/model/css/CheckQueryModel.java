package vn.com.fis.model.css;

public class CheckQueryModel {
	private String strMessWarning;
	private String strTotalWarning;
	public String getStrMessWarning() {
		return strMessWarning;
	}
	public void setStrMessWarning(String strMessWarning) {
		this.strMessWarning = strMessWarning;
	}
	public String getStrTotalWarning() {
		return strTotalWarning;
	}
	public void setStrTotalWarning(String strTotalWarning) {
		this.strTotalWarning = strTotalWarning;
	}
	public CheckQueryModel(String strMessWarning, String strTotalWarning) {
		super();
		this.strMessWarning = strMessWarning;
		this.strTotalWarning = strTotalWarning;
	}
	public CheckQueryModel() {
		
	}
	
	
}
