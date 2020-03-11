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
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.model.epos.WarrantyModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormPrintingWarrantyController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormPrintingWarrantyController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	
	@RequestMapping(Constants.REQUEST_MAPPING.FORM_PRINT_WARRANTY)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_PRINT_WARRANTY + "')")
	public String FormPrintingWarrantyControllerAction()
	{
		return "epos/inventory/FormPrintWarranty";
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_REASON_FORM_PRINT_WARRANTY, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListReason(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getListReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ReasonObject> lstReasonReturn = new ArrayList<ReasonObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_REASON_FORM_PRINT_WARRANTY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReasonReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ReasonObject>>() {
				});
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReasonObject>>(lstReasonReturn, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_WARRANTY_SERIAL_FORM_PRINT_WARRANTY_RE_NEW, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getWarrantySerialReNew(HttpServletRequest request, @RequestBody WarrantyModel input) throws Exception
	{
		String nomeMetodo = ".getWarrantySerialReNew() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<WarrantyModel> lstWarrantyDetailReturn = new ArrayList<WarrantyModel>();
		Gson gson = new Gson();
		try
		{	
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_WARRANTY_SERIAL_FORM_PRINT_WARRANTY_RE_NEW;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				lstWarrantyDetailReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<WarrantyModel>>() {
				});
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<WarrantyModel>>(lstWarrantyDetailReturn, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LIST_SHOP, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListShop(HttpServletRequest request, @RequestBody String shopId) throws Exception
	{
		String nomeMetodo = ".getListShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<StocksList> lstShopReturn = new ArrayList<StocksList>();
		List<StocksList> lstShop = new ArrayList<StocksList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_ENQUERY_SERIAL_GET_CHILDS_STOCK_TREE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", shopId);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstShopReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<StocksList>>() {
				});
				for(int i = 0; i < lstShopReturn.size(); i++) {
					if("Cửa hàng".equals(lstShopReturn.get(i).getType())) {
						lstShop.add(lstShopReturn.get(i));
					}
				}
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StocksList>>(lstShop, HttpStatus.OK);
	}

}
