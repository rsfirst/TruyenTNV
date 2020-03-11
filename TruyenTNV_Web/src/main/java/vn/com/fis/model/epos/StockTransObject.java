package vn.com.fis.model.epos;

import java.util.List;

public class StockTransObject 
{
	private String sessionStockShopID;
	private String delivererStockID;
	private String execCode;
	private String execName;
	private String execNote;
	private String reasonID;
	private String reasonCode;
	private String type;
	private String internalStockId;
	private String resourceCode;
	private List<GoodTransactionsModel> lstGoodsTransaction;
	private String getFromStockTransID;
	private String cmdName;
	private String cmdNode;
	private String inspectCmdCode;
	private String inspectCmdName;
	private String cmdStaffId;
	private String inspectCmdNote;
	private String sessionUserName;
	private List<StockTransactionDetailActionModel> lstGoodsTransactionModel;
	
	
	
	public List<StockTransactionDetailActionModel> getLstGoodsTransactionModel() {
		return lstGoodsTransactionModel;
	}

	public void setLstGoodsTransactionModel(List<StockTransactionDetailActionModel> lstGoodsTransactionModel) {
		this.lstGoodsTransactionModel = lstGoodsTransactionModel;
	}

	public String getInspectCmdCode() {
		return inspectCmdCode;
	}

	public void setInspectCmdCode(String inspectCmdCode) {
		this.inspectCmdCode = inspectCmdCode;
	}

	public String getInspectCmdName() {
		return inspectCmdName;
	}

	public void setInspectCmdName(String inspectCmdName) {
		this.inspectCmdName = inspectCmdName;
	}

	public String getCmdStaffId() {
		return cmdStaffId;
	}

	public void setCmdStaffId(String cmdStaffId) {
		this.cmdStaffId = cmdStaffId;
	}

	public String getInspectCmdNote() {
		return inspectCmdNote;
	}

	public void setInspectCmdNote(String inspectCmdNote) {
		this.inspectCmdNote = inspectCmdNote;
	}

	public String getSessionUserName() {
		return sessionUserName;
	}

	public void setSessionUserName(String sessionUserName) {
		this.sessionUserName = sessionUserName;
	}

	public String getCmdName() {
		return cmdName;
	}

	public void setCmdName(String cmdName) {
		this.cmdName = cmdName;
	}

	public String getCmdNode() {
		return cmdNode;
	}

	public void setCmdNode(String cmdNode) {
		this.cmdNode = cmdNode;
	}

	private String staffId;
	private String ID;
	private String cmdCode;
	private String vstrFromPartner;
	private String stockId;
	private String execStaffID;
	private String inspectCmdStaffId;
	public String getInspectCmdStaffId() {
		return inspectCmdStaffId;
	}

	public void setInspectCmdStaffId(String inspectCmdStaffId) {
		this.inspectCmdStaffId = inspectCmdStaffId;
	}

	public String getSessionStockShopID() {
		return sessionStockShopID;
	}

	public void setSessionStockShopID(String sessionStockShopID) {
		this.sessionStockShopID = sessionStockShopID;
	}

	public String getDelivererStockID() {
		return delivererStockID;
	}

	public void setDelivererStockID(String delivererStockID) {
		this.delivererStockID = delivererStockID;
	}

	public String getExecCode() {
		return execCode;
	}

	public void setExecCode(String execCode) {
		this.execCode = execCode;
	}

	public String getExecName() {
		return execName;
	}

	public void setExecName(String execName) {
		this.execName = execName;
	}

	public String getExecNote() {
		return execNote;
	}

	public void setExecNote(String execNote) {
		this.execNote = execNote;
	}

	public String getReasonID() {
		return reasonID;
	}

	public void setReasonID(String reasonID) {
		this.reasonID = reasonID;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getInternalStockId() {
		return internalStockId;
	}

	public void setInternalStockId(String internalStockId) {
		this.internalStockId = internalStockId;
	}

	public String getResourceCode() {
		return resourceCode;
	}

	public void setResourceCode(String resourceCode) {
		this.resourceCode = resourceCode;
	}

	public List<GoodTransactionsModel> getLstGoodsTransaction() {
		return lstGoodsTransaction;
	}

	public void setLstGoodsTransaction(List<GoodTransactionsModel> lstGoodsTransaction) {
		this.lstGoodsTransaction = lstGoodsTransaction;
	}

	public String getStaffId() {
		return staffId;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getCmdCode() {
		return cmdCode;
	}

	public void setCmdCode(String cmdCode) {
		this.cmdCode = cmdCode;
	}

	public String getGetFromStockTransID() {
		return getFromStockTransID;
	}

	public void setGetFromStockTransID(String getFromStockTransID) {
		this.getFromStockTransID = getFromStockTransID;
	}

	public String getVstrFromPartner() {
		return vstrFromPartner;
	}

	public void setVstrFromPartner(String vstrFromPartner) {
		this.vstrFromPartner = vstrFromPartner;
	}

	public String getReasonCode()
	{
		return reasonCode;
	}

	public void setReasonCode(String reasonCode)
	{
		this.reasonCode = reasonCode;
	}

	public String getStockId()
	{
		return stockId;
	}

	public void setStockId(String stockId)
	{
		this.stockId = stockId;
	}

	public String getExecStaffID()
	{
		return execStaffID;
	}

	public void setExecStaffID(String execStaffID)
	{
		this.execStaffID = execStaffID;
	}

}
