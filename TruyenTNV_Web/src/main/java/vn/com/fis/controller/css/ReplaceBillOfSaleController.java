package vn.com.fis.controller.css;

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

import vn.com.fis.business.css.ReplaceBillOfSaleBusiness;
import vn.com.fis.model.CInvoiceModel.InvoiceHeaderOb;
import vn.com.fis.model.css.InputReplaceBillOfSale;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ReplaceBillOfSaleController {

	@Autowired
	ReplaceBillOfSaleBusiness replaceBillOfSaleBusiness;
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ReplaceBillOfSaleController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.ACTION_GET_REPLACE_HEADER_C_INVOICES }, method = RequestMethod.GET)
	public ResponseEntity<?> getListCInvoiceHeaderReplace(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "staffId") String staffId,
			@RequestParam(name = "cusName") String cusName, @RequestParam(name = "invoiceStatus") String invoiceStatus,
			@RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate) {
		String nomeMetodo = ".getListCInvoiceHeaderReplace() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			return replaceBillOfSaleBusiness.getListCInvoiceHeaderReplace(request, shopId, staffId, cusName,
					invoiceStatus, fromDate, toDate);
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
	}

	@RequestMapping(value = { Constants.ACTION_REPLACE_HEADER_C_INVOICE }, method = RequestMethod.POST)
	public ResponseEntity<?> updateReplaceInvoiceCHeader(HttpServletRequest request,
			@RequestBody InvoiceHeaderOb itemHeaderInvoice, @RequestParam(name = "shopCode") String shopCode,
			@RequestParam(name = "staffId") String staffId) {
		String nomeMetodo = ".updateReplaceInvoiceCHeader() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse responseData = new MessagesResponse();
		try {
			InputReplaceBillOfSale inputReplaceBillOfSale = new InputReplaceBillOfSale();
			inputReplaceBillOfSale.setItemHeaderInvoice(itemHeaderInvoice);
			inputReplaceBillOfSale.setShopCode(shopCode);
			inputReplaceBillOfSale.setStaffId(staffId);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputReplaceBillOfSale);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_REPLACE_HEADER_C_INVOICE;
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