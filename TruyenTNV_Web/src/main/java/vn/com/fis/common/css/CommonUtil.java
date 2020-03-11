package vn.com.fis.common.css;

import com.fss.util.AppException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.multipart.MultipartFile;
import vn.com.fis.model.css.AgencyObject;
import vn.com.fis.model.css.AttachmentDataObject;
import vn.com.fis.model.css.PrePaidCusSubBatch;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.mnpcm.Constants;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.Normalizer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;

/**
 * The Class CommonUtil.
 */
@Configuration
public class CommonUtil {

    /**
     * The Constant LOG.
     */
    private static final Logger LOG = LoggerFactory.getLogger(CommonUtil.class);

    /**
     * Checks if is empty.
     *
     * @param input the input
     * @return true, if is empty
     */
    public static boolean isEmpty(String input) {
        boolean result = false;
        if (input == null || input.trim().equals("")) {
            result = true;
        }
        return result;
    }

    public static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

    public static String seqZeroPrefix(Number seq, int length) {
        String str = String.valueOf(seq);
        int remainLength = length - str.length();

        String zeroPrefix = "";
        if (remainLength > 0) {
            for (int i = 0; i < remainLength; i++) {
                zeroPrefix += "0";
            }
        }

        return zeroPrefix + str;
    }

    public String buildDinamicWhereClause(String whereClause, String field, String operatorCompare, Object value, String conjucntion) {
        String result = "";
        if (CommonUtil.isEmpty(whereClause)) {
            result = buildCompareExpress(field, operatorCompare, value) + conjucntion;
        } else {
            result = whereClause + conjucntion + buildCompareExpress(field, operatorCompare, value);
        }
        return result;
    }

    public String buildCompareExpress(String field, String operatorCompare, Object value) {
        String strValue = "";
        if (value instanceof Integer || value instanceof Long || value instanceof Double) {
            strValue = String.valueOf(value);
        }
        if (value instanceof String) {
            strValue = "'" + (String) value + "'";
        }
        return "(" + field + operatorCompare + strValue + ")";
    }

    /**
     * Gets the date.
     *
     * @return the date
     */
    public static String getDate() {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("yyyyMMdd");
        return ft.format(dNow);
    }

    public static void checkLengthAndResize(String filePath) throws Exception {
        File f = new File(filePath);
        int imgLength = (int) f.length();
        String[] tmp = f.getName().split("\\.");
        if (imgLength > 204800) {
            try {
                // Execute resize image file
                BufferedImage originalImage = ImageIO.read(f);
                if (originalImage != null) {
                    int type = originalImage.getType() == 0 ? BufferedImage.TYPE_INT_ARGB : originalImage.getType();
                    BufferedImage resizeImageHintPng = resizeImageWithHint(originalImage, type);
                    if (tmp[tmp.length - 1].toUpperCase().equals(CommonConstant.JPG.toUpperCase())) {
                        ImageIO.write(resizeImageHintPng, CommonConstant.JPG, new File(filePath));
                    } else {
                        ImageIO.write(resizeImageHintPng, CommonConstant.PNG, new File(filePath));
                    }
                }

            } catch (IOException ex) {
                ex.printStackTrace();
                throw new Exception(ex.getMessage());
            }
        }
    }

    private static BufferedImage resizeImageWithHint(BufferedImage originalImage, int type) {

        BufferedImage resizedImage = new BufferedImage(CommonConstant.IMG_WIDTH, CommonConstant.IMG_HEIGHT, type);
        Graphics2D g = resizedImage.createGraphics();
        g.drawImage(originalImage, 0, 0, CommonConstant.IMG_WIDTH, CommonConstant.IMG_HEIGHT, null);
        g.dispose();
        g.setComposite(AlphaComposite.Src);

        g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
        g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

        return resizedImage;
    }

    public static boolean inRangeValue(String item, String fromValue, String toValue) throws AppException, NumberFormatException {
        boolean inRange = true;

        if (compareNumbericInString(fromValue, toValue) == true) {
            throw new AppException(CommonConstant.INPUT_SERIAL_ERROR_CODE, CommonConstant.INPUT_SERIAL_ERROR_DES);
        }
        if (compareNumbericInString(fromValue, item) == true) {
            inRange = false;
        } else if (compareNumbericInString(toValue, item) == false) {
            inRange = false;
        }

        return inRange;
    }

    public static boolean inRangeValue(String item, String fromValue, String toValue, String gQuantity) throws AppException, NumberFormatException {
        boolean inRange = true;
        if (CommonUtil.isEmpty(gQuantity)) {
            if (compareNumbericInString(fromValue, toValue) == true) {
                throw new AppException(CommonConstant.INPUT_SERIAL_ERROR_CODE, CommonConstant.INPUT_SERIAL_ERROR_DES);
            }
            if (compareNumbericInString(fromValue, item, "-1") == true) {
                inRange = false;
            } else if (compareNumbericInString(toValue, item) == false) {
                inRange = false;
            }
        } else {
            if (compareNumbericInString(fromValue, item, "-1") == true) {
                inRange = false;
            } else if (compareNumbericInString(fromValue, item, gQuantity) == false) {
                inRange = false;
            }
        }
        return inRange;
    }

    /**
     * Purpose: compare
     *
     * @param item
     * @param value
     * @return true - item greater than value, false -item less than value
     * @throws AppException
     */
    public static boolean compareNumbericInString(String item, String value) throws NumberFormatException {
        return new BigInteger(item).compareTo(new BigInteger(value)) >= 0;
    }

    public static boolean compareNumbericInString(String item, String value, String gQuantity) throws NumberFormatException {
        return new BigInteger(item).add(new BigInteger(gQuantity)).add(new BigInteger("-1")).compareTo(new BigInteger(value)) >= 0;
    }

    public static boolean compareString(String str1, String str2) {
        return (str1 == null ? str2 == null : str1.equals(str2));
    }

    public static String getCellValue(Cell cell) {
        DecimalFormat decimalFormat = new DecimalFormat(CommonConstant.DECIMAL_FORMAT);
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
                return cellValue;
            case 0:
                return decimalFormat.format(cell.getNumericCellValue()).replace(",", ".");
            case 4:
                return Boolean.toString(cell.getBooleanCellValue());
        }
        return null;
    }

    public static PrePaidCusSubBatch setValueFromFileExcel(PrePaidCusSubBatch subscriber, List<AttachmentDataObject> attachmentDataObject, String valueInput,
                                                           int index) {
//DatBD2
        AttachmentDataObject attachMentData = new AttachmentDataObject();
        String attachMentIdClient = getTimeStime();

        String value = valueInput.trim();
        switch (index) {
            case CommonConstant.INDEX_SUB_NAME:
                subscriber.setFullName(value);
                break;
            case CommonConstant.INDEX_SUB_BIRTHDAY:
                subscriber.setDob(value);
                break;
            //DatBD2
            case CommonConstant.INDEX_SUB_TYPECARD:
                subscriber.setType_card(value);
                break;

            case CommonConstant.INDEX_SUB_ISSUE_NUMBER:
                subscriber.setIdCard(value);
                break;
            case CommonConstant.INDEX_SUB_GENDER:
                if (Constants.GENDER_MALE.equalsIgnoreCase(value) || Constants.GENDER_MALE_STR.equalsIgnoreCase(value)) {
                    subscriber.setGender(Constants.GENDER_MALE);
                    subscriber.setGenderStr(Constants.GENDER_MALE_STR);
                } else if (Constants.GENDER_FEMALE.equalsIgnoreCase(value) || Constants.GENDER_FEMALE_STR.equalsIgnoreCase(value)) {
                    subscriber.setGender(Constants.GENDER_FEMALE);
                    subscriber.setGenderStr(Constants.GENDER_FEMALE_STR);
                } else {
                    subscriber.setGender(value);
                    subscriber.setGenderStr(value);
                }

                break;
            case CommonConstant.INDEX_SUB_CUSTOMER_TYPE:

                if (CommonConstant.CUSTOMER_TYPE_CONSUMER.equalsIgnoreCase(value) || CommonConstant.CUSTOMER_TYPE_CONSUMER_STR.equalsIgnoreCase(value)) {
                    subscriber.setCustomerType(CommonConstant.CUSTOMER_TYPE_CONSUMER);
                    subscriber.setCustomerTypeStr(CommonConstant.CUSTOMER_TYPE_CONSUMER_STR);
                } else if (CommonConstant.CUSTOMER_TYPE_FOREIGNER.equalsIgnoreCase(value) || CommonConstant.CUSTOMER_TYPE_FOREIGNER_STR.equalsIgnoreCase(value)) {
                    subscriber.setCustomerType(CommonConstant.CUSTOMER_TYPE_FOREIGNER);
                    subscriber.setCustomerTypeStr(CommonConstant.CUSTOMER_TYPE_FOREIGNER_STR);
                } else if (CommonConstant.CUSTOMER_TYPE_CORPORATE.equalsIgnoreCase(value) || CommonConstant.CUSTOMER_TYPE_CORPORATE_STR.equalsIgnoreCase(value)) {
                    subscriber.setCustomerType(CommonConstant.CUSTOMER_TYPE_CORPORATE);
                    subscriber.setCustomerTypeStr(CommonConstant.CUSTOMER_TYPE_CORPORATE_STR);
                } else if (CommonConstant.CUSTOMER_TYPE_EMPLOYEE.equalsIgnoreCase(value) || CommonConstant.CUSTOMER_TYPE_EMPLOYEE_STR.equalsIgnoreCase(value)) {
                    subscriber.setCustomerType(CommonConstant.CUSTOMER_TYPE_EMPLOYEE);
                    subscriber.setCustomerTypeStr(CommonConstant.CUSTOMER_TYPE_EMPLOYEE_STR);
                } else {
                    subscriber.setCustomerType(value);
                    subscriber.setCustomerTypeStr(value);
                }

                break;

            //DatBD2
            case CommonConstant.INDEX_SUB_SUB_USE_TYPE:
                subscriber.setSub_use_type(value);
                break;

            case CommonConstant.INDEX_SUB_COMPANY_NAME:
                subscriber.setCompanyName(value);
                break;
            //DatBD2
            case CommonConstant.INDEX_SUB_TYPE_CARD_COMPANY:
                subscriber.setType_Card_Company(value);
                break;
            case CommonConstant.INDEX_SUB_TAX_CODE:
                subscriber.setTaxCode(value);
                break;
            case CommonConstant.INDEX_SUB_ADDRESS:
                subscriber.setAddress(value);
                break;
            //DatBD2 update
            case CommonConstant.INDEX_SUB_ADDRESS_COMPANY:
                subscriber.setAddressCompany(value);
                break;
            //end
            case CommonConstant.INDEX_SUB_PROVINCE:
                subscriber.setProvince(value);
                break;
            case CommonConstant.INDEX_SUB_DISTRICT:
                subscriber.setDistrict(value);
                break;
            case CommonConstant.INDEX_SUB_MDN:
                subscriber.setMdn(value);
                break;
            case CommonConstant.INDEX_SUB_ICCID:
                subscriber.setSerial(value);
                break;
            case CommonConstant.INDEX_SUB_PLACE_OF_ISSUE:
                subscriber.setPlaceOfIssue(value);
                break;
            case CommonConstant.INDEX_SUB_DATE_OF_ISSUE:
                subscriber.setDateOfIssue(value);
                break;
            case CommonConstant.INDEX_SUB_COUNTRY:
                subscriber.setCountry(value);
                break;
            case CommonConstant.INDEX_SUB_IMGID:
                subscriber.setImg_id(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setAttachmentType("6");
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_IMGID_2:
                subscriber.setImg_id_2(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setAttachmentType("7");
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_BUS_PERMIT_NO_IMG1:
                subscriber.setBus_permit_no_img1(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("2");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            //DatBD2 update
            case CommonConstant.INDEX_SUB_BUS_PERMIT_NO_IMG2:
                subscriber.setBus_permit_no_img2(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("10");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_PARENT_IMG:
                subscriber.setParent_img(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("11");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            //end
            case CommonConstant.INDEX_SUB_AUTHORIZED_IMG:
                subscriber.setAuthorized_img(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setAttachmentType("1");
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_FILEID:
                subscriber.setFile_id(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("8");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_FILEID_2:
                subscriber.setFile_id_2(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("9");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_CONTRACT_IMG1:
                subscriber.setContract_img1(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("3");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_CONTRACT_IMG2:
                subscriber.setContract_img2(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("4");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;
            case CommonConstant.INDEX_SUB_CUST_IMG:
                subscriber.setCust_img(value);
                attachMentData.setFileName(value);
                attachMentData.setAttachmentType("5");
                attachMentData.setAttachMentIdClient(attachMentIdClient);
                attachMentData.setSize(CommonConstant.EMPTY);
                attachmentDataObject.add(attachMentData);
                break;

            default:
                break;
        }
        return subscriber;
    }

    public static AgencyObject setValueFromFileExcelAgent(AgencyObject agencyObj, String valueInput, int index) {

        String value = valueInput.trim();
        switch (index) {
            case CommonConstant.UPLOAD_ACTION:
                agencyObj.setAction(value);
                break;
            case CommonConstant.UPLOAD_SUBSCRIBER:
                agencyObj.setSubscriber(value);
                break;
            case CommonConstant.UPLOAD_PARENT_SUBSCRIBER:
                agencyObj.setParentSubscriber(value);
                break;
            case CommonConstant.UPLOAD_AGENT_TYPE:
                agencyObj.setAgentType(value);
                break;

            case CommonConstant.UPLOAD_AGENT_CODE:
                agencyObj.setAgentCode(value);
                break;
            case CommonConstant.UPLOAD_BUSINESS_NAME:
                agencyObj.setBusinessName(value);
                break;
            case CommonConstant.UPLOAD_TAXCODE:
                agencyObj.setTaxcode(value);
                break;
            case CommonConstant.UPLOAD_REGION:
                agencyObj.setRegion(value);
                break;
            case CommonConstant.UPLOAD_OWNER_NAME:
                agencyObj.setOwnerName(value);
                break;
            case CommonConstant.UPLOAD_SECRET_QUEST:
                agencyObj.setSecretQuest(value);
                break;
            case CommonConstant.UPLOAD_BIRTHDAY:
                agencyObj.setBirthday(value);
                break;
            case CommonConstant.UPLOAD_CONTACT_NUMBER:
                agencyObj.setContactNumber(value);
                break;
            case CommonConstant.UPLOAD_BUS_ADDRESS:
                agencyObj.setBusAddress(value);
                break;
            case CommonConstant.UPLOAD_ICCID:
                agencyObj.setIccid(value);
                break;
            case CommonConstant.UPLOAD_REPORT_EMAIL:
                agencyObj.setReportEmail(value);
                break;
            case CommonConstant.UPLOAD_EMAIL:
                agencyObj.setEmail(value);
                break;
            case CommonConstant.UPLOAD_PROVINCE:
                agencyObj.setProvince(value);
                break;
            case CommonConstant.UPLOAD_DISTRICT:
                agencyObj.setDistrict(value);
                break;
            case CommonConstant.UPLOAD_IDCARD:
                agencyObj.setIdcard(value);
                break;
            case CommonConstant.UPLOAD_ISSUE_DATE:
                agencyObj.setIssueDate(value);
                break;
            case CommonConstant.UPLOAD_ISSUE_PLACE:
                agencyObj.setIssuePlace(value);
                break;
            case CommonConstant.UPLOAD_TOWN:
                agencyObj.setTown(value);
                break;
            case CommonConstant.UPLOAD_LEVEL_AGENT:
                agencyObj.setLevelAgent(value);
                break;

            default:
                break;
        }
        return agencyObj;
    }

    public static String getTimeStime() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        return String.valueOf(timestamp.getTime());
    }

    // QuyetVu
    public static boolean isNumeric(String str) {
        for (char c : str.toCharArray()) {
            if (!Character.isDigit(c))
                return false;
        }
        return true;
    }

    // return true if file is image PNG or JPG.
    public static boolean checkFileIsImage(MultipartFile uploadFile) {
        String nomeMetodo = ".checkFileIsImage() ";
        LOG.info(LOG.getName() + nomeMetodo + " file name: " + uploadFile.getOriginalFilename() + CommonConstant.BEGIN_LOG);

        InputStream input;
        boolean resultCheck = false;
        try {
            input = uploadFile.getInputStream();

            String fileName = uploadFile.getOriginalFilename();
            String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length());
            if (!CommonConstant.PNG.equalsIgnoreCase(fileExt) && !CommonConstant.JPG.equalsIgnoreCase(fileExt)) {
                LOG.info(LOG.getName() + nomeMetodo + "Định dạng file : " + fileName + " không hợp lệ.");
                LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
                return false;
            }

            Image image = ImageIO.read(input);
            if (image == null) {
                resultCheck = false;
            } else {
                resultCheck = true;
            }
        } catch (IOException e) {
            LOG.error(e.getMessage(), e);
            LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
            return false;
        }

        LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
        return resultCheck;
    }

    public static Date convertTimestampToDate(Timestamp timeStampIn) {
        try {
            Timestamp ts = new Timestamp(System.currentTimeMillis());
            Date date = new Date(ts.getTime());
            return date;
        } catch (Exception e) {
            return null;
        }

    }

    public static String getDateFormateDDMMYYYY(String dateInput) {
        String dateResult = "";
        try {

            dateResult = dateInput.substring(0, 10);
            return dateResult;
        } catch (Exception e) {
            return dateResult;
        }

    }

    public static String convertFilePathToNoneUtf8(String filePath) {
        // LOG.info("Method convertFilePathToNoneUtf8 String filePath : "+filePath);
        String result = "";
        if (filePath != null && filePath.trim() != "") {
            String slash = "/";
            int lastDotIndex = filePath.lastIndexOf(slash);
            if (lastDotIndex > 0) {
                result = filePath.substring(lastDotIndex + 1, filePath.length()).trim();
                String textRemoveAccent = removeAccent(result);
                result = textRemoveAccent.replaceAll(" ", "_");
            }
        }
        // LOG.info("Method convertFilePathToNoneUtf8 Result convert : "+result);
        return result;
    }

    public static String removeAccent(String s) {
        String temp = Normalizer.normalize(s, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(temp).replaceAll("");
    }

    // validate date input
    public static boolean isDate(String psrtDate) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            sdf.setLenient(false);
            sdf.parse(psrtDate);
            return true;
        } catch (ParseException ex) {
            return false;
        }
    }

    public static String getLinkPretupServiceByType(Environment ev, String type) {
        String linkResult = "";
        String keyType = type.trim().toUpperCase();
        switch (keyType) {
            case "PINRESET":
            case "USERMOVEMENTREQ":
                linkResult = ev.getProperty("pretup.link.xmlgw");
                break;

            case "EXPINVALREQ":
            case "VIEWCUSER":
                linkResult = ev.getProperty("pretup.link.eposxmlgw");
                break;

            case "O2CINTREQ":
            case "O2CWDREQ":
            case "EXC2CTRFREQ":
            case "EXRCTRFREQ":
            case "EXUSRBALREQ":
            case "EXC2SCPNREQ":

                linkResult = ev.getProperty("pretup.link.epos");
                break;

            case "USERSRREQ":
            case "USERMODREQ":
            case "USERADDREQ":
            case "USERDELREQ":
                linkResult = ev.getProperty("pretup.link.optreceiver.extgw");
                break;

            default:
                break;
        }
        return linkResult.trim();
    }

}
