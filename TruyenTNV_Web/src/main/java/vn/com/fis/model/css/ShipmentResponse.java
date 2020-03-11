package vn.com.fis.model.css;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.entity.css.StockTransactionEntity;

public class ShipmentResponse 
{
	private String stock_transaction_id = ""; 
	private String stock_id				= "";
	private String deliverer_stock_id	= "";
	private String type					= "";
	private String reason_id			= "";
	private String status		 		= "";
	private String create_datetime		= "";
	private String note		 			= "";

	private String cmd_id		 		= "";
	private String cmd_code	 			= "";
	private String cmd_status	 		= "";
	private String cmd_date		 		= "";
	private String cmd_note	 			= "";
	private String cmd_name	 			= "";
	private String cmd_staff_id			= "";
	private String des_date		 		= "";
	private String des_staff_id			= "";

	private String inspect_cmd_id		= "";
	private String inspect_cmd_code	 	= "";
	private String inspect_cmd_status	= "";
    private String inspect_cmd_date		= "";
    private String inspect_cmd_note	 	= "";
    private String inspect_cmd_name	 	= "";
    private String inspect_cmd_staff_id = "";

    private String exec_id			= "";
    private String exec_code	 	= "";
    private String exec_status	 	= "";
    private String exec_date		= "";
    private String exec_note		= "";
    private String exec_name		= "";
    private String exec_staff_id	= "";

    private String destroy_id		= "";
    private String destroy_code	 	= "";
    private String destroy_status	= "";
    private String destroy_date		= "";
    private String destroy_note		= "";
    private String destroy_name		= "";
    private String destroy_staff_id	= "";
	private String get_from_stock_trans_id = "";
	private String reason_code		= "";

	private String resource_code	= "";
	private String internal_stock_id   = "";
	private String deliverer_stock_name     = "";
	private String stock_name               = "";
	private String exec_staff_name          = "";
	
	//Contructor
	public ShipmentResponse()
	{
		
	}
	public ShipmentResponse convertJsonToShipmentResponse(String jsonData) throws JsonParseException, JsonMappingException, IOException
	{
		ObjectMapper mapper = new ObjectMapper();
		TypeReference<ShipmentResponse> typeReference  = new TypeReference<ShipmentResponse>() {};
		ShipmentResponse shipmentResponse = mapper.readValue(jsonData, typeReference);
		
		return shipmentResponse;
	}
	public StockTransactionEntity convertToEnity()
	{
		StockTransactionEntity entity = new StockTransactionEntity();
		entity.setID(getStock_transaction_id());
		entity.setStockID(getStock_id());
		//entity.setStock(StockEntity pStock);
		entity.setDelivererStockID(getDeliverer_stock_id());
		//entity.setDelivererStock(StockEntity pDelivererStock);
		entity.setType(getType());
		entity.setReasonID(getReason_id());
		entity.setReasonCode(getReason_code());
		//entity.setReason(ReasonEntity pReason);
		entity.setStatus(getStatus());
		entity.setCmdID(getCmd_id());
		entity.setCmdCode(getCmd_code());
		entity.setCmdName(getCmd_name());
		entity.setCmdStatus(getCmd_status());
		entity.setCmdDate(getCmd_date());
		entity.setCmdNote(getCmd_note());
		entity.setCmdStaffID(getCmd_staff_id());
		entity.setDesDate(getDes_date());
		entity.setDesStaffID(getDes_staff_id());
		entity.setInspectCmdID(getInspect_cmd_id());
		entity.setInspectCmdCode(getInspect_cmd_code());
		entity.setInspectCmdName(getInspect_cmd_name());
		entity.setInspectCmdStatus(getInspect_cmd_status());
		entity.setInspectCmdDate(getInspect_cmd_date());
		entity.setInspectCmdNote(getInspect_cmd_note());
		entity.setInspectCmdStaffID(getInspect_cmd_staff_id());
		entity.setExecID(getExec_id());
		entity.setExecCode(getExec_code());
		entity.setExecStatus(getExec_status());
		entity.setExecDate(getExec_date());
		entity.setExecNote(getExec_note());
		entity.setExecName(getExec_name());
		entity.setExecStaffID(getExec_staff_id());
		entity.setDestroyID(getDestroy_id());
		entity.setDestroyCode(getDestroy_code());
		entity.setDestroyStatus(getDestroy_status());
		entity.setDestroyDate(getDestroy_status());
		entity.setDestroyNote(getDestroy_note());
		entity.setDestroyStaffID(getDestroy_staff_id());
		entity.setResourceCode(getResource_code());
		entity.setInternalStockId(getInternal_stock_id());
		entity.setDelivererStockName(getDeliverer_stock_name());
		entity.setStockName(getStock_name());
		entity.setExecStaffName(getExec_staff_name());	
		return entity;
	}
	
	public ShipmentResponse(StockTransactionEntity entity)
	{
		setStock_transaction_id(entity.getID());
		setStock_id(entity.getStockID());
		setDeliverer_stock_id(entity.getDelivererStockID());
		setType(entity.getType());
		setReason_id(entity.getReasonID());
		setStatus(entity.getStatus());
		
		setCmd_id(entity.getCmdID());
		setCmd_code(entity.getCmdCode());
		setCmd_status(entity.getCmdStatus());
		setCmd_date(entity.getCmdDate());
		setCmd_note(entity.getCmdNote());
		setCmd_name(entity.getCmdName());
		setCmd_staff_id(entity.getCmdStaffID());
		setDes_date(entity.getDesDate());
		setDes_staff_id(entity.getDesStaffID());
		
		setInspect_cmd_id(entity.getInspectCmdID());
		setInspect_cmd_code(entity.getInspectCmdCode());
		setInspect_cmd_status(entity.getInspectCmdStatus());
		setInspect_cmd_date(entity.getInspectCmdDate());
		setInspect_cmd_note(entity.getInspectCmdNote());
		setInspect_cmd_name(entity.getInspectCmdName());
		setInspect_cmd_staff_id(entity.getInspectCmdStaffID());
		
		setExec_id(entity.getExecID());
		setExec_code(entity.getExecCode());
		setExec_status(entity.getExecStatus());
		setExec_date(entity.getExecDate());
		setExec_note(entity.getExecNote());
		setExec_name(entity.getExecName());
		setExec_staff_id(entity.getExecStaffID());
		
		setDestroy_id(entity.getDestroyID());
		setDestroy_code(entity.getDestroyCode());
		setDestroy_status(entity.getDestroyStatus());
		setDestroy_date(entity.getDestroyDate());
		setDestroy_note(entity.getDestroyNote());
		//setDestroy_name();
		setDestroy_staff_id(entity.getDestroyStaffID());
		
		setGet_from_stock_trans_id(entity.getGetFromStockTransID());
		setReason_code(entity.getReasonCode());
		setResource_code(entity.getResourceCode());
		setInternal_stock_id(entity.getInternalStockId());
		setDeliverer_stock_name(entity.getDelivererStockName());
		
		setStock_name(entity.getStockName());
		setExec_staff_name(entity.getExecStaffName());
	}
	
	public String getStock_transaction_id() {
		return stock_transaction_id;
	}
	public void setStock_transaction_id(String stock_transaction_id) {
		this.stock_transaction_id = stock_transaction_id;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getReason_id() {
		return reason_id;
	}
	public void setReason_id(String reason_id) {
		this.reason_id = reason_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCreate_datetime() {
		return create_datetime;
	}
	public void setCreate_datetime(String create_datetime) {
		this.create_datetime = create_datetime;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getCmd_id() {
		return cmd_id;
	}
	public void setCmd_id(String cmd_id) {
		this.cmd_id = cmd_id;
	}
	public String getCmd_code() {
		return cmd_code;
	}
	public void setCmd_code(String cmd_code) {
		this.cmd_code = cmd_code;
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
	public String getCmd_note() {
		return cmd_note;
	}
	public void setCmd_note(String cmd_note) {
		this.cmd_note = cmd_note;
	}
	public String getCmd_name() {
		return cmd_name;
	}
	public void setCmd_name(String cmd_name) {
		this.cmd_name = cmd_name;
	}
	public String getCmd_staff_id() {
		return cmd_staff_id;
	}
	public void setCmd_staff_id(String cmd_staff_id) {
		this.cmd_staff_id = cmd_staff_id;
	}
	public String getDes_date() {
		return des_date;
	}
	public void setDes_date(String des_date) {
		this.des_date = des_date;
	}
	public String getDes_staff_id() {
		return des_staff_id;
	}
	public void setDes_staff_id(String des_staff_id) {
		this.des_staff_id = des_staff_id;
	}
	public String getInspect_cmd_id() {
		return inspect_cmd_id;
	}
	public void setInspect_cmd_id(String inspect_cmd_id) {
		this.inspect_cmd_id = inspect_cmd_id;
	}
	public String getInspect_cmd_code() {
		return inspect_cmd_code;
	}
	public void setInspect_cmd_code(String inspect_cmd_code) {
		this.inspect_cmd_code = inspect_cmd_code;
	}
	public String getInspect_cmd_status() {
		return inspect_cmd_status;
	}
	public void setInspect_cmd_status(String inspect_cmd_status) {
		this.inspect_cmd_status = inspect_cmd_status;
	}
	public String getInspect_cmd_date() {
		return inspect_cmd_date;
	}
	public void setInspect_cmd_date(String inspect_cmd_date) {
		this.inspect_cmd_date = inspect_cmd_date;
	}
	public String getInspect_cmd_note() {
		return inspect_cmd_note;
	}
	public void setInspect_cmd_note(String inspect_cmd_note) {
		this.inspect_cmd_note = inspect_cmd_note;
	}
	public String getInspect_cmd_name() {
		return inspect_cmd_name;
	}
	public void setInspect_cmd_name(String inspect_cmd_name) {
		this.inspect_cmd_name = inspect_cmd_name;
	}
	public String getInspect_cmd_staff_id() {
		return inspect_cmd_staff_id;
	}
	public void setInspect_cmd_staff_id(String inspect_cmd_staff_id) {
		this.inspect_cmd_staff_id = inspect_cmd_staff_id;
	}
	public String getExec_id() {
		return exec_id;
	}
	public void setExec_id(String exec_id) {
		this.exec_id = exec_id;
	}
	public String getExec_code() {
		return exec_code;
	}
	public void setExec_code(String exec_code) {
		this.exec_code = exec_code;
	}
	public String getExec_status() {
		return exec_status;
	}
	public void setExec_status(String exec_status) {
		this.exec_status = exec_status;
	}
	public String getExec_date() {
		return exec_date;
	}
	public void setExec_date(String exec_date) {
		this.exec_date = exec_date;
	}
	public String getExec_note() {
		return exec_note;
	}
	public void setExec_note(String exec_note) {
		this.exec_note = exec_note;
	}
	public String getExec_name() {
		return exec_name;
	}
	public void setExec_name(String exec_name) {
		this.exec_name = exec_name;
	}
	public String getExec_staff_id() {
		return exec_staff_id;
	}
	public void setExec_staff_id(String exec_staff_id) {
		this.exec_staff_id = exec_staff_id;
	}
	public String getDestroy_id() {
		return destroy_id;
	}
	public void setDestroy_id(String destroy_id) {
		this.destroy_id = destroy_id;
	}
	public String getDestroy_code() {
		return destroy_code;
	}
	public void setDestroy_code(String destroy_code) {
		this.destroy_code = destroy_code;
	}
	public String getDestroy_status() {
		return destroy_status;
	}
	public void setDestroy_status(String destroy_status) {
		this.destroy_status = destroy_status;
	}
	public String getDestroy_date() {
		return destroy_date;
	}
	public void setDestroy_date(String destroy_date) {
		this.destroy_date = destroy_date;
	}
	public String getDestroy_note() {
		return destroy_note;
	}
	public void setDestroy_note(String destroy_note) {
		this.destroy_note = destroy_note;
	}
	public String getDestroy_name() {
		return destroy_name;
	}
	public void setDestroy_name(String destroy_name) {
		this.destroy_name = destroy_name;
	}
	public String getDestroy_staff_id() {
		return destroy_staff_id;
	}
	public void setDestroy_staff_id(String destroy_staff_id) {
		this.destroy_staff_id = destroy_staff_id;
	}
	public String getGet_from_stock_trans_id() {
		return get_from_stock_trans_id;
	}
	public void setGet_from_stock_trans_id(String get_from_stock_trans_id) {
		this.get_from_stock_trans_id = get_from_stock_trans_id;
	}
	public String getReason_code() {
		return reason_code;
	}
	public void setReason_code(String reason_code) {
		this.reason_code = reason_code;
	}
	public String getResource_code() {
		return resource_code;
	}
	public void setResource_code(String resource_code) {
		this.resource_code = resource_code;
	}
	public String getInternal_stock_id() {
		return internal_stock_id;
	}
	public void setInternal_stock_id(String internal_stock_id) {
		this.internal_stock_id = internal_stock_id;
	}

	public String getDeliverer_stock_name() {
		return deliverer_stock_name;
	}

	public void setDeliverer_stock_name(String deliverer_stock_name) {
		this.deliverer_stock_name = deliverer_stock_name;
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

}
