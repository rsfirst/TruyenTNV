package vn.com.fis.utils.epos;

public class CommonErrorcode implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5526207347182861389L;

	public static final class PANEL_TRANSACTIONG_GOODS_SETAIL {
		public static final String inputLovProduct = "inputLovProduct";
		public static final String inputAmount = "inputAmount";
		public static final String inputAmountNoZero = "inputAmountNoZero";
		public static final String inputOther = "inputOther";
		public static final String inputStaff = "inputStaff";
		public static final String inputBlock = "inputBlock";
		public static final String inputSerial = "inputSerial";
		public static final String notEnoughAmount = "notEnoughAmount";
		public static final String notEnoughSerial = "notEnoughSerial";
	}
	
	public static final class OUTPUT_FOR_STAFF {
		public static final String QuantityBelow = "QuantityBelow";
		public static final String InvalidQuantity = "InvalidQuantity";
		public static final String validDuplicate = "validDuplicate";
	}

}
