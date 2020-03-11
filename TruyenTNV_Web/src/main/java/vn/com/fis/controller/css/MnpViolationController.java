package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MnpViolationController
{

	@RequestMapping("/bs/mnp_violation_port_out")
	public String mnpViolationPortOut()
	{
		return "css/mnp_violation/mnp_violation_port_out";
	}

	@RequestMapping("/bs/mnp_violation_port_in")
	public String mnpVviolationPortIn()
	{
		return "css/mnp_violation/mnp_violation_port_in";
	}
}
