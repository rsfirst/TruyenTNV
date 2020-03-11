package vn.com.fis.model.css;

public class ObjectTwoField implements java.io.Serializable {
	private String name;
	private String description;

	public ObjectTwoField() {
	}

	public ObjectTwoField(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
