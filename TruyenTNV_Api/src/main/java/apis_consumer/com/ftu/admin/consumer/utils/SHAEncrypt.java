package apis_consumer.com.ftu.admin.consumer.utils;

import java.security.*;

public class SHAEncrypt
{
	public static String getSHA(String aMSISDN,String aPIN)
	{
		MessageDigest md = null;
		byte ba[] = null;
		try
		{
			md = MessageDigest.getInstance("SHA");
			md.update((aMSISDN + aPIN).getBytes("UTF-8"));
			ba = md.digest();
		}
		catch(Exception e)
		{
			System.out.println("Util: sha: caught exception: " + e);
			e.printStackTrace();
		}
		StringBuffer sb = new StringBuffer(ba.length * 2);
		for(int i = 0;i < ba.length;i++)
		{
			sb.append(hexits[(ba[i] & 0xff) / 16 & 0xf]);
			sb.append(hexits[(ba[i] & 0xff) % 16]);
		}

		return sb.toString();
	}

	private static char hexits[] =
		{
		'0','1','2','3','4','5','6','7','8','9',
		'A','B','C','D','E','F'
	};
	public static void main(String[] args)
	{
//		System.out.println("0987203580" + "Datpx123456");
		System.out.println(getSHA("0987554321","123456"));
	}
}

//0E33A8C089F8615B2EE715383E2D4027D7339B26
//FAC9F0D8D5AFE47D8CDF06C7B45EBA7BE023766C
