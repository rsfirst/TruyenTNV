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

import vn.com.fis.entity.css.AddressCommonEntity;
import vn.com.fis.entity.css.AgentEntity;
import vn.com.fis.model.css.InputAgentAction;
import vn.com.fis.model.css.InputUpdateAgent;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.AppDomainModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.utils.epos.StringUtil;
import vn.com.fis.ws.WebService;

@Controller
public class AgentManagementController {

	private static final Logger LOG = LoggerFactory.getLogger(AgentManagementController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.PRETUPS_SEARCH_AGENT_BY_MSISDN }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getAgentByIsdn(HttpServletRequest request, @RequestParam(name = "msisdn") String msisdn,
			@RequestParam(name = "isParent") boolean isParent) {
		String nomeMetodo = ".getAgentByIsdn() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		AgentEntity resultAgent = new AgentEntity();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			params.put("isParent", String.valueOf(isParent));
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_SEARCH_AGENT_BY_MSISDN;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultAgent = jsonMapper.readValue(tmp.toString(), new TypeReference<AgentEntity>() {
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
		return new ResponseEntity<AgentEntity>(resultAgent, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_GET_AGENT_PROVINCE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getProvince(HttpServletRequest request) {
		String nomeMetodo = ".getProvince() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<AddressCommonEntity> resultProvince = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_GET_AGENT_PROVINCE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultProvince = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<AddressCommonEntity>>() {
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
		return new ResponseEntity<List<AddressCommonEntity>>(resultProvince, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_GET_AGENT_CENTRE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getCentre(HttpServletRequest request) {
		String nomeMetodo = ".getCentre() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<AddressCommonEntity> resultCentre = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_GET_AGENT_CENTRE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultCentre = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AddressCommonEntity>>() {
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
		return new ResponseEntity<List<AddressCommonEntity>>(resultCentre, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_GET_AGENT_TYPE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getAgentType(HttpServletRequest request) {
		String nomeMetodo = ".getAgentType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<AppDomainModel> resultAgentType = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_GET_AGENT_TYPE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultAgentType = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
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
		return new ResponseEntity<List<AppDomainModel>>(resultAgentType, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_GET_AGENT_LEVEL }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getAgentLevel(HttpServletRequest request) {
		String nomeMetodo = ".getAgentType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<AppDomainModel> resultAgentLevel = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_GET_AGENT_LEVEL;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultAgentLevel = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
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
		return new ResponseEntity<List<AppDomainModel>>(resultAgentLevel, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_GET_AGENT_DISTRICT }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getDistrict(HttpServletRequest request,
			@RequestParam(name = "provinceId") String provinceId) {
		String nomeMetodo = ".getDistrict() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<AddressCommonEntity> resultDistrict = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("provinceId", provinceId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_GET_AGENT_DISTRICT;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultDistrict = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<AddressCommonEntity>>() {
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
		return new ResponseEntity<List<AddressCommonEntity>>(resultDistrict, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_GET_AGENT_COMMUNE }, method = RequestMethod.GET)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> getCommune(HttpServletRequest request,
			@RequestParam(name = "districtId") String districtId) {
		String nomeMetodo = ".getCommune() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<AddressCommonEntity> resultCommune = new ArrayList<>();
		try {
			HashMap<String, String> params = new HashMap<>();
			params.put("districtId", districtId);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_GET_AGENT_COMMUNE;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultCommune = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<AddressCommonEntity>>() {
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
		return new ResponseEntity<List<AddressCommonEntity>>(resultCommune, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_ADD_NEW_AGENT }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> actionAddNewAgent(HttpServletRequest request, @RequestBody AgentEntity agentNew) {
		String nomeMetodo = ".actionAddNewAgent() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		AgentEntity resultAgent = new AgentEntity();
		InputAgentAction inputAgentAction = new InputAgentAction();
		try {
			String ip = StringUtil
					.getIpClient((Object) SecurityContextHolder.getContext().getAuthentication().getDetails());
			inputAgentAction.setAgentEntity(agentNew);
			inputAgentAction.setIp(ip);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputAgentAction);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_ADD_NEW_AGENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultAgent = jsonMapper.readValue(tmp.toString(), new TypeReference<AgentEntity>() {
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
		return new ResponseEntity<AgentEntity>(resultAgent, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_UPDATE_AGENT }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> actionUpdateAgent(HttpServletRequest request,
			@RequestParam(name = "changeSapCode") boolean changeSapCode,
			@RequestParam(name = "changeStatus") boolean changeStatus, @RequestBody List<AgentEntity> lstAgent) {
		String nomeMetodo = ".actionUpdateAgent() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		AgentEntity resultAgent = new AgentEntity();
		try {
			String ip = StringUtil
					.getIpClient((Object) SecurityContextHolder.getContext().getAuthentication().getDetails());
			InputUpdateAgent inputUpdateAgent = new InputUpdateAgent();
			inputUpdateAgent.setChangeSapCode(changeSapCode);
			inputUpdateAgent.setChangeStatus(changeStatus);
			inputUpdateAgent.setLstAgent(lstAgent);
			inputUpdateAgent.setIpClient(ip);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputUpdateAgent);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_UPDATE_AGENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultAgent = jsonMapper.readValue(tmp.toString(), new TypeReference<AgentEntity>() {
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
		return new ResponseEntity<AgentEntity>(resultAgent, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.PRETUPS_DELETE_AGENT }, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE.POSTPAID_MANAGER + "')")
	public ResponseEntity<?> actionDeleteAgent(HttpServletRequest request, @RequestBody AgentEntity agentNew) {
		String nomeMetodo = ".actionDeleteAgent() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		AgentEntity resultAgent = new AgentEntity();
		InputAgentAction inputAgentAction = new InputAgentAction();
		try {
			String ip = StringUtil
					.getIpClient((Object) SecurityContextHolder.getContext().getAuthentication().getDetails());
			inputAgentAction.setAgentEntity(agentNew);
			inputAgentAction.setIp(ip);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputAgentAction);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_DELETE_AGENT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					resultAgent = jsonMapper.readValue(tmp.toString(), new TypeReference<AgentEntity>() {
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
		return new ResponseEntity<AgentEntity>(resultAgent, HttpStatus.OK);
	}
}
