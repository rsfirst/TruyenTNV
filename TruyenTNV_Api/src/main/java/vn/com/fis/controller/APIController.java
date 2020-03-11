package vn.com.fis.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import vn.com.fis.common.CommonConstant;
import vn.com.fis.common.Constants;

@CrossOrigin(origins = "*")
@RestController
public class APIController {

	private static final Logger LOG = LoggerFactory.getLogger(APIController.class);

	@RequestMapping("/")
	public String welcome(Map<String, Object> model) {
		return "welcome";
	}
}
