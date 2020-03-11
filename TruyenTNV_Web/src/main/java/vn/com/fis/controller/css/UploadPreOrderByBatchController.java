package vn.com.fis.controller.css;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.mnpcm.MnpPreRequest;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class UploadPreOrderByBatchController {

	private static final Logger LOG = LoggerFactory.getLogger(UploadPreOrderByBatchController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(value = { Constants.LIST_PREORDER_BY_TEAMPLATE }, method = RequestMethod.POST)
	public ResponseEntity<?> getListPreOrderFromTemplate(MultipartHttpServletRequest request) throws IOException {
		String nomeMetodo = ".getListPreOrderFromTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<MnpPreRequest> listPreOrderResult = new ArrayList<>();
		MessagesResponse mess = new MessagesResponse();
		try {
			String url = ev.getProperty("login.url") + Constants.LIST_PREORDER_BY_TEAMPLATE;
			String tmp = webService.apiServiceMethodGET(request, url, "", "");
			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					listPreOrderResult = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpPreRequest>>() {
					});
				} catch (Exception e) {
					try {
						mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
						});
						LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
						return new ResponseEntity<MessagesResponse>(mess, HttpStatus.EXPECTATION_FAILED);
					} catch (Exception ex) {
						throw ex;
					}
				}
			}
		} catch (Exception e) {
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
			mess.setCode("ERROR_get_List_PreOrder_From_Template");
			mess.setMessages(e.getMessage());
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<MnpPreRequest>>(listPreOrderResult, HttpStatus.OK);
	}

	@RequestMapping(value = { Constants.INSERT_LIST_PREORDER }, method = RequestMethod.PUT)
	public ResponseEntity<?> insertListPreOrder(HttpServletRequest request,
			@RequestBody List<MnpPreRequest> lstMnpPreRequest) {
		String nomeMetodo = ".insertListPreOrder() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse mess = new MessagesResponse();
		try {
			Gson gson = new Gson();
			String dataString = gson.toJson(lstMnpPreRequest);
			String url = ev.getProperty("login.url") + Constants.INSERT_LIST_PREORDER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				try {
					lstMnpPreRequest = jsonMapper.readValue(tmp.toString(), new TypeReference<List<MnpPreRequest>>() {
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
		return new ResponseEntity<List<MnpPreRequest>>(lstMnpPreRequest, HttpStatus.OK);
	}
}
