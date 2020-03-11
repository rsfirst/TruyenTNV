package vn.com.fis.eim_client.security;

import java.util.Arrays;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class EimCheckerAdapter {
	private static final Logger LOG = LoggerFactory.getLogger(EimCheckerAdapter.class);
	
	@Value("${jwt.eim.url}")
	private String eimUrl;
	
	@Value("${jwt.eim.granted_obj}")
	private String eimGrantedObj;
	
	public boolean checkEim(String rolesList, String resource, String authToken) {
		String uri = eimUrl + "&" + rolesList + "&" + eimGrantedObj + "&" + resource;
		
		LOG.debug("URI: " + uri);
		
	    RestTemplate restTemplate = new RestTemplate();
	     
	    HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    
	    headers.add("TRANS_ID", authToken);
	    
	    HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
	    ResponseEntity<Map> result = restTemplate.exchange(uri, HttpMethod.GET, entity, Map.class);
		Object resultBool = result.getBody().get("resultBool");
	    
		System.out.println("permission: "+ resultBool.toString());
	    if (resultBool != null && "true".equals(resultBool))
			return true;
	    
		return false;
		
	}
}
