package vn.com.fis.model.mnpcm;
import java.util.HashMap;
import java.util.Map;

public class NetworkTypeSourceEnum {
	static Map<String, String> networkTypeMap = new HashMap<String, String>();

	public NetworkTypeSourceEnum() {
		populateValue();
	}

	public static void populateValue() {
		networkTypeMap.put(DocumentType.MOBIPHONE.getResponse(), "Mobifone");
		networkTypeMap.put(DocumentType.VINAPHONE.getResponse(), "Vinaphone");
		networkTypeMap.put(DocumentType.VIETTEL.getResponse(), "Viettel");
		networkTypeMap.put(DocumentType.VNM.getResponse(), "Vietnamobile");
		networkTypeMap.put(DocumentType.GTEL_MOBILE.getResponse(), "Gtel Mobile");
		networkTypeMap.put(DocumentType.DD_TELECOM.getResponse(), "Đông dương telecom");
	}
	
	public enum DocumentType{
		MOBIPHONE("01"),
		VINAPHONE("02"),
		VIETTEL("04"),
		VNM("05"),
		GTEL_MOBILE("07"),
		DD_TELECOM("08")
		;
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		DocumentType(String value) {
			this.value = value;
		}
	}
	
	public static String getNetworkType(String cusType) {
		populateValue();
		String result = networkTypeMap.get(cusType);
		return result;
	}
}
