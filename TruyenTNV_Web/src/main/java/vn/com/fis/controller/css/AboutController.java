package vn.com.fis.controller.css;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AboutController {

	@RequestMapping("/bs/about")
	public String about(Map<String, Object> model) {
		return "css/about";
	}
	
}
