package vn.com.fis.model.css;

public class InternalStockOutput 
{
	long internalStockId = 0L;
	String name = "";
	String status = "";
	
	public InternalStockOutput(long id, String name, String status)
	{
		this.internalStockId = id;
		this.name = name;
		this.status = status;
	}
	public long getInternalStockId() {
		return internalStockId;
	}
	public void setInternalStockId(long internalStockId) {
		this.internalStockId = internalStockId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public InternalStockOutput() {
	}
	
}
