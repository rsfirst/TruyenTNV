package vn.com.fis.utils.epos;

import java.text.NumberFormat;

/**
 * <p>
 * Title:
 * </p>
 *
 * <p>
 * Description:
 * </p>
 *
 * <p>
 * Copyright: Copyright (c) 2004
 * </p>
 *
 * <p>
 * Company:
 * </p>
 *
 * @author not attributable
 * @version 1.0
 */
public class SMStringUtil
{

	public static String formatNumber(String strInput)
	{
		return formatNumber(Double.parseDouble(strInput));
	}

	public static String formatNumber(double dblInput)
	{
		NumberFormat format = NumberFormat.getInstance();
		String strReturn = format.format(dblInput);
		return strReturn;
	}
}
