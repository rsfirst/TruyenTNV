package vn.com.fis.controller.css;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeControllerW {

	// inject via application.properties
//	@Value("${welcome.message}")
	private String message = "Hello World";

	@RequestMapping("/bs")
	public String welcome(Map<String, Object> model) {
		model.put("message", this.message);
		return "css/welcome";
	}
}
