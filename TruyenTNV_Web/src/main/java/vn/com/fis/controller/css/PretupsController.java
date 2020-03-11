package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PretupsController
{
	@RequestMapping("/bs/pretups")
	public String index()
	{
		return "css/pretups/pretups";
	}

	@RequestMapping("/bs/agentManagement")
	public String postpaidManagement()
	{
		return "css/pretups/agentManagement";
	}
	
	@RequestMapping("/bs/uploadAgentByBatch")
	public String uploadAgentByBatch()
	{
		return "css/pretups/uploadAgentByBatch";
	}
	
	@RequestMapping("/bs/transferMoneyFromVNM")
	public String transferMoneyFromVNM()
	{
		return "css/pretups/transferMoneyFromVNM";
	}
	
	@RequestMapping("/bs/searchInforAccountPretup")
	public String searchInforAccountPretup()
	{
		return "css/pretups/searchInforAccountPretup";
	}

	@RequestMapping("/bs/formMoneyCharge")
	public String formMoneyCharge()
	{
		return "css/pretups/formMoneyCharge";
	}

	@RequestMapping("/bs/formUpdateAgent")
	public String formUpdateAgent()
	{
		return "css/pretups/formUpdateAgent";
	}
	
	@RequestMapping("/bs/searchStatusCommission")
	public String searchStatusCommission()
	{
		return "css/pretups/searchStatusCommission";
	}

	@RequestMapping("/bs/reportEtopupTransaction")
	public String reportEtopupTransaction()
	{
		return "css/pretups/reportEtopupTransaction";
	}
}
