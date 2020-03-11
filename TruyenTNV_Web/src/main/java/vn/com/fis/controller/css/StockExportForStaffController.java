package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.css.GoodDetailOutput;
import vn.com.fis.model.css.InputStockExportForStaff;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class StockExportForStaffController {

	private static final Logger LOG = LoggerFactory.getLogger(StockExportForStaffController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = Constants.ACTION_EXPORT_FOR_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> stockExportForStaff(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "parentStaffId") String parentStaffId,
			@RequestParam(name = "parentStaffName") String parentStaffName,
			@RequestParam(name = "receiptNo") String receiptNo, @RequestParam(name = "notes") String notes,
			@RequestParam(name = "deliveryStockId") String deliveryStockId,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestBody List<GoodDetailOutput> listGoodDetail) {
		String nomeMetodo = ".stockExportForStaff() ";
		MessagesResponse mess = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodDetailOutput> listGoodDetailResult = new ArrayList<GoodDetailOutput>();
		try {
			InputStockExportForStaff inputStockExportForStaff = new InputStockExportForStaff();
			inputStockExportForStaff.setShopId(shopId);
			inputStockExportForStaff.setParentStaffId(parentStaffId);
			inputStockExportForStaff.setParentStaffName(parentStaffName);
			inputStockExportForStaff.setReceiptNo(receiptNo);
			inputStockExportForStaff.setNotes(notes);
			inputStockExportForStaff.setDeliveryStockId(deliveryStockId);
			inputStockExportForStaff.setInternalStockId(internalStockId);
			inputStockExportForStaff.setListGoodDetail(listGoodDetail);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputStockExportForStaff);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_EXPORT_FOR_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listGoodDetailResult = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<GoodDetailOutput>>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodDetailOutput>>(listGoodDetailResult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_EXPORT_NON_HIERARCHICAL, method = RequestMethod.POST)
	public ResponseEntity<?> exportNonHierarchical(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "parentStaffId") String parentStaffId,
			@RequestParam(name = "parentStaffName") String parentStaffName,
			@RequestParam(name = "receiptNo") String receiptNo, @RequestParam(name = "notes") String notes,
			@RequestParam(name = "deliveryStockId") String deliveryStockId,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestBody List<GoodDetailOutput> listGoodDetail) {
		String nomeMetodo = ".exportNonHierarchical() ";
		MessagesResponse mess = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodDetailOutput> listGoodDetailResult = new ArrayList<GoodDetailOutput>();
		try {
			InputStockExportForStaff inputStockExportForStaff = new InputStockExportForStaff();
			inputStockExportForStaff.setShopId(shopId);
			inputStockExportForStaff.setParentStaffId(parentStaffId);
			inputStockExportForStaff.setParentStaffName(parentStaffName);
			inputStockExportForStaff.setReceiptNo(receiptNo);
			inputStockExportForStaff.setNotes(notes);
			inputStockExportForStaff.setDeliveryStockId(deliveryStockId);
			inputStockExportForStaff.setInternalStockId(internalStockId);
			inputStockExportForStaff.setListGoodDetail(listGoodDetail);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputStockExportForStaff);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_EXPORT_NON_HIERARCHICAL;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listGoodDetailResult = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<GoodDetailOutput>>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodDetailOutput>>(listGoodDetailResult, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_APP_PUR_ORDER_FOR_BS, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.APPROVE_PURCHASE_ORDER_FOR_BS + "')")
	public ResponseEntity<?> appPurOrderForBS(HttpServletRequest request,@RequestParam(name = "shopId") String shopId,
			@RequestParam(name = "parentStaffId") String parentStaffId,
			@RequestParam(name = "parentStaffName") String parentStaffName,
			@RequestParam(name = "receiptNo") String receiptNo, @RequestParam(name = "notes") String notes,
			@RequestParam(name = "deliveryStockId") String deliveryStockId,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestParam(name = "orderId") String orderId, @RequestParam(name = "orderCode") String orderCode,
			@RequestBody List<GoodDetailOutput> listGoodDetail) {
		String nomeMetodo = ".appPurOrderForBS() ";
		MessagesResponse mess = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodDetailOutput> listGoodDetailResult = new ArrayList<GoodDetailOutput>();
		try {
			InputStockExportForStaff inputStockExportForStaff = new InputStockExportForStaff();
			inputStockExportForStaff.setShopId(shopId);
			inputStockExportForStaff.setParentStaffId(parentStaffId);
			inputStockExportForStaff.setParentStaffName(parentStaffName);
			inputStockExportForStaff.setReceiptNo(receiptNo);
			inputStockExportForStaff.setNotes(notes);
			inputStockExportForStaff.setDeliveryStockId(deliveryStockId);
			inputStockExportForStaff.setInternalStockId(internalStockId);
			inputStockExportForStaff.setListGoodDetail(listGoodDetail);
			inputStockExportForStaff.setOrderId(orderId);
			inputStockExportForStaff.setOrderCode(orderCode);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputStockExportForStaff);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_APP_PUR_ORDER_FOR_BS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listGoodDetailResult = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<GoodDetailOutput>>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodDetailOutput>>(listGoodDetailResult, HttpStatus.OK);
	}

}