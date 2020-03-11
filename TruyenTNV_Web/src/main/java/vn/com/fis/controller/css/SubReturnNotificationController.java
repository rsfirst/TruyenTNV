package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.NpgRequestLog;
import vn.com.fis.model.mnpcm.SubReturnDNONotificationModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class SubReturnNotificationController {

	private static final Logger LOG = LoggerFactory.getLogger(SubReturnNotificationController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = Constants.SUB_RETURN_DNO_CHECK_SUBSCRIBER, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.MNP_NOTIFICATION_REVERSAL_DNO + "')")
	@ResponseBody
	public ResponseEntity<?> checkNumberReversalDNO(HttpServletRequest request,
			@RequestBody SubReturnDNONotificationModel subReturnInput) {
		String nomeMetodo = ".checkNumberReversalDNO() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		JMessage jmsValidate = new JMessage();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(subReturnInput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUB_RETURN_DNO_CHECK_SUBSCRIBER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
				} catch (Exception e) {
					try {
						jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
				
			}

		} catch (Exception e) {

			jmsValidate.setCode(Constants.COMMON_ERROR);
			jmsValidate.setMessage(e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.SUB_RETURN_DNO_NOTIFICATION, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('" + vn.com.fis.utils.css.Constants.ITEM_CODE.MNP_NOTIFICATION_REVERSAL_DNO + "')")
	@ResponseBody
	public ResponseEntity<?> sendNotificationReversalDNO(HttpServletRequest request,
			@RequestBody SubReturnDNONotificationModel subReturnInput) {
		String nomeMetodo = ".sendNotificationReversalDNO() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		JMessage jmsValidate = new JMessage();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(subReturnInput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUB_RETURN_DNO_NOTIFICATION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
				} catch (Exception e) {
					try {
						jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
				/*
				 * if (Constants.NPR_REVERSAL_NOTIFICATION_OK != jmsValidate.getCode()) { return
				 * new ResponseEntity<JMessage>(jmsValidate, HttpStatus.EXPECTATION_FAILED); }
				 */
			}

		} catch (Exception e) {

			jmsValidate.setCode(Constants.COMMON_ERROR);
			jmsValidate.setMessage(e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.SUB_RETURN_LIST_SUBSCRIBER_TEMPLATE, method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> getListSubscriberReturnFromTemplate(MultipartHttpServletRequest request) {
		String nomeMetodo = ".getListSubscriberReturnFromTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		JMessage jmsValidate = new JMessage();
		List<NpgRequestLog> listNpgRequestLog = new ArrayList<>();
		try {
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SUB_RETURN_LIST_SUBSCRIBER_TEMPLATE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listNpgRequestLog = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NpgRequestLog>>() {
					});
				} catch (Exception e) {
					try {
						jmsValidate = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
					} catch (Exception ex) {
						throw ex;
					}
				}
				if (Constants.LIST_MSISDN_RETURN_DNO_KO != jmsValidate.getCode()) {
					return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.EXPECTATION_FAILED);
				}
			}
		} catch (Exception e) {

			jmsValidate.setCode(Constants.COMMON_ERROR);
			jmsValidate.setMessage(e.getMessage());
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			jmsValidate.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<JMessage>(jmsValidate, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<NpgRequestLog>>(listNpgRequestLog, HttpStatus.OK);
	}
}
