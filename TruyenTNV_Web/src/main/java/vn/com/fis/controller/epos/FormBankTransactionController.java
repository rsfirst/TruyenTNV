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

import vn.com.fis.model.epos.AccountType;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.BankDepositInput;
import vn.com.fis.model.epos.BankDepositOutput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormBankTransactionController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormBankTransactionController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_BANK_TRANSACTION + "')")
	public String FormDestroyTransactionControllerAction()
	{
		return "epos/sales/FormBankTransaction";
	}

	// lay danh sach kieu giao dich
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RECEIPT_TYPE_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReceiptType(HttpServletRequest request)
	{
		String nomeMetodo = ".getReceiptType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RECEIPT_TYPE_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
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
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}

	// lay danh sach ly do
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_REASON_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReason(HttpServletRequest request)
	{
		String nomeMetodo = ".getReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ReasonObject> list = new ArrayList<ReasonObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_REASON_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
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
		return new ResponseEntity<List<ReasonObject>>(list, HttpStatus.OK);
	}

	// lay danh sach tk
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_ACCOUNT_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAccountType(HttpServletRequest request)
	{
		String nomeMetodo = ".getAccountType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<AccountType> list = new ArrayList<AccountType>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ACCOUNT_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<AccountType>>() {
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
		return new ResponseEntity<List<AccountType>>(list, HttpStatus.OK);
	}

	// xu ly nut tim kiem
	@RequestMapping(value = Constants.REQUEST_MAPPING.ON_SEARCH_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSearch(HttpServletRequest request, @RequestBody BankDepositInput input)
	{
		String nomeMetodo = ".onSearch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<BankDepositOutput> list = new ArrayList<BankDepositOutput>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ON_SEARCH_FORM_BANK_TRANSACTION;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<BankDepositOutput>>() {
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
		return new ResponseEntity<List<BankDepositOutput>>(list, HttpStatus.OK);
	}

	// lay danh sach chung tu
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RECEIPT_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReceipt(HttpServletRequest request)
	{
		String nomeMetodo = ".getReceipt() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RECEIPT_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
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
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}

	// lay danh sach trang thai
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STATUS_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStatus(HttpServletRequest request)
	{
		String nomeMetodo = ".getStatus() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STATUS_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
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
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}

	// lay danh sach ngan hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_BANK_NAME_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getBankName(HttpServletRequest request, @RequestBody String shopId)
	{
		String nomeMetodo = ".getBankAccount() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<BankDepositOutput> list = new ArrayList<BankDepositOutput>();
		try
		{

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_BANK_NAME_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<BankDepositOutput>>() {
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
		return new ResponseEntity<List<BankDepositOutput>>(list, HttpStatus.OK);
	}

	// lay danh sach ngan hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_BANK_ACCOUNT_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getBankAccount(HttpServletRequest request, @RequestBody String shopId)
	{
		String nomeMetodo = ".getBankAccount() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<BankDepositOutput> list = new ArrayList<BankDepositOutput>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_BANK_ACCOUNT_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<BankDepositOutput>>() {
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
		return new ResponseEntity<List<BankDepositOutput>>(list, HttpStatus.OK);
	}

	// lay so phieu
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RECEIPT_NO_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReceiptNo(HttpServletRequest request, @RequestBody BankDepositInput input)
	{
		String nomeMetodo = ".getReceiptNo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		String list = "";
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RECEIPT_NO_FORM_BANK_TRANSACTION;
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
				list = re.getMessages();
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

	// lay danh sach ly do
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_REASON_PNL_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReasonPnl(HttpServletRequest request)
	{
		String nomeMetodo = ".getReasonPnl() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ReasonObject> list = new ArrayList<ReasonObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_REASON_PNL_FORM_BANK_TRANSACTION;
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
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
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
		return new ResponseEntity<List<ReasonObject>>(list, HttpStatus.OK);
	}

	// xu ly update so chung tu
	@RequestMapping(value = Constants.REQUEST_MAPPING.UPDATE_RECEIPT_NO_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateReceiptNo(HttpServletRequest request, @RequestBody BankDepositInput input)
	{
		String nomeMetodo = ".updateReceiptNo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String id = "aaaaaa";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.UPDATE_RECEIPT_NO_FORM_BANK_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp, new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
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
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(gson.toJson(id), HttpStatus.OK);
	}

	// xu ly nut lap chung tu
	@RequestMapping(value = Constants.REQUEST_MAPPING.CREATE_BANK_DEPOSIT_FORM_BANK_TRANSACTION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createBankDeposit(HttpServletRequest request, @RequestBody BankDepositInput input)
	{
		String nomeMetodo = ".createBankDeposit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String id = "aaaaaa";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CREATE_BANK_DEPOSIT_FORM_BANK_TRANSACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp, new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
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
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(gson.toJson(id), HttpStatus.OK);
	}
}
