package vn.com.fis.common.css;

public class CommonResponse
{
	String response_code;
	String response_detail;
	
	public CommonResponse()
	{
		
	}
	public CommonResponse(String response_code, String response_detail)
	{
		this.response_code = response_code;
		this.response_detail = response_detail;
	}
	public String getResponse_code()
	{
		return response_code;
	}
	public void setResponse_code(String response_code)
	{
		this.response_code = response_code;
	}
	public String getResponse_detail()
	{
		return response_detail;
	}
	public void setResponse_detail(String response_detail)
	{
		this.response_detail = response_detail;
	}
}
