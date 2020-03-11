package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostpaidControllerW
{
    @RequestMapping("/bs/postpaid")
    public String index()
    {
        return "css/postpaid/postpaid";
    }

    @RequestMapping("/bs/postpaidManagement")
    public String postpaidManagement()
    {
        return "css/postpaid/postpaidManagement";
    }

    @RequestMapping("/popup/bs/formPostpaidChild")
    public String formPostpaidChild()
    {
        return "css/postpaid/formPostpaidChild";
    }

    @RequestMapping("/popup/bs/formSearchParentChild")
    public String formSearchParentChild()
    {
        return "css/postpaid/formSearchParentChild";
    }

    @RequestMapping("/popup/bs/formTabHistory")
    public String formTabHistory()
    {
        return "css/postpaid/formTabHistory";
    }

}
