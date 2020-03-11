package vn.com.fis.utils.epos;

import java.text.DecimalFormat;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;

/*import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;*/


public class CommonUtil {
	public static String getCellValue(Cell cell)
	{
		DecimalFormat decimalFormat = new DecimalFormat(CommonConstant.DECIMAL_FORMAT);
		CellType cellType = cell.getCellTypeEnum();
		switch (cellType.getCode())
		{
		case 1:
			String cellValue = cell.getStringCellValue();
			if ("null".equals(cellValue.toLowerCase()) || "".equals(cellValue.trim()))
			{
				return null;
			}
			if (cellValue.startsWith("'"))
			{
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
	
	/**
	 * Checks if is empty.
	 *
	 * @param input
	 *            the input
	 * @return true, if is empty
	 */
	public static boolean isEmpty(String input)
	{
		boolean result = false;
		if (input == null || input.trim().equals(""))
		{
			result = true;
		}
		return result;
	}
}
