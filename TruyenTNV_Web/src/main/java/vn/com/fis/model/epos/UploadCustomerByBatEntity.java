package vn.com.fis.model.epos;

public class UploadCustomerByBatEntity
{
	private String batchId;
	private String stockDeliverer;
	private String serial;
	private String status;
	private String descrition;
	private String total;
	private String goods_id;
	private String stock_id;
	private String checkinsert;

	
	
	public String getCheckinsert()
	{
		return checkinsert;
	}
	public void setCheckinsert(String checkinsert)
	{
		this.checkinsert = checkinsert;
	}
	public String getGoods_id()
	{
		return goods_id;
	}
	public void setGoods_id(String goods_id)
	{
		this.goods_id = goods_id;
	}
	public String getStock_id()
	{
		return stock_id;
	}
	public void setStock_id(String stock_id)
	{
		this.stock_id = stock_id;
	}
	public String getBatchId()
	{
		return batchId;
	}
	public void setBatchId(String batchId)
	{
		this.batchId = batchId;
	}
	public String getStockDeliverer()
	{
		return stockDeliverer;
	}
	public void setStockDeliverer(String stockDeliverer)
	{
		this.stockDeliverer = stockDeliverer;
	}
	public String getSerial()
	{
		return serial;
	}
	public void setSerial(String serial)
	{
		this.serial = serial;
	}
	public String getStatus()
	{
		return status;
	}
	public void setStatus(String status)
	{
		this.status = status;
	}
	public String getDescrition()
	{
		return descrition;
	}
	public void setDescrition(String descrition)
	{
		this.descrition = descrition;
	}
	public String getTotal()
	{
		return total;
	}
	public void setTotal(String total)
	{
		this.total = total;
	}
	public UploadCustomerByBatEntity(String batchId, String stockDeliverer, String serial, String status, String descrition, String total)
	{
		super();
		this.batchId = batchId;
		this.stockDeliverer = stockDeliverer;
		this.serial = serial;
		this.status = status;
		this.descrition = descrition;
		this.total = total;
	}
	public UploadCustomerByBatEntity()
	{
		super();
	}
	
}
