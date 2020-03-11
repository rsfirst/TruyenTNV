package vn.com.fis.business.css;

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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import vn.com.fis.common.css.CommonUtilCSS;
import vn.com.fis.model.css.AttachmentDataObject;
import vn.com.fis.model.css.PerPaidSearchCustomerInput;
import vn.com.fis.model.css.PrePaidCusSubBatch;
import vn.com.fis.utils.css.CommonConstant;

@Service
public class PerPaidBusiness {

    private static final Logger LOG = LoggerFactory.getLogger(PerPaidBusiness.class);

    public static boolean checkEmtry(PerPaidSearchCustomerInput input) {
        String nomeMetodo = ".checkEmtry() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);
        if (StringUtils.isEmpty(input.getCard())) {
            if (StringUtils.isEmpty(input.getMdn())) {
                if (StringUtils.isEmpty(input.getName())) {
                    if (StringUtils.isEmpty(input.getSimNumber())) {
                        if (StringUtils.isEmpty(input.getTax())) {
                            if (StringUtils.isEmpty(input.getCustomerType())) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return false;
    }
    public List<PrePaidCusSubBatch> getListSubscriberFormTemplate(InputStream fis) throws Exception {
		String nomeMetodo = ".getListSubscriberFormTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: "
				+ SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<PrePaidCusSubBatch> listProvisionCustomerInfo = new ArrayList<PrePaidCusSubBatch>();

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
				PrePaidCusSubBatch proSubscriberClient = new PrePaidCusSubBatch();
				List<AttachmentDataObject> attachmentDataObject = new ArrayList<AttachmentDataObject>();
				boolean checkCellNull = false;
				while (iteratorCell.hasNext()) {
					Cell cell = iteratorCell.next();
					String cellValue = CommonUtilCSS.getCellValue(cell);

					int columnIndex = cell.getColumnIndex() + 1;
					if (cellValue != null) {
						checkCellNull = true;
						CommonUtilCSS.setValueFromFileExcel(proSubscriberClient, attachmentDataObject, cellValue,
								columnIndex);
					}
				}
				if (checkCellNull) {
					proSubscriberClient.setAttachmentDataObject(attachmentDataObject);
					listProvisionCustomerInfo.add(proSubscriberClient);
				}
				checkCellNull = false;
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
			throw e;
		} finally {
			if (fis != null) {
				try {
					fis.close();
				} catch (IOException e) {
					LOG.error(e.getMessage(), e);
					LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
					throw e;
				}
			}
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listProvisionCustomerInfo;
	}


}
