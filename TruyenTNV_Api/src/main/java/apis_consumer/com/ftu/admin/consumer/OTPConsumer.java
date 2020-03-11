package apis_consumer.com.ftu.admin.consumer;

import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import apis_consumer.com.ftu.admin.consumer.config.ClientConsumerConfig;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;
import apis_consumer.com.ftu.admin.consumer.utils.ConsumerPropeties;

public class OTPConsumer
{
	public static String getOTP(TransEntity transEntity) throws Exception
	{
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.otp-generate"), MediaType.TEXT_PLAIN);
		try
		{
			response = builder.get();
			return response.readEntity(new GenericType<String>() {
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

	public static boolean verifyOTP(TransEntity transEntity, String otp) throws Exception
	{
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.otp-verify") + "/" + otp,
				MediaType.TEXT_PLAIN);
		try
		{
			response = builder.get();
			return response.readEntity(new GenericType<Boolean>() {
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
		return false;
	}
}
