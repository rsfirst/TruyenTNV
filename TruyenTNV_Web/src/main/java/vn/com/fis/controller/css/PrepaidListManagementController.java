package vn.com.fis.controller.css;

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
import vn.com.fis.business.css.PrepaidListManagementBusiness;
import vn.com.fis.model.css.PrepaidListManagementSearchInput;
import vn.com.fis.model.css.PrepaidListManagementSearchOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class PrepaidListManagementController {
    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(PrepaidListManagementController.class);
    @Autowired
    PrepaidListManagementBusiness prepaidListManagementBusiness;

    @RequestMapping(value = Constants.ACTION_PREPAID_LIST_MANAGEMENT_SEARCH, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("eimSecured('" + Constants.ITEM_CODE.PREPAID_LIST_MANAGEMENT + "')")
    public ResponseEntity<?> searchPrepaidList(HttpServletRequest request, @RequestBody PrepaidListManagementSearchInput input) throws Exception {
        String nomeMetodo = ".searchPrepaidList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        LOG.info(LOG.getName() + CommonConstant.PARAMETER + "; userExcute: " + input.getUserExcute() + "; fromDate = "
                + input.getFromDate() + "; toDate = " + input.getToDate());
        List<PrepaidListManagementSearchOutput> lstResult = new ArrayList<PrepaidListManagementSearchOutput>();
        try {
            lstResult = prepaidListManagementBusiness.searchPrepaidList(request, input);
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<List<PrepaidListManagementSearchOutput>>(lstResult, HttpStatus.OK);
    }
}
