package vn.com.fis.utils.epos;

/**
 * Title: Constant Description: call API server Copyright: Copyright FIS-FTU (c) 2019 Company: FTU Hanoi
 * 
 * @author AnBT
 * @version 1.0
 */
public class Constants implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 6178423375778509095L;

	public static final class REQUEST_MAPPING
	{
		public static final String LOGIN = "/account/login";
		public static final String AUTHENTICATED = "/account/auth";
		public static final String LOGOUT = "/account/logout";
		public static final String SITE_MAP = "/sitemap-out";
		public static final String REFRESH_TOKEN = "/refreshToken";
		public static final String GET_PERMISSIONS = "/getPermissions";
		public static final String WRITE_LOG_MENU = "/writeLogMenu";
		public static final String GET_VALUE_SHOP = "/getValueShop";
		public static final String GET_COMMON_VALUE = "/getCommonValue";
		public static final String ACCESS_DENIED = "/access_Denied";
		public static final String NO_ACCESS_IMPORT = "/noAccessImport";
		public static final String GET_LIST_STAFF = "/epos/getListStaff";
		public static final String GET_SHOP_NAME = "/epos/getShopNameByStockId";
		public static final String GET_LIST_STAFF_STATUS = "/epos/getListStaffStatus";

		public static final String GET_STOCK_BY_STAFF_ID = "/epos/getStockByStaffId";
		
		public static final String GET_COMMON_LIST_REASON = "/epos/getListReason";
		public static final String GET_VALUE_DOMAIN_BY_TYPE = "/epos/getValueDomainByType";
		// vinhtq25
		public static final String FORM_EXPORT_STOCKS_TO_PARTNER = "/epos/inventory/exportStocksToPartner";
		public static final String FORM_EXPORT_STOCKS_TO_PARTNER_LINK = "epos/inventory/ExportStocksToPartner";
		public static final String FORM_INPUT_STOCK_FROM_INFERIOR = "/epos/inventory/formStockImportFromInferior";
		public static final String GET_LIST_STATUS_FORM_INPUT_STOCK_FROM_INFERIOR = "/epos/inventory/stockImportFromInferior/getListStatus";
		public static final String IMPORT_STOCKS_FROM_INFERIOR_LINK = "epos/inventory/FormStockImportFromInferior";
		public static final String CHECK_LIST_SERIAL = "/epos/inventory/checkListSerial";
		public static final String GET_REASON_BY_CODE = "/epos/inventory/getReasonByCode";
		public static final String FORM_WAR_TRANSACTION_LINK = "/epos/sales/formWarTransaction";
		public static final String DIALOG_ENQUERY_WARRANTY = "/popup/dialogEnqueryWarranty";
		public static final String FORM_WAR_TRANSACTION_ON_SEARCH_FIND_WAR_TRANS = "/epos/sales/formWarTransaction/findWarTrans";
		public static final String FORM_WAR_TRANSACTION_ON_SEARCH_WARRANTY = "/epos/sales/formWarTransaction/onSearchWarranty";
		public static final String FORM_WAR_TRANSACTION_GET_GOODS_INFORMATION = "/epos/sales/formWarTransaction/getGoodsInformation";
		public static final String FORM_WAR_TRANSACTION_GET_WARRANTY_HISTORY = "/epos/sales/formWarTransaction/getWarrantyHistory";
		public static final String FORM_WAR_TRANSACTION_ON_UPDATE_WARRANTY_TRANSACTION = "/epos/sales/formWarTransaction/onUpdateWarrantyTransaction";
		public static final String FORM_WAR_TRANSACTION_ON_INSERT_WARRANTY_TRANSACTION = "/epos/sales/formWarTransaction/onInsertWarrantyTransaction";
		public static final String FORM_WAR_TRANSACTION_ON_PUSH_UP = "/epos/sales/formWarTransaction/onPushUp";
		public static final String FORM_WAR_TRANSACTION_GET_WAR_TRANS_VALUE_REPORT = "/epos/sales/formWarTransaction/getWarTransValueReport";
		// caott2
		// public static final String FORM_SALE_TRANSACTION = "/stockOutputInferior";
		public static final String FORM_EXPORT_TO_INFERIOR = "/epos/inventory/ExportToInferior";
		public static final String GET_SHOP_TYPE = "/epos/inventory/stockExportToInferior/getShopType";
		public static final String GET_STATUS_LIST = "/epos/inventory/stockExportToInferior/getStatusList";
		public static final String GET_RESOURCE_CODE_LIST = "/epos/inventory/stockExportToInferior/getResourceCodeList";
		public static final String GET_INTERNAL_STOCK_LIST = "/epos/inventory/stockExportToInferior/getInternalStockList";
		public static final String GET_REASON_XCD = "/epos/inventory/stockExportToInferior/getReasonXCD";
		public static final String GET_CHILDS_STOCK = "/epos/inventory/stockExportToInferior/getChildsStock";
		public static final String ON_SEARCH_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/onSearch";
		public static final String VALID_FORM_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/validFormExportToInferior";
		public static final String CREAT_EXPORT_COMMAND_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/createExportCommandOnClick";
		public static final String DELETE_EXPORT_COMMAND_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/deleteExportCommandOnClick";
		public static final String EXPORT_COMMAND_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/exportCommandOnClick";
		public static final String IS_WARRANTY_COMMAND_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/isWarrantyGoodsFormExportToInferior";
		public static final String APPROVE_COMMAND_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/approveCommandOnClick";
		public static final String REJECT_COMMAND_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/rejectCommandOnClick";
		public static final String EXPORT_COMMAND_WARRANTY_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/exportCommandWarrantyOnClick";
		public static final String GET_DATA_WARANTY_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/getTeamplateWarantyValue";
		public static final String GET_SEARCH_GET_SERIAL_LIST_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/getSearchSerialList";
		public static final String CHECK_LIST_SERIAL_EXPORT_TO_INFERIOR = "/epos/inventory/stockExportToInferior/getListSerialFileWarrantyNo";

		public static final String FORM_STOCK_IMPORT_FROM_STAFF = "/epos/inventory/FormStockImportFromStaff";
		public static final String FORM_IMPORT_FROM_STAFF_GET_TEMPLATE_VALUE = "/epos/inventory/stockExportToCenter/getTemplateValueImportFromStaff";

		// nhap kho khong phan cap
		public static final String FORM_IMPORT_FROM_OTHER_SHOP = "/epos/inventory/FormImportFromOtherShop";
		// Chuyen sim khong dat coc vao kho
		public static final String FORM_ADD_SERIAL_TO_SPECIAL_STOCK = "/epos/inventory/FormAddSerialToSpecialStock";
		public static final String ACTION_ADD_SERIAL_TO_SPECIAL_STOCK = "/epos/inventory/formAddSerialToSpecialStock/actionAddSerial";
		// in phieu bao hanh
		public static final String FORM_PRINT_WARRANTY = "/epos/inventory/FormPrintWarranty";
		public static final String GET_REASON_FORM_PRINT_WARRANTY = "/epos/inventory/FormPrintingWarrantyController/getReasonList";
		public static final String GET_WARRANTY_SERIAL_FORM_PRINT_WARRANTY = "/epos/inventory/FormPrintingWarrantyController/getWarrantySerial";
		public static final String GET_WARRANTY_SERIAL_FORM_PRINT_WARRANTY_RE_NEW = "/epos/inventory/FormPrintingWarrantyController/getWarrantySerial";
		public static final String PRINT_WARRANTY_GET_TEMPLATE_VALUE = "/epos/inventory/stockExportToCenter/getReportPrintWarranty";
		// huy giao dich ban hang
		public static final String FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransaction";
		public static final String GET_CUST_TYPE_FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransactionController/getCustType";
		public static final String GET_LIST_STAFF_FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransactionController/getListStaff";
		public static final String GET_PAY_METHOD_FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransactionController/getPayMethod";
		public static final String ON_SEARCH_FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransactionController/onSearch";
		public static final String GET_STATUS_TRANS_FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransactionController/getStatusTrans";
		public static final String DESTROY_TRANSACTION_FORM_DESTROY_TRANSACTION = "/epos/sales/FormDestroyTransactionController/destroyTransaction";
		// tra cuu hoa don ban hang
		public static final String FORM_LOOKUP_INVOICE_HISTORY = "/epos/sales/formLookupInvoiceHistory";
		public static final String GET_CHILDS_STOCK_FORM_LOOKUP_INVOICE_HISTORY = "/epos/sales/FormLookupInvoiceHistory/getChildsStocksTree";
		public static final String ON_SEARCH_FORM_LOOKUP_INVOICE_HISTORY = "/epos/sales/FormLookupInvoiceHistory/onSearch";
		public static final String GET_STATUS_FORM_LOOKUP_INVOICE_HISTORY = "/epos/sales/FormLookupInvoiceHistory/getStatus";
		// lap chung tu tien gui ngan hang
		public static final String FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransaction";
		public static final String GET_RECEIPT_TYPE_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getReceiptType";
		public static final String GET_REASON_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getReason";
		public static final String GET_ACCOUNT_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getAccount";
		public static final String ON_SEARCH_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/onSearch";
		public static final String GET_RECEIPT_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getReceipt";
		public static final String GET_STATUS_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getStatus";
		public static final String GET_BANK_NAME_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getBankName";
		public static final String GET_BANK_ACCOUNT_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getBankAccount";
		public static final String GET_RECEIPT_NO_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getReceiptNo";
		public static final String GET_REASON_PNL_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/getReasonPnl";
		public static final String CREATE_BANK_DEPOSIT_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/createBankDeposit";
		public static final String UPDATE_RECEIPT_NO_FORM_BANK_TRANSACTION = "/epos/sales/FormBankTransactionController/updateReceiptNo";

		//

		// STOCK_EXPORT_TO_CENTER
		public static final String STOCK_EXPORT_TO_CENTER = "/epos/inventory/stockExportToCenter";
		public static final String GET_RECEIPT_CODE = "/epos/inventory/stockExportToCenter/getReceiptCode";
		public static final String GET_ALL_RECEIVE_STOCK = "/epos/inventory/stockExportToCenter/getAllReceiveStock";
		public static final String STOCK_EXPORT_TO_CENTER_ON_SAVE = "/epos/inventory/stockExportToCenter/onSave";
		public static final String STOCK_EXPORT_TO_CENTER_CHECK_RECEIPT_CODE = "/epos/inventory/stockExportToCenter/validTransActionCode";
		public static final String STOCK_EXPORT_TO_CENTER_GET_TEMPLATE_VALUE = "/epos/inventory/stockExportToCenter/getTemplateValue";

		// OUTPUT_FOR_STAFF
		public static final String OUTPUT_FOR_STAFF = "/epos/inventory/outputForStaff";
		public static final String OUTPUT_FOR_STAFF_GET_LST_STOCK_STAFF = "/epos/inventory/outputForStaff/getChildsStockStaff";
		public static final String OUTPUT_FOR_STAFF_ON_SAVE = "/epos/inventory/outputForStaff/onSave";
		public static final String OUTPUT_FOR_STAFF_VALID_DATA = "/epos/inventory/outputForStaff/validData";
		public static final String OUTPUT_FOR_STAFF_GET_TEMPLATE_VALUE = "/epos/inventory/outputForStaff/getTemplateValue";

		// EXPORT_TO_OTHER_SHOP
		public static final String EXPORT_TO_OTHER_SHOP = "/epos/inventory/exportToOtherShop";
		public static final String EXPORT_TO_OTHER_SHOP_GET_STOCKS_LIST = "/epos/inventory/exportToOtherShop/getRelationStocksList";
		public static final String EXPORT_TO_OTHER_SHOP_ON_SAVE = "/epos/inventory/exportToOtherShop/onSave";

		// FORM_ENQUERY_SERIAL
		public static final String FORM_ENQUERY_SERIAL = "/epos/inventory/FormEnquerySerial";
		public static final String FORM_ENQUERY_SERIAL_GET_ENQUERY_GOODS = "/epos/inventory/FormEnquerySerial/getEnqueryGoods";
		public static final String FORM_ENQUERY_SERIAL_GET_CHILDS_STOCK_TREE = "/epos/inventory/FormEnquerySerial/getChildsStockTree";
		public static final String FORM_ENQUERY_SERIAL_ENQUERY_SERIAL = "/epos/inventory/FormEnquerySerial/enquerySerial";
		public static final String FORM_ENQUERY_SERIAL_ENQUERY_TRANS_SERIAL = "/epos/inventory/FormEnquerySerial/enqueryTransSerial";
		public static final String FORM_ENQUERY_SERIAL_GET_STOCK_NAME = "/epos/inventory/FormEnquerySerial/getStockName";
		public static final String FORM_ENQUERY_SERIAL_ENQUERY_SERIAL_FILE = "/epos/inventory/FormEnquerySerial/enquerySerialFile";
		public static final String FORM_ENQUERY_SERIAL_EXPORT_FILE = "/epos/inventory/FormEnquerySerial/exportFile";
		public static final String DIALOG_LIST_GOODS = "/popup/dialogListGoods";
		public static final String DIALOG_LIST_STAFF = "/popup/dialogListStaff";
		// VIEW STOCK INFO
		public static final String GET_VCT_RESOURCE_LIST = "/epos/inventory/stockViewInfo/getVctResourceList";
		public static final String GET_INTERNAL_STOCK = "/epos/inventory/stockViewInfo/getInternalStock";
		public static final String GET_EXISTED_STATES = "/epos/inventory/stockViewInfo/getExistedStates";
		public static final String GET_EXISTED_GOODS_GROUPS = "/epos/inventory/stockViewInfo/getExistedGoodsGroups";
		public static final String GET_EXISTED_GOODS = "/epos/inventory/stockViewInfo/getExistedGoods";
		public static final String GET_STOCKS_TREE = "/epos/inventory/stockViewInfo/getStocksTree";
		public static final String GET_GOODS_LIST_BY_CONDITION = "/epos/inventory/stockViewInfo/getGoodsListByCondition";
		public static final String GET_GOODS_LIST_FROM_STOCK = "/epos/inventory/stockViewInfo/getGoodsListFromStock";
		public static final String GET_GOODS_LIST_FROM_SHOP_STAFF_STOCK = "/epos/inventory/stockViewInfo/getGoodsListFromShopStaffStock";
		public static final String GET_GOODS_LIST_ALL = "/epos/inventory/stockViewInfo/getGoodsListAll";
		public static final String GET_GOODS_QUANTITY_BY_CONDITION = "/epos/inventory/stockViewInfo/getGoodsQuantityByCondition";
		public static final String GET_GOODS_QUANTITY_LIST_ALL = "/epos/inventory/stockViewInfo/getAllGoodQuantity";
		public static final String GET_GOODS_QUANTITY_BY_STATE = "/epos/inventory/stockViewInfo/getGoodQuantityByState";
		public static final String GET_GOODS_QUANTITY = "/epos/inventory/stockViewInfo/getGoodQuantity";
		public static final String GET_STOCK_SERIAL_BY_CONDITION = "/epos/inventory/stockViewInfo/getStockSerialByCondition";
		public static final String GET_STOCK_SERIAL_SINGLE = "/epos/inventory/stockViewInfo/getStockSerialSingle";
		public static final String GET_STOCK_SERIAL_STRIP = "/epos/inventory/stockViewInfo/getStockSerialStrip";
		public static final String PNL_TRANSACTION_GOODS_DETAIL_ON_ACTION = "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
		public static final String GET_SINGEL_SERIAL_IN_STOCK = "/epos/inventory/stockViewInfo/getStockSerialInStock";

		// View stock info warranty
		public static final String GET_STOCK_SERIAL_FORM_NEW_WARRANTY_NO = "/epos/inventory/stockViewInfoWarranty/getSerialNewWarranty";
		public static final String GET_STOCK_SERIAL_BY_FORM = "/epos/inventory/stockViewInfoWarranty/getStockSerialByForm";
		public static final String CHECK_LIST_SERIAL_WARRANTY = "/epos/inventory/getListSerialFileWarrantyNo";

		// duytk10
		public static final String GET_VALUE_SHOP_InputForm = "/epos/inventory/getValueShopInputfrom";
		public static final String GET_SEARCH_SHOP_InputForm = "/epos/inventory/getTableSearchShopInputfrom";
		public static final String GET_SEARCH_DetailsList = "/epos/inventory/getTableSearchSearchDetailsList";
		public static final String GET_SEARCH_GetSerialList = "/epos/inventory/getTableSearchSerialList";
		public static final String INSERT_InputForm = "/epos/inventory/insertListInputFromCenter";
		public static final String InputForm_link = "/epos/inventory/inputFromCenter";
		public static final String InputForm_views = "epos/inventory/InputFromCenter";
		/* Bao cao hang Nhap tu trung tam */
		public static final String ACTION_EXPORT_SEARCH_InputFromCenter = "/epos/reportSearchInInputFromCenter/exportFile";
		// Nhập hàng trả từ chối từ cấp trên
		public static final String SEARCH_Superior_GoodImport = "/epos/inventory/SearchSuperiorGoodImport";
		public static final String INSERT_Superior_GoodImport = "/epos/inventory/insertSuperiorGoodImport";
		public static final String SEARCH_SERIAL_Superior_GoodImport = "/epos/inventory/getSerialFormSuperiorGoodImport";
		public static final String Superior_GoodImport_link = "/epos/inventory/FormSuperiorGoodImport";
		public static final String Superior_GoodImport_views = "epos/inventory/FormSuperiorGoodImport";
		// Xuất hàng bán cho KH theo lô
		public static final String FormStockExportForCustomerByBatch_link = "/epos/inventory/FormStockExportForCustomerByBatch";
		public static final String FormStockExportForCustomerByBatch_views = "epos/inventory/FormStockExportForCustomerByBatch";
		public static final String Upload_File = "/epos/inventory/uploadFileFormStockExportForCustomerByBatch";
		public static final String Check_Data_Upload_File = "/epos/inventory/checkDataUploadFileCustomerByBatch";
		public static final String Insert_Data_Upload_File = "/epos/inventory/onInsertUploadFileCustomerByBatch";
		// Xuất hàng bán cho khách hàng
		public static final String FormStockExportForCustomer_link = "/epos/inventory/FormStockExportForCustomer";
		public static final String FormStockExportForCustomer_views = "epos/inventory/FormStockExportForCustomer";
		public static final String FormStockExportForCustomer_Save = "/epos/inventory/FormStockExportForCustomer/save";
		public static final String GET_FormStockExportForCustomer_GOODS = "/epos/inventory/FormStockExportForCustomer/getExistedGoods";
		//Lập hóa đơn bán hàng
		public static final String DialogInvoiceInputEstablish_link = "/epos/sales/FormInvoiceEstablish";
		public static final String DialogInvoiceInputEstablish_views = "epos/sales/DialogInvoiceInputEstablish";
		public static final String onSearchInputEstablish ="/epos/sales/onSearchInputEstablish";
		public static final String onSearchInputEstablishSEVIRCE ="/epos/sales/onSearchInputEstablishsevirce";
		public static final String onSearchInputEstablishGOODS ="/epos/sales/onSearchInputEstablishGoods";
		public static final String on_Insert_Input_Establish ="/epos/sales/onInsertInputEstablishGoods";
		public static final String ON_PRINT_INVOICE_ELECTRIC ="/epos/sales/onPrintInvoiceElectric";
		//Xử lý yêu cầu bảo hành
		public static final String Form_Warranty_Process_link = "/epos/sales/FormWarrantyProcess";
		public static final String Form_Warranty_Process_views = "epos/sales/formWarrantyProcess";
		public static final String OnSearch_Form_Warranty_Process = "/epos/sales/FormWarrantyProcess/onSearch";
		public static final String OnProcess_Form_Warranty_Process = "/epos/sales/FormWarrantyProcess/onProcess";
		public static final String OnCantDo_Form_Warranty_Process = "/epos/sales/FormWarrantyProcess/onCantDo";
		// end
		// Report
		// BEGIN XEM THONG TIN KHO
		public static final String URL_STOCK_VIEW = "/epos/inventory/formStockView";
		public static final String ACTION_STOCK_VIEW_LIST_SHOP = "/epos/FormStockView/GetStocksTree";
		public static final String GET_LIST_STAFF_WITH_TYPE = "/epos/FormStockView/getListStaffByShopAndType";
		public static final String GET_STOCK_SERIAL_BY_CONDITION_STOCK_VIEW = "/epos/inventory/FormStockView/getStockSerialByConditionStockView";
		/* Danh sach combo nguon hang */
		public static final String ACTION_GET_LIST_RESOUCE_CODE = "/epos/StockView/getListResourceCode";
		/* Danh sach combo loai hang hoa */
		public static final String ACTION_GET_LIST_INTERNAL_STOCK = "/epos/StockView/getListInternalStock";

		/* Kho cua hang */
		public static final String ACTION_SEARCH_GOOD_INSTOCK = "/epos/StockView/searchGoodsInStock";
		/* Kho cua hang va nhan vien */
		public static final String ACTION_SEARCH_GOOD_IN_STOCK_AND_STAFF = "/epos/StockView/searchGoodsInStockAndStaff";

		/* Load chi tiết số lượng từng mặt hàng - theo kho cua hang */
		public static final String ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK = "/epos/StockView/searchCountDetailGoodInStock";

		/* Load chi tiết số lượng từng mặt hàng theo kho cua hang va nhan vien */
		public static final String ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF = "/epos/StockView/searchCountDetailGoodInStockAndStaff";

		/* Load danh sach hang dinh kem */
		public static final String ACTION_GET_LIST_GOOD_ATTACH = "/epos/StockView/getListGoodAttachByGood";
		
		/* Load chi tiet trang thái */
		public static final String ACTION_GET_LIST_STATE = "/epos/StockView/getListState";

		/* Bao cao hang ton kho */
		public static final String ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE = "/epos/reportSearchInfomationShopAndStaff/exportFile";

		// END XEM THONG TIN KHO

		/* BEGIN FORM NHAP HANG VE TU CAP TREN */
		public static final String URL_FORM_SUPERIOR_STOCK_IMPORT = "/epos/inventory/formSuperiorStockImport";
		public static final String SUPERIOR_STOCK_IMPORT_LIST_STOCK_TRANSACTIONS = "/epos/FormSuperiorStockImport/getStockTransactionsList";
		public static final String SUPERIOR_STOCK_IMPORT_STOCK_TRANS_DETAIL = "/epos/FormSuperiorStockImport/getStockTransactionDetail";
		public static final String SUPERIOR_STOCK_GET_LIST_SERIAL_IN_TRANSACTION = "/epos/FormSuperiorStockImport/getSerialIntransaction";
		public static final String SUPERIOR_STOCK_IMPORT_SUPERIOR_TRANSACTION = "/epos/FormSuperiorStockImport/ImportTransaction";
		/* BEGIN FORM NHAP HANG VE TU CAP TREN */

		/* BEGIN CHUYEN HANG THANH HANG HONG */
		public static final String URL_CONVERT_TO_DAMAGED_GOODS = "/epos/inventory/formConvertToDamagedGoods";
		public static final String ACTION_CONVERT_TO_DAMAGED_GOODS = "/epos/inventory/formConvertToDamagedGoods/onSaveToDamagedGoods";
		/* END CHUYEN HANG THANH HANG HONG */

		/* BEGIN CAP MOI PHIEU BAO HANH */
		public static final String URL_FORM_NEW_WARRANTY_NO = "/epos/inventory/formNewWarrantyNo";
		public static final String ACTION_FORM_NEW_WARRANTY_LIST_WARRANTY_NO = "/epos/inventory/formNewWarrantyNo/listWarrantyNo";
		public static final String ACTION_FORM_NEW_WARRANTY_CREATE_WARRANTY_NO = "/epos/inventory/formNewWarrantyNo/createWarrantyNo";
		public static final String ACTION_FORM_NEW_WARRANTY_GENERATE_WARRANTY_NO = "/epos/inventory/formNewWarrantyNo/generateWarrantyNo";
		public static final String ACTION_FORM_NEW_WARRANTY_LIST_WARRANTY_EXITS = "/epos/inventory/formNewWarrantyNo/listWarrantyNoExits";
		/* END CAP MOI PHIEU BAO HANH */

		public static final String FORM_STOCK_IMPORT_FROM_PARTNER_LINK = "epos/inventory/formStockImportFromPartner";
		public static final String FORM_STOCK_IMPORT_FROM_PARTNER_GET_REECEIP_NO_SEQ = "/epos/inventory/formStockImportFromPartner/getReceiptNoSeq";
		public static final String FORM_STOCK_IMPORT_FROM_PARTNER_GET_LIST_REASON = "/epos/inventory/formStockImportFromPartner/getListReason";
		public static final String FORM_STOCK_IMPORT_FROM_PARTNER_ON_SAVE = "/epos/inventory/formStockImportFromPartner/onSave";
		public static final String DIALOG_BUTTON_DETAIL = "/popup/dialogButtonDetail";
		public static final String DIALOG_LIST_SHOP = "/popup/dialogListShop";
		public static final String DIALOG_LIST_STOCK = "/popup/dialogListStock";
		public static final String DIALOG_BUTTON_DETAIL_LINK = "epos/inventory/dialogButtonDetail";
		public static final String DOWNLOAD_FILE_TEMPLATE = "/epos/inventory/downLoadFileTemplate";
		public static final String ACTION_LIST_SERIAN_TEMPLATE = "/epos/inventory/getListSerianFromFile";
		public static final String ACTION_LIST_SERIAL_TEMPLATE_WARRANTY = "/epos/inventory/getListSerianFromFileWarranty";
		public static final String DOWNLOAD_FILE_ERROR = "/epos/inventory/downLoadFileError";
		public static final String FORM_EXPORT_TO_SUPERIOR = "/epos/inventory/formExportToSuperior";
		public static final String FORM_EXPORT_TO_SUPERIOR_LINK_GET_LIST_REASON = "/epos/inventory/formExportToSuperior/getListReason";
		public static final String FORM_EXPORT_TO_SUPERIOR_ON_SAVE = "/epos/inventory/formExportToSuperior/onSave";
		public static final String FORM_BANK_TRANSACTION_APPROVE_LINK = "/epos/sales/formBankTransactionApprove";
		public static final String FORM_BANK_TRANSACTION_APPROVE_GET_LIST_AP_DOMAIN = "/epos/sales/formBankTransactionApprove/getListApDomain";
		public static final String FORM_BANK_TRANSACTION_APPROVE_GET_SHOP_LIST_FROM_ROOT = "/epos/sales/formBankTransactionApprove/getShopListFromRoot";
		public static final String FORM_BANK_TRANSACTION_APPROVE_GET_STAFF_LIST_FROM_ROOT = "/epos/sales/formBankTransactionApprove/getStaffListFromRoot";
		public static final String FORM_BANK_TRANSACTION_APPROVE_GET_STAFF_NEXT_RECEIPT_NO = "/epos/sales/formBankTransactionApprove/getNextReceiptNo";
		public static final String FORM_BANK_TRANSACTION_APPROVE_ENQUERY_BANK_DEPOSIT = "/epos/sales/formBankTransactionApprove/enqueryBankDeposit";
		public static final String FORM_BANK_TRANSACTION_APPROVE_GET_LIST_REASON_BY_TYPE = "/epos/sales/formBankTransactionApprove/getReasonListByType";
		public static final String FORM_BANK_TRANSACTION_APPROVE_GET_LIST_ACCOUNT_TYPE = "/epos/sales/formBankTransactionApprove/getListAccountType";
		public static final String FORM_BANK_TRANSACTION_APPROVE_APPROVE_BANK_DEPOSIT = "/epos/sales/formBankTransactionApprove/approveBankDeposit";
		public static final String FORM_BANK_TRANSACTION_APPROVE_DESTROY_BANK_DEPOSIT = "/epos/sales/formBankTransactionApprove/destroyBankDeposit";
		public static final String ACTION_EXPORT_MULTI_FILE = "/epos/report/exportMultiFile";
		// EXPORT TO DEALER FROM BUI DINH DAT
		public static final String LINK_EXPORT_TO_DEALER = "/epos/inventory/ExportToDealer";
		public static final String COMMAND_SUCCESS = "/epos/inventory/ExportToDealer/commandSucces";
		public static final String COMMAND_REFUSE = "/epos/inventory/ExportToDealer/commandRefuse";
		public static final String EXPORT_TO_DEALER_VALIDATA = "/epos/inventory/ExportToDealer/validFormExportToDealer";
		public static final String GET_EXPORT_TO_DEALER_GET_TRANS_ID = "/epos/inventory/ExportToDealer/getTransId";

		public static final String GET_EXPORT_TO_DEALER_SHOP_TYPE = "/epos/inventory/ExportToDealer/getShopType";
		public static final String GET_STATUS = "/epos/inventory/ExportToDealer/getStatus";
		public static final String GET_AGENT = "/epos/inventory/ExportToDealer/getAgent";
		public static final String GET_REASON = "/epos/inventory/ExportToDealer/getReason";
		public static final String GET_RESOURCE_CODE = "/epos/inventory/ExportToDealer/getResourceCode";
		public static final String ON_SEARCH_SUCCESS = "/epos/inventory/ExportToDealer/onSearch";
		public static final String GET_EXPORT_TO_DEALER_GOODS_LIST = "/epos/inventory/ExportToDealer/getGoodsList";
		public static final String GET_STOCK_TRANSACTION_DETAIL = "/epos/inventory/ExportToDealer/getStockTransactionDetail";
		public static final String GET_INTERNALSTOCK = "/epos/inventory/ExportToDealer/getInternalStock";
		public static final String GET_DATA_WARANTY = "/epos/inventory/ExportToDealer/getTeamplateWarantyValue";
		public static final String EXPORT_COMMAND = "/epos/inventory/ExportToDealer/exportCommand";
		public static final String ON_SEARCH_SERVICE = "/epos/inventory/ExportToDealer/onSearchService";
		public static final String ON_SEARCH_SERIALS = "/epos/inventory/ExportToDealer/onSearchSerials";

		// IMPORT STOCK FROM INFERIOR
		public static final String DIALOG_BUTTON_DETAIL_ISFI = "/popup/dialogSerialList";
		public static final String DIALOG_BUTTON_DETAIL_ISFI_LINK = "epos/inventory/dialogSerialList";
		public static final String GET_STOCK_IMPORT_FROM_INFERIOR = "/epos/inventory/getStockImportFromInferior";
		public static final String GET_STOCK_SERIAL_TRIP_IMPORT_ISFI = "/epos/inventory/getStockSerialTripImport";
		public static final String GET_STOCK_SERIAL_TRIP_IMPORT_FOR_RIGHT_ISFI = "/epos/inventory/getStockSerialTripImportForRight";
		public static final String SPIRIT_STOCK_TRANSACTION_ISFI = "/epos/inventory/spiritStokTransaction";
		public static final String IMPORT_STOCK_TRANSACTION_ISFI = "/epos/inventory/importForStockTransaction";
		public static final String APPROVE_STOCK_TRANSACTION_ISFI = "/epos/inventory/approveForStockTransaction";
		public static final String REJECT_STOCK_TRANSACTION_ISFI = "/epos/inventory/rejectForStockTransaction";

		// FORM IMPORT STAFF BALANCE BUI DINH DAT
		public static final String GET_RECEIPTCODE = "/epos/inventory/fctFormImportStaffBalacnce/getReceiptCode";
		public static final String FORM_IMPORT_STAFFBALANCE_GET_INTERNALSTOCK = "/epos/inventory/fctFormImportStaffBalacnce/getInternalStock";
		public static final String FORM_IMPORT_STAFFBALANCE_GET_STAFFLIST = "/epos/inventory/fctFormImportStaffBalacnce/getChildsStockStaff";
		public static final String FORM_IMPORT_STAFFBALANCE_GET_REASON_BY_TYPE = "/epos/inventory/fctFormImportStaffBalacnce/getReasoByTypen";
		public static final String FORM_IMPORT_STAFFBALANCE_QUERY_BALANCE = "/epos/inventory/fctFormImportStaffBalacnce/queryBalance";
		public static final String FORM_IMPORT_STAFFBALANCE_IMPORT_STAFF_BALANCE = "/epos/inventory/fctFormImportStaffBalacnce/importStaffBalance";
		public static final String FORM_IMPORT_STAFFBALANCE_GET_VALUE_TEMPLATE_PRINT = "/epos/inventory/fctFormImportStaffBalacnce/getValueTemplatePrint";
		public static final String LINK_STAFFBALANCE = "/epos/inventory/FormImportStaffBalance";
		// StockImportFromCustomer
		public static final String FORM_STOCK_IMPORT_FROM_CUSTOMER = "/epos/inventory/formStockImportFromCustomer";
		public static final String FORM_STOCK_IMPORT_FROM_CUSTOMER_LINK = "epos/inventory/StockImportFromCustomer";
		public static final String DIALOG_BUTTON_SERIAL_SIFC = "/popup/dialogSerialDetailSIFC";
		public static final String DIALOG_BUTTON_SERIAL_SIFC_LINK = "epos/inventory/dialogSerialDetailSIFC";
		public static final String GET_STOCK_SOLD_ALL_SERIAL_SINGLE = "/epos/inventory/getStockSoldAllSerialSingle";
		public static final String GET_ALL_GOODS = "/epos/inventory/getAllGoods";
		public static final String CREATE_CUSTOMER_TRANS = "/epos/inventory/createCustomerTrans";

		public static final String FORM_STOCK_TRANS_ENQUERY = "/epos/inventory/FormStockTrans";
		public static final String GET_FORM_STOCK_TRANS_ENQUERY_LIST_STOCKS = "/epos/inventory/FormStockTransEnquery/getStockList";
		public static final String GET_FORM_STOCK_TRANS_ENQUERY_REASON_LIST = "/epos/inventory/FormStockTransEnquery/getReasonsList";
		public static final String GET_FORM_STOCK_TRANS_ENQUERY_NAME_LIST = "/epos/inventory/FormStockTransEnquery/getListName";
		public static final String SEARCH_FORM_STOCK_TRANS_ENQUERY_TRANSACTION = "/epos/inventory/FormStockTransEnquery/searchStockTransaction";
		public static final String GET_FORM_STOCK_TRANS_DETAILS = "/epos/inventory/FormStockTransEnquery/getStockTransDetails";
		public static final String DestroyTrans_FORM_STOCK_TRANS_ENQUERY_TRANSACTION = "/epos/inventory/FormStockTransEnquery/DestroyTrans";
		public static final String FORM_STOCK_TRANS_ENQUERY_LINK = "/epos/inventory/FormStockTransEnquery";
		public static final String FORM_STOCK_TRANS_ENQUERY_VIEW = "epos/inventory/FormStockTransEnquery";

		// RENEW WARRANTY NUMBER BY BUI DINH DAT
		public static final String RENEW_WARRANTY_NUMBER_GET_LOWRECEIVER_AGENT = "/epos/inventory/RenewWarrantyNumber/getLowReceiverAgent";
		public static final String RENEW_WARRANTY_NUMBER_GET_REASON = "/epos/inventory/RenewWarrantyNumber/getReason";
		public static final String RENEW_WARRANTY_NUMBER_GET_lOW_STAFF = "/epos/inventory/RenewWarrantyNumber/getLowStaff";
		public static final String RENEW_WARRANTY_NUMBER_SEARCH_LIST_WARANTY_ACTION = "/epos/inventory/RenewWarrantyNumber/searchWarrantyActionList";
		public static final String RENEW_WARRANTY_NUMBER_GET_STATE_lIST = "/epos/inventory/RenewWarrantyNumber/getStateList";
		public static final String RENEW_WARRANTY_NUMBER_GET_GOOD_lIST = "/epos/inventory/RenewWarrantyNumber/getGoodList";
		public static final String RENEW_WARRANTY_NUMBER_GET_VALUE_PRINT_WARRANTY = "/epos/inventory/RenewWarrantyNumber/getTeamplateWarantyValue";
		public static final String RENEW_WARRANTY_NUMBER_RENEW_WARRANTY_SUCCESS = "/epos/inventory/RenewWarrantyNumber/renewWarrantySuccess";
		public static final String RENEW_WARRANTY_NUMBER_VALIDATE_INPUT = "/epos/inventory/RenewWarrantyNumber/validateInput";
		public static final String RENEW_WARRANTY_NUMBER_INSERT_ITEM_LIST_WARANTY_ACTION = "/epos/inventory/RenewWarrantyNumber/insertItemListWarranty";
		public static final String LINK_RENEW_WARRANTY_NUMBER = "/epos/inventory/RenewWarrantyNumber";
		public static final String GET_WARANTY_NO = "/epos/inventory/RenewWarrantyNumber/generateWarrantyNo";
		public static final String GET_LIST_SERIAL = "/epos/inventory/RennewWarrantyNumber/getListSerial";
		public static final String GET_SERIAL_WARRANTY_FILE2 = "/epos/inventory/RenewWarrantyNumber/getFile";

		// PrintWarrantyByBatch
		public static final String FORM_PRINT_WARRANTY_BY_BATCH = "/epos/inventory/formPrintWarrantyByBatch";
		public static final String FORM_PRINT_WARRANTY_BY_BATCH_LINK = "epos/inventory/FormPrintWarrantyByBatch";
		public static final String GET_SERIAL_WARRANTY_BY_BATCH = "/epos/inventory/getSerialWarrantyByBatch";
		public static final String UPDATE_WARRANTY_NUMBER = "/epos/inventory/updateWarrantyNumber";
		public static final String GET_SERIAL_WARRANTY_FILE = "/epos/inventory/getSerialListWarrantyFile";
		public static final String GET_LIST_SHOP = "/epos/inventory/printwarrantybybatch/getListShop";

		// FormReceiptEstablish
		public static final String FORM_RECEIPT_ESTABLISH_LINK = "/epos/sales/FormReceiptEstablish";
		public static final String FORM_RECEIPT_ESTABLISH_VIEW = "epos/sales/FormReceiptEstablish";
		public static final String FORM_RECEIPT_ESTABLISH_GET_INVOICE_TYPE = "/epos/sales/FormReceiptEstablish/getInvoiceType";
		public static final String FORM_RECEIPT_ESTABLISH_GET_PAYMENT_METHOD = "/epos/sales/FormReceiptEstablish/getPaymentMethod";
		public static final String FORM_RECEIPT_ESTABLISH_SEARCH_INVOICE = "/epos/sales/FormReceiptEstablish/searchInvoice";
		public static final String FORM_RECEIPT_ESTABLISH_ENQUERY_INVOICE_BILL = "/epos/sales/FormReceiptEstablish/enqueryInvoiceBill";
		public static final String FORM_RECEIPT_CREATE_INVOICE = "/epos/sales/FormReceiptEstablish/createInvoice";
		// FormSaleDealer
		public static final String FORM_SALE_DEALER = "/epos/sales/FormSaleAgent";
		public static final String FORM_SALE_DEALER_GET_LIST_AP_DOMAINS = "/epos/sales/FormSaleDealer/getListApDomains";
		public static final String FORM_SALE_DEALER_GET_LIST_AGENTS = "/epos/sales/FormSaleDealer/getListAgents";
		public static final String FORM_SALE_DEALER_GET_RATE = "/epos/sales/FormSaleDealer/getRate";
		public static final String FORM_SALE_DEALER_GET_LIST_STAFFS = "/epos/sales/FormSaleDealer/getListStaffs";
		public static final String FORM_SALE_DEALER_GET_LIST_GOODS = "/epos/sales/FormSaleDealer/getListGoods";
		public static final String FORM_SALE_DEALER_GET_LIST_PRICES = "/epos/sales/FormSaleDealer/getListPrices";
		public static final String FORM_SALE_DEALER_GET_LIST_PROMOTIONS = "/epos/sales/FormSaleDealer/getListPromotions";
		public static final String FORM_SALE_DEALER_INIT_MAP_PRICE_AND_BUNDLE = "/epos/sales/FormSaleDealer/initMapPriceTypeAndBundle";
		public static final String FORM_SALE_DEALER_ADD_GOODS = "/epos/sales/FormSaleDealer/addGoods";
		public static final String FORM_SALE_DEALER_GET_PRICE_TYPE_ID = "/epos/sales/FormSaleDealer/getPriceTypeId";
		public static final String FORM_SALE_DEALER_CALCULATE_DISCOUNT = "/epos/sales/FormSaleDealer/calculateDiscount";
		public static final String FORM_SALE_DEALER_INIT_AS_DATA = "/epos/sales/FormSaleDealer/initASData";
		public static final String FORM_SALE_DEALER_GET_SERIAL = "/epos/sales/FormSaleDealer/getSerial";
		public static final String FORM_SALE_DEALER_DELETE_GOODS = "/epos/sales/FormSaleDealer/deleteGoods";
		public static final String DIALOG_AS_FROM_LIST_SERIAL = "/popup/dialogASFromListSerial";
		public static final String DIALOG_AS_TO_LIST_SERIAL = "/popup/dialogASToListSerial";
		public static final String FORM_SALE_DEALER_WRITE_INFO = "/epos/sales/FormSaleDealer/writeInfo";
		public static final String FORM_SALE_DEALER_CHECK_SHOP_CREDIT = "/epos/sales/FormSaleDealer/checkShopCredit";
		public static final String FORM_SALE_DEALER_SAVE_TRANSACTION = "/epos/sales/FormSaleDealer/saveTransaction";
		public static final String FORM_SALE_DEALER_WRITE_DATA_TO_DATABASE = "/epos/sales/FormSaleDealer/writeDataToDatabase";
		public static final String FORM_SALE_DEALER_GET_SO_CODE = "/epos/sales/FormSaleDealer/getSOCode";
		public static final String FORM_SALE_DEALER_GET_LIST_SERIAL_FOR_ATTACH_GOODS = "/epos/sales/FormSaleDealer/getListSerialAttachGoods";
		public static final String FORM_SALE_DEALER_ADD_ATTACH_GOODS_TO_FORM = "/epos/sales/FormSaleDealer/addAttachGoodsToForm";
		public static final String FORM_SALE_DEALER_GET_PARAMS_PRINT = "/epos/sales/FormSaleDealer/getParamsPrint";
		public static final String FORM_SALE_DEALER_EXPORT_FILE = "/epos/sales/FormSaleDealer/exportFile";

		// FormInvoiceApprove by BUI DINH DAT
		public static final String IN_VOICE_APPROVE = "/epos/sales/InvoiceApprove";
		public static final String INVOICE_APPROVE_GET_SHOP = "/epos/sales/InvoiceApprove/getShop";
		public static final String INVOICE_APPROVE_GET_STAFF = "/epos/sales/InvoiceApprove/getStaff";
		public static final String INVOICE_APPROVE_GET_INVOICE_STATUS = "/epos/sales/InvoiceApprove/getInvoiceStatus";
		public static final String INVOICE_APPROVE_GET_TYPE_TRANSACTION = "/epos/sales/InvoiceApprove/getTypeTransaction";
		public static final String INVOICE_APPROVE_ENQUERY_INVOICE = "/epos/sales/InvoiceApprove/enqueryInvoice";
		public static final String INVOICE_APPROVE_GET_PAY_METHOD = "/epos/sales/InvoiceApprove/getPayMethod";
		public static final String INVOICE_APPROVE_SUCCESS_APPROVE = "/epos/sales/InvoiceApprove/approveSuccess";
		public static final String INVOICE_APPROVE_SUCCESS_DESTROY = "/epos/sales/InvoiceApprove/destroySuccess";
		public static final String INVOICE_APPROVE_FORM_INVOICE_APPROVE_PRINT="/epos/sales/InvoiceApprove/formInvoiceApprovePrint";


		// FormEnqueryWar by BUI DINH DAT
		public static final String GET_LINK_FORM_ENQUERY_WAR = "/epos/sales/FormEnqueryWar";
		public static final String FORM_ENQUERY_WAR_ON_SEARCH = "/epos/sales/FormEnqueryWar/onSearch";
		public static final String FORM_ENQUERY_WAR_GET_APDOMAIN = "/epos/sales/FormEnqueryWar/getApdomain";
		public static final String FORM_ENQUERY_WAR_GET_ENQUERY_GOODSLIST = "/epos/sales/FormEnqueryWar/getEnqueryGoodsList";
		public static final String FORM_ENQUERY_WAR_SEARCH_WARRANTY_DETAIL = "/epos/sales/FormEnqueryWar/searchWarrantyDetail";
		public static final String FORM_ENQUERY_WAR_GET_TEM_PLATE_VALUE = "/epos/sales/FormEnqueryWar/getTemPlateValue";
		public static final String FORM_ENQUERY_WAR_UPDATE_PRINT_OK = "/epos/sales/FormEnqueryWar/updatePrintOk";
		// FormLookUpTransaction by BUI DINH DAT
		public static final String GET_LINK_FORM_LOOK_UP_TRANSACTION = "/epos/sales/formLookupTransaction";
		public static final String FORM_LOOKUP_TRANSACTION_ON_SEARCH = "/epos/sales/formLookUpTransaction/onSearch";
		public static final String FORM_LOOKUP_TRANSACTION_ENQUERY_TRANSACTION_DETAIL = "/epos/sales/formLookUpTransaction/enqueryTransactionDetail";
		public static final String FORM_LOOKUP_TRANSACTION_GET_SERIAL_INFOR = "/epos/sales/formLookUpTransaction/getSerialInfor";

		// FormSaleTransaction
		public static final String FORM_SALE_TRANSACTION = "/epos/sales/FormSaleTransaction";
		public static final String FORM_SALE_TRANSACION_LINK = "epos/sales/FormSaleTransaction";
		public static final String GET_CURRENT_GOODS_STAFF = "/epos/sales/formSaleTransaction/getCurrentGoodsStaff";
		public static final String GET_TRANS_TYPE = "/epos/sales/formSaleTransaction/getTransType";
		public static final String GET_ATTACH_GOODS = "/epos/sales/formSaleTransaction/getAttachGoods";
		public static final String GET_SERIAL_ATTACH_GOODS = "/epos/sales/formSaleTransaction/getSerialAttachGoods";
		public static final String GET_CALCULATE_DISCOUNT = "/epos/sales/formSaleTransacion/getCalculateDiscount";
		public static final String GET_MGMG_GOODS_SERIAL = "/epos/sales/formSaleTransaction/getMGMGGoodsSerial";
		public static final String VALID_INPUT_WRITE_INFO = "/epos/sales/formSaleTransaction/validInputWriteInfo";
		public static final String GET_ALL_SOLD_GOODS = "/epos/sales/formSaleTransaction/getAllSoldGoods";
		public static final String GET_PROFILE_FROM_NMS = "/epos/sales/formSaleTransaction/getProfileFromNMS";
		public static final String WRITE_INFO_TRANS = "/epos/sales/formSaleTransaciton/writeInfoTrans";
		public static final String ADD_PROMOTION_SERIAL = "/epos/sales/formSaleTransaction/addPromotionSerial";
		public static final String FLAG_CLOSE_DIALOG = "/epos/sales/formSaleTransaction/flagCloseDialog";
		public static final String SAVE_SALE_TRANSACTION = "/epos/sales/formSaleTransaction/saveSaleTransaction";
		public static final String GET_MONEY = "/epos/sales/formSaleTransaction/getMoney";
		public static final String GET_SHOP_STOCK_ID = "/epos/sales/formSaleTransaction/getShopStockID";
		public static final String SAVE_MGM_PROMOTION = "/epos/sales/formSaleTransaction/saveMGMPromotion";
		
		//FromEnqueryActionLog

		// FromEnqueryActionLog
		public static final String FORM_ENQUERY_ACTION_LOG_VIEW = "epos/sales/FormEnqueryActionLog";
		public static final String FORM_ENQUERY_ACTION_LOG_LINK = "/epos/sales/FormEnqueryActionLog";
		public static final String FORM_ENQUERY_ACTION_LOG_GET_LIST_ACION_TYPE = "/epos/sales/FormEnqueryActionLog/getListActionType";
		public static final String FORM_ENQUERY_ACTION_LOG_SEARCH = "/epos/sales/FormEnqueryActionLog/search";
		public static final String FORM_ENQUERY_ACTION_LOG_EXPORT_FILE = "/epos/sales/FormEnqueryActionLog/exportFile";

		// Form Quản lý phiếu thu chi bán hàng tại cửa hàng
		public static final String URL_FORM_RECEIPT_EXPENSE_FROM_SHOP = "/epos/sales/FormReceiptExpenseFromShop";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_LIST_RECEIPT = "/epos/sales/FormReceiptExpenseFromShop/listReceipt";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_UPDATE_RECEIPT_INFO = "/epos/sales/FormReceiptExpenseFromShop/updateReceiptInfo";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_CREATE_RECEIPT_INFO = "/epos/sales/FormReceiptExpenseFromShop/createReceiptInfo";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_APPROVE_RECEIPT_INFO = "/epos/sales/FormReceiptExpenseFromShop/approveReceipt";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_DESTROY_RECEIPT_INFO = "/epos/sales/FormReceiptExpenseFromShop/destroyReceipt";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_COMPARE_EXPENSE_WITH_CURRENT_AMOUNT = "/epos/sales/FormReceiptExpenseFromShop/compareExpenseWithCurrentAmount";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_RECEIPT_NO = "/epos/sales/FormReceiptExpenseFromShop/getReceiptNo";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_AMOUNT_ORIGINAL = "/epos/sales/FormReceiptExpenseFromShop/getAmountOriginal";
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_GET_PAYMENT_INFO= "/epos/sales/FormReceiptExpenseFromShop/getPaymentInfo";

	}

	public static final class ITEM_CODE_PRIVILEGE
	{
		// quan ly kho
		public static final String CHECK_PERMISSIONS_URL_STOCK_VIEW = "QLK_001&ACCESS"; // Xem thong tin kho
		public static final String CHECK_PERMISSIONS_FORM_STOCK_IMPORT_FROM_PARTNER_LINK = "QLK_002&ACCESS"; // Nhap hang tu nha cung cap
		public static final String CHECK_PERMISSIONS_FORM_EXPORT_STOCKS_TO_PARTNER = "QLK_003&ACCESS"; // Xuat hang tra nha cung cap
		public static final String CHECK_PERMISSIONS_INPUTFORM_LINK = "QLK_004&ACCESS"; // Nhap hang tu trung tam (Tu dong)
		public static final String CHECK_PERMISSIONS_STOCK_EXPORT_TO_CENTER = "QLK_005&ACCESS"; // Xuat hang tra trung tam
		public static final String CHECK_PERMISSIONS_FORM_EXPORT_TO_INFERIOR = "QLK_006&ACCESS"; // Xuat hang cho kho cap duoi
		public static final String CHECK_PERMISSIONS_LINK_EXPORT_TO_DEALER = "QLK_007&ACCESS"; // Xuat ban cho dai ly
		public static final String CHECK_PERMISSIONS_URL_FORM_SUPERIOR_STOCK_IMPORT = "QLK_008&ACCESS"; // Nhap hang ve tu cap tren
		public static final String CHECK_PERMISSIONS_FORM_EXPORT_TO_SUPERIOR = "QLK_009&ACCESS"; // Xuat hang tra cho cap tren
		public static final String CHECK_PERMISSIONS_FORM_INPUT_STOCK_FROM_INFERIOR = "QLK_010&ACCESS"; // Nhap hang tra lai tu cap duoi
		public static final String CHECK_PERMISSIONS_SUPERIOR_GOODIMPORT_LINK = "QLK_011&ACCESS"; // Nhap lai hang tra tu choi tu cap tren
		public static final String CHECK_PERMISSIONS_OUTPUT_FOR_STAFF = "QLK_012&ACCESS"; // Xuat kho cho nhan vien
		public static final String CHECK_PERMISSIONS_FORM_STOCK_IMPORT_FROM_STAFF = "QLK_013&ACCESS"; // Nhap kho do nhan vien tra lai
		public static final String CHECK_PERMISSIONS_LINK_STAFFBALANCE = "QLK_014&ACCESS"; // Nhap hang ton kho trong ngay tu nhan vien
		public static final String CHECK_PERMISSIONS_URL_CONVERT_TO_DAMAGED_GOODS = "QLK_015&ACCESS"; // Chuyen hang thanh hang hong
		public static final String CHECK_PERMISSIONS_FORMSTOCKEXPORTFORCUSTOMER_LINK = "QLK_016&ACCESS"; // Xuat hang ban cho khach hang
		public static final String CHECK_PERMISSIONS_FORM_STOCK_IMPORT_FROM_CUSTOMER = "QLK_017&ACCESS"; // Nhap hang tra lai tu khach hang
		public static final String CHECK_PERMISSIONS_FORMSTOCKEXPORTFORCUSTOMERBYBATCH_LINK = "QLK_018&ACCESS"; // Xuat hang ban cho khach hang theo lo
		public static final String CHECK_PERMISSIONS_EXPORT_TO_OTHER_SHOP = "QLK_019&ACCESS"; // Xuat kho khong phan cap
		public static final String CHECK_PERMISSIONS_FORM_IMPORT_FROM_OTHER_SHOP = "QLK_020&ACCESS"; // Nhap kho khong phan cap
		public static final String CHECK_PERMISSIONS_LINK_RENEW_WARRANTY_NUMBER = "QLK_021&ACCESS"; // Cap lai phieu bao hanh
		public static final String CHECK_PERMISSIONS_URL_FORM_NEW_WARRANTY_NO = "QLK_022&ACCESS"; // Cap moi phieu bao hanh
		public static final String CHECK_PERMISSIONS_FORM_PRINT_WARRANTY = "QLK_023&ACCESS"; // In phieu bao hanh
		public static final String CHECK_PERMISSIONS_FORM_PRINT_WARRANTY_BY_BATCH = "QLK_024&ACCESS"; // In phieu bao hanh theo lo
		public static final String CHECK_PERMISSIONS_FORM_STOCK_TRANS_ENQUERY_LINK = "QLK_025&ACCESS"; // Tra cuu giao dich xuat nhap kho
		public static final String CHECK_PERMISSIONS_FORM_ENQUERY_SERIAL = "QLK_026&ACCESS"; // Tra cuu hang hoa theo serial
		public static final String CHECK_PERMISSIONS_FORM_ADD_SERIAL_TO_SPECIAL_STOCK = "QLK_027&ACCESS"; // Chuyen SIM khong dat coc vao kho

		// quan ly ban hang
		public static final String CHECK_PERMISSIONS_FORM_SALE_DEALER = "QLBH_005&ACCESS"; // Lap giao dich ban hang cho dai ly

		public static final String CHECK_PERMISSIONS_FORMINVOICE_ESTABLISH = "QLBH_003&ACCESS";// Lap hóa đơn bán hang
		public static final String CHECK_PERMISSIONS_FORM_IN_VOICE_APPROVE = "QLBH_004&ACCESS"; // Duyet hoa don ban hang

		public static final String CHECK_PERMISSIONS_FORM_RECEIPT_EXPENSE_FROM_SHOP = "QLBH_007&ACCESS";// Quản lý phiếu thu chi bán hàng tại cửa hàng
		public static final String CHECK_PERMISSIONS_FORM_BANK_TRANSACTION = "QLBH_008&ACCESS"; // Lap chung tu tien gui ngan hang
		public static final String CHECK_PERMISSIONS_FORM_BANK_TRANSACTION_APPROVE_LINK = "QLBH_009&ACCESS"; // Quan ly gui tien ngan hang
		public static final String CHECK_PERMISSIONS_FORM_WAR_TRANSACTION_LINK = "QLBH_010&ACCESS"; // Quan ly gui tien ngan hang
		public static final String CHECK_PERMISSIONS_FORM_WARRANTY_PROCESS = "QLBH_011&ACCESS";// Xử lý yêu cầu bảo hành
		public static final String CHECK_PERMISSIONS_FORM_GET_LINK_FORM_ENQUERY_WAR = "QLBH_012&ACCESS"; // Tra cuu phieu bao hanh

		public static final String CHECK_PERMISSIONS_FORM_GET_LINK_FORM_LOOK_UP_TRANSACTION = "QLBH_014&ACCESS"; // Tra cuu giao dich ban hang

		public static final String CHECK_PERMISSIONS_FORM_DESTROY_TRANSACTION = "QLBH_016&ACCESS"; // Huy giao dich ban hang
		public static final String CHECK_PERMISSIONS_FORM_LOOKUP_INVOICE_HISTORY = "QLBH_015&ACCESS";// tra cuu hoa don ban hang
	}

	public static final class SERVER_MESS
	{
		public static final String RECEIPT_EXPENSE_AMOUNT_GREATER_REZO = "AMOUNT_GREATER_REZO"; // Tra cuu giao dich ban hang
	}

}
