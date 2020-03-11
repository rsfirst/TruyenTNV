package vn.com.fis.utils.mnpcm;

public class Constants {
    public static final class REQUEST_MAPPING {
        public static final String URL_SOURCE_CUST_INFOR = "/bs/SourceCustInfor";
        public static final String URL_SOURCE_PAY_METHOD = "/bs/SourcePayMethod";
        public static final String URL_SOURCE_EXC_RATE = "/bs/SourceExcRate";
        public static final String URL_CREATE_EXCHANGE_LOAD_GOODS = "/bs/createExchange/load_good";
        public static final String URL_CREATE_EXCHANGE_LOAD_PRICE = "/bs/createExchange/load_price";
        public static final String URL_CREATE_EXCHANGE_LOAD_PROMOTION = "/bs/createExchange/load_promotion";
        public static final String URL_CREATE_EXCHANGE_CALCULATE = "/bs/createExchange/calculate";
        public static final String URL_CREATE_EXCHANGE_LOAD_SERIAL = "/bs/createExchange/load_serial";
        public static final String URL_SOURCE_DVT = "/bs/SourceDVT";
        public static final String URL_SOURCE_ATTACH_GOODS = "/bs/createExchange/get_attach_goods";
        public static final String URL_CREATE_EXCHANGE_LOAD_PRICE_AND_BUNDLE = "/bs/createExchange/load_price_type_and_bundle";
        public static final String URL_SOURCE_SAVE_TRANSACTION = "/bs/createExchange/save_transaction";
        public static final String URL_SAVE_MGM_PROMOTION = "/bs/createExchange/save_MGM_Promotion";
        public static final String URL_SOURCE_INVOICE_TYPE = "/bs/createExchange/load_type_invoice";
        public static final String URL_SOURCE_GET_CURRENT_INVOICE_NO = "/bs/createExchange/get_current_invoice_no";

        public static final String ATT_TYPE_NPR_DKCM = "NPR_DKCM";
        public static final String URL_CREATE_NPR_PREPAID_BUNDLE = "/bs/registration/create_ticket_npr_prepaid_bundle";

        public static final String LIST_PREORDER_BY_TEAMPLATE = "/bs/Microsite/getListPreOrderFromTemplate";
        public static final String INSERT_LIST_PREORDER = "/bs/Microsite/insertListPreOrder";
        public static final String ACTION_LOAD_STAFF = "/bs/reportAssignMNP/loadStaff";

        // Bùi Đình Đạt
        public static final String URL_MAP_AGENT_STOCK_BATCHFILE_UPLOADFILE = "/bs/MapAgentStockBatchFile/getListdata";
        public static final String URL_MAP_AGENT_STOCK_BATCHFILE_ACCEPT_MAP = "/bs/MapAgentStockBatchFile/acceptMap";
        public static final String URL_MAP_DOWNLOAD_FILE_DEMO = "/bs/MapAgentStockBatchFile/downloadFileDemo";

        public static final String URL_CREATE_NPR_PREPAID = "/bs/registration/create_ticket_npr_prepaid";
        public static final String URL_CREATE_NPR_POSTPAID = "/bs/registration/create_ticket_npr_postpaid";

        public static final String URL_CREATE_NPR_LIST_PREPAID = "/bs/registration/create_ticket_npr_list_prepaid";
        public static final String URL_CREATE_NPR_LIST_POSTPAID = "/bs/registration/create_ticket_npr_list_postpaid";

        public static final String URL_NPR_LIST_SUBSCRIBER_FILE = "/bs/npr/listsubscriber";
        public static final String URL_NPR_LIST_SUBSCRIBER_POST_FILE = "/bs/npr/listsubscriberpostpaid";

        public static final String CHECK_CUSTOMER_EXIST_EPOS = "/bs/npr/check_customer_exist";
        public static final String CHECK_COMPANY_EXIST_EPOS = "/bs/npr/check_company_exist";

        public static final String CHECK_CUSTOMER_EXIST_TIBCO = "/bs/npr/check_customer_exist_postpaid";
        public static final String CHECK_COMPANY_EXIST_TIBCO = "/bs/npr/check_company_exist_postpaid";

        public static final String CHECK_SUBSCRIBER_NUMBER_ACTIVE_EPOS = "/bs/npr/check_subscriber_number_active";

        public static final String URL_NPR_CANCEL = "/bs/npr/npr_cancel";
        public static final String URL_ACTION_NPR_CANCEL = "/bs/npr/create_npr_cancel";

        public static final String URL_DATA_VIOLATION_PORT_OUT = "/bs/violation/data_violation_portout";
        public static final String URL_DATA_SUBSCRIBER_PORT_OUT = "/bs/violation/data_subscriber_portout";
        public static final String URL_DATA_LIST_NPR_NEWS = "/bs/violation/data_list_npr_news";
        public static final String URL_UPDATE_VIOLATION_PORTOUT = "/bs/violation/update_violation_portout";
        public static final String URL_VIOLATION_VIOLATION_CHECKING = "/bs/violation/violation_violation_checking";
        public static final String URL_VIOLATION_COMMITMENT_CHECKING = "/bs/violation/violation/commitment_checking";

        public static final String URL_LIST_NPG_REQUEST_LOG_VIOLATION = "/bs/violation/list_npg_request_log_violation";

        public static final String URL_DATA_VIOLATION_PORT_IN = "/bs/violation/data_violation_portin";
        public static final String URL_DATA_SUBSCRIBER_PORT_IN = "/bs/violation/data_subscriber_portin";
        public static final String URL_DATA_LIST_NPR_NEWS_PORTIN = "/bs/violation/data_list_npr_news_portin";

        public static final String URL_VIOLATION_RESPONSE_PORT_IN = "/bs/violation/violation_response_portin";
        public static final String URL_COMMITMENT_RESPONSE_PORT_IN = "/bs/violation/commitment_response_portin";

        public static final String URL_UPDATE_VIOLATION_PORTIN = "/bs/violation/update_violation_portin";

        public static final String SUB_RETURN_DNO_NOTIFICATION = "/bs/sub_return/sub_return_dno_notification";
        public static final String SUB_RETURN_DNO_CHECK_SUBSCRIBER = "/bs/sub_return/check_subscriber";
        public static final String SUB_RETURN_LIST_SUBSCRIBER_TEMPLATE = "/bs/sub_return/list_subscriber_template";

        public static final String SUB_RETURN_DNO_REPORT = "/bs/sub_return_dno";

        public static final String REVERSAL_SUBSCRIBER_AFTER_VIOLATION = "/bs/reversal_subscriber/reversal_subscriber_after_violation";
        public static final String REVERSAL_LIST_SUBSCRIBER_VIOLATION = "/bs/reversal_subscriber/reversal_list_subscriber_after_violation";
        public static final String REVERSAL_REQUEST_AFTER_VIOLATION = "/bs/reversal_subscriber/reversal_request_after_violation";

        public static final String REVERSAL_SUBSCRIBER = "/bs/reversal_subscriber/reversal_subscriber";
        public static final String REVERSAL_LIST_SUBSCRIBER = "/bs/reversal_subscriber/reversal_list_subscriber";
        public static final String REVERSAL_REQUEST = "/bs/reversal_subscriber/send_reversal_request";

        public static final String RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_NPR_RETURN = "/bs/return_notification_original/list_npr_return_notification";
        public static final String RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_SUBSCRIBER = "/bs/return_notification_original/list_subscriber_return_notification";
        public static final String RETURN_NOTIFICATION_ORIGINAL_CHECK_SUBSCRIBER_REVERSED = "/bs/return_notification_original/check_subscriber_reversed";
        public static final String RETURN_NOTIFICATION_NETWORK_SEND_RETURN_REQUEST = "/bs/return_notification_original/send_return_request";

        public static final String RETURN_REQUEST_LIST_SUBSCRIBER = "/bs/return_request/list_subscriber_return";
        public static final String RETURN_REQUEST_SEND_RETURN_REQUEST = "/bs/return_request/send_return_request";

        public static final String RETURN_REQUEST_CHECK_MSISDN_DESTROY = "/bs/return_request/check_msisdn_destroy";

        public static final String URL_SOURCE_PROVINCE = "/bs/SourceProvince";
        public static final String URL_SOURCE_DISTRICT = "/bs/SourceDistrict";

        public static final String URL_SOURCE_LEVEL_CUSTOMER = "/bs/SourceLevelCustomer";
        public static final String URL_SOURCE_PAYMENT_METHOD = "/bs/SourcePaymentMethod";

        public static final String URL_SOURCE_BILL_TYPE = "/bs/SourceBillType";
        public static final String URL_SOURCE_PAYMENT_TYPE = "/bs/SourcePaymentType";

        public static final String URL_SOURCE_COUNTRY_POSPAID = "/bs/SourceCountryPostpaid";
        public static final String URL_SOURCE_PACKAGE_POSPAID = "/bs/SourcePackagePostpaid";

        public static final String URL_SOURCE_COUNTRY = "/bs/SourceCountry";
        public static final String URL_SOURCE_PACKAGETYPE = "/bs/SourcePackage";

        public static final String URL_SOURCE_PACKAGETYPE_PREPAID_COS_REJECT = "/bs/SourcePackagePrepaidCosReject";

        public static final String URL_SOURCE_PACKAGETYPE_AP_DOMAIN = "/bs/SourcePackagePrepaidApDomain";

        public static final String URL_SOURCE_CUSTOMER_TYPE = "/bs/SourceCustomer";
        public static final String URL_SOURCE_NETWORK_TYPE = "/bs/SourceNetwork";

        public static final String URL_SOURCE_DOCUMENT_TYPE = "/bs/SourceDocument";

        public static final String URL_LIST_TRANSFER_NETWORK_PORT_IN = "/bs/list_transfer_network_port_in";
        public static final String URL_LIST_TRANSFER_NETWORK_PORT_OUT = "/bs/list_transfer_network_port_out";
        public static final String URL_LIST_NPR_CANCEL_RNO = "/bs/list_npr_cancel_rno";
        public static final String URL_LIST_NPR_CANCEL_DNO = "/bs/list_npr_cancel_dno";
        public static final String URL_NPR_CANCEL_DETAIL = "/bs/npr_cancel_detail";
        public static final String URL_LIST_REVERSAL_SUBSCRIBER_DNO = "/bs/list_reversal_subscriber_dno";
        public static final String URL_LIST_REVERSAL_SUBCRIBER_VNM = "/bs/list_reversal_subcriber_vnm";
        public static final String URL_LIST_RETURN_ORIGINAL_NETWORK = "/bs/list_return_original_network";
        public static final String URL_LIST_RETURN_SUBSCRIBER_VNM = "/bs/list_return_subscriber_vnm";
        public static final String URL_LIST_NPR_ACTION_AUDIT = "/bs/list_npr_action_audit";
        public static final String URL_LIST_ATTACHMENT_DATA = "/bs/list_npr_attachment_data";

        public static final String URL_MNP_PORT_OUT_LIST_SUBSCRIBER = "/bs/mnp_port_out/list_subscriber";

        public static final String URL_MNP_PORT_OUT_LIST_SUBSCRIBER_NICE_NUMBER = "/bs/mnp_port_out/list_subscriber_nice_number";

        public static final String URL_MNP_CONFIRM_REVERSAL_LIST_SUBSCRIBER = "/bs/mnp_confirm_reversal/list_subscriber";

        public static final String URL_MNP_CONFIRM_REVERSAL_ACCEPT = "/bs/mnp_confirm_reversal/send_accept_reversal";

        public static final String URL_MNP_CONFIRM_REVERSAL_REJECT = "/bs/mnp_confirm_reversal/send_reject_reversal";

        public static final String URL_MNP_PORT_OUT_ACCEPT = "/bs/mnp_port_out/send_accept_portout";

        public static final String URL_MNP_PORT_OUT_REJECT = "/bs/mnp_port_out/send_reject_portout";

        public static final String URL_LIST_NPR_PORT_OUT = "/bs/list_npr_network_port_out";

        public static final String URL_CATEGORY_ITEM_LIST_COS_REJECT = "/bs/category/list_cos_reject";

        public static final String URL_CATEGORY_ITEM_CREATE_COS_REJECT = "/bs/category/create_cos_reject";

        public static final String URL_CATEGORY_ITEM_DELETE_COS_REJECT = "/bs/category/delete_cos_reject";

        public static final String URL_CATEGORY_ITEM_LIST_SPEC_NUM_GROUP = "/bs/category/list_spec_num_group";

        public static final String URL_CATEGORY_ITEM_LIST_GROUP_MDN_REJECT = "/bs/category/list_group_mdn_reject";

        public static final String URL_CATEGORY_ITEM_CREATE_GROUP_MDN_REJECT = "/bs/category/create_group_mdn_reject";

        public static final String URL_CATEGORY_ITEM_DELETE_GROUP_MDN_REJECT = "/bs/category/delete_group_mdn_reject";

        public static final String URL_CATEGORY_ITEM_MSISDN_REJECT_LIST_TEMPLATE = "/bs/category/list_msisdn_reject_template";

        public static final String URL_CATEGORY_ITEM_VIP_WHITE_LIST_TEMPLATE = "/bs/category/list_vip_white_list_teamplate";

        public static final String URL_CATEGORY_ITEM_LIST_MSISDN_REJECT = "/bs/category/list_msisdn_reject";

        public static final String URL_CATEGORY_ITEM_CREATE_MSISDN_REJECT = "/bs/category/create_msisdn_reject";

        public static final String URL_CATEGORY_ITEM_DELETE_MSISDN_REJECT = "/bs/category/delete_msisdn_reject";

        // DatBD2
        public static final String URL_CATEGORY_ITEM_LIST_MSISDN_WHITE_LIST = "/bs/category/list_msisdn_white_list";
        public static final String URL_CATEGORY_ITEM_CREATE_MSISDN_WHITE_LIST = "/bs/category/create_msisdn_white_list";
        public static final String URL_CATEGORY_ITEM_DELETE_MSISDN_WHITE_LIST = "/bs/category/delete_msisdn_white_list";
        // end
        // DatBD2
        public static final String URL_CATEGORY_ITEM_LIST_VIP_WHITE_LIST = "/bs/category/list_vip_white_list";
        public static final String URL_CATEGORY_ITEM_CREATE_VIP_WHITE_LIST = "/bs/category/create_vip_white_list";
        public static final String URL_CATEGORY_ITEM_DELETE_VIP_WHITE_LIST = "/bs/category/delete_vip_white_list";
        public static final String URL_CATEGORY_ITEM_RE_ISSUE_VIP_WHITE_LIST = "/bs/category/reIssue_vip_white_list";
        // end
        /* duytk10 */
        public static final String URL_SEARCH_GROUP_MNP_ORDER_PREPAY = "/bs/npr/search_mnp_order_prepay";// search
        // trả
        // tước
        public static final String URL_UPDATE_GROUP_MNP_ORDER_PREPAY = "/bs/updatePreOrderTrans";// upate
        // trả
        // tước
        public static final String URL_INSERT_GROUP_MNP_ORDER_PREPAY = "/bs/insertPreOrderTrans";// insert
        // trả
        // tước

        public static final String URL_Staff_ITEM_LIST_GROUP_MNP = "/bs/satff/liststafflocation";
        public static final String URL_Staff_ITEM_SEARCH_GROUP_MNP = "/bs/satff/searchstafflocation";
        public static final String URL_Staff_ITEM_INSERT_GROUP_MNP = "/bs/satff/insertstafflocation";
        public static final String URL_Staff_ITEM_DELETE_GROUP_MNP = "/bs/satff/deletestafflocation";

        public static final String URL_CHANNEL_ITEM_LIST_GROUP_MNP_ORDER_STATUS = "/bs/channel/list_spec_num_group_order_channel";

        public static final String URL_CHANNEL_ITEM_SEARCH_GROUP_MNP_ORDER_STATUS = "/bs/channel/search_group_mnp_order_channel";

        public static final String URL_CHANNEL_ITEM_UPDATE_GROUP_MNP_ORDER_STATUS = "/bs/channel/update_group_mnp_order_channel";

        public static final String URL_CHANNEL_ITEM_CREATE_GROUP_MNP_ORDER_STATUS = "/bs/channel/create_group_mnp_order_channel";

        public static final String URL_CHANNEL_ITEM_DELETE_GROUP_MNP_ORDER_STATUS = "/bs/channel/delete_group_mnp_order_channel";

        public static final String URL_STATUS_ITEM_LIST_GROUP_MNP_ORDER_STATUS = "/bs/status/list_spec_num_group_order_status";

        public static final String URL_STATUS_ITEM_SEARCH_GROUP_MNP_ORDER_STATUS = "/bs/status/search_group_mnp_order_status";

        public static final String URL_STATUS_ITEM_UPDATE_GROUP_MNP_ORDER_STATUS = "/bs/status/update_group_mnp_order_status";

        public static final String URL_STATUS_ITEM_CREATE_GROUP_MNP_ORDER_STATUS = "/bs/status/create_group_mnp_order_status";

        public static final String URL_STATUS_ITEM_DELETE_GROUP_MNP_ORDER_STATUS = "/bs/status/delete_group_mnp_order_status";

        public static final String URL_PREORDER_INFORMATION_LIST = "/bs/preRequest/listPreRequest";

        public static final String URL_PREORDER_INFORMATION_DETAIL = "/bs/preRequest/detailPreRequest";

        public static final String URL_PREORDER_INFORMATION_CREATE = "/bs/preRequest/createPreRequest";

        public static final String URL_PREORDER_INFORMATION_UPDATE = "/bs/preRequest/updatePreRequest";

        public static final String URL_PREORDER_INFORMATION_DELETE = "/bs/preRequest/deletePreRequest";

        public static final String URL_PREORDER_INFORMATION_CHECK_FINAL = "/bs/preRequest/checkFinal";

        public static final String URL_PREORDER_INFORMATION_CHECK_TRAN_STATUS = "/bs/preRequest/checkTranStatus";

        public static final String URL_UPDATE_STAFF_PREORDER = "/bs/preRequest/updateStaffPre";

        public static final String URL_STAFF_LIST = "/bs/staff/listStaff";

        public static final String URL_ASSIGN_LIST_PREORDER = "/bs/staff/listPreoder";

        public static final String URL_ASSIGN_STAFF = "/bs/staff/assignStaff";

        public static final String URL_STAFF_LIST_LOCATION = "/bs/staff/listStaffLocation";
    }

    public static final String BEGIN_LOG = " BEGIN -----------";
    public static final String END_LOG = " END ---------------";
    public static final String PARAMETER_LOG = "Parameter - ";
    public static final String PARAMETER_SERVEVICE = "Parameter Service - ";
    public static final String SQL_QUERY_DB = " SQL QUERY : ";

    public static final String PARAMETER_INPUT_DB = "Parameter Input Database - ";

    /* url constants */
    public static final String FOLDER_IMANGE_UPLOAD = "E:/upload/";
    public static final String URL_NPR_UPLOAD = "/bs/npr/upload";
    public static final String URL_NPR_UPLOAD_IMAGE = "/bs/npr/uploadImage";

    public static final String URL_CREATE_NPR_PREPAID = "/bs/registration/create_ticket_npr_prepaid";
    public static final String URL_CREATE_NPR_POSTPAID = "/bs/registration/create_ticket_npr_postpaid";

    public static final String URL_CREATE_NPR_LIST_PREPAID = "/bs/registration/create_ticket_npr_list_prepaid";
    public static final String URL_CREATE_NPR_LIST_POSTPAID = "/bs/registration/create_ticket_npr_list_postpaid";

    public static final String URL_NPR_LIST_SUBSCRIBER_FILE = "/bs/npr/listsubscriber";
    public static final String URL_NPR_LIST_SUBSCRIBER_POST_FILE = "/bs/npr/listsubscriberpostpaid";

    public static final String CHECK_CUSTOMER_EXIST_EPOS = "/bs/npr/check_customer_exist";
    public static final String CHECK_COMPANY_EXIST_EPOS = "/bs/npr/check_company_exist";

    public static final String CHECK_CUSTOMER_EXIST_TIBCO = "/bs/npr/check_customer_exist_postpaid";
    public static final String CHECK_COMPANY_EXIST_TIBCO = "/bs/npr/check_company_exist_postpaid";

    public static final String CHECK_SUBSCRIBER_NUMBER_ACTIVE_EPOS = "/bs/npr/check_subscriber_number_active";

    public static final String URL_NPR_CANCEL = "/bs/npr/npr_cancel";
    public static final String URL_ACTION_NPR_CANCEL = "/bs/npr/create_npr_cancel";

    public static final String URL_DATA_VIOLATION_PORT_OUT = "/bs/violation/data_violation_portout";
    public static final String URL_DATA_SUBSCRIBER_PORT_OUT = "/bs/violation/data_subscriber_portout";
    public static final String URL_DATA_LIST_NPR_NEWS = "/bs/violation/data_list_npr_news";
    public static final String URL_UPDATE_VIOLATION_PORTOUT = "/bs/violation/update_violation_portout";
    public static final String URL_VIOLATION_VIOLATION_CHECKING = "/bs/violation/violation_violation_checking";
    public static final String URL_VIOLATION_COMMITMENT_CHECKING = "/bs/violation/violation/commitment_checking";

    public static final String URL_LIST_NPG_REQUEST_LOG_VIOLATION = "/bs/violation/list_npg_request_log_violation";

    public static final String URL_DATA_VIOLATION_PORT_IN = "/bs/violation/data_violation_portin";
    public static final String URL_DATA_SUBSCRIBER_PORT_IN = "/bs/violation/data_subscriber_portin";
    public static final String URL_DATA_LIST_NPR_NEWS_PORTIN = "/bs/violation/data_list_npr_news_portin";

    public static final String URL_VIOLATION_RESPONSE_PORT_IN = "/bs/violation/violation_response_portin";
    public static final String URL_COMMITMENT_RESPONSE_PORT_IN = "/bs/violation/commitment_response_portin";

    public static final String URL_UPDATE_VIOLATION_PORTIN = "/bs/violation/update_violation_portin";

    public static final String SUB_RETURN_DNO_NOTIFICATION = "/bs/sub_return/sub_return_dno_notification";
    public static final String SUB_RETURN_DNO_CHECK_SUBSCRIBER = "/bs/sub_return/check_subscriber";
    public static final String SUB_RETURN_LIST_SUBSCRIBER_TEMPLATE = "/bs/sub_return/list_subscriber_template";

    public static final String SUB_RETURN_DNO_REPORT = "/bs/sub_return_dno";

    public static final String REVERSAL_SUBSCRIBER_AFTER_VIOLATION = "/bs/reversal_subscriber/reversal_subscriber_after_violation";
    public static final String REVERSAL_LIST_SUBSCRIBER_VIOLATION = "/bs/reversal_subscriber/reversal_list_subscriber_after_violation";
    public static final String REVERSAL_REQUEST_AFTER_VIOLATION = "/bs/reversal_subscriber/reversal_request_after_violation";

    public static final String REVERSAL_SUBSCRIBER = "/bs/reversal_subscriber/reversal_subscriber";
    public static final String REVERSAL_LIST_SUBSCRIBER = "/bs/reversal_subscriber/reversal_list_subscriber";
    public static final String REVERSAL_REQUEST = "/bs/reversal_subscriber/send_reversal_request";

    public static final String RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_NPR_RETURN = "/bs/return_notification_original/list_npr_return_notification";
    public static final String RETURN_NOTIFICATION_ORIGINAL_NETWORK_LIST_SUBSCRIBER = "/bs/return_notification_original/list_subscriber_return_notification";
    public static final String RETURN_NOTIFICATION_ORIGINAL_CHECK_SUBSCRIBER_REVERSED = "/bs/return_notification_original/check_subscriber_reversed";
    public static final String RETURN_NOTIFICATION_NETWORK_SEND_RETURN_REQUEST = "/bs/return_notification_original/send_return_request";

    public static final String RETURN_REQUEST_LIST_SUBSCRIBER = "/bs/return_request/list_subscriber_return";
    public static final String RETURN_REQUEST_SEND_RETURN_REQUEST = "/bs/return_request/send_return_request";

    public static final String RETURN_REQUEST_CHECK_MSISDN_DESTROY = "/bs/return_request/check_msisdn_destroy";

    public static final String URL_SOURCE_PROVINCE = "/bs/SourceProvince";
    public static final String URL_SOURCE_DISTRICT = "/bs/SourceDistrict";

    public static final String URL_SOURCE_LEVEL_CUSTOMER = "/bs/SourceLevelCustomer";
    public static final String URL_SOURCE_PAYMENT_METHOD = "/bs/SourcePaymentMethod";

    public static final String URL_SOURCE_BILL_TYPE = "/bs/SourceBillType";
    public static final String URL_SOURCE_PAYMENT_TYPE = "/bs/SourcePaymentType";

    public static final String URL_SOURCE_COUNTRY_POSPAID = "/bs/SourceCountryPostpaid";
    public static final String URL_SOURCE_PACKAGE_POSPAID = "/bs/SourcePackagePostpaid";

    public static final String URL_SOURCE_COUNTRY = "/bs/SourceCountry";
    public static final String URL_SOURCE_PACKAGETYPE = "/bs/SourcePackage";

    public static final String URL_SOURCE_PACKAGETYPE_PREPAID_COS_REJECT = "/bs/SourcePackagePrepaidCosReject";

    public static final String URL_SOURCE_PACKAGETYPE_AP_DOMAIN = "/bs/SourcePackagePrepaidApDomain";

    public static final String URL_SOURCE_CUSTOMER_TYPE = "/bs/SourceCustomer";
    public static final String URL_SOURCE_NETWORK_TYPE = "/bs/SourceNetwork";

    public static final String URL_SOURCE_DOCUMENT_TYPE = "/bs/SourceDocument";

    public static final String URL_LIST_TRANSFER_NETWORK_PORT_IN = "/bs/list_transfer_network_port_in";
    public static final String URL_LIST_TRANSFER_NETWORK_PORT_OUT = "/bs/list_transfer_network_port_out";
    public static final String URL_LIST_NPR_CANCEL_RNO = "/bs/list_npr_cancel_rno";
    public static final String URL_LIST_NPR_CANCEL_DNO = "/bs/list_npr_cancel_dno";
    public static final String URL_NPR_CANCEL_DETAIL = "/bs/npr_cancel_detail";
    public static final String URL_LIST_REVERSAL_SUBSCRIBER_DNO = "/bs/list_reversal_subscriber_dno";
    public static final String URL_LIST_REVERSAL_SUBCRIBER_VNM = "/bs/list_reversal_subcriber_vnm";
    public static final String URL_LIST_RETURN_ORIGINAL_NETWORK = "/bs/list_return_original_network";
    public static final String URL_LIST_RETURN_SUBSCRIBER_VNM = "/bs/list_return_subscriber_vnm";
    public static final String URL_LIST_NPR_ACTION_AUDIT = "/bs/list_npr_action_audit";
    public static final String URL_LIST_ATTACHMENT_DATA = "/bs/list_npr_attachment_data";

    public static final String URL_MNP_PORT_OUT_LIST_SUBSCRIBER = "/bs/mnp_port_out/list_subscriber";

    public static final String URL_MNP_PORT_OUT_LIST_SUBSCRIBER_NICE_NUMBER = "/bs/mnp_port_out/list_subscriber_nice_number";

    public static final String URL_MNP_CONFIRM_REVERSAL_LIST_SUBSCRIBER = "/bs/mnp_confirm_reversal/list_subscriber";

    public static final String URL_MNP_CONFIRM_REVERSAL_ACCEPT = "/bs/mnp_confirm_reversal/send_accept_reversal";

    public static final String URL_MNP_CONFIRM_REVERSAL_REJECT = "/bs/mnp_confirm_reversal/send_reject_reversal";

    public static final String URL_MNP_PORT_OUT_ACCEPT = "/bs/mnp_port_out/send_accept_portout";

    public static final String URL_MNP_PORT_OUT_REJECT = "/bs/mnp_port_out/send_reject_portout";

    public static final String URL_LIST_NPR_PORT_OUT = "/bs/list_npr_network_port_out";

    public static final String URL_CATEGORY_ITEM_LIST_COS_REJECT = "/bs/category/list_cos_reject";

    public static final String URL_CATEGORY_ITEM_CREATE_COS_REJECT = "/bs/category/create_cos_reject";

    public static final String URL_CATEGORY_ITEM_DELETE_COS_REJECT = "/bs/category/delete_cos_reject";

    public static final String URL_CATEGORY_ITEM_LIST_SPEC_NUM_GROUP = "/bs/category/list_spec_num_group";

    public static final String URL_CATEGORY_ITEM_LIST_GROUP_MDN_REJECT = "/bs/category/list_group_mdn_reject";

    public static final String URL_CATEGORY_ITEM_CREATE_GROUP_MDN_REJECT = "/bs/category/create_group_mdn_reject";

    public static final String URL_CATEGORY_ITEM_DELETE_GROUP_MDN_REJECT = "/bs/category/delete_group_mdn_reject";

    public static final String URL_CATEGORY_ITEM_MSISDN_REJECT_LIST_TEMPLATE = "/bs/category/list_msisdn_reject_template";

    public static final String URL_CATEGORY_ITEM_VIP_WHITE_LIST_TEMPLATE = "/bs/category/list_vip_white_list_teamplate";

    public static final String URL_CATEGORY_ITEM_LIST_MSISDN_REJECT = "/bs/category/list_msisdn_reject";

    public static final String URL_CATEGORY_ITEM_CREATE_MSISDN_REJECT = "/bs/category/create_msisdn_reject";

    public static final String URL_CATEGORY_ITEM_DELETE_MSISDN_REJECT = "/bs/category/delete_msisdn_reject";

    // DatBD2
    public static final String URL_CATEGORY_ITEM_LIST_MSISDN_WHITE_LIST = "/bs/category/list_msisdn_white_list";
    public static final String URL_CATEGORY_ITEM_CREATE_MSISDN_WHITE_LIST = "/bs/category/create_msisdn_white_list";
    public static final String URL_CATEGORY_ITEM_DELETE_MSISDN_WHITE_LIST = "/bs/category/delete_msisdn_white_list";
    // end
    // DatBD2
    public static final String URL_CATEGORY_ITEM_LIST_VIP_WHITE_LIST = "/bs/category/list_vip_white_list";
    public static final String URL_CATEGORY_ITEM_CREATE_VIP_WHITE_LIST = "/bs/category/create_vip_white_list";
    public static final String URL_CATEGORY_ITEM_DELETE_VIP_WHITE_LIST = "/bs/category/delete_vip_white_list";
    public static final String URL_CATEGORY_ITEM_RE_ISSUE_VIP_WHITE_LIST = "/bs/category/reIssue_vip_white_list";
    // end
    /* duytk10 */
    public static final String URL_SEARCH_GROUP_MNP_ORDER_PREPAY = "/bs/npr/search_mnp_order_prepay";// search
    // trả
    // tước
    public static final String URL_UPDATE_GROUP_MNP_ORDER_PREPAY = "/bs/updatePreOrderTrans";// upate
    // trả
    // tước
    public static final String URL_INSERT_GROUP_MNP_ORDER_PREPAY = "/bs/insertPreOrderTrans";// insert
    // trả
    // tước

    public static final String URL_Staff_ITEM_LIST_GROUP_MNP = "/bs/satff/liststafflocation";
    public static final String URL_Staff_ITEM_SEARCH_GROUP_MNP = "/bs/satff/searchstafflocation";
    public static final String URL_Staff_ITEM_INSERT_GROUP_MNP = "/bs/satff/insertstafflocation";
    public static final String URL_Staff_ITEM_DELETE_GROUP_MNP = "/bs/satff/deletestafflocation";

    public static final String URL_CHANNEL_ITEM_LIST_GROUP_MNP_ORDER_STATUS = "/bs/channel/list_spec_num_group_order_channel";

    public static final String URL_CHANNEL_ITEM_SEARCH_GROUP_MNP_ORDER_STATUS = "/bs/channel/search_group_mnp_order_channel";

    public static final String URL_CHANNEL_ITEM_UPDATE_GROUP_MNP_ORDER_STATUS = "/bs/channel/update_group_mnp_order_channel";

    public static final String URL_CHANNEL_ITEM_CREATE_GROUP_MNP_ORDER_STATUS = "/bs/channel/create_group_mnp_order_channel";

    public static final String URL_CHANNEL_ITEM_DELETE_GROUP_MNP_ORDER_STATUS = "/bs/channel/delete_group_mnp_order_channel";

    public static final String URL_STATUS_ITEM_LIST_GROUP_MNP_ORDER_STATUS = "/bs/status/list_spec_num_group_order_status";

    public static final String URL_STATUS_ITEM_SEARCH_GROUP_MNP_ORDER_STATUS = "/bs/status/search_group_mnp_order_status";

    public static final String URL_STATUS_ITEM_UPDATE_GROUP_MNP_ORDER_STATUS = "/bs/status/update_group_mnp_order_status";

    public static final String URL_STATUS_ITEM_CREATE_GROUP_MNP_ORDER_STATUS = "/bs/status/create_group_mnp_order_status";

    public static final String URL_STATUS_ITEM_DELETE_GROUP_MNP_ORDER_STATUS = "/bs/status/delete_group_mnp_order_status";

    public static final String URL_PREORDER_INFORMATION_LIST = "/bs/preRequest/listPreRequest";

    public static final String URL_PREORDER_INFORMATION_DETAIL = "/bs/preRequest/detailPreRequest";

    public static final String URL_PREORDER_INFORMATION_CREATE = "/bs/preRequest/createPreRequest";

    public static final String URL_PREORDER_INFORMATION_UPDATE = "/bs/preRequest/updatePreRequest";

    public static final String URL_PREORDER_INFORMATION_DELETE = "/bs/preRequest/deletePreRequest";

    public static final String URL_PREORDER_INFORMATION_CHECK_FINAL = "/bs/preRequest/checkFinal";

    public static final String URL_PREORDER_INFORMATION_CHECK_TRAN_STATUS = "/bs/preRequest/checkTranStatus";

    public static final String URL_UPDATE_STAFF_PREORDER = "/bs/preRequest/updateStaffPre";

    public static final String URL_STAFF_LIST = "/bs/staff/listStaff";

    public static final String URL_ASSIGN_LIST_PREORDER = "/bs/staff/listPreoder";

    public static final String URL_ASSIGN_STAFF = "/bs/staff/assignStaff";

    public static final String URL_STAFF_LIST_LOCATION = "/bs/staff/listStaffLocation";
    /*--------------*/
    /* end url constants */

    /**
     * Status record DB.
     */
    public static final String NPR_RNO = "RNO";
    public static final String NPR_DNO = "DNO";

    public static final String PRIMARY_SUBSCRIBER = "Y";
    public static final String NONE_PRIMARY_SUBSCRIBER = "N";

    public static final String STEP_STATUS_COMPLETE = "COMPLETED";
    public static final String STEP_STATUS_TERMINATION = "TERMINATION";
    public static final String STEP_STATUS_PROCESSING = "PROCESSING";
    public static final String STEP_STATUS_CANCELED = "CANCELED";
    public static final String STEP_STATUS_STARTING = "STARTING";

    public static final String FLAG_NPR_VIOLATION = "Y";
    public static final String FLAG_NPR_NONE_VIOLATION = "N";

    public static final String NPR_APPROVED = "APPROVED";
    public static final String NPR_REJECT = "REJECT";

    public static final String VIOLATION_APPROVED = "APPROVED";
    public static final String VIOLATION_REJECT = "REJECT";

    public static final String VIOLATION_STATUS_CLEAR = "CLEAR";
    public static final String VIOLATION_STATUS_VIOLATION = "VIOLATION";

    public static final String VIOLATION_STATUS_CLEAR_TEXT = "Hoàn thành";
    public static final String VIOLATION_STATUS_VIOLATION_TEXT = "Hậu kiểm";

    public static final String VIOLATION_STATUS_VIOLATION_SEARCH_CODE = "03";

    public static final String VIOLATION_STATUS_ACCEPT_REVERSAL = "ACCEPT REVERSAL";
    public static final String VIOLATION_STATUS_REVERSED = "REVERSED";

    public static final String VIOLATION_STATUS_REVERSED_TEXT = "Đã hoàn trả";

    public static final String VIOLATION_STATUS_ACCEPT_REVERSAL_SEARCH_CODE = "01";
    public static final String VIOLATION_STATUS_REVERSED_SEARCH_CODE = "02";

    public static final String VIOLATION_STATUS_ACCEPT_REVERSAL_CODE = "02";
    public static final String VIOLATION_STATUS_REVERSED_CODE = "03";

    public static final String VIOLATION_STATUS_VIOLATION_CODE = "01";
    public static final String VIOLATION_STATUS_CLEAR_CODE = "02";

    public static final String VIOLATION_STATUS_NONE_CODE = "00";
    public static final String VIOLATION_STATUS_REQUEST_REVERSAL_CODE = "01";
    public static final String VIOLATION_STATUS_APPROVE_CODE = "02";

    public static final String VIOLATION_STATUS_NONE = "NONE";
    public static final String VIOLATION_STATUS_APPROVE = "APPROVE";

    public static final String VIOLATION_STATUS_REQUEST_REVERSAL = "REQUEST REVERSAL";
    public static final String VIOLATION_STATUS_REQUEST_REVERSAL_TEXT = "Yêu cầu hoàn trả";

    public static final String SELECTED_COMBOBOX_ALL = "ALL";
    public static final String RECORD_STATUS = "1";
    public static final String PACKAGE_STATUS = "opencos";
    public static final String PACKAGE_POSTPAID_TYPE = "cospost";
    public static final String CUSTOMER_TYPE = "42";

    public static final String APP_TYPE_FAMILY = "FAMILY";
    public static final String APP_TYPE_CONSUMER = "CONSUMER";
    public static final String APP_TYPE_CORPORATE = "CORPORATE";

    public static final String CGC_TYPE_PAYMENT_METHOD = "PAYMENT_METHOD";
    public static final String CGC_TYPE_COLLECTOR_AGENCY = "COLLECTOR_AGENCY";
    public static final String CGC_TYPE_BILL_MEDIA = "BILL_MEDIA";
    public static final String CGC_ACCESS_RIGHT_S = "S";
    public static final String CGC_GL_CODE_GROUP = "GL_LIST";

    public static final String CGC_TYPE_PACKAGE_CLASS = "PACKAGE_CLASS";
    public static final String CGC_TYPE_WRITTEN_LANGUAGE_CODE = "WRITTEN_LANGUAGE_CODE";

    public static final String NPR_MESSAGE_TYPE = "NPR";
    public static final String NPR_MESSAGE_VIOLATION_PORT_OUT_COMMITMENT = "NP Commitment Checking";
    public static final String NPR_MESSAGE_VIOLATION_PORT_OUT_CHECKING = "NP Violation Checking";

    public static final String NPR_MESSAGE_VIOLATION_COMMITMENT_RESPONSE = "NP Commitment Response";
    public static final String NPR_MESSAGE_VIOLATION_RESPONSE = "NP Violation Response";

    /* step begin */
    public static final String NPR_MESSAGE_REVERSAL_NOTIFICATION = "NP Reversal Notification";

    public static final String NPR_MESSAGE_REVERSAL_REQUEST = "NP Reversal Request";
    public static final String NPR_NP_REVERSAL_ACCEPT = "NP Reversal Accept";
    public static final String NPR_MESSAGE_NP_REVERSAL_REJECT = "NP Reversal Reject";

    public static final String NPR_MESSAGE_NP_REVERSAL_EXECUTE = "NP Reversal Execute";
    public static final String NPR_MESSAGE_NP_REVERSAL_DEACTIVATED = "NP Reversal Deactivated";
    public static final String NPR_MESSAGE_NP_REVERSAL_ACTIVATED = "NP Reversal Activated";

    public static final String NPR_MESSAGE_NP_REVERSAL_ACTIVATED_BROADCAST = "NP Reversal Activated Broadcast";
    public static final String NPR_MESSAGE_NP_REVERSAL_ROUTING_UPDATED = "NP Reversal Routing Updated";

    public static final String NPR_MESSAGE_ACCEPT = "NPR Accept";
    public static final String NPR_MESSAGE_REJECT = "NPR Reject";

    public static final String NPR_MESSAGE_ACCEPT_SUCCESS = "NPC0000";
    public static final String NPR_MESSAGE_REJECT_SUCCESS = "NPC0000";
    /* step end */

    public static final String NPR_MESSAGE_NP_RETURN_NOTIFICATION = "NP Return Notification";

    public static final String NPR_MESSAGE_NP_RETURN_REQUEST = "NP Return Request";
    public static final String NP_RETURN_ACTIVATED_BROADCAST = "NP Return Activated Broadcast";
    public static final String NP_RETURN_ROUTING_UPDATED = "NP Return Routing Updated";

    public static final String STEP_STATUS_CANCEL = "CANCEL";
    public static final String NPR_CANCEL_REQUEST_TYPE = "NP Cancel Request";
    public static final String NP_CANCEL_NOTIFICATION = "NP Cancel Notification";

    public static final String NPR_PORT_TYPE_MOBILE = "MOBILE";

    public static final String NPR_SUB_TYPE_PRIVATE = "1";
    public static final String NPR_SUB_TYPE_FOREIGN = "1";
    public static final String NPR_SUB_TYPE_COMPANY = "2";
    public static final String NPR_SUB_TYPE_STAFT = "2";

    public static final String DOC_TYPE_CMND = "01";
    public static final String DOC_TYPE_HOCHIEU = "02";
    public static final String DOC_TYPE_THECANCUOC = "03";
    public static final String DOC_TYPE_GPKG = "04";
    public static final String DOC_TYPE_QDTL = "05";
    public static final String DOC_TYPE_MASOTHUE = "06";
    public static final String DOC_TYPE_HOKHAU = "07";

    public static final int MAX_LENGTH_PRIVATE_RECORD = 3;
    public static final int MAX_LENGTH_COMPANY_RECORD = 101;

    public static final String NPR_SUB_TYPE_INDIVIDUAL = "Individual";
    public static final String NPR_SUB_TYPE_CORPORATION = "Corporate";

    public static final String NPR_SUB_TYPE_INDIVIDUAL_TEXT = "Cá nhân";
    public static final String NPR_SUB_TYPE_CORPORATION_TEXT = "Doanh nghiệp";

    public static final String NPR_VNM_SENDER = "05";
    public static final String NPR_VNM_RECEIPTENT = "05";
    public static final String NPR_MESSAGE_ID = "16515";// Test Need change
    public static final String COMMON_IMAGE = "COMMON_IMAGE";

    public static final int KO_FILE_ERROR_CODE = 500;
    public static final String KO_FILE_ERROR_STR = "File không hợp lệ";

    public static final Integer KO_PACKAGE_TYPE_CODE = 501;
    public static final String KO_PACKAGE_TYPE_STR = "Gói cước không hợp lệ!";

    public static final Integer KO_SERIAL_SIM_TYPE_CODE = 502;
    public static final String KO_SERIAL_SIM_TYPE_STR = "Số serial sim không hợp lệ";

    public static final Integer ACCOUNT_TYPE_ERROR = 503;
    public static final String MESSAGE_ACCOUNT_TYPE_ERROR = "Loại thuê bao không hợp lệ ";

    public static final Integer KO_ATTACH_FILE_ERROR_CODE = 504;
    public static final String KO_ATTACH_FILE_ERROR_CODE_STR = "Danh sách file không hợp lệ ";

    public static final Integer EMTPY_VALUE_ERROR_CODE = 505;
    public static final String EMTPY_VALUE_ERROR_CODE_STR = "Dữ liệu không hợp lệ !";

    public static final Integer SERVICE_SOAP_ERROR_CODE = 506;
    public static final String SERVICE_SOAP_ERROR_STR = "Lỗi khi kết nối tới CCH ";

    public static final Integer SERVICE_SOAP_UNSUCCESS_CODE = 507;
    public static final String SERVICE_SOAP_UNSUCCESS_STR = "Thực hiện không thành công ";

    public static final String HTTP_STATUS_OK = "OK";
    public static final Integer HTTP_STATUS_CODE_OK = 200;

    public static final String HTTP_STATUS_ERROR = "KO";

    public static final Integer COMMON_ERROR = 80000;
    public static final String COMMON_ERROR_MESSAGE = "Có lỗi xảy ra.";

    public static final Integer EMPTY_VALUE_MESSAGE_CODE = 90000;
    public static final String EMPTY_VALUE_MESSAGE = "Không tìm thấy dữ liệu phù hợp";

    public static final Integer UPDATE_DB_STATUS_OK = 90001;
    public static final String UPDATE_DB_STATUS_OK_MESSAGE = "Update dữ liệu vào DB OK.";

    public static final Integer UPDATE_DB_STATUS_KO = 90002;
    public static final String UPDATE_DB_STATUS_KO_MESSAGE = "Update dữ liệu vào DB KO.";

    public static final Integer VIOLATION_RESPONSE_MESAGE_CODE = 90003;
    public static final String VIOLATION_RESPONSE_MESAGE = "Không có thuê bao phải hậu kiểm";

    public static final Integer NUMBER_REVERSING_ERROR = 90004;
    public static final String MESS_NUMBER_REVERSING_ERROR = "Mã yêu cầu chuyển mạng hoặc thuê bao đang trong quá trình hoàn trả";

    public static final Integer MNP_CANCEL_SUCCESS = 90005;
    public static final String MNP_CANCEL_SUCCESS_MESS = "Hủy chuyển mạng đến thành công !. ";

    public static final Integer MNP_CANCEL_INSERT_ERROR = 90006;
    public static final String MNP_CANCEL_INSERT_ERROR_MES = "Hủy chuyển mạng không thành công. Lỗi khi insert DB. ";

    public static final Integer SUBSCRIBER_NONE_REVERSED_COMPLETED = 90007;
    public static final String SUBSCRIBER_NONE_REVERSED_COMPLETED_MES = "Số thuê bao không trong quá trình hoàn trả";

    public static final Integer SUBSCRIBER_REVERSED_COMPLETED = 90008;
    public static final String SUBSCRIBER_REVERSED_COMPLETED_MES = "Số thuê bao đang trong quá trình hoàn trả";

    public static final Integer NPR_REVERSAL_NOTIFICATION_OK = 90010;
    public static final String NPR_REVERSAL_NOTIFICATION_OK_MESS = "Gửi yêu cầu thông báo hoàn trả số về DNO thành công !";

    public static final Integer SEND_REVERSAL_REQUEST_OK = 90011;
    public static final String SEND_REVERSAL_REQUEST_MESS = "Tạo yêu cầu hoàn trả số thành công ! Mã yêu cầu hoàn trả : ";

    public static final Integer SEND_CREATE_NPR_ERROR = 90012;
    public static final String SEND_CREATE_NPR_ERROR_MESS = "Lỗi khi gửi bản tin yêu cầu chuyển mạng";

    public static final Integer SEND_RETURN_REQUEST_OK = 90012;
    public static final String SEND_RETURN_REQUEST_MESS = "Đã gửi yêu cầu trả số về nhà mạng gốc đến cục viễn thông ! Mã yêu cầu : ";

    public static final Integer MSISDN_DESTROY_OK = 90013;
    public static final String MSISDN_DESTROY_OK_MESS = "Số thuê bao đã được hủy thành công trên hệ thống !";

    public static final Integer MSISDN_DESTROY_KO = 90014;
    public static final String MSISDN_DESTROY_KO_MESS = "Số thuê bao chưa được hủy tại nhà Vietnamobile !";

    public static final Integer NPR_NOT_FOUND = 90015;
    public static final String NPR_NOT_FOUND_MESS = "Số thuê bao không có trong quy trình chuyển mạng !";

    public static final Integer SERIAL_SIM_KO = 90016;
    public static final String SERIAL_SIM_KO_MESS = "Số serial sim không hợp lệ !";

    public static final Integer SEND_CCH_CREATE_NPR_OK = 90017;
    public static final String SEND_CCH_CREATE_NPR_OK_MESS = "Gửi yêu cầu chuyển mạng đến cục viễn thông thành công ! Mã yccm : ";

    public static final Integer VALIDATE_LIST_CUSTOMER_KO = 90018;
    public static final String VALIDATE_LIST_CUSTOMER_KO_MES = "Dữ liệu trong danh sách không hợp lệ. Xem trạng thái trong bảng danh sách thuê bao!";

    public static final Integer CUSTOMER_EXIS_EPOS = 90019;
    public static final String CUSTOMER_EXIS_EPOS_MESS = "Thông tin khách hàng đã tồn tại trên hệ thống !";

    public static final Integer MAX_LENGTH_TEM_PRIV_RECORD_ERROR = 90020;
    public static final String MAX_LENGTH_TEMP_PRIV_RECORD_ERROR_MES = "Số thuê bao tối đa cho khách hàng cá nhân là 3 !";

    public static final Integer MAX_LENGTH_TEM_COM_RECORD_ERROR = 90021;
    public static final String MAX_LENGTH_TEM_COM_RECORD_ERROR_MES = "Số thuê bao tối đa cho khách hàng doanh nghiệp là 100! ";

    public static final Integer CHECK_MSISDN_PORT_IN_COMPLETED = 90022;
    public static final String MESS_CHECK_MSISDN_PORT_IN_COMPLETED = "Số thuê bao không có trong quy trình chuyển mạng !";

    public static final Integer CHECK_MSISDN_BY_NETWORK_PORT_IN_COMPLETED = 90023;
    public static final String MESS_CHECK_MSISDN_BY_NETWORK_PORT_IN_COMPLETED = "Số thuê bao chuyển mạng không thuộc nhà mạng!";

    public static final Integer NUMBER_REVERSED_OK = 90024;
    public static final String MESS_NUMBER_REVERSED_OK = "Mã yêu cầu chuyển mạng hoặc thuê bao đã hoàn trả";

    public static final Integer COMPANY_EXIS_EPOS = 90025;
    public static final String COMPANY_EXIS_EPOS_MESS = "Công ty đã tồn tại trên hệ thống !";

    public static final Integer CUSTOMER_FOREIGN_EXIST_EPOS = 90026;
    public static final String MESS_CUSTOMER_FOREIGN_EXIST_EPOS = "+ CMT đang tồn tại trong hệ thống với loại KH người nước ngoài. !";

    public static final Integer CUSTOMER_PRIVATE_EXIST_EPOS = 90027;
    public static final String MESS_CUSTOMER_PRIVATE_EXIST_EPOS = "+ CMT đang tồn tại trong hệ thống với loại KH cá nhân. !";

    public static final Integer SUBSCRIBER_NUMBER_ACTIVE_EPOS = 90028;
    public static final String MESS_SUBSCRIBER_NUMBER_ACTIVE_EPOS = "+ Số thuê bao đang hoạt động trên hệ thống vietnamobile, không thể thực hiện yêu cầu chuyển mạng. !";

    public static final Integer LIST_MSISDN_RETURN_DNO_KO = 90029;
    public static final String MESS_LIST_MSISDN_RETURN_DNO_KO = "Dữ liệu trong danh sách thuê bao không hợp lệ. Chọn lại số thuê bao !";

    public static final Integer NPR_MESSAGE_ACCEPT_CODE = 90030;
    public static final String NPR_MESSAGE_ACCEPT_MESS = "Gửi bản tin đồng ý chuyển mạng đến cục viễn thông thành công !";

    public static final Integer NPR_MESSAGE_REJECT_CODE = 90031;
    public static final String NPR_MESSAGE_REJECT_MESS = "Gửi bản tin từ chối chuyển mạng đến cục viễn thông thành công !";

    public static final int MES_DOCUMENT_LENGTH_ERROR_CODE = 90032;

    public static final Integer NPR_MESSAGE_FORCE_CASE_ERROR = 90033;
    public static final String NPR_MESSAGE_FORCE_CASE_ERROR_STR = "Giao dịch chuyển mạng là trường hợp FORCE CASE.";

    public static final Integer TEMPLATE_REQUIRED_CUSTOMER_TYPE_COMPANY_ERROR = 90034;
    public static final String MESS_TEMPLATE_REQUIRED_CUSTOMER_TYPE_COMPANY = "Danh sách trả trước phải có một khách hàng với loại khách hàng là công ty.";

    public static final Integer PRIMARY_NUMBER_ERROR = 90035;
    public static final String MESS_PRIMARY_NUMBER_ERROR = "Danh sách chuyển mạng không có số primary.";

    public static final Integer ACCEPT_REVERSAL_ALERT = 90036;
    public static final String ACCEPT_REVERSAL_ALERT_MSG = "Cảnh báo khi accept bản tin reversal.";

    public static final Integer MNP_CATEGORY_COS_ITEM_EXIST = 90037;
    public static final String MNP_CATEGORY_COS_ITEM_EXIST_MSG = "Không thể insert. Gói cước đã tồn tại.";

    public static final String MNP_CATEGORY_GROUP_MDN_ITEM_EXIST_MSG = "Không thể insert. Loại số đã tồn tại.";

    public static final String MNP_CATEGORY_MSISDN_ITEM_EXIST_MSG = "Không thể thêm mới. Số thuê bao đã tồn tại";

    public static final String MNP_CATEGORY_PRE_MSISDN_NOT_EXIST_VNM_MSG = "Số thuê bao không hoạt động trên hệ thống trả trước Vietnamobile.";

    public static final String MNP_CATEGORY_POST_MSISDN_NOT_EXIST_VNM_MSG = "Số thuê bao không hoạt động trên hệ thống trả sau Vietnamobile.";

    public static final String MNP_CATEGORY_COS_PACKAGE_REQUIRED_MSG_FORM = "mess.cos.required";
    public static final Integer MNP_CATEGORY_COS_PACKAGE_REQUIRED = 90038;
    public static final String MNP_CATEGORY_COS_PACKAGE_REQUIRED_MSG = "Hãy hãy nhập gói cước";

    public static final String MNP_CATEGORY_COS_MSISDN_TYPE_REQUIRED_MSG_FORM = "Yêu cầu nhập loại số";
    public static final String MNP_CATEGORY_TYPE_OF_MSISDNTYPE_REQUIRED = "Loại số chỉ được phép nhập: Trả trước hoặc Trả sau";
    public static final Integer MNP_CATEGORY_COS_MSISDN_TYPE_REQUIRED = 90039;

    public static final String MNP_CATEGORY_STATUS_OF_MSISDNTYPE_REQUIRED = "Trạng thái chỉ được phép nhập: 1 hoặc 0 (1-Có hiệu lực, 0- Không hiệu lực)";

    public static final Integer MNP_CATEGORY_GROUP_MDN_ITEM_REQUIRED = 90040;
    public static final String MNP_CATEGORY_GROUP_MDN_ITEM_REQUIRED_MSG = "Yêu cầu nhập loại số";

    public static final String MNP_CATEGORY_COS_STATUS_VIP_WHITE_LIST = "Yêu cầu nhập trạng thái số";

    public static final String MNP_CATEGORY_MSISDM_REQUIRED_MSG_FORM = "Yêu cầu nhập số thuê bao.";
    public static final String MNP_CATEGORY_MSISDM_REQUIRED_MSG = "Hãy nhập số thuê bao";
    public static final String MNP_CATEGORY_MSISDM_MAX_LENGTH_WITH_ZERO = "Số thuê bao chỉ nhập 10 ký tự";
    public static final String MNP_CATEGORY_VIP_WHITE_LIST_CHECK_MSISDN = "Yêu cầu số thuê bao bắt đầu bằng đầu 0";
    public static final String MNP_CATEGORY_MSISDM_MAX_LENGTH_ERROR_FORM = "Số thuê bao chỉ nhập 9 hoặc 10 ký tự.";
    public static final String MNP_CATEGORY_MSISDM_NUMBER_REQUIRED = "Số thuê bao chỉ bao gồm ký tự số ! ";
    public static final String MNP_CATEGORY_MSISDN_IN_BLACK_LIST = "Số thuê bao đang nằm trong blacklist ! Yêu cầu hủy trong blacklist trước khi thêm vào whitelist. ";

    public static final String MNP_CATEGORY_MSISDN_IN_WHITE_LIST = "Số thuê bao đang nằm trong whitelist ! Yêu cầu hủy trong whitelist trước khi thêm vào blacklist. ";
    public static final String MNP_CATEGORY_MSISDN_INSERT_UPDATE = "Thêm số thuê bao thành công.";
    public static final String MNP_CATEGORY_COMMON_ERROR = "Có lỗi xảy ra.";

    public static final long STEP_CREATE_NPR = 1;
    public static final long STEP_CREATE_2_NPR = 2;
    public static final long STEP_CREATE_3_NPR = 3;
    public static final long STEP_NPR_PORT_OUT = 30;
    public static final String STEP_TEXT_FAILED_NPR_PORT_OUT = "FAILED";

    public static final String STEP_PORT_OUT_NP_ROUTING_UPDATED = "NP Routing Updated";
    public static final String STEP_PORT_OUT_NP_ACTIVATED_BROADCAST = "NP Activated Broadcast";

    public static final String STEP_PORT_IN_NP_ACTIVATED = "NP Activated";

    public static final String EMPTY_VALUE = "";
    public static final String DECIMAL_FORMAT = "0.#####";

    public static final String TYPE_CUS_CMT1 = "CUS_CMT1";
    public static final String TYPE_CUS_CMT2 = "CUS_CMT2";
    public static final String TYPE_CUS_HD1 = "CUS_HD1";
    public static final String TYPE_CUS_HD2 = "CUS_HD2";
    public static final String TYPE_CUS_GPKD = "CUS_GPKD";
    public static final String TYPE_CUS_KH = "CUS_KH";
    public static final String TYPE_CUS_HS1 = "CUS_HS1";
    public static final String TYPE_CUS_HS2 = "CUS_HS2";
    public static final String TYPE_CUS_GUQ = "CUS_GUQ";
    public static final String TYPE_CUS_SUB_HD1 = "CUS_SUB_HD1";
    public static final String TYPE_CUS_SUB_HD2 = "CUS_SUB_HD2";

    // DatBD2
    public static final String TYPE_CUS_CMT1_PAR = "CUS_CMT1_PAR";
    public static final String TYPE_CUS_CMT2_PAR = "CUS_CMT2_PAR";
    public static final String TYPE_CUS_KH_PAR = "CUS_KH_PAR";
    public static final String TYPE_CUS_GPKD2 = "CUS_GPKD2";
    public static final String TYPE_CUS_DSKHC = "CUS_DSCN";
    // end

    // column index in template list
    public static final int INDEX_SUB_NAME = 1;
    public static final int INDEX_SUB_BIRTHDAY = 2;
    // DatBD2
    public static final int INDEX_SUB_TYPE_CARD = 3; // DatBD2 thêm cột này
    public static final int INDEX_SUB_ISSUE_NUMBER = 4;
    public static final int INDEX_SUB_GENDER = 5;
    public static final int INDEX_SUB_CUSTOMER_TYPE = 6;
    public static final int INDEX_SUB_MSISDN = 7;
    public static final int INDEX_SUB_ICCID = 8;
    public static final int INDEX_ACCOUNTYPE_DNO = 9;
    public static final int INDEX_SUB_ISSUE_PLACE = 10;
    public static final int INDEX_SUB_ISSUE_DATE = 11;
    public static final int INDEX_SUB_ADDRESS = 12;
    public static final int INDEX_SUB_COUNTRY = 13;

    public static final int INDEX_SUB_IMG_CMT01 = 14;
    public static final int INDEX_SUB_IMG_CMT02 = 15;
    public static final int INDEX_SUB_IMG_KH = 16;
    public static final int INDEX_SUB_IMG_HS1 = 17;
    public static final int INDEX_SUB_IMG_HS2 = 18;
    public static final int INDEX_SUB_IMG_HD01 = 19;
    public static final int INDEX_SUB_IMG_HD02 = 20;
    public static final int INDEX_SUB_IMG_GPKD = 21;
    public static final int INDEX_SUB_IMG_GPKD2 = 22;
    public static final int INDEX_SUB_IMG_DSKHC = 23;
    public static final int INDEX_SUB_IMG_GUQ = 24;

    // End DATBD2

    // column index in template list
    public static final int POSTPAID_INDEX_CUSTOMER_NAME = 1;
    public static final int POSTPAID_INDEX_GENDER = 2;
    public static final int POSTPAID_INDEX_BIRTHDAY = 3;
    public static final int POSTPAID_INDEX_MSISDN = 4;
    public static final int POSTPAID_INDEX_ICCID = 5;
    public static final int POSTPAID_INDEX_ACCOUNTYPE_DNO = 6;
    public static final int POSTPAID_INDEX_ISSUE_NUMBER = 7;
    public static final int POSTPAID_INDEX_ISSUE_PLACE = 8;
    public static final int POSTPAID_INDEX_ISSUE_DATE = 9;
    public static final int POSTPAID_INDEX_COUNTRY = 10;
    public static final int POSTPAID_INDEX_EMAIL = 11;
    public static final int POSTPAID_INDEX_CONTACT_NUMBER = 12;
    public static final int POSTPAID_INDEX_ADD_BILL_PROVINCE = 13;
    public static final int POSTPAID_INDEX_ADD_BILL_DISTRICT = 14;
    public static final int POSTPAID_INDEX_ADD_BILL_TOWN = 15;
    public static final int POSTPAID_INDEX_ADD_BILL_ROAD = 16;
    public static final int POSTPAID_INDEX_ADD_BILL_NUMBER_HOME = 17;
    public static final int POSTPAID_INDEX_ADD_BILL_BUILDING = 18;
    public static final int POSTPAID_INDEX_ADD_BILL_NUMBER_ROOM = 19;

    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_PROVINCE = 20;
    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_DISTRICT = 21;
    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_TOWN = 22;
    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_ROAD = 23;
    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_NUMBER_HOME = 24;
    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_BUILDING = 25;
    public static final int POSTPAID_INDEX_ADD_NOTI_BILL_NUMBER_ROOM = 26;

    public static final int POSTPAID_INDEX_BILL_ACCOUNT_INFO_PAYMENT_METHOD = 27;
    public static final int POSTPAID_INDEX_BILL_ACCOUNT_INFO_PAYMENT_TYPE = 28;
    public static final int POSTPAID_INDEX_BILL_ACCOUNT_INFO_BILL_TYPE = 29;

    public static final int SUB_RETURN_INDEX_SUBSCRIBER = 1;

    public static final String ACCOUNT_TYPE_PREPAID = "Prepaid";
    public static final String ACCOUNT_TYPE_PREPAID_STR = "Trả trước";
    public static final String ACCOUNT_TYPE_POSTPAID = "Postpaid";
    public static final String ACCOUNT_TYPE_POSTPAID_STR = "Trả sau";

    public static final String ActiveNumber = "1";
    public static final String NotActiveNumber = "0";

    public static final String IMAGE_PNG = "PNG";
    public static final String IMAGE_JPG = "JPG";

    public static final String GENDER_MALE = "0";
    public static final String GENDER_MALE_STR = "Nam";

    public static final String GENDER_FEMALE = "1";
    public static final String GENDER_FEMALE_STR = "Nữ";

    // Loại khách hàng
    public static final String CUSTOMER_TYPE_PRIVATE = "1";
    public static final String POSTPAID_CUSTOMER_TYPE_PRIVATE = "Family";
    public static final String CUSTOMER_TYPE_PRIVATE_STR = "Cá nhân";

    public static final String CUSTOMER_TYPE_FOREIGN = "1";
    public static final String CUSTOMER_TYPE_FOREIGN_STR = "Cá nhân";

    public static final String CUSTOMER_TYPE_COMPANY = "2";
    public static final String POSTPAID_CUSTOMER_TYPE_COMPANY = "Corporate";
    public static final String CUSTOMER_TYPE_COMPANY_STR = "Tổ chức";

    public static final String CUSTOMER_TYPE_STAFT = "2";
    public static final String CUSTOMER_TYPE_STAFT_STR = "Tổ chức";
    public static final String SLASH = "/";
    public static final String NPR_SUCCESS = "NPC0000";
    public static final String NPR_VIOLATION_SUCCESS = "HUK0000";

    public static final String NPR_REVERSAL_NOTIFICATION_SUCCESS = "NPC0000";

    public static final String NPR_REVERSAL_REQUEST = "NPC0000";
    public static final String NPR_RETURN_REQUEST = "NPC0000";

    // max ,min number
    public static final int MAX_MSISDN = 12;
    public static final int MIN_MSISDN = 11;

    public static final int MAX_MSISDN_WITHOUT_84 = 10;
    public static final int MIN_MSISDN_WITHOUT_84 = 9;

    public static final int MAX_MSISDN_WITH_ZERO = 11;
    public static final int MIN_MSISDN_WITH_ZERO = 10;

    public static final int LENGTH_MSISDN = 10;
    // max ,min SERIAL SIM
    public static final int MAX_SERIAL_SIM = 20;
    public static final int MIN_SERIAL_SIM = 19;

    // max, min document number issue
    public static final int MAX_DOCUMENT_ISSUE = 15;
    public static final int MIN_DOCUMENT_ISSUE = 8;

    public static final int MIN_ADDRESS = 5;
    public static final int MIN_DOC_ISSUE_PLACE = 5;

    public static final String START_ZEZO = "0";
    public static final String VILATION_STATUS_MODEL = "nprStatusModel";

    public static final String STATUS_SERIAL_SIM = "1";

    public static final String STATUS_SERIAL_BLANK_SIM = "BLANKSIMFREE";
    public static final String STATUS_SERIAL_NONE_BLANK_SIM = "Sim mới không có trong kho";
    public static final String STATUS_SERIAL_USED = "Sim đã được sử dụng, hãy nhập sim khác!";
    public static final String MESSAGE_SERIAL_SIM_POSTPAID = "Sim trả sau, bạn phải chuyển đổi loại sim !";

    public static final String HLR_STATUS = "1";
    public static final String AUC_STATUS = "0";
    public static final String MOB_TYPE_PREPAID = "P";
    public static final String HLR_ID = "1";
    public static final String MOB_TYPE_POSTPAID = "N";

    public static final String VALIDATE_OK = "VALIDATE_OK";

    public static final String TEMP_DOC_ISSUE_PLACE_REQUIRED = "+ Yêu cầu nhập nơi cấp !";
    public static final String TEMP_DOC_ISSUE_PLACE_MAX_LENGTH = "+ Nơi cấp không nhỏ hơn 5 ký tự ! ";
    public static final String TEMP_DOC_ISSUE_PLACE_EXIST = "+ Nơi cấp phải trùng nhau ! ";

    public static final String TEMP_DOC_ISSUE_DATE_REQUIRED = "+ Yêu cầu nhập ngày cấp ! ";
    public static final String TEMP_DOC_ISSUE_DATE_TYPE_REQUIRED = "+ Ngày cấp phải đúng định dạng dd/mm/yyyy ! ";
    public static final String TEMP_DOC_ISSUE_DATE_EXIST = "+ Ngày cấp phải trùng nhau ! ";

    public static final String TEMP_TYPE_CARD = " + Loại giấy tờ không hợp lệ. Loại giấy tờ hợp lệ : 01 - CMND ; 02 - Hộ chiếu ; 03 - Thẻ căn cước";

    public static final String MES_DOC_ISSUE_NUMBER_EMPTY = "+ Yêu cầu số CMND";
    public static final String MES_DOC_ISSUE_NUMBER_EXIS = "+ Số CMND không được trùng lặp ";
    public static final String MES_DOCUMENT_LENGTH_ERROR = "+ Số CMT không được nhỏ hơn 8 và không lớn hơn 15 ký tự";

    public static final String MES_DOC_ISSUE_NUMBER_DUPLICATE = "+ Số giấy tờ phải trùng nhau !";

    public static final String TEMPLATE_GENDER_REQUIRED = "+ Yêu cầu nhập giới tính ! ";
    public static final String MES_DOC_GENDER_DUPLICATE = "+ Giới tính phải trùng nhau ! ";
    public static final String TEMPLATE_MSISDN_REQUIRED = "+ Yêu cầu nhập số thuê bao ! ";
    public static final String MES_DOC_GENDER_ONLY_MALE_FEMALE = "+ Giới tính chỉ được nhập 0 hoặc 1 ! ";
    public static final String MES_DOC_GENDER_ONLY_MALE_FEMALE_STR = "+ Giới tính chỉ được nhập Nam hoặc Nữ ! ";

    public static final String TEMPLATE_MSISDN_EXIST = "+ Số thuê bao không được trùng lặp ! ";
    public static final String TEMPLATE_MSISDN_ERROR = "+ Số thuê bao không hợp lệ ! ";
    public static final String TEMPLATE_MSISDN_ACTIVE_EPOS = "+ Số thuê bao đang hoạt động trên hệ thống vietnamobile ! ";

    public static final String TEMPLATE_SERIAL_SIM_REQUIRED = "+ Yêu cầu nhập số ICCID ! ";
    public static final String TEMPLATE_SERIAL_SIM_EXIST = "+ Số ICCID không được trùng lặp ! ";

    public static final String TEMP_BIRTHDAY_REQUIRED = "+ Yêu cầu nhập ngày sinh ! ";
    public static final String BIRTHDAY_GREATER_MAX_MIN = "+ Tuổi phải lớn hơn 14 và nhỏ hơn 100 ! ";
    public static final String TEMP_BIRTHDAY_EXIST = "+ Yêu cầu ngày sinh trùng nhau ! ";
    public static final String TEMP_BIRTHDAY_TYPE_REQUIRED = "+ Ngày sinh phải đúng định dạng dd/mm/yyyy ! ";
    public static final String TEMP_BIRTHDAY_GREATER_TODAY = "+ Ngày sinh không lớn hơn ngày hiện tại! ";

    public static final String DOC_ISSUE_DATE_EXPIRED = "+ CMND chỉ có thời hạn 15 năm ! ";
    public static final String DOC_ISSUE_DATE_GREATER_TODAY = "+ Ngày cấp không lớn hơn ngày hiện tại! ";

    public static final String TEMPLATE_IMAGE_REQUIRED = "+ Yêu cầu nhập ảnh CMT1 ! ";
    public static final String TEMPLATE_IMAGE_TYPE_REQUIRED = "+ File ảnh CMT1 không đúng định dạng. Định dang đúng png, jpg ! ";

    public static final String TEMPLATE_IMAGE2_TYPE_REQUIRED = "+ File ảnh CMT2 không đúng định dạng. Định dang đúng png, jpg ! ";

    public static final String TEMPLATE_IMAGE_HD1_REQUIRED = "+ Yêu cầu nhập ảnh HD1 ! ";
    public static final String TEMPLATE_IMAGE_HD1_TYPE_REQUIRED = "+ File ảnh HD1 không đúng định dạng. Định dang đúng png, jpg ! ";

    public static final String TEMPLATE_IMAGE_HD2_REQUIRED = "+ Yêu cầu nhập ảnh HD2 ! ";
    public static final String TEMPLATE_IMAGE_HD2_TYPE_REQUIRED = "+ File ảnh HD2 không đúng định dạng. Định dang đúng png, jpg ! ";

    public static final String TEMPLATE_IMAGE_GPKD_REQUIRED = "+ Yêu cầu nhập ảnh GPKD1 ! ";
    public static final String TEMPLATE_IMAGE_GPKD_TYPE_REQUIRED = "+ File ảnh GPKD1 không đúng định dạng. Định dang đúng png, jpg ! ";

    public static final String TEMPLATE_IMAGE_KH_REQUIRED = "+ Yêu cầu nhập ảnh KH ! ";
    public static final String TEMPLATE_IMAGE_KH_TYPE_REQUIRED = "+ File ảnh KH không đúng định dạng. Định dang đúng png, jpg ! ";

    public static final String TEMPLATE_ACCOUNTYPE_REQUIRED = "+ Yêu cầu nhập loại thuê bao DNO ! ";
    public static final String TEMPLATE_ACCOUNTYPE_TYPE_ERROR = "+ Loại thuê bao ở DNO không đúng ! ";

    public static final String TEMPLATE_NAME_REQUIRED = "+ Yêu cầu nhập tên khách hàng !";

    public static final String TEMPLATE_CUSTOMERTYPE_REQUIRED = "+ Yêu cầu nhập loại khách hàng !";
    public static final String TEMPLATE_CUSTOMERTYPE_ONLY_TYPE = "+  Loại khách hàng trong danh sách thuê bao chỉ được phép nhập 2 !";
    public static final String TEMPLATE_CUSTOMERTYPE_ERROR = "+ Loại khách hàng sai. KH đúng : ";
    public static final String TEMPLATE_CUSTOMERTYPE_EXIST = "+ Loại khách hàng phải trùng nhau ! ";

    public static final String ACTION_STATUS_COMPLETED = "1";
    public static final String ACTION_STATUS_FAILED = "0";

    public static final String ACTION_STATUS_COMPLETED_MES = "Thành công";
    public static final String ACTION_STATUS_FAILED_MES = "Thất bại";

    public static final String SPLIT_REASON = "###";
    public static final String ENTER_ONE_ROW = "\r\n";

    public static final String ENTER_ONE_ROW_WEB = "<br />";

    public static final String HLR_EXIST_STATUS_DESTROY = "3";
    public static final String STATUS_MC_SUBSCRIBER_DESTROY = "0";
    public static final String STATUS_MC_SUBSCRIBER_NONE_DESTROY = "1";

    public static final String COUNTRY_VIETNAM = "Vietnam";

    public static final int MAX_BIRTHDAY_YEAR = 100;
    public static final int MIN_BIRTHDAY_YEAR = 14;

    public static final int MAX_DAY_DOCUMENT_ISSUE_DATE = 15;
    public static final int MIN_DAY_DOCUMENT_ISSUE_DATE = 0;

    public static final int POSTPAID_MIN_BIRTHDAY_YEAR = 18;
    public static final int POSTPAID_MAX_LENGTH_TAX_CODE = 30;

    public static final int MAX_LENGTH_DNO_CONTRACT_NUMBER = 15;
    public static final int MIN_LENGTH_DNO_CONTRACT_NUMBER = 2;

    public static final String MSISDN_VALIDATE_OK = "MSISDN_OK";
    public static final String MSISDN_REQUIRED = "+ Yêu cầu nhập số thuê bao ! ";
    public static final String MSISDN_LENGTH_ERROR = "+ Số thuê bao không nhỏ hơn 9 và không lớn hơn 10 ký tự! ";
    public static final String MSISDN_VALIDATE_KO = "+ Số thuê bao không hợp lệ hãy nhập lại ! ";

    public static final String MSISDN_START_ZERO = "+ Số thuê bao không bắt đầu bằng số 0 ! ";
    public static final String MSISDN_NUMBER_REQUIRED = "+ Số thuê bao chỉ bao gồm ký tự số ! ";
    public static final String POSTPAID_MSISDN_TYPE_INACTIVE = "Inactive";

    public static final String FORCE_CASE_YES = "Y";
    public static final String FORCE_CASE_NO = "N";

    public static final String ISDN_TYPE_PREPAID = "1";
    public static final String ISDN_TYPE_POSTPAID = "2";

    public static final String REVERSAL_REASON_REV01 = "REV01";

    public static final String MNP_REQUEST_LOG_SUCCESS = "1";
    public static final String MNP_REQUEST_LOG_FAIL = "0";

    public static final String BILL_TYPE_FAMILY = "BILL_TYPE_FAMILY";

    public static final String BILL_TYPE_CORPORATE = "BILL_TYPE_CORPORATE";

    public static final int CATEGORY_ITEM_MSISDN_INDEX = 1;
    public static final int CATEGORY_ITEM_MSISDN_TYPE_INDEX = 2;

    public static final int CATEGORY_ITEM_DEPARTMENT_INDEX = 3;
    public static final int CATEGORY_ITEM_COMMENT_INDEX = 4;

    public static final int CATEGORY_ITEM_MSISDN_INDEX_VIP_WHITE_LIST = 1;
    public static final int CATEGORY_ITEM_STATUS_INDEX_VIP_WHITE_LIST = 2;

    public static final String MSISDN_TYPE_PREPAID = "1";
    public static final String MSISDN_TYPE_POSTPAID = "2";

    public static final String INSERT_UPDATE_SUCCESS = "1";
    public static final String INSERT_UPDATE_FAIL = "0";

    public static final String SELECTED_COMBOBOX_ALL_VN = "Tất cả";

    public static String GROUP_TYPE_NORMAL = "122";

    public static final String URL_SOURCE_CUST_INFOR = "/bs/SourceCustInfor";
    public static final String URL_SOURCE_PAY_METHOD = "/bs/SourcePayMethod";
    public static final String URL_SOURCE_EXC_RATE = "/bs/SourceExcRate";
    public static final String URL_CREATE_EXCHANGE_LOAD_GOODS = "/bs/createExchange/load_good";
    public static final String URL_CREATE_EXCHANGE_LOAD_PRICE = "/bs/createExchange/load_price";
    public static final String URL_CREATE_EXCHANGE_LOAD_PROMOTION = "/bs/createExchange/load_promotion";
    public static final String URL_CREATE_EXCHANGE_CALCULATE = "/bs/createExchange/calculate";
    public static final String URL_CREATE_EXCHANGE_LOAD_SERIAL = "/bs/createExchange/load_serial";
    public static final String URL_SOURCE_DVT = "/bs/SourceDVT";
    public static final String URL_SOURCE_ATTACH_GOODS = "/bs/createExchange/get_attach_goods";
    public static final String URL_CREATE_EXCHANGE_LOAD_PRICE_AND_BUNDLE = "/bs/createExchange/load_price_type_and_bundle";
    public static final String URL_SOURCE_SAVE_TRANSACTION = "/bs/createExchange/save_transaction";
    public static final String URL_SAVE_MGM_PROMOTION = "/bs/createExchange/save_MGM_Promotion";
    public static final String URL_SOURCE_INVOICE_TYPE = "/bs/createExchange/load_type_invoice";
    public static final String URL_SOURCE_GET_CURRENT_INVOICE_NO = "/bs/createExchange/get_current_invoice_no";

    public static final String ATT_TYPE_NPR_DKCM = "NPR_DKCM";
    public static final String URL_CREATE_NPR_PREPAID_BUNDLE = "/bs/registration/create_ticket_npr_prepaid_bundle";

    public static final String LIST_PREORDER_BY_TEAMPLATE = "/bs/Microsite/getListPreOrderFromTemplate";
    public static final String INSERT_LIST_PREORDER = "/bs/Microsite/insertListPreOrder";
    public static final String ACTION_LOAD_STAFF = "/bs/reportAssignMNP/loadStaff";

    // Bùi Đình Đạt
    public static final String URL_MAP_AGENT_STOCK_BATCHFILE_UPLOADFILE = "/bs/MapAgentStockBatchFile/getListdata";
    public static final String URL_MAP_AGENT_STOCK_BATCHFILE_ACCEPT_MAP = "/bs/MapAgentStockBatchFile/acceptMap";
    public static final String URL_MAP_DOWNLOAD_FILE_DEMO = "/bs/MapAgentStockBatchFile/downloadFileDemo";

}
