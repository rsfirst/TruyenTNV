package vn.com.fis.controller.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.com.fis.model.mnpcm.JMessage;
import vn.com.fis.model.mnpcm.MnpCancelDetail;
import vn.com.fis.model.mnpcm.NPR;
import vn.com.fis.model.mnpcm.NprInput;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;

@Controller
public class CancelNPRController {
    private static final Logger LOG = LoggerFactory.getLogger(CancelNPRController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = Constants.URL_NPR_CANCEL)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> getNPRCancel(HttpServletRequest request, @RequestBody NprInput nprInput) {
        String nomeMetodo = ".getNPRCancel() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        JMessage jMsg = new JMessage();
        NPR nprCancel = new NPR();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(nprInput);
            String url = ev.getProperty("login.url") + Constants.URL_NPR_CANCEL;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    nprCancel = jsonMapper.readValue(tmp.toString(), new TypeReference<NPR>() {
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
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            jMsg.setCode(Constants.EMPTY_VALUE_MESSAGE_CODE);
            jMsg.setMessage(ex.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<NPR>(nprCancel, HttpStatus.OK);
    }

    @RequestMapping(value = Constants.URL_ACTION_NPR_CANCEL)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public ResponseEntity<?> createNPRCancel(HttpServletRequest request, @RequestBody MnpCancelDetail mnpCancelDetail) {
        String nomeMetodo = ".createNPRCancel() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        LOG.info(LOG.getName() + nomeMetodo + Constants.PARAMETER_LOG + " Data Input : " + mnpCancelDetail.toString());

        JMessage jMsg = new JMessage();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(mnpCancelDetail);
            String url = ev.getProperty("login.url") + Constants.URL_ACTION_NPR_CANCEL;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
            	jMsg = jsonMapper.readValue(tmp.toString(), new TypeReference<JMessage>() {
                });
            	
            	if (!Constants.MNP_CANCEL_SUCCESS.equals(jMsg.getCode())) {
            		LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
                    return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
            	}
            }
        } catch (Exception ex) {
            LOG.error(ex.getMessage(), ex);
            jMsg.setCode(Constants.EMPTY_VALUE_MESSAGE_CODE);
            jMsg.setMessage(ex.getMessage());
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return new ResponseEntity<JMessage>(jMsg, HttpStatus.EXPECTATION_FAILED);
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return new ResponseEntity<JMessage>(jMsg, HttpStatus.OK);
    }

}
