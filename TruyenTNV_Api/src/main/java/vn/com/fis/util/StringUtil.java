package vn.com.fis.util;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Vector;

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

	public static String[] toStringArray(String strSource, String strSeparator) {
		Vector vtReturn = toStringVector(strSource, strSeparator);
		String[] strReturn = new String[vtReturn.size()];
		for (int iIndex = 0; iIndex < strReturn.length; iIndex++) {
			strReturn[iIndex] = ((String) vtReturn.elementAt(iIndex));
		}
		return strReturn;
	}

	public static Vector toStringVector(String strSource, String strSeparator) {
		Vector vtReturn = new Vector();
		if (strSource.length() > 0) {
			int iIndex = 0;
			int iLastIndex = 0;
			while ((iIndex = strSource.indexOf(strSeparator, iLastIndex)) >= 0) {
				vtReturn.addElement(strSource.substring(iLastIndex, iIndex).trim());
				iLastIndex = iIndex + strSeparator.length();
			}
			if (iLastIndex <= strSource.length()) {
				vtReturn.addElement(strSource.substring(iLastIndex, strSource.length()).trim());
			}
		}
		return vtReturn;
	}

	public static String[] toStringArray(String strSource) {
		return toStringArray(strSource, ",");
	}

	public static Vector toStringVector(String strSource) {
		return toStringVector(strSource, ",");
	}

	public static Vector toStringVector(String[] strSource) {
		Vector vtReturn = new Vector();
		for (int iIndex = 0; iIndex < strSource.length; iIndex++) {
			vtReturn.addElement(strSource[iIndex]);
		}
		return vtReturn;
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

	public static String unicodeToTCVN(String strSource) {
		return convertCharForm(strSource,
				"��?�?�???????????��???�?????��???��?�?�???????????��??????????�????��?�?�???????????��???�?????��???��?�?�???????????��??????????�????",
				"��������������������������������������������������������������������������������������������������������������������������������������");
	}

	public static String tcvnToUnicode(String strSource) {
		return convertCharForm(strSource,
				"��������������������������������������������������������������������������������������������������������������������������������������",
				"��?�?�???????????��???�?????��???��?�?�???????????��??????????�????��?�?�???????????��???�?????��???��?�?�???????????��??????????�????");
	}

	public static String clearHornUnicode(String strSource) {
		return convertCharForm(strSource,
				"��?�?�???????????��???�?????��???��?�?�???????????��??????????�????��?�?�???????????��???�?????��???��?�?�???????????��??????????�????",
				"aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD");
	}

	public static String clearHornTCVN(String strSource) {
		return convertCharForm(strSource,
				"��������������������������������������������������������������������������������������������������������������������������������������",
				"aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD");
	}

	public static String pronounceVietnameseNumber(long lNumber) {
		String[] strUnit = { "", "ngh�n", "tri?u", "t?", "ngh�n t?", "tri?u t?", "ngh�n tri?u t?", "t? t?" };

		byte[] btDecimalNumber = new byte[30];
		byte btDecimalCount = 0;
		boolean bNegative = lNumber < 0L;
		if (bNegative) {
			lNumber = -lNumber;
		}
		byte btValue;
		for (; lNumber > 0L; btDecimalNumber[btDecimalCount] = btValue) {
			btValue = (byte) (int) (lNumber - 10L * (lNumber / 10L));
			lNumber /= 10L;
			btDecimalCount = (byte) (btDecimalCount + 1);
		}
		String strReturn = "";
		int iUnitIndex = 0;
		while ((iUnitIndex < strUnit.length) && (iUnitIndex * 3 < btDecimalCount)) {
			String str = pronounceVietnameseNumber(btDecimalNumber[(iUnitIndex * 3)],
					btDecimalNumber[(iUnitIndex * 3 + 1)], btDecimalNumber[(iUnitIndex * 3 + 2)],
					iUnitIndex * 3 + 2 < btDecimalCount);
			if (str.length() > 0) {
				if (strReturn.length() > 0) {
					strReturn = str + " " + strUnit[iUnitIndex] + " " + strReturn;
				} else {
					strReturn = str + " " + strUnit[iUnitIndex];
				}
			}
			iUnitIndex++;
		}
		if (bNegative) {
			strReturn = "�m " + strReturn;
		}
		return strReturn;
	}

	private static String pronounceVietnameseNumber(byte bUnit, byte bTen, byte bHundred, boolean bMax) {
		if ((bUnit == 0) && (bTen == 0) && (bHundred == 0)) {
			return "";
		}
		String[] strUnitSuffix = { "", "m?t", "hai", "ba", "t?", "l?m", "s�u", "b?y", "t�m", "ch�n" };
		String[] strUnitTen = { "", "m??i m?t", "m??i hai", "m??i ba", "m??i b?n", "m??i l?m", "m??i s�u", "m??i b?y",
				"m??i t�m", "m??i ch�n" };
		String[] strUnit = { "", "m?t", "hai", "ba", "b?n", "n?m", "s�u", "b?y", "t�m", "ch�n" };
		String[] strTenFirst = { "", "m??i m?t", "hai m??i m?t", "ba m??i m?t", "b?n m??i m?t", "n?m m??i m?t",
				"s�u m??i m?t", "b?y m??i m?t", "t�m m??i m?t", "ch�n m??i m?t" };
		String[] strTen = { "", "m??i", "hai m??i", "ba m??i", "b?n m??i", "n?m m??i", "s�u m??i", "b?y m??i",
				"t�m m??i", "ch�n m??i" };
		String[] strHundred = { "kh�ng tr?m", "m?t tr?m", "hai tr?m", "ba tr?m", "b?n tr?m", "n?m tr?m", "s�u tr?m",
				"b?y tr?m", "t�m tr?m", "ch�n tr?m" };
		String strReturn = "";
		if ((bMax) || (bHundred > 0)) {
			strReturn = strHundred[bHundred];
		}
		if (bTen > 0) {
			if (strReturn.length() > 0) {
				strReturn = strReturn + " ";
			}
			if (bUnit > 0) {
				if (bTen == 1) {
					strReturn = strReturn + strUnitTen[bUnit];
				} else if (bUnit == 1) {
					strReturn = strReturn + strTenFirst[bTen];
				} else {
					strReturn = strReturn + strTen[bTen] + " " + strUnitSuffix[bUnit];
				}
			} else {
				strReturn = strReturn + strTen[bTen];
			}
		} else if (bUnit > 0) {
			if (strReturn.length() > 0) {
				strReturn = strReturn + " linh " + strUnit[bUnit];
			} else {
				strReturn = strUnit[bUnit];
			}
		}
		return strReturn;
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

	public static String join(Vector vt, String delim) {
		if ((vt == null) || (vt.size() == 0)) {
			return "";
		}
		StringBuffer sbuf = new StringBuffer();
		for (int i = 0; i < vt.size(); i++) {
			sbuf.append(nvl(vt.elementAt(i), ""));
			if (i < vt.size() - 1) {
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
}
