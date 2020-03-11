package vn.com.fis.model.cinvoice;

import vn.com.fis.tibco.model.entity.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Customer extends DynamicalEntity
{
    public static final String NAME = "CUSTOMER";
    private static final int POS_PERSON = 0;
    private static final int POS_ACCOUNT = 1;
    private static final int POS_LIST_PRODUCT = 2;
    private static final int POS_LIST_CHILD_CUST = 3;
    private static final int POS_PARENT_CUST = 4;
    private static final int POS_IS_FILLED_CHILDREN = 5;
    private static final int POS_IS_FILLED_PARENT = 6;
    private static final int POS_IS_FILLED_ACCOUNT = 7;
    private static final int POS_IS_FILLED_PERSON = 8;
    private static final int POS_IS_FILLED_PRODUCTS = 9;
    private static final int POS_EPOS_CUSTOMER = 10;
    private static final int POS_DEPOSIT_ACCOUNT = 11;
    private static final int POS_IS_FILLED_DEPOSIT_ACCOUNT = 12;

    private String accountStatus;

    public Customer()
    {
        super();
    }

    public Customer(Dynamical en)
    {
        this(en.getData());
    }

    public Customer(List row)
    {
        super(row);
    }

    public boolean isFilledChildren()
    {
        if(getExtendData(POS_IS_FILLED_CHILDREN) == null)
            return false;
        return(Boolean)getExtendData(POS_IS_FILLED_CHILDREN);
    }

    public void setFilledChildren(boolean value)
    {
        setExtendData(POS_IS_FILLED_CHILDREN,value);
    }

    public boolean isFilledParent()
    {
        if(getExtendData(POS_IS_FILLED_PARENT) == null)
            return false;
        return(Boolean)getExtendData(POS_IS_FILLED_PARENT);
    }

    public void setFilledParent(boolean value)
    {
        setExtendData(POS_IS_FILLED_PARENT,value);
    }

    public boolean isFilledAccount()
    {
        if(getExtendData(POS_IS_FILLED_ACCOUNT) == null)
            return false;
        return(Boolean)getExtendData(POS_IS_FILLED_ACCOUNT);
    }

    public void setFilledAccount(boolean value)
    {
        setExtendData(POS_IS_FILLED_ACCOUNT,value);
    }

    public boolean isFilledDepositAccount()
    {
        if(getExtendData(POS_IS_FILLED_DEPOSIT_ACCOUNT) == null)
            return false;
        return(Boolean)getExtendData(POS_IS_FILLED_DEPOSIT_ACCOUNT);
    }

    public void setFilledDepositAccount(boolean value)
    {
        setExtendData(POS_IS_FILLED_DEPOSIT_ACCOUNT,value);
    }

    public boolean isFilledPerson()
    {
        if(getExtendData(POS_IS_FILLED_PERSON) == null)
            return false;
        return(Boolean)getExtendData(POS_IS_FILLED_PERSON);
    }

    public void setFilledPerson(boolean value)
    {
        setExtendData(POS_IS_FILLED_PERSON,value);
    }

    public boolean isFilledProducts()
    {
        if(getExtendData(POS_IS_FILLED_PRODUCTS) == null)
            return false;
        return(Boolean)getExtendData(POS_IS_FILLED_PRODUCTS);
    }

    public void setFilledProducts(boolean value)
    {
        setExtendData(POS_IS_FILLED_PRODUCTS,value);
    }

    public void setPerson(Person person)
    {
        if(person == null)
            throw new NullPointerException("Can't set null person for customer");
        setExtendData(POS_PERSON,person);
        setFilledPerson(true);
    }

    public Person getPerson()
    {
        return getExtendData(POS_PERSON) == null ? null : (Person)getExtendData(POS_PERSON);
    }

    public void setPreCustomer(PreCustomer cust)
    {
        if(cust == null)
            throw new NullPointerException("Can't set null person for customer");
        setExtendData(POS_EPOS_CUSTOMER,cust);
    }

    public PreCustomer getPreCustomer()
    {
        return getExtendData(POS_EPOS_CUSTOMER) == null ? null : (PreCustomer)getExtendData(POS_EPOS_CUSTOMER);
    }

    public void setAccount(Account account)
    {
        if(account == null)
            throw new NullPointerException("Can't set null account for customer");
        setExtendData(POS_ACCOUNT,account);
        setFilledAccount(true);
    }

    public Account getAccount()
    {
        return getExtendData(POS_ACCOUNT) == null ? null : (Account)getExtendData(POS_ACCOUNT);
    }

    public void setDepositAccount(Account account)
    {
        if(account == null)
            throw new NullPointerException("Can't set null account for customer");
        setExtendData(POS_DEPOSIT_ACCOUNT,account);
        setFilledDepositAccount(true);
    }

    public Account getDepositAccount()
    {
        return getExtendData(POS_DEPOSIT_ACCOUNT) == null ? null : (Account)getExtendData(POS_DEPOSIT_ACCOUNT);
    }

    public void setParent(Customer cus)
    {
        setExtendData(POS_PARENT_CUST,cus);
        setFilledParent(true);
    }

    public Customer getParent()
    {
        return getExtendData(POS_PARENT_CUST) == null ? null : (Customer)getExtendData(POS_PARENT_CUST);
    }

    public void setChildren(List<Customer> lstChildren)
    {
        if(lstChildren == null)
            throw new NullPointerException("Can't set null list of children customer");
        setExtendData(POS_LIST_CHILD_CUST,lstChildren);
        setFilledChildren(true);
    }

    public List<Customer> getChildren()
    {
        return getExtendData(POS_LIST_CHILD_CUST) == null ? null : (List<Customer>)getExtendData(POS_LIST_CHILD_CUST);
    }

    public void setProducts(List<Product> lstProducts)
    {
        if(lstProducts == null)
            throw new NullPointerException("Can't set null list of products");

        setExtendData(POS_LIST_PRODUCT,lstProducts);
        setFilledProducts(true);
    }

    public void addProduct(Product product)
    {
        ((List)getExtendData(POS_LIST_PRODUCT)).add(product);
    }

    public void removeProduct(Product product) throws NotFoundCodeException
    {
        if(product == null)
            throw new NullPointerException("Can't remove null product");

        removeProduct(product.getProductInstanceId());
    }

    public void removeProduct(Long productId) throws NotFoundCodeException
    {
        if(productId == null)
            throw new NullPointerException("Can't remove null product_id");

        List<Product> products = (List<Product>)getExtendData(POS_LIST_PRODUCT);
        for(int i = 0;i < products.size();i++)
        {
            Product product = (Product)products.get(i);
            if(product.getProductInstanceId().equals(productId))
            {
                products.remove(i);
            }
        }
    }

    public List<Product> getProducts()
    {
        return getExtendData(POS_LIST_PRODUCT) == null ? new ArrayList() : (List<Product>)getExtendData(POS_LIST_PRODUCT);
    }

    public Long getCustomerNodeId() throws NotFoundCodeException
    {
        Object obj = this.getProperty("CUSTOMER_NODE_ID");
        if(obj != null)
            return(Long)obj;
        return null;
    }

    public void setCustomerNodeId(Long value) throws NotFoundCodeException
    {
        setProperty("CUSTOMER_NODE_ID",value);
    }

    public Long getPersonId() throws NotFoundCodeException
    {
        return getProperty("PERSON_ID") != null ? (Long)getProperty("PERSON_ID") : null;
    }

    public void setPersonId(Long value) throws NotFoundCodeException
    {
        setProperty("PERSON_ID",value);
    }

    public Double getInitialAccountBalance() throws NotFoundCodeException
    {
        return getProperty("INITIAL_ACCOUNT_BALANCE") != null ? (Double)getProperty("INITIAL_ACCOUNT_BALANCE") : null;
    }

    public void setInitialAccountBalance(Double value) throws NotFoundCodeException
    {
        setProperty("INITIAL_ACCOUNT_BALANCE",value);
    }

    public Long getGroupId() throws NotFoundCodeException
    {
        return getProperty("GROUP_ID") != null ? (Long)getProperty("GROUP_ID") : null;
    }

    public void setGroupId(Long value) throws NotFoundCodeException
    {
        setProperty("GROUP_ID",value);
    }

    public Long getHierarchyLevel() throws NotFoundCodeException
    {
        return getProperty("HIERARCHY_LEVEL") != null ? (Long)getProperty("HIERARCHY_LEVEL") : null;
    }

    public void setHierarchyLevel(Long value) throws NotFoundCodeException
    {
        setProperty("HIERARCHY_LEVEL",value);
    }

    public Long getOperatorId() throws NotFoundCodeException
    {
        return getProperty("OPERATOR_ID") != null ? (Long)getProperty("OPERATOR_ID") : null;
    }

    public void setOperatorId(Long value) throws NotFoundCodeException
    {
        setProperty("OPERATOR_ID",value);
    }

    public Long getRootCustomerNodeId() throws NotFoundCodeException
    {
        return getProperty("ROOT_CUSTOMER_NODE_ID") != null ? (Long)getProperty("ROOT_CUSTOMER_NODE_ID") : null;
    }

    public void setRootCustomerNodeId(Long value) throws NotFoundCodeException
    {
        setProperty("ROOT_CUSTOMER_NODE_ID",value);
    }

    public String getPostalGeneral2() throws NotFoundCodeException
    {
        return getProperty("POSTAL_GENERAL_2") != null ? (String)getProperty("POSTAL_GENERAL_2") : null;
    }

    public void setPostalGeneral2(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_GENERAL_2",value);
    }

    public Long getCreditRatingCode() throws NotFoundCodeException
    {
        return getProperty("CREDIT_RATING_CODE") != null ? (Long)getProperty("CREDIT_RATING_CODE") : null;
    }

    public void setCreditRatingCode(Long value) throws NotFoundCodeException
    {
        setProperty("CREDIT_RATING_CODE",value);
    }

    public Long getAssignedOperatorId() throws NotFoundCodeException
    {
        return getProperty("ASSIGNED_OPERATOR_ID") != null ? (Long)getProperty("ASSIGNED_OPERATOR_ID") : null;
    }

    public void setAssignedOperatorId(Long value) throws NotFoundCodeException
    {
        setProperty("ASSIGNED_OPERATOR_ID",value);
    }

    public Long getSalesChannelCode() throws NotFoundCodeException
    {
        return getProperty("SALES_CHANNEL_CODE") != null ? (Long)getProperty("SALES_CHANNEL_CODE") : null;
    }

    public void setSalesChannelCode(Long value) throws NotFoundCodeException
    {
        setProperty("SALES_CHANNEL_CODE",value);
    }

    public Long getCustomerNodeTypeId() throws NotFoundCodeException
    {
        return getProperty("CUSTOMER_NODE_TYPE_ID") != null ? (Long)getProperty("CUSTOMER_NODE_TYPE_ID") : null;
    }

    public void setCustomerNodeTypeId(Long value) throws NotFoundCodeException
    {
        setProperty("CUSTOMER_NODE_TYPE_ID",value);
    }

    public Long getParentCustomerNodeId() throws NotFoundCodeException
    {
        return getProperty("PARENT_CUSTOMER_NODE_ID") != null ? (Long)getProperty("PARENT_CUSTOMER_NODE_ID") : null;
    }

    public void setParentCustomerNodeId(Long value) throws NotFoundCodeException
    {
        setProperty("PARENT_CUSTOMER_NODE_ID",value);
    }

    public Long getCustomerNodeStatusCode() throws NotFoundCodeException
    {
        return getProperty("CUSTOMER_NODE_STATUS_CODE") != null ? (Long)getProperty("CUSTOMER_NODE_STATUS_CODE") : null;
    }

    public void setCustomerNodeStatusCode(Long value) throws NotFoundCodeException
    {
        setProperty("CUSTOMER_NODE_STATUS_CODE",value);
    }

    public Long getReportLevelCode() throws NotFoundCodeException
    {
        return getProperty("REPORT_LEVEL_CODE") != null ? (Long)getProperty("REPORT_LEVEL_CODE") : null;
    }

    public void setReportLevelCode(Long value) throws NotFoundCodeException
    {
        setProperty("REPORT_LEVEL_CODE",value);
    }

    public Long getPrimeAccountId() throws NotFoundCodeException
    {
        return getProperty("PRIME_ACCOUNT_ID") != null ? (Long)getProperty("PRIME_ACCOUNT_ID") : null;
    }

    public void setPrimeAccountId(Long value) throws NotFoundCodeException
    {
        setProperty("PRIME_ACCOUNT_ID",value);
    }

    public String getSiteGeneral1() throws NotFoundCodeException
    {
        return getProperty("SITE_GENERAL_1") != null ? (String)getProperty("SITE_GENERAL_1") : null;
    }

    public void setSiteGeneral1(String value) throws NotFoundCodeException
    {
        setProperty("SITE_GENERAL_1",value);
    }

    public String getSiteCity() throws NotFoundCodeException
    {
        return getProperty("SITE_CITY") != null ? (String)getProperty("SITE_CITY") : null;
    }

    public void setSiteCity(String value) throws NotFoundCodeException
    {
        setProperty("SITE_CITY",value);
    }

    public String getSiteState() throws NotFoundCodeException
    {
        return getProperty("SITE_STATE") != null ? (String)getProperty("SITE_STATE") : null;
    }

    public void setSiteState(String value) throws NotFoundCodeException
    {
        setProperty("SITE_STATE",value);
    }

    public Double getCreditLimit() throws NotFoundCodeException
    {
        return getProperty("CREDIT_LIMIT") != null ? (Double)getProperty("CREDIT_LIMIT") : null;
    }

    public void setCreditLimit(Double value) throws NotFoundCodeException
    {
        setProperty("CREDIT_LIMIT",value);
    }

    public Long getCurrencyId() throws NotFoundCodeException
    {
        return getProperty("CURRENCY_ID") != null ? (Long)getProperty("CURRENCY_ID") : null;
    }

    public void setCurrencyId(Long value) throws NotFoundCodeException
    {
        setProperty("CURRENCY_ID",value);
    }

    public Long getTaxClassCode() throws NotFoundCodeException
    {
        return getProperty("TAX_CLASS_CODE") != null ? (Long)getProperty("TAX_CLASS_CODE") : null;
    }

    public void setTaxClassCode(Long value) throws NotFoundCodeException
    {
        setProperty("TAX_CLASS_CODE",value);
    }

    public Long getPaymentMethodCode() throws NotFoundCodeException
    {
        return getProperty("PAYMENT_METHOD_CODE") != null ? (Long)getProperty("PAYMENT_METHOD_CODE") : null;
    }

    public void setPaymentMethodCode(Long value) throws NotFoundCodeException
    {
        setProperty("PAYMENT_METHOD_CODE",value);
    }

    public String getPaymentLocationCode() throws NotFoundCodeException
    {
        return getProperty("PAYMENT_LOCATION_CODE") != null ? (String)getProperty("PAYMENT_LOCATION_CODE") : null;
    }

    public void setPaymentLocationCode(String value) throws NotFoundCodeException
    {
        setProperty("PAYMENT_LOCATION_CODE",value);
    }

    public Date getEffectiveStartDate() throws NotFoundCodeException
    {
        return getProperty("EFFECTIVE_START_DATE") != null ? (Date)getProperty("EFFECTIVE_START_DATE") : null;
    }

    public void setEffectiveStartDate(Date value) throws NotFoundCodeException
    {
        setProperty("EFFECTIVE_START_DATE",value);
    }

    public Date getEffectiveEndDate() throws NotFoundCodeException
    {
        return getProperty("EFFECTIVE_END_DATE") != null ? (Date)getProperty("EFFECTIVE_END_DATE") : null;
    }

    public void setEffectiveEndDate(Date value) throws NotFoundCodeException
    {
        setProperty("EFFECTIVE_END_DATE",value);
    }

    public Date getActiveDate() throws NotFoundCodeException
    {
        return getProperty("ACTIVE_DATE ") != null ? (Date)getProperty("ACTIVE_DATE ") : null;
    }

    public void setActiveDate(Date value) throws NotFoundCodeException
    {
        setProperty("ACTIVE_DATE ",value);
    }

    public Date getLastModified() throws NotFoundCodeException
    {
        return getProperty("LAST_MODIFIED") != null ? (Date)getProperty("LAST_MODIFIED") : null;
    }

    public void setLastModified(Date value) throws NotFoundCodeException
    {
        setProperty("LAST_MODIFIED",value);
    }

    public String getNodeName() throws NotFoundCodeException
    {
        return getProperty("NODE_NAME") != null ? (String)getProperty("NODE_NAME") : null;
    }

    public void setNodeName(String value) throws NotFoundCodeException
    {
        setProperty("NODE_NAME",value);
    }

    public String getGeneral5() throws NotFoundCodeException
    {
        return getProperty("GENERAL_5") != null ? (String)getProperty("GENERAL_5") : null;
    }

    public void setGeneral5(String value) throws NotFoundCodeException
    {
        setProperty("GENERAL_5",value);
    }

    public String getGeneral1() throws NotFoundCodeException
    {
        return getProperty("GENERAL_1") != null ? (String)getProperty("GENERAL_1") : null;
    }

    public void setGeneral1(String value) throws NotFoundCodeException
    {
        setProperty("GENERAL_1",value);
    }

    public String getGeneral2() throws NotFoundCodeException
    {
        return getProperty("GENERAL_2") != null ? (String)getProperty("GENERAL_2") : null;
    }

    public void setGeneral2(String value) throws NotFoundCodeException
    {
        setProperty("GENERAL_2",value);
    }

    public String getPostalGeneral4() throws NotFoundCodeException
    {
        return getProperty("POSTAL_GENERAL_4") != null ? (String)getProperty("POSTAL_GENERAL_4") : null;
    }

    public void setPostalGeneral4(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_GENERAL_4",value);
    }

    public String getPostalGeneral3() throws NotFoundCodeException
    {
        return getProperty("POSTAL_GENERAL_3") != null ? (String)getProperty("POSTAL_GENERAL_3") : null;
    }

    public void setPostalGeneral3(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_GENERAL_3",value);
    }

    public String getPostalLine2() throws NotFoundCodeException
    {
        return getProperty("POSTAL_LINE_2") != null ? (String)getProperty("POSTAL_LINE_2") : null;
    }

    public void setPostalLine2(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_LINE_2",value);
    }

    public String getPostalSuburb() throws NotFoundCodeException
    {
        return getProperty("POSTAL_SUBURB") != null ? (String)getProperty("POSTAL_SUBURB") : null;
    }

    public void setPostalSuburb(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_SUBURB",value);
    }

    public String getPostalState() throws NotFoundCodeException
    {
        return getProperty("POSTAL_STATE") != null ? (String)getProperty("POSTAL_STATE") : null;
    }

    public void setPostalState(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_STATE",value);
    }

    public String getPostalGeneral1() throws NotFoundCodeException
    {
        return getProperty("POSTAL_GENERAL_1") != null ? (String)getProperty("POSTAL_GENERAL_1") : null;
    }

    public void setPostalGeneral1(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_GENERAL_1",value);
    }

    public String getPostalCity() throws NotFoundCodeException
    {
        return getProperty("POSTAL_CITY") != null ? (String)getProperty("POSTAL_CITY") : null;
    }

    public void setPostalCity(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_CITY",value);
    }

    public String getSiteGeneral4() throws NotFoundCodeException
    {
        return getProperty("SITE_GENERAL_4") != null ? (String)getProperty("SITE_GENERAL_4") : null;
    }

    public void setSiteGeneral4(String value) throws NotFoundCodeException
    {
        setProperty("SITE_GENERAL_4",value);
    }

    public String getSiteGeneral3() throws NotFoundCodeException
    {
        return getProperty("SITE_GENERAL_3") != null ? (String)getProperty("SITE_GENERAL_3") : null;
    }

    public void setSiteGeneral3(String value) throws NotFoundCodeException
    {
        setProperty("SITE_GENERAL_3",value);
    }

    public String getSiteLine1() throws NotFoundCodeException
    {
        return getProperty("SITE_LINE_1") != null ? (String)getProperty("SITE_LINE_1") : null;
    }

    public void setSiteLine1(String value) throws NotFoundCodeException
    {
        setProperty("SITE_LINE_1",value);
    }

    public String getSiteGeneral2() throws NotFoundCodeException
    {
        return getProperty("SITE_GENERAL_2") != null ? (String)getProperty("SITE_GENERAL_2") : null;
    }

    public void setSiteGeneral2(String value) throws NotFoundCodeException
    {
        setProperty("SITE_GENERAL_2",value);
    }

    public String getSiteLine2() throws NotFoundCodeException
    {
        return getProperty("SITE_LINE_2") != null ? (String)getProperty("SITE_LINE_2") : null;
    }

    public void setSiteLine2(String value) throws NotFoundCodeException
    {
        setProperty("SITE_LINE_2",value);
    }

    public String getSiteSuburb() throws NotFoundCodeException
    {
        return getProperty("SITE_SUBURB") != null ? (String)getProperty("SITE_SUBURB") : null;
    }

    public void setSiteSuburb(String value) throws NotFoundCodeException
    {
        setProperty("SITE_SUBURB",value);
    }

    public String getGeneral3() throws NotFoundCodeException
    {
        return getProperty("GENERAL_3") != null ? (String)getProperty("GENERAL_3") : null;
    }

    public void setGeneral3(String value) throws NotFoundCodeException
    {
        setProperty("GENERAL_3",value);
    }

    public String getPostal3line1() throws NotFoundCodeException
    {
        return getProperty("POSTAL3LINE_1") != null ? (String)getProperty("POSTAL3LINE_1") : null;
    }

    public void setPostal3line1(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL3LINE_1",value);
    }

    public String getPostalLine1() throws NotFoundCodeException
    {
        return getProperty("POSTAL_LINE_1") != null ? (String)getProperty("POSTAL_LINE_1") : null;
    }

    public void setPostalLine1(String value) throws NotFoundCodeException
    {
        setProperty("POSTAL_LINE_1",value);
    }

    public Integer getStockCreated() throws NotFoundCodeException
    {
        return getProperty("STOCK_CREATED") != null ? (Integer)getProperty("STOCK_CREATED") : null;
    }

    public void setStockCreated(Integer value) throws NotFoundCodeException
    {
        setProperty("STOCK_CREATED",value);
    }

    public Integer getStockModified() throws NotFoundCodeException
    {
        return getProperty("STOCK_MODIFIED") != null ? (Integer)getProperty("STOCK_MODIFIED") : null;
    }

    public void setStockModified(Integer value) throws NotFoundCodeException
    {
        setProperty("STOCK_MODIFIED",value);
    }

    public Date getCreatedDate() throws NotFoundCodeException
    {
        return getProperty("CREATED_DATE") != null ? (Date)getProperty("CREATED_DATE") : null;
    }

    public void setCreatedDate(Date value) throws NotFoundCodeException
    {
        setProperty("CREATED_DATE",value);
    }

    public String getName()
    {
        return NAME;
    }

    public String getIdCode() throws NotFoundCodeException
    {
//        return "CUSTOMER_NODE_ID";
		return "POSTPAID_ACCOUNT_NO"; //Final Victory modify for insert & search log
    }

    public String getPostpaidAccountNo() throws NotFoundCodeException
    {
        return getProperty("POSTPAID_ACCOUNT_NO") != null ? (String)getProperty("POSTPAID_ACCOUNT_NO") : null;
    }

    public String getParentAccountNo() throws NotFoundCodeException
    {
        return getProperty("PARENT_ACCOUNT_NO") != null ? (String)getProperty("PARENT_ACCOUNT_NO") : null;
    }

    public String getCustomerType() throws NotFoundCodeException {
            return getProperty("CUSTOMER_TYPE") != null ? (String) getProperty("CUSTOMER_TYPE"):null;
    }

    public void setParentAccountNo(String value) throws NotFoundCodeException
    {
        setProperty("PARENT_ACCOUNT_NO",value);
    }

    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }

    public String getAccountStatus() {
        return this.accountStatus;
    }

	public String getBlackList() throws NotFoundCodeException {
			return getProperty("ACCOUNT_STATUS") != null ? (String) getProperty("ACCOUNT_STATUS"):null;
	}

	public void setPostpaidAccountNo(String value) throws NotFoundCodeException
	{
		setProperty("POSTPAID_ACCOUNT_NO",value);
	}

	public String getSubStatus() throws NotFoundCodeException {
			return getProperty("SUB_STATUS") != null ? (String) getProperty("SUB_STATUS"):null;
	}

	public String getCustomerRefNumber() throws NotFoundCodeException {
			return getProperty("CUSTOMER_REF_NUMBER") != null ? (String) getProperty("CUSTOMER_REF_NUMBER"):null;
	}

}

