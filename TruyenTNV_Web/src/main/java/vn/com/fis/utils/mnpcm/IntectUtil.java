package vn.com.fis.utils.mnpcm;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Properties;
import java.util.Vector;

import com.fss.util.StringUtil;

public class IntectUtil
{
	//test
//	private static final String MSTRPORT = "30315";
//	private static final String MSTRHOST = "10.8.8.10";
//	private static final String MSTRUSERNAME = "pos";
//	private static final String MSTRPASSWORD = "pospos1";
	//tranning
/*
	private static final String MSTRPORT = "30415";
	private static final String MSTRHOST = "10.8.8.10";
	private static final String MSTRUSERNAME = "POS";
	private static final String MSTRPASSWORD = "abcd1234";
*/

	private static String MSTRPORT = "40015";
	private static String MSTRHOST = "10.8.7.17";
	private static String MSTRUSERNAME = "POS";
	private static String MSTRPASSWORD = "POS_09";

	private static SimpleDateFormat fmt = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//	private static Dictionary dic = null;
//	private static DictionaryNode ndConnection = null;

//	static
//	{
//		try
//		{
//			dic = new Dictionary("resource/com/fss/sm/ServerConfig.txt");
//			String strNode = dic.getString("SingleViewSystem");
//			ndConnection = dic.getNode("Connection." + strNode);
//			MSTRHOST = ndConnection.getString("Host");
//			MSTRPORT = ndConnection.getString("Port");
//			MSTRUSERNAME = ndConnection.getString("UserName");
//			MSTRPASSWORD = ndConnection.getString("Password");
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//		}
//	}

	public IntectUtil()
	{
	}


	public static void appendList(ArrayList lstTarget,ArrayList lstSource)
	{
		for(int i = 0;i < lstSource.size();i++)
		{
			lstTarget.add(lstSource.get(i));
		}
	}

	public static void appendVector(Vector vctTarget,Vector vctSource)
	{
		for(int i = 0;i < vctSource.size();i++)
		{
			vctTarget.add((Vector)vctSource.elementAt(i));
		}
	}

	public static Properties convert2ListToProperties(ArrayList listFieldNames,ArrayList listFieldValues)
	{
		Properties pro = new Properties();
		for(int i = 0;i < listFieldNames.size();i++)
		{
			pro.setProperty((String)listFieldNames.get(i),(String)listFieldValues.get(i));
		}
		return pro;
	}

	public static Vector convert2ListToVector(ArrayList listFieldNames,ArrayList listFieldValues)
	{
		Vector vctReturn = new Vector();
		for(int i = 0;i < listFieldNames.size();i++)
		{
			Vector vctRow = new Vector();
			vctRow.add(listFieldNames.get(i));
			if (listFieldValues.get(i) == null)
			{
				vctRow.add(listFieldValues.get(i));
			}
			else
			{
				if(listFieldValues.get(i).getClass().toString().equals("class java.util.Date"))
				{
					vctRow.add(fmt.format((Date)listFieldValues.get(i)));
				}
				else
				{
					vctRow.add(listFieldValues.get(i));
				}
			}
			vctReturn.add(vctRow);
		}
		return vctReturn;
	}

	public static ArrayList convertArrayToArrayList(String[] arrFieldNames)
	{
		ArrayList vctReturn = new ArrayList();
		for(int i = 0;i < arrFieldNames.length;i++)
		{
			vctReturn.add(arrFieldNames[i]);
		}

		return vctReturn;
	}

//
//	public static TreStaticCalls getConnection()
//	{
//		TreStaticCalls ltc = null;
//		try
//		{
//			Properties prop = new java.util.Properties();
//			prop.setProperty("ThpHost",MSTRHOST);
//			prop.setProperty("ThpPort",MSTRPORT);
//			prop.setProperty("Charset","UTF-8");
//			prop.setProperty("MessageIndexFile","ejimsgIndex.config");
//
//			ltc = new TreStaticCalls(prop);
//			ltc.treConnect(MSTRUSERNAME,MSTRPASSWORD,"pos");
//			return ltc;
//		}
//		catch(com.adc.eji.tre.TreAlreadyConnectedException e)
//		{
//			// Thread is already connected
//			e.printStackTrace();
//			return null;
//		}
//		catch(com.adc.eji.tre.TreChainedException e)
//		{
//			// Handle other exception
//			e.printStackTrace();
//			return null;
//		}
//	}


	public static String passResultToString(String printType,String header,ArrayList listFieldNames,ArrayList listFieldValues)
	{

		String strResult = "";
		if(printType.equals("1ROW"))
		{
			strResult = header;
			for(int i = 0;i < listFieldNames.size();i++)
			{
				strResult += listFieldNames.get(i).toString() + "-" + StringUtil.nvl(listFieldValues.get(i),"null") + ";";
			}
		}
		else if(printType.equals("1ROW1t"))
		{
			strResult = "\t" + header;
			for(int i = 0;i < listFieldNames.size();i++)
			{
				strResult += listFieldNames.get(i).toString() + "-" + StringUtil.nvl(listFieldValues.get(i),"null") + ";";
			}
		}
		else if(printType.equals("nROW1t"))
		{
			strResult = "\t" + header;
			for(int i = 0;i < listFieldNames.size();i++)
			{
				strResult += "\n\t\t" + listFieldNames.get(i).toString() + "-" + StringUtil.nvl(listFieldValues.get(i),"null") + ";";
			}
		}
		return strResult;
	}

	public static String passResultToString(String printType,String header,Vector vctContent)
	{

		String strResult = "";
		if(printType.equals("1ROW"))
		{
			strResult = header;
			for(int i = 0;i < vctContent.size();i++)
			{
				strResult += ((String)((Vector)vctContent.elementAt(i)).elementAt(0)) + "-" +
					StringUtil.nvl(((Vector)vctContent.elementAt(i)).elementAt(1),"null") + ";";
			}
		}
		else if(printType.equals("nROW"))
		{
			strResult = header;
			for(int i = 0;i < vctContent.size();i++)
			{
				strResult += "\n\t" + ((String)((Vector)vctContent.elementAt(i)).elementAt(0)) + ": " +
					StringUtil.nvl(((Vector)vctContent.elementAt(i)).elementAt(1),"null");
			}
		}
		else if(printType.equals("1ROW1t"))
		{
			strResult = "\t" + header;
			for(int i = 0;i < vctContent.size();i++)
			{
				strResult += ((String)((Vector)vctContent.elementAt(i)).elementAt(0)) + "-" +
					StringUtil.nvl(((Vector)vctContent.elementAt(i)).elementAt(1),"null") + ";";
			}
		}
		else if(printType.equals("1ROW2t"))
		{
			strResult = "\t\t" + header;
			for(int i = 0;i < vctContent.size();i++)
			{
				strResult += ((String)((Vector)vctContent.elementAt(i)).elementAt(0)) + "-" +
					StringUtil.nvl(((Vector)vctContent.elementAt(i)).elementAt(1),"null") + ";";
			}
		}
		else if(printType.equals("nROW1t"))
		{
			strResult = "\t" + header;
			for(int i = 0;i < vctContent.size();i++)
			{
				strResult += "\n\t\t" + ((String)((Vector)vctContent.elementAt(i)).elementAt(0)) + ": " +
					StringUtil.nvl(((Vector)vctContent.elementAt(i)).elementAt(1),"null");
			}
		}
		else if(printType.equals("nROW2t"))
		{
			strResult = "\t\t" + header;
			for(int i = 0;i < vctContent.size();i++)
			{
				strResult += "\n\t\t\t" + ((String)((Vector)vctContent.elementAt(i)).elementAt(0)) + ": " +
					StringUtil.nvl(((Vector)vctContent.elementAt(i)).elementAt(1),"null");
			}
		}
		return strResult;
	}

	public static void printResult(String printType,String header,ArrayList listFieldNames,ArrayList listFieldValues)
	{

		String strResult = "";
		if(printType.equals("1ROW"))
		{
			strResult = header;
			for(int i = 0;i < listFieldNames.size();i++)
			{
				strResult += listFieldNames.get(i).toString() + "-" + StringUtil.nvl(listFieldValues.get(i),"null") + ";";
			}
		}
		else if(printType.equals("nROW1t"))
		{
			strResult = "\t" + header;
			for(int i = 0;i < listFieldNames.size();i++)
			{
				strResult += "\n\t\t" + listFieldNames.get(i).toString() + "-" + StringUtil.nvl(listFieldValues.get(i),"null") + ";";
			}
		}
		System.out.println(strResult);
	}

}
