package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

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
import vn.com.fis.model.epos.StockShopDetailsGoodsEntity;
import vn.com.fis.model.epos.StockShopEntity;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class InputFromCenterController
{

	private static final Logger LOG = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = Constants.REQUEST_MAPPING.InputForm_link)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_INPUTFORM_LINK + "')")
	public String preOrderStatus()
	{
		return Constants.REQUEST_MAPPING.InputForm_views;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_VALUE_SHOP_InputForm, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getVctResourceList(HttpServletRequest request)
	{
		String nomeMetodo = ".getVctResourceList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		List<StockShopEntity> list = new ArrayList<StockShopEntity>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_VALUE_SHOP_InputForm;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StockShopEntity>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockShopEntity>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SEARCH_SHOP_InputForm, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getSearchValueShop(HttpServletRequest request, @RequestBody StockShopEntity input)
	{
		String nomeMetodo = ".getSearchValueShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockShopEntity> list = new ArrayList<StockShopEntity>();
		MessagesResponse re = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SEARCH_SHOP_InputForm;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StockShopEntity>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockShopEntity>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SEARCH_DetailsList, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getSearchDetailsList(HttpServletRequest request, @RequestBody StockShopDetailsGoodsEntity input)
	{
		String nomeMetodo = ".getSearchDetailsList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<StockShopDetailsGoodsEntity> list = new ArrayList<StockShopDetailsGoodsEntity>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SEARCH_DetailsList;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StockShopDetailsGoodsEntity>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockShopDetailsGoodsEntity>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SEARCH_GetSerialList, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getSearchSerialList(HttpServletRequest request, @RequestBody StockShopDetailsGoodsEntity input)
	{
		String nomeMetodo = ".getSearchDetailsList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<StockShopDetailsGoodsEntity> list = new ArrayList<StockShopDetailsGoodsEntity>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SEARCH_GetSerialList;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StockShopDetailsGoodsEntity>>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockShopDetailsGoodsEntity>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.INSERT_InputForm, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> onInsertInputForm(HttpServletRequest request, @RequestBody StockShopEntity input)
	{
		String nomeMetodo = ".onInsertInputForm() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		String list = "";
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.INSERT_InputForm;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<String>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(list, HttpStatus.OK);
	}
}
