package vn.com.fis.model.css;

import java.util.List;

import vn.com.fis.entity.css.AgentEntity;

public class InputUpdateAgent {
	private boolean changeSapCode;
	private boolean changeStatus;
	private List<AgentEntity> lstAgent;
	private String ipClient;

	/**
	 * @return the ipClient
	 */
	public String getIpClient() {
		return ipClient;
	}

	/**
	 * @param ipClient
	 *            the ipClient to set
	 */
	public void setIpClient(String ipClient) {
		this.ipClient = ipClient;
	}

	/**
	 * @return the changeSapCode
	 */
	public boolean getChangeSapCode() {
		return changeSapCode;
	}

	/**
	 * @param changeSapCode
	 *            the changeSapCode to set
	 */
	public void setChangeSapCode(boolean changeSapCode) {
		this.changeSapCode = changeSapCode;
	}

	/**
	 * @return the changeStatus
	 */
	public boolean getChangeStatus() {
		return changeStatus;
	}

	/**
	 * @param changeStatus
	 *            the changeStatus to set
	 */
	public void setChangeStatus(boolean changeStatus) {
		this.changeStatus = changeStatus;
	}

	/**
	 * @return the lstAgent
	 */
	public List<AgentEntity> getLstAgent() {
		return lstAgent;
	}

	/**
	 * @param lstAgent
	 *            the lstAgent to set
	 */
	public void setLstAgent(List<AgentEntity> lstAgent) {
		this.lstAgent = lstAgent;
	}

}
