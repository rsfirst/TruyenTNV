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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.business.epos.StockViewInfoBusiness;
import vn.com.fis.model.epos.ApDomainModel;
import vn.com.fis.model.epos.GoodQuantitiesList;
import vn.com.fis.model.epos.GoodsGroupsList;
import vn.com.fis.model.epos.GoodsList;
import vn.com.fis.model.epos.GoodsSearchObj;
import vn.com.fis.model.epos.KeyValueObj;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.SessionValue;
import vn.com.fis.model.epos.StatesList;
import vn.com.fis.model.epos.StocksList;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class StockViewInfoController
{

	private static final Logger LOG = LoggerFactory.getLogger(StockViewInfoController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;

	// Lay danh sach nguon hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_VCT_RESOURCE_LIST, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getVctResourceList(HttpServletRequest request, @RequestBody SessionValue input)
	{
		String nomeMetodo = ".getVctResourceList() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<ApDomainModel> list = new ArrayList<ApDomainModel>();
		List<ApDomainModel> listTemp = new ArrayList<ApDomainModel>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_VCT_RESOURCE_LIST;
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
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listTemp = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<ApDomainModel>>() {
				});
			}

			list = stockViewInfoBusiness.getVctResourceList(listTemp, input);
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
		return new ResponseEntity<List<ApDomainModel>>(list, HttpStatus.OK);
	}

	// Lay danh sach loai hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_INTERNAL_STOCK, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getInternalStock(HttpServletRequest request)
	{
		String nomeMetodo = ".getInternalStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<KeyValueObj> list = new ArrayList<KeyValueObj>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_INTERNAL_STOCK;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<KeyValueObj>>() {
				});
			}
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
		return new ResponseEntity<List<KeyValueObj>>(list, HttpStatus.OK);
	}

	// Lay danh sach trang thai
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_EXISTED_STATES, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getExistedStates(HttpServletRequest request)
	{
		String nomeMetodo = ".getExistedStates() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StatesList> list = new ArrayList<StatesList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_EXISTED_STATES;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StatesList>>() {
				});
			}
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
		return new ResponseEntity<List<StatesList>>(list, HttpStatus.OK);
	}

	// Lay danh sach nhom hang
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_EXISTED_GOODS_GROUPS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getExistedGoodsGroups(HttpServletRequest request)
	{
		String nomeMetodo = ".getExistedGoodsGroups() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<GoodsGroupsList> list = new ArrayList<GoodsGroupsList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_EXISTED_GOODS_GROUPS;
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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodsGroupsList>>() {
				});

			}
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
		return new ResponseEntity<List<GoodsGroupsList>>(list, HttpStatus.OK);
	}

	// Lay danh sach hang hoa
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_EXISTED_GOODS, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getExistedGoods(HttpServletRequest request, @RequestBody KeyValueObj input)
	{
		String nomeMetodo = ".getExistedGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<GoodsList> list = new ArrayList<GoodsList>();
		List<GoodsList> listTemp = new ArrayList<GoodsList>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_EXISTED_GOODS;
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
		return new ResponseEntity<List<GoodsList>>(list, HttpStatus.OK);
	}

	// Lay danh sach kho
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCKS_TREE, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStocksTree(HttpServletRequest request, @RequestBody KeyValueObj input)
	{
		String nomeMetodo = ".getStocksTree() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<StocksList> list = new ArrayList<StocksList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STOCKS_TREE;
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
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<StocksList>>() {
				});
			}
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
		return new ResponseEntity<List<StocksList>>(list, HttpStatus.OK);
	}

	// Lay danh sach hang hoa
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_GOODS_LIST_BY_CONDITION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getGoodsListByCondition(HttpServletRequest request, @RequestBody GoodsSearchObj input)
	{
		String nomeMetodo = ".getGoodsListByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<GoodsList> list = new ArrayList<GoodsList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String condition = stockViewInfoBusiness.getFunctionGetGoodsList(input);
			String url = ev.getProperty("login.url") + condition;
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
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodsList>>() {
				});
			}
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
		return new ResponseEntity<List<GoodsList>>(list, HttpStatus.OK);
	}

	// Lay danh sach so luong hang hoa
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_GOODS_QUANTITY_BY_CONDITION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getGoodsQuantityByCondition(HttpServletRequest request, @RequestBody GoodsSearchObj input)
	{
		String nomeMetodo = ".getGoodsQuantityByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<GoodQuantitiesList> list = new ArrayList<GoodQuantitiesList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String condition = stockViewInfoBusiness.getFunctionGetGoodsQuantity(input);
			String url = ev.getProperty("login.url") + condition;
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
			}
			else
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<GoodQuantitiesList>>() {
				});
			}
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
		return new ResponseEntity<List<GoodQuantitiesList>>(list, HttpStatus.OK);
	}

	// Lay danh sach serial
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_BY_CONDITION, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockSerialByCondition(HttpServletRequest request, @RequestBody TransactionSerialList input)
	{
		String nomeMetodo = ".getStockSerialByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String condition = stockViewInfoBusiness.getStockSerialByCondition(input);
			String tmp = "";
			if (!"".equals(condition))
			{
				String url = ev.getProperty("login.url") + condition;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			}

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}
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
		return new ResponseEntity<List<TransactionSerialList>>(list, HttpStatus.OK);
	}

	// Lay serial trong kho
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_SINGEL_SERIAL_IN_STOCK, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSingleSerialInStock(HttpServletRequest request, @RequestBody TransactionSerialList input)
	{
		String nomeMetodo = ".getStockSerialByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> lstTransSerial = new ArrayList<>();
		TransactionSerialList list = null;
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String condition = stockViewInfoBusiness.getSingleSerialInStock(input);
			String tmp = "";
			if (!"".equals(condition))
			{
				String url = ev.getProperty("login.url") + condition;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			}

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
				lstTransSerial = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
				list = lstTransSerial.get(0);
			}
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
		return new ResponseEntity<TransactionSerialList>(list, HttpStatus.OK);
	}

	// Lay danh sach serial by form
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_BY_FORM, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockSerialByForm(HttpServletRequest request, @RequestBody TransactionSerialList input)
	{
		String nomeMetodo = ".getStockSerialByForm() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String dataString = gson.toJson(input);
			String condition = stockViewInfoBusiness.getStockSerialByForm(input);
			String tmp = "";
			if (!"".equals(condition))
			{
				String url = ev.getProperty("login.url") + condition;
				tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
			}

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
				list = jsonMapper.readValue(re.getListResult().toString(), new TypeReference<List<TransactionSerialList>>() {
				});
			}
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
		return new ResponseEntity<List<TransactionSerialList>>(list, HttpStatus.OK);
	}
}
