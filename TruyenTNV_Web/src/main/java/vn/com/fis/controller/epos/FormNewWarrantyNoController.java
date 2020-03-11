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

import vn.com.fis.business.epos.FormWarrantyNoBusiness;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.model.epos.TransactionSerialList;
import vn.com.fis.model.epos.WarrantyModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormNewWarrantyNoController
{

	private static final Logger LOG = LoggerFactory.getLogger(FormNewWarrantyNoController.class);

	@Autowired
	WebService webService;

	@Autowired
	FormWarrantyNoBusiness formWarrantyNoBusiness;

	@RequestMapping(Constants.REQUEST_MAPPING.URL_FORM_NEW_WARRANTY_NO)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_URL_FORM_NEW_WARRANTY_NO + "')")
	public String stockExportToCenter()
	{
		return "epos/inventory/FormNewWarrantyNo";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_LIST_WARRANTY_NO, method = RequestMethod.POST)
	public ResponseEntity<?> getListWarrantyNo(HttpServletRequest request, @RequestBody WarrantyModel warrantyInput)
	{
		String nomeMetodo = ".getListWarrantyNo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<WarrantyModel> listWarrantyNo = new ArrayList<>();
		try
		{
			listWarrantyNo = formWarrantyNoBusiness.getListWarrantyNoBusiness(request, warrantyInput);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<WarrantyModel>>(listWarrantyNo, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_CREATE_WARRANTY_NO, method = RequestMethod.POST)
	public ResponseEntity<?> createWarrantyNo(HttpServletRequest request, @RequestBody WarrantyModel warrantyInput)
	{
		String nomeMetodo = ".createWarrantyNo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		MessagesResponse messagesResponse = new MessagesResponse();
		try
		{
			 messagesResponse = formWarrantyNoBusiness.createWarrantyNoBusiness(request, warrantyInput);
		}
		catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			messagesResponse.setStatus(CommonConstant.STATUS_UN_SUCCESS);
			messagesResponse.setMessages(e.getMessage());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<MessagesResponse>(messagesResponse, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_GENERATE_WARRANTY_NO, method = RequestMethod.POST)
	public ResponseEntity<?> generateWarrantyNo(HttpServletRequest request, @RequestBody List<TransactionSerialList> lstTransSerial)
	{
		String nomeMetodo = ".generateWarrantyNo() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<TransactionSerialList> lstTransSerialResult = new ArrayList<>();
		try
		{
			lstTransSerialResult = formWarrantyNoBusiness.generateWarrantyNoBusiness(request, lstTransSerial);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<TransactionSerialList>>(lstTransSerialResult, HttpStatus.OK);
	}
	
	@RequestMapping(value = Constants.REQUEST_MAPPING.ACTION_FORM_NEW_WARRANTY_LIST_WARRANTY_EXITS, method = RequestMethod.POST)
	public ResponseEntity<?> getListWarrantyNoExits(HttpServletRequest request,  @RequestBody List<TransactionSerialList> lstTransSerial)
	{
		String nomeMetodo = ".getListWarrantyNoExits() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<String> listWarrantyNoExits = new ArrayList<String>();
		try
		{
			listWarrantyNoExits = formWarrantyNoBusiness.getListWarrantyNoExits(request, lstTransSerial);
		} catch (Exception e)
		{
			LOG.error(LOG.getName() + nomeMetodo + e.getMessage(), e);
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<String>>(listWarrantyNoExits, HttpStatus.OK);
	}

}
