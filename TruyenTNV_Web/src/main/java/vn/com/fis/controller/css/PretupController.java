package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import vn.com.fis.business.css.PretupBusiness;
import vn.com.fis.model.css.AgencyObject;
import vn.com.fis.model.css.StatusCommissionModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * The Class PerPaidController.
 */
@Controller
public class PretupController
{

	@Autowired
	PretupBusiness pretupBusiness;

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(PretupController.class);
	
	@RequestMapping(value = { Constants.ACTION_UPLOAD_AGENT_BY_BATCH }, method = RequestMethod.POST)
	public ResponseEntity<?> uploadAgentByBatch(HttpServletRequest request, @RequestBody List<AgencyObject> lstAgencyObject)
	{
		String nomeMetodo = ".uploadAgentByBatch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ResponseEntity<?> response = pretupBusiness.uploadAgentByBatch(request, lstAgencyObject);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}
	
	@RequestMapping(value = { Constants.ACTION_COMMISSION_STATUS_GET_LIST }, method = RequestMethod.POST)
	public ResponseEntity<?> getListStatusCommision(HttpServletRequest request, @RequestBody StatusCommissionModel searchInput)
	{
		String nomeMetodo = ".getListStatusCommision() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ResponseEntity<?> response = pretupBusiness.getListStatusCommision(request, searchInput);
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return response;
	}
	
	
}
