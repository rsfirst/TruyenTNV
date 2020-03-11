package vn.com.fis.model.epos;

public class InputWarrantyProcessEntity
{
	private String mstrShopID;
	private String mstrStaffID;
	private String txtWarrantyReceipt;//Phiếu BN
	private String mstrFromDate;
	private String mstrToDate;
	private String cboWarrantyType;//Loại bảo hành
	
	private String war_level;
	private String receiver_note_no;
	private String customer;
	private String warranty_no;
	private String assign_staff_id;
	private String  received_date;
	private String  pay_day;
	private String warranty_log_id;
	private String warranty_id;
	private String goods_esn;
	private WarrantyDetailObj warrantyDetailObj ;
	
	
	
	public WarrantyDetailObj getWarrantyDetailObj()
	{
		return warrantyDetailObj;
	}
	public void setWarrantyDetailObj(WarrantyDetailObj warrantyDetailObj)
	{
		this.warrantyDetailObj = warrantyDetailObj;
	}
	public String getWar_level()
	{
		return war_level;
	}
	public void setWar_level(String war_level)
	{
		this.war_level = war_level;
	}
	public String getReceiver_note_no()
	{
		return receiver_note_no;
	}
	public void setReceiver_note_no(String receiver_note_no)
	{
		this.receiver_note_no = receiver_note_no;
	}
	public String getCustomer()
	{
		return customer;
	}
	public void setCustomer(String customer)
	{
		this.customer = customer;
	}
	public String getWarranty_no()
	{
		return warranty_no;
	}
	public void setWarranty_no(String warranty_no)
	{
		this.warranty_no = warranty_no;
	}
	public String getAssign_staff_id()
	{
		return assign_staff_id;
	}
	public void setAssign_staff_id(String assign_staff_id)
	{
		this.assign_staff_id = assign_staff_id;
	}
	public String getReceived_date()
	{
		return received_date;
	}
	public void setReceived_date(String received_date)
	{
		this.received_date = received_date;
	}
	public String getPay_day()
	{
		return pay_day;
	}
	public void setPay_day(String pay_day)
	{
		this.pay_day = pay_day;
	}
	public String getWarranty_log_id()
	{
		return warranty_log_id;
	}
	public void setWarranty_log_id(String warranty_log_id)
	{
		this.warranty_log_id = warranty_log_id;
	}
	public String getWarranty_id()
	{
		return warranty_id;
	}
	public void setWarranty_id(String warranty_id)
	{
		this.warranty_id = warranty_id;
	}
	public String getGoods_esn()
	{
		return goods_esn;
	}
	public void setGoods_esn(String goods_esn)
	{
		this.goods_esn = goods_esn;
	}
	public String getMstrShopID()
	{
		return mstrShopID;
	}
	public void setMstrShopID(String mstrShopID)
	{
		this.mstrShopID = mstrShopID;
	}
	public String getMstrStaffID()
	{
		return mstrStaffID;
	}
	public void setMstrStaffID(String mstrStaffID)
	{
		this.mstrStaffID = mstrStaffID;
	}
	public String getTxtWarrantyReceipt()
	{
		return txtWarrantyReceipt;
	}
	public void setTxtWarrantyReceipt(String txtWarrantyReceipt)
	{
		this.txtWarrantyReceipt = txtWarrantyReceipt;
	}
	public String getMstrFromDate()
	{
		return mstrFromDate;
	}
	public void setMstrFromDate(String mstrFromDate)
	{
		this.mstrFromDate = mstrFromDate;
	}
	public String getMstrToDate()
	{
		return mstrToDate;
	}
	public void setMstrToDate(String mstrToDate)
	{
		this.mstrToDate = mstrToDate;
	}
	public String getCboWarrantyType()
	{
		return cboWarrantyType;
	}
	public void setCboWarrantyType(String cboWarrantyType)
	{
		this.cboWarrantyType = cboWarrantyType;
	}
	
	
}
