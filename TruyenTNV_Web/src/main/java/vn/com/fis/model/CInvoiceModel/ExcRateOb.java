package vn.com.fis.model.CInvoiceModel;

public class ExcRateOb
{
	private String exc_rate_id;
	private String sta_date;
	private String fir_currency;
	private String sec_currency;
	private String rate;
	private String end_date;

	public ExcRateOb()
	{
		// TODO Auto-generated constructor stub
	}

	public ExcRateOb(String exc_rate_id, String sta_date, String fir_currency, String sec_currency, String rate, String end_date)
	{
		this.exc_rate_id = exc_rate_id;
		this.sta_date = sta_date;
		this.fir_currency = fir_currency;
		this.sec_currency = sec_currency;
		this.rate = rate;
		this.end_date = end_date;

	}

	public String getExc_rate_id()
	{
		return exc_rate_id;
	}

	public void setExc_rate_id(String exc_rate_id)
	{
		this.exc_rate_id = exc_rate_id;
	}

	public String getSta_date()
	{
		return sta_date;
	}

	public void setSta_date(String sta_date)
	{
		this.sta_date = sta_date;
	}

	public String getFir_currency()
	{
		return fir_currency;
	}

	public void setFir_currency(String fir_currency)
	{
		this.fir_currency = fir_currency;
	}

	public String getSec_currency()
	{
		return sec_currency;
	}

	public void setSec_currency(String sec_currency)
	{
		this.sec_currency = sec_currency;
	}

	public String getRate()
	{
		return rate;
	}

	public void setRate(String rate)
	{
		this.rate = rate;
	}

	public String getEnd_date()
	{
		return end_date;
	}

	public void setEnd_date(String end_date)
	{
		this.end_date = end_date;
	}

}
