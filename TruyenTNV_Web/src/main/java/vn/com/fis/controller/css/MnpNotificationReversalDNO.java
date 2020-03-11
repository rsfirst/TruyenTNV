package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MnpNotificationReversalDNO
{
	@RequestMapping("/bs/mnp-notification-reversal-dno")
	public String index() {
		return "css/mnp_notification_reversal_dno/mnp_notification_reversal_dno";
	}
}
