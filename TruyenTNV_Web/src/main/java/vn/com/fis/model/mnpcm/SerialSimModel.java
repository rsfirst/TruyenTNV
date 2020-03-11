package vn.com.fis.model.mnpcm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class SerialSimModel {

	// "customer_seq" is Oracle sequence name.
    @Id
    @Column(name = "VALUE1")
    String value1;

    @Column(name = "VALUE2")
	String value2;

	public String getValue1() {
		return value1;
	}

	public void setValue1(String value1) {
		this.value1 = value1;
	}

	public String getValue2() {
		return value2;
	}

	public void setValue2(String value2) {
		this.value2 = value2;
	}

}
