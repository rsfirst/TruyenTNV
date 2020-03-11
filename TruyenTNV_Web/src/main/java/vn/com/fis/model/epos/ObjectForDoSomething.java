package vn.com.fis.model.epos;

import java.util.List;

public class ObjectForDoSomething {
	private List<GoodTransactionsModel> lstGoodsTransaction;
	private String receiptCode;
	private int mintCurrentAction;

	public int getMintCurrentAction() {
		return mintCurrentAction;
	}

	public void setMintCurrentAction(int mintCurrentAction) {
		this.mintCurrentAction = mintCurrentAction;
	}

	private String mstrFromSerial;
	private String mstrToSerial;
	private String mstrShopID;
	private String mstrGoodsCode;
	private String mstrStateID;
	private String mstrStatus;
	private List<TransactionSerialList> lstSerial;
	private String sessionShopID;
	private String mstrGoodsId;
	private List<GoodsList> lstGoods;
	private String strPriceType;
	private String dblRatio;
	private List<GoodsSaleTransaction> lstGoodsSaleTransaction;
	private List<GoodsMGMGModel> lstGoodsMGMGModel;
	private String transactionId;
	private List<GoodsMGMGModel> mgmgGoodsSerialOld;	

	/**
	 * @return the mgmgGoodsSerialOld
	 */
	public List<GoodsMGMGModel> getMgmgGoodsSerialOld() {
		return mgmgGoodsSerialOld;
	}

	/**
	 * @param mgmgGoodsSerialOld the mgmgGoodsSerialOld to set
	 */
	public void setMgmgGoodsSerialOld(List<GoodsMGMGModel> mgmgGoodsSerialOld) {
		this.mgmgGoodsSerialOld = mgmgGoodsSerialOld;
	}

	public List<GoodsMGMGModel> getLstGoodsMGMGModel() {
		return lstGoodsMGMGModel;
	}

	public void setLstGoodsMGMGModel(List<GoodsMGMGModel> lstGoodsMGMGModel) {
		this.lstGoodsMGMGModel = lstGoodsMGMGModel;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

	public String getStrPriceType() {
		return strPriceType;
	}

	public void setStrPriceType(String strPriceType) {
		this.strPriceType = strPriceType;
	}

	public String getDblRatio() {
		return dblRatio;
	}

	public void setDblRatio(String dblRatio) {
		this.dblRatio = dblRatio;
	}

	public List<GoodsSaleTransaction> getLstGoodsSaleTransaction() {
		return lstGoodsSaleTransaction;
	}

	public void setLstGoodsSaleTransaction(List<GoodsSaleTransaction> lstGoodsSaleTransaction) {
		this.lstGoodsSaleTransaction = lstGoodsSaleTransaction;
	}

	/**
	 * @return the mstrGoodsId
	 */
	public String getMstrGoodsId() {
		return mstrGoodsId;
	}

	/**
	 * @param mstrGoodsId
	 *            the mstrGoodsId to set
	 */
	public void setMstrGoodsId(String mstrGoodsId) {
		this.mstrGoodsId = mstrGoodsId;
	}

	/**
	 * @return the lstGoods
	 */
	public List<GoodsList> getLstGoods() {
		return lstGoods;
	}

	/**
	 * @param lstGoods
	 *            the lstGoods to set
	 */
	public void setLstGoods(List<GoodsList> lstGoods) {
		this.lstGoods = lstGoods;
	}

	public List<GoodTransactionsModel> getLstGoodsTransaction() {
		return lstGoodsTransaction;
	}

	public void setLstGoodsTransaction(List<GoodTransactionsModel> lstGoodsTransaction) {
		this.lstGoodsTransaction = lstGoodsTransaction;
	}

	public String getReceiptCode() {
		return receiptCode;
	}

	public void setReceiptCode(String receiptCode) {
		this.receiptCode = receiptCode;
	}

	public String getMstrFromSerial() {
		return mstrFromSerial;
	}

	public void setMstrFromSerial(String mstrFromSerial) {
		this.mstrFromSerial = mstrFromSerial;
	}

	public String getMstrToSerial() {
		return mstrToSerial;
	}

	public void setMstrToSerial(String mstrToSerial) {
		this.mstrToSerial = mstrToSerial;
	}

	public String getMstrShopID() {
		return mstrShopID;
	}

	public void setMstrShopID(String mstrShopID) {
		this.mstrShopID = mstrShopID;
	}

	public String getMstrGoodsCode() {
		return mstrGoodsCode;
	}

	public void setMstrGoodsCode(String mstrGoodsCode) {
		this.mstrGoodsCode = mstrGoodsCode;
	}

	public String getMstrStateID() {
		return mstrStateID;
	}

	public void setMstrStateID(String mstrStateID) {
		this.mstrStateID = mstrStateID;
	}

	public String getMstrStatus() {
		return mstrStatus;
	}

	public void setMstrStatus(String mstrStatus) {
		this.mstrStatus = mstrStatus;
	}

	public List<TransactionSerialList> getLstSerial() {
		return lstSerial;
	}

	public void setLstSerial(List<TransactionSerialList> lstSerial) {
		this.lstSerial = lstSerial;
	}

	public String getSessionShopID() {
		return sessionShopID;
	}

	public void setSessionShopID(String sessionShopID) {
		this.sessionShopID = sessionShopID;
	}

	private String mstrGoodID;
	private String mstrQuantity;
	private String mstrPrice;
	private String mstrPriceTypeID;
	private String discountTotal;
	private String discountId;

	public String getMstrGoodID() {
		return mstrGoodID;
	}

	public void setMstrGoodID(String mstrGoodID) {
		this.mstrGoodID = mstrGoodID;
	}

	public String getMstrQuantity() {
		return mstrQuantity;
	}

	public void setMstrQuantity(String mstrQuantity) {
		this.mstrQuantity = mstrQuantity;
	}

	public String getMstrPrice() {
		return mstrPrice;
	}

	public void setMstrPrice(String mstrPrice) {
		this.mstrPrice = mstrPrice;
	}

	public String getMstrPriceTypeID() {
		return mstrPriceTypeID;
	}

	public void setMstrPriceTypeID(String mstrPriceTypeID) {
		this.mstrPriceTypeID = mstrPriceTypeID;
	}

	public String getDiscountTotal() {
		return discountTotal;
	}

	public void setDiscountTotal(String discountTotal) {
		this.discountTotal = discountTotal;
	}

	public String getDiscountId() {
		return discountId;
	}

	public void setDiscountId(String discountId) {
		this.discountId = discountId;
	}

	private String transType;
	private String goodsId;
	private String stockId;
	private List<InputSerialModel> mvctUsageSerial;
	private String flag;
	private String formName;
	private List<GoodsSaleTransaction> lstTableGoods;
	private String goodsCode;
	private List<String> lstStrSerial;
	private List<SerialPromotionModel> lstSerialPromotion;

	public List<String> getLstStrSerial() {
		return lstStrSerial;
	}

	public void setLstStrSerial(List<String> lstStrSerial) {
		this.lstStrSerial = lstStrSerial;
	}

	public List<SerialPromotionModel> getLstSerialPromotion() {
		return lstSerialPromotion;
	}

	public void setLstSerialPromotion(List<SerialPromotionModel> lstSerialPromotion) {
		this.lstSerialPromotion = lstSerialPromotion;
	}

	public String getTransType() {
		return transType;
	}

	public void setTransType(String transType) {
		this.transType = transType;
	}

	public String getGoodsId() {
		return goodsId;
	}

	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}

	public String getStockId() {
		return stockId;
	}

	public void setStockId(String stockId) {
		this.stockId = stockId;
	}

	public List<InputSerialModel> getMvctUsageSerial() {
		return mvctUsageSerial;
	}

	public void setMvctUsageSerial(List<InputSerialModel> mvctUsageSerial) {
		this.mvctUsageSerial = mvctUsageSerial;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getFormName() {
		return formName;
	}

	public void setFormName(String formName) {
		this.formName = formName;
	}

	public List<GoodsSaleTransaction> getLstTableGoods() {
		return lstTableGoods;
	}

	public void setLstTableGoods(List<GoodsSaleTransaction> lstTableGoods) {
		this.lstTableGoods = lstTableGoods;
	}

	public String getGoodsCode() {
		return goodsCode;
	}

	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}

	private int intReturn;
	private String alertAmount;
	private String limitAmount;
	private String balance;
	private String strAccountCode;

	public int getIntReturn() {
		return intReturn;
	}

	public void setIntReturn(int intReturn) {
		this.intReturn = intReturn;
	}

	public String getAlertAmount() {
		return alertAmount;
	}

	public void setAlertAmount(String alertAmount) {
		this.alertAmount = alertAmount;
	}

	public String getLimitAmount() {
		return limitAmount;
	}

	public void setLimitAmount(String limitAmount) {
		this.limitAmount = limitAmount;
	}

	public String getBalance() {
		return balance;
	}

	public void setBalance(String balance) {
		this.balance = balance;
	}

	public String getStrAccountCode() {
		return strAccountCode;
	}

	public void setStrAccountCode(String strAccountCode) {
		this.strAccountCode = strAccountCode;
	}

}
