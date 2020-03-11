package vn.com.fis.utils.mnpcm;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class CustomJsonDateDeserializer extends JsonDeserializer<Date> {
	private static final Logger LOG = LoggerFactory.getLogger(CustomJsonDateDeserializer.class);
	@Override
	public Date deserialize(JsonParser jsonParser, DeserializationContext arg1) throws IOException, JsonProcessingException {
		 SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	        String date = jsonParser.getText();
	        try {
	        	if(date.trim()!="") {
	        		return format.parse(date);	
	        	}else {
	        		return null;
	        	}
	            
	        } catch (ParseException e) {
	        	LOG.error(e.getMessage());
	        	return null;
	        }
	}

}
