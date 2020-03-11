package vn.com.fis.model.css;

public class BillInvoiceObjectPr
{
	private BillInvoiceObject itemBillInvoice;
	private String shopCode;
	private String shopId;
	private String shopType;

	public BillInvoiceObject getItemBillInvoice()
	{
		return itemBillInvoice;
	}

	public void setItemBillInvoice(BillInvoiceObject itemBillInvoice)
	{
		this.itemBillInvoice = itemBillInvoice;
	}

	public String getShopCode()
	{
		return shopCode;
	}

	public void setShopCode(String shopCode)
	{
		this.shopCode = shopCode;
	}

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	public String getShopType()
	{
		return shopType;
	}

	public void setShopType(String shopType)
	{
		this.shopType = shopType;
	}

}
