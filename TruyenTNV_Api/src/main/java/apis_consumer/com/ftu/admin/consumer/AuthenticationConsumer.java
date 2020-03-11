package apis_consumer.com.ftu.admin.consumer;

import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import apis_consumer.com.ftu.admin.consumer.config.ClientConsumerConfig;
import apis_consumer.com.ftu.admin.consumer.entity.AuthenticationOutput;
import apis_consumer.com.ftu.admin.consumer.entity.IPAddressEntity;
import apis_consumer.com.ftu.admin.consumer.entity.IPAddressOutput;
import apis_consumer.com.ftu.admin.consumer.entity.PermissionEntity;
import apis_consumer.com.ftu.admin.consumer.entity.PermissionOutput;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;
import apis_consumer.com.ftu.admin.consumer.entity.TransNotify;
import apis_consumer.com.ftu.admin.consumer.utils.ConsumerPropeties;
import apis_consumer.com.ftu.admin.consumer.utils.ConsumerUtil;

public class AuthenticationConsumer
{

	@Context
	public static void main(String[] args)
	{
		try
		{
			AuthenticationOutput out = login(null, "admin", "I9QvXz9mSYssj/TCC4xayCbkcUY=", "VETC.SEC");
			String orgCode = out.getIdentityEntity().getOrganization().getCode();
			PermissionOutput pem = AuthorizationConsumer.getPermissionsByGrantee(out.getTransEntity(), "SEC_ORGANIZATION", orgCode, "SEC_IP");
			if (pem.getPermissionsData() != null)
			{
				for (PermissionEntity pe : pem.getPermissionsData())
				{
					IPAddressOutput ip = ResourceConsumer.getIpAddressForGroup(out.getTransEntity(), pe.getGrantedRefCode());
					for (IPAddressEntity i : ip.getIpAddress())
					{
					}
				}
			}
			logout(null);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

	public static AuthenticationOutput login(TransEntity transEntity, String strUsername, String strPassword, String strAppCode) throws Exception
	{
		AuthenticationOutput output = null;
		Response response = null;
		try
		{
			Form form = new Form();
			form.param("username", strUsername);
			form.param("password", strPassword);
			form.param("app_code", strAppCode);
			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.login"), MediaType.APPLICATION_JSON);
			Entity<Form> entity = Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE);
			response = builder.post(entity);
			output = response.readEntity(AuthenticationOutput.class);
		}
		catch (Exception e)
		{
			e.printStackTrace();
			System.out.println(e.getMessage());
			output = new AuthenticationOutput();
			output.setErrorCode((response != null) ? Integer.toString(response.getStatus()) : e.getMessage());
			output.setErrorMessage(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}

		return output;
	}

	public static AuthenticationOutput verifyPassword(TransEntity transEntity, String strUsername, String strPassword) throws Exception
	{
		AuthenticationOutput output = null;
		Response response = null;
		try
		{
			Form form = new Form();
			form.param("username", strUsername);

			if (!ConsumerUtil.stringIsNullOrEmty(strPassword))
			{
				form.param("password", ConsumerUtil.encrypt(strPassword, ConsumerPropeties.getProperty("conf.encrypt.algorithm")));
			}
			else
			{
				form.param("password", null);
			}

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.verify-password"),
					MediaType.APPLICATION_JSON);
			Entity<Form> entity = Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE);
			response = builder.post(entity);
			output = response.readEntity(AuthenticationOutput.class);

		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new AuthenticationOutput();
			output.setErrorCode(Integer.toString(response.getStatus()));
			output.setErrorMessage(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return output;
	}

	public static boolean logout(TransEntity transEntity) throws Exception
	{
		Response response = null;
		try
		{
			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.logout"), MediaType.APPLICATION_JSON);
			builder = ClientConsumerConfig.appendBuilder(transEntity, builder, null);
			response = builder.delete();

			if (200 == response.getStatus())
				return true;
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
		return false;
	}

	public static boolean logout(TransEntity transEntity, boolean allSession) throws Exception
	{
		Response response = null;
		try
		{
			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity,
					ConsumerPropeties.getPath("path.logout") + "/" + transEntity.getUsername(), MediaType.APPLICATION_JSON);
			builder = ClientConsumerConfig.appendBuilder(transEntity, builder, null);
			response = builder.delete();

			if (200 == response.getStatus())
				return true;
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
		return false;
	}

	public static AuthenticationOutput changePassword(TransEntity transEntity, String strPassword, String strNewPassword) throws Exception
	{
		AuthenticationOutput output = null;
		Response response = null;
		try
		{
			Form form = new Form();
			form.param("username", transEntity.getUsername());

			if (!ConsumerUtil.stringIsNullOrEmty(strPassword))
			{
				//form.param("password", ConsumerUtil.encrypt(strPassword, ConsumerPropeties.getProperty("conf.encrypt.algorithm")));
				form.param("password",strPassword);
			}
			else
			{
				form.param("password", null);

			}
			//form.param("new_password", ConsumerUtil.encrypt(strNewPassword, ConsumerPropeties.getProperty("conf.encrypt.algorithm")));
			
			form.param("new_password",strNewPassword);

			Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.change-password"),
					MediaType.APPLICATION_JSON);

			Entity<Form> entity = Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE);
			response = builder.post(entity);
			output = response.readEntity(new GenericType<AuthenticationOutput>() {
			});

		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new AuthenticationOutput();
			output.setErrorCode(Integer.toString(response.getStatus()));
			output.setErrorMessage(e.getMessage());
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
		return output;
	}

	public static boolean keepAlive(TransEntity transEntity) throws Exception
	{
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.keep-alive"), MediaType.APPLICATION_JSON);
		try
		{
			response = builder.get();
			if (200 == response.getStatus())
			{
				return true;
			}
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
		return false;
	}

	public static TransNotify killSessionForced(TransEntity transEntity, String strKillTransId)
	{
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity,
				ConsumerPropeties.getPath("path.kill-session-forced") + "/" + strKillTransId, MediaType.APPLICATION_JSON);
		try
		{
			TransNotify transNotify = null;
			response = builder.get();
			transNotify = response.readEntity(new GenericType<TransNotify>() {
			});
			return transNotify;
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			TransNotify transNotify = new TransNotify();
			transNotify.setStatus("0");
			transNotify.setMessage(e.getMessage());
			return transNotify;
		}
		finally
		{
			if (response != null)
			{
				response.close();
			}
		}
	}
}
