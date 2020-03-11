package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fss.util.StringUtil;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.com.fis.model.cinvoice.PaymentInfo;
import vn.com.fis.model.cinvoice.PaymentUpdateInfo;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import java.net.InetAddress;
import java.util.HashMap;
import java.util.Map;

@Service
@Transactional
public class TrBillBusiness {

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public Map<String, Object> transactionPayment(HttpServletRequest request, PaymentInfo paymentInfo)
			throws Exception {
		Map<String, Object> transactionPaymentResult = null;
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(paymentInfo);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_PAYMENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					transactionPaymentResult = jsonMapper.readValue(tmp.toString(),
							new TypeReference<Map<String, Object>>() {
							});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(e.getMessage());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

		return transactionPaymentResult;
	}

	public Map<String, Object> transactionPayment1(HttpServletRequest request, PaymentInfo paymentInfo)
			throws Exception {
		Map<String, Object> transactionPaymentResult = null;
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(paymentInfo);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_PAYMENT1;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					transactionPaymentResult = jsonMapper.readValue(tmp.toString(),
							new TypeReference<Map<String, Object>>() {
							});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(e.getMessage());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

		return transactionPaymentResult;
	}

	public Map<String, Object> depositPayment(HttpServletRequest request, PaymentInfo paymentInfo) throws Exception {
		Map<String, Object> transactionPaymentResult = new HashMap<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(paymentInfo);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_DEPOSIT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				transactionPaymentResult = jsonMapper.readValue(tmp.toString(),
						new TypeReference<Map<String, Object>>() {
						});
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			return transactionPaymentResult;
		}

		return transactionPaymentResult;
	}

	public Map<String, Object> depositPrintInvoice(HttpServletRequest request, PaymentInfo paymentInfo)
			throws Exception {
		Map<String, Object> transactionPaymentResult = new HashMap<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(paymentInfo);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_DEPOSIT_PRINT_INVOICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {

					transactionPaymentResult = jsonMapper.readValue(tmp.toString(),
							new TypeReference<Map<String, Object>>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			if (!"".equalsIgnoreCase(StringUtil.nvl(mess.getMessages(), ""))) {
				throw new Exception(mess.getMessages());
			} else {
				throw ex;
			}
		}

		return transactionPaymentResult;
	}

	public Map<String, Object> refundCheckBalance(HttpServletRequest request, Map<String, String> model)
			throws Exception {
		Map<String, Object> checkRs = new HashMap<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(model);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_REFUND_CHECK_BALANCE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				checkRs = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			return checkRs;
		}

		return checkRs;
	}

	public Map<String, Object> checkExistInvoie(HttpServletRequest request, PaymentInfo paymentData) throws Exception {
		Map<String, Object> checkReturn = null;
		try {
			String ip = request.getRemoteAddr();
			if (ip.equalsIgnoreCase("0:0:0:0:0:0:0:1")) {
				InetAddress inetAddress = InetAddress.getLocalHost();
				String ipAddress = inetAddress.getHostAddress();
				ip = ipAddress;
			}
			paymentData.setIpClient(ip);
			Gson gson = new Gson();
			String dataString = gson.toJson(paymentData);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_CHECK_EXIST_IVOICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					checkReturn = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(e.getMessage());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

		return checkReturn;
	}

	public Map<String, Object> checkDealerCredit(HttpServletRequest request, String strTransType,
			String strDelivererShopID) throws Exception {
		Map<String, Object> checkReturn = new HashMap<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("strTransType", strTransType);
			params.put("strDelivererShopID", strDelivererShopID);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_CHECK_DEALER_CREDIT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				checkReturn = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
				});
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			throw ex;
		}

		return checkReturn;
	}

	public Map<String, Object> updatePayment(HttpServletRequest request, PaymentUpdateInfo paymentUpdateInfo)
			throws Exception {
		Map<String, Object> checkReturn = null;
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(paymentUpdateInfo);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.CINVOICE_FORMTRBILL_UPDATE_PAYMENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					checkReturn = jsonMapper.readValue(tmp.toString(), new TypeReference<Map<String, Object>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(e.getMessage());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

		return checkReturn;
	}
}
