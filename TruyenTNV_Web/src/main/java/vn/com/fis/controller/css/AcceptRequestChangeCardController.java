package vn.com.fis.controller.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

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
import vn.com.fis.model.css.*;
import vn.com.fis.utils.css.*;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
public class AcceptRequestChangeCardController {
	private static final Logger LOG = LoggerFactory.getLogger(AcceptRequestChangeCardController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.ACTION_SEARCH_REQUEST_CHANGE_CARD }, method = RequestMethod.GET)
	public ResponseEntity<?> searchRequestChangeCard(HttpServletRequest request,
			@RequestParam(name = "requestId") String requestId,
			@RequestParam(name = "requestStatus") String requestStatus,
			@RequestParam(name = "stkNumber") String stkNumber, @RequestParam(name = "phoneNumber") String phoneNumber,
			@RequestParam(name = "userCreate") String userCreate, @RequestParam(name = "createDate") String createDate,
			@RequestParam(name = "serial") String serial, @RequestParam(name = "type") String type) {
		String nomeMetodo = ".searchRequestChangeCard() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.PARAMETER + " requestId = " + requestId
				+ "; requestStatus = " + requestStatus + "; stkNumber = " + stkNumber + "; phoneNumber = " + phoneNumber
				+ "; userCreate = " + userCreate + "; createDate = " + createDate + "; serial = " + serial + "; type = "
				+ type);

		MessagesResponse mess = new MessagesResponse();
		List<AcceptRequestChangeCard> lstRequestChangeCard = new ArrayList<AcceptRequestChangeCard>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("requestId", requestId);
			params.put("requestStatus", requestStatus);
			params.put("stkNumber", stkNumber);
			params.put("phoneNumber", phoneNumber);
			params.put("userCreate", userCreate);
			params.put("createDate", createDate);
			params.put("serial", serial);
			params.put("type", type);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARCH_REQUEST_CHANGE_CARD;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstRequestChangeCard = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<AcceptRequestChangeCard>>() {
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
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<AcceptRequestChangeCard>>(lstRequestChangeCard, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_ACCEPT_REQUEST_CHANGE_CARD }, method = RequestMethod.GET)
	public ResponseEntity<?> acceptRequestChangeCard(HttpServletRequest request,
			@RequestParam(name = "requestId") String requestId, @RequestParam(name = "stkOld") String stkOld,
			@RequestParam(name = "stkNew") String stkNew) {
		String nomeMetodo = ".acceptRequestChangeCard() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("requestId", requestId);
			params.put("stkOld", stkOld);
			params.put("stkNew", stkNew);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_ACCEPT_REQUEST_CHANGE_CARD;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_STAFF }, method = RequestMethod.GET)
	public ResponseEntity<?> getStaff(HttpServletRequest request, @RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<StaffObject> lstStaff = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_STAFF;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstStaff = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
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
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(lstStaff, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_REQUEST_CHANGE_CARD_AIRTIME_DETAIL }, method = RequestMethod.GET)
	public ResponseEntity<?> getRequestChangeCardAirtimeDetail(HttpServletRequest request,
			@RequestParam(name = "requestId") String requestId) {
		String nomeMetodo = ".getRequestChangeCardAirtimeDetail() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.PARAMETER + " requestId = " + requestId);
		MessagesResponse mess = new MessagesResponse();
		List<RequestChangeCardAirtimeDetail> lstRequestChangeCardAirtimeDetail = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("requestId", requestId);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.ACTION_GET_REQUEST_CHANGE_CARD_AIRTIME_DETAIL;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstRequestChangeCardAirtimeDetail = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<RequestChangeCardAirtimeDetail>>() {
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
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<RequestChangeCardAirtimeDetail>>(lstRequestChangeCardAirtimeDetail,
				HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REJECT_REQUEST_CHANGE_CARD_AIRTIME }, method = RequestMethod.POST)
	public ResponseEntity<?> rejectChangeCardAirtime(HttpServletRequest request,
			@RequestBody List<RequestChangeCardAirtimeDetail> inputDetail) {
		String nomeMetodo = ".rejectChangeCardAirtime() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(inputDetail);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.ACTION_REJECT_REQUEST_CHANGE_CARD_AIRTIME;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_DESTROY_REQUEST_CHANGE_CARD_AIRTIME }, method = RequestMethod.POST)
	public ResponseEntity<?> destroyChangeCardAirtime(HttpServletRequest request,
			@RequestBody List<RequestChangeCardAirtimeDetail> inputDetail) {
		String nomeMetodo = ".rejectChangeCardAirtime() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
			String dataString = gson.toJson(inputDetail);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.ACTION_DESTROY_REQUEST_CHANGE_CARD_AIRTIME;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_APDOMAIN_BLOCK }, method = RequestMethod.GET)
	public ResponseEntity<?> getListApDomainBlock(HttpServletRequest request) {
		String nomeMetodo = ".getListApDomainBlock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<String> lstApDomain = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_APDOMAIN_BLOCK;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstApDomain = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
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
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<List<String>>(lstApDomain, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_LOCK_REQUEST_CHANGE_CARD_AIRTIME }, method = RequestMethod.POST)
	public ResponseEntity<?> lockRequestAirtime(HttpServletRequest request,
			@RequestBody List<RequestChangeCardAirtimeDetail> inputDetail) {
		String nomeMetodo = ".lockRequestAirtime() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(inputDetail);
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.ACTION_LOCK_REQUEST_CHANGE_CARD_AIRTIME;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_LOCK_CHANGE_CARD_AIRTIME }, method = RequestMethod.POST)
	public ResponseEntity<?> changeRequestAirtime(HttpServletRequest request,
			@RequestBody List<RequestChangeCardAirtimeDetail> inputDetail) {
		String nomeMetodo = ".changeRequestAirtime() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
			String dataString = gson.toJson(inputDetail);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_LOCK_CHANGE_CARD_AIRTIME;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_GET_IMG_CHANGE_CARD }, method = RequestMethod.POST)
	public ResponseEntity<?> getImgChangeCard(HttpServletRequest request,
			@RequestParam(name = "requestId") String requestId, @RequestParam(name = "name") String name) {
		String nomeMetodo = ".getImgChangeCard() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.PARAMETER + " requestId = " + requestId + " File Name = "
				+ name);

		MessagesResponse mess = new MessagesResponse();
		List<String> result = new ArrayList<>();
		try {
			ChangeCardInput changeCardInput = new ChangeCardInput();
			changeCardInput.setRequestId(requestId);
			changeCardInput.setImgName(name);
			Gson gson = new Gson();
			String dataString = gson.toJson(changeCardInput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_CUSTOMER_GET_IMG_CHANGE_CARD;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
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
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_CHANGE_CARD_PHYSICAL_DETAIL }, method = RequestMethod.GET)
	public ResponseEntity<?> getChangeCardPhysicalDetail(HttpServletRequest request,
			@RequestParam(name = "requestId") String requestId) {
		String nomeMetodo = ".getChangeCardPhysicalDetail() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<ChangeCardPhysicalDetail> lstChangeCardPhysicalDetail = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("requestId", requestId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_CHANGE_CARD_PHYSICAL_DETAIL;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstChangeCardPhysicalDetail = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<ChangeCardPhysicalDetail>>() {
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
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ChangeCardPhysicalDetail>>(lstChangeCardPhysicalDetail, HttpStatus.OK);
	}
}
