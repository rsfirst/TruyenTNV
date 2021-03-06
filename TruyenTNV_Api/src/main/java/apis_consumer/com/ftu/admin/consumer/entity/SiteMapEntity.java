package apis_consumer.com.ftu.admin.consumer.entity;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SiteMapEntity implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2308296169882770215L;
	private int id;
	private String strActionCommand;// action controller has high privilege
	private boolean blIsSeparated = false; // than Url
	private String strUrl;
	private String strIcon;
	private String strClass;
	private String strCode;// format: app.pape.menuname
	private String strName;
	private String strNameEn;
	private String strDescription;
	private String strType;
	private boolean blEnableUrl = false;
	private boolean blSetAjax = false;
	private boolean blShowSub = false;
	private Integer intParentId;
	private SiteMapEntity parent;
	private List<SiteMapEntity> childrent;
	private List<AttributeEntity> attributes;
	private List<PrivilegeEntity> privileges;
	private String strStatus;
	private int ord;

	public SiteMapEntity() {
	}

	public int getId() {
		return id;
	}

	public String getStrActionCommand() {
		return strActionCommand;
	}

	public boolean isBlIsSeparated() {
		return blIsSeparated;
	}

	public String getStrUrl() {
		return strUrl;
	}

	public String getStrIcon() {
		return strIcon;
	}

	public String getStrClass() {
		return strClass;
	}

	public String getStrCode() {
		return strCode;
	}

	public String getStrName() {
		return strName;
	}

	public String getStrDescription() {
		return strDescription;
	}

	public void setStrDescription(String strDescription) {
		this.strDescription = strDescription;
	}

	public String getStrType() {
		return strType;
	}

	public void setStrType(String strType) {
		this.strType = strType;
	}

	public boolean isBlEnableUrl() {
		return blEnableUrl;
	}

	public boolean isBlSetAjax() {
		return blSetAjax;
	}

	public boolean isBlShowSub() {
		return blShowSub;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setStrActionCommand(String strActionCommand) {
		this.strActionCommand = strActionCommand;
	}

	public void setBlIsSeparated(boolean blIsSeparated) {
		this.blIsSeparated = blIsSeparated;
	}

	public void setStrUrl(String strUrl) {
		this.strUrl = strUrl;
	}

	public void setStrIcon(String strIcon) {
		this.strIcon = strIcon;
	}

	public void setStrClass(String strClass) {
		this.strClass = strClass;
	}

	public void setStrCode(String strCode) {
		this.strCode = strCode;
	}

	public void setStrName(String strName) {
		this.strName = strName;
	}

	public void setBlEnableUrl(boolean blEnableUrl) {
		this.blEnableUrl = blEnableUrl;
	}

	public void setBlSetAjax(boolean blSetAjax) {
		this.blSetAjax = blSetAjax;
	}

	public void setBlShowSub(boolean blShowSub) {
		this.blShowSub = blShowSub;
	}

	public Integer getIntParentId() {
		return intParentId;
	}

	public void setIntParentId(Integer intParentId) {
		this.intParentId = intParentId;
	}

	public SiteMapEntity getParent() {
		return parent;
	}

	public void setParent(SiteMapEntity parent) {
		this.parent = parent;
	}

	public List<SiteMapEntity> getChildrent() {
		return childrent;
	}

	public void setChildrent(List<SiteMapEntity> childrent) {
		this.childrent = childrent;
	}

	public List<AttributeEntity> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<AttributeEntity> attributes) {
		this.attributes = attributes;
	}

	public List<PrivilegeEntity> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(List<PrivilegeEntity> privileges) {
		this.privileges = privileges;
	}

	public String getStrStatus() {
		return strStatus;
	}

	public void setStrStatus(String strStatus) {
		this.strStatus = strStatus;
	}

	public int getOrd() {
		return ord;
	}

	public void setOrd(int ord) {
		this.ord = ord;
	}

	public String getStrNameEn() {
		return strNameEn;
	}

	public void setStrNameEn(String strNameEn) {
		this.strNameEn = strNameEn;
	}

}
