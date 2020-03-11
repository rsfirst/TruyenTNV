package vn.com.fis.model.css;

import java.util.List;

import vn.com.fis.entity.css.AgentEntity;

public class InputAgentAction {
	private AgentEntity agentEntity;
	private String ip;
	private List<AgencyObject> lstAgencyObject;
	private List<String> request;

	/**
	 * @return the request
	 */
	public List<String> getRequest() {
		return request;
	}

	/**
	 * @param request
	 *            the request to set
	 */
	public void setRequest(List<String> request) {
		this.request = request;
	}

	/**
	 * @return the lstAgencyObject
	 */
	public List<AgencyObject> getLstAgencyObject() {
		return lstAgencyObject;
	}

	/**
	 * @param lstAgencyObject
	 *            the lstAgencyObject to set
	 */
	public void setLstAgencyObject(List<AgencyObject> lstAgencyObject) {
		this.lstAgencyObject = lstAgencyObject;
	}

	/**
	 * @return the agentEntity
	 */
	public AgentEntity getAgentEntity() {
		return agentEntity;
	}

	/**
	 * @param agentEntity
	 *            the agentEntity to set
	 */
	public void setAgentEntity(AgentEntity agentEntity) {
		this.agentEntity = agentEntity;
	}

	/**
	 * @return the ip
	 */
	public String getIp() {
		return ip;
	}

	/**
	 * @param ip
	 *            the ip to set
	 */
	public void setIp(String ip) {
		this.ip = ip;
	}
}
