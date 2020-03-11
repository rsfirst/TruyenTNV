package vn.com.fis.model.mnpcm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CmGlCodeModel
{

	@Id
	@Column(name = "GL_CODE_ID")
	private String glCodeId;

	@Column(name = "GL_CODE_VALUE_VN")
	private String glCodeValueVn;

	@Column(name = "GL_CODE_VALUE_EN")
	private String glCodeValueEn;

	@Column(name = "VALUE")
	private String value;
	
	
	@Column(name = "GL_CODE_NAME")
	private String glCodeName;

	public String getGlCodeId()
	{
		return glCodeId;
	}

	public void setGlCodeId(String glCodeId)
	{
		this.glCodeId = glCodeId;
	}

	public String getGlCodeValueVn()
	{
		return glCodeValueVn;
	}

	public void setGlCodeValueVn(String glCodeValueVn)
	{
		this.glCodeValueVn = glCodeValueVn;
	}

	public String getGlCodeValueEn()
	{
		return glCodeValueEn;
	}

	public void setGlCodeValueEn(String glCodeValueEn)
	{
		this.glCodeValueEn = glCodeValueEn;
	}

	public String getValue()
	{
		return value;
	}

	public void setValue(String value)
	{
		this.value = value;
	}

	public String getGlCodeName()
	{
		return glCodeName;
	}

	public void setGlCodeName(String glCodeName)
	{
		this.glCodeName = glCodeName;
	}

}
