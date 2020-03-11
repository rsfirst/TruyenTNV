package vn.com.fis.model.cinvoice;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ToolUtil {
    public static String parseDate(Date date, String strPattem) {
        SimpleDateFormat sdf = new SimpleDateFormat(strPattem);
        String dt = sdf.format(date);
        return dt;
    }

    public static String formatMsisdn84(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();
        if (msisdn.startsWith("0")) {
            msisdnValue = "84" + msisdn.substring(1);
        } else if (msisdn.startsWith("84")) {
            msisdnValue = msisdn;
        } else {
            msisdnValue = "84" + msisdn;
        }

        if (msisdnValue.length() < 11 || msisdnValue.length() > 13) {
            msisdnValue = null;
        }
        return msisdnValue;
    }

    public static String formatMsisdn0(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();

        if (msisdn.startsWith("84")) {
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
    
    public static String formatMsisdnWithSearch(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();

        if (msisdn.startsWith("84")) {
            msisdnValue = "0" + msisdn.substring(2);
        } else if (!msisdn.startsWith("0")) {
            msisdnValue = "0" + msisdn;
        } else {
            msisdnValue = msisdn;
        }

        return msisdnValue;
    }

    public static String formatMsisdn(String msisdn) {
        String msisdnValue = null;

        if (msisdn == null || "".equals(msisdn.trim())) {
            return msisdnValue;
        }

        msisdn = msisdn.trim();
        if (msisdn.startsWith("0")) {
            msisdnValue = msisdn.substring(1);
        } else if (msisdn.startsWith("84")) {
            msisdnValue = msisdn.substring(2);
        } else {
            msisdnValue = msisdn;
        }

        if (msisdnValue.length() < 9 || msisdnValue.length() > 10) {
            msisdnValue = null;
        }
        return msisdnValue;
    }
}
