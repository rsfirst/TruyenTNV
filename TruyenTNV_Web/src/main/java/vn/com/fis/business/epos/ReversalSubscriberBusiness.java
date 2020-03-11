package vn.com.fis.business.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.model.mnpcm.NprRerverSalOutput;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Service
@Transactional
public class ReversalSubscriberBusiness {
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	private static final Logger LOG = LoggerFactory.getLogger(ReversalSubscriberBusiness.class);

	public ResponseEntity<?> getListNPRReveralAfterViolation(HttpServletRequest request,
			SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".getListNPRReveralAfterViolation() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

		int fase = 0;
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		JMessage jMsg = new JMessage();
		List<NPR> listNPRReceiveAfterViolation = new ArrayList<NPR>();

		try {
			Gson gson = new GsonBuilder()
                    .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
			String dataString = gson.toJson(searchDataInput);
			String url = ev.getProperty("login.url") + Constants.REVERSAL_SUBSCRIBER_AFTER_VIOLATION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();

				try {
					listNPRReceiveAfterViolation = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
					});

				} catch (Exception e) {
					jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
					if (Constants.EMTPY_VALUE_ERROR_CODE.equals(jMsg.getCode())) {
						return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
					} else {
						return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
					}
				}
				
			} else {
				jMsg.setCode(Constants.COMMON_ERROR);
				jMsg.setMessage(tmp);
				LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
				return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
			}

		} catch (Exception ex) {
			jMsg.setCode(Constants.EMPTY_VALUE_MESSAGE_CODE);
			jMsg.setMessage(Constants.EMPTY_VALUE_MESSAGE);
			LOG.warn(LOG.getName() + nomeMetodo + "fase: " + fase + " " + Constants.EMPTY_VALUE_MESSAGE_CODE + " "
					+ Constants.EMPTY_VALUE_MESSAGE);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
		}
		return new ResponseEntity<List<NPR>>(listNPRReceiveAfterViolation, response, HttpStatus.OK);
	}

	public ResponseEntity<?> getListSubscriberReceiveReversalAfterViolation(HttpServletRequest request,
			SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".getListSubscriberReceiveReversalAfterViolation() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

		int fase = 0;
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		JMessage jMsg = new JMessage();
		List<NprRerverSalOutput> listSubscribers = new ArrayList<NprRerverSalOutput>();

		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchDataInput);
			String url = ev.getProperty("login.url") + Constants.REVERSAL_LIST_SUBSCRIBER_VIOLATION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();

				try {
					listSubscribers = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<NprRerverSalOutput>>() {
							});
					return new ResponseEntity<List<NprRerverSalOutput>>(listSubscribers, response, HttpStatus.OK);

				} catch (Exception e) {
					jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
					if (Constants.EMTPY_VALUE_ERROR_CODE.equals(jMsg.getCode())) {
						return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
					} else {
						return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
					}
				}
			} else {
				jMsg.setCode(Constants.COMMON_ERROR);
				jMsg.setMessage(tmp);
				LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
				return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
			}

		} catch (Exception ex) {
			jMsg.setCode(Constants.EMPTY_VALUE_MESSAGE_CODE);
			jMsg.setMessage(Constants.EMPTY_VALUE_MESSAGE);
			LOG.warn(LOG.getName() + nomeMetodo + "fase: " + fase + " " + Constants.EMPTY_VALUE_MESSAGE_CODE + " "
					+ Constants.EMPTY_VALUE_MESSAGE);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
		}
	}

	public ResponseEntity<?> reversalRequestAfterViolation(HttpServletRequest request,
			SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".reversalRequestAfterViolation() ";
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
			String url = ev.getProperty("login.url") + Constants.REVERSAL_REQUEST_AFTER_VIOLATION;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
				});
			}
		} catch (Exception ex) {
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(ex.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + ex.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, ex);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}

		LOG.warn(LOG.getName() + nomeMetodo + "fase: " + fase + " " + Constants.EMPTY_VALUE_MESSAGE_CODE + " "
				+ Constants.EMPTY_VALUE_MESSAGE);
		return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);

	}
	// END AFTER VIOLATION

	public ResponseEntity<?> getListNPRReversal(HttpServletRequest request, SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".getListNPRReversal() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);
		LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		int fase = 0;
		JMessage jMsg = new JMessage();
		List<NPR> lstNPR = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(searchDataInput);
			String url = ev.getProperty("login.url") + Constants.REVERSAL_SUBSCRIBER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstNPR = jsonMapper.readValue(tmp.toString(), new TypeReference<List<NPR>>() {
					});
				} catch (Exception e) {
					jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
					LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
					return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);
				}
			}
		} catch (Exception ex) {
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(ex.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + ex.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, ex);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return new ResponseEntity<List<NPR>>(lstNPR, response, HttpStatus.OK);
	}

	public ResponseEntity<?> getListSubscriberReversal(HttpServletRequest request,
			SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".getListSubscriberReversal() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

		LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + searchDataInput.toString());

		int fase = 0;
		HttpHeaders response = new HttpHeaders();
		response.set("Access-Control-Allow-Origin", "*");
		JMessage jMsg = new JMessage();
		List<NprRerverSalOutput> listSubscribers = new ArrayList<NprRerverSalOutput>();
		try {

			Gson gson = new Gson();
			String dataString = gson.toJson(searchDataInput);
			String url = ev.getProperty("login.url") + Constants.REVERSAL_LIST_SUBSCRIBER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();

				try {
					listSubscribers = jsonMapper.readValue(tmp.toString(),
							new TypeReference<List<NprRerverSalOutput>>() {
							});
					return new ResponseEntity<List<NprRerverSalOutput>>(listSubscribers, response, HttpStatus.OK);

				} catch (Exception e) {
					jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
					});
					return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);

				}
			} else {
				jMsg.setCode(Constants.COMMON_ERROR);
				jMsg.setMessage(tmp);
				LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
				return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
			}

		} catch (Exception ex) {
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(ex.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + ex.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, ex);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}

	}

	public ResponseEntity<?> sendReversalRequest(HttpServletRequest request, SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".sendReversalRequest() ";
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
			String url = ev.getProperty("login.url") + Constants.REVERSAL_REQUEST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();

				jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
				});
				if (!Constants.SEND_REVERSAL_REQUEST_OK.equals(jMsg.getCode())) {
					return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
				}
			}
		}

		catch (Exception ex) {
			jMsg.setCode(Constants.COMMON_ERROR);
			jMsg.setMessage(ex.getMessage());
			LOG.error(LOG.getName() + nomeMetodo + "fase: " + fase + " " + " " + ex.getMessage() + " "
					+ Constants.COMMON_ERROR + " " + Constants.COMMON_ERROR_MESSAGE, ex);
			LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
			return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.EXPECTATION_FAILED);
		}
		return new ResponseEntity<JMessage>(jMsg, response, HttpStatus.OK);

	}

}
