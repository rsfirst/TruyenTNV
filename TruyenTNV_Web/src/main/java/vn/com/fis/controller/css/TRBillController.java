package vn.com.fis.controller.css;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.itextpdf.text.Document;

import vn.com.fis.business.css.CInvoiceBusiness;
import vn.com.fis.business.css.TrBillBusiness;
import vn.com.fis.model.cinvoice.InputPrintCInvoice;
import vn.com.fis.model.cinvoice.PaymentInfo;
import vn.com.fis.model.cinvoice.PaymentUpdateInfo;
import vn.com.fis.model.cinvoice.TRBillAccountObject;
import vn.com.fis.model.cinvoice.TRBillInvoice;
import vn.com.fis.model.css.ApDomainModel;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@CrossOrigin(origins = "*")
@RestController
public class TRBillController {

	private static final Logger LOG = LoggerFactory.getLogger(TRBillController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	CInvoiceBusiness cInvoiceBusiness;

	@Autowired
	TrBillBusiness trBillBusiness;

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_SEARCH, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> formTrBillSearch(HttpServletRequest request, @RequestBody Map<String, String> model) {
		String nomeMetodo = ".formTrBillSearch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TRBillAccountObject> lstTrBillAccount = null;
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(model);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_SEARCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				lstTrBillAccount = jsonMapper.readValue(tmp.toString(), new TypeReference<List<TRBillAccountObject>>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<List<TRBillAccountObject>>(lstTrBillAccount, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TRBillAccountObject>>(lstTrBillAccount, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_PAYMENT, method = RequestMethod.POST)
	public ResponseEntity<?> formTrBillPayment(HttpServletRequest request, @RequestBody PaymentInfo paymentData)
			throws Exception {
		String nomeMetodo = ".formTrBillPayment() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		Map<String, Object> transactionPaymentResult = null;
		try {
			transactionPaymentResult = trBillBusiness.transactionPayment(request, paymentData);
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<Map<String, Object>>(transactionPaymentResult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_PAYMENT1, method = RequestMethod.POST)
	public ResponseEntity<?> formTrBillPayment1(HttpServletRequest request, @RequestBody PaymentInfo paymentData)
			throws Exception {
		String nomeMetodo = ".formTrBillPayment1() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		Map<String, Object> transactionPaymentResult = null;
		try {
			transactionPaymentResult = trBillBusiness.transactionPayment1(request, paymentData);
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<Map<String, Object>>(transactionPaymentResult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_CREATECINVOICE, method = RequestMethod.POST)
	public ResponseEntity<?> createCinvoice(HttpServletRequest request,
			@RequestBody List<TRBillInvoice> lstTRBillInvoice) {
		String nomeMetodo = ".createCinvoice() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Map<String, Object> createCinvoiceRs = new HashMap<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(lstTRBillInvoice);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_CREATECINVOICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				createCinvoiceRs = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<Map<String, Object>>(createCinvoiceRs, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<Map<String, Object>>(createCinvoiceRs, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_PRINT, method = RequestMethod.POST)
	public ResponseEntity<?> printCinvoice(HttpServletRequest request,
			@RequestBody InputPrintCInvoice inputPrintCIvoice) {
		String nomeMetodo = ".printCinvoice() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Map<String, Object> createCinvoiceRs = new HashMap<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(inputPrintCIvoice);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_PRINT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				createCinvoiceRs = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<Map<String, Object>>(createCinvoiceRs, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<Map<String, Object>>(createCinvoiceRs, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_DEPOSIT, method = RequestMethod.POST)
	public ResponseEntity<?> formTrBillDeposit(HttpServletRequest request, @RequestBody PaymentInfo paymentData)
			throws Exception {
		Map<String, Object> transactionPaymentResult = trBillBusiness.depositPayment(request, paymentData);
		return new ResponseEntity<Map<String, Object>>(transactionPaymentResult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_DEPOSIT_PRINT_INVOICE, method = RequestMethod.POST)
	public ResponseEntity<?> formTrBillDepositPrintInvoice(HttpServletRequest request,
			@RequestBody PaymentInfo paymentData) throws Exception {
		byte[] reportBytes = null;
		Document document = new Document();
		MessagesResponse mess = new MessagesResponse();
		ResponseEntity respEntity = null;
		try {

			System.out.println("----->formTrBillDepositPrintInvoice");
			Map<String, Object> transactionPaymentResult = trBillBusiness.depositPrintInvoice(request, paymentData);
			String filePath = (String) transactionPaymentResult.get("filePath");
			// System.out.println("filePath="+filePath);

			File f = new File(filePath);
			FileInputStream inputStream = new FileInputStream(f);

			byte[] out = IOUtils.toByteArray(inputStream);
			// f.delete();
			// System.out.println("length="+out.length);
			LOG.info("formTrBillDepositPrintInvoice");
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.add("Content-disposition", "attachment; filename=HelloWorld.pdf");
			responseHeaders.add("Content-Type", "application/pdf");
			respEntity = new ResponseEntity(out, responseHeaders, HttpStatus.OK);

		} catch (Exception e) {
			e.printStackTrace();
			mess.setCode("ERROR_LIST_STOCK");
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return respEntity;
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_REFUND_CHECK_BALANCE, method = RequestMethod.POST)
	public ResponseEntity<?> formTrBillRefundCheckBalance(HttpServletRequest request,
			@RequestBody Map<String, String> model) throws Exception {
		Map<String, Object> refundCheckBalanceData = trBillBusiness.refundCheckBalance(request, model);
		return new ResponseEntity<Map<String, Object>>(refundCheckBalanceData, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_CHECK_EXIST_IVOICE, method = RequestMethod.POST)
	public ResponseEntity<?> checkExistInvoie(HttpServletRequest request, @RequestBody PaymentInfo paymentData) {
		String nomeMetodo = ".checkExistInvoie() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Map<String, Object> checkReturn = new HashMap<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			checkReturn = trBillBusiness.checkExistInvoie(request, paymentData);
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<Map<String, Object>>(checkReturn, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.CINVOICE_FORMTRBILL_CHECK_DEALER_CREDIT }, method = RequestMethod.GET)
	public ResponseEntity<?> checkDealerCredit(HttpServletRequest request,
			@RequestParam(name = "transType") String strTransType,
			@RequestParam(name = "delivererShopID") String strDelivererShopID) {
		String nomeMetodo = ".checkDealerCredit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + " Input " + " transType = " + strTransType + "; delivererShopID = "
				+ strDelivererShopID);

		Map<String, Object> checkReturn = new HashMap<>();
		try {
			checkReturn = trBillBusiness.checkDealerCredit(request, strTransType, strDelivererShopID);
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			checkReturn.put("status", "error");
			checkReturn.put("message", e.getMessage());
			return new ResponseEntity<Map<String, Object>>(checkReturn, HttpStatus.OK);
		}
		return new ResponseEntity<Map<String, Object>>(checkReturn, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.CINVOICE_FORMTRBILL_UPDATE_PAYMENT, method = RequestMethod.POST)
	public ResponseEntity<?> updatePayment(HttpServletRequest request,
			@RequestBody PaymentUpdateInfo paymentUpdateInfo) {
		String nomeMetodo = ".updatePayment() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		Map<String, Object> checkReturn = new HashMap<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			checkReturn = trBillBusiness.updatePayment(request, paymentUpdateInfo);
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<Map<String, Object>>(checkReturn, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.CINVOICE_FORMTRBILL_GET_PAYMENT_METHOD }, method = RequestMethod.GET)
	public ResponseEntity<?> getPaymentMethod(HttpServletRequest request) {
		String nomeMetodo = ".getPaymentMethod() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<ApDomainModel> result = new ArrayList<ApDomainModel>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_GET_PAYMENT_METHOD;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						throw new Exception(e.getMessage());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(result, HttpStatus.OK);
	}
}
