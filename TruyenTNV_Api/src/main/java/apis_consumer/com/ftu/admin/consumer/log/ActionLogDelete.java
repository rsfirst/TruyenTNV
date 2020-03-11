package apis_consumer.com.ftu.admin.consumer.log;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;

import apis_consumer.com.ftu.admin.consumer.utils.DateUtil;

public class ActionLogDelete
{

	public static SecModuleLogEntity buildLog(Long moduleLogId, Long userId, Object[] cls, String moduleCode, Date logDate, String ipAddress, String transId)
	{
		ActionLogDelete actionLog = new ActionLogDelete();
		return actionLog.buildModuleLog(moduleLogId, userId, cls, moduleCode, logDate, ipAddress, transId);
	}

	public static SecModuleLogEntity buildLog(Long userId, Object[] cls, String moduleCode, Date logDate, String ipAddress, String transId)
	{
		return buildLog(null, userId, cls, moduleCode, logDate, ipAddress, transId);
	}

	private SecModuleLogEntity buildModuleLog(Long moduleLogId, Long userId, Object[] cls, String moduleCode, Date logDate, String ipAddress, String transId)
	{
		try
		{
			Long logId = moduleLogId;
			List<SecTableLogEntity> lstTable = new ArrayList<SecTableLogEntity>();
			SecModuleLogEntity module = new SecModuleLogEntity(logId, moduleCode, userId, logDate, ipAddress, transId);
			SecTableLogEntity table = null;
			for (Object obj : cls)
			{
				if (obj != null)
				{
					table = buildTableLog(obj);
					lstTable.add(table);
				}
			}
			module.setSecTableLogEntitys(lstTable);
			module.setActionType("D");
			return module;
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	private SecTableLogEntity buildTableLog(Object cls)
	{
		try
		{
			Long changeId = null;
			Long logId = null;
			String rowId = System.currentTimeMillis() + "ROWID";
			String tableName = cls.getClass().getName();

			SecTableLogEntity table = new SecTableLogEntity(changeId, logId, tableName, rowId);
			List<SecColumnLogEntity> columns = buildColumnLog(cls);
			table.setSecColumnLogEntitys(columns);
			table.setActionType("Delete");
			return table;
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	private List<SecColumnLogEntity> buildColumnLog(Object cls)
	{
		try
		{
			List<SecColumnLogEntity> lstColumnLog = new ArrayList<SecColumnLogEntity>();
			SecColumnLogEntity column = null;

			ObjectMapper mapper = new ObjectMapper();
			mapper.setDateFormat(DateUtil.FM_DATE_TIME3);
			LinkedHashMap<String, Object> props = mapper.convertValue(cls, LinkedHashMap.class);
			for (String columnName : props.keySet())
			{
				Object val = props.get(columnName);
				String oldValue = (val != null) ? val.toString() : "";
				column = new SecColumnLogEntity(null, columnName, oldValue, "");
				lstColumnLog.add(column);
			}

			return lstColumnLog;
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

}
