package vn.com.fis.controller.epos;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import vn.com.fis.model.epos.CommonValuesInput;
import vn.com.fis.model.epos.CommonValuesOutput;
import vn.com.fis.model.epos.ShopObject;
import vn.com.fis.model.epos.SiteMapOutput;
import vn.com.fis.model.epos.TransEntity;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Controller
public class AccountController
{

	private static final Logger LOG = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	private final String IS_AUTHENTICATED = "isAuthenticated";

	@RequestMapping(value = Constants.REQUEST_MAPPING.LOGIN)
	public String login(Map<String, Object> model)
	{
		return "layout/layout";
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.LOGOUT, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String logout(HttpSession session)
	{
		String nomeMetodo = ".logout() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
		if (session != null)
		{
			session.removeAttribute("transEntity");
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return "{\"loginpage\":\"account/login\"}";
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = Constants.REQUEST_MAPPING.AUTHENTICATED, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public <T> ResponseEntity<String> auth(@RequestBody Map<String, String> model, HttpSession session, HttpServletRequest request)
	{
		String nomeMetodo = ".auth() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + model.get("username") + CommonConstant.BEGIN_LOG);
		Map<String, String> body = new HashMap<>();
		body.put("username", model.get("username"));
		body.put("password", model.get("password"));
		body.put("appCode", model.get("appCode"));

		LOG.info("username: " + model.get("username") + "; password: " + model.get("password") + "; appCode: " + model.get("appCode"));

		HttpHeaders headers = new HttpHeaders();
		headers.add("Accept", MediaType.APPLICATION_JSON.toString());
		headers.add("Content-Type", MediaType.APPLICATION_JSON.toString());

		ResponseEntity<String> responseEntity = null;
		HttpEntity<T> entity = new HttpEntity<T>((T) body, headers);

		try
		{
			String url = ev.getProperty("login.url") + "/login";
			RestTemplate restTemplate = new RestTemplate();
			responseEntity = restTemplate.postForEntity(url, entity, String.class);
		} catch (final HttpClientErrorException httpClientErrorException)
		{
			httpClientErrorException.printStackTrace();
		} catch (HttpServerErrorException httpServerErrorException)
		{
			httpServerErrorException.printStackTrace();
		} catch (Exception exception)
		{
			exception.printStackTrace();
		}
		JSONObject jsonResult = new JSONObject(responseEntity);
		String status = new JSONObject(jsonResult.getString("body")).getString("status");
		LOG.info("username: " + model.get("username") + "; status: " + status);

		if (status != null && status.equals("1"))
		{
			JSONObject transEntity = new JSONObject(jsonResult.getString("body")).getJSONObject("transEntity");
			session.setAttribute(IS_AUTHENTICATED, "1");
			session.setAttribute("transEntity", transEntity.toString());
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return responseEntity;
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.REFRESH_TOKEN, method = RequestMethod.POST)
	@ResponseBody
	public TransEntity refreshToken(HttpServletRequest request, HttpSession session)
	{
		String nomeMetodo = ".refreshToken()";
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.BEGIN_LOG);
		TransEntity transEntity = new TransEntity();

		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.REFRESH_TOKEN;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");
			System.out.println(tmp);
			if (!"".equals(tmp))
			{
				session.setAttribute("transEntity", tmp);
				ObjectMapper jsonMapper = new ObjectMapper();
				transEntity = jsonMapper.readValue(tmp.toString(), new TypeReference<TransEntity>() {
				});
			}
		} catch (Exception exp)
		{
			exp.printStackTrace();
			LOG.error(exp.getMessage(), exp);
		}

		transEntity.setTransId("");

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return transEntity;
	}

	/**
	 * GET thong tin SHOP
	 */
	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_VALUE_SHOP, method = RequestMethod.POST)
	public ResponseEntity<?> getValueShop(HttpServletRequest request)
	{
		String nomeMetodo = ".getValueShop() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ShopObject> list = new ArrayList<ShopObject>();
		try
		{
			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_VALUE_SHOP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", "");

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<ShopObject>>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<List<ShopObject>>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.SITE_MAP, method = RequestMethod.POST)
	public ResponseEntity<?> getSiteMap(HttpServletRequest request)
	{
		String nomeMetodo = ".getSiteMap() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		SiteMapOutput list = new SiteMapOutput();
		try
		{
			TransEntity tran = new TransEntity();
			tran.setAppCode(ev.getProperty("login.app.code"));
			HttpSession session = ((HttpServletRequest) request).getSession(true);
			String transEnti = session.getAttribute("transEntity").toString().toString();
			JSONObject requestHeader = new JSONObject(transEnti);
			String transId = requestHeader.getString("transId");
			tran.setTransId(transId);

			ObjectMapper mapper = new ObjectMapper();
			String jsonString = mapper.writeValueAsString(tran);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.SITE_MAP;
			String tmp = webService.apiServiceMethodPOST(request, url, "", jsonString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				list = jsonMapper.readValue(tmp.toString(), new TypeReference<SiteMapOutput>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<SiteMapOutput>(list, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.GET_COMMON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<?> getConmmonValue(HttpServletRequest request, @RequestBody CommonValuesInput input)
	{
		String nomeMetodo = ".getConmmonValue() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		CommonValuesOutput result = new CommonValuesOutput();
		try
		{

			ObjectMapper mapper = new ObjectMapper();
			String jsonString = mapper.writeValueAsString(input);

			String url = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_COMMON_VALUE;
			String tmp = webService.apiServiceMethodPOST(request, url, "", jsonString);

			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				jsonMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
				result = jsonMapper.readValue(tmp.toString(), new TypeReference<CommonValuesOutput>() {
				});
			}
		} catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage(), e);
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return new ResponseEntity<CommonValuesOutput>(result, HttpStatus.OK);
	}

	@RequestMapping(value = Constants.REQUEST_MAPPING.ACCESS_DENIED)
	public String accessDenied()
	{
		return "accessDenied";
	}
	
}
