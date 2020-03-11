package vn.com.fis.business.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.model.epos.WarrantyModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

/**
 * The Class FormStockViewBusiness.
 */
@RestController
public class FormWarrantyNoBusiness
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(FormWarrantyNoBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	/** The web service. */
	@Autowired
	WebService webService;

	public List<WarrantyModel> getListWarrantyNoBusiness(HttpServletRequest request, WarrantyModel warrantyInput) throws Exception
	{
		String nomeMetodo = ".getListWarrantyNoBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<WarrantyModel> listWarrantyNo = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(warrantyInput);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_LIST_WARRANTY_NO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listWarrantyNo = jsonMapper.readValue(tmp.toString(), new TypeReference<List<WarrantyModel>>() {
				});
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listWarrantyNo;
	}

	public MessagesResponse createWarrantyNoBusiness(HttpServletRequest request, WarrantyModel warrantyInput) throws Exception
	{
		String nomeMetodo = ".createWarrantyNoBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(warrantyInput);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_CREATE_WARRANTY_NO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				messagesResponse = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return messagesResponse;
	}

	public List<TransactionSerialList> generateWarrantyNoBusiness(HttpServletRequest request, List<TransactionSerialList> lstTransSerial) throws Exception
	{
		String nomeMetodo = ".generateWarrantyNoBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> listWarrantyNo = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(lstTransSerial);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_GENERATE_WARRANTY_NO;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listWarrantyNo = jsonMapper.readValue(tmp.toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listWarrantyNo;
	}

	public List<String> getListWarrantyNoExits(HttpServletRequest request, @RequestBody List<TransactionSerialList> lstTransSerial) throws Exception
	{
		String nomeMetodo = ".getListWarrantyNoExits()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<String> listWarrantyNoExist = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(lstTransSerial);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_LIST_WARRANTY_EXITS;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				MessagesResponse messRes = new MessagesResponse();
				ObjectMapper jsonMapper = new ObjectMapper();
				messRes = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
				if(CommonConstant.STATUS_SUCCESS.equals(messRes.getStatus())) {
					listWarrantyNoExist = messRes.getListObject();
				}
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			throw e;
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listWarrantyNoExist;
	}

}
