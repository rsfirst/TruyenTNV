package vn.com.fis.controller.css;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import vn.com.fis.model.mnpcm.SearchDataInputModel;
import vn.com.fis.model.mnpcm.SubReturnDNONotificationModel;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class SubReturnController {

    private static final Logger LOG = LoggerFactory.getLogger(SubReturnController.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    @RequestMapping(value = Constants.SUB_RETURN_DNO_REPORT, method = RequestMethod.POST)
    @PreAuthorize("eimSecured('VNM_MNU_CM&ACCESS')")
    @ResponseBody
    public List<SubReturnDNONotificationModel> getListSubReturnRNO(HttpServletRequest request,
                                                                   @RequestBody SearchDataInputModel subReturnInput) throws Exception {
        String nomeMetodo = ".getListSubReturnRNO() ";
        LOG.info(LOG.getName() + nomeMetodo + Constants.BEGIN_LOG);
        List<SubReturnDNONotificationModel> lstReturn = new ArrayList<>();
        try {

        	Gson gson = new GsonBuilder()
                            .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ").create();
        	String dataString = gson.toJson(subReturnInput);
            String url = ev.getProperty("login.url") + Constants.SUB_RETURN_DNO_REPORT;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                try {
                    lstReturn = jsonMapper.readValue(tmp.toString(),
                            new TypeReference<List<SubReturnDNONotificationModel>>() {
                            });
                } catch (Exception e) {

                    throw e;
                }
            }
        } catch (Exception e) {
            LOG.error(LOG.getName() + nomeMetodo + e.getMessage());
            e.printStackTrace();
            throw e;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return lstReturn;
    }
}
