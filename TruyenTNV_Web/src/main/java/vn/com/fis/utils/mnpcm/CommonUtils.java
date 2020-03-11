package vn.com.fis.utils.mnpcm;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.springframework.stereotype.Component;
import vn.com.fis.model.mnpcm.AttachmentData;

import java.io.File;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Component
public class CommonUtils {

    public static String buildFileNameAttachMent(String documentType, String attachMentIdClient, String fileName) {
        String fileNameStore = attachMentIdClient + "_" + fileName;
        return fileNameStore;
    }

    public static boolean validateAttachMentDownloadFile(List<AttachmentData> listAttachMentFile, String folderServer) {
        boolean isAttachMent = true;
        if (listAttachMentFile.size() == 0) {
            return false;
        }
        if (listAttachMentFile != null && listAttachMentFile.size() > 0) {
            for (AttachmentData attachmentDataElement : listAttachMentFile) {
                if (attachmentDataElement != null) {
                    String folderFileIn = attachmentDataElement.getFolder();

                    // get file from directory
                    String fileNameAbsolute = CommonUtils.getFullFileName(folderServer, folderFileIn);
                    boolean isFile = new File(fileNameAbsolute).isFile();
                    if (!isFile) {
                        isAttachMent = false;
                        break;
                    }
                }
            }

        }
        return isAttachMent;
    }

    public static String getFullFileName(String folderFile, String urlFile) {
        String fileNameAbsolute = folderFile + urlFile;
        return fileNameAbsolute;
    }

    public static String getDateToStringDDMMYYYY(Date input) {
        String date = "";
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/M/yyyy");
            date = sdf.format(input);
        } catch (Exception e) {
            // LOG.error(e.getMessage());
            date = "";
        }
        return date;
    }

    public static String getAccountTypeStr(String accountTypeIn) {
        String accountType = "";
        if (Constants.ACCOUNT_TYPE_PREPAID.equals(accountTypeIn)) {
            accountType = Constants.ACCOUNT_TYPE_PREPAID_STR;
        }
        if (Constants.ACCOUNT_TYPE_POSTPAID.equals(accountTypeIn)) {
            accountType = Constants.ACCOUNT_TYPE_POSTPAID_STR;
        }
        return accountType;
    }

    public static String getDateToStringDDMMYYYYHHMMSS(Date input) {
        String date = "";
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/M/yyyy HH:mm:ss");
            date = sdf.format(input);
        } catch (Exception e) {
            date = "";
        }
        return date;
    }

    public static String StringUtilNVL(String value) {
        String result = (value == null) ? "" : value.trim();
        return result;
    }

    public static String getCellValue(Cell cell) {
        if (cell == null)
            return null;
        DecimalFormat decimalFormat = new DecimalFormat(Constants.DECIMAL_FORMAT);
        CellType cellType = cell.getCellTypeEnum();
        switch (cellType.getCode()) {
            case 1:
                String cellValue = cell.getStringCellValue();
                if ("null".equals(cellValue.toLowerCase()) || "".equals(cellValue.trim())) {
                    return null;
                }
                if (cellValue.startsWith("'")) {
                    cellValue = cellValue.substring(1).replace("'", "''");
                }
                cellValue = trimAdvanced(cellValue);
                return cellValue;
            case 0:
                return decimalFormat.format(cell.getNumericCellValue()).replace(",", ".");
            case 4:
                return Boolean.toString(cell.getBooleanCellValue());
        }
        return null;
    }

    public static String trimAdvanced(String value) {

        Objects.requireNonNull(value);

        int strLength = value.length();
        int len = value.length();
        int st = 0;
        char[] val = value.toCharArray();

        if (strLength == 0) {
            return "";
        }

        while ((st < len) && (val[st] <= ' ') || (val[st] == '\u00A0')) {

            st++;
            if (st == strLength) {
                break;
            }
        }
        while ((st < len) && (val[len - 1] <= ' ') || (val[len - 1] == '\u00A0')) {
            len--;
            if (len == 0) {
                break;
            }
        }

        return (st > len) ? "" : ((st > 0) || (len < strLength)) ? value.substring(st, len) : value;
    }

    public static boolean StringUtilIsNotEmpty(String value) {
        boolean result = true;
        String valueCheck = StringUtilNVL(value);
        if (Constants.EMPTY_VALUE.equalsIgnoreCase(valueCheck)) {
            result = false;
        }
        return result;
    }

    public static String formatMsisdn84(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();
        if (msisdn.startsWith("0")) {
            msisdnValue = "84" + msisdn.substring(1);
        } else if (msisdn.startsWith("84") && msisdn.length() > 9) {
            msisdnValue = msisdn;
        } else {
            msisdnValue = "84" + msisdn;
        }

        if (msisdnValue.length() < 11 || msisdnValue.length() > 13) {
            msisdnValue = null;
        }
        return msisdnValue;
    }

    public static String formatMsisdn84Validate(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();
        if (msisdn.startsWith("0")) {
            msisdnValue = "84" + msisdn.substring(1);
        } else if (msisdn.startsWith("84") && msisdn.length() > 9) {
            msisdnValue = msisdn;
        } else {
            msisdnValue = "84" + msisdn;
        }

        return msisdnValue;
    }

    public static String formatMsisdn0(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();

        if (msisdn.startsWith("84") && msisdn.length() > 9) {
            msisdnValue = "0" + msisdn.substring(2);
        } else if (!msisdn.startsWith("0")) {
            msisdnValue = "0" + msisdn;
        } else {
            msisdnValue = msisdn;
        }

        if (msisdnValue.length() < 10 || msisdnValue.length() > 11) {
            msisdnValue = null;
        }
        return msisdnValue;
    }


}
