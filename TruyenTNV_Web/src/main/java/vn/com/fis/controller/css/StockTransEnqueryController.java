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

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ReasonObject;
import vn.com.fis.model.css.StockTransDetailObject;
import vn.com.fis.model.css.StockTransEnqueryObject;
import vn.com.fis.model.css.StockTransWithSerialObject;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.ws.WebService;

@Controller
public class StockTransEnqueryController {

	private static final Logger LOG = LoggerFactory.getLogger(StockTransEnqueryController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { "/bs/Stock/getListReceivingStock" }, method = RequestMethod.GET)
	public ResponseEntity<?> getListReceivingStock(HttpServletRequest request,
			@RequestParam(name = "shopId") Long shopId) {
		String nomeMetodo = ".getListReceivingStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockTransEnqueryObject> stockList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", String.valueOf(shopId));
			String url = ev.getProperty("login.url") + "/bs/Stock/getListReceivingStock";
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockList = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<StockTransEnqueryObject>>() {
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
		return new ResponseEntity<List<StockTransEnqueryObject>>(stockList, HttpStatus.OK);
	}

	@RequestMapping(value = { "/bs/Stock/getListStock" }, method = RequestMethod.GET)
	public ResponseEntity<?> getListStock(HttpServletRequest request, @RequestParam(name = "shopId") Long shopId) {
		String nomeMetodo = ".getListReceivingStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockTransEnqueryObject> stockList = new ArrayList<>();
		StockTransEnqueryObject stockObj = null;
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", String.valueOf(shopId));
			String url = ev.getProperty("login.url") + "/bs/Stock/getListStock";
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockList = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<StockTransEnqueryObject>>() {
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
		return new ResponseEntity<List<StockTransEnqueryObject>>(stockList, HttpStatus.OK);
	}

	@RequestMapping(value = { "/bs/Stock/getListReasonStock" }, method = RequestMethod.GET)
	public ResponseEntity<?> getListReason(HttpServletRequest request) {
		String nomeMetodo = ".getListReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<ReasonObject> reasonList = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + "/bs/Stock/getListReasonStock";
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					reasonList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonObject>>() {
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
		return new ResponseEntity<List<ReasonObject>>(reasonList, HttpStatus.OK);
	}

	@RequestMapping(value = { "/bs/Stock/searchStockTrans" }, method = RequestMethod.GET)
	public ResponseEntity<?> onSearchStockTrans(HttpServletRequest request,
			@RequestParam(name = "delivererStockID") String delivererStockID,
			@RequestParam(name = "stockID") String stockID, @RequestParam(name = "reasonID") String reasonID,
			@RequestParam(name = "inspectCmdStatus") String inspectCmdStatus, @RequestParam(name = "type") String type,
			@RequestParam(name = "inspectCmdCode") String inspectCmdCode,
			@RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate,
			@RequestParam(name = "shopId") String shopId, @RequestParam(name = "rowBegin") String rowBegin,
			@RequestParam(name = "rowEnd") String rowEnd) {
		String nomeMetodo = ".onSearchStockTrans() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("delivererStockID", delivererStockID);
			params.put("stockID", stockID);
			params.put("reasonID", reasonID);
			params.put("inspectCmdStatus", inspectCmdStatus);
			params.put("type", type);
			params.put("inspectCmdCode", inspectCmdCode);
			params.put("fromDate", fromDate);
			params.put("toDate", toDate);
			params.put("shopId", shopId);
			params.put("rowBegin", rowBegin);
			params.put("rowEnd", rowEnd);
			String url = ev.getProperty("login.url") + "/bs/Stock/searchStockTrans";
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					msgResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
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
		return new ResponseEntity<MessagesResponse>(msgResponse, HttpStatus.OK);
	}

	@RequestMapping(value = { "/bs/Stock/getDetailStockTrans" }, method = RequestMethod.GET)
	public ResponseEntity<?> getDetailStockTrans(HttpServletRequest request,
			@RequestParam(name = "stockTransId") String stockTransId) {
		String nomeMetodo = ".getDetailStockTrans() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockTransDetailObject> stockTransList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("stockTransId", stockTransId);
			String url = ev.getProperty("login.url") + "/bs/Stock/getDetailStockTrans";
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockTransList = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<StockTransDetailObject>>() {
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
		return new ResponseEntity<List<StockTransDetailObject>>(stockTransList, HttpStatus.OK);
	}

	@RequestMapping(value = { "/bs/Stock/getStockSerial" }, method = RequestMethod.GET)
	public ResponseEntity<?> getStockSerial(HttpServletRequest request,
			@RequestParam(name = "stockTransId") String stockTransId, @RequestParam(name = "goodId") String goodId,
			@RequestParam(name = "stateId") String stateId) {
		String nomeMetodo = ".onSearchStockTrans() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockTransWithSerialObject> stockTransList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("stockTransId", stockTransId);
			params.put("goodId", goodId);
			String url = ev.getProperty("login.url") + "/bs/Stock/getStockSerial";
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockTransList = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<StockTransWithSerialObject>>() {
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
		return new ResponseEntity<List<StockTransWithSerialObject>>(stockTransList, HttpStatus.OK);
	}
}
