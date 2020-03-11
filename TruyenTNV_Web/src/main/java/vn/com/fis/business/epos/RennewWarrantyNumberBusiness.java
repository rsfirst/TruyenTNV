
package vn.com.fis.business.epos;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RestController;

import vn.com.fis.ws.WebService;

/**
 * The Class FormStockViewBusiness.
 */
@RestController
public class RennewWarrantyNumberBusiness
{

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(FormWarrantyNoBusiness.class);

	/** The ev. */
	@Autowired
	private Environment ev;

	/** The web service. */
	@Autowired
	WebService webService;
	
	
	
	
	/*@RequestMapping(value = Constants.REQUEST_MAPPING.RENEW_WARRANTY_NUMBER_VALIDATE_INPUT, method = RequestMethod.POST)
	public ResponseEntity<?> validateInput(HttpServletRequest request,@RequestBody WarrantyActionModel input) {
		return null;
	
	}
	*/

}
