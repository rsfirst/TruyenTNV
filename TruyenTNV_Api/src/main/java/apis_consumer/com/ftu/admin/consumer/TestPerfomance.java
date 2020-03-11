package apis_consumer.com.ftu.admin.consumer;

import apis_consumer.com.ftu.admin.consumer.entity.AuthenticationOutput;
import apis_consumer.com.ftu.admin.consumer.entity.PermissionOutput;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;

class RunnableDemo implements Runnable
{
	private Thread t;
	private String threadName;

	RunnableDemo(String name)
	{
		threadName = name;
		System.out.println("Creating " + threadName);
	}

	public void run()
	{
		System.out.println("Running " + threadName);
		try
		{
			for (int i = 5; i > 0; i--)
			{
				System.out.println("Thread: " + threadName + ", " + i);

				TransEntity transEntity = new TransEntity();

				AuthenticationOutput out;
				try
				{
					out = AuthenticationConsumer.login(transEntity, threadName, "QL0AFWMIX8NRZTKeof9cXsvbvu8=", "VETC.PORTAL.AGENT");
					transEntity = out.getTransEntity();
					if ("1".equals(out.getStatus()))
					{
						System.out.println("Login status:" + out.getErrorCode());
					}
				}
				catch (Exception e1)
				{
					e1.printStackTrace();
				}

				// TransEntity transEntity = new TransEntity();
				// transEntity.setTransId("QL0AFWMIX8NRZTKeof9cXsvbvu8=");
				// transEntity.setUsername("haitx");
				// List<PermissionEntity> lstRs = new
				// ArrayList<PermissionEntity>();
				// PermissionOutput output;
				try
				{
					PermissionOutput output = AuthorizationConsumer.getPermissionsByRole(transEntity, "ADMINISTRATOR", "VETC.PORTAL.AGENT");
					if ("1".equals(output.getStatus()))
					{
						System.out.println("sitemap: " + output.getPermissionsData().size());
					}
				}
				catch (Exception e)
				{
					e.printStackTrace();
				}
				Thread.sleep(5000);
			}
		}
		catch (InterruptedException e)
		{
			System.out.println("Thread " + threadName + " interrupted.");
		}
		System.out.println("Thread " + threadName + " exiting.");
	}

	public void start()
	{
		System.out.println("Starting " + threadName);
		if (t == null)
		{
			t = new Thread(this, threadName);
			t.start();
		}
	}
}

public class TestPerfomance
{

	public static void main(String args[])
	{
		RunnableDemo R1 = new RunnableDemo("haitx5");
		R1.start();

		RunnableDemo R2 = new RunnableDemo("haitx3");
		R2.start();
	}
}
