package vn.com.fis.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;

import vn.com.fis.common.CommonConstant;
import vn.com.fis.common.Constants;

@Controller
public class CommonController
{
	private static final Logger LOG = LoggerFactory.getLogger(LoggerFactory.class);

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SHOP_NAME, method = RequestMethod.POST)
	public ResponseEntity<?> getShopNameByStockId(@RequestBody String stockId)
	{
		String nomeMetodo = ".getShopNameByStockId() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Gson gson = new Gson();
		String shopName = "";
		try
		{
			shopName = "stockId: "+stockId;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(gson.toJson(shopName), HttpStatus.OK);
	}
}
