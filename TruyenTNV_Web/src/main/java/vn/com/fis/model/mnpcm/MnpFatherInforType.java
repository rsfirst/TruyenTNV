
package vn.com.fis.model.mnpcm;

import java.util.ArrayList;
import java.util.List;


public class MnpFatherInforType {

    public List<MnpChildrenInforType> childrenInfor;
    public MnpBillingAddressType billingAddressData;
    public MnpPostalAddressType postalAddressData;
    public MnpPersonInfoType personInfoData;

   
    public List<MnpChildrenInforType> getChildrenInfor() {
        if (childrenInfor == null) {
            childrenInfor = new ArrayList<MnpChildrenInforType>();
        }
        return this.childrenInfor;
    }

   
    public MnpBillingAddressType getBillingAddressData() {
        return billingAddressData;
    }

    public void setBillingAddressData(MnpBillingAddressType value) {
        this.billingAddressData = value;
    }

    public MnpPostalAddressType getPostalAddressData() {
        return postalAddressData;
    }

    
    public void setPostalAddressData(MnpPostalAddressType value) {
        this.postalAddressData = value;
    }

   
    public MnpPersonInfoType getPersonInfoData() {
        return personInfoData;
    }

    
    public void setPersonInfoData(MnpPersonInfoType value) {
        this.personInfoData = value;
    }


	@Override
	public String toString()
	{
		return "Data PostPaid [childrenInfor=" + childrenInfor + ", billingAddressData=" + billingAddressData + ", postalAddressData=" + postalAddressData
				+ ", personInfoData=" + personInfoData + "]";
	}
    
    

}
