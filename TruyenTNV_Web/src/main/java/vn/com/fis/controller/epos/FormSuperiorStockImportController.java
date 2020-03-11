package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import vn.com.fis.business.epos.FormSuperiorStockImportBusiness;
import vn.com.fis.model.epos.CommonStockTransSearch;
import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.StockTransDetailObject;
import vn.com.fis.model.epos.StockTransactionModel;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;

/**
 * The Class FormStockViewController.
 */
@Controller
public class FormSuperiorStockImportController
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(FormSuperiorStockImportController.class);

	/** The form stock view business. */
	@Autowired
	FormSuperiorStockImportBusiness formSuperiorStockImportBusiness;

	/**
	 * Stock output inferior.
	 *
	 * @return the string
	 */
	@RequestMapping(Constants.REQUEST_MAPPING.URL_FORM_SUPERIOR_STOCK_IMPORT)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_URL_FORM_SUPERIOR_STOCK_IMPORT + "')")
	public String stockOutputInferior()
	{
		return "epos/inventory/FormSuperiorStockImport";
	}

	/**
	 * Form nhap hang tu cap tren/Lay du lieu stock trans
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the stock tree service
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.SUPERIOR_STOCK_IMPORT_LIST_STOCK_TRANSACTIONS, method = RequestMethod.POST)
	public ResponseEntity<?> getStockTransExec(HttpServletRequest request, @RequestBody CommonStockTransSearch input)
	{
		String nomeMetodo = ".getStockTransExec() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockTransactionModel> lstStock = new ArrayList<>();
		try
		{
			lstStock = formSuperiorStockImportBusiness.getStockTransExecBusiness(request, input);

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockTransactionModel>>(lstStock, HttpStatus.OK);
	}

	/**
	 * Form nhap hang tu cap tren/Lay du lieu detail
	 *
	 * @param request
	 *            the request
	 * @param input
	 *            the input
	 * @return the stock trans detail by stock trans id
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.SUPERIOR_STOCK_IMPORT_STOCK_TRANS_DETAIL, method = RequestMethod.POST)
	public ResponseEntity<?> getStockTransDetailByStockTransId(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getStockTransDetailByStockTransId() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<StockTransDetailObject> lstStock = new ArrayList<>();
		try
		{
			lstStock = formSuperiorStockImportBusiness.getStockTransDetailByStockTransId(request, input);

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<StockTransDetailObject>>(lstStock, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.SUPERIOR_STOCK_GET_LIST_SERIAL_IN_TRANSACTION, method = RequestMethod.POST)
	public ResponseEntity<?> getListSerialIntransaction(HttpServletRequest request, @RequestBody CommonValuesInput listSerial)
	{
		String nomeMetodo = ".getListSerialIntransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> lstStock = new ArrayList<>();
		try
		{
			lstStock = formSuperiorStockImportBusiness.getListSerialIntransaction(request, listSerial);

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(lstStock, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.SUPERIOR_STOCK_IMPORT_SUPERIOR_TRANSACTION, method = RequestMethod.POST)
	public ResponseEntity<?> importSuperiorTransaction(HttpServletRequest request, @RequestBody StockTransactionModel listSerial)
	{
		String nomeMetodo = ".importSuperiorTransaction() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			messagesResponse = formSuperiorStockImportBusiness.importSuperiorTransaction(request, listSerial);

		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}

}
