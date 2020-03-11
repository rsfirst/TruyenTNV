package vn.com.fis.controller.epos;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import vn.com.fis.utils.epos.Constants;

@Controller
public class InventoryManagerment
{

	@RequestMapping("/popup/stockViewInfo")
	public String stockViewInfo()
	{
		return "epos/inventory/stockViewInfo";
	}

	@RequestMapping("/popup/serialList")
	public String serialList()
	{
		return "epos/inventory/serialList";
	}

	@RequestMapping("/approveRequestChangeService")
	public String inputStocksFromCenter()
	{
		return "epos/inventory/stockExportToCenter";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_BUTTON_DETAIL)
	public String dialogButtonDetail()
	{
		return "epos/inventory/dialogButtonDetail";
	}

	@RequestMapping("/popup/serialListGoods")
	public String serialListGoods()
	{
		return "epos/inventory/dialogClickSerial";
	}

	@RequestMapping("/popup/dialogStockDetail")
	public String stockViewDetail()
	{
		return "epos/inventory/dialogStockDetail";
	}

	@RequestMapping("/popup/dialogViewSerialEnquery")
	public String dialogViewSerialEnquery()
	{
		return "epos/inventory/dialogViewSerialEnquery";
	}

	@RequestMapping("/popup/dialogViewSerialNoFound")
	public String dialogViewSerialNoFound()
	{
		return "epos/inventory/dialogViewSerialNoFound";
	}

	@RequestMapping("/popup/dialogViewSerialPrintWarranty")
	public String dialogViewSerialPrintWarranty()
	{
		return "epos/inventory/dialogViewSerialPrintWarranty";
	}

	@RequestMapping("/popup/dialogSerialPrintWarrantyByBatch")
	public String dialogViewSerialPrintWarrantyByBatch()
	{
		return "epos/inventory/dialogSerialPrintWarrantyByBatch";
	}

	@RequestMapping("/popup/dialogInputAttachGoods")
	public String dialogInputAttachGoods()
	{
		return "epos/sales/dialogInputAttachGoods";
	}
	
	@RequestMapping("/popup/dialogStaffInfoMGM")
	public String dialogInputInfo() {
		return "epos/sales/dialogStaffInfoMGM";
	}
	
	@RequestMapping("/popup/dialogInputSerialPromotion")
	public String dialogInputSerialPromotion() {
		return "epos/sales/dialogInputSerialPromotion";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_BUTTON_DETAIL_ISFI)
	public String showDialogAddFileSerial()
	{
		return Constants.REQUEST_MAPPING.DIALOG_BUTTON_DETAIL_ISFI_LINK;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_BUTTON_SERIAL_SIFC)
	public String showDialogSerialDetailSIFC()
	{
		return Constants.REQUEST_MAPPING.DIALOG_BUTTON_SERIAL_SIFC_LINK;
	}

	@RequestMapping("/popup/dialogExportSerialWarranty")
	public String dialogExportSerialWarranty()
	{
		return "epos/inventory/dialogExportSerialWarranty";
	}

	@RequestMapping("/popup/dialogRenewWarrantyDetail")
	public String dialogRenewWarrantyDetail()
	{
		return "epos/inventory/dialogRenewWarrantyDetail";
	}

	@RequestMapping("/popup/dialogViewSerialExportToInferior")
	public String dialogViewSerialExportToInferior()
	{
		return "epos/inventory/dialogViewSerialExportToInferior";
	}

	@RequestMapping("/popup/dialogInputCardNo")
	public String dialogInputCardNo()
	{
		return "epos/sales/dialogInputCardNo";
	}

	@RequestMapping("/popup/dialogAddSerialSaleTrans")
	public String dialogAddSerialSaleTrans()
	{
		return "epos/sales/dialogAddSerialSaleTrans";
	}

	@RequestMapping("/popup/dialogAddSerialListSaleTrans")
	public String dialogAddSerialListSaleTrans()
	{
		return "epos/sales/dialogAddSerialListSaleTrans";
	}

	@RequestMapping("/popup/dialogInputAttachGoodsForDealer")
	public String dialogInputAttachGoodsForDealer()
	{
		return "epos/sales/dialogInputAttachGoodsForDealer";
	}
}
