package vn.com.fis.controller.epos;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.epos.StockViewInfoBusiness;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ReasonObject;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormExportToSuperiorController {
	private static final Logger LOG = LoggerFactory.getLogger(FormExportToSuperiorController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;
	/**
	 * LinkForm() in Controller
	 * 
	 * @param
	 * @return
	 * @throws @Author:
	 *             FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_EXPORT_TO_SUPERIOR, produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_EXPORT_TO_SUPERIOR + "')")
	public String formExportToSuperior() {
		return "epos/inventory/formExportToSuperior";
	}

	/**
	 * getListReason() in Controller
	 * 
	 * @param request
	 * @return ResponseEntity<List<ReasonObject>>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_EXPORT_TO_SUPERIOR_LINK_GET_LIST_REASON, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getListReason(HttpServletRequest request) throws Exception {
		String nomeMetodo = ".getListReason() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<ReasonObject> lstReasonReturn = new ArrayList<ReasonObject>();
		try {
			String url = ev.getProperty("login.url")
					+ Constants.REQUEST_MAPPING.FORM_EXPORT_TO_SUPERIOR_LINK_GET_LIST_REASON;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp)) {
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT)) {
				throw new Exception(message.getMessages());
			} else {
				ObjectMapper jsonMapper = new ObjectMapper();
				lstReasonReturn = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<	List<ReasonObject>>() {
				});
			}
		} catch (Exception ex) {
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null) {
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<	List<ReasonObject>>(lstReasonReturn, HttpStatus.OK);
	}
	/**
	 * onSave() in Controller
	 * 
	 * @param request,stockTrans
	 * @return ResponseEntity<MessagesResponse>
	 * @throws Exception
	 * @Author: FPT_VNM
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_EXPORT_TO_SUPERIOR_ON_SAVE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSave(HttpServletRequest request,@RequestBody StockTransObject pStockTrans)
	{
		String nomeMetodo = "FormStockImportFromPartnerController.onSave() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse message = new MessagesResponse();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(pStockTrans);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_EXPORT_TO_SUPERIOR_ON_SAVE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
		} catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
	}
}
