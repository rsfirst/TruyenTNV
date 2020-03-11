package vn.com.fis.utils.epos;

public class CommonConstant implements java.io.Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4386592790596320784L;

	public static final String BEGIN_LOG = " -- BEGIN -----------";
	public static final String END_LOG = " -- END ---------------";
	public static final String PARAMETER = " -PARAM INPUT -";
	public static final String DECIMAL_FORMAT = "0.#####";
	public static final int INDEX_1 = 1;
	public static final int INDEX_2 = 2;

	public static final String EMPTY = "";
	// template export
	public static final String TEMPLATE_TYPE = ".jrxml";
	public static final String TEMPLATE_JASPER_TYPE = ".jasper";

	public static final String STATUS_DEFAULT = "0";

	public static final String STATUS_ACTIVE = "1";
	public static final String ERROR_STOCK_IMPORT_FROM_PARTNER = "ErrorStockImportFromPartner";

	public static final String ORDER_APPROVE = "OrderApprove";
	public static final String ORDER_ESTABLISH = "OrderExtablish";
	public static final String EXPORT_COMMAND = "ExportCommand";
	public static final String IMPORT_COMMAND = "ImportCommand";
	public static final String EXPORT_APPROVE = "ExportApprove";
	public static final String EXPORT_EXECUTE = "ExportExecute";
	public static final String IMPORT = "Import";
	public static final String IMPORT_ABOVE_STOCK = "ImportAboveStock";
	public static final String IMPORT_PARTNER = "ImportPartner";
	public static final String IMPORT_CUSTOMER = "ImportCustomer";
	public static final String EXPORT_PARTNER = "ExportPartner";
	public static final String EXPORT_CUSTOMER = "ExportCustomer";
	public static final String IMPORT_EXECUTE = "ImportExecute";
	public static final String IMPORT_ABOVE_STOCK_RETURN = "ImportAboveStockReturn";
	public static final String TRANS_ENQUERY = "TransEnquery";
	public static final String EXPORT_STAFF = "ExportStaff";
	public static final String IMPORT_STAFF = "ImportStaff";
	public static final String EXPORT_ABOVE_STOCK = "ExportAboveStock";
	public static final String CONVERT_TO_DAMAGED_GOODS = "ConvertToDamagedGoods";
	public static final String NEW_WARRANTY_NO = "NewWarrantyNo";
	public static final String ISDN_TYPE = "1";
	
	public static final String STATUS_UN_SUCCESS = "0";
	public static final String STATUS_SUCCESS = "1";
	
	public static final int STATE_PASS = 0;
	public static final int STATE_FAIL = 1;
	public static final int STATE_NOT_ENOUGHT = 2;
}
