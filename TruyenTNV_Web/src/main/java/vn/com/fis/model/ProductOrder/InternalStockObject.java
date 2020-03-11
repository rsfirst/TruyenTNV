package vn.com.fis.model.ProductOrder;
//ThangPC6 add new object [Loai hang hoa]
//Hang dung de ban,Hang dung bao hanh,Muc đich khac
public class InternalStockObject
{
	
	public InternalStockObject()
	{

	}
	
	long internalStockId;
	String name;
	
	public InternalStockObject(long internalStockId, String name)
	{
		this.internalStockId = internalStockId;
		this.name = name;
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
}
