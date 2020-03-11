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
import vn.com.fis.model.epos.GetValueTemplateStaffBalanceModel;
import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.ImportStaffBalanceModel;
import vn.com.fis.model.epos.InternalStockModel;
import vn.com.fis.model.epos.ObjectSearch;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockStaffModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormImportStaffBalanceController
{

	private static final Logger LOG = LoggerFactory.getLogger(FormImportStaffBalanceController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	ExportToDealerBusiness exportToDealerBusiness;

	@RequestMapping(value = Constants.REQUEST_MAPPING.LINK_STAFFBALANCE, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_LINK_STAFFBALANCE + "')")
	public String ExportToDealerAction()
	{
		return "epos/inventory/FormImportStaffBalance";
	}

	/// Load du lieu len Mã phiếu
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RECEIPTCODE, method = RequestMethod.POST)
	public ResponseEntity<?> getReceipCode(HttpServletRequest request)
	{
		String nomeMetodo = ".getReceipCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String receipCode = "";

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RECEIPTCODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				receipCode = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(receipCode, HttpStatus.OK);
	}

	/// Load du lieu len Loại hàng hóa
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_INTERNALSTOCK, method = RequestMethod.POST)
	public ResponseEntity<?> getInternalStock(HttpServletRequest request)
	{
		String nomeMetodo = ".getReceipCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InternalStockModel> liresult = new ArrayList<>();

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_INTERNALSTOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				liresult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InternalStockModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InternalStockModel>>(liresult, HttpStatus.OK);
	}

	// lOAD LIST NHÂN VIÊN
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_STAFFLIST, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getChildsStockStaff(HttpServletRequest request, @RequestBody String input)
	{
		String nomeMetodo = ".getChildsStockStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<StockStaffModel> liresult = new ArrayList<>();

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_STAFFLIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				liresult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockStaffModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockStaffModel>>(liresult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_REASON_BY_TYPE, method = RequestMethod.POST)
	public ResponseEntity<?> getReasonListByType(HttpServletRequest request)
	{
		String nomeMetodo = ".getReasonListByType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ReasonObject> liresult = new ArrayList<>();

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_REASON_BY_TYPE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				liresult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonObject>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReasonObject>>(liresult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_QUERY_BALANCE, method = RequestMethod.POST)
	public ResponseEntity<?> queryBalance(HttpServletRequest request, @RequestBody ObjectSearch input)
	{
		String nomeMetodo = ".getReasonListByType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodTransactionsModel> liresult = new ArrayList<>();

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_QUERY_BALANCE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				liresult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodTransactionsModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodTransactionsModel>>(liresult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_IMPORT_STAFF_BALANCE, method = RequestMethod.POST)
	public ResponseEntity<?> importStaffBalance(HttpServletRequest request, @RequestBody ImportStaffBalanceModel input)
	{
		String nomeMetodo = ".importStaffBalance() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<String> lstResult = new ArrayList<String>();
		

		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_IMPORT_STAFF_BALANCE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(lstResult, HttpStatus.OK);
	}

	// LOAD dữ liệu cho file in
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_VALUE_TEMPLATE_PRINT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getValueTemplateStaffBalance(HttpServletRequest request, @RequestBody String input)
	{
		String nomeMetodo = ".getChildsStockStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GetValueTemplateStaffBalanceModel> liresult = new ArrayList<>();

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_STAFFBALANCE_GET_VALUE_TEMPLATE_PRINT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", input);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				liresult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GetValueTemplateStaffBalanceModel>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GetValueTemplateStaffBalanceModel>>(liresult, HttpStatus.OK);
	}

}
