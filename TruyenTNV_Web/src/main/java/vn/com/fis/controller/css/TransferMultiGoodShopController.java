package vn.com.fis.controller.css;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.css.CommonBusinessCSS;
import vn.com.fis.model.ProductOrder.GoodInfoNew;
import vn.com.fis.model.ProductOrder.ShopGoodMultiRequest;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ShopSearchOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class TransferMultiGoodShopController {

	private static final Logger LOG = LoggerFactory.getLogger(TransferMultiGoodShopController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	
	@Autowired
	CommonBusinessCSS commonBusiness;

	@RequestMapping(value = { Constants.ACTION_GET_LIST_SHOP_BY_CODES }, method = RequestMethod.POST)
	public ResponseEntity<?> getListShopByCodes(HttpServletRequest request,
			@RequestBody List<ShopSearchOutput> listShop) {
		String nomeMetodo = ".getListShopByCodes() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(listShop);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_LIST_SHOP_BY_CODES;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listShop = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
		return new ResponseEntity<List<ShopSearchOutput>>(listShop, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_SHOP_BY_CODE }, method = RequestMethod.POST)
	public ResponseEntity<?> getShopByCode(HttpServletRequest request, @RequestBody ShopSearchOutput shopSearch) {
		String nomeMetodo = ".getShopByCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(shopSearch);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_SHOP_BY_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					shopSearch = jsonMapper.readValue(tmp.toString(), new TypeReference<ShopSearchOutput>() {
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
		return new ResponseEntity<ShopSearchOutput>(shopSearch, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_SHOP_FROM_TEMPLATE }, method = RequestMethod.POST)
	public ResponseEntity<?> getListShopFromTemplate(MultipartHttpServletRequest request) throws IOException {
		String nomeMetodo = ".getListShopFromTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ShopSearchOutput> listShopResult = new ArrayList<ShopSearchOutput>();
		MessagesResponse mess = new MessagesResponse();
		try {
			
			Iterator<String> itr = request.getFileNames();
			MultipartFile file = request.getFile(itr.next());
			LOG.info(LOG.getName() + nomeMetodo + " Paremeter filename:" + file.getOriginalFilename() +"; ");
			InputStream fileInput = new ByteArrayInputStream(file.getBytes());
			
			
			listShopResult = commonBusiness.getListShopFromTemplate(fileInput); //get list shop_code from excel
			Gson gson = new Gson();
			String dataString = gson.toJson(listShopResult);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_SHOP_FROM_TEMPLATE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listShopResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopSearchOutput>>() {
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
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ShopSearchOutput>>(listShopResult, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_GOOD_FOR_MULTI }, method = RequestMethod.GET)
	public ResponseEntity<?> getListGoodForMulti(HttpServletRequest request,
			@RequestParam(name = "goodType") String goodType) {
		String nomeMetodo = ".getListGoodForMulti() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + " Paremeter goodType:" + goodType + "; ");
		MessagesResponse msgResponse = new MessagesResponse();
		List<GoodInfoNew> goodsList = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("goodType", goodType);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_GOOD_FOR_MULTI;
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

	@RequestMapping(value = { Constants.ACTION_ADD_MULTI_SHOP_GOOD }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_LIST_MULTI_SHOP_GOODS + "')")
	public ResponseEntity<?> addMultiShopGood(HttpServletRequest request, @RequestBody ShopGoodMultiRequest itemMulti) {
		String nomeMetodo = ".addMultiShopGood() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + " Paremeter User request:" + itemMulti.getUserRequest() + "; ");
		LOG.info(LOG.getName() + nomeMetodo + " Paremeter lstGood:" + itemMulti.getLstGood() + "; ");
		LOG.info(LOG.getName() + nomeMetodo + " Paremeter lstShop:" + itemMulti.getLstShop() + "; ");

		MessagesResponse mess = new MessagesResponse();
		itemMulti.setUserRequest(SecurityContextHolder.getContext().getAuthentication().getName());
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(itemMulti);
			String url = ev.getProperty("login.url") + Constants.ACTION_ADD_MULTI_SHOP_GOOD;
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
}
