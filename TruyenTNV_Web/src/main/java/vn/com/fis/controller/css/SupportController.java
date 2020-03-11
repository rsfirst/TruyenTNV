package vn.com.fis.controller.css;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SupportController {

	@RequestMapping("/bs/support")
	public String support(Map<String, Object> model) {
		return "css/support";
	}
}
