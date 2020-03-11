package vn.com.fis.model.ProductOrder;
//ThangPC6 add new object [Nhom mat hang]
public class GoodGroupObject
{
	
	public GoodGroupObject()
	{

	}
	
	long goodsGroupId;
	String name;
	String type;
	String status;
	String notes;
	
	public GoodGroupObject(long goodsGroupId, String name, String type, String status, String notes)
	{
		this.goodsGroupId = goodsGroupId;
		this.name = name;
		this.name = type;
		this.status = status;
		this.name = notes;
	}

	public long getGoodsGroupId() {
		return goodsGroupId;
	}

	public void setGoodsGroupId(long goodsGroupId) {
		this.goodsGroupId = goodsGroupId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
}
