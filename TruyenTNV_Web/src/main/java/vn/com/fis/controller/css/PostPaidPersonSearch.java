package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import vn.com.fis.utils.css.Constants;

import java.util.Map;

@Controller
public class PostPaidPersonSearch {
    private static final Logger LOG = LoggerFactory.getLogger(PostPaidPersonSearch.class);

    @RequestMapping(value = Constants.POSTPAID_PERSON_SEARCH, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> postPaidPersonSearch(@RequestBody Map<String, String> model) {


        return null;
    }

}
