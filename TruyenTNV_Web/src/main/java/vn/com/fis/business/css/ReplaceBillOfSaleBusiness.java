package vn.com.fis.business.css;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.model.CInvoiceModel.InvoiceHeaderOb;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

@Service @Transactional public class ReplaceBillOfSaleBusiness
{

	/**
	 * The Constant LOG.
	 */
	private static final Logger LOG = LoggerFactory.getLogger(ReplaceBillOfSaleBusiness.class);

	    @Autowired
	    private Environment ev;

	    @Autowired
	    WebService webService;


	public ResponseEntity<?> getListCInvoiceHeaderReplace(HttpServletRequest request,String shopId, String staffId, String cusName, String invoiceStatus, String fromDate,
			String toDate) throws Exception
	{
		
		  String nomeMetodo = ".getListCInvoiceHeaderReplace() ";
	        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

	        JMessage jMsg = new JMessage();
	    	List<InvoiceHeaderOb> listHeaderInvoice = new ArrayList<InvoiceHeaderOb>();
	        try {
	            HashMap<String, String> params = new HashMap<>();
	            params.put("shopId", shopId);
	            params.put("staffId", staffId);
	            params.put("cusName",cusName);
	            params.put("invoiceStatus",invoiceStatus);
	            params.put("fromDate", fromDate);
	            params.put("toDate",toDate);
	            String url = ev.getProperty("login.url") + Constants.ACTION_GET_REPLACE_HEADER_C_INVOICES;
	            String tmp = webService.apiServiceMethodGETWithParam(request, url, "", "", params);

	            if (!"".equals(tmp)) {
	                ObjectMapper jsonMapper = new ObjectMapper();
	                try {
	                	listHeaderInvoice = jsonMapper.readValue(tmp.toString(), new TypeReference<List<InvoiceHeaderOb>>() {
	                    });
	                } catch (Exception e) {
	                    try {
	                        jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
	                        });
	                        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	                        return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
	                    } catch (Exception ex) {
	                        throw ex;
	                    }
	                }
	            }

	            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	            return new ResponseEntity<List<InvoiceHeaderOb>>(listHeaderInvoice, HttpStatus.OK);
	        } catch (Exception e2) {
	            LOG.error(e2.getMessage(), e2);
	            jMsg.setMessage(e2.getMessage());
	            LOG.error(LOG.getName() + nomeMetodo + e2.getMessage() );
	            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
	            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
	        }
	}

	
}
