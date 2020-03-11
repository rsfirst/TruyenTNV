package vn.com.fis.model.mnpcm;
import java.util.HashMap;
import java.util.Map;

public class DocumentTypeSourceEnum {
	static Map<String, String> documentTypeMap = new HashMap<String, String>();

	public DocumentTypeSourceEnum() {
		populateValue();
	}

	public static void populateValue() {
		documentTypeMap.put(DocumentType.CMND.getResponse(), "Chứng minh thư nhân dân");
		documentTypeMap.put(DocumentType.THECANCUOC.getResponse(), "Thẻ căn cước");
		documentTypeMap.put(DocumentType.HOCHIEU.getResponse(), "Hộ chiếu");
		documentTypeMap.put(DocumentType.HOKHAU.getResponse(), "Hộ khẩu");
		documentTypeMap.put(DocumentType.GPKD.getResponse(), "Giấy phép kinh doanh");
		documentTypeMap.put(DocumentType.MASOTHUE.getResponse(), "Mã số thuế");
		documentTypeMap.put(DocumentType.QDTL.getResponse(), "Quyết định thành lập");
		
	}
	
	public enum DocumentType{
		CMND("01"),
		HOCHIEU("02"),
		THECANCUOC("03"),
		GPKD("04"),
		QDTL("05"),
		MASOTHUE("06"),
		HOKHAU("07")
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
	
	public static String getDocumentType(String cusType) {
		populateValue();
		String result = documentTypeMap.get(cusType);
		return result;
	}
}
