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

import vn.com.fis.business.epos.ExportToInferiorBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.DataImportWarranty;
import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectForDoSomething;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockShopDetailsGoodsEntity;
import vn.com.fis.model.epos.StockTransactionList;
import vn.com.fis.model.epos.StockTransactionObj;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ExportToInferiorController
{

	private static final Logger LOG = LoggerFactory.getLogger(ExportToInferiorController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	ExportToInferiorBusiness exportToInferiorbusiness;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_EXPORT_TO_INFERIOR)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_EXPORT_TO_INFERIOR + "')")
	public String ExportToInferiorControllerAction()
	{
		return "epos/inventory/ExportToInferior";
	}

	// lay danh sach loai cua hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SHOP_TYPE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getShopTypeList(HttpServletRequest request)
	{
		String nomeMetodo = ".getShopTypeList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SHOP_TYPE;
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
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STATUS_LIST, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStatusList(HttpServletRequest request)
	{
		String nomeMetodo = ".getStatusList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STATUS_LIST;
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

	// lay danh sach nguon hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RESOURCE_CODE_LIST, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getResourceCodeList(HttpServletRequest request)
	{
		String nomeMetodo = ".getResourceCodeList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RESOURCE_CODE_LIST;
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

	// lay danh sach loai hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_INTERNAL_STOCK_LIST, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getInternalStockList(HttpServletRequest request)
	{
		String nomeMetodo = ".getInternalStockList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<KeyValueObj> list = new ArrayList<KeyValueObj>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_INTERNAL_STOCK_LIST;
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

	// lay danh sach ly do
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_REASON_XCD, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReasonByCode(HttpServletRequest request)
	{
		String nomeMetodo = ".getReasonByCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<ReasonObject> list = new ArrayList<ReasonObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_REASON_XCD;
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

	// lay danh sach kho nhap
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_CHILDS_STOCK, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getChildsStock(HttpServletRequest request, @RequestBody String stockId)
	{
		String nomeMetodo = ".getChildsStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<StocksList> list = new ArrayList<StocksList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_CHILDS_STOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", stockId);

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

	// xu ly nut tim kiem
	@RequestMapping(value = Constants.REQUEST_MAPPING.ON_SEARCH_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSearch(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".onSearch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<StockTransactionList> list = new ArrayList<StockTransactionList>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ON_SEARCH_EXPORT_TO_INFERIOR;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StockTransactionList>>() {
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
		return new ResponseEntity<List<StockTransactionList>>(list, HttpStatus.OK);
	}

	// check du lieu khi chon hang tu btn xem kho
	@RequestMapping(value = Constants.REQUEST_MAPPING.VALID_FORM_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> validData(HttpServletRequest request, @RequestBody ObjectForDoSomething input)
	{
		String nomeMetodo = ".validData() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Gson gson = new Gson();
		try
		{
			exportToInferiorbusiness.validData(request, input);
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
		return new ResponseEntity<String>(gson.toJson("ParamsOK"), HttpStatus.OK);
	}

	// xu ly nut lap lenh
	@RequestMapping(value = Constants.REQUEST_MAPPING.CREAT_EXPORT_COMMAND_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createExportCommandOnClick(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".createExportCommandOnClick() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String id = "";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CREAT_EXPORT_COMMAND_EXPORT_TO_INFERIOR;
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
			} else
			{
				id = re.getCode();
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

	// xu ly nut xoa lenh
	@RequestMapping(value = Constants.REQUEST_MAPPING.DELETE_EXPORT_COMMAND_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> deleteExportCommandOnClick(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".deleteExportCommandOnClick() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String id = "aaaaaa";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.DELETE_EXPORT_COMMAND_EXPORT_TO_INFERIOR;
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

	// xu ly nut xuat lenh khong co check warranty
	@RequestMapping(value = Constants.REQUEST_MAPPING.EXPORT_COMMAND_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> execCmd(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".execCmd() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String strBundledCount = "";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.EXPORT_COMMAND_EXPORT_TO_INFERIOR;
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
			} else
			{
				strBundledCount = re.getCode();
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
		return new ResponseEntity<String>(gson.toJson(strBundledCount), HttpStatus.OK);
	}

	// xu ly check co phai bao hanh hay ko
	@RequestMapping(value = Constants.REQUEST_MAPPING.IS_WARRANTY_COMMAND_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> isWarrantyGoodsFormExportToInferior(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".isWarrantyGoodsFormExportToInferior() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Gson gson = new Gson();
		try
		{
			exportToInferiorbusiness.isWarrantyGoods(request, input);
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
		return new ResponseEntity<String>(gson.toJson("ParamsOK"), HttpStatus.OK);
	}

	// xu ly nut duyet lap lenh
	@RequestMapping(value = Constants.REQUEST_MAPPING.APPROVE_COMMAND_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> insepectCmd(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".insepectCmd() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String strAlert = "";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.APPROVE_COMMAND_EXPORT_TO_INFERIOR;
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
			} else
			{
				strAlert = re.getCode();
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
		return new ResponseEntity<String>(gson.toJson(strAlert), HttpStatus.OK);
	}

	// xu ly nut tu choi
	@RequestMapping(value = Constants.REQUEST_MAPPING.REJECT_COMMAND_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> denyCmd(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".denyCmd() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String id = "aaaaaa";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.REJECT_COMMAND_EXPORT_TO_INFERIOR;
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

	// xu ly nut xuat lenh neu co phieu bao hanh
	@RequestMapping(value = Constants.REQUEST_MAPPING.EXPORT_COMMAND_WARRANTY_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> execCmdWarranty(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".execCmdWarranty() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		MessagesResponse mess = new MessagesResponse();
		String id = "";
		Gson gson = new Gson();
		try
		{

			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.EXPORT_COMMAND_WARRANTY_EXPORT_TO_INFERIOR;
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
			} else
			{
				id = re.getCode();
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

	// lay data cho xuat phieu bao hanh
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_DATA_WARANTY_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getDataWarranty(HttpServletRequest request, @RequestBody DataImportWarranty input)
	{
		String nomeMetodo = ".getDataWarranty() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<String> list = new ArrayList<>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_DATA_WARANTY_EXPORT_TO_INFERIOR;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<String>>() {
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
		return new ResponseEntity<List<String>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SEARCH_GET_SERIAL_LIST_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getSearchSerialList(HttpServletRequest request, @RequestBody StockTransactionObj input)
	{
		String nomeMetodo = ".getSearchSerialList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse re = new MessagesResponse();
		List<StockShopDetailsGoodsEntity> list = new ArrayList<StockShopDetailsGoodsEntity>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SEARCH_GET_SERIAL_LIST_EXPORT_TO_INFERIOR;
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
	@RequestMapping(value = Constants.REQUEST_MAPPING.CHECK_LIST_SERIAL_EXPORT_TO_INFERIOR, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockSerialByCondition(HttpServletRequest request, @RequestBody GoodTransactionsModel input)
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
			
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CHECK_LIST_SERIAL_EXPORT_TO_INFERIOR;
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
						mess += "Serial '" + lstTransactionSerial.get(i).getFromSerial() + "' do not exists or not enought condition\n";
					}
				} else
				{
					for (int i = 0; i < lstTransactionSerial.size(); i++)
					{
						if (!lstTransactionSerial.get(i).getFromSerial().equals(""))
						{
							mess += "Serial '" + lstTransactionSerial.get(i).getFromSerial() + "' have warranty information in system, can't load ";
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
