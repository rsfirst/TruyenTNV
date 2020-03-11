package vn.com.fis.model.css;

import vn.com.fis.ftu.vnm.wrapper.StringUtilEx;
import vn.com.fis.utils.epos.CommonUtil;

public class ShipmentOutput 
{
	private String stock_trans_id = "";
	private String stock_id = "";
	private String deliverer_stock_id = "";
	private String cmd_code = "";
	private String exec_staff_id = "";
	private String exec_date = "";
	private String cmd_status = "";
	private String cmd_date = "";

	private String deliverer_stock_name_address = "";
	private String deliverer_stock_name = "";
	private String deliverer_stock_address = "";

	private String stock_name = "";
	private String exec_staff_name = "";
	
	private String cust_po_number = "";
	private String store_address = "";
	private String po_date = "";
	private String shipped_date = "";
	private String epos_date = "";
	private String epos_message = "";
	private String epos_err = "";
	
	public ShipmentOutput() {
		
	}
	public ShipmentOutput(String stock_trans_id, String stock_id, String deliverer_stock_id, String cmd_code,
			String exec_staff_id, String exec_date, String cmd_status, String cmd_date, String deliverer_stock_name_address,
			String stock_name, String exec_staff_name,String cust_po_number) 
	{
		this.stock_trans_id = StringUtilEx.nvl(stock_trans_id,"");
		this.stock_id = StringUtilEx.nvl(stock_id,"");
		this.deliverer_stock_id = StringUtilEx.nvl(deliverer_stock_id,"");
		this.cmd_code = StringUtilEx.nvl(cmd_code,"");
		this.exec_staff_id = StringUtilEx.nvl(exec_staff_id,"");
		this.exec_date = StringUtilEx.nvl(exec_date,"");
		this.cmd_status = StringUtilEx.nvl(cmd_status,"");
		this.cmd_date = StringUtilEx.nvl(cmd_date,"");
		this.deliverer_stock_name_address = StringUtilEx.nvl(deliverer_stock_name_address,"");
		if (!CommonUtil.isEmpty(deliverer_stock_name_address))
		{
			if (deliverer_stock_name_address.contains("_"))
			{
				String[] items = deliverer_stock_name_address.split("_");
				if(items.length > 1)
				{
					this.deliverer_stock_name = items[0];
					this.deliverer_stock_address = items[1];
				}
				else
				{
					this.deliverer_stock_name = items[0];
				}
			}
		}

		this.stock_name = StringUtilEx.nvl(stock_name,"");
		this.exec_staff_name = StringUtilEx.nvl(exec_staff_name,"");
		this.cust_po_number = StringUtilEx.nvl(cust_po_number,"");
	}


	public String getStock_trans_id() {
		return stock_trans_id;
	}


	public void setStock_trans_id(String stock_trans_id) {
		this.stock_trans_id = stock_trans_id;
	}


	public String getStock_id() {
		return stock_id;
	}


	public void setStock_id(String stock_id) {
		this.stock_id = stock_id;
	}


	public String getDeliverer_stock_id() {
		return deliverer_stock_id;
	}


	public void setDeliverer_stock_id(String deliverer_stock_id) {
		this.deliverer_stock_id = deliverer_stock_id;
	}


	public String getCmd_code() {
		return cmd_code;
	}


	public void setCmd_code(String cmd_code) {
		this.cmd_code = cmd_code;
	}


	public String getExec_staff_id() {
		return exec_staff_id;
	}


	public void setExec_staff_id(String exec_staff_id) {
		this.exec_staff_id = exec_staff_id;
	}


	public String getExec_date() {
		return exec_date;
	}


	public void setExec_date(String exec_date) {
		this.exec_date = exec_date;
	}


	public String getCmd_status() {
		return cmd_status;
	}


	public void setCmd_status(String cmd_status) {
		this.cmd_status = cmd_status;
	}


	public String getCmd_date() {
		return cmd_date;
	}


	public void setCmd_date(String cmd_date) {
		this.cmd_date = cmd_date;
	}


	public String getDeliverer_stock_name_address() {
		return deliverer_stock_name_address;
	}


	public void setDeliverer_stock_name_address(String deliverer_stock_name_address) {
		this.deliverer_stock_name_address = deliverer_stock_name_address;
	}


	public String getDeliverer_stock_name() {
		return deliverer_stock_name;
	}


	public void setDeliverer_stock_name(String deliverer_stock_name) {
		this.deliverer_stock_name = deliverer_stock_name;
	}


	public String getDeliverer_stock_address() {
		return deliverer_stock_address;
	}


	public void setDeliverer_stock_address(String deliverer_stock_address) {
		this.deliverer_stock_address = deliverer_stock_address;
	}


	public String getStock_name() {
		return stock_name;
	}


	public void setStock_name(String stock_name) {
		this.stock_name = stock_name;
	}


	public String getExec_staff_name() {
		return exec_staff_name;
	}


	public void setExec_staff_name(String exec_staff_name) {
		this.exec_staff_name = exec_staff_name;
	}


	public String getCust_po_number() {
		return cust_po_number;
	}


	public void setCust_po_number(String cust_po_number) {
		this.cust_po_number = cust_po_number;
	}


	public String getStore_address() {
		return store_address;
	}


	public void setStore_address(String store_address) {
		this.store_address = store_address;
	}


	public String getPo_date() {
		return po_date;
	}


	public void setPo_date(String po_date) {
		this.po_date = po_date;
	}


	public String getShipped_date() {
		return shipped_date;
	}


	public void setShipped_date(String shipped_date) {
		this.shipped_date = shipped_date;
	}


	public String getEpos_date() {
		return epos_date;
	}


	public void setEpos_date(String epos_date) {
		this.epos_date = epos_date;
	}


	public String getEpos_message() {
		return epos_message;
	}


	public void setEpos_message(String epos_message) {
		this.epos_message = epos_message;
	}


	public String getEpos_err() {
		return epos_err;
	}


	public void setEpos_err(String epos_err) {
		this.epos_err = epos_err;
	}
}
