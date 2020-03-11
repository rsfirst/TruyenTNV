package vn.com.fis.controller.css;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import vn.com.fis.model.mnpcm.JMessage;

@ControllerAdvice
public class GlobalExceptionHandler {

	private static final Logger LOG = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
    @ExceptionHandler(MultipartException.class)
    @ResponseBody
    public ResponseEntity<?> handleError(MultipartException e, RedirectAttributes redirectAttributes) {
    	LOG.error("begin handleError");
    	HttpHeaders response = new HttpHeaders();
    	response.set("Error", "File vuot qua 10 mb");
    	response.set("Access-Control-Allow-Origin", "*");     	
    	
        redirectAttributes.addFlashAttribute("message", e.getCause().getMessage());
        JMessage msg = new JMessage();
        msg.setCode(500);msg.setMessage("File Vượt quá 10MB"); 
        LOG.error("Enb handleError");
        
        return new ResponseEntity<JMessage>(msg, response, HttpStatus.EXPECTATION_FAILED);
        
    }

    //CommonsMultipartResolver
    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public String handleError2(MaxUploadSizeExceededException e, RedirectAttributes redirectAttributes) {
    	LOG.error("handleError2");
        redirectAttributes.addFlashAttribute("message", e.getCause().getMessage());
        return "redirect:/uploadStatus";

    }

}
