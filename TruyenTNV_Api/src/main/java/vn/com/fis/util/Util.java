package vn.com.fis.util;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.Locale;

public class Util {
	private static boolean gblnflag;
	public static final Locale LOCALES = new Locale("en", "US", "");
	public static final NumberFormat FORM_NUM = NumberFormat.getIntegerInstance(LOCALES);
	public static final DecimalFormat FORM_DECIMAL = (DecimalFormat) FORM_NUM;

	/**
	 * Description: Chuyen tu so sang chu
	 * 
	 * @param pdblNumber:
	 *            so vao
	 * @param pstrUnit_Name:
	 *            Don vi tinh (Dong)
	 * @param pstrSubUnit_Name:
	 *            Don vi tinh sau dau phay
	 * @param pstrCurr:
	 *            tu sau cung (chan)
	 * @return Dang chu cua so
	 * @throws
	 *             <p>
	 *             func used: numberToWord1, numberToWord2, numberToWord3
	 *             </p>
	 *             <p>
	 *             table used:
	 *             </p>
	 *             <p>
	 *             class used:
	 *             </p>
	 */

	public static String numberToWord(double pdblNumber, String pstrUnit_Name, String pstrSubUnit_Name, String pstrCurr) {
		String vstrWords_Dec, vstrNumber9, vstrWords_Number;
		String vstrWord_Sign = "", vstrWords_result;
		// String vstrRet;
		int vintWords_Len, vintPos;

		if (pdblNumber == 0)
			return "Không đồng";

		if (pdblNumber < 0) {
			vstrWord_Sign = "Trừ ";
			vstrWords_Number = StringUtil.format(-pdblNumber, "##.00");
		} else
			vstrWords_Number = StringUtil.format(pdblNumber, "##.00");

		vintPos = ("" + vstrWords_Number).indexOf('.');
		if (vintPos == -1)
			vintPos = ("" + vstrWords_Number).indexOf(',');

		vstrWords_Dec = ("" + vstrWords_Number).substring(vintPos + 1);
		vstrWords_Number = ("" + vstrWords_Number).substring(0, vintPos);
		vintWords_Len = ("" + vstrWords_Number).length();

		vstrNumber9 = vintWords_Len < 9 ? vstrWords_Number : ("" + vstrWords_Number).substring(vintWords_Len - 9);

		vstrWords_result = numberToWord1(vstrNumber9);

		vintWords_Len = vintWords_Len - 9;
		while (vintWords_Len > 0) {
			vstrWords_Number = ("" + vstrWords_Number).substring(0, vintWords_Len);
			vstrNumber9 = vintWords_Len < 9 ? vstrWords_Number : ("" + vstrWords_Number).substring(vintWords_Len - 9);
			gblnflag = true;
			vstrWords_result = numberToWord1(vstrNumber9) + " tỷ" + vstrWords_result;
			vintWords_Len = vintWords_Len - 9;
		}

		if (Integer.parseInt(vstrWords_Dec) == 0)
			vstrWords_result = vstrWords_result + " " + pstrUnit_Name + pstrCurr;// + "Chẵn.";
		else if (!pstrSubUnit_Name.equals(""))
			vstrWords_result = vstrWords_result + " " + pstrUnit_Name + " và" + numberToWord1(vstrWords_Dec) + " " + pstrSubUnit_Name + "" + pstrCurr;
		else
			vstrWords_result = vstrWords_result + " " + pstrUnit_Name + " và " + "0." + vstrWords_Dec + "" + pstrCurr;

		// End If
		vstrWords_result = vstrWords_result.trim();
		return vstrWord_Sign + vstrWords_result.substring(0, 1).toUpperCase() + vstrWords_result.substring(1);
	}

	private static String numberToWord1(String pstrWords_Number1) {
		String vstrWords_result, vstrNumber123;
		int vintWords_Len;

		if (Integer.parseInt(pstrWords_Number1) == 0)
			return "";

		pstrWords_Number1 = pstrWords_Number1.trim();
		vintWords_Len = ("" + pstrWords_Number1).length();
		if (vintWords_Len > 9)
			return "";

		vstrNumber123 = vintWords_Len < 3 ? pstrWords_Number1 : ("" + pstrWords_Number1).substring(vintWords_Len - 3);
		vstrWords_result = numberToWord2(vstrNumber123);

		vintWords_Len = vintWords_Len - 3;
		if (vintWords_Len <= 0) {
			return vstrWords_result;
		}
		pstrWords_Number1 = ("" + pstrWords_Number1).substring(0, vintWords_Len);
		vstrNumber123 = vintWords_Len < 3 ? pstrWords_Number1 : ("" + pstrWords_Number1).substring(vintWords_Len - 3);
		if (Integer.parseInt(vstrNumber123) > 0) {
			gblnflag = true;
			vstrWords_result = numberToWord2(vstrNumber123) + " nghìn" + vstrWords_result;
		}

		vintWords_Len = vintWords_Len - 3;
		if (vintWords_Len <= 0)
			return vstrWords_result;

		pstrWords_Number1 = ("" + pstrWords_Number1).substring(0, vintWords_Len);
		vstrNumber123 = vintWords_Len < 3 ? pstrWords_Number1 : ("" + pstrWords_Number1).substring(vintWords_Len - 3);
		if (Integer.parseInt(vstrNumber123) > 0) {
			gblnflag = true;
			vstrWords_result = numberToWord2(vstrNumber123) + " triệu" + vstrWords_result;
		}
		return vstrWords_result;

	}

	private static String numberToWord2(String pstrWords_Number2) {
		String vstrHundreds_Name, vstrTens_Name, vstrUnits_Name;
		String vstrWord_Number1 = "", vstrWord_Number2 = "", vstrWord_Number3 = "";
		int vintWords_Len;

		if (Integer.parseInt(pstrWords_Number2) == 0)
			return "";

		vintWords_Len = ("" + pstrWords_Number2).length();
		vstrHundreds_Name = "";
		vstrTens_Name = "";
		vstrUnits_Name = "";

		switch (vintWords_Len) {
		case 3:
			vstrWord_Number1 = pstrWords_Number2.substring(0, 1);
			vstrWord_Number2 = pstrWords_Number2.substring(1, 2);
			vstrWord_Number3 = pstrWords_Number2.substring(2, 3);
			break;
		case 2:
			vstrWord_Number2 = pstrWords_Number2.substring(0, 1);
			vstrWord_Number3 = pstrWords_Number2.substring(1, 2);
			break;
		case 1:
			vstrWord_Number3 = pstrWords_Number2.substring(0, 1);
			break;
		}

		if (!vstrWord_Number1.equals(""))
			vstrHundreds_Name = numberToWord3(vstrWord_Number1) + " trăm";

		if (!vstrWord_Number2.equals("")) {
			switch (vstrWord_Number2.charAt(0)) {
			case '0':
				if (!vstrWord_Number3.equals("0") && vintWords_Len > 2)
					vstrTens_Name = " lẻ";
				else
					vstrTens_Name = "";
				break;
			case '1':
				vstrTens_Name = " mười";
				break;
			default:
				vstrTens_Name = numberToWord3(vstrWord_Number2) + " mươi";
			}
		}

		switch (vstrWord_Number3.charAt(0)) {
		case '0':
			vstrUnits_Name = "";
			break;
		case '1':
			if (gblnflag) {
				vstrUnits_Name = " một";
				gblnflag = false;
			} else if (vintWords_Len == 1)
				vstrUnits_Name = " mốt";
			else
				vstrUnits_Name = " một";
			break;
		case '5':
			if (!vstrWord_Number2.equals("0") && vintWords_Len > 1)
				vstrUnits_Name = " lăm";
			else
				vstrUnits_Name = " năm";
			break;
		default:
			vstrUnits_Name = numberToWord3(vstrWord_Number3);
		}
		return vstrHundreds_Name + vstrTens_Name + vstrUnits_Name;
	}

	private static String numberToWord3(String pstrWord_Number) {
		switch (pstrWord_Number.charAt(0)) {
		case '0':
			return " không";
		case '1':
			return " một";
		case '2':
			return " hai";
		case '3':
			return " ba";
		case '4':
			return " bốn";
		case '5':
			return " năm";
		case '6':
			return " sáu";
		case '7':
			return " bảy";
		case '8':
			return " tám";
		case '9':
			return " chín";
		}
		return "";
	}

	public static boolean isNumber(String strSource) {
		return isNumber(strSource, NumberFormat.getNumberInstance());
	}

	public static boolean isNumber(String strSource, String strFormat) {
		DecimalFormat fmt = new DecimalFormat(strFormat);
		return isNumber(strSource, fmt);
	}

	public static boolean isNumber(String strSource, NumberFormat fmt) {
		try {
			ParsePosition position = new ParsePosition(0);
			if ((fmt.parse(strSource, position) == null) || (position.getIndex() < strSource.length())) {
				return false;
			}
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
