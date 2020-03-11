package vn.com.fis.model.css;

import java.io.Serializable;

public class TransferOwerShipInput  implements Serializable 
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	private RequestChangeServicePanel customer;

	private SecondInfomationModel secondInfomationModel;
	
	private RegisterSubInfoObject rsObject;
	
	
	public RegisterSubInfoObject getRsObject()
	{
		return rsObject;
	}

	public void setRsObject(RegisterSubInfoObject rsObject)
	{
		this.rsObject = rsObject;
	}

	public RequestChangeServicePanel getCustomer()
	{
		return customer;
	}

	public void setCustomer(RequestChangeServicePanel customer)
	{
		this.customer = customer;
	}
	
	public SecondInfomationModel getSecondInfomationModel()
	{
		return secondInfomationModel;
	}

	public void setSecondInfomationModel(SecondInfomationModel secondInfomationModel)
	{
		this.secondInfomationModel = secondInfomationModel;
	}

}
