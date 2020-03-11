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

import vn.com.fis.business.epos.StockExportToPartnerBusiness;
import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.utils.epos.StringUtil;
import vn.com.fis.ws.WebService;

@Controller
public class ExportStocksToPartnerController
{

	private static final Logger LOG = LoggerFactory.getLogger(ExportStocksToPartnerController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	private StockExportToPartnerBusiness stockExportToPartnerBusiness;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_EXPORT_STOCKS_TO_PARTNER)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_EXPORT_STOCKS_TO_PARTNER + "')")
	public String ExportStocksToPartnerForm()
	{
		return Constants.REQUEST_MAPPING.FORM_EXPORT_STOCKS_TO_PARTNER_LINK;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.CHECK_LIST_SERIAL, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockSerialByCondition(HttpServletRequest request, @RequestBody GoodTransactionsModel input)
	{
		String nomeMetodo = ".getStockSerialByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		List<String> lstSerial = new ArrayList<>();
		Gson gson = new Gson();
		String strCheckWarranty = StringUtil.nvl(input.getCheckWarranty(), "");
		boolean blCheckWarranty = false;
		String message = "";
		MessagesResponse mess = new MessagesResponse();
		try
		{
			String condition = stockExportToPartnerBusiness.getSerialListInStock(input);
			String dataString = gson.toJson(input);
			String tmp = "";
			if (!"".equals(condition))
			{
				String url = ev.getProperty("login.url") + condition;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			}

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<TransactionSerialList>>() {
				});

				for (TransactionSerialList s : list)
				{
					lstSerial.add(s.getFromSerial());
				}

				if (!"".equals(strCheckWarranty))
				{
					blCheckWarranty = true;
				}
				for (int i = 0; i < input.getLstTransSerial().size(); i++)
				{
					if (!lstSerial.contains(input.getLstTransSerial().get(i).getFromSerial()))
					{
						message += "Serial number " + input.getLstTransSerial().get(i).getFromSerial().trim() + " do not exits.\n";
					}
					else if (blCheckWarranty && "".equals(list.get(lstSerial.indexOf(input.getLstTransSerial().get(i).getFromSerial())).getWarrantyNo()))
					{
						message += "Serial number " + input.getLstTransSerial().get(i).getFromSerial().trim() + " do not have warranty number.\n";
					}
				}
				if (message != null && !"".equals(message))
				{
					throw new Exception(message);
				}
			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<String>(gson.toJson(message), HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.CHECK_LIST_SERIAL_WARRANTY, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSerialListWarrantyFile(HttpServletRequest request, @RequestBody GoodTransactionsModel input)
	{
		String nomeMetodo = ".getSerialListWarrantyFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		List<TransactionSerialList> listResult = new ArrayList<TransactionSerialList>();

		List<String> lstSerial = new ArrayList<>();
		Gson gson = new Gson();
		String strCheckWarranty = StringUtil.nvl(input.getCheckWarranty(), "");
		boolean blCheckWarranty = false;
		String message = "";
		MessagesResponse mess = new MessagesResponse();
		try
		{
			String condition = Constants.REQUEST_MAPPING.CHECK_LIST_SERIAL_WARRANTY;
			String dataString = gson.toJson(input);
			String tmp = "";
			if (!"".equals(condition))
			{
				String url = ev.getProperty("login.url") + condition;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			}

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();

				if (!"".equals(tmp))
				{
					mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
					});
				}

				if (mess.getStatus().equals(CommonConstant.STATUS_DEFAULT))
				{
					throw new Exception(mess.getMessages());
				}
				else
				{
					list = jsonMapper.readValue(mess.getListResult(), new TypeReference<List<TransactionSerialList>>() {
					});
				}

				for (TransactionSerialList s : list)
				{
					lstSerial.add(s.getFromSerial());
				}

				if (!"".equals(strCheckWarranty))
				{
					blCheckWarranty = true;
				}
				for (int i = 0; i < input.getLstTransSerial().size(); i++)
				{
					if (!lstSerial.contains(input.getLstTransSerial().get(i).getFromSerial()))
					{
						message += "Serial number " + input.getLstTransSerial().get(i).getFromSerial().trim() + " do not exits.\n";
					}
					else if (blCheckWarranty && "".equals(list.get(lstSerial.indexOf(input.getLstTransSerial().get(i).getFromSerial())).getWarrantyNo()))
					{
						message += "Serial number " + input.getLstTransSerial().get(i).getFromSerial().trim() + " do not have warranty number.\n";
					}

					String serialFromCheck = StringUtil.nvl(input.getLstTransSerial().get(i).getFromSerial(), "");
					// lay danh sach serial tu db tra ve form
					for (TransactionSerialList s : list)
					{
						if (serialFromCheck.equalsIgnoreCase(s.getFromSerial()))
						{
							listResult.add(s);
							break;
						}
					}
				}
				if (message != null && !"".equals(message))
				{
					throw new Exception(message);
				}
				else
				{
					mess.setMessages("");
					mess.setStatus(CommonConstant.STATUS_SUCCESS);
					mess.setListObject(listResult);
				}

			}
		}
		catch (Exception e)
		{
			LOG.error(e.getMessage(), e);
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
	}
}
