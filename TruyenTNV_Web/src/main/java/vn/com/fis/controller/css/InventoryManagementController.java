package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InventoryManagementController
{
	@RequestMapping("/bs/stockOutputInferior")
	public String stockOutputInferior()
	{
		return "css/stockOutputInferior";
	}

	@RequestMapping("/bs/stockInputFromSuperior")
	public String stockInputFromSuperior()
	{
		return "css/stockInputFromSuperior";
	}

	@RequestMapping("/bs/stockInputFromCenter")
	public String stockInputFromCenter()
	{
		return "css/stockInputFromCenter";
	}

	@RequestMapping("/bs/createPurchaseOrder")
	public String createPurchaseOrder()
	{
		return "css/createPurchaseOrder";
	}

	@RequestMapping("/bs/approvePurchaseOrder")
	public String approvePurchaseOrder()
	{
		return "css/approvePurchaseOrder";
	}

	@RequestMapping("/bs/viewPurchaseOrder")
	public String viewPurchaseOrder()
	{
		return "css/viewPurchaseOrder";
	}

	@RequestMapping("/bs/editPurchaseOrder")
	public String editPurchaseOrder()
	{
		return "css/editPurchaseOrder";
	}

	@RequestMapping("/bs/viewDeliverOrder")
	public String viewDeliverOrder()
	{
		return "css/viewDeliverOrder";
	}

	@RequestMapping("/bs/discountManager")
	public String discountManager()
	{
		return "css/discountManager";
	}

	@RequestMapping("/bs/saProvinceManager")
	public String saProvinceManager()
	{
		return "css/saProvinceManager";
	}

	@RequestMapping("/bs/editGoodDiscount")
	public String editGoodDiscount()
	{
		return "css/editGoodDiscount";
	}

	@RequestMapping("/bs/goodPriceManager")
	public String goodPriceManager()
	{
		return "css/goodPriceManager";
	}

	@RequestMapping("/bs/transferShopNonHierarchical")
	public String transferShopNonHierarchical()
	{
		return "css/transferShopNonHierarchical";
	}

	@RequestMapping("/bs/stockImportUnRanking")
	public String stockInputUnRanking()
	{
		return "css/stockImportUnRanking";
	}

	@RequestMapping("/bs/createPurchaseOrderForBS")
	public String createPurchaseOrderForBS()
	{
		return "css/createPurchaseOrderForBS";
	}

	@RequestMapping("/bs/approvePurchaseOrderForBS")
	public String approvePurchaseOrderForBS()
	{
		return "css/approvePurchaseOrderForBS";
	}

	@RequestMapping("/bs/stockTransEnquery")
	public String stockTransEnquery()
	{
		return "css/stockTransEnquery";
	}

	@RequestMapping("/bs/withdrawalOfOrders")
	public String withdrawalOfOrders()
	{
		return "css/withdrawalOfOrders";
	}
}
