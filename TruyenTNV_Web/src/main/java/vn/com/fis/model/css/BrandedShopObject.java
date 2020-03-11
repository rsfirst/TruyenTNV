package vn.com.fis.model.css;

/**
 * The Class BrandedShopObject.
 */
public class BrandedShopObject implements java.io.Serializable
{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -7421154572982092428L;

	private String id;

	private String code;

	private String text;

	/**
	 * Instantiates a new branded shop object.
	 */
	public BrandedShopObject()
	{

	}

	/**
	 * Instantiates a new branded shop object.
	 *
	 */
	public BrandedShopObject(String id, String text)
	{
		this.id = id;
		this.text = text;
	}

	public BrandedShopObject(String id, String text, String code)
	{
		this.id = id;
		this.text = text;
		this.code = code;
	}

	public String getId()
	{
		return id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getText()
	{
		return text;
	}

	public void setText(String text)
	{
		this.text = text;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
}
