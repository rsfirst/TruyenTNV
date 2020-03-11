package vn.com.fis.business.css;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import vn.com.fis.utils.css.Constants;
import vn.com.fis.ws.WebService;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class ProductOrderBusiness {
    private static final Logger LOG = LoggerFactory.getLogger(ProductOrderBusiness.class);

    @Autowired
    private Environment ev;

    @Autowired
    WebService webService;

    public long addPOManual(HttpServletRequest request) throws Exception {
        long orderId = 0;
        try {
            String url = ev.getProperty("login.url") + Constants.ACTION_PRODUCT_ORDER_ADD_MANUAL;
            String tmp = webService.apiServiceMethodPOST(request, url, "", "");

            if (!"".equals(tmp)) {
                orderId = Long.parseLong(tmp);
            }
        } catch (Exception exp) {
            throw exp;
        }
        return orderId;
    }

    private static String getFileExtension(File file) {
        String fileName = file.getName();
        if (fileName.lastIndexOf(".") != -1 && fileName.lastIndexOf(".") != 0)
            return fileName.substring(fileName.lastIndexOf(".") + 1);
        else
            return "";
    }

    public File WriteListObjectXLSX(File input, File output, List<Object> dataOjb, int startRow, int startCell, String[] header, int[] dataItemIndex,
                                    boolean unitNo) {
        try {
            // valid
            if ((header != null && header.length > 0) && (header.length != dataItemIndex.length)) {
                throw new Exception("header and dataIndex are not mapping");
            }

            if (startRow < 0 || startCell < 0) {
                throw new Exception("Invalid Row-Cell config");
            }

            if (dataOjb != null && dataOjb.size() > 0) {
                // Read Excel document first
                FileInputStream input_document = new FileInputStream(input);

                // convert it into a POI object
                XSSFWorkbook my_xlsx_workbook = new XSSFWorkbook(input_document);

                // Read excel sheet that needs to be updated
                XSSFSheet my_worksheet = my_xlsx_workbook.getSheetAt(0);

                // +1 them header
                my_worksheet.shiftRows(startRow, my_worksheet.getLastRowNum(), dataOjb.size() + 1, true, true);

                XSSFCellStyle headerStyle = my_xlsx_workbook.createCellStyle();
                headerStyle.setBorderRight(BorderStyle.THIN);
                headerStyle.setBorderTop(BorderStyle.THIN);
                headerStyle.setBorderLeft(BorderStyle.THIN);
                headerStyle.setBorderBottom(BorderStyle.THIN);

                XSSFFont font = my_xlsx_workbook.createFont();
                font.setBold(true);

                headerStyle.setFont(font);

                XSSFCellStyle content = my_xlsx_workbook.createCellStyle();
                content.setBorderRight(BorderStyle.THIN);
                content.setBorderTop(BorderStyle.THIN);
                content.setBorderLeft(BorderStyle.THIN);
                content.setBorderBottom(BorderStyle.THIN);

                // create header
                if (header != null && header.length > 0) {
                    XSSFRow row = my_worksheet.createRow(startRow);
                    for (int rn = 0; rn < header.length; rn++) {
                        Cell cell = row.createCell(rn + startCell);
                        cell.setCellValue(header[rn]);
                        cell.setCellStyle(headerStyle);
                    }
                } else {
                    startRow = startRow - 1;
                }

                for (int i = 1; i <= dataOjb.size(); i++) {
                    XSSFRow rowData = my_worksheet.createRow(startRow + i);
                    for (int j = 0; j < dataItemIndex.length; j++) {
                        Cell cell = rowData.createCell(j + startCell);
                        if (unitNo && j == 0) {
                            cell.setCellValue(i);
                            cell.setCellStyle(content);
                        } else {
                            cell.setCellValue(dataItemIndex[j]);
                            cell.setCellStyle(content);
                        }
                    }
                }

                // important to close InputStream
                input_document.close();
                // Open FileOutputStream to write updates
                FileOutputStream output_file = new FileOutputStream(output);
                // write changes
                my_xlsx_workbook.write(output_file);
                // close the stream
                output_file.close();
                my_xlsx_workbook.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOG.error(e.getMessage(), e);
        }

        return output;
    }

    public File WriteListObjectXLSX(File input, File output, List<Object[]> dataOjb, int startRow, int[] cellIndex, String[] header, int[] dataItemIndex,
                                    int unitNoCellIndex) {
        try {
            // valid
            if ((header != null && header.length > 0) && (header.length != dataItemIndex.length)) {
                throw new Exception("header and dataIndex are not mapping");
            }

            if (startRow < 0 || cellIndex.length <= 0) {
                throw new Exception("Invalid Row-Cell config");
            }

            if (dataOjb != null && dataOjb.size() > 0) {
                // Read Excel document first
                FileInputStream input_document = new FileInputStream(input);

                // convert it into a POI object
                XSSFWorkbook my_xlsx_workbook = new XSSFWorkbook(input_document);

                // Read excel sheet that needs to be updated
                XSSFSheet my_worksheet = my_xlsx_workbook.getSheetAt(0);

                // +1 them header
                my_worksheet.shiftRows(startRow, my_worksheet.getLastRowNum(), dataOjb.size() + 1, true, true);

                XSSFCellStyle headerStyle = my_xlsx_workbook.createCellStyle();
                headerStyle.setBorderRight(BorderStyle.THIN);
                headerStyle.setBorderTop(BorderStyle.THIN);
                headerStyle.setBorderLeft(BorderStyle.THIN);
                headerStyle.setBorderBottom(BorderStyle.THIN);

                XSSFFont font = my_xlsx_workbook.createFont();
                font.setBold(true);

                headerStyle.setFont(font);

                XSSFCellStyle content = my_xlsx_workbook.createCellStyle();
                content.setBorderRight(BorderStyle.THIN);
                content.setBorderTop(BorderStyle.THIN);
                content.setBorderLeft(BorderStyle.THIN);
                content.setBorderBottom(BorderStyle.THIN);

                XSSFCellStyle bottom = my_xlsx_workbook.createCellStyle();
                bottom.setBorderBottom(BorderStyle.THIN);

                XSSFCellStyle right_bottom = my_xlsx_workbook.createCellStyle();
                right_bottom.setBorderRight(BorderStyle.THIN);
                right_bottom.setBorderBottom(BorderStyle.THIN);

                // create header
                if (header != null && header.length > 0) {
                    XSSFRow row = my_worksheet.createRow(startRow);
                    for (int rn = 0; rn < header.length; rn++) {
                        Cell cell = row.createCell(rn + cellIndex[rn]);
                        cell.setCellValue(header[rn]);
                        cell.setCellStyle(headerStyle);
                    }
                } else {
                    startRow = startRow - 1;
                }

                for (int i = 0; i < dataOjb.size(); i++) {
                    Object[] data = dataOjb.get(i);
                    XSSFRow rowData = my_worksheet.createRow(startRow + i);

                    my_worksheet.addMergedRegion(new org.apache.poi.ss.util.CellRangeAddress(startRow + i, startRow + i, 2, 3));
                    my_worksheet.addMergedRegion(new org.apache.poi.ss.util.CellRangeAddress(startRow + i, startRow + i, 4, 7));
                    my_worksheet.addMergedRegion(new org.apache.poi.ss.util.CellRangeAddress(startRow + i, startRow + i, 10, 11));
                    my_worksheet.addMergedRegion(new org.apache.poi.ss.util.CellRangeAddress(startRow + i, startRow + i, 12, 13));

                    rowData.createCell(3).setCellStyle(bottom);
                    rowData.createCell(5).setCellStyle(bottom);
                    rowData.createCell(6).setCellStyle(bottom);
                    rowData.createCell(7).setCellStyle(bottom);
                    rowData.createCell(11).setCellStyle(bottom);
                    rowData.createCell(13).setCellStyle(right_bottom);

                    if (unitNoCellIndex > 0) {
                        Cell cell = rowData.createCell(unitNoCellIndex);
                        cell.setCellValue(i + 1);
                        cell.setCellStyle(content);
                    }

                    for (int j = 0; j < dataItemIndex.length; j++) {
                        Cell cell = rowData.createCell(cellIndex[j]);
                        cell.setCellValue(String.valueOf(data[dataItemIndex[j]]));
                        cell.setCellStyle(content);
                    }
                }

                // important to close InputStream
                input_document.close();
                // Open FileOutputStream to write updates
                FileOutputStream output_file = new FileOutputStream(output);
                // write changes
                my_xlsx_workbook.write(output_file);
                // close the stream
                output_file.close();
                my_xlsx_workbook.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOG.error(e.getMessage(), e);
        }

        return output;
    }

    public File WriteSingleFiledXLSX(File input, File output, HashMap<String, String> fields) {
        try {
            if (fields.size() > 0) {
                // Read Excel document first
                FileInputStream input_document = new FileInputStream(input);

                // convert it into a POI object
                XSSFWorkbook my_xlsx_workbook = new XSSFWorkbook(input_document);

                // Read excel sheet that needs to be updated
                XSSFSheet my_worksheet = my_xlsx_workbook.getSheetAt(0);

                for (String key : fields.keySet()) {
                    System.out.println(Integer.parseInt(key.split(",")[0]));
                    System.out.println(Integer.parseInt(key.split(",")[1]));
                    System.out.println(String.valueOf(fields.get(key)));
                    XSSFRow rowData = my_worksheet.getRow(Integer.parseInt(key.split(",")[0]));
                    Cell cell = rowData.getCell(Integer.parseInt(key.split(",")[1]));
                    cell.setCellValue(String.valueOf(fields.get(key)));
                }

                // important to close InputStream
                input_document.close();
                // Open FileOutputStream to write updates
                FileOutputStream output_file = new FileOutputStream(output);
                // write changes
                my_xlsx_workbook.write(output_file);
                // close the stream
                output_file.close();
                my_xlsx_workbook.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            LOG.error(e.getMessage(), e);
        }

        return output;
    }

}
