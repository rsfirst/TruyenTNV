package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ErrorController
{
	
	@RequestMapping("/bs/errorAuthorities")
	public String errorAuthorities() {
		return "css/errorAuthorities";
	}

}
