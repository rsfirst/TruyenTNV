package vn.com.fis.model.css;

/**
 * The Class AttachmentDataObject.
 */
public class AttachmentDataObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 4053943624349888024L;

	/** The attachment type. */
	private String attachmentType;

	/** The file name. */
	private String fileName;

	/** The filePath. */
	private String filePath;
	
	/** The size. */
	private String size;

	/** The attach ment id client. */
	private String attachMentIdClient;
	
	private String fileIdInserted;

	/**
	 * Gets the attachment type.
	 *
	 * @return the attachment type
	 */
	public String getAttachmentType()
	{
		return attachmentType;
	}

	/**
	 * Sets the attachment type.
	 *
	 * @param attachmentType
	 *            the new attachment type
	 */
	public void setAttachmentType(String attachmentType)
	{
		this.attachmentType = attachmentType;
	}

	/**
	 * Gets the file name.
	 *
	 * @return the file name
	 */
	public String getFileName()
	{
		return fileName;
	}

	/**
	 * Sets the file name.
	 *
	 * @param fileName
	 *            the new file name
	 */
	public void setFileName(String fileName)
	{
		this.fileName = fileName;
	}

	/**
	 * Gets the size.
	 *
	 * @return the size
	 */
	public String getSize()
	{
		return size;
	}

	/**
	 * Sets the size.
	 *
	 * @param size
	 *            the new size
	 */
	public void setSize(String size)
	{
		this.size = size;
	}

	/**
	 * Gets the attach ment id client.
	 *
	 * @return the attach ment id client
	 */
	public String getAttachMentIdClient()
	{
		return attachMentIdClient;
	}

	/**
	 * Sets the attach ment id client.
	 *
	 * @param attachMentIdClient
	 *            the new attach ment id client
	 */
	public void setAttachMentIdClient(String attachMentIdClient)
	{
		this.attachMentIdClient = attachMentIdClient;
	}

	public String getFilePath()
	{
		return filePath;
	}

	public void setFilePath(String filePath)
	{
		this.filePath = filePath;
	}

	public String getFileIdInserted()
	{
		return fileIdInserted;
	}

	public void setFileIdInserted(String fileIdInserted)
	{
		this.fileIdInserted = fileIdInserted;
	}
}
