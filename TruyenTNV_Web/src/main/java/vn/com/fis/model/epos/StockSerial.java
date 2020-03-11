package vn.com.fis.model.epos;

public class StockSerial {

	private String stockId;
	private String goodsId;
	private String stateId;
	private String serial;
	private String status;
	private String isdn;
	private String isdnStatus;
	private String importDatetime;
	private String partnerId;
	private String failureNote;

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public String getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}

	public String getStateId() {
		return stateId;
	}

	public void setStateId(String stateId) {
		this.stateId = stateId;
	}

	public String getSerial() {
		return serial;
	}

	public void setSerial(String serial) {
		this.serial = serial;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getIsdn() {
		return isdn;
	}

	public void setIsdn(String isdn) {
		this.isdn = isdn;
	}

	public String getIsdnStatus() {
		return isdnStatus;
	}

	public void setIsdnStatus(String isdnStatus) {
		this.isdnStatus = isdnStatus;
	}

	public String getImportDatetime() {
		return importDatetime;
	}

	public void setImportDatetime(String importDatetime) {
		this.importDatetime = importDatetime;
	}

	public String getPartnerId() {
		return partnerId;
	}

	public void setPartnerId(String partnerId) {
		this.partnerId = partnerId;
	}

	public String getFailureNote() {
		return failureNote;
	}

	public void setFailureNote(String failureNote) {
		this.failureNote = failureNote;
	}

}
