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

import vn.com.fis.model.ProductOrder.GoodCountDetail;
import vn.com.fis.model.ProductOrder.GoodInfoNew;
import vn.com.fis.model.ProductOrder.GoodsInStockSearchModel;
import vn.com.fis.model.ProductOrder.InternalStockObject;
import vn.com.fis.model.ProductOrder.StateObject;
import vn.com.fis.model.epos.AppDomainModel;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.StockObject;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.CommonUtil;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

/**
 * The Class FormStockViewBusiness.
 */
@RestController
public class FormStockViewBusiness
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(FormStockViewBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	/** The web service. */
	@Autowired
	WebService webService;

	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;

	/**
	 * Gets the stock tree service business.
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the stock tree service business
	 * @throws Exception
	 *             the exception
	 */
	public List<StockObject> getStockTreeServiceBusiness(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getStockTreeServiceBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockObject> lstStock = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_STOCK_VIEW_LIST_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstStock = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StockObject>>() {
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
		return lstStock;
	}

	/**
	 * Danh sach combobox nguon hang
	 *
	 * @param request
	 *            the request
	 * @return the list resource code business
	 * @throws Exception
	 *             the exception
	 */
	public List<AppDomainModel> getListResourceCodeBusiness(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getListResourceCodeBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<AppDomainModel> listResoucre = new ArrayList<>();
		try
		{
			String dataString = "";
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_RESOUCE_CODE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listResoucre = jsonMapper.readValue(tmp.toString(), new TypeReference<List<AppDomainModel>>() {
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
		return listResoucre;
	}

	public List<StateObject> getListStateBusiness(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getListStateBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StateObject> listResoucre = new ArrayList<>();
		try
		{
			String dataString = "";
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_STATE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listResoucre = jsonMapper.readValue(tmp.toString(), new TypeReference<List<StateObject>>() {
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
		return listResoucre;
	}

	/**
	 * Danh sach combobox loai hang hoa
	 *
	 * @param request
	 *            the request
	 * @return the list internal stock business
	 * @throws Exception
	 *             the exception
	 */
	public List<InternalStockObject> getListInternalStockBusiness(HttpServletRequest request) throws Exception
	{
		String nomeMetodo = ".getListResourceCodeBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InternalStockObject> listResoucre = new ArrayList<>();
		try
		{
			String dataString = "";
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_INTERNAL_STOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				listResoucre = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InternalStockObject>>() {
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
		return listResoucre;
	}

	/**
	 * Tim kiem theo kho cua hang.
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the list
	 * @throws Exception
	 *             the exception
	 */
	public List<GoodInfoNew> searchGoodsInStockBusiness(HttpServletRequest request, GoodsInStockSearchModel input) throws Exception
	{
		String nomeMetodo = ".searchGoodsInStockBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodInfoNew> lstStock = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARCH_GOOD_INSTOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstStock = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return lstStock;
	}

	/**
	 * Business tim kiem theo kho cua hang va nhan vien.
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the list
	 * @throws Exception
	 *             the exception
	 */
	public List<GoodInfoNew> searchGoodsInStockAndStaffBusiness(HttpServletRequest request, GoodsInStockSearchModel input) throws Exception
	{
		String nomeMetodo = ".searchGoodsInStockAndStaffBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodInfoNew> lstStock = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_SEARCH_GOOD_IN_STOCK_AND_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstStock = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return lstStock;
	}

	/**
	 * Search count detail good in stock business.
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the list
	 * @throws Exception
	 *             the exception
	 */
	public List<GoodCountDetail> searchCountDetailGoodInStockBusiness(HttpServletRequest request, GoodsInStockSearchModel input) throws Exception
	{
		String nomeMetodo = ".searchCountDetailGoodInStockBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodCountDetail> lstGoodCountDetail = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstGoodCountDetail = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodCountDetail>>() {
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
		return lstGoodCountDetail;
	}

	public List<GoodCountDetail> searchCountDetailGoodInStockAndStaffBusiness(HttpServletRequest request, GoodsInStockSearchModel input) throws Exception
	{
		String nomeMetodo = ".searchCountDetailGoodInStockAndStaffBusiness()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodCountDetail> lstGoodCountDetail = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstGoodCountDetail = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodCountDetail>>() {
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
		return lstGoodCountDetail;
	}

	public List<GoodInfoNew> getListAttachGoods(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getListAttachGoods()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodInfoNew> lstGoodCountDetail = new ArrayList<>();
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.ACTION_GET_LIST_GOOD_ATTACH;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				lstGoodCountDetail = jsonMapper.readValue(tmp.toString(), new TypeReference<List<GoodInfoNew>>() {
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
		return lstGoodCountDetail;
	}

	// danh sach serial xem thong tin kho
	public List<TransactionSerialList> getStockSerialByConditionFormStock(HttpServletRequest request, @RequestBody TransactionSerialList input) throws Exception
	{
		String nomeMetodo = ".getStockSerialByCondition() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse re = new MessagesResponse();
		List<TransactionSerialList> list = new ArrayList<TransactionSerialList>();
		Gson gson = new Gson();
		try
		{
			String condition = stockViewInfoBusiness.getStockSerialByCondition(input);

			// neu co nhan vien thi tim kiem theo nhan vien
			String staffId = input.getStaffId();
			if (!CommonUtil.isEmpty(staffId))
			{
				CommonValuesInput commonInput = new CommonValuesInput();
				commonInput.setShopId(input.getShopId());
				commonInput.setStaffId(staffId);
				String stockId = getStockByStaffId(request, commonInput);
				input.setStockId(stockId);
			}

			String tmp = "";
			if (!"".equals(condition))
			{
				String url = ev.getProperty("login.url") + condition;
				String dataString = gson.toJson(input);
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
		catch (

		Exception e)
		{
			LOG.error(e.getMessage(), e);
			MessagesResponse mess = new MessagesResponse();
			mess.setMessages(e.getMessage());
			if (e.getMessage() == null)
			{
				mess.setMessages("java.lang.NullPointerException");
			}
			mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
			throw new Exception(re.getMessages());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return list;
	}

	public String getStockByStaffId(HttpServletRequest request, CommonValuesInput input) throws Exception
	{
		String nomeMetodo = ".getStockByStaffId()";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String stockId = "";
		try
		{
			Gson gson = new Gson();
			String dataString = gson.toJson(input);
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_STOCK_BY_STAFF_ID;
			String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				stockId = jsonMapper.readValue(tmp.toString(), new TypeReference<String>() {
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
		return stockId;
	}

}
