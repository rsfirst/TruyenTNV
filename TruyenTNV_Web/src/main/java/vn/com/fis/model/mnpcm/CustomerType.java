package vn.com.fis.model.mnpcm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CustomerType {
	
	@Id
	@Column(name = "VALUE")
	String idCustomer;
	
	@Column(name = "NAME")
	String titleCustomer;

	public String getIdCustomer() {
		return idCustomer;
	}

	public void setIdCustomer(String idCustomer) {
		this.idCustomer = idCustomer;
	}

	public String getTitleCustomer() {
		return titleCustomer;
	}

	public void setTitleCustomer(String titleCustomer) {
		this.titleCustomer = titleCustomer;
	}

}
