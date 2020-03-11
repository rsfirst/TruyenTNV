package vn.com.fis.business.epos;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.com.fis.model.epos.GoodTransactionsModel;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;

@RestController
public class StockExportToPartnerBusiness {
	
	private static final Logger LOG = LoggerFactory.getLogger(StockExportToPartnerBusiness.class);

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_STOCK_SERIAL_STRIP, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public String getSerialListInStock(@RequestBody GoodTransactionsModel input) {
		String nomeMetodo = ".getSerialListInStock()";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		String func = "";
		try {
			func = Constants.REQUEST_MAPPING.CHECK_LIST_SERIAL;
			String lstSerial = "";
			if (input.getLstTransSerial() != null && input.getLstTransSerial().size() >0) {
				for (int i=0; i<input.getLstTransSerial().size(); i++) {
					lstSerial += ("'" + input.getLstTransSerial().get(i).getFromSerial().trim() + "',");
				}
				input.setLstTransSerialString(lstSerial.substring(0, lstSerial.length()-1));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return func;
	}
}
