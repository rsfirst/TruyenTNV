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
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.StockTransObject;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormStockExportForCustomerController
{

	private static final Logger LOG = LoggerFactory.getLogger(FormStockExportForCustomerController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;
	
	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;

	@RequestMapping(Constants.REQUEST_MAPPING.FormStockExportForCustomer_link)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORMSTOCKEXPORTFORCUSTOMER_LINK + "')")
	public String FormStockExportForCustomer()
	{
		 return Constants.REQUEST_MAPPING.FormStockExportForCustomer_views;
	}
	@RequestMapping(value = Constants.REQUEST_MAPPING.FormStockExportForCustomer_Save, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
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
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.FormStockExportForCustomer_Save;
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
	// Lay danh sach hang hoa
		@RequestMapping(value = Constants.REQUEST_MAPPING.GET_FormStockExportForCustomer_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<?> getExistedGoods(HttpServletRequest request, @RequestBody KeyValueObj input)
		{
			String nomeMetodo = ".getExistedGoods() ";
			LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

			MessagesResponse re = new MessagesResponse();
			List<GoodsList> list = new ArrayList<GoodsList>();
			List<GoodsList> listTemp = new ArrayList<GoodsList>();
			try
			{
				String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_FormStockExportForCustomer_GOODS;
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
				}
				else
				{
					ObjectMapper jsonMapper = new ObjectMapper();
					listTemp = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodsList>>() {
					});

				}

				// neu form cap moi phieu bao hanh
				if ("NewWarrantyNo".equalsIgnoreCase(input.getFormName()))
				{
					listTemp = stockViewInfoBusiness.getExistedGoodsByFormName(listTemp, input);
				}
				list = stockViewInfoBusiness.getExistedGoodsByResourceCode(listTemp, input);
			}
			catch (Exception e)
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
			return new ResponseEntity<List<GoodsList>>(listTemp, HttpStatus.OK);
		}
}
