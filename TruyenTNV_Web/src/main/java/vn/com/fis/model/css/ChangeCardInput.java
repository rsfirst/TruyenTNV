package vn.com.fis.model.css;

import java.util.List;

public class ChangeCardInput implements java.io.Serializable
{
	private static final long serialVersionUID = 1913994514705339454L;
	private String requestId;
	private String oldSerial;
	private String newSerial;
	private String listImgs;
	private String statusCard;
	private String statusReq;
	private String imgName;
	private String inStk;
	private String commemnt;
	private String shopId;
	private String statusChangeCard;
	
	private String contactNumber;
	
	List<String> listSerial;
	List<String> listImageInput;
	List<String> listNoteRecord;

	public String getRequestId()
	{
		return requestId;
	}

	public void setRequestId(String requestId)
	{
		this.requestId = requestId;
	}

	public String getOldSerial()
	{
		return oldSerial;
	}

	public void setOldSerial(String oldSerial)
	{
		this.oldSerial = oldSerial;
	}

	public String getNewSerial()
	{
		return newSerial;
	}

	public void setNewSerial(String newSerial)
	{
		this.newSerial = newSerial;
	}

	public String getListImgs()
	{
		return listImgs;
	}

	public void setListImgs(String listImgs)
	{
		this.listImgs = listImgs;
	}

	public String getStatusCard()
	{
		return statusCard;
	}

	public void setStatusCard(String statusCard)
	{
		this.statusCard = statusCard;
	}

	public String getStatusReq()
	{
		return statusReq;
	}

	public void setStatusReq(String statusReq)
	{
		this.statusReq = statusReq;
	}

	public String getImgName()
	{
		return imgName;
	}

	public void setImgName(String imgName)
	{
		this.imgName = imgName;
	}

	public String getInStk()
	{
		return inStk;
	}

	public void setInStk(String inStk)
	{
		this.inStk = inStk;
	}

	public String getCommemnt()
	{
		return commemnt;
	}

	public void setCommemnt(String commemnt)
	{
		this.commemnt = commemnt;
	}

	public String getShopId()
	{
		return shopId;
	}

	public void setShopId(String shopId)
	{
		this.shopId = shopId;
	}

	public String getStatusChangeCard()
	{
		return statusChangeCard;
	}

	public void setStatusChangeCard(String statusChangeCard)
	{
		this.statusChangeCard = statusChangeCard;
	}

	public List<String> getListNoteRecord()
	{
		return listNoteRecord;
	}

	public void setListNoteRecord(List<String> listNoteRecord)
	{
		this.listNoteRecord = listNoteRecord;
	}

	public List<String> getListSerial()
	{
		return listSerial;
	}

	public void setListSerial(List<String> listSerial)
	{
		this.listSerial = listSerial;
	}

	public String getContactNumber()
	{
		return contactNumber;
	}

	public void setContactNumber(String contactNumber)
	{
		this.contactNumber = contactNumber;
	}

	public List<String> getListImageInput()
	{
		return listImageInput;
	}

	public void setListImageInput(List<String> listImageInput)
	{
		this.listImageInput = listImageInput;
	}

	@Override
	public String toString()
	{
		return "ChangeCardInput [requestId=" + requestId + ", oldSerial=" + oldSerial + ", newSerial=" + newSerial + ", listImgs=" + listImgs + ", statusCard="
				+ statusCard + ", statusReq=" + statusReq + ", imgName=" + imgName + ", inStk=" + inStk + ", commemnt=" + commemnt + ", shopId=" + shopId
				+ ", statusChangeCard=" + statusChangeCard + ", contactNumber=" + contactNumber + ", listSerial=" + listSerial + ", listImageInput="
				+ listImageInput + ", listNoteRecord=" + listNoteRecord + "]";
	}

}
