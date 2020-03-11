package vn.com.fis.model.epos;

import java.util.List;

public class ReportInput
{
	private String sessionShopCode;
	private String sessionShopName;
	private List<EnquerySerialObj> lstTablesGoods;
	private String fileTempName;
	private String fileType;
	private List<ParamsSaleDealerObj> lstDetailTrans;

	public String getSessionShopCode()
	{
		return sessionShopCode;
	}

	public void setSessionShopCode(String sessionShopCode)
	{
		this.sessionShopCode = sessionShopCode;
	}

	public String getSessionShopName()
	{
		return sessionShopName;
	}

	public void setSessionShopName(String sessionShopName)
	{
		this.sessionShopName = sessionShopName;
	}

	public List<EnquerySerialObj> getLstTablesGoods()
	{
		return lstTablesGoods;
	}

	public void setLstTablesGoods(List<EnquerySerialObj> lstTablesGoods)
	{
		this.lstTablesGoods = lstTablesGoods;
	}

	public String getFileTempName()
	{
		return fileTempName;
	}

	public void setFileTempName(String fileTempName)
	{
		this.fileTempName = fileTempName;
	}

	public String getFileType()
	{
		return fileType;
	}

	public void setFileType(String fileType)
	{
		this.fileType = fileType;
	}

	public List<ParamsSaleDealerObj> getLstDetailTrans()
	{
		return lstDetailTrans;
	}

	public void setLstDetailTrans(List<ParamsSaleDealerObj> lstDetailTrans)
	{
		this.lstDetailTrans = lstDetailTrans;
	}

}
