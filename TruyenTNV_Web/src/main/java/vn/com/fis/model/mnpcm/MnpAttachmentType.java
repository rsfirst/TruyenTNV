package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the MNP_ATTACHMENT_TYPE database table.
 * 
 */
@Entity
@Table(name="MNP_ATTACHMENT_TYPE")
public class MnpAttachmentType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ATTACHMENT_TYPE_ID")
	private long attachmentTypeId;

	@Column(name="ATTACHMENT_TYPE")
	private String attachmentType;

	@Column(name="DESCRIPTION")
	private String description;

	@Column(name="NAME")
	private String name;

	public MnpAttachmentType() {
	}

	public long getAttachmentTypeId() {
		return this.attachmentTypeId;
	}

	public void setAttachmentTypeId(long attachmentTypeId) {
		this.attachmentTypeId = attachmentTypeId;
	}

	public String getAttachmentType() {
		return this.attachmentType;
	}

	public void setAttachmentType(String attachmentType) {
		this.attachmentType = attachmentType;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
