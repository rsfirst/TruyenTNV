package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.ftu.vnm.wrapper.entity.PrepaidEntityFields;
import vn.com.fis.model.css.AgencyObject;
import vn.com.fis.model.css.InputAgentAction;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.StatusCommissionModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.utils.epos.StringUtil;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * The Class PerPaidBusiness.
 */
@Service
@Transactional
public class PretupBusiness implements PrepaidEntityFields {

	/**
	 * The Constant LOG.
	 */
	private static final Logger LOG = LoggerFactory.getLogger(PretupBusiness.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public ResponseEntity<?> uploadAgentByBatch(HttpServletRequest request, List<AgencyObject> lstAgencyObject) {
		String nomeMetodo = ".uploadAgentByBatch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse mess = new MessagesResponse();
		try {
			InputAgentAction inputAgentAction = new InputAgentAction();
			inputAgentAction.setLstAgencyObject(lstAgencyObject);
			String ip = StringUtil
					.getIpClient((Object) SecurityContextHolder.getContext().getAuthentication().getDetails());
			inputAgentAction.setIp(ip);
			Gson gson = new Gson();
			String dataString = gson.toJson(inputAgentAction);
			String url = ev.getProperty("login.url") + Constants.ACTION_UPLOAD_AGENT_BY_BATCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
	}

	public ResponseEntity<?> getListStatusCommision(HttpServletRequest request, StatusCommissionModel requestSearchIn) {
		String nomeMetodo = ".getListStatusCommision() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		List<StatusCommissionModel> list = new ArrayList<>();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(requestSearchIn);
			String url = ev.getProperty("login.url") + Constants.ACTION_COMMISSION_STATUS_GET_LIST;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		} catch (Exception e) {
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
	}

}
