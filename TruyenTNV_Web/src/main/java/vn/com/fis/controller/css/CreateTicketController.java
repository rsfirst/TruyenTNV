package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CreateTicketController
{
	@RequestMapping("/bs/create-ticket")
	public String index()
	{
		return "css/create-ticket";
	}
}
