package vn.com.fis.business.css;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.model.mnpcm.MapAgentStockBatchFileExcelModel;
import vn.com.fis.utils.mnpcm.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class MapAgentStockBatchFileBusiness {

    private static final Logger LOG = LoggerFactory.getLogger(MapAgentStockBatchFileBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public List<MapAgentStockBatchFileExcelModel> uploadFileExcel(InputStream fis) throws IOException {
        List<MapAgentStockBatchFileExcelModel> liDataExcel = new ArrayList<MapAgentStockBatchFileExcelModel>();
        try {
            Workbook workbook = WorkbookFactory.create(fis);
            Sheet datatypeSheet = workbook.getSheetAt(0);
            Iterator<Row> iterator = datatypeSheet.iterator();
            Row firstRow = iterator.next();
            Cell firstCell = firstRow.getCell(0);
            while (iterator.hasNext()) {
                Row currentRow = iterator.next();
                String Msisdn = "";
                String shopCode = "";
                String staffCode = "";
                MapAgentStockBatchFileExcelModel dataExcel = new MapAgentStockBatchFileExcelModel();
                try {
                    Msisdn = currentRow.getCell(0).toString();
                } catch (Exception e) {
                    Msisdn = "";
                }
                try {
                    shopCode = currentRow.getCell(1).toString();
                } catch (Exception e) {
                    shopCode = "";
                }
                try {
                    staffCode = currentRow.getCell(2).toString();
                } catch (Exception e) {
                    staffCode = "";
                }

                dataExcel.setMsisdn(Msisdn);
                dataExcel.setShopCode(shopCode);
                dataExcel.setStaffCode(staffCode);
                liDataExcel.add(dataExcel);
            }
            workbook.close();
            return liDataExcel;
        } catch (Exception ex) {
            liDataExcel = null;
            return liDataExcel;
        }
    }

    public List<String> acceptMap(HttpServletRequest request, List<MapAgentStockBatchFileExcelModel> data) throws SQLException {
        String nomeMetodo = ".acceptMap() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: "
                + SecurityContextHolder.getContext().getAuthentication().getName() + Constants.BEGIN_LOG);

        List<String> list = new ArrayList<>();
        try {
            Gson gson = new Gson();
            String dataString = gson.toJson(data);
            String url = ev.getProperty("login.url") + Constants.URL_MAP_AGENT_STOCK_BATCHFILE_ACCEPT_MAP;
            String tmp = webService.apiServiceMethodPOST(request, url, "", dataString);

            if (!"".equals(tmp)) {
                ObjectMapper jsonMapper = new ObjectMapper();
                list = jsonMapper.readValue(tmp.toString(), new TypeReference<List<String>>() {
                });
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
            return null;
        }

        LOG.info(LOG.getName() + nomeMetodo + Constants.END_LOG);
        return list;
    }
}
