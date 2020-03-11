package apis_consumer.com.ftu.admin.consumer.log;

import java.util.Date;

import apis_consumer.com.ftu.admin.consumer.LogsConsumer;
import apis_consumer.com.ftu.admin.consumer.entity.PrivilegeEntity;
import apis_consumer.com.ftu.admin.consumer.entity.SecAccessLogEntity;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;

public class Main
{

	public static void main(String[] args)
	{

		// String result =
		// "!@#$%^&*()_+JFKLJHLFK:SJ:FLK".replaceAll("[~!@#$%^&*()+?/:;]", "");
		// System.out.println(result);
		Main m = new Main();
		SecAccessLogEntity i = new SecAccessLogEntity();
		i.setAccessDate(new Date());
		i.setAppName("App name");
		i.setAppCode("aaaaaaaaaaa");
		// SecModuleLogEntity moduleLogEntity = ActionLogInsert.buildLog(1l,
		// (SecIdentity) i, "SEC_IDENTITY",
		// Calendar.getInstance().getTime(), "10.10.10.10",
		// "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

		// SecModuleLogEntity moduleLogEntity = ActionLogDelete.buildLog(1l,
		// (SecIdentity) i, "SEC_IDENTITY",
		// Calendar.getInstance().getTime(), "10.10.10.10",
		// "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

		PrivilegeEntity p = new PrivilegeEntity();
		p.setCode("FDemo");
		p.setName("demo");
		p.setId(11);

		PrivilegeEntity p2 = new PrivilegeEntity();
		p2.setCode("FDemo22222222222");
		p2.setName("demo222222");
		p2.setId(11);

		try
		{
			TransEntity te = new TransEntity();
			te.setCreateTime(new Date());
			te.setIdentityId("1");
			te.setRemoteAddr("10.10.10.10");
			te.setTransId("6540d9e7-3c79-4f2d-8424-091d581e5c13");

			LogsConsumer.logDelete(null, te, new Object[] { te }, "SEC.DASHBOARD", new Date());
			// LogsConsumer.logUpdate(te, new Object[] { p },new Object[] { p2
			// },
			// "SEC.DASHBOARD", new Date());
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		System.out.println("OK!");
	}

}
