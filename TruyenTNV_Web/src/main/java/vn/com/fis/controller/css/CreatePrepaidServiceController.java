package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CreatePrepaidServiceController
{
	@RequestMapping("/bs/updatePrepaidCustomer")
	public String updatePrepaidCustomer()
	{
		return "css/prepaidService/updatePrepaidCustomer";
	}

	@RequestMapping("/bs/createPrepaidServiceChangeSIM")
	public String createPrepaidServiceChangeSIM()
	{
		return "css/prepaidService/createPrepaidServiceChangeSIM";
	}

	@RequestMapping("/popup/bs/updateCustomerPanel")
	public String updateCustomerPanel()
	{
		return "css/prepaidService/prepaidUpCustomerPanel";
	}

	@RequestMapping("/popup/bs/prepaidChangeSIMPanel")
	public String prepaidChangeSIMPanel()
	{
		return "css/prepaidService/prepaidChangeSIMPanel";
	}

	@RequestMapping("/bs/approveRequestChangeService")
	public String approveRequestChangeService()
	{
		return "css/prepaidService/approveRequestChangeService";
	}

	@RequestMapping("/popup/bs/approveCustomerInformationPanel")
	public String customerInformationPanel()
	{
		return "css/prepaidService/approveCustomerInformationPanel";
	}

	@RequestMapping("/popup/bs/approveChangeSIMPanel")
	public String approveChangeSIMPanel()
	{
		return "css/prepaidService/approveChangeSIMPanel";
	}

	@RequestMapping("/popup/bs/detailServiceChangePanel")
	public String detailServiceChangePanel()
	{
		return "css/prepaidService/detailServiceChangePanel";
	}

	@RequestMapping("/bs/updateProvinceforBS")
	public String updateProvinceforBS()
	{
		return "css/prepaidService/updateProvinceforBS";
	}

	@RequestMapping("/bs/listMultiShopGoods")
	public String listMultiShopGoods()
	{
		return "css/prepaidService/listMultiShopGoods";
	}

	@RequestMapping("/bs/transferOfOwnership")
	public String transferOfOwnership()
	{
		return "css/prepaidService/transferOfOwnership";
	}

	@RequestMapping("/popup/bs/transferOfOwnershipPanel")
	public String transferOfOwnershipPanel()
	{
		return "css/prepaidService/transferOfOwnershipPanel";
	}
	
	@RequestMapping("/bs/searchInfomationShopAndStaff")
	public String searchInfomationShopAndStaff()
	{
		return "css/prepaidService/searchInfomationShopAndStaff";
	}

	@RequestMapping("/popup/bs/detailTranferOfOwnerShipPanel")
    public String detailTranferOfOwnerShipPanel()
	{
		return "css/prepaidService/detailTranferOfOwnerShipPanel";
	}
	@RequestMapping("/bs/requestChangeScatchCard")
    public String requestChangeScatchCard()
	{
		return "css/prepaidService/requestChangeScatchCard";
	}
	@RequestMapping("/bs/acceptRequestChangeCard")
    public String acceptRequestChangeCard()
	{
		return "css/prepaidService/acceptRequestChangeCard";
	}

}
