package vn.com.fis.model.ProductOrder;

import java.util.Date;
import java.util.List;

public class DOResponse
{
	String doCode;
	String poCode;
	String soCode;
	

	String poDate; 
	

	String erpSyncDate; 
	

	String doEnterDate; 
	
	int doStatus;
	
	String note;
	String shopCode;
	String provinceCode;
	
	long totalQuantity;
	double weight;
	
	List<DOdetails> doDetails;

	@Override
	public String toString()
	{
		return "DOResponse [doCode=" + doCode + ", poCode=" + poCode + ", soCode=" + soCode + ", poDate=" + poDate
				+ ", erpSyncDate=" + erpSyncDate + ", doEnterDate=" + doEnterDate + ", doStatus=" + doStatus + ", note="
				+ note + ", shopCode=" + shopCode + ", provinceCode=" + provinceCode + ", totalQuantity="
				+ totalQuantity + ", weight=" + weight + ", doDetails=" + doDetails + "]";
	}

	public DOResponse()
	{
	}

	public DOResponse(String doCode, String poCode, String soCode, String poDate, String erpSyncDate, String doEnterDate,
			int doStatus, String note, String shopCode, String provinceCode, long totalQuantity, double weight,
			List<DOdetails> doDetails)
	{
		this.doCode = doCode;
		this.poCode = poCode;
		this.soCode = soCode;
		this.poDate = poDate;
		this.erpSyncDate = erpSyncDate;
		this.doEnterDate = doEnterDate;
		this.doStatus = doStatus;
		this.note = note;
		this.shopCode = shopCode;
		this.provinceCode = provinceCode;
		this.totalQuantity = totalQuantity;
		this.weight = weight;
		this.doDetails = doDetails;
	}
	
	public DOResponse(String doCode, String poCode, String soCode, String poDate, String erpSyncDate, String doEnterDate,
			int doStatus, String note, String shopCode, String provinceCode, long totalQuantity, double weight)
	{
		this.doCode = doCode;
		this.poCode = poCode;
		this.soCode = soCode;
		this.poDate = poDate;
		this.erpSyncDate = erpSyncDate;
		this.doEnterDate = doEnterDate;
		this.doStatus = doStatus;
		this.note = note;
		this.shopCode = shopCode;
		this.provinceCode = provinceCode;
		this.totalQuantity = totalQuantity;
		this.weight = weight;
	}

	public String getDoCode()
	{
		return doCode;
	}

	public void setDoCode(String doCode)
	{
		this.doCode = doCode;
	}

	public String getPoCode()
	{
		return poCode;
	}

	public void setPoCode(String poCode)
	{
		this.poCode = poCode;
	}

	public String getSoCode()
	{
		return soCode;
	}

	public void setSoCode(String soCode)
	{
		this.soCode = soCode;
	}

	public String getPoDate()
	{
		return poDate;
	}

	public void setPoDate(String poDate)
	{
		this.poDate = poDate;
	}

	public String getErpSyncDate()
	{
		return erpSyncDate;
	}

	public void setErpSyncDate(String erpSyncDate)
	{
		this.erpSyncDate = erpSyncDate;
	}

	public String getDoEnterDate()
	{
		return doEnterDate;
	}

	public void setDoEnterDate(String doEnterDate)
	{
		this.doEnterDate = doEnterDate;
	}

	public int getDoStatus()
	{
		return doStatus;
	}

	public void setDoStatus(int doStatus)
	{
		this.doStatus = doStatus;
	}

	public String getNote()
	{
		return note;
	}

	public void setNote(String note)
	{
		this.note = note;
	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	public String getProvinceCode()
	{
		return provinceCode;
	}

	public void setProvinceCode(String provinceCode)
	{
		this.provinceCode = provinceCode;
	}

	public long getTotalQuantity()
	{
		return totalQuantity;
	}

	public void setTotalQuantity(long totalQuantity)
	{
		this.totalQuantity = totalQuantity;
	}

	public double getWeight()
	{
		return weight;
	}

	public void setWeight(double weight)
	{
		this.weight = weight;
	}

	public List<DOdetails> getDoDetails()
	{
		return doDetails;
	}

	public void setDoDetails(List<DOdetails> doDetails)
	{
		this.doDetails = doDetails;
	}
	
}
