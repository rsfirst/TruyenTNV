package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the NPR_DOCUMENT_TYPE database table.
 * 
 */
@Entity
@Table(name="NPR_DOCUMENT_TYPE")
public class NprDocumentType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="NPR_DOCUMENT_ID")
	private BigDecimal nprDocumentId;
	
	@Column(name="DESCRIPTION")
	private String description;

	@Column(name="DOCUMENT_NAME")
	private String documentName;

	@Column(name="DOCUMENT_TYPE")
	private String documentType;

	@Column(name="STATUS")
	private String documentStatus;
	
	public NprDocumentType() {
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDocumentName() {
		return this.documentName;
	}

	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}

	public String getDocumentType() {
		return this.documentType;
	}

	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

	public BigDecimal getNprDocumentId() {
		return this.nprDocumentId;
	}

	public void setNprDocumentId(BigDecimal nprDocumentId) {
		this.nprDocumentId = nprDocumentId;
	}

	public String getDocumentStatus() {
		return documentStatus;
	}

	public void setDocumentStatus(String documentStatus) {
		this.documentStatus = documentStatus;
	}

}
