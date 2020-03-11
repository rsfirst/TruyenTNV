package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.PrepaidListManagementSearchInput;
import vn.com.fis.model.css.PrepaidListManagementSearchOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PrepaidListManagementBusiness {
    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(PrepaidListManagementBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public List<PrepaidListManagementSearchOutput> searchPrepaidList(HttpServletRequest request, PrepaidListManagementSearchInput input)
            throws Exception {
        String nomeMetodo = ".searchPrepaidList() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<PrepaidListManagementSearchOutput> result = new ArrayList<PrepaidListManagementSearchOutput>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(input);
            String url = ev.getProperty("login.url") + Constants.ACTION_PREPAID_LIST_MANAGEMENT_SEARCH;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    result = jsonMapper.readValue(tmp.toString(), new TypeReference<List<PrepaidListManagementSearchOutput>>() {
                    });
                } catch (Exception e) {
                    try {
                        MessagesResponse mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                        });
                        throw new Exception(e.getMessage());
                    } catch (Exception ex) {
                        throw ex;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.error(ex.getMessage(), ex);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            throw new Exception(ex.getMessage());
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return result;
    }
}
