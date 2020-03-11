package vn.com.fis.model.mnpcm;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import vn.com.fis.utils.mnpcm.CustomJsonDateDeserializer;

@Entity
public class ExcRateModel {

	@Id
	@Column(name = "EXC_RATE_ID")
	private String excRateId;

	@Column(name = "FIR_CURRENCY")
	private String firCurrency;

	@Column(name = "SEC_CURRENCY")
	private String secCurrency;

	@Column(name = "RATE")
	private String rate;

	@Temporal(TemporalType.DATE)
	@Column(name = "STA_DATE")
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date staDate;

	@Temporal(TemporalType.DATE)
	@Column(name = "END_DATE")
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date endDate;

	public String getExcRateId() {
		return excRateId;
	}

	public void setExcRateId(String excRateId) {
		this.excRateId = excRateId;
	}

	public String getFirCurrency() {
		return firCurrency;
	}

	public void setFirCurrency(String firCurrency) {
		this.firCurrency = firCurrency;
	}

	public String getSecCurrency() {
		return secCurrency;
	}

	public void setSecCurrency(String secCurrency) {
		this.secCurrency = secCurrency;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	public Date getStaDate() {
		return staDate;
	}

	public void setStaDate(Date staDate) {
		this.staDate = staDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

}
