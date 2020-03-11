package vn.com.fis.model.epos;

import java.util.List;

public class TransactionGoodsDetailObject
{

	private String stockId;
	private GoodsList goods;
	private KeyValueObj internalStock;
	private StatesList state;
	private String radio;
	private String typeAction;
	private String goodsQuantity;
	private String strFromSerialClicked;
	private boolean mblnIsFormStockImport;

	private String type; // 0: Ban dut 1: Ky gui
	private String notes;
	private boolean mblnInputToIssue;
	private List<GoodTransactionsModel> lstGoodsTransaction;
	private ApDomainModel resourceSelected;
	private GoodTransactionsModel goodTransSelected;

	private String blExecute;

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public GoodsList getGoods()
	{
		return goods;
	}

	public void setGoods(GoodsList goods)
	{
		this.goods = goods;
	}

	public KeyValueObj getInternalStock()
	{
		return internalStock;
	}

	public void setInternalStock(KeyValueObj internalStock)
	{
		this.internalStock = internalStock;
	}

	public StatesList getState()
	{
		return state;
	}

	public void setState(StatesList state)
	{
		this.state = state;
	}

	public String getRadio()
	{
		return radio;
	}

	public void setRadio(String radio)
	{
		this.radio = radio;
	}

	public String getTypeAction()
	{
		return typeAction;
	}

	public void setTypeAction(String typeAction)
	{
		this.typeAction = typeAction;
	}

	public String getGoodsQuantity()
	{
		return goodsQuantity;
	}

	public void setGoodsQuantity(String goodsQuantity)
	{
		this.goodsQuantity = goodsQuantity;
	}

	public String getStrFromSerialClicked()
	{
		return strFromSerialClicked;
	}

	public void setStrFromSerialClicked(String strFromSerialClicked)
	{
		this.strFromSerialClicked = strFromSerialClicked;
	}

	public boolean isMblnIsFormStockImport()
	{
		return mblnIsFormStockImport;
	}

	public void setMblnIsFormStockImport(boolean mblnIsFormStockImport)
	{
		this.mblnIsFormStockImport = mblnIsFormStockImport;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getNotes()
	{
		return notes;
	}

	public void setNotes(String notes)
	{
		this.notes = notes;
	}

	public boolean isMblnInputToIssue()
	{
		return mblnInputToIssue;
	}

	public void setMblnInputToIssue(boolean mblnInputToIssue)
	{
		this.mblnInputToIssue = mblnInputToIssue;
	}

	public List<GoodTransactionsModel> getLstGoodsTransaction()
	{
		return lstGoodsTransaction;
	}

	public void setLstGoodsTransaction(List<GoodTransactionsModel> lstGoodsTransaction)
	{
		this.lstGoodsTransaction = lstGoodsTransaction;
	}

	public ApDomainModel getResourceSelected()
	{
		return resourceSelected;
	}

	public void setResourceSelected(ApDomainModel resourceSelected)
	{
		this.resourceSelected = resourceSelected;
	}

	public GoodTransactionsModel getGoodTransSelected()
	{
		return goodTransSelected;
	}

	public void setGoodTransSelected(GoodTransactionsModel goodTransSelected)
	{
		this.goodTransSelected = goodTransSelected;
	}

	public String getBlExecute()
	{
		return blExecute;
	}

	public void setBlExecute(String blExecute)
	{
		this.blExecute = blExecute;
	}

}
