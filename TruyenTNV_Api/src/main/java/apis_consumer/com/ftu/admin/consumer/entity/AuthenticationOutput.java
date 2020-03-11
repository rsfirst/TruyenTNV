package apis_consumer.com.ftu.admin.consumer.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthenticationOutput implements Serializable
{

	private static final long serialVersionUID = -2251027747056928022L;

	private String errorCode;
	private String errorMessage;
	private String errorCause;
	private String errorRecommend;
	private IdentityEntity identityEntity;
	private TransEntity transEntity;
	private String status;

	public AuthenticationOutput()
	{
		super();
	}

	public String getErrorCode()
	{
		return errorCode;
	}

	public void setErrorCode(String errorCode)
	{
		this.errorCode = errorCode;
	}

	public String getErrorMessage()
	{
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage)
	{
		this.errorMessage = errorMessage;
	}

	public String getErrorCause()
	{
		return errorCause;
	}

	public void setErrorCause(String errorCause)
	{
		this.errorCause = errorCause;
	}

	public String getErrorRecommend()
	{
		return errorRecommend;
	}

	public void setErrorRecommend(String errorRecommend)
	{
		this.errorRecommend = errorRecommend;
	}

	public IdentityEntity getIdentityEntity()
	{
		return identityEntity;
	}

	public void setIdentityEntity(IdentityEntity identityEntity)
	{
		this.identityEntity = identityEntity;
	}

	public TransEntity getTransEntity()
	{
		return transEntity;
	}

	public void setTransEntity(TransEntity transEntity)
	{
		this.transEntity = transEntity;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

}
