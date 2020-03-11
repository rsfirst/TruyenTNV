package vn.com.fis.controller.epos;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {

	// inject via application.properties
//	@Value("${welcome.message}")
	private String message = "Hello World";

	@RequestMapping("/")
	public String welcome(Map<String, Object> model) {
		model.put("message", this.message);
		return "welcome";
	}
	@RequestMapping("/epos")
	public String welcome1(Map<String, Object> model) {
		model.put("message", this.message);
		return "welcome";
	}
}
