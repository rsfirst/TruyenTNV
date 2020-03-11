package vn.com.fis.security;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import vn.com.fis.model.epos.Loginput;
import vn.com.fis.model.epos.MessagesResponse;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.Constants;
import vn.com.fis.ws.WebService;

@Component
public class EimCheckerAdapter
{
	private static final Logger LOG = LoggerFactory.getLogger(EimCheckerAdapter.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public boolean checkEim(String resource)
	{
		String nomeMetodo = ".checkEim() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		boolean result = false;
		String patch = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.GET_PERMISSIONS;
		String tmp = "";
		try
		{
			MessagesResponse message = new MessagesResponse();
			HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
			tmp = webService.apiServiceMethodPOST(request, patch, "", resource);
			System.out.println(tmp);
			if (!"".equals(tmp))
			{
				ObjectMapper jsonMapper = new ObjectMapper();
				message = jsonMapper.readValue(tmp.toString(), new TypeReference<MessagesResponse>() {

				});
			}

			//result = Boolean.parseBoolean(message.getCode());
			result=true;
			if (result)
			{

				Loginput input = new Loginput();
				input.setStrAppCode(ev.getProperty("login.app.code"));
				input.setStrAssetCode(resource.substring(0, resource.indexOf("&")));
				input.setStrAssetObj(ev.getProperty("jwt.eim.granted_obj"));
				input.setTransEntity(request.getSession().getAttribute("transEntity").toString());
				Gson gson = new Gson();
				String dataString = gson.toJson(input);

				tmp = "";
				patch = ev.getProperty("login.url") + Constants.REQUEST_MAPPING.WRITE_LOG_MENU;
				tmp = webService.apiServiceMethodPOST(request, patch, "", dataString);
			}
		} catch (Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return result;

	}
}
