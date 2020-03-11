package vn.com.fis.eim_client.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.expression.SecurityExpressionRoot;
import org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;
import org.springframework.security.core.Authentication;

import vn.com.fis.common.spring.ApplicationContextProvider;

public class EimMethodSecuredRoot extends SecurityExpressionRoot implements MethodSecurityExpressionOperations
{
	private Logger log = LoggerFactory.getLogger(EimMethodSecuredRoot.class);

	private Object filterObject;
	private Object returnObject;

	EimCheckerAdapter eimCheckerAdapter = ApplicationContextProvider.getBean("eimCheckerAdapter", EimCheckerAdapter.class);

	public EimMethodSecuredRoot(Authentication authentication)
	{
		super(authentication);
	}

	public boolean eimSecured(String resources)
	{
		// return true;
		final JwtUser user = ((JwtUser) this.getPrincipal());

		boolean eimAllow;
		try
		{
			eimAllow = eimCheckerAdapter.checkEim(user.getAuthoritiesString(), resources, user.getAuthToken());

			log.debug(user.getUsername() + " with roles (" + user.getAuthoritiesString() + ") access " + resources + ": " + (eimAllow ? "ALLOW" : "NOT ALLOW"));
		}
		catch (Exception e)
		{
			log.debug(user.getUsername() + " with roles (" + user.getAuthoritiesString() + ") access " + resources + ": " + e.getMessage());
			e.printStackTrace();
			throw e;
		}

		return eimAllow;
	}

	@Override
	public Object getFilterObject()
	{
		return this.filterObject;
	}

	@Override
	public Object getReturnObject()
	{
		return this.returnObject;
	}

	@Override
	public Object getThis()
	{
		return this;
	}

	@Override
	public void setFilterObject(Object obj)
	{
		this.filterObject = obj;
	}

	@Override
	public void setReturnObject(Object obj)
	{
		this.returnObject = obj;
	}

}