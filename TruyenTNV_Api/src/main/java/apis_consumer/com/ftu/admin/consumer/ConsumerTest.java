package apis_consumer.com.ftu.admin.consumer;

import java.util.ArrayList;
import java.util.List;

import apis_consumer.com.ftu.admin.consumer.entity.IdentityEntity;
import apis_consumer.com.ftu.admin.consumer.entity.IdentityOutput;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;

public class ConsumerTest
{

	public static void main(String[] args)
	{
		TransEntity transEntity = new TransEntity();
		transEntity.setTransId("BD43B0F0ADE2D9CFCB80726AA6B50719");
		transEntity.setUsername("admin");
		List<IdentityEntity> lstRs = new ArrayList<IdentityEntity>();
		IdentityOutput output;
		try
		{
			output = IdentityConsumer.getAllIdentitiesForRole(transEntity, "PORTAL_CQNN,BILLING.Admin");
			if ("1".equals(output.getStatus()))
			{
				lstRs = output.getIdentities();
				for (IdentityEntity identityEntity : lstRs)
				{
				}
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}

}
