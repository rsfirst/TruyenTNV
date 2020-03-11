package vn.com.fis.model.epos;

import java.util.List;

/**
 * The Class MessagesResponse.
 */
public class MessagesResponse implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 4048972425814552025L;

	/** The status. */
	private String status;

	private String code;

	/** The messages. */
	private String messages;

	/** The guide infor. */
	private String guideInfor;

	/** The list result. */
	private String listResult;

	private List listObject;

	private String idResult;

	private String valueReturn;
	
	private Object objectReturn;
	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public String getStatus()
	{
		return status;
	}

	/**
	 * Sets the status.
	 *
	 * @param status
	 *            the new status
	 */
	public void setStatus(String status)
	{
		this.status = status;

		/**
		 * Gets the messages.
		 *
		 * @return the messages
		 */
	}

	/**
	 * Gets the messages.
	 *
	 * @return the messages
	 */
	public String getMessages()
	{
		return messages;
		/**
		 * Sets the messages.
		 *
		 * @param messages
		 *            the new messages
		 */
	}

	/**
	 * Sets the messages.
	 *
	 * @param messages
	 *            the new messages
	 */
	public void setMessages(String messages)
	{
		this.messages = messages;
	}

	/**
	 * Gets the guide infor.
	 *
	 * @return the guide infor
	 */
	public String getGuideInfor()
	{
		return guideInfor;
	}

	/**
	 * Sets the guide infor.
	 *
	 * @param guideInfor
	 *            the new guide infor
	 */
	public void setGuideInfor(String guideInfor)
	{
		this.guideInfor = guideInfor;
	}

	/**
	 * Gets the list result.
	 *
	 * @return the list result
	 */

	public String getCode()
	{
		return code;
	}

	public String getListResult()
	{
		return listResult;
	}

	public void setListResult(String listResult)
	{
		this.listResult = listResult;
	}

	public void setCode(String code)
	{
		this.code = code;
	}

	public String getIdResult()
	{
		return idResult;
	}

	public void setIdResult(String idResult)
	{
		this.idResult = idResult;
	}

	public List getListObject()
	{
		return listObject;
	}

	public void setListObject(List listObject)
	{
		this.listObject = listObject;
	}

	public String getValueReturn()
	{
		return valueReturn;
	}

	public void setValueReturn(String valueReturn)
	{
		this.valueReturn = valueReturn;
	}

	public Object getObjectReturn()
	{
		return objectReturn;
	}

	public void setObjectReturn(Object objectReturn)
	{
		this.objectReturn = objectReturn;
	}
}
