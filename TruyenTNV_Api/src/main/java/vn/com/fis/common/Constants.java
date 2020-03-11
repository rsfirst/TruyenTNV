package vn.com.fis.common;

public class Constants {
	public static final class REQUEST_MAPPING {
		public static final String LOGIN = "/login";
		public static final String SITE_MAP = "/sitemap-out";
		public static final String REFRESH_TOKEN = "/refreshToken";
		public static final String GET_VALUE_SHOP = "/getValueShop";
		public static final String GET_PERMISSIONS = "/getPermissions";
		public static final String WRITE_LOG_MENU = "/writeLogMenu";
		public static final String GET_COMMON_VALUE = "/getCommonValue";
		public static final String GET_LIST_STAFF = "/epos/getListStaff";
		public static final String GET_SHOP_NAME = "/epos/getShopNameByStockId";

		public static final String GET_STOCK_BY_STAFF_ID = "/epos/getStockByStaffId";

		public static final String GET_LIST_STAFF_STATUS = "/epos/getListStaffStatus";

		public static final String GET_COMMON_LIST_REASON = "/epos/getListReason";

		public static final String GET_VALUE_DOMAIN_BY_TYPE = "/epos/getValueDomainByType";

		
		public static final String TEST_API = "/testApi";
	}

	public static final class ITEM_CODE_PRIVILEGE {
		// quan ly kho
		public static final String SEARCH_INFOMATION_SHOP_AND_STAFF = "QLK_006&ACCESS";

	}

	public static final class SERVER_MESS_CODE {
		// quan ly phieu thu chi tai cua hang
		public static final String FORM_RECEIPT_EXPENSE_FROM_SHOP_CURRENT_AMMOUNT_ERROR = "CURRENT_AMMOUNT_ERROR";
	}
}
