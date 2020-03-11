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

import vn.com.fis.business.epos.ExportToDealerBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.DataImportWarranty;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.InputEstablishGoodsEntity;
import vn.com.fis.model.epos.InputEstablishservice;
import vn.com.fis.model.epos.InternalStockModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.model.epos.StockTransactionModel;
import vn.com.fis.model.epos.dataSearchExportToDealer;
import vn.com.fis.model.epos.onSearchExportToDealer;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ExportToDealerController {

	private static final Logger LOG = LoggerFactory.getLogger(StockExportToCenterController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	ExportToDealerBusiness exportToDealerBusiness;

	@RequestMapping(value = Constants.REQUEST_MAPPING.LINK_EXPORT_TO_DEALER, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_LINK_EXPORT_TO_DEALER + "')")
	public String ExportToDealerAction() {
		return "epos/inventory/ExportToDealer";
	}

	/// Load du lieu len comboxbox shoptype
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_EXPORT_TO_DEALER_SHOP_TYPE, method = RequestMethod.POST)
	public ResponseEntity<?> getShopType(HttpServletRequest request) {
		String nomeMetodo = ".getShopType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> listShopType = new ArrayList<ApDomainModel>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_EXPORT_TO_DEALER_SHOP_TYPE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listShopType = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(listShopType, HttpStatus.OK);
	}

	// load du lieu len combobox status
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STATUS, method = RequestMethod.POST)
	public ResponseEntity<?> getStatus(HttpServletRequest request) {
		String nomeMetodo = ".getStatus() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> listStatus = new ArrayList<ApDomainModel>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STATUS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listStatus = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(listStatus, HttpStatus.OK);
	}

	// load du lieu len combobox reason
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_REASON, method = RequestMethod.POST)
	public ResponseEntity<?> getReason(HttpServletRequest request) {
		String nomeMetodo = ".getReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReasonObject> listReason = new ArrayList<ReasonObject>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_REASON;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listReason = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonObject>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReasonObject>>(listReason, HttpStatus.OK);
	}

	// load du lieu len combobox ResourceCode
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RESOURCE_CODE, method = RequestMethod.POST)
	public ResponseEntity<?> getResourceCode(HttpServletRequest request) {
		String nomeMetodo = ".getResourceCode) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> listResourceCode = new ArrayList<ApDomainModel>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RESOURCE_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listResourceCode = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(listResourceCode, HttpStatus.OK);
	}

	// load du lieu len combobox Agent
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_AGENT, method = RequestMethod.POST)
	public ResponseEntity<?> getAgent(HttpServletRequest request, @RequestBody String data) {
		String nomeMetodo = ".getAgent) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> listAgent = new ArrayList<ApDomainModel>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_AGENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", data);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listAgent = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(listAgent, HttpStatus.OK);
	}

	// load dữ liệu lên combox loại hàng

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_INTERNALSTOCK, method = RequestMethod.POST)
	public ResponseEntity<?> getInternalStock(HttpServletRequest request) {
		String nomeMetodo = ".getInternalStock) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InternalStockModel> listInternalStock = new ArrayList<InternalStockModel>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_INTERNALSTOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listInternalStock = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InternalStockModel>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InternalStockModel>>(listInternalStock, HttpStatus.OK);
	}

	// button Tim kiem

	@RequestMapping(value = Constants.REQUEST_MAPPING.ON_SEARCH_SUCCESS, method = RequestMethod.POST)
	public ResponseEntity<?> onSearch(HttpServletRequest request, @RequestBody dataSearchExportToDealer input) {
		String nomeMetodo = ".onSearch) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<onSearchExportToDealer> listOnSearchExportToDealer = new ArrayList<onSearchExportToDealer>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ON_SEARCH_SUCCESS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listOnSearchExportToDealer = jsonMapper.readValue(tmp.toString(),
						new TypeReference<List<onSearchExportToDealer>>() {
						});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<onSearchExportToDealer>>(listOnSearchExportToDealer, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_EXPORT_TO_DEALER_GOODS_LIST, method = RequestMethod.POST)
	public ResponseEntity<?> getGoodsList(HttpServletRequest request, @RequestBody List<String> input) {
		String nomeMetodo = ".getGoodsList) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodsList> listGoodsList = new ArrayList<GoodsList>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_EXPORT_TO_DEALER_GOODS_LIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listGoodsList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodsList>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodsList>>(listGoodsList, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_DATA_WARANTY, method = RequestMethod.POST)
	public ResponseEntity<?> getDataWarranty(HttpServletRequest request, @RequestBody DataImportWarranty input) {
		String nomeMetodo = ".getDataWarranty) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<String> listDataWaranty = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_DATA_WARANTY;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listDataWaranty = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(listDataWaranty, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.COMMAND_SUCCESS, method = RequestMethod.POST)
	public ResponseEntity<?> commandSuccess(HttpServletRequest request, @RequestBody StockTransObject input) {
		String nomeMetodo = ".commandSuccess) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<String> result = new ArrayList<>();
		try {

			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.COMMAND_SUCCESS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.COMMAND_REFUSE, method = RequestMethod.POST)
	public ResponseEntity<?> commandRefuse(HttpServletRequest request, @RequestBody StockTransactionModel input) {
		String nomeMetodo = ".commandRefuse) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<String> result = new ArrayList<String>();
		try {

			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.COMMAND_REFUSE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.REQUEST_MAPPING.EXPORT_COMMAND }, method = RequestMethod.POST)
	public ResponseEntity<?> exportCommand(HttpServletRequest request, @RequestBody StockTransObject input) {
		String nomeMetodo = ".exportCommand() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		ResponseEntity<?> response = null;
		try {
			response = exportToDealerBusiness.exportCommand(request, input);
		} catch (Exception e) {
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.EXPORT_TO_DEALER_VALIDATA, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> validData(HttpServletRequest request, @RequestBody StockTransObject input) {
		String nomeMetodo = ".validData() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Gson gson = new Gson();
		try {
			exportToDealerBusiness.validData(request, input);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(gson.toJson("ParamsOK"), HttpStatus.OK);
	}

	// THeem moi
	@RequestMapping(value = Constants.REQUEST_MAPPING.ON_SEARCH_SERVICE, method = RequestMethod.POST)
	public ResponseEntity<?> onSearchService(HttpServletRequest request, @RequestBody String input) {

		String nomeMetodo = ".onSearchService) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InputEstablishservice> result = new ArrayList<InputEstablishservice>();
		try {

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ON_SEARCH_SERVICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InputEstablishservice>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InputEstablishservice>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ON_SEARCH_SERIALS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSearchSerials(HttpServletRequest request, @RequestBody String input) {

		String nomeMetodo = ".onSearchSerials) ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InputEstablishGoodsEntity> result = new ArrayList<InputEstablishGoodsEntity>();
		try {

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ON_SEARCH_SERIALS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InputEstablishGoodsEntity>>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InputEstablishGoodsEntity>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_EXPORT_TO_DEALER_GET_TRANS_ID, method = RequestMethod.POST)
	public ResponseEntity<?> getTransId(HttpServletRequest request, @RequestBody String input) {
		String nomeMetodo = ".getTransId() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

	String result="";
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_EXPORT_TO_DEALER_GET_TRANS_ID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
				});
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}

}
