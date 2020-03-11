package apis_consumer.com.ftu.admin.consumer;

import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import apis_consumer.com.ftu.admin.consumer.config.ClientConsumerConfig;
import apis_consumer.com.ftu.admin.consumer.entity.AttributeOutput;
import apis_consumer.com.ftu.admin.consumer.entity.IdentityOutput;
import apis_consumer.com.ftu.admin.consumer.entity.OrganizationOutput;
import apis_consumer.com.ftu.admin.consumer.entity.PermissionOutput;
import apis_consumer.com.ftu.admin.consumer.entity.SiteMapOutput;
import apis_consumer.com.ftu.admin.consumer.entity.TransEntity;
import apis_consumer.com.ftu.admin.consumer.utils.ConsumerPropeties;

/**
 * The Class AuthorizationConsumer.
 */
public class AuthorizationConsumer
{

	/**
	 * Gets the tree site map by app.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strAppCode
	 *            the str app code
	 * @return the tree site map by app
	 * @throws Exception
	 *             the exception
	 */
	public static SiteMapOutput getTreeSiteMapByApp(TransEntity transEntity, String strAppCode) throws Exception
	{
		SiteMapOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.sitemaps-by-app") + "/" + strAppCode,
				MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<SiteMapOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new SiteMapOutput();
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

	/**
	 * Gets the tree site map for role.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strAppCode
	 *            the str app code
	 * @return the tree site map for role
	 * @throws Exception
	 *             the exception
	 */
	public static SiteMapOutput getTreeSiteMapForRole(TransEntity transEntity, String strAppCode) throws Exception
	{
		SiteMapOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.sitemaps-for-role") + "/" + strAppCode,
				MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<SiteMapOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new SiteMapOutput();
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

	/**
	 * Gets the tree site map for role prl.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strAppCode
	 *            the str app code
	 * @param strHasPrivilege
	 *            the str has privilege
	 * @return the tree site map for role prl
	 * @throws Exception
	 *             the exception
	 */
	public static SiteMapOutput getTreeSiteMapForRolePrl(TransEntity transEntity, String strAppCode, String strHasPrivilege) throws Exception
	{
		SiteMapOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity,
				ConsumerPropeties.getPath("path.sitemaps-for-role-prl") + "/" + strAppCode + "&" + strHasPrivilege, MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<SiteMapOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new SiteMapOutput();
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

	/**
	 * Gets the tree site map by roles and app.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strRoleCodes
	 *            the str role codes
	 * @param strAppCode
	 *            the str app code
	 * @return the tree site map by roles and app
	 * @throws Exception
	 *             the exception
	 */
	public static SiteMapOutput getTreeSiteMapByRolesAndApp(TransEntity transEntity, String strRoleCodes, String strAppCode) throws Exception
	{
		SiteMapOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity,
				ConsumerPropeties.getPath("path.sitemaps-by-grantee-app") + "/" + strRoleCodes + "&" + strAppCode, MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<SiteMapOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new SiteMapOutput();
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

	/**
	 * Gets the tree site map for leaves.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strLeavesCode
	 *            the str leaves code
	 * @return the tree site map for leaves
	 * @throws Exception
	 *             the exception
	 */
	public static SiteMapOutput getTreeSiteMapForLeaves(TransEntity transEntity, String strLeavesCode) throws Exception
	{
		SiteMapOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.sitemaps-leaves") + "/" + strLeavesCode,
				MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<SiteMapOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new SiteMapOutput();
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

	/**
	 * Gets the organizations.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @return the organizations
	 * @throws Exception
	 *             the exception
	 */
	public static OrganizationOutput getOrganizations(TransEntity transEntity) throws Exception
	{
		OrganizationOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.organizations"),
				MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<OrganizationOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new OrganizationOutput();
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

	/**
	 * Gets the all identities.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @return the all identities
	 * @throws Exception
	 *             the exception
	 */
	public static IdentityOutput getAllIdentities(TransEntity transEntity) throws Exception
	{
		IdentityOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.identities"), MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<IdentityOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new IdentityOutput();
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

	/**
	 * Gets the permissions by role.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strRoleCode
	 *            the str role code
	 * @param strGrantedObj
	 *            the str granted obj
	 * @return the permissions by role
	 * @throws Exception
	 *             the exception
	 */
	public static PermissionOutput getPermissionsByRole(TransEntity transEntity, String strRoleCode, String strGrantedObj) throws Exception
	{
		PermissionOutput output = null;
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity,
				ConsumerPropeties.getPath("path.permissions-by-role") + "/" + ConsumerPropeties.getProperty("consumer.app") + "&" + strGrantedObj,
				MediaType.APPLICATION_JSON);
		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<PermissionOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new PermissionOutput();
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

	/**
	 * Gets the permission by role.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strRoleCode
	 *            the str role code
	 * @param strGrantedObj
	 *            the str granted obj
	 * @param strGrantedCode
	 *            the str granted code
	 * @return the permission by role
	 * @throws Exception
	 *             the exception
	 */
	public static PermissionOutput getPermissionByRole(TransEntity transEntity, String strRoleCode, String strGrantedObj, String strGrantedCode)
			throws Exception
	{
		PermissionOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.permission-by-role") + "/"
				+ ConsumerPropeties.getProperty("consumer.app") + "&" + strGrantedObj + "&" + strGrantedCode, MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<PermissionOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new PermissionOutput();
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

	/**
	 * Gets the permissions by grantee.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strGranteeObj
	 *            the str grantee obj
	 * @param strGranteeCodes
	 *            the str grantee codes
	 * @param strGrantedObj
	 *            the str granted obj
	 * @return the permissions by grantee
	 * @throws Exception
	 *             the exception
	 */
	public static PermissionOutput getPermissionsByGrantee(TransEntity transEntity, String strGranteeObj, String strGranteeCodes, String strGrantedObj)
			throws Exception
	{
		PermissionOutput output = null;
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.permissions-by-grantee") + "/"
				+ ConsumerPropeties.getProperty("consumer.app") + "&" + strGranteeObj + "&" + strGranteeCodes + "&" + strGrantedObj,
				MediaType.APPLICATION_JSON);
		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<PermissionOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new PermissionOutput();
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

	/**
	 * Gets the permission by grantee.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strGranteeObj
	 *            the str grantee obj
	 * @param strGranteeCodes
	 *            the str grantee codes
	 * @param strGrantedObj
	 *            the str granted obj
	 * @param strGrantedCodes
	 *            the str granted codes
	 * @return the permission by grantee
	 * @throws Exception
	 *             the exception
	 */
	public static PermissionOutput getPermissionByGrantee(TransEntity transEntity, String strGranteeObj, String strGranteeCodes, String strGrantedObj,
			String strGrantedCodes) throws Exception
	{
		PermissionOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.permission-by-grantee") + "/"
				+ ConsumerPropeties.getProperty("consumer.app") + "&" + strGranteeObj + "&" + strGranteeCodes + "&" + strGrantedObj + "&" + strGrantedCodes,
				MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<PermissionOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new PermissionOutput();
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

	/**
	 * Gets the attributes by app.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @param strAssetRefCode
	 *            the str asset ref code
	 * @return the attributes by app
	 * @throws Exception
	 *             the exception
	 */
	public static AttributeOutput getAttributesByApp(TransEntity transEntity, String strAssetRefCode) throws Exception
	{
		AttributeOutput output = null;
		Response response = null;

		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity,
				ConsumerPropeties.getPath("path.attributes-by-app") + "/" + ConsumerPropeties.getProperty("consumer.app"), MediaType.APPLICATION_JSON);

		try
		{
			response = builder.get();
			output = response.readEntity(new GenericType<AttributeOutput>() {
			});
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
			output = new AttributeOutput();
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

	/**
	 * Refresh token.
	 *
	 * @param transEntity
	 *            the trans entity
	 * @return the string
	 * @throws Exception
	 *             the exception
	 */
	public static TransEntity refreshToken(TransEntity transEntity) throws Exception
	{
		System.out.println("userName: " + transEntity.getUsername());
		TransEntity trans = new TransEntity();
		Response response = null;
		Invocation.Builder builder = ClientConsumerConfig.clientRequest(transEntity, ConsumerPropeties.getPath("path.refresh-token"),
				MediaType.APPLICATION_JSON);
		try
		{
			response = builder.get();
			if (200 == response.getStatus())
			{
				trans = response.readEntity(new GenericType<TransEntity>() {
				});
			}
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
		finally
		{
			if (response != null)
				response.close();
		}
		System.out.println("transId: " + trans.getTransId());

		return trans;
	}

}
