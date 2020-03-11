package apis_consumer.com.ftu.admin.consumer.config;

import java.io.IOException;
import java.util.Calendar;

import javax.ws.rs.client.ClientRequestContext;
import javax.ws.rs.client.ClientRequestFilter;
import javax.ws.rs.client.ClientResponseContext;
import javax.ws.rs.client.ClientResponseFilter;

import apis_consumer.com.ftu.admin.consumer.utils.DateUtil;

public class ClientLoggingFilter implements ClientRequestFilter, ClientResponseFilter
{

	@Override
	public void filter(ClientRequestContext requestContext, ClientResponseContext responseContext) throws IOException
	{
		System.out.print("Response Context: " + DateUtil.dateToString(responseContext.getDate(), DateUtil.FORMAT_DATE_TIME));
		System.out.print("\t Status: " + responseContext.getStatus());
		System.out.print("\t URI: " + requestContext.getUri() + "\n");

	}

	@Override
	public void filter(ClientRequestContext requestContext) throws IOException
	{
		System.out.print("Request Context: " + DateUtil.dateToString(Calendar.getInstance().getTime(), DateUtil.FORMAT_DATE_TIME));
		System.out.print("\t Method: " + requestContext.getMethod());
		System.out.print("\t URI: " + requestContext.getUri() + "\n");
	}

}
