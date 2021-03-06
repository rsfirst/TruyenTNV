package apis_consumer.com.ftu.admin.consumer.log;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

import apis_consumer.com.ftu.admin.consumer.utils.DateUtil;

public class ActionLogUpdate
{

	public static SecModuleLogEntity buildLog(Long moduleLogId, Long userId, Object[] oldCls, Object[] newCls, String moduleCode, Date logDate,
			String ipAddress, String transId)
	{
		ActionLogUpdate actionLog = new ActionLogUpdate();
		return actionLog.buildModuleLog(moduleLogId, userId, oldCls, newCls, moduleCode, logDate, ipAddress, transId);
	}

	public static SecModuleLogEntity buildLog(Long userId, Object[] oldCls, Object[] newCls, String moduleCode, Date logDate, String ipAddress, String transId)
	{
		return buildLog(null, userId, oldCls, newCls, moduleCode, logDate, ipAddress, transId);
	}

	private SecModuleLogEntity buildModuleLog(Long moduleLogId, Long userId, Object[] oldCls, Object[] newCls, String moduleCode, Date logDate,
			String ipAddress, String transId)
	{
		try
		{
			Long logId = moduleLogId;
			List<SecTableLogEntity> lstTable = new ArrayList<SecTableLogEntity>();
			SecModuleLogEntity module = new SecModuleLogEntity(logId, moduleCode, userId, logDate, ipAddress, transId);
			SecTableLogEntity table = null;
			if (oldCls.length == newCls.length)
			{
				for (int i = 0; i < oldCls.length; i++)
				{
					if (oldCls != null && newCls != null)
					{
						table = buildTableLog(oldCls[i], newCls[i]);
						lstTable.add(table);
					}
				}
			}
			module.setSecTableLogEntitys(lstTable);
			module.setActionType("U");
			return module;
		}
		catch (

		Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	private SecTableLogEntity buildTableLog(Object oldCls, Object newCls)
	{
		try
		{
			Long changeId = null;
			Long logId = null;
			String rowId = System.currentTimeMillis() + "ROWID";
			String tableName = oldCls.getClass().getName();

			SecTableLogEntity table = new SecTableLogEntity(changeId, logId, tableName, rowId);
			List<SecColumnLogEntity> columns = buildColumnLog(oldCls, newCls);
			table.setSecColumnLogEntitys(columns);
			table.setActionType("Update");
			return table;
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	private List<SecColumnLogEntity> buildColumnLog(Object oldCls, Object newCls)
	{
		try
		{
			List<SecColumnLogEntity> lstColumnLog = new ArrayList<SecColumnLogEntity>();
			SecColumnLogEntity column = null;
			ObjectMapper mapper = new ObjectMapper();
			mapper.setDateFormat(DateUtil.FM_DATE_TIME3);
			Map<String, Object> propertiesOld = mapper.convertValue(oldCls, Map.class);
			Map<String, Object> propertiesNew = mapper.convertValue(newCls, Map.class);
			for (String columnName : propertiesOld.keySet())
			{
				Object val = propertiesOld.get(columnName);
				Object valNew = propertiesNew.get(columnName);
				String oldValue = (val != null) ? val.toString() : "";
				String newValue = (valNew != null) ? valNew.toString() : "";
				column = new SecColumnLogEntity(null, columnName, oldValue, newValue);
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
