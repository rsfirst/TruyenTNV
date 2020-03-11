package apis_consumer.com.ftu.admin.consumer;

import java.util.Date;

import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import apis_consumer.com.ftu.admin.consumer.config.ClientConsumerConfig;
import apis_consumer.com.ftu.admin.consumer.entity.LogInputParams;
import apis_consumer.com.ftu.admin.consumer.entity.LogRelatedEntity;
import apis_consumer.com.ftu.admin.consumer.entity.SecAccessLogOutput;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;
import apis_consumer.com.ftu.admin.consumer.log.ActionLogDelete;
import apis_consumer.com.ftu.admin.consumer.log.ActionLogInsert;
import apis_consumer.com.ftu.admin.consumer.log.ActionLogUpdate;
import apis_consumer.com.ftu.admin.consumer.log.SecModuleLogEntity;
import apis_consumer.com.ftu.admin.consumer.utils.ConsumerPropeties;

public class LogsConsumer
{

	public static int accessLog(TransEntity transEntity, String strAssetObj, String strAssetCode, String strAppCode) throws Exception
	{
		Response response = null;
		try
		{
			Form form = new Form();
			form.param("granted_obj", strAssetObj);
			form.param("grantee_code", strAssetCode);
			form.param("app_code", strAppCode);
			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-accesslog"),
					MediaType.APPLICATION_JSON);
			Entity<Form> entity = Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE);
			response = builder.post(entity);
			if (200 == response.getStatus())
				return 1;
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return 0;
	}

	public static void logInsert(TransEntity transEntity, String strTableName, String strPrimaryKeyValue, String strPrimaryKeyName, String strModuleName)
			throws Exception
	{
		try
		{
			LogInputParams params = new LogInputParams();
			params.setIpAddress(transEntity.getRemoteAddr());
			params.setModuleName(strModuleName);
			params.setPrimaryKeyName(strPrimaryKeyName);
			params.setPrimaryKeyValue(strPrimaryKeyValue);
			params.setTableName(strTableName);
			params.setvObjectRelated(null);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-insert"),
					MediaType.APPLICATION_JSON);
			Entity<LogInputParams> entity = Entity.entity(params, MediaType.APPLICATION_JSON);
			builder.post(entity).close();
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
		}
	}

	public static void logInsertRelated(TransEntity transEntity, String strTableName, String strPrimaryKeyValue, String strPrimaryKeyName, String strModuleName,
			LogRelatedEntity vObjectRelated) throws Exception
	{
		try
		{
			LogInputParams params = new LogInputParams();
			params.setIpAddress(transEntity.getRemoteAddr());
			params.setModuleName(strModuleName);
			params.setPrimaryKeyName(strPrimaryKeyName);
			params.setPrimaryKeyValue(strPrimaryKeyValue);
			params.setTableName(strTableName);
			params.setvObjectRelated(vObjectRelated);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-insert-related"),
					MediaType.APPLICATION_JSON);
			Entity<LogInputParams> entity = Entity.entity(params, MediaType.APPLICATION_JSON);
			builder.post(entity).close();
			;
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
		}
	}

	public static LogRelatedEntity logActionBeforeUpdate(TransEntity transEntity, String strTableName, String strPrimaryKeyValue, String strPrimaryKeyName,
			String strModuleName, LogRelatedEntity objectRelated) throws Exception
	{
		Response response = null;
		try
		{
			LogInputParams params = new LogInputParams();
			params.setIpAddress(transEntity.getRemoteAddr());
			params.setModuleName(strModuleName);
			params.setPrimaryKeyName(strPrimaryKeyName);
			params.setPrimaryKeyValue(strPrimaryKeyValue);
			params.setTableName(strTableName);
			params.setvObjectRelated(objectRelated);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-before-update"),
					MediaType.APPLICATION_JSON);
			Entity<LogInputParams> entity = Entity.entity(params, MediaType.APPLICATION_JSON);
			response = builder.post(entity);
			return response.readEntity(new GenericType<LogRelatedEntity>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return null;
	}

	public static LogRelatedEntity logActionBeforeUpdateRelated(TransEntity transEntity, String strTableName, String strPrimaryKeyValue,
			String strPrimaryKeyName, String strModuleName, LogRelatedEntity objectRelated) throws Exception
	{
		Response response = null;
		try
		{
			LogInputParams params = new LogInputParams();
			params.setIpAddress(transEntity.getRemoteAddr());
			params.setModuleName(strModuleName);
			params.setPrimaryKeyName(strPrimaryKeyName);
			params.setPrimaryKeyValue(strPrimaryKeyValue);
			params.setTableName(strTableName);
			params.setvObjectRelated(objectRelated);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-before-update-related"),
					MediaType.APPLICATION_JSON);
			Entity<LogInputParams> entity = Entity.entity(params, MediaType.APPLICATION_JSON);
			response = builder.post(entity);
			return response.readEntity(new GenericType<LogRelatedEntity>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return null;
	}

	public static void logActionAfterUpdate(TransEntity transEntity, String strTableName, String strPrimaryKeyValue, String strPrimaryKeyName,
			String strModuleName, LogRelatedEntity objectRelated) throws Exception
	{
		try
		{
			LogInputParams params = new LogInputParams();
			params.setIpAddress(transEntity.getRemoteAddr());
			params.setModuleName(strModuleName);
			params.setPrimaryKeyName(strPrimaryKeyName);
			params.setPrimaryKeyValue(strPrimaryKeyValue);
			params.setTableName(strTableName);
			params.setvObjectRelated(objectRelated);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-after-update"),
					MediaType.APPLICATION_JSON);
			Entity<LogInputParams> entity = Entity.entity(params, MediaType.APPLICATION_JSON);
			builder.post(entity).close();
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
		}
	}

	public static void logActionDelete(TransEntity transEntity, String strTableName, String strPrimaryKeyValue, String strPrimaryKeyName, String strModuleName,
			LogRelatedEntity objectRelated) throws Exception
	{
		try
		{
			LogInputParams params = new LogInputParams();
			params.setIpAddress(transEntity.getRemoteAddr());
			params.setModuleName(strModuleName);
			params.setPrimaryKeyName(strPrimaryKeyName);
			params.setPrimaryKeyValue(strPrimaryKeyValue);
			params.setTableName(strTableName);
			params.setvObjectRelated(objectRelated);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-delete"),
					MediaType.APPLICATION_JSON);
			Entity<LogInputParams> entity = Entity.entity(params, MediaType.APPLICATION_JSON);
			builder.post(entity).close();
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
		}
	}

	public static SecAccessLogOutput logAccessDashboard(TransEntity transEntity) throws Exception
	{
		Response response = null;
		try
		{
			Form form = new Form();
			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logs-accesslog-dashboard"),
					MediaType.APPLICATION_JSON);
			Entity<Form> entity = Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE);
			response = builder.post(entity);
			SecAccessLogOutput enti = response.readEntity(SecAccessLogOutput.class);
			if (200 == response.getStatus())
				return enti;
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return null;
	}

	public static SecModuleLogEntity logInsert(TransEntity transEntity, Object[] cls, String moduleCode, Date logDate) throws Exception
	{
		return logInsert(null, transEntity, cls, moduleCode, logDate);
	}

	public static SecModuleLogEntity logInsert(Long moduleLogId, TransEntity transEntity, Object[] cls, String moduleCode, Date logDate) throws Exception
	{
		Response response = null;
		try
		{
			SecModuleLogEntity logData = ActionLogInsert.buildLog(moduleLogId, new Long(transEntity.getIdentityId()), cls, moduleCode, logDate,
					transEntity.getRemoteAddr(), transEntity.getTransId());

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.log-insert"),
					MediaType.APPLICATION_JSON);
			Entity<SecModuleLogEntity> entity = Entity.entity(logData, MediaType.APPLICATION_JSON);
			response = builder.post(entity);
			return response.readEntity(new GenericType<SecModuleLogEntity>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return null;
	}

	public static SecModuleLogEntity logDelete(TransEntity transEntity, Object[] cls, String moduleCode, Date logDate) throws Exception
	{
		return logDelete(null, transEntity, cls, moduleCode, logDate);
	}

	public static SecModuleLogEntity logDelete(Long moduleLogId, TransEntity transEntity, Object[] cls, String moduleCode, Date logDate) throws Exception
	{
		Response response = null;
		try
		{
			SecModuleLogEntity logData = ActionLogDelete.buildLog(moduleLogId, new Long(transEntity.getIdentityId()), cls, moduleCode, logDate,
					transEntity.getRemoteAddr(), transEntity.getTransId());

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.log-delete"),
					MediaType.APPLICATION_JSON);
			Entity<SecModuleLogEntity> entity = Entity.entity(logData, MediaType.APPLICATION_JSON);
			response = builder.post(entity);
			return response.readEntity(new GenericType<SecModuleLogEntity>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return null;
	}

	public static SecModuleLogEntity logUpdate(TransEntity transEntity, Object[] oldCls, Object[] newCls, String moduleCode, Date logDate) throws Exception
	{
		return logUpdate(null, transEntity, oldCls, newCls, moduleCode, logDate);
	}

	public static SecModuleLogEntity logUpdate(Long moduleLogId, TransEntity transEntity, Object[] oldCls, Object[] newCls, String moduleCode, Date logDate)
			throws Exception
	{
		Response response = null;
		try
		{
			SecModuleLogEntity logData = ActionLogUpdate.buildLog(moduleLogId, new Long(transEntity.getIdentityId()), oldCls, newCls, moduleCode, logDate,
					transEntity.getRemoteAddr(), transEntity.getTransId());

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.log-update"),
					MediaType.APPLICATION_JSON);
			Entity<SecModuleLogEntity> entity = Entity.entity(logData, MediaType.APPLICATION_JSON);
			response = builder.post(entity);
			return response.readEntity(new GenericType<SecModuleLogEntity>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return null;
	}
}
