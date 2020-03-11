package vn.com.fis.business.mnpcm;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.mnpcm.ActionSubscriberRerverSalModel;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class ReturnOriginalNetworkBusiness {

	private static final Logger LOG = LoggerFactory.getLogger(ReturnOriginalNetworkBusiness.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public ResponseEntity<?> getListSubscriberReturnRequest(HttpServletRequest request,
			SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".getListSubscriberReturnRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

		LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());
		int fase = 0;
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		JMessage jMsg = new JMessage();
		List<ActionSubscriberRerverSalModel> listSubscribers = new ArrayList<ActionSubscriberRerverSalModel>();

		try {

			Gson gson = new Gson();
			String dataString = gson.toJson(searchDataInput);
			String url = ev.getProperty("login.url") + Constants.RETURN_REQUEST_LIST_SUBSCRIBER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listSubscribers = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ActionSubscriberRerverSalModel>>() {
						});
				} catch (Exception e) {
					jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
					if (Constants.EMPTY_VALUE_MESSAGE_CODE.equals(jMsg.getCode())) {
						return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
					} else {
						return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
					}
				}
			}

		} catch (Exception e2) {
			fase = 30;
			LOG.error(e2.getMessage(), e2);
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(e2.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return new ResponseEntity<List<ActionSubscriberRerverSalModel>>(listSubscribers, response, HttpStatus.OK);
	}

	public ResponseEntity<?> checkMSISDNDestroyed(HttpServletRequest request, String msisdn) {
		String nomeMetodo = ".checkMSISDNDestroyed() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

		LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : msisdn = " + msisdn);
		int fase = 0;
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		JMessage jMsg = new JMessage();

		try {

			HashMap<String, String> params = new HashMap<>();
			params.put("msisdn", msisdn);
			String url = ev.getProperty("login.url") + Constants.RETURN_REQUEST_CHECK_MSISDN_DESTROY;
			String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
				});
			}

		} catch (Exception e2) {
			fase = 30;
			LOG.error(e2.getMessage(), e2);
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(e2.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}

		return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
	}

	public ResponseEntity<?> sendReturnRequest(HttpServletRequest request, SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".sendReturnRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

		LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

		int fase = 0;
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		JMessage jMsg = new JMessage();
		try {

			Gson gson = new Gson();
			String dataString = gson.toJson(searchDataInput);
			String url = ev.getProperty("login.url") + Constants.RETURN_REQUEST_SEND_RETURN_REQUEST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
				});
				/*
				 * if(Constants.SEND_RETURN_REQUEST_OK!=jMsg.getCode()) { return new
				 * ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED); }
				 */
			}

		} catch (Exception e2) {
			fase = 80;
			LOG.error(e2.getMessage(), e2);
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(e2.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + e2.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, e2);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}
		return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);

	}

}
