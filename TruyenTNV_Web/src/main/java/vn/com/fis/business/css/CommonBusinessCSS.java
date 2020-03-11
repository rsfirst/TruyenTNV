package vn.com.fis.business.css;

import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import vn.com.fis.common.css.CommonUtil;
import vn.com.fis.ftu.vnm.wrapper.entity.PrepaidEntityFields;
import vn.com.fis.model.css.AgencyObject;
import vn.com.fis.model.css.ShopObject;
import vn.com.fis.model.css.ShopSearchOutput;
import vn.com.fis.utils.css.CommonConstant;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * The Class PerPaidBusiness.
 */
@Service
public class CommonBusinessCSS implements PrepaidEntityFields {

    private static final Logger LOG = LoggerFactory.getLogger(CommonBusinessCSS.class);

    public List<ShopObject> getListProvinceShopFromTemplate(InputStream fis) throws Exception {
        String nomeMetodo = ".getListProvinceShopFromTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<ShopObject> listProvinceShopResult = new ArrayList<ShopObject>();

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
                ShopObject provinceShopELement = new ShopObject();

                boolean checkCellNull = false;
                while (iteratorCell.hasNext()) {
                    Cell cell = iteratorCell.next();
                    String cellValue = CommonUtil.getCellValue(cell);

                    int columnIndex = cell.getColumnIndex() + 1;
                    if (cellValue != null) {
                        checkCellNull = true;
                        if (columnIndex == CommonConstant.INDEX_TEMP_SHOP) {
                            provinceShopELement.setShopCode(cellValue);
                        }

                        if (columnIndex == CommonConstant.INDEX_TEMP_PROVINCE) {
                            provinceShopELement.setProvince(cellValue);
                        }
                    }
                }
                if (checkCellNull) {
                    listProvinceShopResult.add(provinceShopELement);
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
        return listProvinceShopResult;
    }

    public List<ShopSearchOutput> getListShopFromTemplate(InputStream fis) throws Exception {
        String nomeMetodo = ".getListShopFromTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<ShopSearchOutput> listShopResult = new ArrayList<ShopSearchOutput>();

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
                ShopSearchOutput shopItem = new ShopSearchOutput();

                boolean checkCellNull = false;
                while (iteratorCell.hasNext()) {
                    Cell cell = iteratorCell.next();
                    String cellValue = CommonUtil.getCellValue(cell);

                    int columnIndex = cell.getColumnIndex() + 1;
                    if (cellValue != null) {
                        checkCellNull = true;
                        if (columnIndex == CommonConstant.INDEX_TEMP_SHOP) {
                            shopItem.setShopCode(cellValue);
                        }
                    }
                }
                if (checkCellNull) {
                    listShopResult.add(shopItem);
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
        return listShopResult;
    }

    public List<AgencyObject> getListAgentFromTemplate(InputStream fis) throws Exception {
        String nomeMetodo = ".getListAgentFromTemplate() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<AgencyObject> listProvisionCustomerInfo = new ArrayList<AgencyObject>();

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
                AgencyObject agencyObject = new AgencyObject();
                boolean checkCellNull = false;
                while (iteratorCell.hasNext()) {
                    Cell cell = iteratorCell.next();
                    String cellValue = CommonUtil.getCellValue(cell);

                    int columnIndex = cell.getColumnIndex() + 1;
                    if (cellValue != null) {
                        LOG.info(LOG.getName() + nomeMetodo + "columnIndex = " + columnIndex + "cellValue = " + cellValue);
                        checkCellNull = true;
                        CommonUtil.setValueFromFileExcelAgent(agencyObject, cellValue, columnIndex);
                    }
                }
                if (checkCellNull) {
                    listProvisionCustomerInfo.add(agencyObject);
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

    public List<String> getListAccountFromFile(InputStream fis) throws Exception {
        String nomeMetodo = ".getListAccountFromFile() ";
        LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

        List<String> listAccount = new ArrayList<String>();

        try {
            // Read file excel
            Workbook workbook = WorkbookFactory.create(fis);
            Sheet sheet = workbook.getSheetAt(0);

            Iterator<Row> iteratorRow = sheet.iterator();

            while (iteratorRow.hasNext()) {
                Row row = iteratorRow.next();
                Iterator<Cell> iteratorCell = row.cellIterator();
                while (iteratorCell.hasNext()) {
                    Cell cell = iteratorCell.next();
                    String cellValue = CommonUtil.getCellValue(cell);
                    int columnIndex = cell.getColumnIndex() + 1;
                    if (cellValue != null) {
                        if (columnIndex == 1) {
                            LOG.info(LOG.getName() + nomeMetodo + "cellValue = " + cellValue);
                            listAccount.add(cellValue);
                        }
                    }
                }
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
        return listAccount;
    }
}
