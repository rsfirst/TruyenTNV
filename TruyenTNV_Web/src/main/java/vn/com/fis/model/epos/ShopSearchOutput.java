package vn.com.fis.model.epos;

import java.io.Serializable;

public class ShopSearchOutput implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String name;
	private String shop_Id;
	private String shopCode;
	private String shopName;
	private String friend_shop_id;
	private String status;
	private String sqlReslut;
	private String description;
	private String rootCode;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public String getShop_Id() {
		return shop_Id;
	}

	public void setShop_Id(String shop_Id) {
		this.shop_Id = shop_Id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFriend_shop_id() {
		return friend_shop_id;
	}

	public void setFriend_shop_id(String friend_shop_id) {
		this.friend_shop_id = friend_shop_id;
	}

	public String getSqlReslut() {
		return sqlReslut;
	}

	public void setSqlReslut(String sqlReslut) {
		this.sqlReslut = sqlReslut;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getRootCode() {
		return rootCode;
	}

	public void setRootCode(String rootCode) {
		this.rootCode = rootCode;
	}

	@Override
	public String toString()
	{
		return "ShopSearchOutput [name=" + name + ", shop_Id=" + shop_Id + ", shopCode=" + shopCode + ", shopName=" + shopName + "]";
	}

}
