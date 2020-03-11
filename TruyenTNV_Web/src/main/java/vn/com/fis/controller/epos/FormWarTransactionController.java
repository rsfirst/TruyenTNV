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

import vn.com.fis.business.epos.StockViewInfoBusiness;
import vn.com.fis.model.epos.EnqueryWar;
import vn.com.fis.model.epos.GoodsInformation;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.WarTransaction;
import vn.com.fis.model.epos.WarTransactionReport;
import vn.com.fis.model.epos.WarrantyHistory;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormWarTransactionController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormWarTransactionController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;

	/**
	 * LinkForm() in Controller
	 * 
	 * @param
	 * @return
	 * @throws @Author:
	 *             FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_LINK, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_WAR_TRANSACTION_LINK + "')")
	public String formWarTransaction()
	{
		return "epos/sales/formWarTransaction";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DIALOG_ENQUERY_WARRANTY)
	public String dialogEnqueryWarranty()
	{
		return "sales/dialogEnqueryWarranty";
	}

	/**
	 * findWarTrans() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<WarTransaction>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_SEARCH_FIND_WAR_TRANS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> findWarTrans(HttpServletRequest request, @RequestBody WarTransaction input) throws Exception
	{
		String nomeMetodo = ".findWarTrans() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<WarTransaction> lstWarTransaction = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_SEARCH_FIND_WAR_TRANS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstWarTransaction = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<WarTransaction>>() {
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
		return new ResponseEntity<List<WarTransaction>>(lstWarTransaction, HttpStatus.OK);
	}

	/**
	 * onSearchWarranty() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<EnqueryWar>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_SEARCH_WARRANTY, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSearchWarranty(HttpServletRequest request, @RequestBody EnqueryWar input) throws Exception
	{
		String nomeMetodo = ".onSearchWarranty() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<EnqueryWar> lstEnqueryWar = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_SEARCH_WARRANTY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstEnqueryWar = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<EnqueryWar>>() {
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
		return new ResponseEntity<List<EnqueryWar>>(lstEnqueryWar, HttpStatus.OK);
	}

	/**
	 * getGoodsInformation() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<GoodsInformation>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_GET_GOODS_INFORMATION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getGoodsInformation(HttpServletRequest request, @RequestBody GoodsInformation input) throws Exception
	{
		String nomeMetodo = ".getGoodsInformation() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<GoodsInformation> lstGoodsInformation = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_GET_GOODS_INFORMATION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstGoodsInformation = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<GoodsInformation>>() {
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
		return new ResponseEntity<List<GoodsInformation>>(lstGoodsInformation, HttpStatus.OK);
	}

	/**
	 * getWarrantyHistory() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<WarrantyHistory>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_GET_WARRANTY_HISTORY, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getWarrantyHistory(HttpServletRequest request, @RequestBody WarrantyHistory input) throws Exception
	{
		String nomeMetodo = ".getWarrantyHistory() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<WarrantyHistory> lstWarrantyHistory = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_GET_WARRANTY_HISTORY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstWarrantyHistory = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<WarrantyHistory>>() {
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
		return new ResponseEntity<List<WarrantyHistory>>(lstWarrantyHistory, HttpStatus.OK);
	}

	/**
	 * onUpdateWarrantyTransaction() in Controller
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_UPDATE_WARRANTY_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onUpdateWarrantyTransaction(HttpServletRequest request, @RequestBody WarTransaction input) throws Exception
	{
		String nomeMetodo = ".onUpdateWarrantyTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_UPDATE_WARRANTY_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
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
		return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
	}

	/**
	 * onInsertWarrantyTransaction() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<String>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_INSERT_WARRANTY_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onInsertWarrantyTransaction(HttpServletRequest request, @RequestBody WarTransaction input) throws Exception
	{
		String nomeMetodo = ".onInsertWarrantyTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<String> lstReturn = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_INSERT_WARRANTY_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<String>>() {
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
		return new ResponseEntity<List<String>>(lstReturn, HttpStatus.OK);
	}

	/**
	 * onPushUp() in Controller
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_PUSH_UP, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onPushUp(HttpServletRequest request, @RequestBody WarTransaction input) throws Exception
	{
		String nomeMetodo = ".onPushUp() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_ON_PUSH_UP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
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
		return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
	}

	/**
	 * getWarTransValueReport() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<WarTransactionReport>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_GET_WAR_TRANS_VALUE_REPORT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getWarTransValueReport(HttpServletRequest request, @RequestBody WarTransactionReport input) throws Exception
	{
		String nomeMetodo = ".getWarTransValueReport() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<WarTransactionReport> lstWarTransactionReport = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_WAR_TRANSACTION_GET_WAR_TRANS_VALUE_REPORT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (CommonConstant.STATUS_DEFAULT.equals(message.getStatus()))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstWarTransactionReport = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<WarTransactionReport>>() {
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
		return new ResponseEntity<List<WarTransactionReport>>(lstWarTransactionReport, HttpStatus.OK);
	}
}
