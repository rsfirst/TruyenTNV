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

import vn.com.fis.model.epos.InputEstablishEntity;
import vn.com.fis.model.epos.InputEstablishGoodsEntity;
import vn.com.fis.model.epos.InputEstablishObj;
import vn.com.fis.model.epos.InputEstablishservice;
import vn.com.fis.model.epos.InsertFomInvoiceEstablishObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormInvoiceEstablishController
{

	private static final Logger LOG = LoggerFactory.getLogger(FormInvoiceEstablishController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.DialogInvoiceInputEstablish_link)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORMINVOICE_ESTABLISH + "')")
	public String DialogInvoiceInputEstablish()
	{
		return Constants.REQUEST_MAPPING.DialogInvoiceInputEstablish_views;
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.onSearchInputEstablish, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> onSearchInputEstablish(HttpServletRequest request, @RequestBody InputEstablishObj input)
	{
		String nomeMetodo = ".onSearchInputEstablish() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputEstablishEntity> list = new ArrayList<InputEstablishEntity>();
		MessagesResponse re = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.onSearchInputEstablish;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<InputEstablishEntity>>() {
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
		return new ResponseEntity<List<InputEstablishEntity>>(list, HttpStatus.OK);
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.onSearchInputEstablishSEVIRCE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> onSearchService(HttpServletRequest request, @RequestBody InputEstablishObj input)
	{
		String nomeMetodo = ".onSearchService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputEstablishservice> list = new ArrayList<InputEstablishservice>();
		MessagesResponse re = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.onSearchInputEstablishSEVIRCE;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<InputEstablishservice>>() {
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
		return new ResponseEntity<List<InputEstablishservice>>(list, HttpStatus.OK);
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.onSearchInputEstablishGOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> onSearchGoods(HttpServletRequest request, @RequestBody InputEstablishObj input)
	{
		String nomeMetodo = ".onSearchGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InputEstablishGoodsEntity> list = new ArrayList<InputEstablishGoodsEntity>();
		MessagesResponse re = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.onSearchInputEstablishGOODS;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<InputEstablishGoodsEntity>>() {
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
		return new ResponseEntity<List<InputEstablishGoodsEntity>>(list, HttpStatus.OK);
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.on_Insert_Input_Establish, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> onInsert(HttpServletRequest request, @RequestBody InsertFomInvoiceEstablishObj input)
	{
		String nomeMetodo = ".onInsert() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		String list = "";
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.on_Insert_Input_Establish;
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
				
				list = re.getListResult();
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
		return new ResponseEntity<String>(new Gson().toJson(list), HttpStatus.OK);
	}
}
