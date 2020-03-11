package vn.com.fis.business.epos;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import vn.com.fis.model.epos.UploadCustomerByBatEntity;
import vn.com.fis.utils.epos.CommonConstant;
import vn.com.fis.utils.epos.CommonUtil;
import vn.com.fis.ws.WebService;

@RestController
public class FormStockExportForCustomerByBatchBusiness {
	private static final Logger LOG = LoggerFactory.getLogger(FormStockExportForCustomerByBatchBusiness.class);

	@Autowired
	private Environment ev;

	@Autowired
	WebService webService;

	public List<UploadCustomerByBatEntity> UploadFile(InputStream fis) throws Exception {
		String nomeMetodo = ".UploadFile() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<UploadCustomerByBatEntity> listSerian = new ArrayList<UploadCustomerByBatEntity>();
		

		try {
			// Read file excel
			Workbook workbook = WorkbookFactory.create(fis);
			Sheet sheet = workbook.getSheetAt(0);

			Iterator<Row> iteratorRow = sheet.iterator();
			// next cursor to row three
			iteratorRow.next();

			while (iteratorRow.hasNext()) {
				Row row = iteratorRow.next();
				Iterator<Cell> iteratorCell = row.cellIterator();
				
				UploadCustomerByBatEntity data = new UploadCustomerByBatEntity();
				boolean checkCellNull = false;
				
				while (iteratorCell.hasNext()) {
					Cell cell = iteratorCell.next();
					
					String cellValue = CommonUtil.getCellValue(cell);
					int columnIndex = cell.getColumnIndex() + 1;
					if (cellValue != null) {
						checkCellNull = true;
						if (columnIndex == CommonConstant.INDEX_1) {
							data.setStockDeliverer(cellValue);
						}else if(columnIndex ==2){
							data.setSerial(cellValue);
						}
						
					}
				}
				if (checkCellNull) {
					listSerian.add(data);
				}
				checkCellNull = false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(e.getMessage());
			throw e;
		} finally {
			if (fis != null) {
				try {
					fis.close();
				} catch (IOException e) {
					e.printStackTrace();
					LOG.error(e.getMessage());
					throw e;
				}
			}
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listSerian;
	}
	
}
