package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SubReturnDNOController
{
	@RequestMapping("/bs/sub-return-dno")
	public String index()
	{
		return "css/sub-return-dno";
	}
}
