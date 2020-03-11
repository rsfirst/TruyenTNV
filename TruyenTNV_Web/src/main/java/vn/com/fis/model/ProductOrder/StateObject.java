package vn.com.fis.model.ProductOrder;
//ThangPC6 add new object [Trang thai hang hoa]
public class StateObject
{
	
	public StateObject()
	{

	}
	
	long stateId;
	String name;
	String status;
	
	public StateObject(long stateId, String name, String status)
	{
		this.stateId = stateId;
		this.name = name;
		this.status = status;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
