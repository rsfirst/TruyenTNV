package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import vn.com.fis.business.epos.CommonBusiness;
import vn.com.fis.business.epos.FormStockViewBusiness;
import vn.com.fis.business.epos.StockViewInfoBusiness;
import vn.com.fis.model.ProductOrder.GoodCountDetail;
import vn.com.fis.model.ProductOrder.GoodInfoNew;
import vn.com.fis.model.ProductOrder.GoodsInStockSearchModel;
import vn.com.fis.model.ProductOrder.InternalStockObject;
import vn.com.fis.model.ProductOrder.StateObject;
import vn.com.fis.model.epos.AppDomainModel;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.StaffObject;
import vn.com.fis.model.epos.StockObject;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;

// TODO: Auto-generated Javadoc
/**
 * The Class FormStockViewController.
 */
@Controller
public class FormStockViewController
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(FormStockViewController.class);

	/** The form stock view business. */
	@Autowired
	FormStockViewBusiness formStockViewBusiness;

	@Autowired
	CommonBusiness commonBusiness;

	@Autowired
	StockViewInfoBusiness stockViewInfoBusiness;
	
	@RequestMapping(Constants.REQUEST_MAPPING.URL_STOCK_VIEW)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_URL_STOCK_VIEW + "')")
	public String stockOutputInferior()
	{
		return "epos/inventory/formStockView";
	}

	/**
	 * Gets the stock tree service.
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the stock tree service
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_STOCK_VIEW_LIST_SHOP, method = RequestMethod.POST)
	public ResponseEntity<?> getStockTreeService(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getStockTreeService() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockObject> lstStock = new ArrayList<>();
		try
		{
			lstStock = formStockViewBusiness.getStockTreeServiceBusiness(request, input);

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockObject>>(lstStock, HttpStatus.OK);
	}

	/**
	 * Danh sach nguon hang.
	 *
	 * @param request
	 *            the request
	 * @return the list resource code
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_GET_LIST_RESOUCE_CODE, method = RequestMethod.POST)
	public ResponseEntity<?> getListResourceCode(HttpServletRequest request)
	{
		String nomeMetodo = ".getListResourceCode() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<AppDomainModel> lstResourceCode = new ArrayList<>();
		try
		{
			lstResourceCode = formStockViewBusiness.getListResourceCodeBusiness(request);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<AppDomainModel>>(lstResourceCode, HttpStatus.OK);
	}

	/**
	 * Danh sach nguon hang.
	 *
	 * @param request
	 *            the request
	 * @return the list resource code
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_GET_LIST_STATE, method = RequestMethod.POST)
	public ResponseEntity<?> getListState(HttpServletRequest request)
	{
		String nomeMetodo = ".getListState() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StateObject> lstResourceCode = new ArrayList<>();
		try
		{
			lstResourceCode = formStockViewBusiness.getListStateBusiness(request);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StateObject>>(lstResourceCode, HttpStatus.OK);
	}

	/**
	 * Gets the list Danh sach combo box nguon hang
	 *
	 * @param request
	 *            the request
	 * @return the list resource code
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_GET_LIST_INTERNAL_STOCK, method = RequestMethod.POST)
	public ResponseEntity<?> getListInternalStock(HttpServletRequest request)
	{
		String nomeMetodo = ".getListInternalStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<InternalStockObject> lstResourceCode = new ArrayList<>();
		try
		{
			lstResourceCode = formStockViewBusiness.getListInternalStockBusiness(request);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<InternalStockObject>>(lstResourceCode, HttpStatus.OK);
	}

	/**
	 * Tim kiem theo kho cua hang
	 *
	 * @param request
	 *            the request
	 * @param searchInput
	 *            the search input
	 * @return the response entity
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_SEARCH_GOOD_INSTOCK, method = RequestMethod.POST)
	public ResponseEntity<?> searchGoodsInStock(HttpServletRequest request, @RequestBody GoodsInStockSearchModel searchInput)
	{
		String nomeMetodo = ".searchGoodsInStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodInfoNew> lstGoods = new ArrayList<>();
		try
		{

			lstGoods = formStockViewBusiness.searchGoodsInStockBusiness(request, searchInput);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodInfoNew>>(lstGoods, HttpStatus.OK);
	}

	/**
	 * Tim kiem theo kho cua hang va nhan vien.
	 *
	 * @param request
	 *            the request
	 * @param searchInput
	 *            the search input
	 * @return the response entity
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_SEARCH_GOOD_IN_STOCK_AND_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> searchGoodsInStockAndStaff(HttpServletRequest request, @RequestBody GoodsInStockSearchModel searchInput)
	{
		String nomeMetodo = ".searchGoodsInStockAndStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodInfoNew> lstGoods = new ArrayList<>();
		try
		{

			lstGoods = formStockViewBusiness.searchGoodsInStockAndStaffBusiness(request, searchInput);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodInfoNew>>(lstGoods, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK_AND_STAFF, method = RequestMethod.POST)
	public ResponseEntity<?> searchCountDetailGoodInStockAndStaff(HttpServletRequest request, @RequestBody GoodsInStockSearchModel searchInput)
	{
		String nomeMetodo = ".searchCountDetailGoodInStockAndStaff() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodCountDetail> lstGoodCountDetail = new ArrayList<>();
		try
		{

			lstGoodCountDetail = formStockViewBusiness.searchCountDetailGoodInStockAndStaffBusiness(request, searchInput);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodCountDetail>>(lstGoodCountDetail, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_GET_GOODS_COUNT_DETAIL_IN_STOCK, method = RequestMethod.POST)
	public ResponseEntity<?> searchCountDetailGoodInStock(HttpServletRequest request, @RequestBody GoodsInStockSearchModel searchInput)
	{
		String nomeMetodo = ".searchCountDetailGoodInStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		List<GoodCountDetail> lstGoodCountDetail = new ArrayList<>();
		try
		{

			lstGoodCountDetail = formStockViewBusiness.searchCountDetailGoodInStockBusiness(request, searchInput);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodCountDetail>>(lstGoodCountDetail, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_LIST_STAFF_WITH_TYPE, method = RequestMethod.POST)
	public ResponseEntity<?> getListStaffShopIdAndType(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getListStaffShopIdAndType() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StaffObject> lstReason = new ArrayList<>();
		try
		{
			lstReason = commonBusiness.getListStaffShopIdAndType(request, input);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StaffObject>>(lstReason, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_GET_LIST_GOOD_ATTACH, method = RequestMethod.POST)
	public ResponseEntity<?> getListAttachGoods(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getListAttachGoods() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<GoodInfoNew> lstReason = new ArrayList<>();
		try
		{
			lstReason = formStockViewBusiness.getListAttachGoods(request, input);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<GoodInfoNew>>(lstReason, HttpStatus.OK);
	}

	// Lay danh sach serial form xem thong tin kho
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_BY_CONDITION_STOCK_VIEW, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockSerialByConditionFormStock(HttpServletRequest request, @RequestBody TransactionSerialList input)
	{
		String nomeMetodo = ".getStockSerialByConditionFormStock() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> lstReason = new ArrayList<>();
		try
		{
			lstReason = formStockViewBusiness.getStockSerialByConditionFormStock(request, input);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(lstReason, HttpStatus.OK);

	}
}
