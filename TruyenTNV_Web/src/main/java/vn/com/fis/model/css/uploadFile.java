package vn.com.fis.model.css;

import org.springframework.web.multipart.MultipartFile;

public class uploadFile {
	
	 private MultipartFile file;

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

	public uploadFile(MultipartFile file) {
		super();
		this.file = file;
	}
	 
	public uploadFile() {}
	 

}
