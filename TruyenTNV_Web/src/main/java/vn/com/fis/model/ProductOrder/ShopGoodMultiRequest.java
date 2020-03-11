package vn.com.fis.model.ProductOrder;

import java.util.List;

import vn.com.fis.model.epos.ShopSearchOutput;

//ADD BY THANGPC6

public class ShopGoodMultiRequest
{
	public ShopGoodMultiRequest ()
	{

	}
	
	List<GoodInfoNew> lstGood;
	List<ShopSearchOutput> lstShop;
	String userRequest;
	
	
	public String getUserRequest() {
		return userRequest;
	}
	public void setUserRequest(String userRequest) {
		this.userRequest = userRequest;
	}
	public List<GoodInfoNew> getLstGood() {
		return lstGood;
	}
	public void setLstGood(List<GoodInfoNew> lstGood) {
		this.lstGood = lstGood;
	}
	public List<ShopSearchOutput> getLstShop() {
		return lstShop;
	}
	public void setLstShop(List<ShopSearchOutput> lstShop) {
		this.lstShop = lstShop;
	}
}
