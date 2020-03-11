package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.css.BillInvoiceObject;
import vn.com.fis.model.css.InputCancelExpriedInvoice;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class CancelInvoiceBusiness {

	private static final Logger LOG = LoggerFactory.getLogger(CancelInvoiceBusiness.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public List<BillInvoiceObject> getListCancelExpriedCInvoice(HttpServletRequest request, String staffId,
			String shopId, String fromDate, String toDate, String status) throws Exception {
		String nomeMetodo = ".getListCancelExpriedCInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<BillInvoiceObject> cInvoiceList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("staffId", staffId);
			params.put("shopId", shopId);
			params.put("fromDate", fromDate);
			params.put("toDate", toDate);
			params.put("status", status);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_EXPRIED_BILL_C_INVOICE_BY_STATUS;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					cInvoiceList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return cInvoiceList;
	}

	public List<BillInvoiceObject> getListCancelReprintCInvoice(HttpServletRequest request, String fromDate,
			String toDate, String status, String accountNo, String isdn) throws Exception {
		String nomeMetodo = ".getListCancelReprintCInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<BillInvoiceObject> cInvoiceList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("fromDate", fromDate);
			params.put("toDate", toDate);
			params.put("status", status);
			params.put("accountNo", accountNo);
			params.put("isdn", isdn);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_REPRINT_BILL_C_INVOICE_BY_STATUS;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					cInvoiceList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return cInvoiceList;
	}

	public List<BillInvoiceObject> destroyExpriedBillInvoice(HttpServletRequest request,
			List<BillInvoiceObject> listInvoice, boolean isCinvoice, String staffId, String shopCode) throws Exception {
		String nomeMetodo = ".destroyExpriedBillInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		try {
			InputCancelExpriedInvoice inputCancelExpriedInvoice = new InputCancelExpriedInvoice();
			inputCancelExpriedInvoice.setListBillInvoice(listInvoice);
			inputCancelExpriedInvoice.setStaffId(staffId);
			inputCancelExpriedInvoice.setShopCode(shopCode);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputCancelExpriedInvoice);
			String url = ev.getProperty("login.url") + Constants.ACTION_DESTROY_EXPRIED_BILL_C_INVOICES;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listInvoice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listInvoice;
	}

	public List<BillInvoiceObject> updateApproveBillInvoice(HttpServletRequest request,
			List<BillInvoiceObject> listInvoice) throws Exception {
		String nomeMetodo = ".updateApproveBillInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(listInvoice);
			String url = ev.getProperty("login.url") + Constants.ACTION_APPROVE_BILL_C_INVOICES;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listInvoice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listInvoice;
	}

	public List<BillInvoiceObject> updateRejectBillInvoice(HttpServletRequest request,
			List<BillInvoiceObject> listInvoice) throws Exception {
		String nomeMetodo = ".updateRejectBillInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(listInvoice);
			String url = ev.getProperty("login.url") + Constants.ACTION_REJECT_BILL_C_INVOICES;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listInvoice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listInvoice;
	}

	public List<BillInvoiceObject> updateCreateBillInvoice(HttpServletRequest request,
			List<BillInvoiceObject> listInvoice) throws Exception {
		String nomeMetodo = ".updateCreateBillInvoice()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(listInvoice);
			String url = ev.getProperty("login.url") + Constants.ACTION_CREATE_BILL_C_INVOICES;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listInvoice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<BillInvoiceObject>>() {
					});
				} catch (Exception e) {
					try {
						MessagesResponse mess = jsonMapper.readValue(tmp.toString(),
								new TypeReference<MessagesResponse>() {
								});
						throw new Exception(mess.getMessages());
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			LOG.error(ex.getMessage(), ex);
			throw new Exception(ex.getMessage());
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listInvoice;
	}

}
