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

import vn.com.fis.business.epos.OutputForStaffBusiness;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.ObjectForDoSomething;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.model.epos.TemplateValueObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class OutputForStaffController
{

	private static final Logger LOG = LoggerFactory.getLogger(OutputForStaffController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	OutputForStaffBusiness outputForStaffBusiness;

	@RequestMapping(Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_OUTPUT_FOR_STAFF + "')")
	public String outputForStaff()
	{
		return "epos/inventory/outputForStaff";
	}

	// Lay danh sach kho nhan vien
	@RequestMapping(value = Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_GET_LST_STOCK_STAFF, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getChildsStockStaff(HttpServletRequest request, @RequestBody String stockId)
	{
		String nomeMetodo = ".getChildsStockStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StocksList> list = new ArrayList<StocksList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_GET_LST_STOCK_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", stockId);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StocksList>>() {
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
		return new ResponseEntity<List<StocksList>>(list, HttpStatus.OK);
	}

	// Kiem tra thong tin du lieu
	@RequestMapping(value = Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_VALID_DATA, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> validData(HttpServletRequest request, @RequestBody ObjectForDoSomething input)
	{
		String nomeMetodo = ".validData() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		Gson gson = new Gson();
		try
		{
			outputForStaffBusiness.validData(request, input);
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
		return new ResponseEntity<String>(gson.toJson("ParamsOK"), HttpStatus.OK);
	}

	// Luu thong tin giao dich
	@RequestMapping(value = Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_ON_SAVE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> onSave(HttpServletRequest request, @RequestBody StockTransObject stockTrans)
	{
		String nomeMetodo = ".onSave() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String mstrStockTransID = "";
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(stockTrans);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_ON_SAVE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				mstrStockTransID = re.getCode();
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
		return new ResponseEntity<String>(gson.toJson(mstrStockTransID), HttpStatus.OK);
	}

	// Lay thong tin thuoc tinh de in
	@RequestMapping(value = Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_GET_TEMPLATE_VALUE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getTemplateValue(HttpServletRequest request, @RequestBody String stockTransId)
	{
		String nomeMetodo = ".getTemplateValue() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TemplateValueObject> list = new ArrayList<>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.OUTPUT_FOR_STAFF_GET_TEMPLATE_VALUE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", stockTransId);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				re = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}

			if (re.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(re.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TemplateValueObject>>() {
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
		return new ResponseEntity<List<TemplateValueObject>>(list, HttpStatus.OK);
	}

}
