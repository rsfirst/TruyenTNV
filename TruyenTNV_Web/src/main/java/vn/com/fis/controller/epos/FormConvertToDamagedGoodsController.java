package vn.com.fis.controller.epos;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormConvertToDamagedGoodsController
{

	private static final Logger LOG = LoggerFactory.getLogger(FormConvertToDamagedGoodsController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.URL_CONVERT_TO_DAMAGED_GOODS)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_URL_CONVERT_TO_DAMAGED_GOODS + "')")
	public String stockExportToCenter()
	{
		return "epos/inventory/FormConvertToDamagedGoods";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_CONVERT_TO_DAMAGED_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSave(HttpServletRequest request, @RequestBody StockTransObject stockTrans)
	{
		String nomeMetodo = ".onSave() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		String mstrStockTransID = "";
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(stockTrans);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_CONVERT_TO_DAMAGED_GOODS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (mess.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(mess.getMessages());
			} else
			{
				mstrStockTransID = mess.getCode();
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		mess.setCode(mess.getCode());
		mess.setStatus(String.valueOf(CommonConstant.STATUS_ACTIVE));
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}
}
