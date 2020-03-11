package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MnpManagementReversalSubscriber
{

	@RequestMapping("/bs/mnp_sub_return_rno_report")
	public String mnpSubReturnRNOReport()
	{
		return "css/MnpManagementReversalSubscriber/mnp_sub_return_rno_report";
	}

	@RequestMapping("/bs/reversal-subscriber-to-vnm")
	public String receiveSubscriber()
	{
		return "css/MnpManagementReversalSubscriber/ReversalSubscriberToVNM";
	}

	@RequestMapping("/bs/reversal-subscriber-violation")
	public String ReceiveSubscriberAfterViolation()
	{
		return "css/MnpManagementReversalSubscriber/ReversalSubscriberAfterViolation";
	}

}
