package vn.com.fis.model.css;

import java.util.Vector;

public class GoodTransactionsList {

	private Vector mvtData = null;

	public Vector getMvtData() {
		return mvtData;
	}

	public void setMvtData(Vector mvtData) {
		this.mvtData = mvtData;
	}

	public int size() {
		return mvtData.size();
	}
	
	public Vector getGoodTransaction(int intIndex) {
        Vector returnTransaction = new Vector();
        returnTransaction.get(intIndex);
        return returnTransaction;
    }

}
