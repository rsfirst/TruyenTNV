package vn.com.fis.model.mnpcm;
import java.util.HashMap;
import java.util.Map;

public class CustomerTypeSourceEnum {
	static Map<String, String> mapCustomerType = new HashMap<String, String>();

	public CustomerTypeSourceEnum() {
		mapCustomerType.put(CustomerType.PRIVATE.getResponse(), "Cá nhân");
		mapCustomerType.put(CustomerType.FOREIGN.getResponse(), "Người ngước ngoài");
		mapCustomerType.put(CustomerType.COMPANY.getResponse(), "Công ty");
	}

	public enum CustomerType{
		PRIVATE("1"), FOREIGN("2"), COMPANY("3");
		private String value;

		public String getResponse() {
			return value;
		}

		public String getResponse(String custType) {
			return value;
		}

		CustomerType(String value) {
			this.value = value;
		}
	}
	
	public static String getValueCustomerType(String cusType) {
		CustomerType customerVal = null;
		String result = null;
		try {
			customerVal = CustomerType.valueOf(cusType);
			result = customerVal.getResponse();
		} catch (Exception e) {
			return null;
		}
		return result;
	}
	
	public String getValueCustomerType2(String cusType) {
		String result = mapCustomerType.get(cusType);
		return result;
	}
}
