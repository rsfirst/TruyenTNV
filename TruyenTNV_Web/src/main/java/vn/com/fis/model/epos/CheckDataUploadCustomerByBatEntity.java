package vn.com.fis.model.epos;

import java.util.List;

public class CheckDataUploadCustomerByBatEntity
{
	private String BatchId;
	private String StockDeliverer;
	private String Serial;
	private String Status;
	private String Descrition;
	private String Total;
	
	 List<UploadCustomerByBatEntity> lisdatacheck;
	 
		public List<UploadCustomerByBatEntity> getLisdatacheck()
		{
			return lisdatacheck;
		}
		public void setLisdatacheck(List<UploadCustomerByBatEntity> lisdatacheck)
		{
			this.lisdatacheck = lisdatacheck;
		}
	
	public CheckDataUploadCustomerByBatEntity()
		{
			super();
		}
	public CheckDataUploadCustomerByBatEntity(String batchId, String stockDeliverer, String serial, String status, String descrition, String total,
				List<UploadCustomerByBatEntity> lisdatacheck)
		{
			super();
			BatchId = batchId;
			StockDeliverer = stockDeliverer;
			Serial = serial;
			Status = status;
			Descrition = descrition;
			Total = total;
			this.lisdatacheck = lisdatacheck;
		}
	public String getBatchId()
	{
		return BatchId;
	}
	public void setBatchId(String batchId)
	{
		BatchId = batchId;
	}
	public String getStockDeliverer()
	{
		return StockDeliverer;
	}
	public void setStockDeliverer(String stockDeliverer)
	{
		StockDeliverer = stockDeliverer;
	}
	public String getSerial()
	{
		return Serial;
	}
	public void setSerial(String serial)
	{
		Serial = serial;
	}
	public String getStatus()
	{
		return Status;
	}
	public void setStatus(String status)
	{
		Status = status;
	}
	public String getDescrition()
	{
		return Descrition;
	}
	public void setDescrition(String descrition)
	{
		Descrition = descrition;
	}
	public String getTotal()
	{
		return Total;
	}
	public void setTotal(String total)
	{
		Total = total;
	}
	
}
