package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MnpRegistrationController
{

	@RequestMapping("/bs/mnp_registration_prepaid")
	public String mnpRegistrationPrepaid()
	{
		return "css/mnp_registration/mnp_registration_prepaid";
	}

	@RequestMapping("/bs/mnp_registration_postpaid")
	public String mnpRegistrationPostpaid()
	{

		return "css/mnp_registration/mnp_registration_postpaid";
	}

	@RequestMapping("/bs/mnp_registration_list")
	public String mnpRegistrationList()
	{
		return "css/mnp_registration/mnp_registration_list";
	}

	@RequestMapping("/bs/mnp_cancel_npr")
	public String mnpCancelNPR()
	{
		return "css/mnp_registration/mnp_cancel_npr";
	}

	@RequestMapping("/bs/mnp_confirm_port_out")
	public String mnpConfirmPortOut()
	{
		return "css/mnp_registration/mnp_confirm_port_out";
	}

	@RequestMapping("/bs/search-all-infomation-network-transfer")
	public String searchAllInfomationNetworkTransfer()
	{
		return "css/mnp_registration/SearchAllInfomationNetworkTransfer";
	}

	@RequestMapping("/bs/mnp_confirm_reversal")
	public String mnpConfirmReversal()
	{
		return "css/mnp_registration/mnp_confirm_reversal";
	}

	@RequestMapping("/bs/mnp_registration_prepaid_bundle")
	public String mnpRegistrationPrepaidBundle()
	{
		return "css/mnp_registration/mnp_registration_prepaid_bundle";
	}

	@RequestMapping("/bs/mnp_port_out_nice_number")
	public String mnpConfirmPortOutNiceNumber()
	{
		return "css/mnp_registration/mnp_port_out_nice_number";
	}
}
