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
import vn.com.fis.model.css.StockObject;
import vn.com.fis.model.css.StockTransObject;
import vn.com.fis.model.css.TransDetailObject;
import vn.com.fis.model.epos.AppDomainModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class StockImportUnRankingController {

	private static final Logger LOG = LoggerFactory.getLogger(StockImportUnRankingController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.ACTION_GET_LIST_STOCK_EXPORT }, method = RequestMethod.GET)
	public ResponseEntity<?> getListStockExport(HttpServletRequest request, @RequestParam(name = "shopId") Long shopId,
			@RequestParam(name = "shopCode") String shopCode, @RequestParam(name = "blCreate") boolean blCreate) {
		String nomeMetodo = ".getListStockExport() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockObject> stockList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", String.valueOf(shopId));
			params.put("shopCode", shopCode);
			params.put("blCreate", String.valueOf(blCreate));
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_STOCK_EXPORT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockObject>>() {
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
		return new ResponseEntity<List<StockObject>>(stockList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_REASON_BY_CODE }, method = RequestMethod.GET)
	public ResponseEntity<?> getListReasonByCode(HttpServletRequest request, @RequestParam(name = "code") String code) {
		String nomeMetodo = ".getListReasonByCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<ReasonObject> reasonList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("code", code);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_REASON_BY_CODE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
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

	@RequestMapping(value = { Constants.ACTION_GET_LIST_STATUS_BY_TYPE }, method = RequestMethod.GET)
	public ResponseEntity<?> getListStatusByType(HttpServletRequest request, @RequestParam(name = "type") String type) {
		String nomeMetodo = ".getListStatusByType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<AppDomainModel> statusList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("type", type);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_STATUS_BY_TYPE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					statusList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
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
		return new ResponseEntity<List<AppDomainModel>>(statusList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_STOCK_TRANS }, method = RequestMethod.GET)
	public ResponseEntity<?> getListStockTrans(HttpServletRequest request,
			@RequestParam(name = "actionCode") String actionCode,
			@RequestParam(name = "shopImportId") String shopImportId,
			@RequestParam(name = "stockDeliver") Long stockDeliver,
			@RequestParam(name = "execStatus") String execStatus, @RequestParam(name = "reasonId") Long reasonId,
			@RequestParam(name = "fromDate") String fromDate, @RequestParam(name = "toDate") String toDate) {
		String nomeMetodo = ".getListStockTrans() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockTransObject> stockTranslst = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("actionCode", actionCode);
			params.put("shopImportId", shopImportId);
			params.put("stockDeliver", String.valueOf(stockDeliver));
			params.put("execStatus", execStatus);
			params.put("reasonId", String.valueOf(reasonId));
			params.put("fromDate", fromDate);
			params.put("toDate", toDate);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_STOCK_TRANS;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					stockTranslst = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockTransObject>>() {
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
		return new ResponseEntity<List<StockTransObject>>(stockTranslst, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_TRANS_DETAIL }, method = RequestMethod.GET)
	public ResponseEntity<?> getListTransDetail(HttpServletRequest request,
			@RequestParam(name = "stockTransId") Long stockTransId) {
		String nomeMetodo = ".getListTransDetail() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<TransDetailObject> lstStockTransDetail = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("stockTransId", String.valueOf(stockTransId));
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_TRANS_DETAIL;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstStockTransDetail = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<TransDetailObject>>() {
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
		return new ResponseEntity<List<TransDetailObject>>(lstStockTransDetail, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CONFIRM_STOCK_TRANS }, method = RequestMethod.GET)
	public ResponseEntity<?> confirmStockTrans(HttpServletRequest request,
			@RequestParam(name = "stockTransId") Long stockTransId, @RequestParam(name = "staffId") Long staffId) {
		String nomeMetodo = ".confirmStockTrans() ";
		MessagesResponse msgResponse = new MessagesResponse();
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("stockTransId", String.valueOf(stockTransId));
			params.put("staffId", String.valueOf(staffId));
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_CONFIRM_STOCK_TRANS;
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
}
