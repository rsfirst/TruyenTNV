package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PrepaidController
{
	@RequestMapping("/bs/prepaid")
	public String index()
	{
		return "css/prepaid/prepaid";
	}

	@RequestMapping("/bs/searchPrepaid")
	public String searchPrepaid()
	{
		return "css/prepaid/searchPrepaid";
	}
	
	@RequestMapping("/bs/searchPrepaidSubscriber")
	public String searchPrepaidSubscriber()
	{
		return "css/prepaid/searchPrepaidSubscriber";
	}

	@RequestMapping("/bs/prepaidList")
	public String prepaidList()
	{
		return "css/prepaid/prepaidList";
	}

	@RequestMapping(value = "/bs/prepaidBS")
	public String prepaidBS()
	{

		// Principal principal = request.getUserPrincipal();
		//
		// String tmp = principal.getName();
		//
		// Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		//

		return "css/prepaid/prepaidBS";
	}
	
	@RequestMapping(value = "/bs/prepaidConSub")
	public String prepaidConSub()
	{
		return "css/prepaid/prepaidConSub";
	}

	@RequestMapping("/bs/createScratchCardsAirtime")
	public String scratchCardsAirtime()
	{
		return "css/scratchcards/createScratchCardsAirtime";
	}

	@RequestMapping("/bs/approveScratchCardsAirtime")
	public String approveScratchCardsAirtime()
	{
		return "css/scratchcards/approveScratchCardsAirtime";
	}
	
	@RequestMapping("/bs/registerVas")
	public String registerVas()
	{
		return "css/RegisterVAS/resgisterVas";
	}
	@RequestMapping("/bs/prepaidListManagement")
	public String prepaidListManagement()
	{
		return "css/prepaid/prepaidListManagement";
	}
}
