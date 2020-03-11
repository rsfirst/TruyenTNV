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
import vn.com.fis.model.epos.AccountType;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.BankDepositData;
import vn.com.fis.model.epos.BankDepositInput;
import vn.com.fis.model.epos.BankDepositOutput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.ShopObject;
import vn.com.fis.model.epos.StaffObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormBankTransactionApproveController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormBankTransactionApproveController.class);
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
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_LINK, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_BANK_TRANSACTION_APPROVE_LINK + "')")
	public String formStaffStockView()
	{
		return "epos/sales/formBankTransactionApprove";
	}

	/**
	 * getListApDomain() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<ApDomainModel>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_LIST_AP_DOMAIN, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListApDomain(HttpServletRequest request, @RequestBody String type) throws Exception
	{
		String nomeMetodo = ".getListApDomain() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ApDomainModel> lstApDomainReturn = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_LIST_AP_DOMAIN;
			String tmp = webService.apiServiceMethodPOST(request, url, "", type);

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
				lstApDomainReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
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
		return new ResponseEntity<List<ApDomainModel>>(lstApDomainReturn, HttpStatus.OK);
	}

	/**
	 * getShopListFromRoot() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<ShopObject>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_SHOP_LIST_FROM_ROOT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getShopListFromRoot(HttpServletRequest request, @RequestBody String shopId) throws Exception
	{
		String nomeMetodo = ".getShopListFromRoot() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ShopObject> lstShopReturn = new ArrayList<ShopObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_SHOP_LIST_FROM_ROOT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", shopId);

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
				lstShopReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ShopObject>>() {
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
		return new ResponseEntity<List<ShopObject>>(lstShopReturn, HttpStatus.OK);
	}

	/**
	 * getStaffListFromRoot() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<StaffObject>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_STAFF_LIST_FROM_ROOT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStaffListFromRoot(HttpServletRequest request, @RequestBody String shopId) throws Exception
	{
		String nomeMetodo = ".getStaffListFromRoot() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<StaffObject> lstStaffReturn = new ArrayList<StaffObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_STAFF_LIST_FROM_ROOT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", shopId);

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
				lstStaffReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<StaffObject>>() {
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
		return new ResponseEntity<List<StaffObject>>(lstStaffReturn, HttpStatus.OK);
	}

	/**
	 * getNextReceiptNo() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<String>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_STAFF_NEXT_RECEIPT_NO, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getNextReceiptNo(HttpServletRequest request, @RequestBody List<String> input) throws Exception
	{
		String nomeMetodo = ".getStaffListFromRoot() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<String> lstNextReceiptNo = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_STAFF_NEXT_RECEIPT_NO;
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
				lstNextReceiptNo = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<String>>() {
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
		return new ResponseEntity<List<String>>(lstNextReceiptNo, HttpStatus.OK);
	}

	/**
	 * enqueryBankDeposit() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<BankDepositOutput>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_ENQUERY_BANK_DEPOSIT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> enqueryBankDeposit(HttpServletRequest request, @RequestBody BankDepositInput input) throws Exception
	{
		String nomeMetodo = ".enqueryBankDeposit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<BankDepositOutput> lstBankDepositOutput = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_ENQUERY_BANK_DEPOSIT;
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
				lstBankDepositOutput = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<BankDepositOutput>>() {
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
		return new ResponseEntity<List<BankDepositOutput>>(lstBankDepositOutput, HttpStatus.OK);
	}

	/**
	 * getReasonListByType() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<ReasonObject>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_LIST_REASON_BY_TYPE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReasonListByType(HttpServletRequest request, @RequestBody List<String> input) throws Exception
	{
		String nomeMetodo = ".getReasonListByType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ReasonObject> lstReasonObject = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_LIST_REASON_BY_TYPE;
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
				lstReasonObject = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<ReasonObject>>() {
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
		return new ResponseEntity<List<ReasonObject>>(lstReasonObject, HttpStatus.OK);
	}

	/**
	 * getListAccountType() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<ReasonObject>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_LIST_ACCOUNT_TYPE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListAccountType(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getReasonListByType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<AccountType> lstAccountType = new ArrayList<>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_GET_LIST_ACCOUNT_TYPE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

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
				lstAccountType = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<AccountType>>() {
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
		return new ResponseEntity<List<AccountType>>(lstAccountType, HttpStatus.OK);
	}

	/**
	 * approveBankDeposit() in Controller
	 * 
	 * @param request,input
	 * @return ResponseEntity<MessagesResponse>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_APPROVE_BANK_DEPOSIT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> approveBankDeposit(HttpServletRequest request, @RequestBody BankDepositData input)
	{
		String nomeMetodo = "FormStockImportFromPartnerController.approveBankDeposit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Gson gson = new Gson();
		MessagesResponse message = new MessagesResponse();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_APPROVE_BANK_DEPOSIT;
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
		return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
	}

	/**
	 * destroyBankDeposit() in Controller
	 * 
	 * @param request,input
	 * @return ResponseEntity<MessagesResponse>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_DESTROY_BANK_DEPOSIT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> destroyBankDeposit(HttpServletRequest request, @RequestBody BankDepositData input)
	{
		String nomeMetodo = "FormStockImportFromPartnerController.approveBankDeposit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Gson gson = new Gson();
		MessagesResponse message = new MessagesResponse();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_BANK_TRANSACTION_APPROVE_DESTROY_BANK_DEPOSIT;
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
		return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
	}
}
