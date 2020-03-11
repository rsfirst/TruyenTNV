
package vn.com.fis.model.mnpcm;

import java.util.ArrayList;
import java.util.List;

public class MnpChildrenInforType
{

	public MnpBillingAddressType billingAddressData;
	public MnpPostalAddressType postalAddressData;
	public MnpPersonInfoType personInfoMessage;
	public String paymentMethod;
	public String paymentMethodStr;
	public String billType;
	public String billTypeStr;
	public String paymentType;
	public String paymentTypeStr;
	protected List<ProvisioningSubscriberInfo> proSubscriberList;
	private List<String> listNoteRecord;

	public MnpBillingAddressType getBillingAddressData()
	{
		return billingAddressData;
	}

	public void setBillingAddressData(MnpBillingAddressType value)
	{
		this.billingAddressData = value;
	}

	public MnpPostalAddressType getPostalAddressData()
	{
		return postalAddressData;
	}

	public void setPostalAddressData(MnpPostalAddressType value)
	{
		this.postalAddressData = value;
	}

	public MnpPersonInfoType getPersonInfoMessage()
	{
		return personInfoMessage;
	}

	public void setPersonInfoMessage(MnpPersonInfoType value)
	{
		this.personInfoMessage = value;
	}

	public String getPaymentMethod()
	{
		return paymentMethod;
	}

	public void setPaymentMethod(String value)
	{
		this.paymentMethod = value;
	}

	public String getBillType()
	{
		return billType;
	}

	public void setBillType(String value)
	{
		this.billType = value;
	}

	public String getPaymentType()
	{
		return paymentType;
	}

	public void setPaymentType(String value)
	{
		this.paymentType = value;
	}

	public String getPaymentMethodStr()
	{
		return paymentMethodStr;
	}

	public void setPaymentMethodStr(String paymentMethodStr)
	{
		this.paymentMethodStr = paymentMethodStr;
	}

	public String getBillTypeStr()
	{
		return billTypeStr;
	}

	public void setBillTypeStr(String billTypeStr)
	{
		this.billTypeStr = billTypeStr;
	}

	public String getPaymentTypeStr()
	{
		return paymentTypeStr;
	}

	public void setPaymentTypeStr(String paymentTypeStr)
	{
		this.paymentTypeStr = paymentTypeStr;
	}

	public List<ProvisioningSubscriberInfo> getProSubscriberList()
	{
		if (proSubscriberList == null)
		{
			proSubscriberList = new ArrayList<ProvisioningSubscriberInfo>();
		}
		return this.proSubscriberList;

	}

	public void setProSubscriberList(List<ProvisioningSubscriberInfo> proSubscriberList)
	{
		this.proSubscriberList = proSubscriberList;
	}

	public List<String> getListNoteRecord()
	{
		return listNoteRecord;
	}

	public void setListNoteRecord(List<String> listNoteRecord)
	{
		this.listNoteRecord = listNoteRecord;
	}

	@Override
	public String toString()
	{
		return "MnpChildrenInforType [billingAddressData=" + billingAddressData + ", postalAddressData=" + postalAddressData + ", personInfoMessage="
				+ personInfoMessage + ", paymentMethod=" + paymentMethod + ", paymentMethodStr=" + paymentMethodStr + ", billType=" + billType
				+ ", billTypeStr=" + billTypeStr + ", paymentType=" + paymentType + ", paymentTypeStr=" + paymentTypeStr + ", proSubscriberList="
				+ proSubscriberList + "]";
	}

	
}
