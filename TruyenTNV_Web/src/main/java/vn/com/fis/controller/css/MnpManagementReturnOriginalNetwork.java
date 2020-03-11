package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MnpManagementReturnOriginalNetwork
{
	@RequestMapping("/bs/action-return-original-network")
	public String actionReversalToOriginal()
	{
		return "css/ManagementReturnOriginalNetwork/ActionReturnToOriginalNetwork";
	}

	@RequestMapping("/bs/return-original-network")
	public String returnOriginalNetwork()
	{
		return "css/ManagementReturnOriginalNetwork/ReturnOriginalNetwork";
	}
}
