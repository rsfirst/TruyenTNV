package vn.com.fis.utils.mnpcm;


import com.fss.util.StringUtil;

import java.util.ArrayList;
import java.util.Vector;


/**
 * <p>
 * Title:
 * </p>
 * <p>
 * Description:
 * </p>
 * <p>
 * Copyright: Copyright (c) 2004
 * </p>
 * <p>
 * Company: FSS
 * </p>
 * 
 * @author not attributable
 * @version 1.0
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
public class SMUtil {
	public static final int MAX_ROW_NUMBER_SEARCH = 100;

	public SMUtil() {
	}

	public static ArrayList getAccountFieldName() {
		return convertStringArrayToArrayList(new String[] {
				// String
				"ACCOUNT_NAME", "ACCOUNT_TYPE_NAME",
				// Interger
				"ACCOUNT_ID", "CUSTOMER_NODE_ID", "ACCOUNT_TYPE_ID", "ACCOUNT_CLASS_CODE", "ACCOUNT_CURRENCY_ID",
				"INVOICE_ID", "PREVIOUS_INVOICE_ID", "ACCOUNT_ACTION_CODE", "INVOICE_ACCOUNT_ID",
				// Real
				"ACCOUNT_BALANCE", "CREDIT_LIMIT", "INVOICE_UNBILLED_AMOUNT", "UNCOMMITTED_UNBILLED_AMOUNT",
				"TOTAL_UNBILLED_AMOUNT", "RESERVED_AMOUNT", "AVAILABLE_CREDIT", "UNCOMMITTED_INVOICE_UNBILLED",
				"TOTAL_INVOICE_UNBILLED_AMOUNT", "UNBILLED_AMOUNT", "AVAILABLE_INVOICE_CREDIT",
				// Date
				"LAST_MODIFIED", "BALANCE_DATE", "ACCOUNT_ACTION_DATE", });
	}

	public static ArrayList getAdjustmentFieldName() {
		String[] fieldName = new String[] { "ADJUSTMENT_ID", //
				"LAST_MODIFIED", //
				// "ADJUSTMENT_BATCH_ID", //
				"ADJUSTMENT_NR", "ADJUSTMENT_DATE", "ADJUSTMENT_RECEIVED_DATE", "OPERATOR_ID", "FROM_ACCOUNT_NAME",
				"FROM_ACCOUNT_ID",
				// "FROM_GL_CODE_NAME",
				// "FROM_GL_CODE_ID",
				"TO_ACCOUNT_NAME", "TO_ACCOUNT_ID",
				// "TO_GL_CODE_NAME",
				// "TO_GL_CODE_ID",
				"ADJUSTMENT_INVOICE_CODE", "INVOICE_ID",
				// "CURRENCY_SYMBOL",
				"CURRENCY_ID",
				// "CURRENCY_CONVERSION_DATE",
				"AMOUNT", "FROM_AMOUNT", "FROM_TOTAL_AMOUNT", "TO_AMOUNT", "TO_TOTAL_AMOUNT",
				// "ADJUSTMENT_LOCATION_CODE",
				"ADJUSTMENT_TYPE_NAME", "ADJUSTMENT_TYPE_ID", "ADJUSTMENT_STATUS_CODE",
				// "FROM_ADJUST_GL_CODE_NAME",
				// "FROM_ADJUST_GL_CODE_ID",
				// "TO_ADJUST_GL_CODE_NAME",
				// "TO_ADJUST_GL_CODE_ID",
				"FROM_ADJUST_AMOUNT", "TO_ADJUST_AMOUNT", "DESCRIPTION", "ADJUSTMENT_TEXT", "ATLANTA_OPERATOR_ID",
				// "REJECTED_DATE",
				// "ADJUSTMENT_REJECTED_CODE"
				// "FROM_REJECTED_GL_CODE_NAME",
				// "FROM_REJECTED_GL_CODE_ID",
				// "TO_REJECTED_GL_CODE_NAME",
				// "TO_REJECTED_GL_CODE_ID"
				"GENERAL_1", "GENERAL_2", "GENERAL_3"
				// ,"GENERAL_4"
				// ,"GENERAL_5"
				// ,"GENERAL_6"
				, "GENERAL_7", "GENERAL_8", "GENERAL_9", "GENERAL_10"
				// ,"SUMMARY_OF_CHANGE"
		};

		return convertStringArrayToArrayList(fieldName);
	}

	public static Vector getAdjustmentInsertFieldName() {
		// ['DESCRIPTION','ADJUSTMENT_TEXT','GENERAL_1','GENERAL_3','ADJUSTMENT_TYPE_ID','TO_ACCOUNT_ID',AUTO_ALLOCATE_IND_CODE,
		// 'AMOUNT','ADJUSTMENT_DATE',
		// 'ADJUSTMENT_RECEIVED_DATE'];

		Vector adjustmentFieldName = new Vector();
		String[][] strAdjustmentInsertFieldName = new String[][] {
				// String
				{ "DESCRIPTION", "STRING" }, { "ADJUSTMENT_TEXT", "STRING" }, { "GENERAL_1", "STRING" },
				// {"GENERAL_3","STRING"},
				// Integer
				{ "ADJUSTMENT_TYPE_ID", "INTEGER" }, { "TO_ACCOUNT_ID", "INTEGER" }, { "OPERATOR_ID", "INTEGER" },
				{ "CURRENCY_ID", "INTEGER" }, { "PAYMENT_LOCATION_CODE", "INTEGER" },
				// {"AUTO_ALLOCATE_IND_CODE","INTEGER"},
				// Real
				{ "AMOUNT", "REAL" },
				// Date
				{ "ADJUSTMENT_DATE", "DATE" }, { "ADJUSTMENT_RECEIVED_DATE", "DATE" } };

		adjustmentFieldName = convert2DArrayToVector(strAdjustmentInsertFieldName);
		return adjustmentFieldName;
	}

	public static ArrayList getCustomerNoteFieldName() {
		ArrayList custNoteFieldName = new ArrayList();
		// --
		custNoteFieldName.add("CUSTOMER_NODE_TYPE_NAME");
		custNoteFieldName.add("CUSTOMER_NODE_TYPE_ID");

		custNoteFieldName.add("PRIMARY_IDENTIFIER");//
		custNoteFieldName.add("PRIMARY_IDENTIFIER2");//
		custNoteFieldName.add("NODE_NAME");//
		custNoteFieldName.add("NODE_NAME_UPPERCASE");//
		custNoteFieldName.add("NODE_NAME_SOUNDEX"); //
		// custNoteFieldName.add("GL_CODE_NAME"); //
		custNoteFieldName.add("GL_CODE_ID");//

		// custNoteFieldName.add("PRIME_ACCOUNT_NAME");//
		custNoteFieldName.add("PRIME_ACCOUNT_ID");
		// custNoteFieldName.add("CURRENCY_NAME");
		custNoteFieldName.add("CURRENCY_ID");

		custNoteFieldName.add("POSTAL_LINE_1");
		custNoteFieldName.add("POSTAL_LINE_2");
		custNoteFieldName.add("POSTAL_SUBURB");
		custNoteFieldName.add("POSTAL_CITY");
		custNoteFieldName.add("POSTAL_POST_CODE");
		custNoteFieldName.add("POSTAL_STATE");
		custNoteFieldName.add("POSTAL_COUNTRY");
		custNoteFieldName.add("POSTAL_GEOCODE");
		custNoteFieldName.add("POSTAL_XPOS");
		custNoteFieldName.add("POSTAL_YPOS");
		custNoteFieldName.add("POSTAL_ZPOS");
		custNoteFieldName.add("POSTAL_GENERAL_1");
		custNoteFieldName.add("POSTAL_GENERAL_2");
		custNoteFieldName.add("POSTAL_GENERAL_3");
		custNoteFieldName.add("POSTAL_GENERAL_4");
		custNoteFieldName.add("POSTAL_GENERAL_5");
		custNoteFieldName.add("POSTAL_GENERAL_6");
		custNoteFieldName.add("POSTAL_GENERAL_7");
		custNoteFieldName.add("POSTAL_GENERAL_8");
		custNoteFieldName.add("POSTAL_GENERAL_9");
		custNoteFieldName.add("POSTAL_GENERAL_10");

		custNoteFieldName.add("SITE_LINE_1");
		custNoteFieldName.add("SITE_LINE_2");
		custNoteFieldName.add("SITE_SUBURB");
		custNoteFieldName.add("SITE_CITY");
		custNoteFieldName.add("SITE_POST_CODE");
		custNoteFieldName.add("SITE_STATE");
		custNoteFieldName.add("SITE_COUNTRY");
		custNoteFieldName.add("SITE_GEOCODE");
		custNoteFieldName.add("SITE_XPOS");
		custNoteFieldName.add("SITE_YPOS");
		custNoteFieldName.add("SITE_ZPOS");
		custNoteFieldName.add("SITE_GENERAL_1");
		custNoteFieldName.add("SITE_GENERAL_2");
		custNoteFieldName.add("SITE_GENERAL_3");
		custNoteFieldName.add("SITE_GENERAL_4");
		custNoteFieldName.add("SITE_GENERAL_5");
		custNoteFieldName.add("SITE_GENERAL_6");
		custNoteFieldName.add("SITE_GENERAL_7");
		custNoteFieldName.add("SITE_GENERAL_8");
		custNoteFieldName.add("SITE_GENERAL_9");
		custNoteFieldName.add("SITE_GENERAL_10");

		// --
		custNoteFieldName.add("CUSTOMER_NODE_ID");

		custNoteFieldName.add("CUSTOMER_FORM_CODE");//
		custNoteFieldName.add("GROUP_ID");//
		custNoteFieldName.add("OPERATOR_ID");//
		custNoteFieldName.add("PARENT_CUSTOMER_NODE_ID");
		custNoteFieldName.add("HIERARCHY_LEVEL");
		custNoteFieldName.add("ROOT_CUSTOMER_NODE_ID");
		custNoteFieldName.add("CUSTOMER_NODE_STATUS_CODE"); // 1 = Prospect, 2 =
															// Credit Check
															// Required, 3 =
															// Active, 4 =
															// Cancelled, 5 =
															// Black-listed.
		custNoteFieldName.add("PERSON_ID");
		// custNoteFieldName.add("INITIAL_ACCOUNT_BALANCE"); //1 = Invoice, 2 =
		// Statement, 3 = No Reporting.
		custNoteFieldName.add("REPORT_LEVEL_CODE");// 1 = Invoice, 2 =
													// Statement, 3 = No
													// Reporting.

		// Real:
		// Date:
		custNoteFieldName.add("LAST_MODIFIED");
		custNoteFieldName.add("EFFECTIVE_START_DATE");
		custNoteFieldName.add("EFFECTIVE_END_DATE");
		custNoteFieldName.add("CREATED_DATE");
		custNoteFieldName.add("ACTIVE_DATE");
		// --
		custNoteFieldName.add("TURNOVER");
		// custNoteFieldName.add("TURNOVER_CURRENCY_NAME");
		custNoteFieldName.add("TURNOVER_CURRENCY_ID");
		custNoteFieldName.add("CREDIT_LIMIT");
		custNoteFieldName.add("CREDIT_RATING_CODE");
		custNoteFieldName.add("CREDIT_COMMENTS");
		custNoteFieldName.add("TAX_CLASS_CODE");
		// //--
		custNoteFieldName.add("PAYMENT_METHOD_CODE");
		custNoteFieldName.add("PAYMENT_LOCATION_CODE");
		custNoteFieldName.add("BANK_CODE");
		custNoteFieldName.add("BANK_ACCOUNT_NUMBER");
		// //--
		custNoteFieldName.add("ASSIGNED_OPERATOR_ID");
		custNoteFieldName.add("SALES_CHANNEL_CODE");
		custNoteFieldName.add("COMPANY_NUMBER");
		custNoteFieldName.add("INDUSTRY_CODE");
		custNoteFieldName.add("REGION_CODE");
		custNoteFieldName.add("GENERAL_1");
		custNoteFieldName.add("GENERAL_2");
		custNoteFieldName.add("GENERAL_3");
		custNoteFieldName.add("GENERAL_4");
		custNoteFieldName.add("GENERAL_5");
		custNoteFieldName.add("GENERAL_6");
		custNoteFieldName.add("GENERAL_7");
		custNoteFieldName.add("GENERAL_8");
		custNoteFieldName.add("GENERAL_9");
		custNoteFieldName.add("GENERAL_10");

		return custNoteFieldName;
	}

	public static ArrayList getProductInstanceFieldName() {
		String[] productInstanceFieldName = new String[] {
				// String
				"PRODUCT_NAME", "FROM_PRODUCT_NAME", "TO_PRODUCT_NAME", "GENERAL_1", "GENERAL_2", "GENERAL_3",
				"GENERAL_4", "GENERAL_5", "GENERAL_6", "GENERAL_7", "GENERAL_8", "GENERAL_9", "GENERAL_10",
				// Interger
				"PRODUCT_INSTANCE_ID", "OPERATOR_ID", "PRODUCT_ID", "PRODUCT_INSTANCE_STATUS_CODE", "CUSTOMER_NODE_ID",
				"BASE_PRODUCT_INSTANCE_ID", "FROM_PRODUCT_INSTANCE_ID", "FROM_PRODUCT_ID", "TO_PRODUCT_INSTANCE_ID",
				"TO_PRODUCT_ID", "UNCOMPLETED_IND_CODE",
				// Real

				// Date
				"LAST_MODIFIED", "EFFECTIVE_START_DATE",

		};

		return convertStringArrayToArrayList(productInstanceFieldName);
	}

	public static ArrayList getInvoiceFieldName() {
		ArrayList invoiceFieldName = new ArrayList();
		// String:
		invoiceFieldName.add("CUSTOMER_INVOICE_STR");
		invoiceFieldName.add("INVOICE_TYPE_NAME");
		invoiceFieldName.add("ACCOUNT_NAME");
		invoiceFieldName.add("INVOICED_ACCOUNT_NAME");
		invoiceFieldName.add("CUSTOMER_ACCOUNT_INVOICE_STR");
		invoiceFieldName.add("CUSTOMER_NODE_NAME");
		invoiceFieldName.add("GENERAL_1");
		invoiceFieldName.add("GENERAL_2");
		invoiceFieldName.add("GENERAL_3");
		invoiceFieldName.add("GENERAL_4");
		invoiceFieldName.add("GENERAL_5");
		invoiceFieldName.add("GENERAL_6");
		invoiceFieldName.add("GENERAL_7");
		invoiceFieldName.add("GENERAL_8");
		invoiceFieldName.add("GENERAL_9");
		invoiceFieldName.add("GENERAL_10");
		// Interger
		invoiceFieldName.add("INVOICE_ID");
		invoiceFieldName.add("INVOICE_TYPE_ID");
		invoiceFieldName.add("BILL_RUN_ID");
		invoiceFieldName.add("RUNNING_IND_CODE");
		invoiceFieldName.add("QA_IND_CODE");
		invoiceFieldName.add("SUPPRESS_IND_CODE");
		invoiceFieldName.add("ACCOUNT_ID");
		invoiceFieldName.add("INVOICED_ACCOUNT_ID");
		invoiceFieldName.add("CUSTOMER_NODE_ID");
		invoiceFieldName.add("GROUP_ID");
		invoiceFieldName.add("IMAGE_GENERATED_IND_CODE");
		invoiceFieldName.add("APPLIED_IND_CODE");
		// Real:
		invoiceFieldName.add("INVOICE_AMOUNT");
		invoiceFieldName.add("STATEMENT_AMOUNT");
		invoiceFieldName.add("BALANCE_FORWARD");
		invoiceFieldName.add("ACCOUNT_BALANCE");
		invoiceFieldName.add("ACCOUNT_INITIAL_DUE");
		invoiceFieldName.add("CURRENT_DUE");
		invoiceFieldName.add("TOTAL_PAYMENTS");
		invoiceFieldName.add("EARLY_PAYMENT_DISCOUNT");
		invoiceFieldName.add("PAYMENT_DUE_DISCOUNT");
		invoiceFieldName.add("LATE_PAYMENT_CHARGE");
		invoiceFieldName.add("EARLY_PAYMENT_ACCOUNT_BALANCE");
		invoiceFieldName.add("PAYMENT_DUE_ACCOUNT_BALANCE");
		invoiceFieldName.add("UNBILLED_AMOUNT");

		// Date:
		invoiceFieldName.add("LAST_MODIFIED");
		invoiceFieldName.add("EFFECTIVE_DATE");
		invoiceFieldName.add("ISSUE_DATE");
		invoiceFieldName.add("ORIGINAL_PAYMENT_DUE_DATE");
		invoiceFieldName.add("PAYMENT_DUE_DATE");
		invoiceFieldName.add("EARLY_PAYMENT_DATE");

		return invoiceFieldName;
	}

	public static String getBillingAddress(Vector vctBillingAddress) {
		String strBillingAddress = "";
		strBillingAddress = StringUtil.nvl(Util.getObjectByName("SITE_GENERAL_2", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_GENERAL_4", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_GENERAL_3", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_LINE_1", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_LINE_2", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_SUBURB", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_GENERAL_6", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_GENERAL_5", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_CITY", vctBillingAddress), "") + " "
				+ StringUtil.nvl(Util.getObjectByName("SITE_STATE", vctBillingAddress), "");
		return StringUtil.replaceAll(strBillingAddress.trim(), "  ", " ");
	}

	public static String getProductNameFromProductId(String productId) {
		String productList[][] = new String[][] { { "1000005", "IDD" }, { "1000006", "International Roaming" },
				{ "1000007", "Voicemail" }, { "1000008", "Voice Plus" }, { "1000009", "Calling Line Restriction" },
				{ "1000010", "Caller Ring Back Tone" }, { "1000011", "MMS" }, { "1000012", "1x Data" },
				{ "1000013", "EVDo Data" }, { "1000014", "Promotion: Tier Discount" } };
		String strReturn = "";
		for (int i = 0; i < productList.length; i++) {
			if (productId.equals(productList[i][0])) {
				strReturn = productList[i][1];
			}
		}

		return strReturn;
	}

	public static ArrayList getPaymentFielddName() {
		ArrayList listFieldNames = new ArrayList();
		String[] fieldName = new String[] { "PAYMENT_ID", //
				"LAST_MODIFIED", //
				// "PAYMENT_BATCH_ID", //
				"RECEIPT_NR", "PAYMENT_DATE", "PAYMENT_RECEIVED_DATE", "OPERATOR_ID", "FROM_ACCOUNT_NAME",
				"FROM_ACCOUNT_ID", "FROM_GL_CODE_NAME", "FROM_GL_CODE_ID", "TO_ACCOUNT_NAME", "TO_ACCOUNT_ID",
				"TO_GL_CODE_NAME", "TO_GL_CODE_ID", "PAYMENT_INVOICE_CODE", "INVOICE_ID", "CUSTOMER_NODE_ID",
				"PERSON_ID",
				// "CURRENCY_SYMBOL",
				"CURRENCY_ID", "CURRENCY_CONVERSION_DATE", "AMOUNT", "FROM_AMOUNT", "FROM_TOTAL_AMOUNT", "TO_AMOUNT",
				"TO_TOTAL_AMOUNT", "PAYMENT_LOCATION_CODE", "PAYMENT_TYPE_NAME", "PAYMENT_TYPE_ID",
				"PAYMENT_STATUS_CODE",
				// "AUTO_ALLOCATE_IND_CODE",
				// "FROM_ADJUST_GL_CODE_NAME",
				// "FROM_ADJUST_GL_CODE_ID",
				// "TO_ADJUST_GL_CODE_NAME",
				// "TO_ADJUST_GL_CODE_ID",
				// "FROM_ADJUST_AMOUNT",
				// "TO_ADJUST_AMOUNT",
				"REJECTED_DATE", "PAYMENT_REJECTED_CODE"
				// "FROM_REJECTED_GL_CODE_NAME",
				// "FROM_REJECTED_GL_CODE_ID",
				// "TO_REJECTED_GL_CODE_NAME",
				// "TO_REJECTED_GL_CODE_ID"
				, "GENERAL_1", "GENERAL_2", "GENERAL_3", "GENERAL_4", "GENERAL_5", "GENERAL_6", "GENERAL_7",
				"GENERAL_8", "GENERAL_9", "GENERAL_10", "SUMMARY_OF_CHANGE" };
		listFieldNames = convertStringArrayToArrayList(fieldName);
		return listFieldNames;
	}

	public static ArrayList getPOSPaymentFielddName() {
		ArrayList listFieldNames = new ArrayList();
		String[] fieldName = new String[] { "PAYMENT_ID",
				// "CREATE_DATE",
				"CURR_CODE", "PAYMENT_TYPE", "ACCOUNT_ID", "CUST_NODE_ID", "RECEIPT_DATE", "SUB_NUMBER", "START_CYCLE",
				"END_CYCLE", "USER_NAME", "COLLECTION_GROUP_ID", "COLLECTION_STAFF_ID", "BANK_CODE", "BANK_NAME",
				"BANK_ACCOUNT_NO", "BANK_NO", "BANK_DATE", "ACCOUNT_HOLDER", "STATUS", "REQUEST_STAFF_ID",
				"REQUEST_STAFF", "PAYMENT_CHECK_ID", "CEN_ID", "BILL_BOOK_NO", "ADJ_PAYMENT", "ADJ_REASON",
				"DEPOSIT_TYPE", "AMOUNT_ORG", "AMOUNT_VAT", "AMOUNT", "AMOUNT_NONE_VAT", "AMOUNT_OVER_DEBIT",
				"DEPOSIT_AMOUNT", "STAFF_ID", "SHOP_ID", "SUB_NAME", "ACCOUNT_NAME", };
		listFieldNames = convertStringArrayToArrayList(fieldName);
		return listFieldNames;
	}

	public static ArrayList getPOSPaymentDetailFielddName() {
		ArrayList listFieldNames = new ArrayList();
		String[] fieldName = new String[] { "PAYMENT_ID",
				// "CREATE_DATE",
				"ACCOUNT_ID", "START_CYCLE", "END_CYCLE", "AMOUNT_ORG", "AMOUNT_VAT", "AMOUNT", "AMOUNT_NONE_VAT",
				"AMOUNT_OVER_DEBIT", "AMOUND_DEBIT", "BILL_INVOICE_NO", "SV_INVOICE_ID" };
		listFieldNames = convertStringArrayToArrayList(fieldName);
		return listFieldNames;
	}

	public static ArrayList getPOSInvoiceFielddName() {
		ArrayList listFieldNames = new ArrayList();
		String[] fieldName = new String[] { "INVOICE_ID", "PAYMENT_ID", "INVOICE_TYPE",
				// "CREATE_DATE",
				"INVOICE_NO", "AMOUNT_ORG", "AMOUNT_NONE_TAX", "AMOUNT_DISCOUNT", "AMOUNT_PROMOTE", "AMOUNT_VAT",
				"AMOUNT_TOTAL", "FROM_DATE", "TO_DATE", "STATUS", "BLOCK_NO", "SERIAL_NO", "CUSTOMER_NAME", "ADDRESS",
				"TEL", "ACCOUNT_NO", "TAX_CODE", "SHOP_ID", "STAFF_ID", "MDN" };
		listFieldNames = convertStringArrayToArrayList(fieldName);
		return listFieldNames;
	}

	public static ArrayList getPOSReceiptExpenseFielddName() {
		ArrayList listFieldNames = new ArrayList();
		String[] fieldName = new String[] { "RECEIPT_ID", "RECEIPT_NO", "SHOP_ID", "STAFF_ID", "TYPE",
				// "RECEIPT_DATE",
				"FROM_DATE", "TO_DATE", "REASON_ID", "ACCOUNT_CODE", "PAY_METHOD", "AMOUNT", "ORG_AMOUNT", "STATUS",
				"USERNAME",
				// "CREATE_DATETIME",
				"APPROVER_DATE", "DELIVERER", "ADDRESS", "NOTES", "DESTROY_STAFF_ID", "DESTROY_DATE",
				"APPROVER_STAFF_ID", "DELIVERER_STAFF_ID", "DELIVERER_SHOP_ID" };
		listFieldNames = convertStringArrayToArrayList(fieldName);
		return listFieldNames;
	}

	public static Vector getPaymentInsertFieldName() {
		Vector paymentInsertFieldName = new Vector();
		// String:
		String[][] strPaymentInsertFieldName = new String[][] {
				// String
				{ "GENERAL_1", "STRING" }, { "GENERAL_2", "STRING" }, { "GENERAL_3", "STRING" },
				{ "GENERAL_7", "STRING" }, { "GENERAL_8", "STRING" }, { "GENERAL_9", "STRING" },
				{ "GENERAL_10", "STRING" },
				// Integer
				{ "CUSTOMER_NODE_ID", "INTEGER" }, { "TO_ACCOUNT_ID", "INTEGER" }, { "PAYMENT_TYPE_ID", "INTEGER" },
				{ "CURRENCY_ID", "INTEGER" }, { "PAYMENT_LOCATION_CODE", "INTEGER" },
				{ "AUTO_ALLOCATE_IND_CODE", "INTEGER" },
				// Real
				{ "AMOUNT", "REAL" }
				// Date
				// {"PAYMENT_DATE","DATE"},
				// {"PAYMENT_RECEIVED_DATE","DATE"}
		};
		paymentInsertFieldName = convert2DArrayToVector(strPaymentInsertFieldName);
		return paymentInsertFieldName;
	}

	public static ArrayList getPersonFielddName() {
		ArrayList listFieldNames = new ArrayList();
		// String: 14 = 7 + 7
		listFieldNames.add("PRIMARY_IDENTIFIER");
		listFieldNames.add("PRIMARY_IDENTIFIER2");
		listFieldNames.add("TITLE");
		listFieldNames.add("FAMILY_NAME");
		listFieldNames.add("GIVEN_NAMES");
		listFieldNames.add("OFFICIAL_NAME");
		listFieldNames.add("PREFERRED_NAME");

		listFieldNames.add("POSTAL_LINE_1");
		listFieldNames.add("POSTAL_LINE_2");
		listFieldNames.add("POSTAL_SUBURB");
		listFieldNames.add("POSTAL_CITY");
		listFieldNames.add("POSTAL_POST_CODE");
		listFieldNames.add("POSTAL_STATE");
		listFieldNames.add("POSTAL_COUNTRY");

		listFieldNames.add("POSTAL_GEOCODE");
		listFieldNames.add("POSTAL_XPOS");
		listFieldNames.add("POSTAL_YPOS");
		listFieldNames.add("POSTAL_ZPOS");
		listFieldNames.add("POSTAL_GENERAL_1");
		listFieldNames.add("POSTAL_GENERAL_2");
		listFieldNames.add("POSTAL_GENERAL_3");
		listFieldNames.add("POSTAL_GENERAL_4");
		listFieldNames.add("POSTAL_GENERAL_5");
		listFieldNames.add("POSTAL_GENERAL_6");
		listFieldNames.add("POSTAL_GENERAL_7");
		listFieldNames.add("POSTAL_GENERAL_8");
		listFieldNames.add("POSTAL_GENERAL_9");
		listFieldNames.add("POSTAL_GENERAL_10");

		listFieldNames.add("PROFESSION_CODE");
		listFieldNames.add("EMPLOYER");
		listFieldNames.add("NATIONALITY_CODE");
		listFieldNames.add("PASSPORT");
		listFieldNames.add("WRITTEN_LANGUAGE_CODE");
		listFieldNames.add("VISA_NUMBER");
		listFieldNames.add("VISA_TYPE_CODE");
		listFieldNames.add("VISA_EXPIRY_DATE");
		listFieldNames.add("SOCIAL_SECURITY_NUMBER");
		listFieldNames.add("DRIVERS_LICENCE");
		listFieldNames.add("PASSWORD");

		listFieldNames.add("GENERAL_1");
		listFieldNames.add("GENERAL_2");
		listFieldNames.add("GENERAL_3");
		listFieldNames.add("GENERAL_4");
		listFieldNames.add("GENERAL_5");
		listFieldNames.add("GENERAL_6");
		listFieldNames.add("GENERAL_7");
		listFieldNames.add("GENERAL_8");
		listFieldNames.add("GENERAL_9");
		listFieldNames.add("GENERAL_10");
		// -- Interger: 5 = 3 + 2
		listFieldNames.add("PERSON_TYPE_ID");
		listFieldNames.add("GENDER_CODE");
		listFieldNames.add("PERSON_STATUS_CODE");// 0 = Cancelled, 1 = Prospect,
													// 2 = Subscriber, 3 =
													// Business contact, 4 =
													// Subscriber and business
													// contact, 5 = VIP, 6 = Bad
													// risk.

		listFieldNames.add("OPERATOR_ID");
		listFieldNames.add("GROUP_ID");
		// -- Real: 0 = 0
		// -- Date: 1 = 1
		listFieldNames.add("BIRTH_DATE");

		return listFieldNames;
	}

	public static ArrayList getServiceFieldName() {
		// String
		String[] serviceFieldName = new String[] {
				// String
				"SERVICE_NAME", "NETWORK_NAME", "SERVICE_TYPE_NAME", "SERVICE_SUBTYPE", "CONTRACT_REFERENCE",

				"GENERAL_1", "GENERAL_2", "GENERAL_3", "GENERAL_4", "GENERAL_5", "GENERAL_6", "GENERAL_7", "GENERAL_8",
				"GENERAL_9", "GENERAL_10",
				// Interger
				"SERVICE_ID", "OPERATOR_ID", "SERVICE_TYPE_ID", "CUSTOMER_NODE_ID", "SERVICE_STATUS_CODE",
				"BASE_PRODUCT_INSTANCE_ID",
				// "CREATION_ORDER",
				// "SERVICE_RANGE_SEQNR",
				// "PERSON_ID",
				// "CONTRACT_ID",
				// "BILLING_PRIORITY",
				// "BILLING_COMPLEXITY",
				// "GL_CODE_ID",
				// "DO_NOT_PURGE_IND_CODE",
				// Real

				// Date
				"LAST_MODIFIED", "EFFECTIVE_START_DATE", "EFFECTIVE_END_DATE", "REQUIRED_BY_DATE", "PROVISIONED_DATE",
				"ACTIVE_DATE" };
		return convertStringArrayToArrayList(serviceFieldName);
	}

	public static ArrayList convertStringArrayToArrayList(String[] arrFieldNames) {
		ArrayList vctReturn = new ArrayList();
		for (int i = 0; i < arrFieldNames.length; i++) {
			vctReturn.add(arrFieldNames[i]);
		}

		return vctReturn;
	}

	public static Vector convert2DArrayToVector(String[][] arrFieldNames) {
		Vector vctReturn = new Vector();
		for (int i = 0; i < arrFieldNames.length; i++) {
			Vector vtcRow = new Vector();
			for (int j = 0; j < arrFieldNames[i].length; j++) {
				vtcRow.add(arrFieldNames[i][j]);
			}
			vctReturn.add(vtcRow);
		}

		return vctReturn;
	}

}
