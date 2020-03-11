package vn.com.fis.controller.css;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import vn.com.fis.business.mnpcm.ReturnOriginalNetworkBusiness;
import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.utils.mnpcm.Constants;

@Controller
public class ReturnOriginalNetworkController {

	private static final Logger LOG = LoggerFactory.getLogger(ReturnOriginalNetworkController.class);

	@Autowired
	ReturnOriginalNetworkBusiness returnOriginalNetworkBusiness;

	@RequestMapping(value = Constants.RETURN_REQUEST_LIST_SUBSCRIBER, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> getListSubscriberReturnRequest(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".getListSubscriberReturnRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = returnOriginalNetworkBusiness.getListSubscriberReturnRequest(request,
				searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.RETURN_REQUEST_CHECK_MSISDN_DESTROY, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> checkMSISDNDestroyed(HttpServletRequest request, @RequestParam("msisdn") String msisdn) {
		String nomeMetodo = ".checkMSISDNDestroyed() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = returnOriginalNetworkBusiness.checkMSISDNDestroyed(request, msisdn);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

	@RequestMapping(value = Constants.RETURN_REQUEST_SEND_RETURN_REQUEST, method = RequestMethod.POST)
	@PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
	@ResponseBody
	public ResponseEntity<?> sendReturnRequest(HttpServletRequest request,
			@RequestBody SearchDataInputModel searchDataInputModel) {
		String nomeMetodo = ".sendReturnRequest() ";
		LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
		ResponseEntity<?> response = returnOriginalNetworkBusiness.sendReturnRequest(request, searchDataInputModel);
		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
		return response;
	}

}
