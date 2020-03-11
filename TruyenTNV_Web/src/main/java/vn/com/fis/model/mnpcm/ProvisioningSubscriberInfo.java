package vn.com.fis.model.mnpcm;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

import vn.com.fis.model.css.ShopInformationSearchAllTransfer;
import vn.com.fis.utils.mnpcm.Constants;

/**
 * The persistent class for the PROVISIONING_SUBSCRIBER_INFO database table.
 * 
 */
@Entity
@Table(name = "PROVISIONING_SUBSCRIBER_INFO")
public class ProvisioningSubscriberInfo implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "PROVISIONING_SUBSCRIBER_ID")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PROV_SUBSCRIBER_INFO_SEQ")
    @SequenceGenerator(sequenceName = "PROV_SUBSCRIBER_INFO_SEQ", allocationSize = 1, name = "PROV_SUBSCRIBER_INFO_SEQ")
	private long provisioningSubscriberId;

	@Column(name = "ACCOUNT_TYPE")
	private String accountType;

	@Transient
	private String accountTypeDNO;
	
	@Transient
	private String accountTypeDNOStr;
	
	@Transient
	private String accountTypeStr; 
	
	@Column(name = "MSISDN")
	private String msisdn;

	@Column(name = "PACKAGE")
	private String packageType;

	@Transient
	private String packageName;
	
	@Column(name = "SERIAL_SIM")
	private String serialSim;
	
	@Column(name="SUB_USE_TYPE")
	private String subUseType;
	@Column(name="SUB_PAYMENT_TYPE")
	private String subPaymentType;
	@Column(name="SHOP_CODE")
	private String shopCode;
	@Column(name="CREATE_USER")
	private String staffCode;
	
	public String getSubUseType() {
		return subUseType;
	}

	public void setSubUseType(String subUseType) {
		this.subUseType = subUseType;
	}

	public String getSubPaymentType() {
		return subPaymentType;
	}

	public void setSubPaymentType(String subPaymentType) {
		this.subPaymentType = subPaymentType;
	}

	public String getShopCode() {
		return shopCode;
	}

	public void setShopCode(String shopCode) {
		this.shopCode = shopCode;
	}

	public String getStaffCode() {
		return staffCode;
	}

	public void setStaffCode(String staffCode) {
		this.staffCode = staffCode;
	}

	@Column(name = "SUBSCRIBER_NAME")
	private String subscriberName;
	
	@Column(name = "CUS_ID")
	private String cusId;
	
	
	@Transient
	private String customerType;
	
	@Transient
	private String customerTypeStr;
	
	@Transient
	private String primary;
	
	// bi-directional many-to-one association to NPR
	@ManyToOne
	@JoinColumn(name = "NPR_ID")
	private NPR nprProvisioningSubscriberInfo;

	public ProvisioningSubscriberInfo() {
	}

	public long getProvisioningSubscriberId() {
		return this.provisioningSubscriberId;
	}

	public void setProvisioningSubscriberId(long provisioningSubscriberId) {
		this.provisioningSubscriberId = provisioningSubscriberId;
	}

	public String getAccountType() {
		return this.accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public String getMsisdn() {
		return this.msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getSubscriberName() {
		return this.subscriberName;
	}

	public void setSubscriberName(String subscriberName) {
		this.subscriberName = subscriberName;
	}

	public String getSerialSim() {
		return serialSim;
	}

	public void setSerialSim(String serialSim) {
		this.serialSim = serialSim;
	}

	public void setNprProvisioningSubscriberInfo(NPR nprProvisioningSubscriberInfo) {
		this.nprProvisioningSubscriberInfo = nprProvisioningSubscriberInfo;
	}

	public String getCustomerType() {
		return customerType;
	}

	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}

	public void setAccountTypeStr(String accountTypeStr) {
		this.accountTypeStr = accountTypeStr;
	}

	public String getAccountTypeStr() {
		String accountType = "";
		if(Constants.ACCOUNT_TYPE_PREPAID.equals(this.accountType)) {
			accountType = Constants.ACCOUNT_TYPE_PREPAID_STR;
		}
		if(Constants.ACCOUNT_TYPE_POSTPAID.equals(this.accountType)) {
			accountType =  Constants.ACCOUNT_TYPE_POSTPAID_STR;
		}
		return accountType;
	}

	public String getCustomerTypeStr() {
		String customerTypeStr = "";
		if(Constants.CUSTOMER_TYPE_PRIVATE.equals(this.customerType)) {
			customerTypeStr = Constants.CUSTOMER_TYPE_PRIVATE_STR;
		}
		
		if(Constants.CUSTOMER_TYPE_FOREIGN.equals(this.customerType)) {
			customerTypeStr =  Constants.CUSTOMER_TYPE_FOREIGN_STR;
		}
		
		if(Constants.CUSTOMER_TYPE_COMPANY.equals(this.customerType)) {
			customerTypeStr =  Constants.CUSTOMER_TYPE_COMPANY_STR;
		}
		
		if(Constants.CUSTOMER_TYPE_STAFT.equals(this.customerType)) {
			customerTypeStr =  Constants.CUSTOMER_TYPE_STAFT_STR;
		}
		return customerTypeStr;
		
	}

	public void setCustomerTypeStr(String customerTypeStr) {
		this.customerTypeStr = customerTypeStr;
	}


	public String getPackageType() {
		return packageType;
	}

	public void setPackageType(String packageType) {
		this.packageType = packageType;
	}

	public String getPrimary() {
		return primary;
	}

	public void setPrimary(String primary) {
		this.primary = primary;
	}

	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public String getAccountTypeDNO() {
		return accountTypeDNO;
	}

	public void setAccountTypeDNO(String accountTypeDNO) {
		this.accountTypeDNO = accountTypeDNO;
	}

	public String getCusId() {
		return cusId;
	}

	public void setCusId(String cusId) {
		this.cusId = cusId;
	}

	public String getAccountTypeDNOStr()
	{
		return accountTypeDNOStr;
	}

	public void setAccountTypeDNOStr(String accountTypeDNOStr)
	{
		this.accountTypeDNOStr = accountTypeDNOStr;
	}
	
	//DatBD2 
	@Transient
	private ShopInformationSearchAllTransfer shopInformationSearchAllTransfer;
	@Transient
	private String staffInfor;
	

	public ShopInformationSearchAllTransfer getShopInformationSearchAllTransfer() {
		return shopInformationSearchAllTransfer;
	}

	public void setShopInformationSearchAllTransfer(ShopInformationSearchAllTransfer shopInformationSearchAllTransfer) {
		this.shopInformationSearchAllTransfer = shopInformationSearchAllTransfer;
	}

	public String getStaffInfor() {
		return staffInfor;
	}

	public void setStaffInfor(String staffInfor) {
		this.staffInfor = staffInfor;
	}
	
	//endDatBD2 update

	@Override
	public String toString()
	{
		return "Data Subscriber [provisioningSubscriberId=" + provisioningSubscriberId + ", accountType=" + accountType + ", accountTypeDNO="
				+ accountTypeDNO + ", accountTypeDNOStr=" + accountTypeDNOStr + ", accountTypeStr=" + accountTypeStr + ", msisdn=" + msisdn + ", packageType="
				+ packageType + ", packageName=" + packageName + ", serialSim=" + serialSim + ", subscriberName=" + subscriberName + ", cusId=" + cusId
				+ ", customerType=" + customerType + ", customerTypeStr=" + customerTypeStr + ", primary=" + primary + "]";
	}
	

}
