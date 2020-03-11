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

import vn.com.fis.model.ProductOrder.GoodCountDetail;
import vn.com.fis.model.ProductOrder.GoodGroupObject;
import vn.com.fis.model.ProductOrder.GoodInfoNew;
import vn.com.fis.model.ProductOrder.GoodsInStockSearchModel;
import vn.com.fis.model.ProductOrder.InternalStockObject;
import vn.com.fis.model.ProductOrder.StateObject;
import vn.com.fis.model.ProductOrder.StockSerialObject;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.StockObject;
import vn.com.fis.model.epos.AppDomainModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class StockInfoViewController {

	private static final Logger LOG = LoggerFactory.getLogger(StockInfoViewController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.ACTION_GET_STOCK_TREE }, method = RequestMethod.GET)
	public ResponseEntity<?> getTreeStocks(HttpServletRequest request, @RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getTreeStocks() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " shopId = " + shopId);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StockObject> lstStock = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_STOCK_TREE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstStock = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockObject>>() {
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
		return new ResponseEntity<List<StockObject>>(lstStock, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_STAFF_RESOUCE_CODE }, method = RequestMethod.GET)
	public ResponseEntity<?> getStaffResouceCode(HttpServletRequest request) {
		String nomeMetodo = ".getStaffResouceCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		String staffResouceCode = "";
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_STAFF_RESOUCE_CODE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					staffResouceCode = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
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
		return new ResponseEntity<String>(staffResouceCode, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_RESOUCE_CODE }, method = RequestMethod.GET)
	public ResponseEntity<?> getListResourceCode(HttpServletRequest request) {
		String nomeMetodo = ".getListResourceCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<AppDomainModel> lstResourceCode = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_RESOUCE_CODE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstResourceCode = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
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
		return new ResponseEntity<List<AppDomainModel>>(lstResourceCode, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_INTERNAL_STOCK }, method = RequestMethod.GET)
	public ResponseEntity<?> getListInternalStock(HttpServletRequest request) {
		String nomeMetodo = ".getListInternalStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<InternalStockObject> lstInternalStock = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_INTERNAL_STOCK;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstInternalStock = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<InternalStockObject>>() {
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
		return new ResponseEntity<List<InternalStockObject>>(lstInternalStock, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_STATE }, method = RequestMethod.GET)
	public ResponseEntity<?> getListState(HttpServletRequest request) {
		String nomeMetodo = ".getListState() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<StateObject> lstStates = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_STATE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstStates = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StateObject>>() {
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
		return new ResponseEntity<List<StateObject>>(lstStates, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_GOOD_GROUP }, method = RequestMethod.GET)
	public ResponseEntity<?> getListGoodGroup(HttpServletRequest request) {
		String nomeMetodo = ".getListGoodGroup() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<GoodGroupObject> lstGoodGroup = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_GOOD_GROUP;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstGoodGroup = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodGroupObject>>() {
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
		return new ResponseEntity<List<GoodGroupObject>>(lstGoodGroup, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_IN_STOCK }, method = RequestMethod.POST)
	public ResponseEntity<?> searchGoodsInStock(HttpServletRequest request,
			@RequestBody GoodsInStockSearchModel searchInput) {
		String nomeMetodo = ".searchGoodsInStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<GoodInfoNew> lstGoods = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchInput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_IN_STOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstGoods = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return new ResponseEntity<List<GoodInfoNew>>(lstGoods, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_IN_STOCK_AND_STAFF }, method = RequestMethod.POST)
	public ResponseEntity<?> searchGoodsInStockAndStaff(HttpServletRequest request,
			@RequestBody GoodsInStockSearchModel searchInput) {
		String nomeMetodo = ".searchGoodsInStockAndStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<GoodInfoNew> lstGoods = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchInput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_IN_STOCK_AND_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstGoods = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return new ResponseEntity<List<GoodInfoNew>>(lstGoods, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK }, method = RequestMethod.POST)
	public ResponseEntity<?> searchCountDetailGoodInStock(HttpServletRequest request,
			@RequestBody GoodsInStockSearchModel searchInput) {
		String nomeMetodo = ".searchCountDetailGoodInStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();

		List<GoodCountDetail> lstGoodCountDetail = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchInput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstGoodCountDetail = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<GoodCountDetail>>() {
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
		return new ResponseEntity<List<GoodCountDetail>>(lstGoodCountDetail, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF }, method = RequestMethod.POST)
	public ResponseEntity<?> searchCountDetailGoodInStockAndStaff(HttpServletRequest request,
			@RequestBody GoodsInStockSearchModel searchInput) {
		String nomeMetodo = ".searchCountDetailGoodInStockAndStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<GoodCountDetail> lstGoodCountDetail = new ArrayList<>();

		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchInput);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstGoodCountDetail = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<GoodCountDetail>>() {
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
		return new ResponseEntity<List<GoodCountDetail>>(lstGoodCountDetail, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_STOCK_SERIAL_SINGLE }, method = RequestMethod.POST)
	public ResponseEntity<?> searchStockSingleSerial(HttpServletRequest request,
			@RequestBody StockSerialObject searchSerialD) {
		String nomeMetodo = ".searchStockSingleSerial() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<StockSerialObject> lstStockSerial = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchSerialD);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_STOCK_SERIAL_SINGLE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstStockSerial = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockSerialObject>>() {
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
		return new ResponseEntity<List<StockSerialObject>>(lstStockSerial, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_STOCK_SERIAL_STRIP }, method = RequestMethod.POST)
	public ResponseEntity<?> searchStockStripSerial(HttpServletRequest request,
			@RequestBody StockSerialObject searchSerialD) {
		String nomeMetodo = ".searchStockStripSerial() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<StockSerialObject> lstStockSerial = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchSerialD);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_STOCK_SERIAL_STRIP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstStockSerial = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockSerialObject>>() {
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
		return new ResponseEntity<List<StockSerialObject>>(lstStockSerial, HttpStatus.OK);
	}
}
