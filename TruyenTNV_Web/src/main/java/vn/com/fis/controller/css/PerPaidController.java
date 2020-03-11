package vn.com.fis.controller.css;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
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
import org.springframework.http.HttpHeaders;
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
import vn.com.fis.business.css.PerPaid2Business;
import vn.com.fis.business.css.PerPaidBusiness;
import vn.com.fis.common.css.CommonUtil;
import vn.com.fis.model.css.AgencyObject;
import vn.com.fis.model.css.ApDomainModel;
import vn.com.fis.model.css.AttachmentDataObject;
import vn.com.fis.model.css.COSObject;
import vn.com.fis.model.css.ChangeSIMInput;
import vn.com.fis.model.css.ChangeSoveInput;
import vn.com.fis.model.css.CheckQueryModel;
import vn.com.fis.model.css.ConnectObject;
import vn.com.fis.model.css.CountryResponse;
import vn.com.fis.model.css.CustSubObj;
import vn.com.fis.model.css.CustomerObject;
import vn.com.fis.model.css.CustomerTypeResponse;
import vn.com.fis.model.css.DistrictResponse;
import vn.com.fis.model.css.HistOutput;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.PerPaidSearchCustomerBundleInput;
import vn.com.fis.model.css.PerPaidSearchCustomerBundleOutput;
import vn.com.fis.model.css.PerPaidSearchCustomerInput;
import vn.com.fis.model.css.PerPaidSearchCustomerOutput;
import vn.com.fis.model.css.PerPaidSearchHistObject;
import vn.com.fis.model.css.PrePaidCusSubBatch;
import vn.com.fis.model.css.ProvinceResponse;
import vn.com.fis.model.css.ReasonChangeSIMObject;
import vn.com.fis.model.css.RegisterSubInfoObject;
import vn.com.fis.model.css.RequestChangeServicesInput;
import vn.com.fis.model.css.ServiceCodeRequest;
import vn.com.fis.model.css.ShopObject;
import vn.com.fis.model.css.StaffObject;
import vn.com.fis.model.css.SubSearchOutput;
import vn.com.fis.model.css.TransferOwerShipInput;
import vn.com.fis.tibco.model.entity.PreCustomer;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

/**
 * The Class PerPaidController.
 */
@Controller
public class PerPaidController {

	@Autowired
	PerPaidBusiness perPaidBusiness;

	@Autowired
	PerPaid2Business perPaid2Business;

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	CommonBusinessCSS commonBusiness;

	private static final Logger LOG = LoggerFactory.getLogger(PerPaidController.class);

	/**
	 * List country.
	 *
	 * @return the response entity
	 */
	@RequestMapping(value = { Constants.ACTION_CUSTOMER_LIST_COUNTRY }, method = RequestMethod.POST)
	public ResponseEntity<?> listCountry(HttpServletRequest request) {
		String nomeMetodo = ".listCountry() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<CountryResponse> listCountry = new ArrayList<CountryResponse>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_COUNTRY;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listCountry = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CountryResponse>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<CountryResponse>>(listCountry, HttpStatus.OK);
	}

	/**
	 * Creates the ticket.
	 *
	 * @return the response entity
	 */
	@RequestMapping(value = Constants.ACTION_CUSTOMER_LIST_PROVINCE, method = RequestMethod.POST)
	public ResponseEntity<?> listProvince(HttpServletRequest request) {
		String nomeMetodo = ".listProvince() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ProvinceResponse> listProvince = new ArrayList<ProvinceResponse>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_PROVINCE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listProvince = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProvinceResponse>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ProvinceResponse>>(listProvince, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_LIST_CUSTOMER_TYPE }, method = RequestMethod.POST)
	public ResponseEntity<?> customerType(HttpServletRequest request) {
		String nomeMetodo = ".customerType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<CustomerTypeResponse> listCustomer = new ArrayList<CustomerTypeResponse>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_CUSTOMER_TYPE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listCustomer = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<CustomerTypeResponse>>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<CustomerTypeResponse>>(listCustomer, HttpStatus.OK);
	}

	/**
	 * List district.
	 *
	 * @param proId the pro id
	 * @return the response entity
	 */
	@RequestMapping(value = Constants.ACTION_CUSTOMER_LIST_DISTRICT, method = RequestMethod.POST)
	public ResponseEntity<?> listDistrict(HttpServletRequest request, @RequestParam(name = "proId") String proId) {
		String nomeMetodo = ".listDistrict() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.debug(LOG.getName() + " proId  = " + proId);

		List<DistrictResponse> listDistrict = new ArrayList<DistrictResponse>();
		if (!"".equals(proId) && !"null".equals(proId)) {
			MessagesResponse mess = new MessagesResponse();
			try {
				HashMap<String, String> params = new HashMap<>();
				params.put("proId", proId);
				String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_DISTRICT;
				String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

				if (!"".equals(tmp)) {
					ObjectMapper jsonMapper = new ObjectMapper();
					try {
						listDistrict = jsonMapper.readValue(tmp.toString(),
								new TypeReference<List<DistrictResponse>>() {
								});
					} catch (Exception e) {
						try {
							mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
							});
							LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
							return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
						} catch (Exception ex) {
							throw ex;
						}
					}
				}
			} catch (Exception e) {
				LOG.error(e.getMessage(), e);
				mess.setMessages(e.getMessage());
				mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
				LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
				return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
			}
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<DistrictResponse>>(listDistrict, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_CUSTOMER_LIST_GET_PROVINCE_ID, method = RequestMethod.POST)
	public ResponseEntity<?> getProvinceId(HttpServletRequest request, @RequestParam(name = "proName") String proName) {
		String nomeMetodo = ".getProvinceId() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " proName =  " + proName);

		ProvinceResponse provin = new ProvinceResponse();
		if (!"".equals(proName) && !"null".equals(proName)) {
			MessagesResponse mess = new MessagesResponse();
			try {
				HashMap<String, String> params = new HashMap<>();
				params.put("proName", proName);
				String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_GET_PROVINCE_ID;
				String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

				if (!"".equals(tmp)) {
					ObjectMapper jsonMapper = new ObjectMapper();
					try {
						provin = jsonMapper.readValue(tmp.toString(), new TypeReference<ProvinceResponse>() {
						});
					} catch (Exception e) {
						try {
							mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
							});
							LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<ProvinceResponse>(provin, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_CUSTOMER_LIST_GET_DISTRICT_ID, method = RequestMethod.POST)
	public ResponseEntity<?> getDistrictId(HttpServletRequest request, @RequestParam(name = "disName") String disName) {
		String nomeMetodo = ".getDistrictId() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " disName = " + disName);

		DistrictResponse disRes = new DistrictResponse();
		if (!"".equals(disName) && !"null".equals(disName)) {
			MessagesResponse mess = new MessagesResponse();
			try {
				HashMap<String, String> params = new HashMap<>();
				params.put("disName", disName);
				String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_GET_DISTRICT_ID;
				String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

				if (!"".equals(tmp)) {
					ObjectMapper jsonMapper = new ObjectMapper();
					try {
						disRes = jsonMapper.readValue(tmp.toString(), new TypeReference<DistrictResponse>() {
						});
					} catch (Exception e) {
						try {
							mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
							});
							LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<DistrictResponse>(disRes, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_CUSTOMER_GET_SIM_KIT, method = RequestMethod.POST)
	public ResponseEntity<?> getSIMKit(HttpServletRequest request, @RequestParam(name = "mdn") String mdn) {
		String nomeMetodo = ".getSIMKit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " mdn = " + mdn);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("mdn", mdn);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_GET_SIM_KIT;
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

	@RequestMapping(value = Constants.ACTION_CUSTOMER_LIST_COS_KIT, method = RequestMethod.POST)
	public ResponseEntity<?> getCOSKit(HttpServletRequest request, @RequestParam(name = "mdn") String mdn,
			@RequestParam(name = "serial") String serial) {
		String nomeMetodo = ".getCOSKit() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " mdn = " + mdn + "; serial = " + serial);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("mdn", mdn);
			params.put("serial", serial);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_COS_KIT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	/**
	 * Prepaid search customer.
	 *
	 * @param searchInput the search input
	 * @return the response entity
	 */
	@RequestMapping(value = { Constants.ACTION_CUSTOMER_SEARCH }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> prepaidSearchCustomer(HttpServletRequest request,
			@RequestBody PerPaidSearchCustomerInput searchInput) {
		String nomeMetodo = ".prepaidSearchCustomer() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + "; getCard: " + searchInput.getCard()
				+ "; getCustomerType =  " + searchInput.getCustomerType() + "; getMdn = " + searchInput.getMdn()
				+ "; getSimNumber = " + searchInput.getSimNumber() + "; tax_code = " + searchInput.getTax());

		HttpHeaders response = new HttpHeaders();
		if (PerPaidBusiness.checkEmtry(searchInput)) {
			return new ResponseEntity<String>(CommonConstant.CHECK_NULL_INPUT, HttpStatus.OK);
		}

		List<PerPaidSearchCustomerOutput> list = new ArrayList<PerPaidSearchCustomerOutput>();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchInput);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_SEARCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PerPaidSearchCustomerOutput>>() {
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
		response.set("SUCCESS", "SUCCESS");
		return new ResponseEntity<List<PerPaidSearchCustomerOutput>>(list, response, HttpStatus.OK);
	}

	// DatBD2
	@RequestMapping(value = { Constants.ACTION_CUSTOMER_CHECK_QUERY }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> checkQuery(HttpServletRequest hRequest, @RequestBody PerPaidSearchCustomerOutput request) {
		String nomeMetodo = ".checkQuery() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + request.getAddress() + request.getCompanyName()
				+ request.getCustomerId() + request.getCustomerType() + request.getDistrict() + request.getDob()
				+ request.getFullName() + request.getIdCard() + request.getMdn() + request.getParent_customer_id()
				+ request.getProvince() + request.getSubscriberId());

		CheckQueryModel result = null;
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(request);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_CHECK_QUERY;
			String tmp = webService.apiServiceMethodPOST(hRequest, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<CheckQueryModel>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			mess.setMessages(ex.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<CheckQueryModel>(result, HttpStatus.OK);
	}

	// end

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_GET_CUS_SUB }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> getCusSub(HttpServletRequest request, @RequestParam(name = "cardId") String cardId,
			@RequestParam(name = "cusId") String cusId) {
		String nomeMetodo = ".getCusSub() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " cardId = " + cardId + ";  cusId = " + cusId
				+ "; cardId = " + cardId);

		List<PreCustomer> list = new ArrayList<PreCustomer>();
		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("cardId", cardId);
			params.put("cusId", cusId);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_GET_CUS_SUB;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				LOG.info(tmp.toString());
				if(tmp.contains("coreBalance"))
				{
					String tmp1 = tmp.substring(0, tmp.indexOf(",\"coreBalance\""));
					LOG.info(tmp1.toString());
					String tmp2 = tmp.substring(tmp.indexOf("},\"contract_img1\""), tmp.length());
					LOG.info(tmp2.toString());
					tmp = tmp1 + tmp2;				
				}
				LOG.info(tmp.toString());
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PreCustomer>>() {
					});
				} catch (Exception e) {
					LOG.info(e.getMessage());
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<PreCustomer>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_SUBSCRIBER_GET_INFO_UPDATE_PREPAID }, method = RequestMethod.POST)
	public ResponseEntity<?> getSubInfoUpdatePrepaid(HttpServletRequest request,
			@RequestParam(name = "mdn") String mdn) {
		String nomeMetodo = ".getSubInfoUpdatePrepaid() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info("mdn=" + mdn);

		SubSearchOutput subSearch = new SubSearchOutput();
		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("mdn", mdn);
			String url = ev.getProperty("login.url") + Constants.ACTION_SUBSCRIBER_GET_INFO_UPDATE_PREPAID;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					subSearch = jsonMapper.readValue(tmp.toString(), new TypeReference<SubSearchOutput>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<SubSearchOutput>(subSearch, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_SUBSCRIBER_GET_INFO_CHANGESIM_PREPAID }, method = RequestMethod.POST)
	public ResponseEntity<?> getSubInfoChangeSIMPrepaid(HttpServletRequest request,
			@RequestParam(name = "mdn") String mdn) {
		String nomeMetodo = ".getSubInfoChangeSIMPrepaid() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(" mdn= " + mdn);

		SubSearchOutput subSearch = new SubSearchOutput();
		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("mdn", mdn);
			String url = ev.getProperty("login.url") + Constants.ACTION_SUBSCRIBER_GET_INFO_CHANGESIM_PREPAID;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					subSearch = jsonMapper.readValue(tmp.toString(), new TypeReference<SubSearchOutput>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<SubSearchOutput>(subSearch, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_UPLOAD_IMAGE }, method = RequestMethod.POST)
	public ResponseEntity<?> uploadFile(MultipartHttpServletRequest request) {
		String nomeMetodo = ".uploadFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Iterator<String> itr = request.getFileNames();

		String documentType = request.getParameter("identityDocType");
		String attachMentIdClient = request.getParameter("attachMentIdClient");

		MultipartFile file = request.getFile(itr.next());
		String fileName = file.getOriginalFilename();
		if (!CommonUtil.checkFileIsImage(file)) {
			LOG.info(LOG.getName() + nomeMetodo + "Check dịnh dạng file upload :" + fileName + " không hợp lệ");
			MessagesResponse mess = new MessagesResponse();
			mess.setCode(CommonConstant.FILE_IMAGE_CONTENT_ERROR);
			mess.setMessages(fileName);
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.EXPECTATION_FAILED);
		}

		String fileNameUnique = fileName.substring(0, fileName.indexOf(".")) + "_" + attachMentIdClient
				+ fileName.substring(fileName.indexOf("."), fileName.length());

		File dir = new File(ev.getProperty("upload.path") + CommonUtil.getDate());
		if (!dir.exists()) {
			if (!dir.mkdirs()) {
				MessagesResponse mess = new MessagesResponse();
				mess.setMessages(Constants.CREATE_FOLDER);
				mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
				return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
			}
		}

		File serverFile = new File(dir, fileNameUnique);
		try {
			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			stream.write(file.getBytes());
			stream.close();
			CommonUtil.checkLengthAndResize(serverFile.toString());
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		} catch (Exception e) {
			LOG.debug(LOG.getName() + nomeMetodo + e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		AttachmentDataObject temp = new AttachmentDataObject();
		temp.setFileName(serverFile.toString());
		temp.setAttachmentType(documentType);
		temp.setSize(String.valueOf(serverFile.length()));
		temp.setAttachMentIdClient(attachMentIdClient);

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<AttachmentDataObject>(temp, HttpStatus.OK);

	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_REGISTER }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> registerCustomer(HttpServletRequest hRequest,
			@RequestBody List<CustomerObject> requestObj) {
		String nomeMetodo = ".registerCustomer() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		CustomerObject request = new CustomerObject();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestObj);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_REGISTER;
			String tmp = webService.apiServiceMethodPOST(hRequest, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					request = jsonMapper.readValue(tmp.toString(), new TypeReference<CustomerObject>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.debug(LOG.getName() + nomeMetodo + e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<CustomerObject>(request, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_MODIFY }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> modifyCustomer(HttpServletRequest hRequest, @RequestBody List<CustomerObject> requestObj)
			throws Exception {
		String nomeMetodo = ".modifyCustomer() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		CustomerObject request = new CustomerObject();
		MessagesResponse mess = new MessagesResponse();

		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestObj);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_MODIFY;
			String tmp = webService.apiServiceMethodPOST(hRequest, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					request = jsonMapper.readValue(tmp.toString(), new TypeReference<CustomerObject>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<CustomerObject>(request, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_LIST_COS_NEW }, method = RequestMethod.POST)
	public ResponseEntity<?> listCOSNew(HttpServletRequest request) {
		String nomeMetodo = ".listCOSNew() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<COSObject> listCosNew = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_COS_NEW;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listCosNew = jsonMapper.readValue(tmp.toString(), new TypeReference<List<COSObject>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<COSObject>>(listCosNew, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_LIST_COS_MAP_NEW }, method = RequestMethod.POST)
	public ResponseEntity<?> listCOSMapNew(HttpServletRequest request,
			@RequestParam(name = "shopCode") String shopCode) {
		String nomeMetodo = ".listCOSMapNew() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<COSObject> listCosNew = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopCode", shopCode);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_COS_NEW;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listCosNew = jsonMapper.readValue(tmp.toString(), new TypeReference<List<COSObject>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<COSObject>>(listCosNew, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_ADD_NEW_CONNECT }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> addNewConnect(HttpServletRequest hRequest, @RequestBody ConnectObject request)
			throws Exception {
		String nomeMetodo = ".addNewConnect() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String body = "";
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(request);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_ADD_NEW_CONNECT;
			String tmp = webService.apiServiceMethodPOST(hRequest, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					body = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<>(body, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_SERCH_HIST }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SEARCH_PREPAID + "')")
	public ResponseEntity<?> searchHist(HttpServletRequest hRequest, @RequestBody PerPaidSearchHistObject request) {
		String nomeMetodo = ".searchHist() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		HistOutput listHist = new HistOutput();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(request);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_SERCH_HIST;
			String tmp = webService.apiServiceMethodPOST(hRequest, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listHist = jsonMapper.readValue(tmp.toString(), new TypeReference<HistOutput>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<HistOutput>(listHist, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_LIST_SUB }, method = RequestMethod.POST)
	public ResponseEntity<?> GetListSubscriberTemplate(MultipartHttpServletRequest request) throws IOException {
		String nomeMetodo = ".GetListSubscriberTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse jMsg = new MessagesResponse();
		List<PrePaidCusSubBatch> resultListSubscriber = new ArrayList<PrePaidCusSubBatch>();
		try {

			Iterator<String> itr = request.getFileNames();
			MultipartFile file = request.getFile(itr.next());
			InputStream fileInput = new ByteArrayInputStream(file.getBytes());

			resultListSubscriber = perPaidBusiness.getListSubscriberFormTemplate(fileInput);
			Gson gson = new Gson();
			String dataString = gson.toJson(resultListSubscriber);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_SUB;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultListSubscriber = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<PrePaidCusSubBatch>>() {
							});
				} catch (Exception e) {
					try {
						jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(jMsg, HttpStatus.EXPECTATION_FAILED);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			jMsg.setMessages(e.getMessage());
			jMsg.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.error(e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(jMsg, HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<PrePaidCusSubBatch>>(resultListSubscriber, HttpStatus.OK);

		// So luong tien trinh song song

	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_UPLOAD_IMAGE_BATCH }, method = RequestMethod.POST)
	public ResponseEntity<?> uploadFileBatch(MultipartHttpServletRequest request) {
		String nomeMetodo = ".uploadFileBatch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Iterator<String> itr = request.getFileNames();

		String documentType = request.getParameter("identityDocType");
		String attachMentIdClient = request.getParameter("attachMentIdClient");

		MultipartFile file = request.getFile(itr.next());
		String fileName = file.getOriginalFilename();

		LOG.info(LOG.getName() + nomeMetodo + "fileName =" + fileName);
		if (!CommonUtil.checkFileIsImage(file)) {
			LOG.info(LOG.getName() + nomeMetodo + "Check dịnh dạng file upload :" + fileName + " không hợp lệ");
			MessagesResponse mess = new MessagesResponse();
			mess.setCode(CommonConstant.FILE_IMAGE_CONTENT_ERROR);
			mess.setMessages(fileName);
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.EXPECTATION_FAILED);
		}

		File dir = new File(ev.getProperty("upload.path") + CommonUtil.getDate());
		if (!dir.exists()) {
			if (!dir.mkdirs()) {
				MessagesResponse mess = new MessagesResponse();
				mess.setMessages(Constants.CREATE_FOLDER);
				mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
				return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
			}
		}

		File serverFile = new File(dir, fileName);
		try {
			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			stream.write(file.getBytes());
			stream.close();
			CommonUtil.checkLengthAndResize(serverFile.toString());
		} catch (IOException e) {
			LOG.debug(LOG.getName() + nomeMetodo + e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		} catch (Exception e) {
			LOG.debug(LOG.getName() + nomeMetodo + e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + "serverFile.toString =" + serverFile.toString());

		AttachmentDataObject temp = new AttachmentDataObject();
		temp.setFileName(serverFile.toString());
		temp.setAttachmentType(documentType);
		temp.setSize(String.valueOf(serverFile.length()));
		temp.setAttachMentIdClient(attachMentIdClient);

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<AttachmentDataObject>(temp, HttpStatus.OK);

	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_ADD_BATCH }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID_LIST + "')")
	public ResponseEntity<?> addCusBatch(HttpServletRequest request, @RequestBody List<PrePaidCusSubBatch> requestIn)
			throws Exception {
		String nomeMetodo = ".addCusBatch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<PrePaidCusSubBatch> response = null;
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_ADD_BATCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					response = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PrePaidCusSubBatch>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<PrePaidCusSubBatch>>(response, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_LIST_REASON }, method = RequestMethod.POST)
	public ResponseEntity<?> getListReasonChangeSIM(HttpServletRequest request) {
		String nomeMetodo = ".getListReasonChangeSIM() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ReasonChangeSIMObject> result = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_REASON;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ReasonChangeSIMObject>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ReasonChangeSIMObject>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_CHANGE_SIM }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> changeSIM(HttpServletRequest request, @RequestBody ChangeSIMInput input) {
		String nomeMetodo = ".changeSIM() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " ChangeSIMInput : " + input);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_CHANGE_SIM;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_CHANGE_SOVE }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> changeSove(HttpServletRequest request, @RequestBody ChangeSoveInput input) {
		String nomeMetodo = ".changeSove() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " input : " + input);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_CHANGE_SOVE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REGISTER_BS }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID_BS + "')")
	public ResponseEntity<?> registerBS(HttpServletRequest request, @RequestBody RegisterSubInfoObject input)
			throws Exception {
		String nomeMetodo = ".registerBS() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_REGISTER_BS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.debug(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CONNEC_SUB_BS }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID_CON_SUB + "')")
	public ResponseEntity<?> connecterSubBS(HttpServletRequest request, @RequestBody RegisterSubInfoObject input)
			throws Exception {
		String nomeMetodo = ".registerBS() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_CONNEC_SUB_BS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.debug(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS }, method = RequestMethod.POST)
	public ResponseEntity<?> verifySubscriberHistoryUpdateCus(HttpServletRequest request,
			@RequestBody SubSearchOutput verifySubIn) {
		String nomeMetodo = ".verifySubscriberHistoryUpdateCus() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(verifySubIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = {
			Constants.ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS_WITH_1_NUMBER }, method = RequestMethod.POST)
	public ResponseEntity<?> verifySubscriberHistoryUpdateCusWith1Number(HttpServletRequest request,
			@RequestBody SubSearchOutput verifySubIn) {
		String nomeMetodo = ".verifySubscriberHistoryUpdateCusWith1Number() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + "verifySubIn = " + verifySubIn.toString());

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(verifySubIn);
			String url = ev.getProperty("login.url")
					+ Constants.ACTION_VERIFY_SUBSCRIBER_HISTORY_UPDATE_CUS_WITH_1_NUMBER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_VERIFY_SUBSCRIBER_HISTORY_CHANGE_SIM }, method = RequestMethod.POST)
	public ResponseEntity<?> verifySubscriberHistoryChangeSim(HttpServletRequest request,
			@RequestBody SubSearchOutput verifySubIn) {
		String nomeMetodo = ".verifySubscriberHistoryChangeSim() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + "verifySubIn = " + verifySubIn.toString());
		ResponseEntity<?> response = perPaid2Business.verifySubscriberHistoryChangeSim(request, verifySubIn);

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}

	@RequestMapping(value = { Constants.ACTION_UPDATE_PREPAID_CUSTOMER }, method = RequestMethod.POST)
	public ResponseEntity<?> updatePrepaidCustomer(HttpServletRequest request, @RequestBody RegisterSubInfoObject input)
			throws Exception {
		String nomeMetodo = ".updatePrepaidCustomer() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_UPDATE_PREPAID_CUSTOMER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CREATE_NEW_SECRET_NUMBER }, method = RequestMethod.POST)
	public ResponseEntity<?> createNewSecretNumber(HttpServletRequest request,
			@RequestParam(name = "msisdnIn") String msisdnIn) {
		String nomeMetodo = ".createNewSecretNumber() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdnIn", msisdnIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_CREATE_NEW_SECRET_NUMBER;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_CHANGE_SIM_PREPAID }, method = RequestMethod.PUT)
	public ResponseEntity<?> changeSIMPrepaid(HttpServletRequest request, @RequestBody ChangeSIMInput input) {
		String nomeMetodo = ".changeSIMPrepaid() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + " - Change sim input :" + input.toString());

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_CHANGE_SIM_PREPAID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setCode(Constants.UPDATE_PREPAID_CHANGESIM_KO);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_VERIFY_NUMBER_SPECIAL }, method = RequestMethod.POST)
	public ResponseEntity<?> verifyNumberSpecial(HttpServletRequest request, @RequestParam(name = "mdn") String mdn) {
		String nomeMetodo = ".verifyNumberSpecial() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info("mdn=" + mdn);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("mdn", mdn);
			String url = ev.getProperty("login.url") + Constants.ACTION_VERIFY_NUMBER_SPECIAL;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_VERIFY_ID_CARD }, method = RequestMethod.POST)
	public ResponseEntity<?> verifyIdCardChangeSIM(HttpServletRequest request,
			@RequestBody ChangeSIMInput verifySubIn) {
		String nomeMetodo = ".verifyIdCardChangeSIM() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(verifySubIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_VERIFY_ID_CARD;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_SEARCH_REQUEST_SERVICE_CHANGE }, method = RequestMethod.POST)
	public ResponseEntity<?> searchRequestChangeService(HttpServletRequest request,
			@RequestBody RequestChangeServicesInput requestSearchIn) {
		String nomeMetodo = ".searchRequestChangeService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		List<RequestChangeServicesInput> list = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestSearchIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_SEARCH_REQUEST_SERVICE_CHANGE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<RequestChangeServicesInput>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<RequestChangeServicesInput>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.ACTION_CUSTOMER_LIST_SERVICE_CHANGE, method = RequestMethod.POST)
	public ResponseEntity<?> getListServiceRequest(HttpServletRequest request) {
		String nomeMetodo = ".getListServiceRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		List<ServiceCodeRequest> list = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_LIST_SERVICE_CHANGE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ServiceCodeRequest>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<ServiceCodeRequest>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_APPROVE_REQUEST_CHANGE_SERVICE }, method = RequestMethod.POST)
	public ResponseEntity<?> approveRequestChangeService(HttpServletRequest request,
			@RequestBody RequestChangeServicesInput input) {
		String nomeMetodo = ".approveRequestChangeService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_APPROVE_REQUEST_CHANGE_SERVICE;
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

	@RequestMapping(value = { Constants.ACTION_REJECT_REQUEST_CHANGE_SERVICE }, method = RequestMethod.POST)
	public ResponseEntity<?> rejectRequestChangeService(HttpServletRequest request,
			@RequestBody RequestChangeServicesInput input) {
		String nomeMetodo = ".rejectRequestChangeService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_REJECT_REQUEST_CHANGE_SERVICE;
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

	@RequestMapping(value = { Constants.ACTION_REVIEW_REQUEST_CHANGE_SERVICE }, method = RequestMethod.POST)
	public ResponseEntity<?> reviewRequestChangeService(HttpServletRequest request,
			@RequestBody RequestChangeServicesInput input) {
		String nomeMetodo = ".reviewRequestChangeService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_REVIEW_REQUEST_CHANGE_SERVICE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_STAFF_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getStaffList(HttpServletRequest request, @RequestParam(name = "shopId") String shopId) {
		String nomeMetodo = ".getStaffList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " shopId = " + shopId);

		MessagesResponse mess = new MessagesResponse();
		List<StaffObject> list = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("shopId", shopId);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_STAFF_LIST;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StaffObject>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<StaffObject>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_GET_LIST_REQUEST_CHANGESIM_VIEW }, method = RequestMethod.POST)
	public ResponseEntity<?> searchRequestChangeServiceForView(HttpServletRequest request,
			@RequestBody RequestChangeServicesInput requestSearchIn) {
		String nomeMetodo = ".searchRequestChangeServiceForView() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<RequestChangeServicesInput> list = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestSearchIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_LIST_REQUEST_CHANGESIM_VIEW;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<RequestChangeServicesInput>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<RequestChangeServicesInput>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_LIST_PROVINCE_SHOP }, method = RequestMethod.POST)
	public ResponseEntity<?> getListProvinceForUpdatePRBS(HttpServletRequest request) {
		String nomeMetodo = ".getListProvinceForUpdatePRBS() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ProvinceResponse> result = new ArrayList<ProvinceResponse>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.ACTION_LIST_PROVINCE_SHOP;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ProvinceResponse>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ProvinceResponse>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_LIST_PROVINCE_SHOP_TEMPLATE }, method = RequestMethod.POST)
	public ResponseEntity<?> getListProvinceShopFromTemplate(MultipartHttpServletRequest request) throws IOException {
		String nomeMetodo = ".getListProvinceShopFromTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ShopObject> listProvinceResult = new ArrayList<ShopObject>();

		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		InputStream fileInput = new ByteArrayInputStream(file.getBytes());

		try {
			listProvinceResult = commonBusiness.getListProvinceShopFromTemplate(fileInput);
		} catch (Exception e) {
			MessagesResponse jMsg = new MessagesResponse();
			jMsg.setMessages(e.getMessage());
			jMsg.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);

			return new ResponseEntity<MessagesResponse>(jMsg, HttpStatus.EXPECTATION_FAILED);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ShopObject>>(listProvinceResult, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_LIST_SHOP_BY_PROVINCE_AND_SHOP }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_UPDATE_PROVINCE_BS + "')")
	public ResponseEntity<?> getListShopByProvinceAndShop(HttpServletRequest request,
			@RequestBody ShopObject provinceShopSearchIn) {
		String nomeMetodo = ".getListShopByProvinceAndShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ShopObject> result = new ArrayList<ShopObject>();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(provinceShopSearchIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_LIST_SHOP_BY_PROVINCE_AND_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopObject>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<ShopObject>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_UPDATE_PROVINCE_BS }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.CATEGORY_UPDATE_PROVINCE_BS + "')")
	public ResponseEntity<?> updateProvinceForBS(HttpServletRequest request,
			@RequestBody List<ShopObject> listShopInput) {
		String nomeMetodo = ".updateProvinceForBS() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse responseUpdate = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(listShopInput);
			String url = ev.getProperty("login.url") + Constants.ACTION_UPDATE_PROVINCE_BS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				responseUpdate = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			responseUpdate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(responseUpdate, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(responseUpdate, HttpStatus.OK);
	}

	@RequestMapping(value = {
			Constants.ACTION_GET_LIST_REQUEST_TRANSFER_OF_OWNERSHIP_VIEW }, method = RequestMethod.POST)
	public ResponseEntity<?> actionSearchRequesTranferOfOwnership(HttpServletRequest request,
			@RequestBody RequestChangeServicesInput requestSearchIn) {
		String nomeMetodo = ".searchRequesTranferOfOwnership() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + " RequestChangeServicesInput: "
				+ requestSearchIn.toString());

		List<RequestChangeServicesInput> list = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestSearchIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_GET_LIST_REQUEST_TRANSFER_OF_OWNERSHIP_VIEW;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<RequestChangeServicesInput>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<RequestChangeServicesInput>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_TRANSFER_OF_OWNERSHIP_PREPAID }, method = RequestMethod.PUT)
	public ResponseEntity<?> transferOfOwnershipPrepaid(HttpServletRequest request,
			@RequestBody TransferOwerShipInput input) throws Exception {
		String nomeMetodo = ".transferOfOwnershipPrepaid() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_TRANSFER_OF_OWNERSHIP_PREPAID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			mess.setCode(Constants.UPDATE_PREPAID_TRANSFER_OF_OWNERSHIP_KO);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_GET_IMG_CHANGESERVICE }, method = RequestMethod.POST)
	public ResponseEntity<?> getImgChangeService(HttpServletRequest request,
			@RequestParam(name = "imgId") String imgId) {
		String nomeMetodo = ".getImgChangeService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<String> result = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("imgId", imgId);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_GET_IMG_CHANGESERVICE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<String>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.URL_LIST_VAS_REGISTER }, method = RequestMethod.POST)
	public ResponseEntity<?> getListVasResgister(HttpServletRequest request) {
		String nomeMetodo = ".getListVasResgister() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ApDomainModel> result = new ArrayList<ApDomainModel>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.URL_LIST_VAS_REGISTER;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ApDomainModel>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ApDomainModel>>(result, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_EXECUTE_VAS_REGISTER }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.REGISTER_VAS + "')")
	public ResponseEntity<?> executeRegisterVas(HttpServletRequest request,
			@RequestParam(name = "msisdnIn") String msisdnIn, @RequestParam(name = "imsiIn") String imsiIn,
			@RequestParam(name = "registerVas") String registerVas) {
		String nomeMetodo = ".executeRegisterVas() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdnIn", msisdnIn);
			params.put("imsiIn", imsiIn);
			params.put("registerVas", registerVas);
			String url = ev.getProperty("login.url") + Constants.ACTION_EXECUTE_VAS_REGISTER;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}

	/**
	 * Prepaid search customer bundle.
	 *
	 * @param searchInput the search input
	 * @return the response entity
	 */
	@RequestMapping(value = { Constants.ACTION_CUSTOMER_SEARCH_BUNDLE }, method = RequestMethod.POST)
	public ResponseEntity<?> prepaidSearchCustomerBundle(HttpServletRequest request,
			@RequestBody PerPaidSearchCustomerBundleInput searchInput) {
		String nomeMetodo = ".prepaidSearchCustomerBundle() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		LOG.info(LOG.getName() + CommonConstant.PARAMETER + "; getDocType: " + searchInput.getDocType()
				+ "; getDocNumber =  " + searchInput.getDocNumber() + "; getMdn = " + searchInput.getMdn());

		HttpHeaders response = new HttpHeaders();
		MessagesResponse mess = new MessagesResponse();
		List<PerPaidSearchCustomerBundleOutput> list = new ArrayList<PerPaidSearchCustomerBundleOutput>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchInput);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_SEARCH_BUNDLE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					list = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<PerPaidSearchCustomerBundleOutput>>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		response.set("SUCCESS", "SUCCESS");
		return new ResponseEntity<List<PerPaidSearchCustomerBundleOutput>>(list, response, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_GET_IMG_BUNDLE }, method = RequestMethod.POST)
	public ResponseEntity<?> getImgBundle(HttpServletRequest request,
			@RequestBody PerPaidSearchCustomerBundleOutput perpaidSearchInput) {
		String nomeMetodo = ".getImgBundle() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(perpaidSearchInput);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_GET_IMG_BUNDLE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					perpaidSearchInput = jsonMapper.readValue(tmp.toString(),
							new TypeReference<PerPaidSearchCustomerBundleOutput>() {
							});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<PerPaidSearchCustomerBundleOutput>(perpaidSearchInput, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_LIST_AGENT_FROM_TEMPLATE }, method = RequestMethod.POST)
	public ResponseEntity<?> getListAgentFromTemplate(MultipartHttpServletRequest request) throws IOException {
		String nomeMetodo = ".getListAgentFromTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<AgencyObject> listProvinceResult = new ArrayList<AgencyObject>();

		Iterator<String> itr = request.getFileNames();
		MultipartFile file = request.getFile(itr.next());
		InputStream fileInput = new ByteArrayInputStream(file.getBytes());

		try {
			listProvinceResult = commonBusiness.getListAgentFromTemplate(fileInput);
		} catch (Exception e) {
			MessagesResponse jMsg = new MessagesResponse();
			jMsg.setMessages(e.getMessage());
			jMsg.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));

			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);

			return new ResponseEntity<MessagesResponse>(jMsg, HttpStatus.EXPECTATION_FAILED);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<AgencyObject>>(listProvinceResult, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_CUSTOMER_MODIFY_CHECK_UPDATE }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> modifyCustomerCheckUpdate(HttpServletRequest request,
			@RequestBody CustomerObject requestIn) {
		String nomeMetodo = ".modifyCustomer() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		CustomerObject temp = new CustomerObject();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_CUSTOMER_MODIFY_CHECK_UPDATE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					temp = jsonMapper.readValue(tmp.toString(), new TypeReference<CustomerObject>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<CustomerObject>(requestIn, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.SEARCH_CUST_SUBS }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.SEARCH_PREPAID_SUBSCRIBER + "')")
	public ResponseEntity<?> searchCustSub(HttpServletRequest request, @RequestBody PerPaidSearchHistObject requestIn) {
		String nomeMetodo = ".searchCustSub() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<CustSubObj> lstCustSub = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestIn);
			String url = ev.getProperty("login.url") + Constants.SEARCH_CUST_SUBS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstCustSub = jsonMapper.readValue(tmp.toString(), new TypeReference<List<CustSubObj>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
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
		return new ResponseEntity<List<CustSubObj>>(lstCustSub, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.ACTION_REGISTER_CHILD }, method = RequestMethod.PUT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID + "')")
	public ResponseEntity<?> registerCustomerChild(HttpServletRequest hRequest, @RequestBody CustomerObject request) {
		String nomeMetodo = ".registerCustomerChild() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		CustomerObject conObj = new CustomerObject();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(request);
			String url = ev.getProperty("login.url") + Constants.ACTION_REGISTER_CHILD;
			String tmp = webService.apiServiceMethodPOST(hRequest, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					conObj = jsonMapper.readValue(tmp.toString(), new TypeReference<CustomerObject>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<CustomerObject>(request, HttpStatus.OK);
	}

	@RequestMapping(value = { "/bs/Custome/testGetThread" }, method = RequestMethod.POST)
	public ResponseEntity<?> getThreadNumber(HttpServletRequest hRequest) {
		String nomeMetodo = ".getThreadNumber() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		String result = "";
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + "/bs/Custome/testGetThread";
			String tmp = webService.apiServiceMethodGET(hRequest, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					result = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + vn.com.fis.utils.mnpcm.Constants.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}
}
