package apis_consumer.com.ftu.admin.consumer.utils;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * <p>
 * Title:
 * </p>
 * <p>
 * Description:
 * </p>
 * <p>
 * Copyright: Copyright (c) 2004
 * </p>
 * <p>
 * Company: FPT - FSS
 * </p>
 * 
 * @author not Thai Hoang Hiep
 * @version 1.0
 */

public class DateUtil
{
	public static final String FORMAT_TIME = "hh:mm:ss";
	public static final String FORMAT_DATE = "dd/MM/yyyy";
	public static final String FORMAT_DATE_TIME = "dd/MM/yyyy HH:mm:ss";
	public static final String FORMAT_DATE_TIME3 = "dd/MM/yyyy HH:mm:ss";
	public static final String FORMAT_DB_TIME = "HH24:MI:SS";
	public static final String FORMAT_DB_DATE = "YYYY-MM-DD";
	public static final String FORMAT_DB_DATE_TIME = "YYYY-MM-DD HH24:MI:SS";
	public static final String FORMAT_DB_YDATE_TIME = "SYYYY-MM-DD HH24:MI:SS";
	public static final SimpleDateFormat FM_DATE_TIME3 = new SimpleDateFormat(FORMAT_DATE_TIME3);
	public static final SimpleDateFormat FM_DATE_TIME = new SimpleDateFormat(FORMAT_DATE_TIME);
	public static final SimpleDateFormat FM_DATE = new SimpleDateFormat(FORMAT_DATE);

	public static Long stringHMSToMillis(String strHMS)
	{
		if (strHMS == null)
			return null;

		String[] arrStr = strHMS.split(":");
		if (arrStr.length == 3)
		{
			int h = Integer.parseInt(arrStr[0]);
			int m = Integer.parseInt(arrStr[1]);
			int s = Integer.parseInt(arrStr[2]);
			long mH = h * (60 * (60 * 1000));
			long mM = m * (60 * 1000);
			long mS = s * 1000;
			return (mH + mM + mS);
		}
		else
			return null;
	}

	public static String convertHourToDateAndHour(int hour)
	{

		int day = Math.round(hour / 24);
		int hour2 = hour % 24;

		String dateAndHour = "";

		if (day != 0)
		{
			dateAndHour = day + "d " + hour2 + "h";

		}
		else
		{
			dateAndHour = hour2 + "h";
		}

		return dateAndHour;
	}

	public static int convertDateAndHourToHour(int day, int hour)
	{
		int rs = 0;

		rs = day * 24 + hour;

		return rs;
	}

	public static String formatStringToHHmmss(int strHMS)
	{
		int h = strHMS / (3600);
		int m = (strHMS % (3600)) / 60;
		int s = (strHMS % (3600)) % 60;
		String strH = String.format("%02d", h);
		String strM = String.format("%02d", m);
		String strS = String.format("%02d", s);
		return strH + ":" + strM + ":" + strS;
	}

	public static Date timestampToDate(Timestamp stamp)
	{
		Calendar cal = Calendar.getInstance();
		cal.setTimeInMillis(stamp.getTime());
		return cal.getTime();
	}

	public static String dateToString(Date date, String strFormat)
	{
		if (date != null)
		{
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(strFormat);
			return simpleDateFormat.format(date);
		}
		else
			return null;
	}

	public static Date StringToDate(String dateString, String strFormat)
	{
		try
		{
			DateFormat df = new SimpleDateFormat(strFormat);
			Date date = df.parse(dateString);
			return date;
		}
		catch (ParseException e)
		{
			e.printStackTrace();
			return null;
		}
	}

	// //////////////////////////////////////////////////////
	/**
	 * Check string format with current format locale
	 * 
	 * @param strSource
	 *            String to check
	 * @return boolean true if strSource represent a date, otherwise false
	 */
	// //////////////////////////////////////////////////////
	public static boolean isDate(String strSource)
	{
		return isDate(strSource, DateFormat.getDateInstance());
	}

	// //////////////////////////////////////////////////////
	/**
	 * Check string format
	 * 
	 * @param strSource
	 *            String
	 * @param strFormat
	 *            Format to check
	 * @return boolean true if strSource represent a date, otherwise false
	 */
	// //////////////////////////////////////////////////////
	public static boolean isDate(String strSource, String strFormat)
	{
		SimpleDateFormat fmt = new SimpleDateFormat(strFormat);
		fmt.setLenient(false);
		return isDate(strSource, fmt);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Check string format
	 * 
	 * @param strSource
	 *            String
	 * @param fmt
	 *            Format to check
	 * @return boolean true if strSource represent a date, otherwise false
	 */
	// //////////////////////////////////////////////////////
	public static boolean isDate(String strSource, DateFormat fmt)
	{
		try
		{
			if (fmt.parse(strSource) == null)
				return false;
		}
		catch (Exception e)
		{
			return false;
		}
		return true;
	}

	// //////////////////////////////////////////////////////
	/**
	 * Convert string to date using current format locale
	 * 
	 * @param strSource
	 *            String to convert
	 * @return Date converted, null if conversion failure
	 */
	// //////////////////////////////////////////////////////
	public static Date toDate(String strSource)
	{
		return toDate(strSource, DateFormat.getDateInstance());
	}

	// //////////////////////////////////////////////////////
	/**
	 * Convert string to date
	 * 
	 * @param strSource
	 *            String to convert
	 * @param strFormat
	 *            Format to convert
	 * @return Date converted, null if conversion failure
	 */
	// //////////////////////////////////////////////////////
	public static Date toDate(String strSource, String strFormat)
	{
		SimpleDateFormat fmt = new SimpleDateFormat(strFormat);
		fmt.setLenient(false);
		return toDate(strSource, fmt);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Convert string to date
	 * 
	 * @param strSource
	 *            String to convert
	 * @param fmt
	 *            Format to convert
	 * @return Date converted, null if conversion failure
	 */
	// //////////////////////////////////////////////////////
	public static Date toDate(String strSource, DateFormat fmt)
	{
		try
		{
			return fmt.parse(strSource);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value by second
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date addSecond(Date dt, int iValue)
	{
		return add(dt, iValue, Calendar.SECOND);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value by minute
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date addMinute(Date dt, int iValue)
	{
		return add(dt, iValue, Calendar.MINUTE);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value by hour
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date addHour(Date dt, int iValue)
	{
		return add(dt, iValue, Calendar.HOUR);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value by day
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date addDay(Date dt, int iValue)
	{
		return add(dt, iValue, Calendar.DATE);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value by month
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date addMonth(Date dt, int iValue)
	{
		return add(dt, iValue, Calendar.MONTH);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value by year
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date addYear(Date dt, int iValue)
	{
		return add(dt, iValue, Calendar.YEAR);
	}

	// //////////////////////////////////////////////////////
	/**
	 * Add date value
	 * 
	 * @param dt
	 *            Date Date to add
	 * @param iValue
	 *            int value to add
	 * @param iType
	 *            type of unit
	 * @return Date after add
	 */
	// //////////////////////////////////////////////////////
	public static Date add(Date dt, int iValue, int iType)
	{
		Calendar cld = Calendar.getInstance();
		cld.setTime(dt);
		cld.add(iType, iValue);
		return cld.getTime();
	}

	public static int getHoursFromDate(Date date)
	{
		Calendar cld = Calendar.getInstance();
		cld.setTime(date);
		return cld.get(Calendar.HOUR_OF_DAY);
	}

	public static int getMinuteFromDate(Date date)
	{
		Calendar cld = Calendar.getInstance();
		cld.setTime(date);
		return cld.get(Calendar.MINUTE);
	}

	public static String dateToString(Date date)
	{
		if (date == null)
			return null;
		DateFormat df = new SimpleDateFormat(FORMAT_DATE_TIME);
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return df.format(cal.getTime());
	}

	// //////////////////////////////////////////////////////
	/**
	 * Format date object
	 * 
	 * @param dtImput
	 *            date to format
	 * @param strPattern
	 *            format pattern
	 * @return formatted string
	 * @author Thai Hoang Hiep
	 */
	// //////////////////////////////////////////////////////
	public static String format(java.util.Date dtImput, String strPattern)
	{
		if (dtImput == null)
			return null;
		java.text.SimpleDateFormat fmt = new java.text.SimpleDateFormat(strPattern);
		return fmt.format(dtImput);
	}
}
