package vn.com.fis.model.css;

/**
 * <p>Title: </p>
 *
 * <p>Description: </p>
 *
 * <p>Copyright: Copyright (c) 2004</p>
 *
 * <p>Company: </p>
 *
 * @author not attributable
 * @version 1.0
 */

import java.io.InputStream;
import java.io.OutputStream;
import java.util.*;

import com.fss.util.DateUtil;
import com.fss.util.StringUtil;
import vn.com.fis.utils.css.Constants;


public class LogItem
{
	private long transID;
	private String sourceNumber;
	private String targetNumber;
	private String data;
	private String INErrorCode;
	private Date transDate;
	private String keyword;
	private long sessionID;
	private String resultCode;
	private boolean recordStatus;
	private double transAmount;
	private String recordType;
	private int channelID;
	private String delimeter = "|";
	private long userID;
	private Hashtable mprtAttribute;
	private int retryCount = 0;

	public void setAttributes(Hashtable prt)
	{
		mprtAttribute = prt;
	}

	public void setAttribute(String strKey,Object objValue)
	{
		mprtAttribute.put(strKey,objValue);
	}

	public void setAttributes(Properties prt)
	{
		mprtAttribute = prt;
	}

	public Object getAttribute(String strKey)
	{
		return mprtAttribute.get(strKey);
	}

	public void store(OutputStream os) throws Exception
	{
	}

	public Hashtable getAttributes()
	{
		return mprtAttribute;
	}

	public void load(InputStream is) throws Exception
	{
	}

	public String getContent()
	{
		return toString();
	}

	public LogItem(long transID,java.util.Date transDate,long sessionID,
				   long userID,String sourceNumber,String targetNumber,
				   double transAmount,String keyword,String data,String recordType)
	{
		this(transID,transDate,sessionID,userID,"",
			 true,sourceNumber,targetNumber,data,
			 keyword,transAmount,recordType, Constants.ETOPUP_CHANNEL_WEB);
	}

	public LogItem(long transID,java.util.Date transDate,long sessionID,
				   long userID,String sourceNumber,String targetNumber,
				   double transAmount,String keyword,String data)
	{
		this(transID,transDate,sessionID,userID,"",
			 true,sourceNumber,targetNumber,data,
			 keyword,transAmount,"request",Constants.ETOPUP_CHANNEL_WEB);
	}

	public LogItem(long transID,java.util.Date transDate,long sessionID,
				   long userID,String resultCode,boolean recordStatus,
				   String sourceNumber,String targetNumber,String data,
				   String keyword,double transAmount,String recordType,int channelID)
	{
		mprtAttribute = new Properties();
		this.transID = transID;
		this.transDate = transDate;
		this.sessionID = sessionID;
		this.resultCode = resultCode;
		this.recordStatus = recordStatus;
		this.sourceNumber = sourceNumber;
		this.targetNumber = targetNumber;
		this.data = data;
		this.keyword = keyword;
		this.transAmount = transAmount;
		this.recordType = recordType;
		this.channelID = channelID;
		this.userID = userID;
	}

	public LogItem(String logData) throws Exception
	{
		String[] param = logData.split(delimeter);
		transID = Long.parseLong(param[0]);
		transDate = DateUtil.toDate(param[1],"yyyyMMddhhmmss");
		sessionID = Long.parseLong(param[2]);
		resultCode = param[3];
		recordStatus = Integer.parseInt(param[4]) == 0 ? true : false;
		sourceNumber = param[5];
		targetNumber = param[6];
		data = param[7];
		keyword = param[8];
		transAmount = Double.parseDouble(param[9]);
		recordType = param[10];
		channelID = Integer.parseInt(param[11]);
		userID = Integer.parseInt(param[12]);
	}

	public void setTransID(long transID)
	{
		this.transID = transID;
	}

	public void setSourceNumber(String sourceNumber)
	{
		this.sourceNumber = sourceNumber;
	}

	public void setTargetNumber(String targetNumber)
	{
		this.targetNumber = targetNumber;
	}

	public void setData(String data)
	{
		this.data = data;
	}

	public void setTransDate(Date transDate)
	{
		this.transDate = transDate;
	}

	public void setKeyword(String keyword)
	{
		this.keyword = keyword;
	}

	public void setSessionID(long sessionID)
	{
		this.sessionID = sessionID;
	}

	public void setResultCode(String resultCode)
	{
		this.resultCode = resultCode;
	}

	public void setRecordStatus(boolean recordStatus)
	{
		this.recordStatus = recordStatus;
	}

	public void setTransAmount(double transAmount)
	{
		this.transAmount = transAmount;
	}

	public void setRecordType(String recordType)
	{
		this.recordType = recordType;
	}

	public void setChannelID(int channelID)
	{
		this.channelID = channelID;
	}

	public void setUserID(long userID)
	{
		this.userID = userID;
	}

	public void setRetryCount(int retryCount)
	{
		this.retryCount = retryCount;
	}

	public void setINErrorCode(String INErrorCode)
	{
		this.INErrorCode = INErrorCode;
	}

	public long getTransID()
	{
		return transID;
	}

	public String getSourceNumber()
	{
		return sourceNumber;
	}

	public String getTargetNumber()
	{
		return targetNumber;
	}

	public String getData()
	{
		return data;
	}

	public Date getTransDate()
	{
		if(transDate != null)
		{
			return transDate;
		}
		else
		{
			return new java.util.Date();
		}
	}

	public String getKeyword()
	{
		return keyword;
	}

	public long getSessionID()
	{
		return sessionID;
	}

	public String getResultCode()
	{
		return resultCode;
	}

	public boolean getRecordStatus()
	{
		return recordStatus;
	}

	public double getTransAmount()
	{
		return transAmount;
	}

	public String getRecordType()
	{
		return recordType;
	}

	public int getChannelID()
	{
		return channelID;
	}

	public String getINErrorCode()
	{
		return INErrorCode;
	}

	public String getDelimeter()
	{
		return delimeter;
	}

	public long getUserID()
	{
		return userID;
	}

	public int getRetryCount()
	{
		return retryCount;
	}

	public String toString()
	{
		String strReturn = "";
		strReturn = strReturn + transID + delimeter +
					StringUtil.format(getTransDate(),"yyyyMMddhhmmss") + delimeter +
					sessionID + delimeter +
					StringUtil.nvl(resultCode,"") + delimeter +
					(recordStatus == true ? 0 : 1) + delimeter +
					StringUtil.nvl(sourceNumber,"") + delimeter +
					StringUtil.nvl(targetNumber,"") + delimeter +
					StringUtil.nvl(data,"") + delimeter +
					StringUtil.nvl(keyword,"") + delimeter +
					transAmount + delimeter +
					StringUtil.nvl(recordType,"") + delimeter +
					channelID + delimeter + userID;
		return strReturn;
	}

	public void setAttributes(Map map)
	{
	}
}
