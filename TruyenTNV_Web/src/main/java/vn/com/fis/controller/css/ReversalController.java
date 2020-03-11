package vn.com.fis.controller.css;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import vn.com.fis.business.epos.ReversalSubscriberBusiness;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class ReversalController {

	private static final Logger LOG = LoggerFactory.getLogger(ReversalController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	ReversalSubscriberBusiness reversalSubscriberBusiness;

	@RequestMapping(value = Constants.REVERSAL_SUBSCRIBER_AFTER_VIOLATION, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> getListReceiveReversalNPRAfterViolation(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".getListReceiveReversalNPRAfterViolation() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = reversalSubscriberBusiness.getListNPRReveralAfterViolation(request,
				searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.REVERSAL_LIST_SUBSCRIBER_VIOLATION, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> getListSubscriberReceiveReversalAfterViolation(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".getListSubscriberReceiveReversalAfterViolation() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = reversalSubscriberBusiness.getListSubscriberReceiveReversalAfterViolation(request,
				searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.REVERSAL_REQUEST_AFTER_VIOLATION, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> reversalRequestAfterViolation(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInput) {
		String nomeMetodo = ".reversalRequestAfterViolation() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = reversalSubscriberBusiness.reversalRequestAfterViolation(request, searchDataInput);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}
	// END REVERSAL REQUEST AFTER VIOLATION

	@RequestMapping(value = Constants.REVERSAL_SUBSCRIBER, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> getListNPRReversal(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".getListNPRReversal() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = reversalSubscriberBusiness.getListNPRReversal(request, searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.REVERSAL_LIST_SUBSCRIBER, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> getListSubscriberReversal(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".getListSubscriberReversal() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = reversalSubscriberBusiness.getListSubscriberReversal(request,
				searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.REVERSAL_REQUEST, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> sendReversalRequest(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".sendReversalRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = reversalSubscriberBusiness.sendReversalRequest(request, searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}
}
