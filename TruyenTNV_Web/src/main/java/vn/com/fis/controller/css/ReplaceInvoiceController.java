package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.epos.CommonBusiness;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.InputReplaceInvoice;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ShopObject;
import vn.com.fis.model.css.StaffObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ReplaceInvoiceController {

	@Autowired
	CommonBusiness commonBusiness;
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ReplaceInvoiceController.class);

	@RequestMapping(value = { Constants.ACTION_GET_REPLACE_BILL_C_INVOICES }, method = RequestMethod.GET)
	public ResponseEntity<?> getListInvoiceToReplace(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "staffId") String staffId,
			@RequestParam(name = "custName") String custName,
			@RequestParam(name = "invoiceStatus") String invoiceStatus,
			@RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate) {
		////////////////////////////////////////
		String nomeMetodo = ".getListInvoiceToReplace() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<BillInvoiceObject> listBillInvoice = new ArrayList<BillInvoiceObject>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			params.put("staffId", staffId);
			params.put("custName", custName);
			params.put("invoiceStatus", invoiceStatus);
			params.put("fromDate", fromDate);
			params.put("toDate", toDate);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_REPLACE_BILL_C_INVOICES;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				listBillInvoice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<BillInvoiceObject>>(listBillInvoice, HttpStatus.OK);

	}

	@RequestMapping(value = { Constants.ACTION_GET_PANEL_SHOP_LIST }, method = RequestMethod.GET)
	public ResponseEntity<?> getListPanelShop(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getListPanelShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopObject> shopList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_PANEL_SHOP_LIST;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				shopList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopObject>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<List<ShopObject>>(shopList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_PANEL_STAFF_LIST }, method = RequestMethod.GET)
	public ResponseEntity<?> getListPanelStaff(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getListPanelStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<StaffObject> staffList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_PANEL_STAFF_LIST;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				staffList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<List<StaffObject>>(staffList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REPLACE_BILL_C_INVOICE }, method = RequestMethod.POST)
	public ResponseEntity<?> updateReplaceInvoice(HttpServletRequest request,
			@RequestBody BillInvoiceObject billInvoice, @RequestParam(name = "shopCode") String shopCode,
			@RequestParam(name = "staffId") String staffId) {
		String nomeMetodo = ".updateReplaceInvoice() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse responseData = new MessagesResponse();
		try {
			InputReplaceInvoice inputReplaceInvoice = new InputReplaceInvoice();
			inputReplaceInvoice.setBillInvoice(billInvoice);
			inputReplaceInvoice.setShopCode(shopCode);
			inputReplaceInvoice.setStaffId(staffId);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputReplaceInvoice);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_REPLACE_BILL_C_INVOICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					responseData = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
					});
				} catch (Exception e) {
					try {
						responseData = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<MessagesResponse>(responseData, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			responseData.setCode("ERROR_withdrawal_Of_Orders");
			responseData.setMessages(ex.getMessage());
			responseData.setGuideInfor(ex.getMessage());
			responseData.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			return new ResponseEntity<MessagesResponse>(responseData, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(responseData, HttpStatus.OK);
	}
}