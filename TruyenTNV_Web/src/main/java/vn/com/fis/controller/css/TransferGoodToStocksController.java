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

import vn.com.fis.model.ProductOrder.GoodInfoNew;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ShopSearchOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class TransferGoodToStocksController {

	private static final Logger LOG = LoggerFactory.getLogger(TransferGoodToStocksController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.ACTION_GET_SHOP_BY_SHOP_CODE }, method = RequestMethod.POST)
	public ResponseEntity<?> getShopByShopCode(HttpServletRequest request, @RequestBody ShopSearchOutput searchOutput) {
		String nomeMetodo = ".getShopByShopCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ShopSearchOutput shopSearchOutput = new ShopSearchOutput();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutput);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_SHOP_BY_SHOP_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					shopSearchOutput = jsonMapper.readValue(tmp.toString(), new TypeReference<ShopSearchOutput>() {
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
		return new ResponseEntity<ShopSearchOutput>(shopSearchOutput, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_NOT_FRIEND_SHOP_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getNotFriendShopList(HttpServletRequest request,
			@RequestBody ShopSearchOutput searchOutput) {
		String nomeMetodo = ".getNotFriendShopList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopSearchOutput> shopList = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutput);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_NOT_FRIEND_SHOP_LIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					shopList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(shopList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_NOT_FRIEND_SHOP_LIST_RECEIVED }, method = RequestMethod.POST)
	public ResponseEntity<?> getNotFriendShopListReceived(HttpServletRequest request,
			@RequestBody ShopSearchOutput searchOutput) {
		String nomeMetodo = ".getNotFriendShopListReceived() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopSearchOutput> shopList = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutput);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_NOT_FRIEND_SHOP_LIST_RECEIVED;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					shopList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(shopList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_DEFAULT_FRIEND_SHOP_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getDefaultFriendShopList(HttpServletRequest request,
			@RequestBody ShopSearchOutput searchOutput) {
		String nomeMetodo = ".getDefaultFriendShopList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopSearchOutput> shopList = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutput);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_DEFAULT_FRIEND_SHOP_LIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					shopList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(shopList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_DEFAULT_FRIEND_SHOP_LIST_RECEIVED }, method = RequestMethod.POST)
	public ResponseEntity<?> getDefaultFriendShopListRecieved(HttpServletRequest request,
			@RequestBody ShopSearchOutput searchOutput) {
		String nomeMetodo = ".getDefaultFriendShopListRecieved() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopSearchOutput> shopList = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutput);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_DEFAULT_FRIEND_SHOP_LIST_RECEIVED;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					shopList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(shopList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_INSERT_FRIEND_SHOP }, method = RequestMethod.POST)
	public ResponseEntity<?> insertFriendShop(HttpServletRequest request, @RequestBody ShopSearchOutput searchOutput) {
		String nomeMetodo = ".insertFriendShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutput);
			String url = ev.getProperty("login.url") + Constants.ACTION_INSERT_FRIEND_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
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
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_INSERT_BATCH_FRIEND_SHOP }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_TRANSFER_TO_SHOP + "')")
	public ResponseEntity<?> insertBatchFriendShop(HttpServletRequest request,
			@RequestBody List<ShopSearchOutput> searchOutputList) {
		String nomeMetodo = ".insertBatchFriendShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopSearchOutput> list = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutputList);
			String url = ev.getProperty("login.url") + Constants.ACTION_INSERT_BATCH_FRIEND_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_UPDATE_BATCH_FRIEND_SHOP }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_TRANSFER_TO_SHOP + "')")
	public ResponseEntity<?> updateBatchFriendShop(HttpServletRequest request,
			@RequestBody List<ShopSearchOutput> searchOutputList) {
		String nomeMetodo = ".updateBatchFriendShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ShopSearchOutput> list = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchOutputList);
			String url = ev.getProperty("login.url") + Constants.ACTION_UPDATE_BATCH_FRIEND_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_GOODS_LIST_BY_SHOP }, method = RequestMethod.GET)
	public ResponseEntity<?> getGoodsListByShop(HttpServletRequest request,
			@RequestParam(name = "goodType") String goodType, @RequestParam(name = "shopId") Long shopId) {
		String nomeMetodo = ".getGoodsListByShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse msgResponse = new MessagesResponse();
		List<GoodInfoNew> goodsList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("goodType", goodType);
			params.put("shopId", String.valueOf(shopId));
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_LIST_BY_SHOP;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					goodsList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return new ResponseEntity<List<GoodInfoNew>>(goodsList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_ADD_GOODS_LIST_TO_SHOP }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_TRANSFER_GOODS + "')")
	public ResponseEntity<?> addGoodsListToShop(HttpServletRequest request,
			@RequestBody List<GoodInfoNew> lstGoodsInsert) {
		String nomeMetodo = ".addGoodsListToShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<GoodInfoNew> goodsList = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(lstGoodsInsert);
			String url = ev.getProperty("login.url") + Constants.ACTION_ADD_GOODS_LIST_TO_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					goodsList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return new ResponseEntity<List<GoodInfoNew>>(goodsList, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REMOVE_GOODS_LIST_FROM_SHOP }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_TRANSFER_GOODS + "')")
	public ResponseEntity<?> removeGoodsListFromShop(HttpServletRequest request,
			@RequestBody List<GoodInfoNew> lstGoodsRemove) {
		String nomeMetodo = ".removeGoodsListFromShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<GoodInfoNew> goodsList = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(lstGoodsRemove);
			String url = ev.getProperty("login.url") + Constants.ACTION_REMOVE_GOODS_LIST_FROM_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					goodsList = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return new ResponseEntity<List<GoodInfoNew>>(goodsList, HttpStatus.OK);
	}
}
