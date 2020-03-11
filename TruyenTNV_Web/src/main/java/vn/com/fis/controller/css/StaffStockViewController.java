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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.model.css.GoodDetailOutput;
import vn.com.fis.model.css.GoodOutput;
import vn.com.fis.model.css.InternalStockOutput;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.StaffOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class StaffStockViewController {

	private static final Logger LOG = LoggerFactory.getLogger(StaffStockViewController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = Constants.ACTION_SEARH_ALL_GOODS, method = RequestMethod.POST)
	public ResponseEntity<?> searhAllGoods(HttpServletRequest request,
			@RequestParam(name = "sourceGood") String sourceGood,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestParam(name = "goodName") String goodName, @RequestParam(name = "goodIssueNo") String goodIssueNo) {
		String nomeMetodo = ".searhAllGoods() ";
		MessagesResponse msgResponse = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + "|" + sourceGood + "|" + internalStockId + "|" + goodName + "|"
				+ goodIssueNo);

		List<GoodOutput> listGoods = new ArrayList<GoodOutput>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("sourceGood", sourceGood);
			params.put("internalStockId", internalStockId);
			params.put("goodName", goodName);
			params.put("goodIssueNo", goodIssueNo);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARH_ALL_GOODS;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listGoods = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodOutput>>() {
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
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodOutput>>(listGoods, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_SEARH_GOODS_ON_STOCK, method = RequestMethod.POST)
	public ResponseEntity<?> searhGoodsOnStock(HttpServletRequest request, @RequestParam(name = "shopId") String shopId,
			@RequestParam(name = "strStaffId") String strStaffId, @RequestParam(name = "sourceGood") String sourceGood,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestParam(name = "goodName") String goodName, @RequestParam(name = "goodCode") String goodCode,
			@RequestParam(name = "goodIssueNo") String goodIssueNo) {
		String nomeMetodo = ".searhGoodsOnStock() ";
		MessagesResponse msgResponse = new MessagesResponse();

		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodOutput> listGoods = new ArrayList<GoodOutput>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			params.put("strStaffId", strStaffId);
			params.put("sourceGood", sourceGood);
			params.put("internalStockId", internalStockId);
			params.put("goodName", goodName);
			params.put("goodCode", goodCode);
			params.put("goodIssueNo", goodIssueNo);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARH_GOODS_ON_STOCK;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listGoods = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodOutput>>() {
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
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodOutput>>(listGoods, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_SEARH_GOODS_ON_STOCK_TAB52, method = RequestMethod.POST)
	public ResponseEntity<?> searhGoodsOnStockTab52(HttpServletRequest request,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "sourceGood") String sourceGood,
			@RequestParam(name = "internalStockId") String internalStockId,
			@RequestParam(name = "goodName") String goodName, @RequestParam(name = "goodCode") String goodCode,
			@RequestParam(name = "goodIssueNo") String goodIssueNo,
			@RequestParam(name = "fromSerial") String fromSerial, @RequestParam(name = "toSerial") String toSerial,
			@RequestParam(name = "gQuantity") String gQuantity, @RequestParam(name = "gState") String gState,
			@RequestParam(name = "gNotes") String gNotes) {
		String nomeMetodo = ".searhGoodsOnStockTab52() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		// Check fromSerial-> toSerial
		MessagesResponse msgResponse = new MessagesResponse();
		List<GoodDetailOutput> listDetail = new ArrayList<GoodDetailOutput>();

		try {
			HashMap<String, String> params = new HashMap<>();
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
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARH_GOODS_ON_STOCK_TAB52;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
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
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodDetailOutput>>(listDetail, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_GET_ALL_CHILD_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> getAllChildStaff(HttpServletRequest request, @RequestParam(name = "shopId") String shopId,
			@RequestParam(name = "parentStaffId") String parentStaffId) {
		String nomeMetodo = ".getAllChildStaff() ";
		MessagesResponse msgResponse = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<StaffOutput> listStaffs = new ArrayList<StaffOutput>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			params.put("parentStaffId", parentStaffId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_ALL_CHILD_STAFF;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listStaffs = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffOutput>>() {
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
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffOutput>>(listStaffs, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_GET_LIST_INTERNAL_STOCK_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> getListInternalStock(HttpServletRequest request) {
		String nomeMetodo = ".getListInternalStock() ";
		MessagesResponse mess = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<InternalStockOutput> listInternalStocks = new ArrayList<InternalStockOutput>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_INTERNAL_STOCK_STAFF;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listInternalStocks = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<InternalStockOutput>>() {
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
			mess.setCode("ERROR_getListInternalStock");
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InternalStockOutput>>(listInternalStocks, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_GET_GOOD_DETAIL, method = RequestMethod.POST)
	public ResponseEntity<?> getGoodDetail(HttpServletRequest request, @RequestParam(name = "shopId") String shopId,
			@RequestParam(name = "stockId") String stockId, @RequestParam(name = "goods_id") String goods_id,
			@RequestParam(name = "goods_code") String goods_code, @RequestParam(name = "goods_name") String goods_name,
			@RequestParam(name = "check_serial") String check_serial,
			@RequestParam(name = "resource_code") String resource_code, @RequestParam(name = "notes") String notes,
			@RequestParam(name = "internalStockId") String internalStockId) {
		// String shopId, String strStaffId, String goods_id,String
		// goods_code,String goods_name,String check_serial,String
		// resource_code,String internalStockId
		GoodDetailOutput result = new GoodDetailOutput();
		String nomeMetodo = ".getGoodDetail() ";
		MessagesResponse msgResponse = new MessagesResponse();

		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			params.put("stockId", stockId);
			params.put("goods_id", goods_id);
			params.put("goods_code", goods_code);
			params.put("goods_name", goods_name);
			params.put("check_serial", check_serial);
			params.put("resource_code", resource_code);
			params.put("notes", notes);
			params.put("internalStockId", internalStockId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOOD_DETAIL;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<GoodDetailOutput>() {
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
			msgResponse.setStatus(String.valueOf(CommonConstant.STATUS_REJECT));
			msgResponse.setMessages(ex.getMessage());
			return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<GoodDetailOutput>(result, HttpStatus.OK);
	}
}
