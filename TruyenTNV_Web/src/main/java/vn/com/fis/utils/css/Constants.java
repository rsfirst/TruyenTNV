package vn.com.fis.utils.css;

public class Constants {

    public static final class REQUEST_MAPPING {
        public static final String ACTION_CUSTOMER_REGISTER = "/bs/Custome/registerCustomer";

        public static final String ACTION_CUSTOMER_MODIFY = "/bs/Custome/modifyCustomer";

        public static final String ACTION_CUSTOMER_MODIFY_CHECK_UPDATE = "/bs/Custome/modifyCustomer/checkUpdate";

        public static final String ACTION_CUSTOMER_UPLOAD_IMAGE = "/bs/Custome/uploadImage";

        public static final String ACTION_CUSTOMER_UPLOAD_IMAGE_BATCH = "/bs/Custome/uploadImageBatch";

        public static final String ACTION_CUSTOMER_GET_CUS_SUB = "/bs/Custome/getCusSub";

        public static final String ACTION_CUSTOMER_CHECK_QUERY = "/bs/Custome/checkQuery"; // DatBD2

        public static final String ACTION_CUSTOMER_GET_SIM_KIT = "/bs/Custome/getSIMKit";

        public static final String ACTION_CUSTOMER_SEARCH = "/bs/Custome/search";

        public static final String ACTION_CUSTOMER_LIST_CUSTOMER_TYPE = "/bs/Custome/listCustomerType";

        public static final String ACTION_CUSTOMER_LIST_PROVINCE = "/bs/Custome/listProvince";

        public static final String ACTION_CUSTOMER_LIST_DISTRICT = "/bs/Custome/listDistrict";

        public static final String ACTION_CUSTOMER_LIST_GET_PROVINCE_ID = "/bs/Custome/getProvinceId";

        public static final String ACTION_CUSTOMER_LIST_GET_DISTRICT_ID = "/bs/Custome/getDistrictId";

        public static final String ACTION_CUSTOMER_LIST_COUNTRY = "/bs/Custome/listCountry";

        public static final String ACTION_CUSTOMER_LIST_SERVICE_CHANGE = "/bs/Custome/listTypeOfServiceChange";

        public static final String ACTION_GET_STAFF_LIST = "/bs/Custome/listStaff";

        public static final String ACTION_GET_LIST_REQUEST_CHANGESIM_VIEW = "/bs/Custome/actionSearchRequestChangeServiceForView";

        public static final String ACTION_SEARCH_REQUEST_SERVICE_CHANGE = "/bs/Custome/searchRequestChangeService";

        public static final String ACTION_CUSTOMER_LIST_COS_NEW = "/bs/Custome/listCOSNew";

        public static final String ACTION_CUSTOMER_LIST_COS_MAP_NEW = "/bs/Custome/listCOSMapNew";

        public static final String ACTION_CUSTOMER_LIST_COS_KIT = "/bs/Custome/getCOSKit";

        public static final String ACTION_CUSTOMER_ADD_NEW_CONNECT = "/bs/Custome/addNewConnect";

        public static final String ACTION_CUSTOMER_SERCH_HIST = "/bs/Custome/searchHist";

        public static final String ACTION_CUSTOMER_LIST_SUB = "/bs/Custome/listsubscriber";

        public static final String ACTION_CUSTOMER_ADD_BATCH = "/bs/Custome/addCusBatch";

        public static final String ACTION_CUSTOMER_LIST_REASON = "/bs/Custome/getListReasonChangeSIM";

        public static final String ACTION_LIST_PROVINCE_SHOP = "/bs/Custome/getListProvinceShop";

        public static final String ACTION_UPDATE_PROVINCE_BS = "/bs/Custome/updateProvinceForBrandedShop";

        public static final String ACTION_LIST_SHOP_BY_PROVINCE_AND_SHOP = "/bs/Custome/getListShopByProvinceAndShop";

        public static final String ACTION_LIST_PROVINCE_SHOP_TEMPLATE = "/bs/Custome/getListProvinceFromTemplate";

        public static final String ACTION_LIST_SERIAL_CREATE_AIRTIME = "/bs/Custome/getListSerialTemplateAirtime";

        public static final String ACTION_CUSTOMER_CHANGE_SIM = "/bs/Custome/changeSIM";

        public static final String ACTION_CUSTOMER_CHANGE_SOVE = "/bs/Custome/changeSove";

        public static final String ACTION_REGISTER_BS = "/bs/Custome/registerBS";

        public static final String ACTION_CONNEC_SUB_BS = "/bs/Custome/connecterSubBS";

        public static final String ACTION_SUBSCRIBER_GET_INFO_UPDATE_PREPAID = "/bs/Custome/getSubInfoUpdatePrepaid";

        public static final String ACTION_SUBSCRIBER_GET_INFO_CHANGESIM_PREPAID = "/bs/Custome/getSubInfoChangeSIMPrepaid";

        public static final String ACTION_VERIFY_NUMBER_SPECIAL = "/bs/Custome/verifyNumberSpecial";

        public static final String ACTION_VERIFY_ID_CARD = "/bs/Custome/verifyIDCard";

        public static final String ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS = "/bs/Custome/verifySubscriberHistory";

        public static final String ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS_WITH_1_NUMBER = "/bs/Custome/verifySubscriberHistoryWith1Number";

        public static final String ACTION_VERIFY_SUBSCRIBER_HISTORY_CHANGE_SIM = "/bs/Custome/verifySubscriberHistoryChangeSim";

        public static final String ACTION_UPDATE_PREPAID_CUSTOMER = "/bs/Custome/updatePrepaidCustomer";

        public static final String ACTION_CREATE_NEW_SECRET_NUMBER = "/bs/Custome/createNewSecretNumber";

        public static final String ACTION_CUSTOMER_CHANGE_SIM_PREPAID = "/bs/Custome/changeSIMPrepaid";

        public static final String ACTION_APPROVE_REQUEST_CHANGE_SERVICE = "/bs/Custome/actionApproveRequestChangeService";

        public static final String ACTION_REJECT_REQUEST_CHANGE_SERVICE = "/bs/Custome/actionRejectRequestChangeService";

        public static final String ACTION_REVIEW_REQUEST_CHANGE_SERVICE = "/bs/Custome/actionReviewRequestChangeService";

        public static final String ACTION_GET_SHOP_BY_SHOP_CODE = "/bs/Custome/getShopByShopCode";

        public static final String ACTION_GET_FRIEND_SHOP_LIST = "/bs/Custome/getFriendShopList";

        public static final String ACTION_GET_NOT_FRIEND_SHOP_LIST = "/bs/Custome/getNotFriendShopList";

        public static final String ACTION_GET_NOT_FRIEND_SHOP_LIST_RECEIVED = "/bs/Custome/getNotFriendShopListReceived";

        public static final String ACTION_GET_DEFAULT_FRIEND_SHOP_LIST = "/bs/Custome/getDefaultFriendShopList";

        public static final String ACTION_GET_DEFAULT_FRIEND_SHOP_LIST_RECEIVED = "/bs/Custome/getDefaultFriendShopListRecieved";

        public static final String ACTION_INSERT_FRIEND_SHOP = "/bs/Custome/insertFriendShop";

        public static final String ACTION_INSERT_BATCH_FRIEND_SHOP = "/bs/Custome/insertBatchFriendShop";

        public static final String ACTION_UPDATE_BATCH_FRIEND_SHOP = "/bs/Custome/updateBatchFriendShop";

        public static final String ACTION_GET_GOODS_LIST_BY_SHOP = "/bs/Custome/getGoodsListByShop";

        public static final String ACTION_ADD_GOODS_LIST_TO_SHOP = "/bs/Custome/addGoodsListToShop";

        public static final String ACTION_GET_CHANGE_RANGGEDCARD_ID = "/bs/Custome/getChangeRaggedCardId";

        public static final String ACTION_CREATE_CHANGE_SCATCH_CARD_AIRTIME_NEW = "/bs/Custome/createRequestChangeCardAirtimeNew";

        public static final String ACTION_UPLOAD_FILE_IMAGE_SCATCH_CARD = "/bs/Custome/uploadFileImageScatchCard";

        public static final String ACTION_GET_STK_NUMBER = "/bs/Custome/getSTKnumber";

        public static final String ACTION_INSERT_PHYSICALCARD = "/bs/Custome/insertPhysicalCard";

        public static final String ACTION_LIST_CHANGE_CARD_TEMPLATE = "/bs/Custome/getListChangeCardFromTemplate";

        public static final String ACTION_SEARCH_REQUEST_CHANGE_CARD = "/bs/Custome/searchRequestChangeCard";

        public static final String ACTION_ACCEPT_REQUEST_CHANGE_CARD = "/bs/Custome/acceptRequestChangeCard";

        public static final String ACTION_GET_STAFF = "/bs/Custome/getStaff";

        public static final String ACTION_GET_REQUEST_CHANGE_CARD_AIRTIME_DETAIL = "/bs/Custome/getRequestChangeCardAirtimeDetail";

        public static final String ACTION_REJECT_REQUEST_CHANGE_CARD_AIRTIME = "/bs/Custome/rejectChangeCardAirtime";

        public static final String ACTION_DESTROY_REQUEST_CHANGE_CARD_AIRTIME = "/bs/Custome/destroyChangeCardAirtime";

        public static final String ACTION_GET_LIST_APDOMAIN_BLOCK = "/bs/Custome/getListApDomainBlock";

        public static final String ACTION_LOCK_REQUEST_CHANGE_CARD_AIRTIME = "/bs/Custome/lockRequestAirtime";

        public static final String ACTION_LOCK_CHANGE_CARD_AIRTIME = "/bs/Custome/changeRequestAirtime";

        public static final String ACTION_CUSTOMER_GET_IMG_CHANGE_CARD = "/bs/Custome/getImgChangeCard";

        public static final String ACTION_GET_CHANGE_CARD_PHYSICAL_DETAIL = "/bs/Custome/getChangeCardPhysicalDetail";

        public static final String ACTION_REMOVE_GOODS_LIST_FROM_SHOP = "/bs/Custome/removeGoodsListFromShop";

        public static final String ACTION_GET_LIST_STOCK_EXPORT = "/bs/Stock/getListStockExport";

        public static final String ACTION_GET_LIST_REASON_BY_CODE = "/bs/Stock/getListReason";

        public static final String ACTION_GET_LIST_STATUS_BY_TYPE = "/bs/Stock/getListStatus";

        public static final String ACTION_GET_LIST_STOCK_TRANS = "/bs/Stock/getListStockTrans";

        public static final String ACTION_GET_TRANS_DETAIL = "/bs/Stock/getDetailTrans";

        public static final String ACTION_CONFIRM_STOCK_TRANS = "/bs/Stock/confirmStockTrans";

        public static final String ACTION_CHECK_FRIEND_VNM = "/bs/ProductOrder/checkFriendVnmVald";

        public static final String ACTION_ADD_PO_FOR_BS = "/bs/ProductOrderMPV/add";

        public static final String ACTION_SEARCH_PO_FOR_BS = "/bs/ProductOrderMPV/searchPOforBS";

        public static final String ACTION_SEARCH_PO_DETAIL_FOR_BS = "/bs/ProductOrderMPV/searchPODetailforBS";

        public static final String ACTION_REJECT_PO_FOR_BS = "/bs/ProductOrderMPV/rejectPOforBS";

        public static final String ACTION_GET_LIST_SHOP_BY_CODES = "/bs/Category/getListShopByCodes";

        public static final String ACTION_GET_SHOP_BY_CODE = "/bs/Category/getShopByCode";

        public static final String ACTION_GET_LIST_SHOP_FROM_TEMPLATE = "/bs/Category/getListShopFromTemplate";

        public static final String ACTION_GET_LIST_GOOD_FOR_MULTI = "/bs/Category/getListGoodForMulti";

        public static final String ACTION_ADD_MULTI_SHOP_GOOD = "/bs/Category/addMultiShopGood";

        public static final String ACTION_GET_LIST_REQUEST_TRANSFER_OF_OWNERSHIP_VIEW = "/bs/Custome/actionSearchRequesTranferOfOwnership";

        public static final String ACTION_CUSTOMER_TRANSFER_OF_OWNERSHIP_PREPAID = "/bs/Custome/transferOfOwnershipPrepaid";

        public static final String ACTION_SEARCH_PREPAID_BY_MDN = "/bs/Custome/onSearchPreByMDN";

        public static final String ACTION_GET_STOCK_TREE = "/bs/StockView/getStocksTree";

        public static final String ACTION_GET_STAFF_RESOUCE_CODE = "/bs/StockView/getStaffResouceCode";

        public static final String ACTION_GET_LIST_RESOUCE_CODE = "/bs/StockView/getListResourceCode";

        public static final String ACTION_GET_LIST_INTERNAL_STOCK = "/bs/StockView/getListInternalStock";

        public static final String ACTION_GET_LIST_STATE = "/bs/StockView/getListState";

        public static final String ACTION_GET_LIST_GOOD_GROUP = "/bs/StockView/getListGoodGroup";

        public static final String ACTION_GET_GOODS_IN_STOCK = "/bs/StockView/searchGoodsInStock";

        public static final String ACTION_GET_GOODS_IN_STOCK_AND_STAFF = "/bs/StockView/searchGoodsInStockAndStaff";

        public static final String ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK = "/bs/StockView/searchCountDetailGoodInStock";

        public static final String ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF = "/bs/StockView/searchCountDetailGoodInStockAndStaff";

        public static final String ACTION_GET_STOCK_SERIAL_SINGLE = "/bs/StockView/searchStockSingleSerial";

        public static final String ACTION_GET_STOCK_SERIAL_STRIP = "/bs/StockView/searchStockStripSerial";

        public static final String ACTION_CUSTOMER_GET_IMG_CHANGESERVICE = "/bs/Custome/getImgChangeService";

        // Action Report
        public static final String ACTION_REPORT_GET_BRANDEDSHOP_LIST = "/bs/report/getListBrandedShop";

        public static final String ACTION_REPORTENGINE_EXTRACTREPORT = "/bs/reportEngine/extractReport";

        public static final String ACTION_REPORTENGINE_CREATEREPORT = "/bs/reportEngine/createReport";

        public static final String ACTION_REPORT_GET_STAFF_LIST = "/bs/report/getListStaff";

        public static final String ACTION_EXPORT_FILE = "/bs/report/exportFile";

        public static final String ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE = "/bs/reportSearchInfomationShopAndStaff/exportFile";

        public static final String ACTION_EXPORT_VIEW_DELIVER_ORDER_FILE = "/bs/reportViewDeliverOrder/exportFile";

        public static final String ACTION_EXPORT_INPUT_STOCK_FILE = "/bs/reportInputStock/exportFile";

        public static final String ACTION_EXPORT_INPUT_STOCK_STAFF_FILE = "/bs/reportInputStockStaff/exportFile";

        public static final String ACTION_EXPORT_STOCK_FILE = "/bs/reportStock/exportFile";

        public static final String ACTION_EXPORT_PREPAID = "/bs/reportPrepaid/exportFile";

        public static final String ACTION_EXPORT_NEW_REGISTER = "/bs/reportNewRegister/exportFile";

        public static final String ACTION_EXPORT_INFO_CHANGE = "/bs/reportInfoChange/exportFile";

        public static final String ACTION_EXPORT_PREPAID_STAFF = "/bs/reportPrepaidStaff/exportFile";

        public static final String ACTION_EXPORT_PREPAID_DETAIL = "/bs/reportPrepaidDetail/exportFile";

        public static final String ACTION_EXPORT_PREPAID_REQUEST = "/bs/reportPrepaidRequest/exportFile";

        public static final String ACTION_EXPORT_CHANGE_SCRATCH_CARD = "/bs/reportChangeScratchCard/exportFile";

        public static final String ACTION_EXPORT_CHANGE_CARD_PHYSICAL = "/bs/reportChangeCardPhysical/exportFile";

        public static final String ACTION_EXPORT_CHANGE_CUST_INFO = "/bs/reportChangeCustInfor/exportFile";

        public static final String ACTION_EXPORT_LOGIN = "/bs/reportLogin/exportFile";

        public static final String ACTION_EXPORT_PORT_IN_MNP = "/bs/reportPortInMNP/exportFile";

        public static final String ACTION_EXPORT_PORT_OUT_MNP = "/bs/reportPortOutMNP/exportFile";

        public static final String ACTION_EXPORT_REVERSAL_MNP = "/bs/reportReversalMNP/exportFile";

        public static final String ACTION_EXPORT_RETURN_MNP = "/bs/reportReturnMNP/exportFile";

        public static final String ACTION_EXPORT_COMMITMENT_MNP = "/bs/reportCommitmentMNP/exportFile";

        public static final String ACTION_EXPORT_COMMITMENT_DETAIL_MNP = "/bs/reportCommitmentDetailMNP/exportFile";

        public static final String ACTION_EXPORT_EFORM = "/bs/report/exportEForm";

        public static final String ACTION_EXPORT_EFORM_PREPAID = "/bs/reportPrepaid/exportEForm";

        public static final String ACTION_REPORT_GET_REQUEST_SERVICE_LIST = "/bs/report/getListChangeServiceRequest";

        public static final String ACTION_EXPORT_HISTORY_STK = "/bs/report/exportFileHistorySTK";

        public static final String ACTION_EXPORT_TRANSFERS_AUMONT = "/bs/report/reportTransfersAumont";

        public static final String ACTION_EXPORT_HISTORY_STK_1 = "/bs/report/exportFileHistorySTK1";

        public static final String ACTION_EXPORT_HISTORY_STK_2 = "/bs/report/exportFileHistorySTKByUser";

        public static final String ACTION_EXPORT_AIRTIME_ADJUSTMENT = "/bs/report/exportFileAirtimeAdjustment";

        public static final String ACTION_EXPORT_TRANSFERS = "/bs/report/reportTransfers";

        public static final String ACTION_EXPORT_REPORT_AIRTIME = "/bs/report/exportReportAirTime";

        public static final String ACTION_REPORT_GET_AGENT_NAME = "/bs/report/getAgentName";

        public static final String ACTION_REPORT_GET_AGENT_NAME2 = "/bs/report/getAgentName2";

        public static final String ACTION_REPORT_GET_DDK = "/bs/report/getDDK";

        public static final String ACTION_REPORT_GET_TOTAL = "/bs/report/getTotal";

        public static final String ACTION_REPORT_GET_LIST_RECORD = "/bs/report/getListRecord";

        public static final String ACTION_REPORT_CHECK_MSISDN = "/bs/report/checkMsisdn";

        public static final String ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT = "/bs/reportCcommissiondevelopment/exportFile";
        public static final String ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT_GETNAMESHOP = "/bs/report/getnameshop";
        // Action Invoice
        public static final String ACTION_GET_EXPRIED_BILL_INVOICE_BY_STATUS = "/bs/invoice/getExpriedBillInvoice";

        public static final String ACTION_GET_EXPRIED_BILL_C_INVOICE_BY_STATUS = "/bs/invoice/getExpriedBillCInvoice";

        public static final String ACTION_GET_REPRINT_BILL_C_INVOICE_BY_STATUS = "/bs/invoice/getReprintedBillCInvoice";

        public static final String ACTION_DESTROY_EXPRIED_BILL_C_INVOICES = "/bs/invoice/destroyExpriedBillCInvoiceS";

        public static final String ACTION_APPROVE_BILL_C_INVOICES = "/bs/invoice/approveBillCInvoice";

        public static final String ACTION_CREATE_BILL_C_INVOICES = "/bs/invoice/createBillCInvoice";

        public static final String ACTION_REJECT_BILL_C_INVOICES = "/bs/invoice/rejectBillCInvoice";

        public static final String ACTION_GET_REPLACE_BILL_C_INVOICES = "/bs/invoice/getReplaceBillCInvoice";

        public static final String ACTION_GET_PANEL_SHOP_LIST = "/bs/invoice/getPanelShopList";

        public static final String ACTION_GET_PANEL_STAFF_LIST = "/bs/invoice/getPanelStaffList";

        public static final String ACTION_REPLACE_BILL_C_INVOICE = "/bs/invoice/replaceBillCInvoice";

        public static final String ACTION_GET_BILL_TRANSACTION_INVOICE = "/bs/invoice/getBillTransactionInvoice";

        public static final String ACTION_GET_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/getBillTransactionCInvoice";

        public static final String ACTION_PRINT_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/printBillTransactionCInvoice";

        public static final String ACTION_PRINT_BILL_TRANSACTION_C_INVOICE_CHANGE = "/bs/invoice/printBillTransactionCInvoiceChange";

        public static final String ACTION_DESTROY_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/destroyBillTransactionCInvoice";

        public static final String ACTION_CREATE_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/createBillTransactionCInvoice";

        public static final String ACTION_GET_REPLACE_HEADER_C_INVOICES = "/bs/invoice/getReplaceHeaderCInvoice";

        public static final String ACTION_REPLACE_HEADER_C_INVOICE = "/bs/invoice/replaceHeaderCInvoice";

        // Form WithdrawalOfOrders

        public static final String ACTION_GET_ALL_LIST_STOCK_EXPORT = "/bs/Stock/getAllListStockExport";

        public static final String ACTION_GET_GOODS_ON_STOCK = "/bs/Stock/getGoodsOnStock";

        public static final String ACTION_GET_GOODS_DETAIL_ON_STOCK = "/bs/Stock/getGoodsDetailOnStock";

        public static final String ACTION_WITHDRAWAL_OF_ORDERS = "/bs/Stock/withdrawalOfOrders";
        // END

        // Form stockOutputInferior
        public static final String ACTION_GET_ALL_CHILD_STAFF = "/bs/StaffStockView/getAllStaff";
        public static final String ACTION_GET_LIST_INTERNAL_STOCK_STAFF = "/bs/StaffStockView/getListInternalStock";
        public static final String ACTION_SEARH_ALL_GOODS = "/bs/StaffStockView/searhAllGoods";
        public static final String ACTION_GET_GOOD_DETAIL = "/bs/StaffStockView/getGoodDetail";
        public static final String ACTION_SEARH_GOODS_ON_STOCK = "/bs/StaffStockView/searhGoodsOnStock";
        public static final String ACTION_SEARH_GOODS_ON_STOCK_TAB52 = "/bs/StaffStockView/searhGoodsOnStockTab52";

        // StockExportForStaff
        public static final String ACTION_EXPORT_FOR_STAFF = "/bs/StockExportForStaff/ExportForStaff";
        public static final String ACTION_EXPORT_NON_HIERARCHICAL = "/bs/StockExportForStaff/ExportNonHierarchical";
        public static final String ACTION_APP_PUR_ORDER_FOR_BS = "/bs/StockExportForStaff/AppPurOrderForBS";

        // BEGIN PRODUCT ORDER URL

        public static final String ACTION_PRODUCT_ORDER_ADD_MANUAL = "/bs/ProductOrder/addManual";

        public static final String ACTION_PRODUCT_ORDER_INIT = "/bs/ProductOrder/init";

        public static final String ACTION_PRODUCT_ORDER_GET_BANK = "/bs/ProductOrder/getBank";

        public static final String ACTION_PRODUCT_ORDER_GET_ALL_BANK = "/bs/ProductOrder/getAllBank";

        public static final String ACTION_PRODUCT_ORDER_GET_ERP_GOODS = "/bs/ProductOrder/getERPGoods";

        public static final String ACTION_PRODUCT_ORDER_GET_BS_GOODS = "/bs/ProductOrder/getBSGoods";

        public static final String ACTION_PRODUCT_ORDER_ADD_GOOD_PRICE = "/bs/ProductOrder/addGoodPrice";

        public static final String ACTION_PRODUCT_ORDER_SAVE_GOOD_PRICE = "/bs/ProductOrder/saveGoodPrice";

        public static final String ACTION_PRODUCT_ORDER_DEL_GOOD_PRICE = "/bs/ProductOrder/delGoodPrice";

        public static final String ACTION_PRODUCT_ORDER_GET_GOOD_PRICE = "/bs/ProductOrder/getGoodPrice";

        public static final String ACTION_PRODUCT_ORDER_GET_DISCOUNT = "/bs/ProductOrder/getDiscount";

        public static final String ACTION_PRODUCT_ORDER_ADD = "/bs/ProductOrder/add";

        public static final String ACTION_PRODUCT_ORDER_SAVE = "/bs/ProductOrder/save";

        public static final String ACTION_PRODUCT_ORDER_UPDATE = "/bs/ProductOrder/update";

        public static final String ACTION_PRODUCT_ORDER_UPDATE_FROM_VIEW = "/bs/ProductOrder/updateFromView";

        public static final String ACTION_PRODUCT_ORDER_GET_ALL_PO = "/bs/ProductOrder/getAllPO";

        public static final String ACTION_PRODUCT_ORDER_GET_REJECT_REASON = "/bs/ProductOrder/getRejectReason";

        public static final String ACTION_PRODUCT_ORDER_UPLOAD = "/bs/ProductOrder/upload";

        public static final String ACTION_PRODUCT_ORDER_GET_PO = "/bs/ProductOrder/getPO";

        public static final String ACTION_PRODUCT_ORDER_GET_PO_APPROVE = "/bs/ProductOrder/getPOApprove";

        public static final String ACTION_PRODUCT_ORDER_LOAD_PROVINCE = "/bs/ProductOrder/loadProvince";

        public static final String ACTION_PRODUCT_ORDER_LOAD_SA_PROVINCE = "/bs/ProductOrder/getSAProvince";

        public static final String ACTION_PRODUCT_ORDER_DEL_SA_PROVINCE = "/bs/ProductOrder/delSAProvince";

        public static final String ACTION_PRODUCT_ORDER_DEL_ALL_SA_PROVINCE = "/bs/ProductOrder/delAllSAProvince";

        public static final String ACTION_PRODUCT_ORDER_ADD_SA_PROVINCE = "/bs/ProductOrder/addSAProvince";

        public static final String ACTION_PRODUCT_ORDER_GET_ALL_GOOD = "/bs/ProductOrder/getAllGoods";

        public static final String ACTION_PRODUCT_ADD_GOODS_DISCOUNT = "/bs/ProductOrder/addGoodDiscount";

        public static final String ACTION_PRODUCT_SAVE_GOOD_DISCOUNT = "/bs/ProductOrder/saveGoodDiscount";

        public static final String ACTION_PRODUCT_ORDER_GET_GOOD_DISCOUNT = "/bs/ProductOrder/getGoodDiscount";

        public static final String ACTION_PRODUCT_ORDER_GET_DISCOUNT_INFO = "/bs/ProductOrder/getDiscountInfo";

        public static final String ACTION_PRODUCT_ORDER_DEL_GOOD_DISCOUNT = "/bs/ProductOrder/delGoodDiscount";

        public static final String ACTION_PRODUCT_ORDER_DEL_PO_BY_ID = "/bs/ProductOrder/getPObyID";

        public static final String ACTION_PRODUCT_ORDER_APPROVE = "/bs/ProductOrder/aprrove";

        public static final String ACTION_PRODUCT_ORDER_APPROVE_BS = "/bs/ProductOrderForBs/aprrove";

        public static final String ACTION_PRODUCT_ORDER_GET_DO = "/bs/ProductOrder/getDO";

        public static final String ACTION_PRODUCT_ORDER_REJECT = "/bs/ProductOrder/reject";

        public static final String ACTION_PRODUCT_ORDER_CONFIRM_RECEIVE_RED_SHIP = "/bs/ProductOrder/confirmreceiveredship";

        public static final String ACTION_PRODUCT_ORDER_RETURN_SHIP_MENT_TO_CENTRE = "/bs/ProductOrder/returnShipmentToCentre";

        public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_PDF = "/bs/downloadPDF";

        public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_VIEW_IMG = "/bs/downloadViewIMG";

        public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_APPROVE_IMG = "/bs/downloadApproveIMG";

        public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_BS_IMG = "/bs/downloadBSIMG";

        public static final String ACTION_PRODUCT_ORDER_EXPORT = "/bs/ProductOrder/export";

        public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_EXCEL = "/bs/downloadExcel";

        public static final String ACTION_SEND_OTP = "/bs/sendOTP";

        public static final String ACTION_VALIDATE_OTP = "/bs/validateOTP";

        public static final String ACTION_C_INVOICE_SEARCH_TRANSACTION = "/bs/CInvoice/actionCInvoiceSearchTransaction";
        public static final String ACTION_C_INVOICE_SEARCH_TRANSACTION_BY_ID = "/bs/CInvoice/actionCInvoiceSearchTransactionById";

        public static final String ACTION_C_INVOICE_GET_LIST_SHOP = "/bs/CInvoice/actionGetListShop";

        public static final String ACTION_C_INVOICE_GET_LIST_STAFF = "/bs/CInvoice/actionGetListStaff";

        public static final String ACTION_C_INVOICE_GET_LIST_PAY_METHOD = "/bs/CInvoice/actionGetListPayMethod";

        public static final String ACTION_C_INVOICE_GET_LIST_TRANSACTION = "/bs/CInvoice/actionGetListTransaction";

        public static final String ACTION_C_INVOICE_GET_LIST_INVOICE_STATUS = "/bs/CInvoice/actionGetListInvoiceStatus";

        public static final String ACTION_CREATE_C_INVOICE = "/bs/CInvoice/actionCreateCInvoice";

        public static final String ACTION_PRINT_INVOICE = "/bs/CInvoice/actionPrintInvoice";

        public static final String ACTION_PRINT_INVOICE_CD = "/bs/CInvoice/actionPrintInvoiceCD";

        public static final String ACTION_C_INVOICE_GET_LIST_GOODS = "/bs/CInvoice/actionGetListGoods";

        public static final String ACTION_C_INVOICE_GET_LIST_GOOD_DETAIL = "/bs/CInvoice/actionGetListGoodDetail";

        public static final String ACTION_C_INVOICE_GET_TY_GIA = "/bs/CInvoice/actionGetTyGia";
        // END PRODUCT ORDER URL

        public static final String ACTION_TRANSSHOPNONHIE_SEARHALLGOODS = "/bs/TransShopNonHie/searhAllGoods";

        public static final String ACTION_TRANSSHOPNONHIE_SEARHGOODSONSTOCK = "/bs/TransShopNonHie/searhGoodsOnStock";

        public static final String ACTION_TRANSSHOPNONHIE_SEARHGOODSONSTOCKTAB52 = "/bs/TransShopNonHie/searhGoodsOnStockTab52";

        public static final String ACTION_TRANSSHOPNONHIE_GETALLSTAFF = "/bs/TransShopNonHie/getAllStaff";

        public static final String ACTION_TRANSSHOPNONHIE_GETLISTINTERNALSTOCK = "/bs/TransShopNonHie/getListInternalStock";

        public static final String ACTION_TRANSSHOPNONHIE_GETGOODDETAIL = "/bs/TransShopNonHie/getGoodDetail";

        public static final String ACCOUNT_MANAGEMENT_LOAD_REASON = "/bs/accountManagement/getReason";
        public static final String ACCOUNT_MANAGEMENT_EXECUTE_CHANGE_ACCOUNT = "/bs/accountManagement/executeChangeAccount";
        public static final String ACCOUNT_MANAGEMENT_TRANSFER_MONEY = "/bs/accountManagement/transferMoney";
        // begin url transfer cash vnm
        public static final String ACTION_SEARCH_LIST_CASH_TRANSFER_VNM = "/bs/CashTransferVnm/listCashTransfer";

        public static final String ACTION_LIST_CENTER = "/bs/CashTransferVnm/listCenter";

        public static final String ACTION_GET_AGENCY_INFO = "/bs/CashTransferVnm/getAgencyInfo";

        public static final String ACTION_CREATE_CASH_TRANSFER = "/bs/CashTransferVnm/createCashTransfer";

        public static final String ACTION_APPROVE_CASH_TRANSFER = "/bs/CashTransferVnm/approveCashTransfer";

        public static final String ACTION_REJECT_CASH_TRANSFER = "/bs/CashTransferVnm/rejectCashTransfer";

        // end url transfer cash vnm

        public static final String ACTION_LIST_AGENT_FROM_TEMPLATE = "/bs/UploadAgencyByBatch/getListAgencyFromfile";

        public static final String ACTION_UPLOAD_AGENT_BY_BATCH = "/bs/UploadAgencyByBatch/createUploadByBatch";

        public static final String ACTION_COMMISSION_STATUS_GET_LIST = "/bs/StatusCommission/getListCommission";

        public static final String ACTION_REGISTER_CHILD = "/bs/Custome/registerCustomerChild";
        public static final String ACTION_PREPAID_LIST_MANAGEMENT_SEARCH = "/bs/PrepaidListManagement/search";

        // forminvoiceapprove start
        public static final String CINVOICE_FORMINVOICEAPPROVE_INITDATA = "/bs/FormInvoiceApprove/initData";
        public static final String CINVOICE_FORMINVOICEAPPROVE_SEARCH = "/bs/FormInvoiceApprove/search";
        public static final String CINVOICE_FORMINVOICEAPPROVE_CANCEL = "/bs/FormInvoiceApprove/cancelInvoice";
        public static final String CINVOICE_FORMINVOICEAPPROVE_APPROVE = "/bs/FormInvoiceApprove/approveInvoice";
        public static final String CINVOICE_FORMINVOICEAPPROVE_PRINT = "/bs/FormInvoiceApprove/printCinvoice";
        public static final String CINVOICE_FORMINVOICEAPPROVE_GETUSER = "/bs/FormInvoiceApprove/getuser";
        // forminvoiceapprove end
        // form trbill hoadon cuoc start
        public static final String CINVOICE_FORMTRBILL_SEARCH = "/bs/FormTrBill/search";
        public static final String CINVOICE_FORMTRBILL_PAYMENT = "/bs/FormTrBill/payment";
        public static final String CINVOICE_FORMTRBILL_PAYMENT1 = "/bs/FormTrBill/payment1";
        public static final String CINVOICE_FORMTRBILL_CREATECINVOICE = "/bs/FormTrBill/createCinvoice";
        public static final String CINVOICE_FORMTRBILL_PRINT = "/bs/FormTrBill/print";

        public static final String CINVOICE_FORMTRBILL_DEPOSIT = "/bs/FormTrBill/deposit";
        public static final String CINVOICE_FORMTRBILL_DEPOSIT_PRINT_INVOICE = "/bs/FormTrBill/printDepositInvoice";
        public static final String CINVOICE_FORMTRBILL_REFUND = "/bs/FormTrBill/refund";
        public static final String CINVOICE_FORMTRBILL_CHECK_EXIST_IVOICE = "/bs/FormTrBill/checkExistInvoie";
        public static final String CINVOICE_FORMTRBILL_REFUND_CHECK_BALANCE = "/bs/FormTrBill/refundCheckBalance";
        public static final String CINVOICE_FORMTRBILL_CHECK_DEALER_CREDIT = "/bs/FormTrBill/checkDealerCredit";
        public static final String CINVOICE_FORMTRBILL_UPDATE_PAYMENT = "/bs/FormTrBill/updatePatment";
        public static final String CINVOICE_FORMTRBILL_GET_PAYMENT_METHOD = "/bs/FormTrBill/getPaymentMethod";
        public static final String TYPE_AP_DOMAIN_TR_BILL = "12";
        // form trbill hoadon cuoc end

        public static final String CINVOICE_ADUSTMENT_INITDATA = "/bs/CInvoiceAdustment/initData";

        public static final String CINVOICE_ADUSTMENT_SEARCH = "/bs/CInvoiceAdustment/search";

        public static final String CINVOICE_ADUSTMENT_UPDATE_BILL_INVOICE = "/bs/CInvoiceAdustment/updateBillAdjust";

        // print invoice by batch
        public static final String CINVOICE_PRINT_BY_BATCH_ROOT = "/bs/cinvoice/printByBatch";
        public static final String CINVOICE_SUB_PRINT_BY_BATCH_SEARCH = "/bs/search";
        public static final String CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_CINVOICE = "/bs/print";
        public static final String CINVOICE_SUB_PRINT_BY_BATCH_GET_LIST_ACCOUNT_FROM_FILE = "/bs/getListAccountFromFile";
        public static final String CINVOICE_PRINT_BY_BATCH_NEW_ROOT = "/bs/cinvoiceNew/printByBatchNew";
        public static final String CINVOICE_SUB_PRINT_BY_BATCHEW_NEW_SEARCH = "/bs/searchNew";
        public static final String CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_NEW_CINVOICE = "/bs/printNew";
        public static final String CINVOICE_SUB_PRINT_BY_BATCH_ONCREATE_CINVOICE = "/bs/create";

        public static final String ACTION_CUSTOMER_SEARCH_BUNDLE = "/bs/Customer/search_bundle";

        public static final String ACTION_CUSTOMER_GET_IMG_BUNDLE = "/bs/Customer/get_img_bundle";

        // postpaid
        public static final String POSTPAID_GET_LIST_GL_CODE = "/bs/postpaid/getListGLCode";

        public static final String POSTPAID_GET_LIST_TYPE_CUST = "/bs/postpaid/getListPostpaidTypeCustomer";

        public static final String POSTPAID_GET_LIST_SERVICE_TYPE = "/bs/postpaid/getListPostpaidServiceType";

        public static final String POSTPAID_GET_LIST_PERSON_TYPE = "/bs/postpaid/getListPostpaidPersonType";

        public static final String POSTPAID_GET_LIST_CUST_SEG = "/bs/postpaid/getListPostpaidCustomerSeg";

        public static final String POSTPAID_GET_LIST_PROVINCE = "/bs/postpaid/getListProvince";

        public static final String POSTPAID_GET_LIST_DISTRICT = "/bs/postpaid/getListDistrict";

        public static final String POSTPAID_SEARCH_PERSON_PARENT = "/bs/postpaid/searchPersonPostpaidParent";

        public static final String POSTPAID_ADD_NEW_PERSON_PARENT = "/bs/postpaid/addNewPersonPostpaidParent";

        public static final String POSTPAID_UPDATE_PERSON_PARENT = "/bs/postpaid/updatePersonPostpaidParent";

        public static final String POSTPAID_ADD_NEW_PERSON_CHILD = "/bs/postpaid/addNewPersonPostpaidChild";

        public static final String POSTPAID_UPDATE_PERSON_CHILD = "/bs/postpaid/updatePersonPostpaidChild";

        public static final String POSTPAID_GET_LIST_REASON_CHANGE_SIM_POSTPAID = "/bs/postpaid/getListResonChangeSimPostpaid";

        public static final String POSTPAID_ACTION_CHANGE_SIM_POSTPAID = "/bs/postpaid/actionChangeSimPostpaid";

        public static final String POSTPAID_SEARCH_HISTORY = "/bs/postpaid/searchParentHistory";

        public static final String POSTPAID_PERSON_SEARCH = "/bs/postpaidpersonsearch/searchpostpaidperson";

        public static final String POSTPAID_SEARCH_PERSON_PARENT_BY_IDNUM_OR_TAXCODE = "/bs/postpaid/searchPostpaidPersonByTaxCodeOrIDNum";

        public static final String POSTPAID_SEARCH_PERSON_PARENT_BY_ACCOUNT_NO = "/bs/postpaid/searchPostpaidPersonByAccountNo";

        public static final String POSTPAID_SEARCH_PARENT = "/bs/postpaid/searchParent";
        public static final String POSTPAID_PERSON_DETAIL = "/bs/postpaid/postpaidPersonDetail";

        public static final String PRETUPS_SEARCH_AGENT_BY_MSISDN = "/bs/pretups/getAgentByIsdn";

        public static final String PRETUPS_GET_AGENT_PROVINCE = "/bs/pretups/getAgentProvince";

        public static final String PRETUPS_GET_AGENT_CENTRE = "/bs/pretups/getAgentCentre";

        public static final String PRETUPS_GET_AGENT_TYPE = "/bs/pretups/getAgentType";

        public static final String PRETUPS_GET_AGENT_LEVEL = "/bs/pretups/getAgentLevel";

        public static final String PRETUPS_GET_AGENT_DISTRICT = "/bs/pretups/getAgentDistrict";

        public static final String PRETUPS_GET_AGENT_COMMUNE = "/bs/pretups/getAgentCommune";

        public static final String PRETUPS_ADD_NEW_AGENT = "/bs/pretups/actionAddNewAgent";

        public static final String PRETUPS_UPDATE_AGENT = "/bs/pretups/actionUpdateAgent";

        public static final String PRETUPS_DELETE_AGENT = "/bs/pretups/actionDeleteAgent";

        public static final String PRETUPS_SEARCH_ACCOUNT = "/bs/pretups/searchAccount";
    }

    public static final String ACTION_CUSTOMER_REGISTER = "/bs/Custome/registerCustomer";

    public static final String ACTION_CUSTOMER_MODIFY = "/bs/Custome/modifyCustomer";

    public static final String ACTION_CUSTOMER_MODIFY_CHECK_UPDATE = "/bs/Custome/modifyCustomer/checkUpdate";

    public static final String ACTION_CUSTOMER_UPLOAD_IMAGE = "/bs/Custome/uploadImage";

    public static final String ACTION_CUSTOMER_UPLOAD_IMAGE_BATCH = "/bs/Custome/uploadImageBatch";

    public static final String ACTION_CUSTOMER_GET_CUS_SUB = "/bs/Custome/getCusSub";

    public static final String ACTION_CUSTOMER_CHECK_QUERY = "/bs/Custome/checkQuery"; // DatBD2

    public static final String ACTION_CUSTOMER_GET_SIM_KIT = "/bs/Custome/getSIMKit";

    public static final String ACTION_CUSTOMER_SEARCH = "/bs/Custome/search";

    public static final String ACTION_CUSTOMER_LIST_CUSTOMER_TYPE = "/bs/Custome/listCustomerType";

    public static final String ACTION_CUSTOMER_LIST_PROVINCE = "/bs/Custome/listProvince";

    public static final String ACTION_CUSTOMER_LIST_DISTRICT = "/bs/Custome/listDistrict";

    public static final String ACTION_CUSTOMER_LIST_GET_PROVINCE_ID = "/bs/Custome/getProvinceId";

    public static final String ACTION_CUSTOMER_LIST_GET_DISTRICT_ID = "/bs/Custome/getDistrictId";

    public static final String ACTION_CUSTOMER_LIST_COUNTRY = "/bs/Custome/listCountry";

    public static final String ACTION_CUSTOMER_LIST_SERVICE_CHANGE = "/bs/Custome/listTypeOfServiceChange";

    public static final String ACTION_GET_STAFF_LIST = "/bs/Custome/listStaff";

    public static final String ACTION_GET_LIST_REQUEST_CHANGESIM_VIEW = "/bs/Custome/actionSearchRequestChangeServiceForView";

    public static final String ACTION_SEARCH_REQUEST_SERVICE_CHANGE = "/bs/Custome/searchRequestChangeService";

    public static final String ACTION_CUSTOMER_LIST_COS_NEW = "/bs/Custome/listCOSNew";

    public static final String ACTION_CUSTOMER_LIST_COS_MAP_NEW = "/bs/Custome/listCOSMapNew";

    public static final String ACTION_CUSTOMER_LIST_COS_KIT = "/bs/Custome/getCOSKit";

    public static final String ACTION_CUSTOMER_ADD_NEW_CONNECT = "/bs/Custome/addNewConnect";

    public static final String ACTION_CUSTOMER_SERCH_HIST = "/bs/Custome/searchHist";

    public static final String ACTION_CUSTOMER_LIST_SUB = "/bs/Custome/listsubscriber";

    public static final String ACTION_CUSTOMER_ADD_BATCH = "/bs/Custome/addCusBatch";

    public static final String ACTION_CUSTOMER_LIST_REASON = "/bs/Custome/getListReasonChangeSIM";

    public static final String ACTION_LIST_PROVINCE_SHOP = "/bs/Custome/getListProvinceShop";

    public static final String ACTION_UPDATE_PROVINCE_BS = "/bs/Custome/updateProvinceForBrandedShop";

    public static final String ACTION_LIST_SHOP_BY_PROVINCE_AND_SHOP = "/bs/Custome/getListShopByProvinceAndShop";

    public static final String ACTION_LIST_PROVINCE_SHOP_TEMPLATE = "/bs/Custome/getListProvinceFromTemplate";

    public static final String ACTION_LIST_SERIAL_CREATE_AIRTIME = "/bs/Custome/getListSerialTemplateAirtime";

    public static final String ACTION_CUSTOMER_CHANGE_SIM = "/bs/Custome/changeSIM";

    public static final String ACTION_CUSTOMER_CHANGE_SOVE = "/bs/Custome/changeSove";

    public static final String ACTION_REGISTER_BS = "/bs/Custome/registerBS";

    public static final String ACTION_CONNEC_SUB_BS = "/bs/Custome/connecterSubBS";

    public static final String ACTION_SUBSCRIBER_GET_INFO_UPDATE_PREPAID = "/bs/Custome/getSubInfoUpdatePrepaid";

    public static final String ACTION_SUBSCRIBER_GET_INFO_CHANGESIM_PREPAID = "/bs/Custome/getSubInfoChangeSIMPrepaid";

    public static final String ACTION_VERIFY_NUMBER_SPECIAL = "/bs/Custome/verifyNumberSpecial";

    public static final String ACTION_VERIFY_ID_CARD = "/bs/Custome/verifyIDCard";

    public static final String ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS = "/bs/Custome/verifySubscriberHistory";

    public static final String ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS_WITH_1_NUMBER = "/bs/Custome/verifySubscriberHistoryWith1Number";

    public static final String ACTION_VERIFY_SUBSCRIBER_HISTORY_CHANGE_SIM = "/bs/Custome/verifySubscriberHistoryChangeSim";

    public static final String ACTION_UPDATE_PREPAID_CUSTOMER = "/bs/Custome/updatePrepaidCustomer";

    public static final String ACTION_CREATE_NEW_SECRET_NUMBER = "/bs/Custome/createNewSecretNumber";

    public static final String ACTION_CUSTOMER_CHANGE_SIM_PREPAID = "/bs/Custome/changeSIMPrepaid";

    public static final String ACTION_APPROVE_REQUEST_CHANGE_SERVICE = "/bs/Custome/actionApproveRequestChangeService";

    public static final String ACTION_REJECT_REQUEST_CHANGE_SERVICE = "/bs/Custome/actionRejectRequestChangeService";

    public static final String ACTION_REVIEW_REQUEST_CHANGE_SERVICE = "/bs/Custome/actionReviewRequestChangeService";

    public static final String ACTION_GET_SHOP_BY_SHOP_CODE = "/bs/Custome/getShopByShopCode";

    public static final String ACTION_GET_FRIEND_SHOP_LIST = "/bs/Custome/getFriendShopList";

    public static final String ACTION_GET_NOT_FRIEND_SHOP_LIST = "/bs/Custome/getNotFriendShopList";

    public static final String ACTION_GET_NOT_FRIEND_SHOP_LIST_RECEIVED = "/bs/Custome/getNotFriendShopListReceived";

    public static final String ACTION_GET_DEFAULT_FRIEND_SHOP_LIST = "/bs/Custome/getDefaultFriendShopList";

    public static final String ACTION_GET_DEFAULT_FRIEND_SHOP_LIST_RECEIVED = "/bs/Custome/getDefaultFriendShopListRecieved";

    public static final String ACTION_INSERT_FRIEND_SHOP = "/bs/Custome/insertFriendShop";

    public static final String ACTION_INSERT_BATCH_FRIEND_SHOP = "/bs/Custome/insertBatchFriendShop";

    public static final String ACTION_UPDATE_BATCH_FRIEND_SHOP = "/bs/Custome/updateBatchFriendShop";

    public static final String ACTION_GET_GOODS_LIST_BY_SHOP = "/bs/Custome/getGoodsListByShop";

    public static final String ACTION_ADD_GOODS_LIST_TO_SHOP = "/bs/Custome/addGoodsListToShop";

    public static final String ACTION_GET_CHANGE_RANGGEDCARD_ID = "/bs/Custome/getChangeRaggedCardId";

    public static final String ACTION_CREATE_CHANGE_SCATCH_CARD_AIRTIME_NEW = "/bs/Custome/createRequestChangeCardAirtimeNew";

    public static final String ACTION_UPLOAD_FILE_IMAGE_SCATCH_CARD = "/bs/Custome/uploadFileImageScatchCard";

    public static final String ACTION_GET_STK_NUMBER = "/bs/Custome/getSTKnumber";

    public static final String ACTION_INSERT_PHYSICALCARD = "/bs/Custome/insertPhysicalCard";

    public static final String ACTION_LIST_CHANGE_CARD_TEMPLATE = "/bs/Custome/getListChangeCardFromTemplate";

    public static final String ACTION_SEARCH_REQUEST_CHANGE_CARD = "/bs/Custome/searchRequestChangeCard";

    public static final String ACTION_ACCEPT_REQUEST_CHANGE_CARD = "/bs/Custome/acceptRequestChangeCard";

    public static final String ACTION_GET_STAFF = "/bs/Custome/getStaff";

    public static final String ACTION_GET_REQUEST_CHANGE_CARD_AIRTIME_DETAIL = "/bs/Custome/getRequestChangeCardAirtimeDetail";

    public static final String ACTION_REJECT_REQUEST_CHANGE_CARD_AIRTIME = "/bs/Custome/rejectChangeCardAirtime";

    public static final String ACTION_DESTROY_REQUEST_CHANGE_CARD_AIRTIME = "/bs/Custome/destroyChangeCardAirtime";

    public static final String ACTION_GET_LIST_APDOMAIN_BLOCK = "/bs/Custome/getListApDomainBlock";

    public static final String ACTION_LOCK_REQUEST_CHANGE_CARD_AIRTIME = "/bs/Custome/lockRequestAirtime";

    public static final String ACTION_LOCK_CHANGE_CARD_AIRTIME = "/bs/Custome/changeRequestAirtime";

    public static final String ACTION_CUSTOMER_GET_IMG_CHANGE_CARD = "/bs/Custome/getImgChangeCard";

    public static final String ACTION_GET_CHANGE_CARD_PHYSICAL_DETAIL = "/bs/Custome/getChangeCardPhysicalDetail";

    public static final String ACTION_REMOVE_GOODS_LIST_FROM_SHOP = "/bs/Custome/removeGoodsListFromShop";

    public static final String ACTION_GET_LIST_STOCK_EXPORT = "/bs/Stock/getListStockExport";

    public static final String ACTION_GET_LIST_REASON_BY_CODE = "/bs/Stock/getListReason";

    public static final String ACTION_GET_LIST_STATUS_BY_TYPE = "/bs/Stock/getListStatus";

    public static final String ACTION_GET_LIST_STOCK_TRANS = "/bs/Stock/getListStockTrans";

    public static final String ACTION_GET_TRANS_DETAIL = "/bs/Stock/getDetailTrans";

    public static final String ACTION_CONFIRM_STOCK_TRANS = "/bs/Stock/confirmStockTrans";

    public static final String ACTION_CHECK_FRIEND_VNM = "/bs/ProductOrder/checkFriendVnmVald";

    public static final String ACTION_ADD_PO_FOR_BS = "/bs/ProductOrderMPV/add";

    public static final String ACTION_SEARCH_PO_FOR_BS = "/bs/ProductOrderMPV/searchPOforBS";

    public static final String ACTION_SEARCH_PO_DETAIL_FOR_BS = "/bs/ProductOrderMPV/searchPODetailforBS";

    public static final String ACTION_REJECT_PO_FOR_BS = "/bs/ProductOrderMPV/rejectPOforBS";

    public static final String ACTION_GET_LIST_SHOP_BY_CODES = "/bs/Category/getListShopByCodes";

    public static final String ACTION_GET_SHOP_BY_CODE = "/bs/Category/getShopByCode";

    public static final String ACTION_GET_LIST_SHOP_FROM_TEMPLATE = "/bs/Category/getListShopFromTemplate";

    public static final String ACTION_GET_LIST_GOOD_FOR_MULTI = "/bs/Category/getListGoodForMulti";

    public static final String ACTION_ADD_MULTI_SHOP_GOOD = "/bs/Category/addMultiShopGood";

    public static final String ACTION_GET_LIST_REQUEST_TRANSFER_OF_OWNERSHIP_VIEW = "/bs/Custome/actionSearchRequesTranferOfOwnership";

    public static final String ACTION_CUSTOMER_TRANSFER_OF_OWNERSHIP_PREPAID = "/bs/Custome/transferOfOwnershipPrepaid";

    public static final String ACTION_SEARCH_PREPAID_BY_MDN = "/bs/Custome/onSearchPreByMDN";

    public static final String ACTION_GET_STOCK_TREE = "/bs/StockView/getStocksTree";

    public static final String ACTION_GET_STAFF_RESOUCE_CODE = "/bs/StockView/getStaffResouceCode";

    public static final String ACTION_GET_LIST_RESOUCE_CODE = "/bs/StockView/getListResourceCode";

    public static final String ACTION_GET_LIST_INTERNAL_STOCK = "/bs/StockView/getListInternalStock";

    public static final String ACTION_GET_LIST_STATE = "/bs/StockView/getListState";

    public static final String ACTION_GET_LIST_GOOD_GROUP = "/bs/StockView/getListGoodGroup";

    public static final String ACTION_GET_GOODS_IN_STOCK = "/bs/StockView/searchGoodsInStock";

    public static final String ACTION_GET_GOODS_IN_STOCK_AND_STAFF = "/bs/StockView/searchGoodsInStockAndStaff";

    public static final String ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK = "/bs/StockView/searchCountDetailGoodInStock";

    public static final String ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF = "/bs/StockView/searchCountDetailGoodInStockAndStaff";

    public static final String ACTION_GET_STOCK_SERIAL_SINGLE = "/bs/StockView/searchStockSingleSerial";

    public static final String ACTION_GET_STOCK_SERIAL_STRIP = "/bs/StockView/searchStockStripSerial";

    public static final String ACTION_CUSTOMER_GET_IMG_CHANGESERVICE = "/bs/Custome/getImgChangeService";

    // Action Report
    public static final String ACTION_REPORT_GET_BRANDEDSHOP_LIST = "/bs/report/getListBrandedShop";

    public static final String ACTION_REPORTENGINE_EXTRACTREPORT = "/bs/reportEngine/extractReport";

    public static final String ACTION_REPORTENGINE_CREATEREPORT = "/bs/reportEngine/createReport";

    public static final String ACTION_REPORT_GET_STAFF_LIST = "/bs/report/getListStaff";

    public static final String ACTION_EXPORT_FILE = "/bs/report/exportFile";

    public static final String ACTION_EXPORT_SEARCH_INFOMATION_SHOP_AND_STAFF_FILE = "/bs/reportSearchInfomationShopAndStaff/exportFile";

    public static final String ACTION_EXPORT_VIEW_DELIVER_ORDER_FILE = "/bs/reportViewDeliverOrder/exportFile";

    public static final String ACTION_EXPORT_INPUT_STOCK_FILE = "/bs/reportInputStock/exportFile";

    public static final String ACTION_EXPORT_INPUT_STOCK_STAFF_FILE = "/bs/reportInputStockStaff/exportFile";

    public static final String ACTION_EXPORT_STOCK_FILE = "/bs/reportStock/exportFile";

    public static final String ACTION_EXPORT_PREPAID = "/bs/reportPrepaid/exportFile";

    public static final String ACTION_EXPORT_NEW_REGISTER = "/bs/reportNewRegister/exportFile";

    public static final String ACTION_EXPORT_INFO_CHANGE = "/bs/reportInfoChange/exportFile";

    public static final String ACTION_EXPORT_PREPAID_STAFF = "/bs/reportPrepaidStaff/exportFile";

    public static final String ACTION_EXPORT_PREPAID_DETAIL = "/bs/reportPrepaidDetail/exportFile";

    public static final String ACTION_EXPORT_PREPAID_REQUEST = "/bs/reportPrepaidRequest/exportFile";

    public static final String ACTION_EXPORT_CHANGE_SCRATCH_CARD = "/bs/reportChangeScratchCard/exportFile";

    public static final String ACTION_EXPORT_CHANGE_CARD_PHYSICAL = "/bs/reportChangeCardPhysical/exportFile";

    public static final String ACTION_EXPORT_CHANGE_CUST_INFO = "/bs/reportChangeCustInfor/exportFile";

    public static final String ACTION_EXPORT_LOGIN = "/bs/reportLogin/exportFile";

    public static final String ACTION_EXPORT_PORT_IN_MNP = "/bs/reportPortInMNP/exportFile";

    public static final String ACTION_EXPORT_PORT_OUT_MNP = "/bs/reportPortOutMNP/exportFile";

    public static final String ACTION_EXPORT_REVERSAL_MNP = "/bs/reportReversalMNP/exportFile";

    public static final String ACTION_EXPORT_RETURN_MNP = "/bs/reportReturnMNP/exportFile";

    public static final String ACTION_EXPORT_COMMITMENT_MNP = "/bs/reportCommitmentMNP/exportFile";

    public static final String ACTION_EXPORT_COMMITMENT_DETAIL_MNP = "/bs/reportCommitmentDetailMNP/exportFile";

    public static final String ACTION_EXPORT_EFORM = "/bs/report/exportEForm";

    public static final String ACTION_EXPORT_EFORM_PREPAID = "/bs/reportPrepaid/exportEForm";

    public static final String ACTION_REPORT_GET_REQUEST_SERVICE_LIST = "/bs/report/getListChangeServiceRequest";

    public static final String ACTION_EXPORT_HISTORY_STK = "/bs/report/exportFileHistorySTK";

    public static final String ACTION_EXPORT_TRANSFERS_AUMONT = "/bs/report/reportTransfersAumont";

    public static final String ACTION_EXPORT_HISTORY_STK_1 = "/bs/report/exportFileHistorySTK1";

    public static final String ACTION_EXPORT_HISTORY_STK_2 = "/bs/report/exportFileHistorySTKByUser";

    public static final String ACTION_EXPORT_AIRTIME_ADJUSTMENT = "/bs/report/exportFileAirtimeAdjustment";

    public static final String ACTION_EXPORT_TRANSFERS = "/bs/report/reportTransfers";

    public static final String ACTION_EXPORT_REPORT_AIRTIME = "/bs/report/exportReportAirTime";

    public static final String ACTION_REPORT_GET_AGENT_NAME = "/bs/report/getAgentName";

    public static final String ACTION_REPORT_GET_AGENT_NAME2 = "/bs/report/getAgentName2";

    public static final String ACTION_REPORT_GET_DDK = "/bs/report/getDDK";

    public static final String ACTION_REPORT_GET_TOTAL = "/bs/report/getTotal";

    public static final String ACTION_REPORT_GET_LIST_RECORD = "/bs/report/getListRecord";

    public static final String ACTION_REPORT_CHECK_MSISDN = "/bs/report/checkMsisdn";

    public static final String ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT = "/bs/reportCcommissiondevelopment/exportFile";
    public static final String ACTION_EXPORT_COMMISSINOCT_DEVELOPMENT_GETNAMESHOP = "/bs/report/getnameshop";
    // Action Invoice
    public static final String ACTION_GET_EXPRIED_BILL_INVOICE_BY_STATUS = "/bs/invoice/getExpriedBillInvoice";

    public static final String ACTION_GET_EXPRIED_BILL_C_INVOICE_BY_STATUS = "/bs/invoice/getExpriedBillCInvoice";

    public static final String ACTION_GET_REPRINT_BILL_C_INVOICE_BY_STATUS = "/bs/invoice/getReprintedBillCInvoice";

    public static final String ACTION_DESTROY_EXPRIED_BILL_C_INVOICES = "/bs/invoice/destroyExpriedBillCInvoiceS";

    public static final String ACTION_APPROVE_BILL_C_INVOICES = "/bs/invoice/approveBillCInvoice";

    public static final String ACTION_CREATE_BILL_C_INVOICES = "/bs/invoice/createBillCInvoice";

    public static final String ACTION_REJECT_BILL_C_INVOICES = "/bs/invoice/rejectBillCInvoice";

    public static final String ACTION_GET_REPLACE_BILL_C_INVOICES = "/bs/invoice/getReplaceBillCInvoice";

    public static final String ACTION_GET_PANEL_SHOP_LIST = "/bs/invoice/getPanelShopList";

    public static final String ACTION_GET_PANEL_STAFF_LIST = "/bs/invoice/getPanelStaffList";

    public static final String ACTION_REPLACE_BILL_C_INVOICE = "/bs/invoice/replaceBillCInvoice";

    public static final String ACTION_GET_BILL_TRANSACTION_INVOICE = "/bs/invoice/getBillTransactionInvoice";

    public static final String ACTION_GET_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/getBillTransactionCInvoice";

    public static final String ACTION_PRINT_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/printBillTransactionCInvoice";

    public static final String ACTION_PRINT_BILL_TRANSACTION_C_INVOICE_CHANGE = "/bs/invoice/printBillTransactionCInvoiceChange";

    public static final String ACTION_DESTROY_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/destroyBillTransactionCInvoice";

    public static final String ACTION_CREATE_BILL_TRANSACTION_C_INVOICE = "/bs/invoice/createBillTransactionCInvoice";

    public static final String ACTION_GET_REPLACE_HEADER_C_INVOICES = "/bs/invoice/getReplaceHeaderCInvoice";

    public static final String ACTION_REPLACE_HEADER_C_INVOICE = "/bs/invoice/replaceHeaderCInvoice";

    // Form WithdrawalOfOrders

    public static final String ACTION_GET_ALL_LIST_STOCK_EXPORT = "/bs/Stock/getAllListStockExport";

    public static final String ACTION_GET_GOODS_ON_STOCK = "/bs/Stock/getGoodsOnStock";

    public static final String ACTION_GET_GOODS_DETAIL_ON_STOCK = "/bs/Stock/getGoodsDetailOnStock";

    public static final String ACTION_WITHDRAWAL_OF_ORDERS = "/bs/Stock/withdrawalOfOrders";
    // END

    // Form stockOutputInferior
    public static final String ACTION_GET_ALL_CHILD_STAFF = "/bs/StaffStockView/getAllStaff";
    public static final String ACTION_GET_LIST_INTERNAL_STOCK_STAFF = "/bs/StaffStockView/getListInternalStock";
    public static final String ACTION_SEARH_ALL_GOODS = "/bs/StaffStockView/searhAllGoods";
    public static final String ACTION_GET_GOOD_DETAIL = "/bs/StaffStockView/getGoodDetail";
    public static final String ACTION_SEARH_GOODS_ON_STOCK = "/bs/StaffStockView/searhGoodsOnStock";
    public static final String ACTION_SEARH_GOODS_ON_STOCK_TAB52 = "/bs/StaffStockView/searhGoodsOnStockTab52";

    // StockExportForStaff
    public static final String ACTION_EXPORT_FOR_STAFF = "/bs/StockExportForStaff/ExportForStaff";
    public static final String ACTION_EXPORT_NON_HIERARCHICAL = "/bs/StockExportForStaff/ExportNonHierarchical";
    public static final String ACTION_APP_PUR_ORDER_FOR_BS = "/bs/StockExportForStaff/AppPurOrderForBS";

    // BEGIN PRODUCT ORDER URL

    public static final String ACTION_PRODUCT_ORDER_ADD_MANUAL = "/bs/ProductOrder/addManual";

    public static final String ACTION_PRODUCT_ORDER_INIT = "/bs/ProductOrder/init";

    public static final String ACTION_PRODUCT_ORDER_GET_BANK = "/bs/ProductOrder/getBank";

    public static final String ACTION_PRODUCT_ORDER_GET_ALL_BANK = "/bs/ProductOrder/getAllBank";

    public static final String ACTION_PRODUCT_ORDER_GET_ERP_GOODS = "/bs/ProductOrder/getERPGoods";

    public static final String ACTION_PRODUCT_ORDER_GET_BS_GOODS = "/bs/ProductOrder/getBSGoods";

    public static final String ACTION_PRODUCT_ORDER_ADD_GOOD_PRICE = "/bs/ProductOrder/addGoodPrice";

    public static final String ACTION_PRODUCT_ORDER_SAVE_GOOD_PRICE = "/bs/ProductOrder/saveGoodPrice";

    public static final String ACTION_PRODUCT_ORDER_DEL_GOOD_PRICE = "/bs/ProductOrder/delGoodPrice";

    public static final String ACTION_PRODUCT_ORDER_GET_GOOD_PRICE = "/bs/ProductOrder/getGoodPrice";

    public static final String ACTION_PRODUCT_ORDER_GET_DISCOUNT = "/bs/ProductOrder/getDiscount";

    public static final String ACTION_PRODUCT_ORDER_ADD = "/bs/ProductOrder/add";

    public static final String ACTION_PRODUCT_ORDER_SAVE = "/bs/ProductOrder/save";

    public static final String ACTION_PRODUCT_ORDER_UPDATE = "/bs/ProductOrder/update";

    public static final String ACTION_PRODUCT_ORDER_UPDATE_FROM_VIEW = "/bs/ProductOrder/updateFromView";

    public static final String ACTION_PRODUCT_ORDER_GET_ALL_PO = "/bs/ProductOrder/getAllPO";

    public static final String ACTION_PRODUCT_ORDER_GET_REJECT_REASON = "/bs/ProductOrder/getRejectReason";

    public static final String ACTION_PRODUCT_ORDER_UPLOAD = "/bs/ProductOrder/upload";

    public static final String ACTION_PRODUCT_ORDER_GET_PO = "/bs/ProductOrder/getPO";

    public static final String ACTION_PRODUCT_ORDER_GET_PO_APPROVE = "/bs/ProductOrder/getPOApprove";

    public static final String ACTION_PRODUCT_ORDER_LOAD_PROVINCE = "/bs/ProductOrder/loadProvince";

    public static final String ACTION_PRODUCT_ORDER_LOAD_SA_PROVINCE = "/bs/ProductOrder/getSAProvince";

    public static final String ACTION_PRODUCT_ORDER_DEL_SA_PROVINCE = "/bs/ProductOrder/delSAProvince";

    public static final String ACTION_PRODUCT_ORDER_DEL_ALL_SA_PROVINCE = "/bs/ProductOrder/delAllSAProvince";

    public static final String ACTION_PRODUCT_ORDER_ADD_SA_PROVINCE = "/bs/ProductOrder/addSAProvince";

    public static final String ACTION_PRODUCT_ORDER_GET_ALL_GOOD = "/bs/ProductOrder/getAllGoods";

    public static final String ACTION_PRODUCT_ADD_GOODS_DISCOUNT = "/bs/ProductOrder/addGoodDiscount";

    public static final String ACTION_PRODUCT_SAVE_GOOD_DISCOUNT = "/bs/ProductOrder/saveGoodDiscount";

    public static final String ACTION_PRODUCT_ORDER_GET_GOOD_DISCOUNT = "/bs/ProductOrder/getGoodDiscount";

    public static final String ACTION_PRODUCT_ORDER_GET_DISCOUNT_INFO = "/bs/ProductOrder/getDiscountInfo";

    public static final String ACTION_PRODUCT_ORDER_DEL_GOOD_DISCOUNT = "/bs/ProductOrder/delGoodDiscount";

    public static final String ACTION_PRODUCT_ORDER_DEL_PO_BY_ID = "/bs/ProductOrder/getPObyID";

    public static final String ACTION_PRODUCT_ORDER_APPROVE = "/bs/ProductOrder/aprrove";

    public static final String ACTION_PRODUCT_ORDER_APPROVE_BS = "/bs/ProductOrderForBs/aprrove";

    public static final String ACTION_PRODUCT_ORDER_GET_DO = "/bs/ProductOrder/getDO";

    public static final String ACTION_PRODUCT_ORDER_REJECT = "/bs/ProductOrder/reject";

    public static final String ACTION_PRODUCT_ORDER_CONFIRM_RECEIVE_RED_SHIP = "/bs/ProductOrder/confirmreceiveredship";

    public static final String ACTION_PRODUCT_ORDER_RETURN_SHIP_MENT_TO_CENTRE = "/bs/ProductOrder/returnShipmentToCentre";

    public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_PDF = "/bs/downloadPDF";

    public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_VIEW_IMG = "/bs/downloadViewIMG";

    public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_APPROVE_IMG = "/bs/downloadApproveIMG";

    public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_BS_IMG = "/bs/downloadBSIMG";

    public static final String ACTION_PRODUCT_ORDER_EXPORT = "/bs/ProductOrder/export";

    public static final String ACTION_PRODUCT_ORDER_DOWNLOAD_EXCEL = "/bs/downloadExcel";

    public static final String ACTION_SEND_OTP = "/bs/sendOTP";

    public static final String ACTION_VALIDATE_OTP = "/bs/validateOTP";

    public static final String ACTION_C_INVOICE_SEARCH_TRANSACTION = "/bs/CInvoice/actionCInvoiceSearchTransaction";
    public static final String ACTION_C_INVOICE_SEARCH_TRANSACTION_BY_ID = "/bs/CInvoice/actionCInvoiceSearchTransactionById";

    public static final String ACTION_C_INVOICE_GET_LIST_SHOP = "/bs/CInvoice/actionGetListShop";

    public static final String ACTION_C_INVOICE_GET_LIST_STAFF = "/bs/CInvoice/actionGetListStaff";

    public static final String ACTION_C_INVOICE_GET_LIST_PAY_METHOD = "/bs/CInvoice/actionGetListPayMethod";

    public static final String ACTION_C_INVOICE_GET_LIST_TRANSACTION = "/bs/CInvoice/actionGetListTransaction";

    public static final String ACTION_C_INVOICE_GET_LIST_INVOICE_STATUS = "/bs/CInvoice/actionGetListInvoiceStatus";

    public static final String ACTION_CREATE_C_INVOICE = "/bs/CInvoice/actionCreateCInvoice";

    public static final String ACTION_PRINT_INVOICE = "/bs/CInvoice/actionPrintInvoice";

    public static final String ACTION_PRINT_INVOICE_CD = "/bs/CInvoice/actionPrintInvoiceCD";

    public static final String ACTION_C_INVOICE_GET_LIST_GOODS = "/bs/CInvoice/actionGetListGoods";

    public static final String ACTION_C_INVOICE_GET_LIST_GOOD_DETAIL = "/bs/CInvoice/actionGetListGoodDetail";

    public static final String ACTION_C_INVOICE_GET_TY_GIA = "/bs/CInvoice/actionGetTyGia";
    // END PRODUCT ORDER URL

    public static final String ACTION_TRANSSHOPNONHIE_SEARHALLGOODS = "/bs/TransShopNonHie/searhAllGoods";

    public static final String ACTION_TRANSSHOPNONHIE_SEARHGOODSONSTOCK = "/bs/TransShopNonHie/searhGoodsOnStock";

    public static final String ACTION_TRANSSHOPNONHIE_SEARHGOODSONSTOCKTAB52 = "/bs/TransShopNonHie/searhGoodsOnStockTab52";

    public static final String ACTION_TRANSSHOPNONHIE_GETALLSTAFF = "/bs/TransShopNonHie/getAllStaff";

    public static final String ACTION_TRANSSHOPNONHIE_GETLISTINTERNALSTOCK = "/bs/TransShopNonHie/getListInternalStock";

    public static final String ACTION_TRANSSHOPNONHIE_GETGOODDETAIL = "/bs/TransShopNonHie/getGoodDetail";

    public static final String ACCOUNT_MANAGEMENT_LOAD_REASON = "/bs/accountManagement/getReason";
    public static final String ACCOUNT_MANAGEMENT_EXECUTE_CHANGE_ACCOUNT = "/bs/accountManagement/executeChangeAccount";
    public static final String ACCOUNT_MANAGEMENT_TRANSFER_MONEY = "/bs/accountManagement/transferMoney";
    // begin url transfer cash vnm
    public static final String ACTION_SEARCH_LIST_CASH_TRANSFER_VNM = "/bs/CashTransferVnm/listCashTransfer";

    public static final String ACTION_LIST_CENTER = "/bs/CashTransferVnm/listCenter";

    public static final String ACTION_GET_AGENCY_INFO = "/bs/CashTransferVnm/getAgencyInfo";

    public static final String ACTION_CREATE_CASH_TRANSFER = "/bs/CashTransferVnm/createCashTransfer";

    public static final String ACTION_APPROVE_CASH_TRANSFER = "/bs/CashTransferVnm/approveCashTransfer";

    public static final String ACTION_REJECT_CASH_TRANSFER = "/bs/CashTransferVnm/rejectCashTransfer";

    // end url transfer cash vnm

    public static final String ACTION_LIST_AGENT_FROM_TEMPLATE = "/bs/UploadAgencyByBatch/getListAgencyFromfile";

    public static final String ACTION_UPLOAD_AGENT_BY_BATCH = "/bs/UploadAgencyByBatch/createUploadByBatch";

    public static final String ACTION_COMMISSION_STATUS_GET_LIST = "/bs/StatusCommission/getListCommission";

    public static final String ACTION_REGISTER_CHILD = "/bs/Custome/registerCustomerChild";
    public static final String ACTION_PREPAID_LIST_MANAGEMENT_SEARCH = "/bs/PrepaidListManagement/search";

    // descripton create Customer
    public static String DESCRIPTION_CREATE_CUSTOMER = "DKTT BrandedShop";

    // Define error related to database
    public static String ERR_DB_IMPORT_STOCK_FROM_CENTER = "error when import stock from center";

    // Action
    public static String INPUT_NULL = "Bạn cần nhập 1 điều kiện tìm kiếm.";


    // Message return client.
    public static String CUSTOMER_TYPE_IS_NULL = "PREPAID-0001";

    public static String CUSTOMER_TYPE_WRONG_INPUT = "PREPAID-0002";

    public static String BUS_PERMIT_NO_IMG1_IS_NULL = "PREPAID-0003";

    public static String CONTRACT_IMG1_IS_NULL = "PREPAID-0004";

    public static String TAX_CODE_IS_NULL = "PREPAID-0005";

    public static String DISTRICT_IS_NULL = "PREPAID-0006";

    public static String PROVINCE_IS_NULL = "PREPAID-0007";

    public static String COUNTRY_IS_NULL = "PREPAID-0008";

    public static String CUST_IMG_IS_NULL = "PREPAID-0009";

    public static String IMG_ID_IS_NULL = "PREPAID-0010";

    public static String CARD_ID_IS_NULL = "PREPAID-0011";

    public static String CARD_ID_MAX_MIN_LENGTH = "PREPAID-0012";

    public static String ADDRESS_IS_NULL = "PREPAID-0013";

    public static String ADDRESS_MAX_MIN_LENGTH = "PREPAID-0014";

    public static String COMPANY_IS_NULL = "PREPAID-0015";

    public static String DATE_OF_ISSUE_IS_NULL = "PREPAID-0016";

    public static String DATE_OF_ISSUE_WRONG_DATE = "PREPAID-0017";

    public static String DATE_OF_ISSUE_END_DATE = "PREPAID-0018";

    public static String DOB_IS_NULL = "PREPAID-0019";

    public static String DOB_14_Age = "PREPAID-0020";

    public static String DOB_100_Age = "PREPAID-0021";

    public static String FIRST_NAME_IS_NULL = "PREPAID-0022";

    public static String LAST_NAME_IS_NULL = "PREPAID-0023";

    public static String GENDER_IS_NULL = "PREPAID-0024";

    public static String PLACE_OF_ISSUE_IS_NULL = "PREPAID-0025";

    public static String PLACE_OF_ISSUE_MAX_MIN_LENGTH = "PREPAID-0026";

    public static String CREATE_FOLDER = "PREPAID-0027";

    public static String TAX_CODE_EXIST = "PREPAID-0028";

    public static String ID_CARD_EXIST = "PREPAID-0029";

    public static String MDN_WRONG_MIN_MAX = "PREPAID-0030";

    public static String MDN_IS_NULL = "PREPAID-0031";

    public static String VALID_RESERVE = "PREPAID-0032";

    public static String SERIAL_WRONG_MIN_MAX = "PREPAID-0033";

    public static String SERIAL_IS_NULL = "PREPAID-0034";

    public static String CHECK_EXIST_ACTION = "PREPAID-0035";

    public static String FILE_ID_IS_NULL = "PREPAID-0036";

    public static String MDN_NOT_FOUND = "PREPAID-0037";

    public static String COS_IS_NULL = "PREPAID-0038";

    public static String COS_WRONG_VALUE = "PREPAID-0039";

    public static String SEARCH_HIST_INPUT_NULL = "PREPAID-0040";

    public static String EQUAL_PASS = "Mật khẩu cũ và mật khẩu mới phải khác nhau!";

    public static String NOT_DATA = "PREPAID-0042";

    public static String CONTRACT_IMG1_SUB = "PREPAID-0043";

    public static String MDN_IS_POST_PAID = "PREPAID-0044";

    public static String PROVINCE_DISTRICT_WRONG_VALUE = "PREPAID-0045";

    public static String ACCOUNT_NOT_MAP_SHOP = "PREPAID-0046";

    public static String DATE_OF_ISSUE_WRONG_TYPE = "PREPAID-0047";

    public static String DATE_OF_BIRTH_WRONG_TYPE = "PREPAID-0048";

    public static String COS_KIT_NOT_LIST_SYSTEM_MAP = "PREPAID-0049";

    public static String GENDER_IS_NOT_CORRECT = "PREPAID-0050";

    public static String MDN_IS_USED = "PREPAID-0051";

    public static String SERIAL_NOT_FOUND = "PREPAID-0052";

    public static String SUBSCRIBER_EXPIRED = "PREPAID-0053";

    public static String SUBSCRIBER_NOT_FOUND = "PREPAID-0054";

    public static String SIM_NOT_MAP_SERIAL = "PREPAID-0055";

    public static String SWITCHBOARD_ERROR = "PREPAID-0056";

    public static String IMG_ID_2_IS_NULL = "PREPAID-0057";

    public static String SUB_USER_TYPE = "PREPAID-0058";

    public static String SUB_PAYMENT_TYPE = "PREPAID-0059";

    public static String TYPE_CARD_IS_NULL = "PREPAID-0060";

    public static String MDN_CHECK = "PREPAID-0061";

    public static String CONTRACT_IMG2_SUB = "PREPAID-0062";

    public static String COS_KIT_SERIAL = "PREPAID-0063";

    public static String CONTRACT_IMG2_IS_NULL = "PREPAID-0064";

    public static String TYPE_CARD_EXIST = "PREPAID-0065";

    public static String FILE_ID2_IS_EXIST = "PREPAID-0066";

    public static String ID_CARD1_IS_EXIST = "PREPAID-0067";

    public static String ID_CARD2_IS_EXIST_B = "PREPAID-0068";

    public static String ID_CARD1_IS_EXIST_C = "PREPAID-0069";

    public static String ID_CARD2_IS_EXIST_C = "PREPAID-0070";

    public static String ID_CARD1_IS_EXIST_B = "PREPAID-0071";

    public static String CUST_IMG_B = "PREPAID-0072";

    public static String CUST_IMG_C = "PREPAID-0073";

    public static String PARENT_IMG_IS_NULL = "PREPAID-0074";

    public static String BUS_PERMIT_NO_IMG2_IS_NULL = "PREPAID-0075";

    public static String OLD_SERIAL_IS_NULL = "CHANGESIM-0001";

    public static String OLD_SERIAL_WRONG_MIN_MAX = "CHANGESIM-0002";

    public static String NEW_SERIAL_IS_NULL = "CHANGESIM-0003";

    public static String NEW_SERIAL_WRONG_MIN_MAX = "CHANGESIM-0004";

    public static String REASON_IS_NULL = "CHANGESIM-0005";

    public static String CHANGESIM_SUCCESS = "CHANGESIM-0006";

    public static String CHANGESIM_UNSUCCESS = "CHANGESIM-0007";

    public static String CHANGESOVE_CUS_NEW_IS_NULL = "CHANGESOVE-0001";

    public static String CHANGESOVE_CARD_NEW_IS_NULL = "CHANGESOVE-0002";

    public static String CHANGESOVE_SUCCESS = "CHANGESOVE-0003";

    public static String OLD_IDNO_IS_NULL = "OLD_IDNO_IS_NULL";

    public static String PREPAID_BS_SUCCESS = "PREPAID_BS-0000";

    public static String GET_LIST_TEMPLATE_MAX_RECORD_ERROR = "LIST_PREPAID_MAX_RECORD";

    public static String PREPAID_BS_NOT_SERIAL = "PREPAID_BS-0001";

    public static String PREPAID_BS_NOT_TAXCODE = "PREPAID_BS-0002";

    public static String UPDATE_CUSTOMER_SUCCESS = "UPDATE_PREPAID-000";

    public static String ISDN_TYPE_FAIL_EMPTY = "UPDATE_PREPAID-001";

    public static String ISDN_TYPE_FAIL_POSTPAID = "UPDATE_PREPAID-002";

    public static String CURRENT_STATE_FAIL = "UPDATE_PREPAID-003";

    public static String VERIFY_SUBSCRIBER_HISTORY_OK = "UPDATE_PREPAID-004";

    public static String VERIFY_SUBSCRIBER_HISTORY_KO = "UPDATE_PREPAID-005";

    public static String VERIFY_SUBSCRIBER_SECRET_NULL = "UPDATE_PREPAID-006";

    public static String VERIFY_SUBSCRIBER_HISTORY_FAIL = "UPDATE_PREPAID-007";

    public static String VERIFY_SUBSCRIBER_SHT_NOT_EXIST = "UPDATE_PREPAID-008";

    public static String VERIFY_SUBSCRIBER_SHT_ADD_COMMED = "UPDATE_PREPAID-009";

    public static String VERIFY_SUBSCRIBER_TIME_ERROR = "UPDATE_PREPAID-010";

    public static String CREATE_NEW_SECRET_CODE_OK = "UPDATE_PREPAID-011";

    public static String CREATE_NEW_SECRET_CODE_KO = "UPDATE_PREPAID-012";

    public static String SECRET_CODE_EXIST = "UPDATE_PREPAID-013";

    public static String UPDATE_PREPAID_CHANGESIM_KO = "UPDATE_PREPAID-014";

    public static String VERIFY_SUBSCRIBER_MSISDN_EMPTY = "UPDATE_PREPAID-015";

    public static String EMPLOYEE_IDCARD_IS_EXIST_IN_SYSTEM = "UPDATE_PREPAID-016";

    public static String UPDATE_PREPAID_FILE_ID_SUB_IS_NULL = "UPDATE_PREPAID-017";

    public static String UPDATE_PREPAID_CONTRACT_IMG_NULl = "UPDATE_PREPAID-018";

    public static String VERIFY_SPECIAL_NUMBER_KO = "UPDATE_PREPAID-019";

    public static String VERIFY_SPECIAL_NUMBER_KO_WITH_SHOP = "UPDATE_PREPAID-020";

    public static String EXIST_REQUEST_IN_DB = "UPDATE_PREPAID-021";

    public static String UPDATE_PREPAID_NICE_NUMBER = "UPDATE_PREPAID-022";

    public static String UPDATE_PREPAID_CHECK_PARENT = "UPDATE_PREPAID-023";

    public static String UPDATE_PREPAID_FILE_ID1_SUB_IS_NULL = "UPDATE_PREPAID-024";

    public static String UPDATE_PREPAID_FILE_ID2_SUB_IS_NULL = "UPDATE_PREPAID-025";

    public static String UPDATE_PREPAID_CONTRACT2_IMG_NULl = "UPDATE_PREPAID-026";

    public static String UPDATE_PREPAID_CONTRACT_CUS1_IMG_NULl = "UPDATE_PREPAID-027";

    public static String UPDATE_PREPAID_CONTRACT_CUS2_IMG_NULl = "UPDATE_PREPAID-028";

    public static String MESS_CREATE_REQUEST_CHANGESIM_SUCCESS = "CHANGESIM_PREPAID-0001";

    public static String MESS_REQUEST_CHANGESIM_RELEASE_DEPOSIT = "CHANGESIM_PREPAID-0002";

    public static String MESS_REQUEST_CHANGESIM_UPDATE_SUCCESS = "CHANGESIM_PREPAID-0003";

    public static String MESS_VERIFY_IDCARD_CHANGESIM_KO = "CHANGESIM_PREPAID-0004";

    public static String CHANGESIM_PHONE_NULL = "CHANGESIM_PREPAID-0005";

    public static String CHANGESIM_FULLNAME_NULL = "CHANGESIM_PREPAID-0006";

    public static String CHANGESIM_FROMDATE_GREATER_TODATE = "CHANGESIM_PREPAID-0007";

    public static String CHANGESIM_DATE_RANGE_ONE_MONTH = "CHANGESIM_PREPAID-0008";

    public static String APPROVE_SUCCESS = "ACTION_APPROVE-0001";

    public static String REJECT_SUCCESS = "ACTION_REJECT-0001";

    public static String REVIEW_CHANGESIM_PRE_OK = "ACTION_REVIEW-0001";

    public static String UPDATE_PROVINCE_ERROR_VALIDATE = "UPDATE_PROVINCE-0001";

    public static String UPDATE_PROVINCE_LIST_ERROR = "UPDATE_PROVINCE-0005";

    public static String MESS_CREATE_TRANSFER_OF_OWNERSHIP_SUCCESS = "TRANSFER_OF_OWNERSHIP_PREPAID-0001";

    public static String TRANSFER_OF_OWNERSHIP_SUCCESS = "TRANSFER_OF_OWNERSHIP-0001";

    public static String UPDATE_PREPAID_TRANSFER_OF_OWNERSHIP_KO = "TRANSFER_OF_OWNERSHIP-021";

    public static String CREATE_CHANGE_CARD_AIRTIME_001 = "CREATE_CHANGE_CARD_AIRTIME_001";

    public static String CREATE_CHANGE_CARD_AIRTIME_CONTACT_NUMBER_REQUIRED = "CREATE_CHANGE_CARD_AIRTIME_001";

    public static String MSISDN_NORMAL_OK = "NORMAL_MSISDN_OK";

    public static String MSISDN_NORMAL_KO = "NORMAL_MSISDN_KO";

    public static String MSISDN_NORMAL_CHECK = "Số thuê bao là số đẹp và không thuộc danh sách được phép sửa thông tin !";

    public static String MSISDN_NORMAL_CHECK_PRE = "Số thuê bao không phải là số thường. Bạn không được phép cập nhật. !";

    public static String MSISDN_NORMAL_PER = "Không tìm thấy dữ liệu!";

    public static String STOCK_VIP_SHOP = "STOCK_VIP_SHOP";

    public static String REGISTER_VAS_MSISDN_NOT_ACTIVE = "REGISTER_VAS-001";

    public static String REGISTER_NUMBER_REQUIRED = "REGISTER_VAS-002";

    public static String REGISTER_VAS_TYPE_REQUIRED = "REGISTER_VAS-003";

    public static String REGISTER_IMSI_REQUIRED = "REGISTER_VAS-004";

    public static String REGISTER_VAS_ERROR = "REGISTER_VAS-005";

    public static String ERROR_PREPAID_BUNDLE = "ERROR_PREPAID_BUNDLE";

    public static String MESS_FROM_DATE_TYPE_ERROR = "mess.from.date.type.error";

    public static String MESS_TO_DATE_TYPE_ERROR = "mess.to.date.type.error";

    public static String TRANSFER_VNM_FROM_DATE_REQUIRED = "search.from.date.required";

    public static String TRANSFER_VNM_TO_DATE_REQUIRED = "search.to.date.required";

    public static String APPROVE_REQUEST_CHANGE_001 = "APPROVE_REQUEST_CHANGE-001";

    public static String APPROVE_REQUEST_CHANGE_002 = "APPROVE_REQUEST_CHANGE-002";

    public static String STATUS_COMMISSION_001 = "STATUS_COMMISSION_001";

    public static String STATUS_COMMISSION_002 = "STATUS_COMMISSION_002";

    public static String STATUS_COMMISSION_003 = "STATUS_COMMISSION_003";

    public static String STATUS_COMMISSION_004 = "STATUS_COMMISSION_004";

    public static String STATUS_COMMISSION_005 = "STATUS_COMMISSION_005";

    public static String STATUS_COMMISSION_006 = "STATUS_COMMISSION_006";

    public static String CASH_TRANSFER_ITEM_CODE_REQUIRED = "ITEM-CODE-REQUIRED";

    public static String CASH_TRANSFER_DATE_LOP_REQUIRED = "DATE-LOP-REQUIRED";

    public static String CASH_TRANSFER_TRAN_AMOUNT_REQUIRED = "TRANS-AMOUNT-REQUIRED";

    public static String CASH_TRANSFER_TRAN_AMOUNT_NOT_VALID = "TRANS-AMOUNT-NOT-VALID";

    public static String CASH_TRANSFER_TRAN_COMMISSION_NOT_VALID = "TRANS-COMMISSION-NOT-VALID";

    public static String CASH_TRANSFER_TRANS_DATE_ORDER_NOT_VALID = "TRANS-DATE-ORDER-NOT-VALID";

    public static String CASH_TRANSFER_TRANS_DATE_ORDER_GREATER_SYSDATE = "TRANS-DATE-ORDER-GREATER-SYSDATE";

    public static String CASH_TRANSFER_TRANS_DATE_ISSUE_NOT_VALID = "TRANS-DATE-ISSUE-NOT-VALID";

    public static String CASH_TRANSFER_TRANS_DATE_CONTRACT_NOT_VALID = "TRANS-DATE-CONTRACT-NOT-VALID";

    public static String CASH_TRANSFER_TRANS_ISSUE_DATE_GREATER_SYSDATE = "ISSUE-DATE-GREATER-SYSDATE";

    public static String CASH_TRANSFER_TRANS_CONTRACT_DATE_GREATER_SYSDATE = "CONTRACT-DATE-GREATER-SYSDATE";

    public static String NOT_CHANGE_ID_NO = "NOT_CHANGE_ID_NO";

    public static final int CHECK_SHT_SUCCESS = 0;
    public static final int CHECK_SHT_ERR_NOT_EXIST_SHT = 1;
    public static final int CHECK_SHT_ERR_CHECK_AGENT_BEFORE = 2;
    public static final int CHECK_SHT_ERR_ADDCOMMED = 3;
    public static final int CHECK_SHT_ERR_MAX_TIME = 4;
    public static final int SHT_NOT_FOUND_WITH_SHOPID_STAFFID = 5;

    public static final String STATUS_DISABLED_SECRET_CODE = "0";

    public static String REQUEST_CHANGESIM_CREATE_SUCCESS = "CREATE_REQUEST_CHANGESIM_SUCCESS";

    public static String REQUEST_CHANGESIM_RELEASE_DEPOSIT = "REQUEST_CHANGESIM_RELEASE_DEPOSIT";

    public static String REQUEST_CHANGESIM_UPDATE_SUCCESS = "REQUEST_CHANGESIM_UPDATE_SUCCESS";

    public static String UPDATE_PROVINCE_FOR_SHOP_SUCCESS = "UPDATE_PROVINCE_FOR_SHOP_SUCCESS";

    public static final String SERVICE_CODE_CHANGE_SIM = "1";
    public static final String SERVICE_CODE_TRANSFER_OF_OWNERSHIP = "2";
    public static String REQUEST_TRANSFER_OF_OWNERSHIP_CREATE_SUCCESS = "REQUEST_TRANSFER_OF_OWNERSHIP_CREATE_SUCCESS";

    // CHANGECARDPHYSICAL
    public static String CHANGE_CARD_SUCCESS = "CHANGE_CARD_SUCCESS";
    public static String CHANGE_CARD_ERROR = "CHANGE_CARD_ERROR";
    public static String SLASH = "/";

    public static final int LENGTH_SERIAL_AIRTIME = 16;
    public static final int LENGTH_SERIAL_AIRTIME_11 = 11;

    public static final String CHANNEL_INSERT_BRANDED_SHOP = "10";

    public static final String XUAT_HANG_CHO_NHAN_VIEN = "XNV";
    public static final String XUAT_HANG_KHONG_PHAN_CAP = "521";
    public static final String NHAP_HANG_KHONG_PHAN_CAP = "522";
    public static final String TAO_DON_DAT_HANG = "POR";
    public static final String XAC_NHAN_DON_DAT_HANG = "SOR";
    public static final String TAO_DON_THU_HOI = "THV";
    public static final String XAC_NHAN_DON_THU_HOI = "HH";
    public static String TAX_CODE_EXISTS = "TAX_CODE_EXISTS-0001";
    public static String EXCEPTION_SERIAL_EXPIRED = "EXCEPTION_SERIAL_EXPIRED";

    // register vas
    public static String TYPE_AP_DOMAIN_SUB_PACK = "SUB_PACK";
    public static String STATUS_AP_ACTIVE = "1";

    public static final String URL_LIST_VAS_REGISTER = "/bs/VasRegister/getListVasRegister";

    public static final String ACTION_EXECUTE_VAS_REGISTER = "/bs/VasRegister/executeRegisterVas";

    public static final String STATUS_QUERY_SUB_ACTIVE = "Active";

    public static final String EMPTY_VALUE = "";

    public static final String GENDER_MALE = "1";
    public static final String GENDER_MALE_STR = "Nam";

    public static final String GENDER_FEMALE = "0";
    public static final String GENDER_FEMALE_STR = "Nữ";

    // forminvoiceapprove start
    public static final String CINVOICE_FORMINVOICEAPPROVE_INITDATA = "/bs/FormInvoiceApprove/initData";
    public static final String CINVOICE_FORMINVOICEAPPROVE_SEARCH = "/bs/FormInvoiceApprove/search";
    public static final String CINVOICE_FORMINVOICEAPPROVE_CANCEL = "/bs/FormInvoiceApprove/cancelInvoice";
    public static final String CINVOICE_FORMINVOICEAPPROVE_APPROVE = "/bs/FormInvoiceApprove/approveInvoice";
    public static final String CINVOICE_FORMINVOICEAPPROVE_PRINT = "/bs/FormInvoiceApprove/printCinvoice";
    public static final String CINVOICE_FORMINVOICEAPPROVE_GETUSER = "/bs/FormInvoiceApprove/getuser";
    // forminvoiceapprove end
    // form trbill hoadon cuoc start
    public static final String CINVOICE_FORMTRBILL_SEARCH = "/bs/FormTrBill/search";
    public static final String CINVOICE_FORMTRBILL_PAYMENT = "/bs/FormTrBill/payment";
    public static final String CINVOICE_FORMTRBILL_PAYMENT1 = "/bs/FormTrBill/payment1";
    public static final String CINVOICE_FORMTRBILL_CREATECINVOICE = "/bs/FormTrBill/createCinvoice";
    public static final String CINVOICE_FORMTRBILL_PRINT = "/bs/FormTrBill/print";

    public static final String CINVOICE_FORMTRBILL_DEPOSIT = "/bs/FormTrBill/deposit";
    public static final String CINVOICE_FORMTRBILL_DEPOSIT_PRINT_INVOICE = "/bs/FormTrBill/printDepositInvoice";
    public static final String CINVOICE_FORMTRBILL_REFUND = "/bs/FormTrBill/refund";
    public static final String CINVOICE_FORMTRBILL_CHECK_EXIST_IVOICE = "/bs/FormTrBill/checkExistInvoie";
    public static final String CINVOICE_FORMTRBILL_REFUND_CHECK_BALANCE = "/bs/FormTrBill/refundCheckBalance";
    public static final String CINVOICE_FORMTRBILL_CHECK_DEALER_CREDIT = "/bs/FormTrBill/checkDealerCredit";
    public static final String CINVOICE_FORMTRBILL_UPDATE_PAYMENT = "/bs/FormTrBill/updatePatment";
    public static final String CINVOICE_FORMTRBILL_GET_PAYMENT_METHOD = "/bs/FormTrBill/getPaymentMethod";
    public static final String TYPE_AP_DOMAIN_TR_BILL = "12";
    // form trbill hoadon cuoc end

    public static final String CINVOICE_ADUSTMENT_INITDATA = "/bs/CInvoiceAdustment/initData";

    public static final String CINVOICE_ADUSTMENT_SEARCH = "/bs/CInvoiceAdustment/search";

    public static final String CINVOICE_ADUSTMENT_UPDATE_BILL_INVOICE = "/bs/CInvoiceAdustment/updateBillAdjust";

    // print invoice by batch
    public static final String CINVOICE_PRINT_BY_BATCH_ROOT = "/bs/cinvoice/printByBatch";
    public static final String CINVOICE_SUB_PRINT_BY_BATCH_SEARCH = "/search";
    public static final String CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_CINVOICE = "/print";
    public static final String CINVOICE_SUB_PRINT_BY_BATCH_GET_LIST_ACCOUNT_FROM_FILE = "/bs/getListAccountFromFile";
    public static final String CINVOICE_PRINT_BY_BATCH_NEW_ROOT = "/bs/cinvoiceNew/printByBatchNew";
    public static final String CINVOICE_SUB_PRINT_BY_BATCHEW_NEW_SEARCH = "/searchNew";
    public static final String CINVOICE_SUB_PRINT_BY_BATCH_ONPRINT_NEW_CINVOICE = "/printNew";
    public static final String CINVOICE_SUB_PRINT_BY_BATCH_ONCREATE_CINVOICE = "/create";

    public static final String ACTION_CUSTOMER_SEARCH_BUNDLE = "/bs/Customer/search_bundle";

    public static final String ACTION_CUSTOMER_GET_IMG_BUNDLE = "/bs/Customer/get_img_bundle";

    // postpaid
    public static final String POSTPAID_GET_LIST_GL_CODE = "/bs/postpaid/getListGLCode";

    public static final String POSTPAID_GET_LIST_TYPE_CUST = "/bs/postpaid/getListPostpaidTypeCustomer";

    public static final String POSTPAID_GET_LIST_SERVICE_TYPE = "/bs/postpaid/getListPostpaidServiceType";

    public static final String POSTPAID_GET_LIST_PERSON_TYPE = "/bs/postpaid/getListPostpaidPersonType";

    public static final String POSTPAID_GET_LIST_CUST_SEG = "/bs/postpaid/getListPostpaidCustomerSeg";

    public static final String POSTPAID_GET_LIST_PROVINCE = "/bs/postpaid/getListProvince";

    public static final String POSTPAID_GET_LIST_DISTRICT = "/bs/postpaid/getListDistrict";

    public static final String POSTPAID_SEARCH_PERSON_PARENT = "/bs/postpaid/searchPersonPostpaidParent";

    public static final String POSTPAID_ADD_NEW_PERSON_PARENT = "/bs/postpaid/addNewPersonPostpaidParent";

    public static final String POSTPAID_UPDATE_PERSON_PARENT = "/bs/postpaid/updatePersonPostpaidParent";

    public static final String POSTPAID_ADD_NEW_PERSON_CHILD = "/bs/postpaid/addNewPersonPostpaidChild";

    public static final String POSTPAID_UPDATE_PERSON_CHILD = "/bs/postpaid/updatePersonPostpaidChild";

    public static final String POSTPAID_GET_LIST_REASON_CHANGE_SIM_POSTPAID = "/bs/postpaid/getListResonChangeSimPostpaid";

    public static final String POSTPAID_ACTION_CHANGE_SIM_POSTPAID = "/bs/postpaid/actionChangeSimPostpaid";

    public static final String POSTPAID_SEARCH_HISTORY = "/bs/postpaid/searchParentHistory";

    public static final String POSTPAID_PERSON_SEARCH = "/bs/postpaidpersonsearch/searchpostpaidperson";

    public static final String POSTPAID_SEARCH_PERSON_PARENT_BY_IDNUM_OR_TAXCODE = "/bs/postpaid/searchPostpaidPersonByTaxCodeOrIDNum";

    public static final String POSTPAID_SEARCH_PERSON_PARENT_BY_ACCOUNT_NO = "/bs/postpaid/searchPostpaidPersonByAccountNo";

    public static final String POSTPAID_SEARCH_PARENT = "/bs/postpaid/searchParent";
    public static final String POSTPAID_PERSON_DETAIL = "/bs/postpaid/postpaidPersonDetail";

    public static final String PRETUPS_SEARCH_AGENT_BY_MSISDN = "/bs/pretups/getAgentByIsdn";

    public static final String PRETUPS_GET_AGENT_PROVINCE = "/bs/pretups/getAgentProvince";

    public static final String PRETUPS_GET_AGENT_CENTRE = "/bs/pretups/getAgentCentre";

    public static final String PRETUPS_GET_AGENT_TYPE = "/bs/pretups/getAgentType";

    public static final String PRETUPS_GET_AGENT_LEVEL = "/bs/pretups/getAgentLevel";

    public static final String PRETUPS_GET_AGENT_DISTRICT = "/bs/pretups/getAgentDistrict";

    public static final String PRETUPS_GET_AGENT_COMMUNE = "/bs/pretups/getAgentCommune";

    public static final String PRETUPS_ADD_NEW_AGENT = "/bs/pretups/actionAddNewAgent";

    public static final String PRETUPS_UPDATE_AGENT = "/bs/pretups/actionUpdateAgent";

    public static final String PRETUPS_DELETE_AGENT = "/bs/pretups/actionDeleteAgent";

    public static final String PRETUPS_SEARCH_ACCOUNT = "/bs/pretups/searchAccount";

    public static final class ITEM_CODE {
        public static final String POSTPAID_MANAGER = "POSTPAID_001&ACCESS";
        // Report
        public static final String EXPORT_INPUT_STOCK = "BC_001&ACCESS";
        public static final String EXPORT_INPUT_STOCK_STAFF = "BC_002&ACCESS";
        public static final String EXPORT_STOCK = "BC_003&ACCESS";
        public static final String EXPORT_PREPAID = "BC_004&ACCESS";
        public static final String EXPORT_PREPAID_STAFF = "BC_005&ACCESS";
        public static final String EXPORT_PREPAID_DETAIL = "BC_006&ACCESS";
        public static final String EXPORT_CHANGE_SCRATCH_CARD = "BC_007&ACCESS";
        public static final String EXPORT_CHANGE_CARD_PHYSICAL = "BC_008&ACCESS";
        public static final String EXPORT_PREPAID_REQUEST = "BC_009&ACCESS";
        public static final String EXPORT_CHANGE_CUST_INFO = "BC_010&ACCESS";
        public static final String EXPORT_LOGIN = "BC_011&ACCESS";
        public static final String EXPORT_NEW_REGISTER = "BC_012&ACCESS";
        public static final String EXPORT_INFO_CHANGE = "BC_013&ACCESS";
        public static final String EXPORT_HISTORY_STK = "BC_015&ACCESS";
        public static final String EXPORT_TRANSFERS_AUMONT = "BC_016&ACCESS";
        public static final String EXPORT_TRANSFERS = "BC_017&ACCESS";
        public static final String EXPORT_HIST_STK_1 = "BC_018&ACCESS";
        public static final String EXPORT_HIST_STK_2 = "BC_019&ACCESS";
        public static final String EXPORT_AIRTIME_ADJUSTMENT = "BC_020&ACCESS";
        public static final String EXPORT_DV_HHPTTB = "BC_021&ACCESS";
        // Report MNP
        public static final String EXPORT_PORT_IN_MNP = "BC_MNP_001&ACCESS";
        public static final String EXPORT_PORT_OUT_MNP = "BC_MNP_002&ACCESS";
        public static final String EXPORT_REVERSAL_MNP = "BC_MNP_003&ACCESS";
        public static final String EXPORT_RETURN_MNP = "BC_MNP_004&ACCESS";
        public static final String EXPORT_COMMITMENT_MNP = "BC_MNP_005&ACCESS";
        public static final String EXPORT_COMMITMENT_DETAIL_MNP = "BC_MNP_006&ACCESS";
        // Category
        public static final String CATEGORY_UPDATE_PROVINCE_BS = "DM_001&ACCESS";
        public static final String CATEGORY_TRANSFER_TO_SHOP = "DM_002&ACCESS";
        public static final String CATEGORY_LIST_MULTI_SHOP_GOODS = "DM_003&ACCESS";
        public static final String CATEGORY_TRANSFER_GOODS = "DM_004&ACCESS";

        public static final String CATEGORY_VIP_WHITELIST = "DM_006&ACCESS";

        // Category MNP
        public static final String CATEGORY_COS_REJECT = "DSKSCM_001&ACCESS";
        public static final String CATEGORY_GROUP_MDN_REJECT = "DSKSCM_002&ACCESS";
        public static final String CATEGORY_MDN_REJECT = "DSKSCM_003&ACCESS";
        public static final String CATEGORY_MDN_WHITELIST = "DSKSCM_004&ACCESS";
        // Purchase Order manager
        public static final String CREATE_PURCHASE_ORDER = "QLDT_001&ACCESS";
        public static final String VIEW_PURCHASE_ORDER = "QLDT_002&ACCESS";
        public static final String APPROVE_PURCHASE_ORDER = "QLDT_003&ACCESS";
        public static final String SA_PROVINCE_MANAGER = "QLDT_004&ACCESS";
        public static final String DISCOUNT_MANAGER = "QLDT_005&ACCESS";
        public static final String GOOD_PRICE_MANAGER = "QLDT_006&ACCESS";
        public static final String VIEW_DELIVER_ORDER = "QLDT_007&ACCESS";
        public static final String CREATE_PURCHASE_ORDER_FOR_BS = "QLDT_008&ACCESS";
        public static final String APPROVE_PURCHASE_ORDER_FOR_BS = "QLDT_009&ACCESS";
        // Hoan tra so ve DNO
        public static final String MNP_CONFIRM_REVERSAL = "QLHTS_001&ACCESS";
        public static final String MNP_NOTIFICATION_REVERSAL_DNO = "QLHTS_002&ACCESS";
        // DK dich vu
        public static final String PREPAID_CON_SUB = "DKDV_001&ACCESS";
        public static final String REGISTER_VAS = "DKDV_002&ACCESS";
        // Quan ly KH tra truoc
        public static final String PREPAID_BS = "QLKH_001&ACCESS";
        public static final String PREPAID_LIST = "QLKH_002&ACCESS";
        public static final String SEARCH_PREPAID = "QLKH_003&ACCESS";
        public static final String SEARCH_PREPAID_SUBSCRIBER = "QLKH_005&ACCESS";
        public static final String PREPAID = "QLKH_004&ACCESS";
        public static final String PREPAID_LIST_MANAGEMENT = "QLKH_006&ACCESS";
        // Hau kiem
        public static final String MNP_VIOLATION_PORT_OUT = "HK_001&ACCESS";

        // quan ly kho
        public static final String SEARCH_INFOMATION_SHOP_AND_STAFF = "QLK_006&ACCESS";

    }

    public interface App {
        int CHANNEL_WEB = 1;
        int CHANNEL_SMS = 2;
        int CHANNEL_USSD = 3;
    }

    public static final int ETOPUP_CHANNEL_WEB = 1;
    public static final int ETOPUP_CHANNEL_SMS = 2;
    public static final int ETOPUP_CHANNEL_USSD = 3;

    public static final String STATUS_REQUEST_NEW = "0";
    public static final String STATUS_REQUEST_REVIEWED = "5";

    public static final String PROCESS_STATUS_NOT_EXECUTE = "1";

    public static final String PROCESS_STATUS_NOT_EXECUTED = "3";

    public static final String PROCESS_STATUS_NOT_REJECTED = "9";

    public static final String ACTION_EXPORT_ASSIGN_FOR_ASS = "/bs/reportAssignMNP/exportFile";
    public static final String ACTION_EXPORT_PREORDER_BY_STATUS = "/bs/reportPreOrderByStatus/exportFile";

    public static final String SEARCH_CUST_SUBS = "/bs/searchPrepaid/searchSubs";


}
