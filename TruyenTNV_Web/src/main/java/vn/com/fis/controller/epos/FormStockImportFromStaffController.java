package vn.com.fis.controller.epos;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class FormStockImportFromStaffController
{
	private static final Logger LOG = LoggerFactory.getLogger(FormStockImportFromStaffController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	@RequestMapping(Constants.REQUEST_MAPPING.FORM_STOCK_IMPORT_FROM_STAFF)
	@PreAuthorize("eimSecured('" + Constants.ITEM_CODE_PRIVILEGE.CHECK_PERMISSIONS_FORM_STOCK_IMPORT_FROM_STAFF + "')")
	public String FormStockImportFromStaffControllerAction()
	{
		return "epos/inventory/FormStockImportFromStaff";
	}
}
