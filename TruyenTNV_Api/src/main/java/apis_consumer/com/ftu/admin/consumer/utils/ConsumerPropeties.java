package apis_consumer.com.ftu.admin.consumer.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @version 1.0 09/15/2015
 * @author haitx3
 */

public class ConsumerPropeties
{
	private static Properties props;
	private static String resourceUrl;
	static
	{
		InputStream is = null;
		try
		{
			if (props == null)
			{
				props = PropertyLoader.loadProperties("admin_consumer.properties");
			}
			resourceUrl = props.getProperty("resource.url");
		}
		catch (Throwable ex)
		{
			System.err.println("Initial WebResource failed." + ex);
			throw new ExceptionInInitializerError(ex);
		}
		finally
		{
			if (is != null)
			{
				try
				{
					is.close();
				}
				catch (IOException ignored)
				{
					ignored.printStackTrace();
				}
			}
		}
	}

	public static Properties getProperties()
	{
		return props;
	}

	public static void setProperties(Properties props)
	{
		ConsumerPropeties.props = props;
	}

	public static String getProperty(String strKey)
	{
		return props.getProperty(strKey);
	}

	public static String getResourceUrl()
	{
		if (resourceUrl == null)
		{
			resourceUrl = props.getProperty("resource.url");
		}
		return resourceUrl;
	}

	public static void setResourceUrl(String strResourceUrl)
	{
		ConsumerPropeties.resourceUrl = strResourceUrl;
	}

	public static String getPath(String strPath)
	{
		Object objPath = getProperty(strPath);
		if (objPath != null)
		{
			return objPath.toString();
		}
		else
		{
			return strPath;
		}
	}

	public static String getUrlByPath(String strPath)
	{
		String fullPath = resourceUrl;
		if (getProperty(strPath) != null)
		{
			fullPath += getProperty(strPath);
		}
		else
		{
			fullPath += strPath;
		}
		return fullPath;
	}
}
