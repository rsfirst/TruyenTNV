package vn.com.fis.controller.css;

import javax.servlet.http.HttpServletRequest;

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
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.ResponseModel;
import vn.com.fis.pretup.model.UserAddRequest;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Controller
@RequestMapping(Constants.PRETUPS_SEARCH_ACCOUNT)
public class SearchAccountInfoController {

	private static final Logger LOG = LoggerFactory.getLogger(SearchAccountInfoController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody ResponseEntity<?> search(HttpServletRequest request,@RequestBody UserAddRequest userInnput) {
		String nomeMetodo = ".onSearch() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		ResponseModel responseModel = new ResponseModel();
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(userInnput);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRETUPS_SEARCH_ACCOUNT;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					responseModel = jsonMapper.readValue(tmp.toString(), new TypeReference<ResponseModel>() {
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
		return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.OK);
	}
	

}
