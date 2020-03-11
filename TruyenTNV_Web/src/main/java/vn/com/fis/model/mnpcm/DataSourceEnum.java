package vn.com.fis.model.mnpcm;

import java.util.HashMap;
import java.util.Map;

import vn.com.fis.utils.mnpcm.Constants;

public class DataSourceEnum {

	static Map<String, String> violationFlag = new HashMap<String, String>();

	public static void populateValueViolationFlag() {
		violationFlag.put(FlagViolationType.FLAG_VIOLATION.getResponse(), Constants.FLAG_NPR_VIOLATION);
		violationFlag.put(FlagViolationType.FLAG_VIOLATION_CLEAR.getResponse(), Constants.FLAG_NPR_NONE_VIOLATION);
	}

	static Map<String, String> violationNPRStatusPortOut = new HashMap<String, String>();

	public static void populateValueViolationStatus() {
		violationNPRStatusPortOut.put(ViolationStatusEnum.VIOLATION_STATUS_NONE.getResponse(),
				Constants.VIOLATION_STATUS_NONE);
		violationNPRStatusPortOut.put(ViolationStatusEnum.VIOLATION_REQUEST_REVERSAL.getResponse(),
				Constants.VIOLATION_STATUS_REQUEST_REVERSAL);
		violationNPRStatusPortOut.put(ViolationStatusEnum.VIOLATION_STATUS_APPROVED.getResponse(),
				Constants.VIOLATION_STATUS_APPROVE);
		violationNPRStatusPortOut.put(ViolationStatusEnum.VIOLATION_STATUS_REVERSED.getResponse(),
				Constants.VIOLATION_STATUS_REVERSED);
		violationNPRStatusPortOut.put(ViolationStatusEnum.VIOLATION_STATUS_ALL.getResponse(),
				Constants.SELECTED_COMBOBOX_ALL);
		violationNPRStatusPortOut.put(ViolationStatusEnum.VIOLATION_STATUS_VIOALATIONING.getResponse(),
				Constants.VIOLATION_STATUS_VIOLATION);
	}

	static Map<String, String> violationNPRStatusPortIn = new HashMap<String, String>();

	public static void populateValueViolationStatusPortIn() {
		violationNPRStatusPortIn.put(ViolationNPRSubscriberStatusPortInEnum.VIOLATION_STATUS_VIOLATION.getResponse(),
				Constants.VIOLATION_STATUS_VIOLATION);
		violationNPRStatusPortIn.put(
				ViolationNPRSubscriberStatusPortInEnum.VIOLATION_STATUS_ACCEPT_REVERSAL.getResponse(),
				Constants.VIOLATION_STATUS_ACCEPT_REVERSAL);
		violationNPRStatusPortIn.put(
				ViolationNPRSubscriberStatusPortInEnum.VIOLATION_STATUS_ACCEPT_REVERSED.getResponse(),
				Constants.VIOLATION_STATUS_REVERSED);
		violationNPRStatusPortIn.put(ViolationStatusEnum.VIOLATION_STATUS_ALL.getResponse(),
				Constants.SELECTED_COMBOBOX_ALL);
	}

	static Map<String, String> violationNPRStatusSearchPortIn = new HashMap<String, String>();

	public static void populateValueViolationStatusSeachPortIn() {
		violationNPRStatusSearchPortIn.put(ViolationStatusEnum.VIOLATION_STATUS_NONE.getResponse(),
				Constants.VIOLATION_STATUS_NONE);
		violationNPRStatusSearchPortIn.put(Constants.VIOLATION_STATUS_ACCEPT_REVERSAL_SEARCH_CODE,
				Constants.VIOLATION_STATUS_ACCEPT_REVERSAL);
		
		violationNPRStatusSearchPortIn.put(Constants.VIOLATION_STATUS_REVERSED_SEARCH_CODE,
				Constants.VIOLATION_STATUS_REVERSED);
		
		violationNPRStatusSearchPortIn.put(Constants.VIOLATION_STATUS_VIOLATION_SEARCH_CODE,
				Constants.VIOLATION_STATUS_VIOLATION);
		violationNPRStatusSearchPortIn.put(ViolationStatusEnum.VIOLATION_STATUS_ALL.getResponse(),
				Constants.SELECTED_COMBOBOX_ALL);
	}

	static Map<String, String> violationStatusNPRSubscribers = new HashMap<String, String>();

	public static void populateValueNPRSubscribersViolation() {
		violationStatusNPRSubscribers.put(ViolationNPRSubscriberStatusEnum.VIOLATION_STATUS_CLEAR.getResponse(),
				Constants.VIOLATION_STATUS_CLEAR);
		violationStatusNPRSubscribers.put(ViolationNPRSubscriberStatusEnum.VIOLATION_STATUS_VIOLATION.getResponse(),
				Constants.VIOLATION_STATUS_VIOLATION);
	}

	static Map<String, String> violationReason = new HashMap<String, String>();

	public static void populateValueViolationReason() {
		violationReason.put(ReasonViolationType.HUK01.getResponse(), "HUK01");
		violationReason.put(ReasonViolationType.HUK02.getResponse(), "HUK02");
	}

	static Map<String, String> reasonReturnSource = new HashMap<String, String>();

	public static void populateReasonReturnSource() {
		reasonReturnSource.put(ReasonReturnType.REV_01.getResponse(), "Không hoàn thành hậu kiểm với DNO");
		reasonReturnSource.put(ReasonReturnType.REV_02.getResponse(), "Khiếu nại của Khách hàng/ Thuê bao");
		reasonReturnSource.put(ReasonReturnType.REV_03.getResponse(), "Yêu cầu đặc biệt từ cơ quan quản lý pháp luật");
		reasonReturnSource.put(ReasonReturnType.REV_04.getResponse(), "Lỗi kỹ thuật của hệ thống chuyển mạng");
		reasonReturnSource.put(ReasonReturnType.REV_05.getResponse(), "CCH, RNO, DNO đã cùng đồng ý Reversal");
	}
	
	static Map<String, String> cancelReasonNPRSource = new HashMap<String, String>();

	public static void populatecancelReasonNPRSource() {
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_001.getResponse(),"Chuyển sang mạng nhà cung cấp khác");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_002.getResponse(),"Không hài lòng chất lượng dịch vụ");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_003.getResponse(),"Giá cước dịch vụ cao");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_004.getResponse(),"Không hài lòng tốc độ truy nhập");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_005.getResponse(),"Thủ tục đăng ký dịch vụ rườm rà");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_006.getResponse(),"Không hài lòng máy đầu cuối");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_007.getResponse(),"Do chuyển địa điểm");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_008.getResponse(),"Không hài lòng thái độ phục vụ của GDV");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_009.getResponse(),"Do có chương trình khuyến mại mới");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_010.getResponse(),"Không hài lòng thái độ nhân viên thu cước");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_011.getResponse(),"Không có nhu cầu sử dụng dịch vụ");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_012.getResponse(),"Không hài lòng hoạt động chăm sóc KH");
		cancelReasonNPRSource.put(CanCelNPRReasonType.CANCEL_013.getResponse(),"Thông tin CM không đúng do GDV");
	}

	static Map<String, String> customerTypeSource = new HashMap<String, String>();
	public static void populateCustomerTypeSource() {
		customerTypeSource.put(CustomerTypeSource.CUSTOMER_TYPE_PRIVATE.getResponse(),Constants.CUSTOMER_TYPE_PRIVATE_STR);
		customerTypeSource.put(CustomerTypeSource.CUSTOMER_TYPE_FOREIGN.getResponse(),Constants.CUSTOMER_TYPE_FOREIGN_STR);
		customerTypeSource.put(CustomerTypeSource.CUSTOMER_TYPE_COMPANY.getResponse(), Constants.CUSTOMER_TYPE_COMPANY_STR);
		customerTypeSource.put(CustomerTypeSource.CUSTOMER_TYPE_STAFT.getResponse(), Constants.CUSTOMER_TYPE_STAFT_STR);
	}
	
	public enum FlagViolationType {
		FLAG_VIOLATION("01"), FLAG_VIOLATION_CLEAR("02");
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		FlagViolationType(String value) {
			this.value = value;
		}
	}

	public enum ViolationStatusEnum {
		VIOLATION_STATUS_NONE("00"), VIOLATION_REQUEST_REVERSAL("01"), VIOLATION_STATUS_APPROVED(
				"02"), VIOLATION_STATUS_REVERSED("03"), VIOLATION_STATUS_ALL("04"), VIOLATION_STATUS_VIOALATIONING("05");
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		ViolationStatusEnum(String value) {
			this.value = value;
		}
	}

	public enum ViolationNPRSubscriberStatusEnum {
		VIOLATION_STATUS_VIOLATION("01"), VIOLATION_STATUS_CLEAR("02");
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		ViolationNPRSubscriberStatusEnum(String value) {
			this.value = value;
		}
	}

	public enum ViolationNPRSubscriberStatusPortInEnum {
		VIOLATION_STATUS_VIOLATION("01"), VIOLATION_STATUS_ACCEPT_REVERSAL("02"), VIOLATION_STATUS_ACCEPT_REVERSED(
				"03");
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		ViolationNPRSubscriberStatusPortInEnum(String value) {
			this.value = value;
		}
	}

	public enum ReasonViolationType {
		HUK01("HUK01"), HUK02("HUK02");
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		ReasonViolationType(String value) {
			this.value = value;
		}
	}

	public enum ReasonReturnType {
		REV_01("REV01"), REV_02("REV02"), REV_03("REV03"), REV_04("REV04"), REV_05("REV05");

		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		ReasonReturnType(String value) {
			this.value = value;
		}
	}

	public enum CustomerTypeSource {
		CUSTOMER_TYPE_PRIVATE(Constants.CUSTOMER_TYPE_PRIVATE), CUSTOMER_TYPE_FOREIGN(Constants.CUSTOMER_TYPE_FOREIGN), 
		CUSTOMER_TYPE_COMPANY(Constants.CUSTOMER_TYPE_COMPANY), CUSTOMER_TYPE_STAFT(Constants.CUSTOMER_TYPE_STAFT);

		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		CustomerTypeSource(String value) {
			this.value = value;
		}
	}
	
	public enum CanCelNPRReasonType {
		CANCEL_001("CANCEL_001"), CANCEL_002("CANCEL_002"), 
		CANCEL_003("CANCEL_003"), CANCEL_004("CANCEL_004"),
		CANCEL_005("CANCEL_005"), CANCEL_006("CANCEL_006"),
		CANCEL_007("CANCEL_007"), CANCEL_008("CANCEL_008"),
		CANCEL_009("CANCEL_009"), CANCEL_010("CANCEL_010"),
		CANCEL_011("CANCEL_011"), CANCEL_012("CANCEL_012"),
		CANCEL_013("CANCEL_013");

		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		CanCelNPRReasonType(String value) {
			this.value = value;
		}
	}
	
	public static String getNPRVNMViolationStatusPortOut(String violationTypeIn) {
		populateValueViolationStatus();
		String result = violationNPRStatusPortOut.get(violationTypeIn);
		return result;
	}

	public static String getNPRVNMViolationStatusPortIn(String violationTypeIn) {
		populateValueViolationStatusPortIn();
		String result = violationNPRStatusPortIn.get(violationTypeIn);
		return result;
	}

	public static String getNPRVNMViolationStatusSeachPortIn(String violationTypeIn) {
		populateValueViolationStatusSeachPortIn();
		String result = violationNPRStatusSearchPortIn.get(violationTypeIn);
		return result;
	}

	public static String getNPRSubscriberViolationStatus(String violationStatusType) {
		populateValueNPRSubscribersViolation();
		String result = violationStatusNPRSubscribers.get(violationStatusType);
		return result;
	}

	public static String getViolationReason(String violationReasonIn) {
		populateValueViolationReason();
		String result = violationReason.get(violationReasonIn);
		return result;
	}

	public static String getReasonReturnNotification(String reasonInput) {
		populateReasonReturnSource();
		String result = reasonReturnSource.get(reasonInput);
		return result;
	}
	
	public static String getNPRCancelReason(String reasonInput) {
		populatecancelReasonNPRSource();
		String result = cancelReasonNPRSource.get(reasonInput);
		return result;
	}
	
	public static String getCustomerType(String reasonInput) {
		populateCustomerTypeSource();
		String result = customerTypeSource.get(reasonInput);
		return result;
	}
}
