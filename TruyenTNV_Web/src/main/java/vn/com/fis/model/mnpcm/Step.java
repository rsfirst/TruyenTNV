package vn.com.fis.model.mnpcm;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the STEP database table.
 * 
 */
@Entity
@Table(name = "STEP")
public class Step implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="STEP_ID")
	private long stepId;

	private String description;

	private String step;

	@Column(name="STEP_GROUP")
	private String stepGroup;

	//bi-directional many-to-one association to NPR
	@OneToMany(mappedBy="step")
	private List<NPR> nprs;

	public Step() {
	}

	public long getStepId() {
		return this.stepId;
	}

	public void setStepId(long stepId) {
		this.stepId = stepId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStep() {
		return this.step;
	}

	public void setStep(String step) {
		this.step = step;
	}

	public String getStepGroup() {
		return this.stepGroup;
	}

	public void setStepGroup(String stepGroup) {
		this.stepGroup = stepGroup;
	}
//
//	public List<NPR> getNprs() {
//		return this.nprs;
//	}
//
//	public void setNprs(List<NPR> nprs) {
//		this.nprs = nprs;
//	}

/*	public NPR addNpr(NPR npr) {
		getNprs().add(npr);
		npr.setStep(this);

		return npr;
	}

	public NPR removeNpr(NPR npr) {
		getNprs().remove(npr);
		npr.setStep(null);

		return npr;
	}*/

}
