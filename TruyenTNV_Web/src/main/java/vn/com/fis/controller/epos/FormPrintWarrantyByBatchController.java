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
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.TemplateValueWarrantyObj;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormPrintWarrantyByBatchController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormPrintWarrantyByBatchController.class);
	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_PRINT_WARRANTY_BY_BATCH)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_PRINT_WARRANTY_BY_BATCH + "')")
	public String formPrintWarrantyByBatch()
	{
		return Constants.REQUEST_MAPPING.FORM_PRINT_WARRANTY_BY_BATCH_LINK;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SERIAL_WARRANTY_BY_BATCH, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getWarrantySerial(HttpServletRequest request, @RequestBody TransactionSerialList input) throws Exception
	{
		String nomeMetodo = ".getWarrantySerial() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<TransactionSerialList> lst = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SERIAL_WARRANTY_BY_BATCH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(lst, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.UPDATE_WARRANTY_NUMBER, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updatePrintNumber(HttpServletRequest request, @RequestBody List<TemplateValueWarrantyObj> input)
	{
		String nomeMetodo = ".getWarrantySerial() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();

		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.UPDATE_WARRANTY_NUMBER;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SERIAL_WARRANTY_FILE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSerialListWarrantyFile(HttpServletRequest request, @RequestBody GoodTransactionsModel input) throws Exception
	{
		String nomeMetodo = ".getSerialListWarrantyFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		MessagesResponse message = new MessagesResponse();
		List<TransactionSerialList> lst = new ArrayList<TransactionSerialList>();
		List<String> lstSerial = new ArrayList<>();
		Gson gson = new Gson();
		String mess = "";
		List<TransactionSerialList> lstTransactionSerial = new ArrayList<TransactionSerialList>();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_SERIAL_WARRANTY_FILE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
				});
			}
			if (message.getStatus().equals(CommonConstant.STATUS_DEFAULT))
			{
				throw new Exception(message.getMessages());
			} else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				lst = jsonMapper.readValue(message.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
				for (TransactionSerialList s : lst)
				{
					lstSerial.add(s.getFromSerial());
				}
				lstTransactionSerial = input.getLstTransSerial();
				if (lst.size() == 0)
				{
					for (int i = 0; i < lstTransactionSerial.size(); i++)
					{
						mess += "Serial '" + lstTransactionSerial.get(i).getFromSerial() + "' do not exist or not enought condition\n";
					}
				} else
				{
					for (int i = 0; i < lstTransactionSerial.size(); i++)
					{
						if (!lstSerial.contains(lstTransactionSerial.get(i).getFromSerial()))
						{
							mess += "Serial '" + lstTransactionSerial.get(i).getFromSerial() + "' do not exist or not enought condition\n";
						}
					}
				}
				if (mess != null && !"".equals(mess))
				{
					throw new Exception(mess);
				}
			}
		} catch (Exception ex)
		{
			LOG.error(ex.getMessage(), ex);
			message.setMessages(ex.getMessage());
			if (ex.getMessage() == null)
			{
				message.setMessages("java.lang.NullPointerException");
			}
			message.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(message, HttpStatus.OK);
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(lst, HttpStatus.OK);
	}
}
