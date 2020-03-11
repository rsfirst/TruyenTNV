package vn.com.fis.model.epos;

import java.util.List;

public class EnquerySerialFileObj
{

	private List<EnquerySerialObj> vtSearchResult;
	private List<EnquerySerialObj> vtSerialnofount;

	public List<EnquerySerialObj> getVtSearchResult()
	{
		return vtSearchResult;
	}

	public void setVtSearchResult(List<EnquerySerialObj> vtSearchResult)
	{
		this.vtSearchResult = vtSearchResult;
	}

	public List<EnquerySerialObj> getVtSerialnofount()
	{
		return vtSerialnofount;
	}

	public void setVtSerialnofount(List<EnquerySerialObj> vtSerialnofount)
	{
		this.vtSerialnofount = vtSerialnofount;
	}

}
