package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.ftu.vnm.wrapper.entity.PrepaidEntityFields;
import vn.com.fis.model.css.MessagesResponse;
import vn.com.fis.model.css.SubSearchOutput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

/**
 * The Class PerPaidBusiness.
 */
@Service
@Transactional
public class PerPaid2Business implements PrepaidEntityFields {

    private static final Logger LOG = LoggerFactory.getLogger(PerPaid2Business.class);

    @Autowired
    PerPaidBusiness perPaidBusiness;

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;


    public ResponseEntity<?> verifySubscriberHistoryChangeSim(HttpServletRequest request, SubSearchOutput verifySubIn) {
        String nomeMetodo = ".verifySubscriberHistoryChangeSim() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        MessagesResponse mess = new MessagesResponse();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(verifySubIn);
            String url = ev.getProperty("login.url") + Constants.ACTION_VERIFY_SUBSCRIBER_HISTORY_CHANGE_SIM;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);
            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                mess = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {
                });
            }
        } catch (Exception e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            mess.setMessages(e.getMessage());
            mess.setStatus(String.valueOf(CommonConstant.STATUS_DEFAULT));
            return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return new ResponseEntity<MessagesResponse>(mess, HttpStatus.OK);
    }

}
