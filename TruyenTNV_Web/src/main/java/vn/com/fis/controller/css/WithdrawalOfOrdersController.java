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

import vn.com.fis.model.css.GoodDetailOutput;
import vn.com.fis.model.css.GoodOutput;
import vn.com.fis.model.css.InputWithdrawalOfOrders;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.StockObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class WithdrawalOfOrdersController {

	private static final Logger LOG = LoggerFactory.getLogger(WithdrawalOfOrdersController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.ACTION_GET_ALL_LIST_STOCK_EXPORT }, method = RequestMethod.GET)
	public ResponseEntity<?> getListStockExport(HttpServletRequest request) {
		String nomeMetodo = ".getListStockExport() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<StockObject> stockList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_ALL_LIST_STOCK_EXPORT;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockObject>>() {
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
			mess.setCode("ERROR_LIST_STOCK");
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockObject>>(stockList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_ON_STOCK }, method = RequestMethod.POST)
	public ResponseEntity<?> getGoodsOnStock(HttpServletRequest request, @RequestParam(name = "stockId") String stockId,
			@RequestParam(name = "goodName") String goodName, @RequestParam(name = "gNotes") String gNotes) {
		String nomeMetodo = ".getGoodsOnStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<GoodOutput> listGoods = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("stockId", stockId);
			params.put("goodName", goodName);
			params.put("gNotes", gNotes);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_ON_STOCK;
			String tmp = webService.apiServiceMethodGETWithParam(request, url,"","",params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listGoods = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodOutput>>() {
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
			mess.setCode("ERROR_GOODS_ON_STOCK");
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodOutput>>(listGoods, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_DETAIL_ON_STOCK }, method = RequestMethod.POST)
	public ResponseEntity<?> searhGoodsDetailOnStock(HttpServletRequest request,
			@RequestParam(name = "stockId") String stockId, @RequestParam(name = "shopId") String shopId,
			@RequestParam(name = "sourceGood") String sourceGood,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestParam(name = "goodName") String goodName, @RequestParam(name = "goodCode") String goodCode,
			@RequestParam(name = "goodIssueNo") String goodIssueNo,
			@RequestParam(name = "fromSerial") String fromSerial, @RequestParam(name = "toSerial") String toSerial,
			@RequestParam(name = "gQuantity") String gQuantity, @RequestParam(name = "gState") String gState,
			@RequestParam(name = "gNotes") String gNotes) {
		String nomeMetodo = ".searhGoodsDetailOnStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		// Check fromSerial-> toSerial
		MessagesResponse msgResponse = new MessagesResponse();
		List<GoodDetailOutput> listDetail = new ArrayList<GoodDetailOutput>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("stockId", stockId);
			params.put("shopId", shopId);
			params.put("sourceGood", sourceGood);
			params.put("internalStockId", internalStockId);
			params.put("goodName", goodName);
			params.put("goodCode", goodCode);
			params.put("goodIssueNo", goodIssueNo);
			params.put("fromSerial", fromSerial);
			params.put("toSerial", toSerial);
			params.put("gQuantity", gQuantity);
			params.put("gState", gState);
			params.put("gNotes", gNotes);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_DETAIL_ON_STOCK;
			String tmp = webService.apiServiceMethodGETWithParam(request, url,"","",params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listDetail = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodDetailOutput>>() {
					});
				} catch (Exception e) {
					try {
						msgResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			msgResponse.setCode("ERROR_searh_GoodsDetail_OnStock");
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodDetailOutput>>(listDetail, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_WITHDRAWAL_OF_ORDERS }, method = RequestMethod.POST)
	public ResponseEntity<?> withdrawalOfOrders(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "parentStaffId") String parentStaffId,
			@RequestParam(name = "parentStaffName") String parentStaffName,
			@RequestParam(name = "receiptNo") String receiptNo, @RequestParam(name = "notes") String notes,
			@RequestParam(name = "deliveryStockId") String deliveryStockId,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestParam(name = "orderId") String orderId, @RequestBody List<GoodDetailOutput> listGoodDetail) {
		String nomeMetodo = ".withdrawalOfOrders() ";
		MessagesResponse mess = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodDetailOutput> listGoodDetailResult = new ArrayList<GoodDetailOutput>();
		try {
			InputWithdrawalOfOrders inputWithdrawalOfOrders = new InputWithdrawalOfOrders();
			inputWithdrawalOfOrders.setShopId(shopId);
			inputWithdrawalOfOrders.setParentStaffId(parentStaffId);
			inputWithdrawalOfOrders.setParentStaffName(parentStaffName);
			inputWithdrawalOfOrders.setReceiptNo(receiptNo);
			inputWithdrawalOfOrders.setNotes(notes);
			inputWithdrawalOfOrders.setDeliveryStockId(deliveryStockId);
			inputWithdrawalOfOrders.setInternalStockId(internalStockId);
			inputWithdrawalOfOrders.setOrderId(orderId);
			inputWithdrawalOfOrders.setListGoodDetail(listGoodDetail);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputWithdrawalOfOrders);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_WITHDRAWAL_OF_ORDERS;
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

		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			mess.setCode("ERROR_withdrawal_Of_Orders");
			mess.setMessages(ex.getMessage());
			mess.setGuideInfor(ex.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodDetailOutput>>(listGoodDetailResult, HttpStatus.OK);
	}
}