package vn.com.fis.controller.css;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vn.com.fis.business.css.MapAgentStockBatchFileBusiness;
import vn.com.fis.model.css.uploadFile;
import vn.com.fis.model.mnpcm.MapAgentStockBatchFileExcelModel;
import vn.com.fis.utils.mnpcm.Constants;

import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Controller
public class MapAgentStockBatchFileController {
    @Autowired
    MapAgentStockBatchFileBusiness mapAgentStockBatchFileBusiness;

    @RequestMapping(value = {Constants.URL_MAP_AGENT_STOCK_BATCHFILE_UPLOADFILE}, method = RequestMethod.POST)
    public ResponseEntity<?> getDataFileExcel(@ModelAttribute uploadFile file) {
        ResponseEntity<List<MapAgentStockBatchFileExcelModel>> response = null;
        List<MapAgentStockBatchFileExcelModel> listDataExcel = new ArrayList<MapAgentStockBatchFileExcelModel>();
        try {
            InputStream filef = new ByteArrayInputStream(file.getFile().getBytes());
            response = new ResponseEntity<List<MapAgentStockBatchFileExcelModel>>(mapAgentStockBatchFileBusiness.uploadFileExcel(filef), HttpStatus.OK);
        } catch (Exception ex) {
            ex.getMessage();
            ex.printStackTrace();
        }
        return response;
    }

    @RequestMapping(value = {Constants.URL_MAP_AGENT_STOCK_BATCHFILE_ACCEPT_MAP}, method = RequestMethod.POST)
    public @ResponseBody
    ResponseEntity<?> acceptMap(HttpServletRequest request, @RequestBody List<MapAgentStockBatchFileExcelModel> data) throws IOException {
        try {
            ResponseEntity<List<String>> response = null;
            response = new ResponseEntity<List<String>>(mapAgentStockBatchFileBusiness.acceptMap(request, data), HttpStatus.OK);
            return response;
        } catch (Exception e) {
            return null;
        }
    }
}
