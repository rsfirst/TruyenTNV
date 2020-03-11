package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;


/**
 * The persistent class for the EPOS_COMMAND database table.
 * 
 */
@Entity
@Table(name="EPOS_COMMAND")
@NamedQuery(name="EposCommand.findAll", query="SELECT e FROM EposCommand e")
public class EposCommand implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="EPOS_COMMAND_ID")
	private long eposCommandId;

	@Column(name="\"COMMAND\"")
	private String command;

	//bi-directional many-to-one association to EposIntegration
	@OneToMany(mappedBy="eposCommand")
	private List<EposIntegration> eposIntegrations;

	public EposCommand() {
	}

	public long getEposCommandId() {
		return this.eposCommandId;
	}

	public void setEposCommandId(long eposCommandId) {
		this.eposCommandId = eposCommandId;
	}

	public String getCommand() {
		return this.command;
	}

	public void setCommand(String command) {
		this.command = command;
	}

	public List<EposIntegration> getEposIntegrations() {
		return this.eposIntegrations;
	}

	public void setEposIntegrations(List<EposIntegration> eposIntegrations) {
		this.eposIntegrations = eposIntegrations;
	}

	public EposIntegration addEposIntegration(EposIntegration eposIntegration) {
		getEposIntegrations().add(eposIntegration);
		eposIntegration.setEposCommand(this);

		return eposIntegration;
	}

	public EposIntegration removeEposIntegration(EposIntegration eposIntegration) {
		getEposIntegrations().remove(eposIntegration);
		eposIntegration.setEposCommand(null);

		return eposIntegration;
	}

}
