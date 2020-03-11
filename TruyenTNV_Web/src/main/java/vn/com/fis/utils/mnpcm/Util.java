package vn.com.fis.utils.mnpcm;

import com.fss.util.AppException;
import com.fss.util.StringUtil;

import javax.swing.*;
import java.io.File;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Locale;
import java.util.Vector;

;

/**
 *
 * <p>
 * Title: Common Util
 * </p>
 * <p>
 * Copyright: Copyright (c) 2003
 * </p>
 * <p>
 * Company: FSS-FPT
 * </p>
 * 
 * @version 1.0
 *          <p>
 * 			Create by : Thonv
 *          </p>
 *          <p>
 * 			Create on : Unknown
 *          </p>
 *          <p>
 * 			Description: Nhung function, procedure dung chung cho ca client va
 *          server
 *          </p>
 *          <p>
 * 			Modify by :
 *          </p>
 *          <p>
 * 			Modify on :
 *          </p>
 *          <p>
 * 			Reason:
 *          </p>
 */

public class Util {
	private static boolean gblnflag;
	private static final String gstrUnicode = "àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ"
			+ "ÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ";
	private static final String gstrTCVN = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd"
			+ "AAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD";
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
	 * 			func
	 *             used: numberToWord1, numberToWord2, numberToWord3
	 *             </p>
	 *             <p>
	 * 			table used:
	 *             </p>
	 *             <p>
	 * 			class used:
	 *             </p>
	 */

	public static String numberToWord(double pdblNumber, String pstrUnit_Name, String pstrSubUnit_Name,
			String pstrCurr) {
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
			vstrWords_result = vstrWords_result + " " + pstrUnit_Name + pstrCurr;// +
																					// "Chẵn.";
		else if (!pstrSubUnit_Name.equals(""))
			vstrWords_result = vstrWords_result + " " + pstrUnit_Name + " và" + numberToWord1(vstrWords_Dec) + " "
					+ pstrSubUnit_Name + "" + pstrCurr;
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

	/**
	 * Description: Them ky tu trang vao ben phai chuoi
	 * 
	 * @param pstrSource:
	 *            chuoi dau vao
	 * @param pintLen:
	 *            Kich thuoc cua chuoi can co
	 * @return chuoi ban dau da them vao ky tu trang co kich thuoc = len
	 * @throws
	 *             <p>
	 * 			func
	 *             used:
	 *             </p>
	 *             <p>
	 * 			table used:
	 *             </p>
	 *             <p>
	 * 			class used:
	 *             </p>
	 */
	public static String rpad(String pstrSource, int pintLen) {
		String vstrDest = null;
		vstrDest = pstrSource;
		int vintWidthSource = pstrSource.length();
		while (vintWidthSource < pintLen) {
			vstrDest += " ";
			vintWidthSource += 1;// widthPad;
		}
		return vstrDest;
	}

	/**
	 * Description: Them ky tu trang vao ben trai chuoi
	 * 
	 * @param pstrSource:
	 *            chuoi dau vao
	 * @param pintLen:
	 *            Kich thuoc cua chuoi can co
	 * @return chuoi ban dau da them vao ky tu trang co kich thuoc = len
	 * @throws
	 *             <p>
	 * 			func
	 *             used:
	 *             </p>
	 *             <p>
	 * 			table used:
	 *             </p>
	 *             <p>
	 * 			class used:
	 *             </p>
	 */
	public static String lpad(String pstrSource, int pintLen) {
		// FontMetrics fm
		// =Toolkit.getDefaultToolkit().getFontMetrics(PrintUtil.FONT_PRINT8);
		// MessageBox.showMessageDialog(null, " charWith:" + fm.charWidth(' '));
		String vstrDest = null;
		vstrDest = pstrSource;
		int vintWidthSource = pstrSource.length();
		while (vintWidthSource < pintLen) {
			vstrDest = " " + vstrDest;
			vintWidthSource += 1;// widthPad;
		}
		return vstrDest;
	}

	/**
	 * Description: Chuyen tu tieng viet co dau sang tieng viet khong dau
	 * 
	 * @param pstrValue:
	 *            chuoi dau vao
	 * @return Chuoi tieng viet khong dau
	 * @throws
	 *             <p>
	 * 			func
	 *             used:
	 *             </p>
	 *             <p>
	 * 			table used:
	 *             </p>
	 *             <p>
	 * 			class used:
	 *             </p>
	 */

	public static String cVToEnglish(String pstrValue) {
		return StringUtil.convertCharForm(pstrValue, gstrUnicode, gstrTCVN);
	}

	/**
	 * Description: Chuyen tu chuoi sang kieu date
	 * 
	 * @param pstrDate:
	 *            chuoi kieu date
	 * @param pstrFormat:
	 *            dinh dang cua chuoi kieu date
	 * @return gia tri kieu date
	 * @throws AppException
	 *             <p>
	 * 			func used:
	 *             </p>
	 *             <p>
	 * 			table used:
	 *             </p>
	 *             <p>
	 * 			class used:
	 *             </p>
	 */

	public static java.util.Date toDate(String pstrDate, String pstrFormat) throws AppException {
		SimpleDateFormat fmt = new SimpleDateFormat(pstrFormat);
		java.util.Date vdatReturn = null;
		try {
			vdatReturn = fmt.parse(pstrDate);
			return vdatReturn;
		} catch (Exception ex) {
			throw new AppException(ex, "toDate");
		}
	}

	/**
	 * Description: bat truoc hamg add_months cua oracle
	 * 
	 * @param pstrDate:
	 *            chuoi kieu date
	 * @param pintMonth:
	 *            So thang can them
	 * @return Chuoi kieu thang da duoc them
	 * @throws AppException
	 *             <p>
	 * 			func used:
	 *             </p>
	 *             <p>
	 * 			table used:
	 *             </p>
	 *             <p>
	 * 			class used:
	 *             </p>
	 */

	public static String addMonth(String pstrDate, int pintMonth) throws AppException {
		String vstrDate;
		int vintDay, vintMonth, vintYear, vintDelta;
		vstrDate = pstrDate.trim();
		if (pstrDate.length() == 7) {
			vstrDate = "01/" + pstrDate;
		}
		vintDay = Integer.parseInt(vstrDate.substring(0, 2));// vdat_Date.getDay();
		vintDelta = Integer.parseInt(vstrDate.substring(3, 5)) + pintMonth;
		if (vintDelta % 13 == 0) {
			vintMonth = 1;
			vintYear = Integer.parseInt(vstrDate.substring(6)) + (int) (vintDelta / 13);
		} else {
			vintMonth = vintDelta % 13;
			if ((int) (vintDelta / 13) > 0)
				vintMonth = vintMonth + 1;
			vintYear = Integer.parseInt(vstrDate.substring(6)) + (int) (vintDelta / 13);
		}
		vstrDate = StringUtil.format(vintDay, "00") + "/" + StringUtil.format(vintMonth, "00") + "/"
				+ StringUtil.format(vintYear, "00");
		// kiem tra xem co dung kieu date khong
		toDate(vstrDate, "dd/MM/yyyy");
		// neu dung thi tra ve gia tri nay
		return vstrDate;
	}

	////////////////////////////////////////////////////////////////////////
	public static int getDeltaMonth(String pstr_FromMonth, String pstr_ToMonth) throws AppException {
		int vint_Count = 0;
		if (compare(pstr_FromMonth, pstr_ToMonth) < 0) {
			while (compare(pstr_FromMonth, pstr_ToMonth) < 0) {
				vint_Count = vint_Count + 1;
				pstr_FromMonth = addMonth(pstr_FromMonth, 1);
			}
		} else {
			while (compare(pstr_FromMonth, pstr_ToMonth) >= 0) {
				vint_Count = vint_Count - 1;
				pstr_FromMonth = addMonth(pstr_FromMonth, -11);
			}
		}
		return vint_Count;
	}

	////////////////////////////////////////////////////////////////////////
	public static int compare(String pstr_Date1, String pstr_Date2) throws AppException {
		java.util.Date d1 = toDate(pstr_Date1, "dd/MM/yyyy");
		java.util.Date d2 = toDate(pstr_Date2, "dd/MM/yyyy");
		return d1.compareTo(d2);
	}

	////////////////////////////////////////////////////////////////////////
	public static String formatFrench(double pdbl_Value) {
		String vstr_Ret = StringUtil.format(pdbl_Value, "###,###,###.00");
		vstr_Ret = StringUtil.replaceAll(vstr_Ret, ".", "_");
		vstr_Ret = StringUtil.replaceAll(vstr_Ret, ",", ".");
		vstr_Ret = StringUtil.replaceAll(vstr_Ret, "_", ",");
		return vstr_Ret;
	}

//	////////////////////////////////////////////////////////////////////////
//	public static String openFile(Component parent, String strExt) {
//		JXFileFilter fft = new JXFileFilter();
//		fft.addExtension(strExt);
//		fft.setDescription("File danh sach ");
//		JFileChooser jFileOpen = new JFileChooser(System.getProperty("user.dir"));
//		jFileOpen.setFileSelectionMode(JFileChooser.FILES_ONLY);
//		jFileOpen.setAcceptAllFileFilterUsed(false);
//		jFileOpen.setFileFilter(fft);
//		jFileOpen.setDialogTitle("Chon File danh sach");
//		int result = jFileOpen.showOpenDialog(parent);
//		if (result == JFileChooser.APPROVE_OPTION) {
//			return jFileOpen.getSelectedFile().getAbsolutePath();
//		}
//		return null;
//
//	}

//	////////////////////////////////////////////////////////////////////////
//	public static String openFile(Component parent) {
//		JXFileFilter fft = new JXFileFilter();
//		fft.addExtension("xls");
//		fft.setDescription("File danh sach o dang Excel danh sach");
//		JFileChooser jFileOpen = new JFileChooser(System.getProperty("user.dir"));
//		jFileOpen.setFileSelectionMode(JFileChooser.FILES_ONLY);
//		jFileOpen.setAcceptAllFileFilterUsed(false);
//		jFileOpen.setFileFilter(fft);
//		jFileOpen.setDialogTitle("Chon File danh sach");
//		int result = jFileOpen.showOpenDialog(parent);
//		if (result == JFileChooser.APPROVE_OPTION) {
//			return jFileOpen.getSelectedFile().getAbsolutePath();
//		}
//		return null;
//
//	}

	////////////////////////////////////////////////////////////////////////
	public static String openDir(JFrame pfrmParent, boolean pblnFile) {

		JFileChooser jFileOpen = new JFileChooser(System.getProperty("user.dir"));
		// jFileOpen.setAcceptAllFileFilterUsed();
		if (pblnFile)
			jFileOpen.setFileSelectionMode(JFileChooser.FILES_ONLY);
		else
			jFileOpen.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
		int result = jFileOpen.showOpenDialog(pfrmParent);
		if (result == JFileChooser.APPROVE_OPTION) {
			File Dir = jFileOpen.getSelectedFile();
			return Dir.getAbsolutePath();
		}
		return null;
	}
	////////////////////////////////////////////////////////////////////////

	public static Object getObjectByName(String contentName, Vector vctContents) {
		for (int i = 0; i < vctContents.size(); i++) {
			if (((String) ((Vector) vctContents.elementAt(i)).elementAt(0)).equals(contentName)) {
				return ((Vector) vctContents.elementAt(i)).elementAt(1);
			}
		}
		return null;
	}

	public static boolean setObjectByName(Vector vtcTarget, String contentName, Object vctSource) {
		for (int i = 0; i < vtcTarget.size(); i++) {
			if (((String) ((Vector) vtcTarget.elementAt(i)).elementAt(0)).equals(contentName)) {
				((Vector) vtcTarget.elementAt(i)).setElementAt(vctSource, 1);
				return true;
			}
		}
		return false;
	}

	public static void addObjectByName(Vector vctContents, String nodeName, Object nodeValue) {
		Vector node = new Vector();
		node.add(0, nodeName);
		node.add(1, nodeValue);
		vctContents.add(node);
	}

	// evl = Empty Value
	// Doan Van Tuyen
	public static String evl(Object strInput, String strNullValue) throws Exception {
		if (strInput == null)
			return strNullValue;
		if (strInput.equals(""))
			return strNullValue;
		return strInput.toString();
	}

}
