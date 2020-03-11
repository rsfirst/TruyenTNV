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

import vn.com.fis.business.epos.RennewWarrantyNumberBusiness;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.ReceiverAgentModel;
import vn.com.fis.model.epos.StaffObject;
import vn.com.fis.model.epos.StatesList;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.model.epos.WarrantyActionModel;
import vn.com.fis.model.epos.WarrantyModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class RenewWarrantyNumberController
{
	private static final Logger LOG = LoggerFactory.getLogger(StockExportToCenterController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	RennewWarrantyNumberBusiness rennewWarrantyNumberBusiness;

	@RequestMapping(value = Constants.REQUEST_MAPPING.LINK_RENEW_WARRANTY_NUMBER, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_LINK_RENEW_WARRANTY_NUMBER + "')")
	public String ExportToDealerAction()
	{
		return "epos/inventory/RenewWarrantyNumber";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_LOWRECEIVER_AGENT, method = RequestMethod.POST)
	public ResponseEntity<?> getLowReceiverAgent(HttpServletRequest request, @RequestBody String shopId)
	{
		String nomeMetodo = ".getShopType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReceiverAgentModel> listLowReceiverAgent = new ArrayList<ReceiverAgentModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_LOWRECEIVER_AGENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", shopId);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listLowReceiverAgent = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReceiverAgentModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReceiverAgentModel>>(listLowReceiverAgent, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_REASON, method = RequestMethod.POST)
	public ResponseEntity<?> getReason(HttpServletRequest request)
	{
		String nomeMetodo = ".getShopType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReasonObject> listReason = new ArrayList<ReasonObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_REASON;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonObject>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReasonObject>>(listReason, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_lOW_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> getLowStaff(HttpServletRequest request, @RequestBody String shopId)
	{
		String nomeMetodo = ".getLowStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> listLowStaff = new ArrayList<StaffObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_lOW_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", shopId);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listLowStaff = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(listLowStaff, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_SEARCH_LIST_WARANTY_ACTION, method = RequestMethod.POST)
	public ResponseEntity<?> getWarrantyActionList(HttpServletRequest request, @RequestBody WarrantyModel p_wa)
	{
		String nomeMetodo = ".getWarrantyActionList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<WarrantyActionModel> listWarrantyActionModel = new ArrayList<WarrantyActionModel>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(p_wa);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_SEARCH_LIST_WARANTY_ACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listWarrantyActionModel = jsonMapper.readValue(tmp.toString(), new TypeReference<List<WarrantyActionModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<WarrantyActionModel>>(listWarrantyActionModel, HttpStatus.OK);
	}

	// load STATELIST
	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_STATE_lIST, method = RequestMethod.POST)
	public ResponseEntity<?> getLiStatesList(HttpServletRequest request)
	{
		String nomeMetodo = ".getLiStatesList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StatesList> listStateList = new ArrayList<StatesList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_STATE_lIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listStateList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StatesList>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StatesList>>(listStateList, HttpStatus.OK);
	}

	// load goods list
	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_GOOD_lIST, method = RequestMethod.POST)
	public ResponseEntity<?> getGoodsList(HttpServletRequest request)
	{
		String nomeMetodo = ".getGoodsList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodsList> listGoodList = new ArrayList<GoodsList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_GOOD_lIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listGoodList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodsList>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodsList>>(listGoodList, HttpStatus.OK);
	}
	// load dữ liệu để in

	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_VALUE_PRINT_WARRANTY, method = RequestMethod.POST)
	public ResponseEntity<?> getValueWarranty(HttpServletRequest request, @RequestBody WarrantyActionModel input)
	{
		String nomeMetodo = ".getValueWarranty()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<String> result = new ArrayList<String>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_GET_VALUE_PRINT_WARRANTY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_RENEW_WARRANTY_SUCCESS, method = RequestMethod.POST)
	public ResponseEntity<?> renewWarranty(HttpServletRequest request, @RequestBody WarrantyActionModel input)
	{
		String nomeMetodo = ".renewWarranty()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String result = "";
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_RENEW_WARRANTY_SUCCESS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

	//
	@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_INSERT_ITEM_LIST_WARANTY_ACTION, method = RequestMethod.POST)
	public ResponseEntity<?> reGetWarrantyActionList(HttpServletRequest request, @RequestBody String warAction)
	{
		String nomeMetodo = ".reGetWarrantyActionList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<WarrantyActionModel> listWarrantyActionModel = new ArrayList<WarrantyActionModel>();
		try
		{

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_INSERT_ITEM_LIST_WARANTY_ACTION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", warAction);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listWarrantyActionModel = jsonMapper.readValue(tmp.toString(), new TypeReference<List<WarrantyActionModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<WarrantyActionModel>>(listWarrantyActionModel, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_WARANTY_NO, method = RequestMethod.POST)
	public ResponseEntity<?> generateWarrantyNo(HttpServletRequest request, @RequestBody List<TransactionSerialList> lstTransSerial)
	{
		String nomeMetodo = ".generateWarrantyNoBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> listWarrantyNo = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(lstTransSerial);
			
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_WARANTY_NO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listWarrantyNo = jsonMapper.readValue(tmp.toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(listWarrantyNo, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LIST_SERIAL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockSerialSingle(HttpServletRequest request,@RequestBody TransactionSerialList input)
	{
		
		String nomeMetodo = ".getStockSerialByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
		
			String tmp = "";
			
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_LIST_SERIAL;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
		
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}
		}
		catch (Exception e)
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
		return new ResponseEntity<List<TransactionSerialList>>(list, HttpStatus.OK);
	}
	

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SERIAL_WARRANTY_FILE2, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSerialListWarrantyFile(HttpServletRequest request,@RequestBody TransactionSerialList input)
	{
		
		String nomeMetodo = ".getStockSerialByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<TransactionSerialList> lst = new ArrayList<TransactionSerialList>();
		List<String> lstSerial = new ArrayList<>();

		String mess = "";
		List<TransactionSerialList> lstTransactionSerial = new ArrayList<TransactionSerialList>();

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
		
			String tmp = "";
			
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_LIST_SERIAL;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
		
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
				for (TransactionSerialList s : list)
				{
					lstSerial.add(s.getFromSerial());
				}
				lstTransactionSerial = input.getLstTransSerial();
				if (list.size() == 0)
				{
					for (int i = 0; i < lstTransactionSerial.size(); i++)
					{
						mess += "Serial '" + lstTransactionSerial.get(i).getFromSerial() + "' do not exist or not enought condition\n";
					}
				} else
				{
					for (int i = 0; i < lstTransactionSerial.size(); i++)
					{
						if (!lstSerial.contains(lstTransactionSerial.get(i).getFromSerial()))
						{
							mess += "Serial '" + lstTransactionSerial.get(i).getFromSerial() + "' do not exist or not enought condition\n";
						}
					}
				}
				if (mess != null && !"".equals(mess))
				{
					throw new Exception(mess);
				}
				
				
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse messs = new MessagesResponse();
			messs.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				messs.setMessages("java.lang.NullPointerException");
			}
			messs.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(messs, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(list, HttpStatus.OK);
	}
	


}
