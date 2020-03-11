package vn.com.fis.model.epos;

public class GoodsGroupsList {

	private String goodsGroupId;
	private String goodsGroupCode;
	private String name;
	private String type;
	private String status;
	private String notes;

	public String getGoodsGroupId() {
		return goodsGroupId;
	}

	public void setGoodsGroupId(String goodsGroupId) {
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

	public String getGoodsGroupCode() {
		return goodsGroupCode;
	}

	public void setGoodsGroupCode(String goodsGroupCode) {
		this.goodsGroupCode = goodsGroupCode;
	}

}
