package vn.com.fis.business.css;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import vn.com.fis.common.css.CommonUtilCSS;
import vn.com.fis.model.css.ChangeCardInput;
import vn.com.fis.model.css.RequestChangeCardAirtimeDetail;
import vn.com.fis.utils.css.CommonConstant;
import vn.com.fis.utils.css.Constants;
@Service
@Transactional
public class ChangeCardBusiness {
	private static final Logger LOG = LoggerFactory.getLogger(ChangeCardBusiness.class);

	public List<ChangeCardInput> getListChangeCardFromTemplate(InputStream fis) throws Exception
	{
		String nomeMetodo = ".getListChangeCardFromTemplate() ";
		LOG.info(LOG.getName() + nomeMetodo + " user: " + SecurityContextHolder.getContext().getAuthentication().getName() + CommonConstant.BEGIN_LOG);

		List<ChangeCardInput> listChangeCardResult = new ArrayList<ChangeCardInput>();

		try
		{
			// Read file excel
			Workbook workbook = WorkbookFactory.create(fis);
			Sheet sheet = workbook.getSheetAt(0);

			Iterator<Row> iteratorRow = sheet.iterator();
			// next cursor to row three
			iteratorRow.next();

			while (iteratorRow.hasNext())
			{
				Row row = iteratorRow.next();
				Iterator<Cell> iteratorCell = row.cellIterator();
				ChangeCardInput changeCardELement = new ChangeCardInput();

				boolean checkCellNull = false;
				while (iteratorCell.hasNext())
				{
					Cell cell = iteratorCell.next();
					String cellValue = CommonUtilCSS.getCellValue(cell);
					int columnIndex = cell.getColumnIndex() + 1;
					if (cellValue != null)
					{
						checkCellNull = true;
						if (columnIndex == CommonConstant.INDEX_TEMP_SHOP)
						{
							changeCardELement.setOldSerial(cellValue);
						}

						if (columnIndex == CommonConstant.INDEX_TEMP_PROVINCE)
						{
							changeCardELement.setNewSerial(cellValue);
						}
					}
				}
				if (checkCellNull)
				{
					listChangeCardResult.add(changeCardELement);
				}
				checkCellNull = false;
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
			LOG.error(e.getMessage());
			throw e;
		}
		finally
		{
			if (fis != null)
			{
				try
				{
					fis.close();
				}
				catch (IOException e)
				{
					e.printStackTrace();
					LOG.error(e.getMessage());
					throw e;
				}
			}
		}
		LOG.info(LOG.getName() + nomeMetodo + CommonConstant.END_LOG);
		return listChangeCardResult;
	}
	public List<RequestChangeCardAirtimeDetail> getListDataSerialAirtimeTemplate(InputStream fileInput) throws Exception
	{
		List<RequestChangeCardAirtimeDetail> listResult = new ArrayList<RequestChangeCardAirtimeDetail>();

		String vstrMessage = "";
		BufferedReader buf = null;
		HashSet<String> listSerial = null;
		try
		{
			buf = new BufferedReader(new InputStreamReader(fileInput, "UTF-8"));
			String vstrLine = "";
			int vintRecortCount = 0;
			while ((vstrLine = buf.readLine()) != null)
			{
				vstrLine = vstrLine.trim();
				vintRecortCount++;
				String[] fields = vstrLine.split(",");
				for (int i = 0; i < fields.length; i++)
				{
					RequestChangeCardAirtimeDetail requestChangeCardAirtimeDetail = new RequestChangeCardAirtimeDetail();

					requestChangeCardAirtimeDetail.setCardStatus("0");

					List<String> listNoteRecords = new ArrayList<>();
					String serial = fields[i].trim();
					if (listSerial == null)
					{
						listSerial = new HashSet<String>();
					}
					// System.out.println("------------> "+fields[i].trim());
					if (!isDigits(serial))
					{
						String messIsNumberError = "Số serial phải là ký tự số.";
						listNoteRecords.add(messIsNumberError);
					}
					else
					{

						if (listSerial.contains(serial))
						{
							listNoteRecords.add("Số serial đã tồn tại.");

						}
						else if (serial.length() != Constants.LENGTH_SERIAL_AIRTIME
								&& serial.length() != Constants.LENGTH_SERIAL_AIRTIME_11)
						{
							listNoteRecords.add("Số serial chỉ được nhập 11 hoặc 16 ký tự.");
						}
						else
						{
							listSerial.add(serial);
						}

					}

					requestChangeCardAirtimeDetail.setSerial(serial);
					requestChangeCardAirtimeDetail.setListNoteRecord(listNoteRecords);

					listResult.add(requestChangeCardAirtimeDetail);
				}
			}
			return listResult;
		}
		finally
		{
			try
			{
				buf.close();
			}
			catch (IOException e)
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	public boolean isDigits(String pstrIn) throws Exception
	{
		for (int i = 0; i < pstrIn.trim().length(); i++)
		{
			char c = pstrIn.charAt(i);
			if (!Character.isDigit(c))
			{
				return false;
			}
		}
		return true;
	}

}
