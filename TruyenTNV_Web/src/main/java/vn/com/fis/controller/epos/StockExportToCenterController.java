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

import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.model.epos.TemplateValueObject;
import vn.com.fis.model.epos.TemplateValueWarrantyObj;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class StockExportToCenterController
{

	private static final Logger LOG = LoggerFactory.getLogger(StockExportToCenterController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_STOCK_EXPORT_TO_CENTER + "')")
	public String stockExportToCenter()
	{
		 return "epos/inventory/stockExportToCenter";
	}

	// Lay ma phieu
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_RECEIPT_CODE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getReceiptCode(HttpServletRequest request)
	{
		String nomeMetodo = ".getReceiptCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<String> list = new ArrayList<String>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_RECEIPT_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<String>>() {
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
		return new ResponseEntity<List<String>>(list, HttpStatus.OK);
	}

	// Lay danh sach kho nhan
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_ALL_RECEIVE_STOCK, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllReceiveStock(HttpServletRequest request)
	{
		String nomeMetodo = ".getAllReceiveStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StocksList> list = new ArrayList<StocksList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_ALL_RECEIVE_STOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

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

	// Luu thong tin giao dich
	@RequestMapping(value = Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER_ON_SAVE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
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
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER_ON_SAVE;
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

	// Kiem tra ma phieu co trung khong
	@RequestMapping(value = Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER_CHECK_RECEIPT_CODE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> validTransActionCode(HttpServletRequest request, @RequestBody String receiptCode)
	{
		String nomeMetodo = ".validTransActionCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		String actionCode = "";
		Gson gson = new Gson();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER_CHECK_RECEIPT_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", receiptCode);

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
				actionCode = re.getCode();
			}

			if (actionCode != null && !"".equals(actionCode))
			{
				throw new Exception("validDuplicate");
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
		return new ResponseEntity<String>(gson.toJson("ParamsOK"), HttpStatus.OK);
	}

	// Lay danh sach thuoc tinh de in
	@RequestMapping(value = Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER_GET_TEMPLATE_VALUE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getTemplateValue(HttpServletRequest request, @RequestBody KeyValueObj obj)
	{
		String nomeMetodo = ".getTemplateValue() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TemplateValueObject> lst = new ArrayList<>();
		Gson gson = new Gson();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.STOCK_EXPORT_TO_CENTER_GET_TEMPLATE_VALUE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", gson.toJson(obj));

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
				lst = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TemplateValueObject>>() {
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
		return new ResponseEntity<List<TemplateValueObject>>(lst, HttpStatus.OK);
	}
	
		// Lay danh sach thuoc tinh de in
		@RequestMapping(value = Constants.REQUEST_MAPPING.FORM_IMPORT_FROM_STAFF_GET_TEMPLATE_VALUE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<?> getReportImportFromStaff(HttpServletRequest request, @RequestBody KeyValueObj obj)
		{
			String nomeMetodo = ".getReportImportFromStaff() ";
			LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

			MessagesResponse re = new MessagesResponse();
			List<TemplateValueObject> lst = new ArrayList<>();
			Gson gson = new Gson();
			try
			{
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FORM_IMPORT_FROM_STAFF_GET_TEMPLATE_VALUE;
				String tmp = webService.apiServiceMethodPOST(request, url, "", gson.toJson(obj));

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
					lst = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TemplateValueObject>>() {
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
			return new ResponseEntity<List<TemplateValueObject>>(lst, HttpStatus.OK);
		}

		// Lay danh sach PBH de in
		@RequestMapping(value = Constants.REQUEST_MAPPING.PRINT_WARRANTY_GET_TEMPLATE_VALUE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<?> getReportPrintWarranty(HttpServletRequest request, @RequestBody KeyValueObj obj)
		{
			String nomeMetodo = ".getReportPrintWarranty() ";
			LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

			MessagesResponse re = new MessagesResponse();
			List<TemplateValueWarrantyObj> lst = new ArrayList<>();
			Gson gson = new Gson();
			try
			{
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.PRINT_WARRANTY_GET_TEMPLATE_VALUE;
				String tmp = webService.apiServiceMethodPOST(request, url, "", gson.toJson(obj));

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
					lst = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TemplateValueWarrantyObj>>() {
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
			return new ResponseEntity<List<TemplateValueWarrantyObj>>(lst, HttpStatus.OK);
		}
}
