package vn.com.fis.utils.mnpcm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DateValidator {
	private Pattern pattern;
	private Matcher matcher;
	
	public static String DDMMYYYY_FORMAT = "dd/MM/yyyy";
	private static final String DATE_PATTERN = "(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)";

	public DateValidator() {
		pattern = Pattern.compile(DATE_PATTERN);
	}

	/**
	 * Validate date format with regular expression
	 * 
	 * @param date
	 *            date address for validation
	 * @return true valid date fromat, false invalid date format
	 */
	public String validate(final String date) {

		String result = "";

		matcher = pattern.matcher(date);

		if (matcher.matches()) {

			matcher.reset();

			if (matcher.find()) {

				String day = matcher.group(1);
				String month = matcher.group(2);
				int year = Integer.parseInt(matcher.group(3));

				if (day.equals("31") && (month.equals("4") || month.equals("6") || month.equals("9")
						|| month.equals("11") || month.equals("04") || month.equals("06") || month.equals("09"))) {
					result = " Tháng " + month + " không có 31 ngày.";
					return result; // only 1,3,5,7,8,10,12 has 31 days
				} else if (month.equals("2") || month.equals("02")) {
					// leap year
					if (year % 4 == 0) {
						if (day.equals("30") || day.equals("31")) {
							result = " Tháng " + month + " chỉ có 29 ngày. Không có ngày 30, 31.";
							return result;
						} else {
							return result;
						}
					} else {
						if (day.equals("29") || day.equals("30") || day.equals("31")) {
							result = " Tháng " + month + " chỉ có 28 ngày. Không có ngày 29, 30, 31.";
							return result;
						} else {
							return result;
						}
					}
				} else {
					return result;
				}
			} else {
				result = " Ngày phải đúng định dạng dd/mm/yyyy và có thời gian từ năm 1900 trở lại đây.";
				return result;
			}
		} else {
			result = " Ngày phải đúng định dạng dd/mm/yyyy và có thời gian từ năm 1900 trở lại đây.";
			return result;
		}
	}

	public static Date convertStringToDate(String date, String format) {
		Date dtValue = null;

		try {
			SimpleDateFormat sdf = new SimpleDateFormat(format);
			dtValue = sdf.parse(date);
		} catch (Exception exp) {
			exp.printStackTrace();
			dtValue = null;
		}
		return dtValue;
	}
}
