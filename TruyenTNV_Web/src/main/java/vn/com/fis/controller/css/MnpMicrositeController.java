package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MnpMicrositeController {

	
	@RequestMapping("/bs/preOrderStatus")
	public String preOrderStatus() {
		return "css/mnp_microsite/preOrderChannel";
	}
	@RequestMapping("/bs/preOrderChannel")
	public String preOrderChannel() {
		return "css/mnp_microsite/preOrderStatus";
	}
	@RequestMapping("/bs/uploadPreOrderByBatch")
	public String uploadPreOrderByBatch() {
		return "css/mnp_microsite/uploadPreOrderByBatch";
	}
	
	@RequestMapping("/bs/preRequestInfor")
	public String preRequestInfor() {
		return "css/mnp_microsite/preRequest";
	}
	
	@RequestMapping("/bs/assignStaff")
	public String assignStaff() {
		return "css/mnp_microsite/assignPreRequest";
	}
	@RequestMapping("/bs/preSraffLocation")
	public String preSraffLocation() {
		return "css/mnp_microsite/preSraffLocation";
	}
}
