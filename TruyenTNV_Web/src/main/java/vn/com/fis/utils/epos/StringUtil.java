package vn.com.fis.utils.epos;

import java.lang.reflect.Field;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class StringUtil {
	public static final int ALIGN_CENTER = 0;
	public static final int ALIGN_LEFT = 1;
	public static final int ALIGN_RIGHT = 2;

	public static String format(Date dtImput, String strPattern) {
		if (dtImput == null) {
			return null;
		}
		SimpleDateFormat fmt = new SimpleDateFormat(strPattern);
		return fmt.format(dtImput);
	}

	public static String format(long lngNumber, String strPattern) {
		DecimalFormat fmt = new DecimalFormat(strPattern);
		return fmt.format(lngNumber);
	}

	public static String format(double dblNumber, String strPattern) {
		DecimalFormat fmt = new DecimalFormat(strPattern);
		return fmt.format(dblNumber);
	}

	public static String replaceAll(String strSrc, String strFind, String strReplace) {
		if ((strFind == null) || (strFind.length() == 0)) {
			return strSrc;
		}
		int iLocation = 0;
		int iPrevLocation = 0;
		StringBuffer strResult = new StringBuffer();
		while ((iLocation = strSrc.indexOf(strFind, iLocation)) >= 0) {
			strResult.append(strSrc.substring(iPrevLocation, iLocation));
			strResult.append(strReplace);
			iLocation += strFind.length();
			iPrevLocation = iLocation;
		}
		strResult.append(strSrc.substring(iPrevLocation, strSrc.length()));
		return strResult.toString();
	}

	public static String replaceAll(String strSrc, String strFind, String strReplace, int iMaxReplacement) {
		int iLocation = 0;
		if ((strFind == null) || (strFind.length() == 0)) {
			return strSrc;
		}
		int iPrevLocation = 0;
		int iCount = 0;
		StringBuffer strResult = new StringBuffer();
		while (((iLocation = strSrc.indexOf(strFind, iLocation)) >= 0) && (iCount < iMaxReplacement)) {
			strResult.append(strSrc.substring(iPrevLocation, iLocation));
			strResult.append(strReplace);
			iCount++;
			iLocation += strFind.length();
			iPrevLocation = iLocation;
		}
		strResult.append(strSrc.substring(iPrevLocation, strSrc.length()));
		return strResult.toString();
	}

	public static String replaceAll(String strSrc, String strFind, String[] strReplace) {
		int iLocation = 0;
		if ((strFind == null) || (strFind.length() == 0)) {
			return strSrc;
		}
		int iPrevLocation = 0;
		int iCount = 0;
		StringBuffer strResult = new StringBuffer();
		while (((iLocation = strSrc.indexOf(strFind, iLocation)) >= 0) && (iCount < strReplace.length)) {
			strResult.append(strSrc.substring(iPrevLocation, iLocation));
			strResult.append(strReplace[iCount]);
			iCount++;
			iLocation += strFind.length();
			iPrevLocation = iLocation;
		}
		strResult.append(strSrc.substring(iPrevLocation, strSrc.length()));
		return strResult.toString();
	}

	public static String replaceAllIgnoreCase(String strSrc, String strFind, String strReplace) {
		if ((strFind == null) || (strFind.length() == 0)) {
			return strSrc;
		}
		String strSrcUpper = strSrc.toUpperCase();
		strFind = strFind.toUpperCase();

		int iLocation = 0;
		int iPrevLocation = 0;
		StringBuffer strResult = new StringBuffer();
		while ((iLocation = strSrcUpper.indexOf(strFind, iLocation)) >= 0) {
			strResult.append(strSrc.substring(iPrevLocation, iLocation));
			strResult.append(strReplace);
			iLocation += strFind.length();
			iPrevLocation = iLocation;
		}
		strResult.append(strSrc.substring(iPrevLocation, strSrc.length()));
		return strResult.toString();
	}

	public static String nvl(Object objInput, String strNullValue) {
		if (objInput == null) {
			return strNullValue;
		}
		return objInput.toString();
	}

	public static int indexOfLetter(String strSource, int iOffset) {
		while (iOffset < strSource.length()) {
			char c = strSource.charAt(iOffset);
			if (c > ' ') {
				return iOffset;
			}
			iOffset++;
		}
		return -1;
	}

	public static int indexOfSpace(String strSource, int iOffset) {
		while (iOffset < strSource.length()) {
			char c = strSource.charAt(iOffset);
			if (c > ' ') {
				iOffset++;
			} else {
				return iOffset;
			}
		}
		return -1;
	}

	public static int countSymbol(String strSource, String chrSymbol, int iOffset) {
		if ((chrSymbol == null) || (chrSymbol.length() == 0)) {
			return 0;
		}
		int iCount = 0;
		while ((iOffset = strSource.indexOf(chrSymbol, iOffset) + 1) > 0) {
			iCount++;
		}
		return iCount;
	}

	public static String convertCharForm(String strSource, String strCharformSource, String strCharformDestination) {
		if (strSource == null) {
			return null;
		}
		int iLength = strSource.length();
		int iResult = 0;
		StringBuffer strReturn = new StringBuffer();
		for (int iIndex = 0; iIndex < iLength; iIndex++) {
			char c = strSource.charAt(iIndex);
			if ((iResult = strCharformSource.indexOf(c)) >= 0) {
				strReturn.append(strCharformDestination.charAt(iResult));
			} else {
				strReturn.append(c);
			}
		}
		return strReturn.toString();
	}

	public static String align(String str, int iAlignment, int iLength, char c) {
		if (str == null) {
			return null;
		}
		if (str.length() > iLength) {
			return str.substring(0, iLength);
		}
		StringBuffer buf = new StringBuffer();
		if (iAlignment == 0) {
			str = lpad(str, str.length() + (iLength - str.length()) / 2, c);
			return rpad(str, iLength, c);
		}
		if (iAlignment == 2) {
			return lpad(str, iLength, c);
		}
		if (iAlignment == 1) {
			return rpad(str, iLength, c);
		}
		return buf.toString();
	}

	public static String align(String str, int iAlignment, int iLength) {
		return align(str, iAlignment, iLength, ' ');
	}

	public static String lpad(String str, int iLength) {
		return lpad(str, iLength, ' ');
	}

	public static String rpad(String str, int iLength) {
		return rpad(str, iLength, ' ');
	}

	public static String lpad(String str, int iLength, char c) {
		if (str == null) {
			return null;
		}
		int iCount = iLength - str.length();
		if (iCount > 0) {
			return createMonoString(c, iCount) + str;
		}
		return str;
	}

	public static String rpad(String str, int iLength, char c) {
		if (str == null) {
			return null;
		}
		int iCount = iLength - str.length();
		if (iCount > 0) {
			return str + createMonoString(c, iCount);
		}
		return str;
	}

	public static String createMonoString(char c, int iLength) {
		StringBuffer buf = new StringBuffer();
		for (int iIndex = 0; iIndex < iLength; iIndex++) {
			buf.append(c);
		}
		return buf.toString();
	}

	public static String join(String[] items, String delim) {
		if ((items == null) || (items.length == 0)) {
			return "";
		}
		StringBuffer sbuf = new StringBuffer();
		for (int i = 0; i < items.length; i++) {
			sbuf.append(items[i]);
			if (i < items.length - 1) {
				sbuf.append(delim);
			}
		}
		return sbuf.toString();
	}

	public static String capitalize(String str) {
		int iOffset = 0;
		StringBuffer buf = new StringBuffer();
		while ((iOffset = indexOfLetter(str, buf.length())) >= 0) {
			buf.append(str.substring(buf.length(), iOffset));
			buf.append(Character.toUpperCase(str.charAt(buf.length())));
			iOffset = indexOfSpace(str, buf.length());
			if (iOffset < 0) {
				buf.append(str.substring(buf.length(), str.length()).toLowerCase());
				break;
			}
			buf.append(str.substring(buf.length(), iOffset).toLowerCase());
		}
		return buf.toString();
	}

	public static String byteArrayToHexString(byte[] btValue, int iOffset, int iLength) {
		int iLastOffset = iOffset + iLength;
		if ((btValue.length < iLastOffset) || (iLength < 1)) {
			return "";
		}
		StringBuffer value = new StringBuffer();
		for (int i = iOffset; i < iLastOffset; i++) {
			byte h = (byte) ((btValue[i] & 0xF0) >>> 4);
			if (h < 10) {
				h = (byte) (48 + h);
			} else {
				h = (byte) (65 + h - 10);
			}
			byte l = (byte) (btValue[i] & 0xF);
			if (l < 10) {
				l = (byte) (48 + l);
			} else {
				l = (byte) (65 + l - 10);
			}
			value.append((char) h);
			value.append((char) l);
		}
		return value.toString();
	}

	public byte[] hexStringToByteArray(String s) throws Exception {
		if (s.length() % 2 != 0) {
			throw new Exception("Invalid hex string value");
		}
		int len = s.length() >> 1;
		byte[] bt = new byte[len];

		s = s.toUpperCase();
		for (int i = 0; i < len; i++) {
			int pos = i << 1;
			byte h = (byte) s.charAt(pos);
			if (h >= 65) {
				h = (byte) (h - 65 + 10);
			} else {
				h = (byte) (h - 48);
			}
			byte l = (byte) s.charAt(pos + 1);
			if (l >= 65) {
				l = (byte) (l - 65 + 10);
			} else {
				l = (byte) (l - 48);
			}
			bt[i] = h;
			int tmp137_135 = i;
			byte[] tmp137_134 = bt;
			tmp137_134[tmp137_135] = ((byte) (tmp137_134[tmp137_135] << 4));
			int tmp146_144 = i;
			byte[] tmp146_143 = bt;
			tmp146_143[tmp146_144] = ((byte) (tmp146_143[tmp146_144] | l));
		}
		return bt;
	}

	public static String getIpClient(Object obj) throws Exception {
		String ip = "";
		try {
			Class<?> clazz = obj.getClass();
			Field field = org.springframework.util.ReflectionUtils.findField(clazz, "remoteAddress");
			org.springframework.util.ReflectionUtils.makeAccessible(field);
			ip = field.get(obj).toString();
		} catch (Exception e) {
			e.printStackTrace();
			ip = "";
		}
		return ip;
	}
}
