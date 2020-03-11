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

import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectSearch;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockTransactionList;
import vn.com.fis.model.epos.StockTransactionObj;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ImportStockFromInferiorController
{

	private static final Logger LOG = LoggerFactory.getLogger(ImportStockFromInferiorController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_INPUT_STOCK_FROM_INFERIOR)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_INPUT_STOCK_FROM_INFERIOR + "')")
	public String formStockImportInferior()
	{
		return Constants.REQUEST_MAPPING.IMPORT_STOCKS_FROM_INFERIOR_LINK;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_REASON_BY_CODE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getReason(HttpServletRequest request, @RequestBody String input)
	{
		String nomeMetodo = ".getVctResourceList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ReasonObject reason = null;
		Gson gson = new Gson();
		try
		{
			// String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_REASON_BY_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				reason = jsonMapper.readValue(tmp.toString(), new TypeReference<ReasonObject>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<ReasonObject>(reason, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LIST_STATUS_FORM_INPUT_STOCK_FROM_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getStatusList(HttpServletRequest request)
	{
		String nomeMetodo = ".getStatusList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<String> list = new ArrayList<String>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_LIST_STATUS_FORM_INPUT_STOCK_FROM_INFERIOR;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_IMPORT_FROM_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> searchCommandImport(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".searchCommandImport() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockTransactionList> lst = new ArrayList<StockTransactionList>();
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STOCK_IMPORT_FROM_INFERIOR;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				lst = jsonMapper.readValue(re.getListResult(), new TypeReference<List<StockTransactionList>>() {
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
		return new ResponseEntity<List<StockTransactionList>>(lst, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_TRIP_IMPORT_ISFI, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getStockSerialTripImport(HttpServletRequest request, @RequestBody ObjectSearch search)
	{
		String nomeMetodo = ".getStockSerialTripImport() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> lst = new ArrayList<TransactionSerialList>();
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(search);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_TRIP_IMPORT_ISFI;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				lst = jsonMapper.readValue(re.getListResult(), new TypeReference<List<TransactionSerialList>>() {
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
		return new ResponseEntity<List<TransactionSerialList>>(lst, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_TRIP_IMPORT_FOR_RIGHT_ISFI, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getStockSerialTripImportForRight(HttpServletRequest request, @RequestBody ObjectSearch search)
	{
		String nomeMetodo = ".getStockSerialTripImportForRight() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> lst = new ArrayList<TransactionSerialList>();
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(search);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_TRIP_IMPORT_FOR_RIGHT_ISFI;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				lst = jsonMapper.readValue(re.getListResult(), new TypeReference<List<TransactionSerialList>>() {
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
		return new ResponseEntity<List<TransactionSerialList>>(lst, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.IMPORT_STOCK_TRANSACTION_ISFI, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> setImportCommandStockTransaction(HttpServletRequest request, @RequestBody GoodTransactionsModel good)
	{
		String nomeMetodo = ".setImportCommandStockTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String rs = "0";
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(good);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.IMPORT_STOCK_TRANSACTION_ISFI;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				rs = jsonMapper.readValue(re.getCode(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(rs, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.APPROVE_STOCK_TRANSACTION_ISFI, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> setApproveCommandStockTransaction(HttpServletRequest request, @RequestBody GoodTransactionsModel good)
	{
		String nomeMetodo = ".setApproveCommandStockTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String rs = "0";
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(good);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.APPROVE_STOCK_TRANSACTION_ISFI;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				rs = jsonMapper.readValue(re.getCode(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(rs, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.REJECT_STOCK_TRANSACTION_ISFI, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> setRejectCommandStockTransaction(HttpServletRequest request, @RequestBody GoodTransactionsModel good)
	{
		String nomeMetodo = ".setRejectCommandStockTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String rs = "0";
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(good);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.REJECT_STOCK_TRANSACTION_ISFI;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				rs = jsonMapper.readValue(re.getCode(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(rs, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.SPIRIT_STOCK_TRANSACTION_ISFI, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> spiritStockTransaction(HttpServletRequest request, @RequestBody GoodTransactionsModel good)
	{
		String nomeMetodo = ".spiritStockTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String rs = "0";
		MessagesResponse re = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(good);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SPIRIT_STOCK_TRANSACTION_ISFI;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				rs = jsonMapper.readValue(re.getCode(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(rs, HttpStatus.OK);
	}
}
