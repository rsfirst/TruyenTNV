package vn.com.fis.model.epos;

public class StockTransactionSearchInputObject {
	private String stockId;
	private String shopId;
	private String derliverStockId;
	private String beginDate;
	private String endDate;
	private String type;
	private String inspectCmdStatus;
	private String inspectCmdCode;
	private String reasonId;
	private String cmdStatus;

	public String getCmdStatus()
	{
		return cmdStatus;
	}

	public void setCmdStatus(String cmdStatus)
	{
		this.cmdStatus = cmdStatus;
	}

	public StockTransactionSearchInputObject() {
		// TODO Auto-generated constructor stub
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public StockTransactionSearchInputObject(String stockId, String shopId, String derliverStockId, String beginDate,
			String endDate, String inspectCmdStatus, String inspectCmdCode, String reasonId) {
		super();
		this.stockId = stockId;
		this.shopId = shopId;
		this.derliverStockId = derliverStockId;
		this.beginDate = beginDate;
		this.endDate = endDate;
		this.inspectCmdStatus = inspectCmdStatus;
		this.inspectCmdCode = inspectCmdCode;
		this.reasonId = reasonId;
	}

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getDerliverStockId() {
		return derliverStockId;
	}

	public void setDerliverStockId(String derliverStockId) {
		this.derliverStockId = derliverStockId;
	}

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getInspectCmdStatus() {
		return inspectCmdStatus;
	}

	public void setInspectCmdStatus(String inspectCmdStatus) {
		this.inspectCmdStatus = inspectCmdStatus;
	}

	public String getInspectCmdCode() {
		return inspectCmdCode;
	}

	public void setInspectCmdCode(String inspectCmdCode) {
		this.inspectCmdCode = inspectCmdCode;
	}

	public String getReasonId() {
		return reasonId;
	}

	public void setReasonId(String reasonId) {
		this.reasonId = reasonId;
	}

}
