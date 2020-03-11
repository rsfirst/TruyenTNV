package vn.com.fis.model.epos;

public class StockObject {

	public StockObject() {

	}

	public StockObject(long stockId, String code, String name, String status) {
		super();
		this.stockId = stockId;
		this.code = code;
		this.name = name;
		this.status = status;
	}

	long stockId;
	long shopStaffId;
	long staffId;
	long shopStaffParentId;
	String code;
	String name;
	String type;
	String status;
	String nodeCode;
	String parentNodeCode;
	Long nodeOrder;
	Long staffOfStock;
	String address;
	String tel;
	String fax;

	int level; // phuc vu ve lai tree stock

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public long getStockId() {
		return stockId;
	}

	public void setStockId(long stockId) {
		this.stockId = stockId;
	}

	public long getShopStaffId() {
		return shopStaffId;
	}

	public void setShopStaffId(long shopStaffId) {
		this.shopStaffId = shopStaffId;
	}

	public long getStaffId() {
		return staffId;
	}

	public void setStaffId(long staffId) {
		this.staffId = staffId;
	}

	public long getShopStaffParentId() {
		return shopStaffParentId;
	}

	public void setShopStaffParentId(long shopStaffParentId) {
		this.shopStaffParentId = shopStaffParentId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
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

	public String getNodeCode() {
		return nodeCode;
	}

	public void setNodeCode(String nodeCode) {
		this.nodeCode = nodeCode;
	}

	public String getParentNodeCode() {
		return parentNodeCode;
	}

	public void setParentNodeCode(String parentNodeCode) {
		this.parentNodeCode = parentNodeCode;
	}

	public Long getNodeOrder() {
		return nodeOrder;
	}

	public void setNodeOrder(Long nodeOrder) {
		this.nodeOrder = nodeOrder;
	}

	public Long getStaffOfStock() {
		return staffOfStock;
	}

	public void setStaffOfStock(Long staffOfStock) {
		this.staffOfStock = staffOfStock;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

}