package vn.com.fis.model.epos;

public class DataImportWarranty {
	private onSearchExportToDealer  item;
	private String name;
	private  String stockTransId; 

	
	
	/**
	 * @return the stockTransId
	 */
	public String getStockTransId()
	{
		return stockTransId;
	}
	/**
	 * @param stockTransId the stockTransId to set
	 */
	public void setStockTransId(String stockTransId)
	{
		this.stockTransId = stockTransId;
	}

	public onSearchExportToDealer getItem() {
		return item;
	}
	public void setItem(onSearchExportToDealer item) {
		this.item = item;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
