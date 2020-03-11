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

import vn.com.fis.entity.epos.ReasonEntity;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockTransactionModel;
import vn.com.fis.model.epos.StockTransactionSearchInputObject;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormStockTransEnqueryController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormStockTransEnqueryController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_STOCK_TRANS_ENQUERY_LINK)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_STOCK_TRANS_ENQUERY_LINK + "')")
	public String FormStockTransEnquery()
	{
		return Constants.REQUEST_MAPPING.FORM_STOCK_TRANS_ENQUERY_VIEW;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_FORM_STOCK_TRANS_ENQUERY_LIST_STOCKS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getRelationStocksList(HttpServletRequest request, @RequestBody String shopId)
	{
		String nomeMetodo = ".getRelationStocksList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StocksList> list = new ArrayList<StocksList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_FORM_STOCK_TRANS_ENQUERY_LIST_STOCKS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", shopId);

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StocksList>>() {
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
		return new ResponseEntity<List<StocksList>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.SEARCH_FORM_STOCK_TRANS_ENQUERY_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> searchStockTransaction(HttpServletRequest request, @RequestBody StockTransactionSearchInputObject input)
	{
		String nomeMetodo = ".searchStockTransaction()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StockTransactionModel> list = new ArrayList<StockTransactionModel>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SEARCH_FORM_STOCK_TRANS_ENQUERY_TRANSACTION;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StockTransactionModel>>() {
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
		return new ResponseEntity<List<StockTransactionModel>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_FORM_STOCK_TRANS_ENQUERY_REASON_LIST, method = RequestMethod.POST)
	public ResponseEntity<?> getListReasons(HttpServletRequest request)
	{
		String nomeMetodo = ".getListReasons() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<ReasonEntity> list = new ArrayList<ReasonEntity>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_FORM_STOCK_TRANS_ENQUERY_REASON_LIST;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ReasonObject>>() {
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
		return new ResponseEntity<List<ReasonEntity>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_FORM_STOCK_TRANS_ENQUERY_NAME_LIST, method = RequestMethod.POST)
	public ResponseEntity<?> getListName(HttpServletRequest request)
	{
		String nomeMetodo = ".getListName() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<KeyValueObj> list = new ArrayList<KeyValueObj>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_FORM_STOCK_TRANS_ENQUERY_NAME_LIST;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<KeyValueObj>>() {
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
		return new ResponseEntity<List<KeyValueObj>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.DestroyTrans_FORM_STOCK_TRANS_ENQUERY_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> destroyTransaction(HttpServletRequest request, @RequestBody StockTransactionModel input)
	{
		String nomeMetodo = ".destroyTransaction()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String check = "";
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.DestroyTrans_FORM_STOCK_TRANS_ENQUERY_TRANSACTION;
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
				check = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(check, HttpStatus.OK);
	}

}
