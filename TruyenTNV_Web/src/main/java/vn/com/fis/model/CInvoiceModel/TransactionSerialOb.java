package vn.com.fis.model.CInvoiceModel;

public class TransactionSerialOb
{
	private String trans_serial_id;
	private String trans_detail_id;
	private String create_datetime;
	private String serial;

	public TransactionSerialOb()
	{
		// TODO Auto-generated constructor stub
	}

	public TransactionSerialOb(String trans_serial_id, String trans_detail_id, String create_datetime, String serial)
	{
		this.trans_serial_id = trans_serial_id;
		this.trans_detail_id = trans_detail_id;
		this.create_datetime = create_datetime;
		this.serial = serial;

	}

	public String getTrans_serial_id()
	{
		return trans_serial_id;
	}

	public void setTrans_serial_id(String trans_serial_id)
	{
		this.trans_serial_id = trans_serial_id;
	}

	public String getTrans_detail_id()
	{
		return trans_detail_id;
	}

	public void setTrans_detail_id(String trans_detail_id)
	{
		this.trans_detail_id = trans_detail_id;
	}

	public String getCreate_datetime()
	{
		return create_datetime;
	}

	public void setCreate_datetime(String create_datetime)
	{
		this.create_datetime = create_datetime;
	}

	public String getSerial()
	{
		return serial;
	}

	public void setSerial(String serial)
	{
		this.serial = serial;
	}

}
