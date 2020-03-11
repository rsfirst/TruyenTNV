package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReportController
{
	@RequestMapping("/bs/reportPrepaid")
	public String reportPrepaid()
	{
		return "css/report/reportPrepaid";
	}

	@RequestMapping("/bs/reportInputStock")
	public String reportInputStock()
	{
		return "css/report/reportInputStock";
	}

	@RequestMapping("/bs/reportInputStockStaff")
	public String reportInputStockStaff()
	{
		return "css/report/reportInputStockStaff";
	}

	@RequestMapping("/bs/reportStock")
	public String reportStock()
	{
		return "css/report/reportStock";
	}

	@RequestMapping("/bs/reportPrepaidDetail")
	public String reportPrepaidDetail()
	{
		return "css/report/reportPrepaidDetail";
	}

	@RequestMapping("/bs/reportPrepaidStaff")
	public String reportPrepaidStaff()
	{
		return "css/report/reportPrepaidStaff";
	}

	@RequestMapping("/bs/reportChangeCustInfor")
	public String reportChangeCustInfor()
	{
		return "css/report/reportChangeCustInfor";
	}

	@RequestMapping("/bs/reportChangeScratchCard")
	public String reportChangeScratchCard()
	{
		return "css/report/reportChangeScratchCard";
	}

	@RequestMapping("/bs/reportPreRequest")
	public String reportDailyRequest()
	{
		return "css/report/reportPreRequest";
	}

	@RequestMapping("/bs/reportPostRequest")
	public String reportPostDailyRequest()
	{
		return "css/report/reportPostRequest";
	}

	@RequestMapping("/bs/reportChangeCardPhysical")
	public String reportChangeCardPhysical()
	{
		return "css/report/reportChangeCardPhysical";
	}

	@RequestMapping("/bs/reportLogin")
	public String reportLogin()
	{
		return "css/report/reportLogin";
	}

	@RequestMapping("/bs/reportPrepaidDetailBackEnd")
	public String reportPrepaidDetailBackEnd()
	{
		return "css/report/reportPrepaidDetailBackEnd";
	}

	@RequestMapping("/bs/reportPrepaidBackEnd")
	public String reportPrepaidBackEnd()
	{
		return "css/report/reportPrepaidBackEnd";
	}

	@RequestMapping("/bs/reportPrepaidStaffBackEnd")
	public String reportPrepaidStaffBackEnd()
	{
		return "css/report/reportPrepaidStaffBackEnd";
	}

	@RequestMapping("/bs/reportReturnMNP")
	public String reportReturnMNP()
	{
		return "css/report/reportReturnMNP";
	}

	@RequestMapping("/bs/reportReversalMNP")
	public String reportReversalMNP()
	{
		return "css/report/reportReversalMNP";
	}

	@RequestMapping("/bs/reportPortInMNP")
	public String reportPortInMNP()
	{
		return "css/report/reportPortInMNP";
	}

	@RequestMapping("/bs/reportPortOutMNP")
	public String reportPortOutMNP()
	{
		return "css/report/reportPortOutMNP";
	}

	@RequestMapping("/bs/reportCommitmentMNP")
	public String reportCommitmentMNP()
	{
		return "css/report/reportCommitmentMNP";
	}

	@RequestMapping("/bs/reportCommitmentDetailMNP")
	public String reportCommitmentDetailMNP()
	{
		return "css/report/reportCommitmentDetailMNP";
	}

	@RequestMapping("/bs/reportNewRegister")
	public String reportNewRegister()
	{
		return "css/report/reportNewRegister";
	}

	@RequestMapping("/bs/reportInfoChange")
	public String reportInfoChange()
	{
		return "css/report/reportInfoChange";
	}

	@RequestMapping("/bs/reportHistoryExSTK")
	public String reportHistoryExSTK()
	{
		return "css/report/reportHistoryExSTK";
	}
	
	
	@RequestMapping("/bs/reportAirtimeAdjustment")
	public String reportAirtimeAdjustment()
	{
		return "css/report/reportAirtimeAdjustment";
	}
	
	@RequestMapping("/bs/reportHistorySTKByUser")
	public String reportHistorySTKByUser()
	{
		return "css/report/reportHistorySTKByUser";
	}
	
	@RequestMapping("/bs/reportHistorySTK")
	public String reportHistorySTK()
	{
		return "css/report/reportHistorySTK";
	}
	
	@RequestMapping("/bs/reportTransfersAumont")
	public String reportTransfersAumont()
	{
		return "css/report/reportTransfersAumont";
	}
	
	@RequestMapping("/bs/reportTransfers")
	public String reportTransfers()
	{
		return "css/report/reportTransfers";
	}
	
	@RequestMapping("/bs/reportAssignForAss")
	public String reportAssignForAss()
	{
		return "css/report/reportAssignForAss";
	}
	
	@RequestMapping("/bs/reportPreOrderByStatus")
	public String reportPreOrderByStatus()
	{
		return "css/report/reportPreOrderByStatus";
	}
	
	@RequestMapping("/bs/reportCcommissiondevelopment")
	public String reportCcommissiondevelopment()
	{
		return "css/report/reportCcommissiondevelopment";
	}
}
