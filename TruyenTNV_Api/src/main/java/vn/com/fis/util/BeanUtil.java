package vn.com.fis.util;

import java.util.ArrayList;
import java.util.List;

import apis_consumer.com.ftu.admin.consumer.entity.PrivilegeEntity;
import apis_consumer.com.ftu.admin.consumer.entity.SiteMapEntity;

public class BeanUtil {
	public static final String NOT_EQUAL = "!=";
	public static final String EQUAL = "=";
	public static final String GREATER = ">";
	public static final String LESS = "<";
	public static final String EQUAL_GREATER = ">=";
	public static final String EQUAL_LESS = "<=";
	public static final String LIKE = "LIKE";

	public static String genWhereCondition(String strColName, String strOperate, String strCondition,
			ArrayList<String> vtStrParams) {
		if (!StringUtil.nvl(strCondition, "").equals("")) {
			vtStrParams.add(strCondition);
			return " and (" + strColName + " " + strOperate + " ?) ";
		} else
			return "";
	}

	public static String genDateWhereCondition(String strColName, String strOperate, String strCondition,
			ArrayList<String> vtStrParams) {
		if (!StringUtil.nvl(strCondition, "").equals("")) {
			vtStrParams.add(strCondition);
			if (strOperate.equals(LESS))
				return " and (" + strColName + " " + strOperate + " to_date(?, 'DD/MM/YYYY') + 1) ";
			else
				return " and (" + strColName + " " + strOperate + " to_date(?, 'DD/MM/YYYY')) ";
		} else
			return "";
	}

	public static List<SiteMapEntity> filterAllMenu(List<SiteMapEntity> lsSitemap) {
		List<SiteMapEntity> sitemapReturn = new ArrayList<>();
		if (lsSitemap != null && lsSitemap.size() > 0) {
			int sitemapSize = lsSitemap.size();
			for (int i = 0; i < sitemapSize; i++) {
				SiteMapEntity sitemapTemp = lsSitemap.get(i);
				if (!"DEFAULT".equals(sitemapTemp.getStrType())) {
					// lsSitemap.remove(i);
					continue;
				}
				List<PrivilegeEntity> privileges = sitemapTemp.getPrivileges();

				if (privileges != null && privileges.size() > 0) {
					boolean tmp = false;
					for (PrivilegeEntity pr : privileges) {
						if ("ACCESS".equals(pr.getCode())) {
							tmp = true;
						}
					}
					if (tmp) {
						// lsSitemap.remove(i);
						// }else
						if (sitemapTemp.getChildrent() != null && sitemapTemp.getChildrent().size() > 0) {
							sitemapTemp.setChildrent(filterAllMenu(sitemapTemp.getChildrent()));
							sitemapReturn.add(sitemapTemp);
						} else {
							sitemapReturn.add(sitemapTemp);
						}
					}
				}
				// else {
				// lsSitemap.remove(i);
				// }
			}
		}
		return sitemapReturn;
	}

}
