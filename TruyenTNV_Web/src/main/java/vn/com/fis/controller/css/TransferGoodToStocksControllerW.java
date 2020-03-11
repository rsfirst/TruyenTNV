package vn.com.fis.controller.css;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TransferGoodToStocksControllerW
{

    @RequestMapping("/bs/transferToShop")
    public String transferToShop()
    {
        return "css/transfer/transferToShop";
    }

    @RequestMapping("/bs/transferGoods")
    public String transferGoods()
    {
        return "css/transfer/transferGoods";
    }

}
