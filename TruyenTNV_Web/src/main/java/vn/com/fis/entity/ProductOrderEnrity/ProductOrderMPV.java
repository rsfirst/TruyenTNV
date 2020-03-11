package vn.com.fis.entity.ProductOrderEnrity;

import java.util.Date;
import java.util.List;

import vn.com.fis.model.epos.AttachmentDataObject;

public class ProductOrderMPV
{

	@Override
	public String toString()
	{
		String pod = productOrderDetail != null ? productOrderDetail.toString() : "";
		String att = attachmentData != null ? attachmentData.toString() : "";

		return "ProductOrder [orderId=" + orderId + ", poCode=" + poCode + ", channel=" + channel + ", orderType=" + orderType + ", orderDate=" + orderDate
				+ ", modifiedDate=" + modifiedDate + ", aprroveDate=" + aprroveDate + ", rejectDate=" + rejectDate + ", status=" + status + ", notes=" + notes
				+ ", order_shopId=" + order_shopId + ", provinceId=" + provinceId + ", order_staffName=" + order_staffName + ", order_staffId=" + order_staffId
				+ ", approver_staff_Id=" + approver_staffId + ", order_shopName=" + order_shopName + ", paymentMode=" + paymentMode + ", bankName=" + bankName
				+ ", bankBranch=" + bankBranch + ", bankDepositReference=" + bankDepositReference + ", bankDepositValue=" + bankDepositValue + ", depositSlip="
				+ depositSlip + ", totalGrossValue=" + totalGrossValue + ", totalDiscountvalue=" + totalDiscountvalue + ", totalNetValue=" + totalNetValue
				+ ", productOrderDetail=" + pod + ", attachmentData=" + att + ", orderShopMasterId = " + orderShopMasterId + ", orderShopMasterName = "
				+ orderShopMasterName + "]";
	}

	long orderId;

	String poCode;

	String channel;

	String orderType;

	String orderDate;

	String modifiedDate;

	String aprroveDate;

	String rejectDate;

	int status;

	String notes;

	long order_shopId;

	String provinceId;

	String order_staffName;

	long order_staffId;

	String modify_staffName;

	long modify_staffId;

	long approver_staffId;

	String order_shopName;

	String paymentMode;

	String bankName;

	String bankBranch;

	String bankDepositReference;

	double bankDepositValue;

	String depositSlip;

	double totalGrossValue;

	double totalDiscountvalue;

	double totalNetValue;

	List<ProductOrderDetailMPV> productOrderDetail;

	List<AttachmentDataObject> attachmentData;

	long versionId;

	String orderShopMasterId;

	String orderShopMasterName;

	public ProductOrderMPV()
	{

	}

	public ProductOrderMPV(String poCode, String channel, String orderType, String orderDate, String modifiedDate, String aprroveDate, String rejectDate, int status,
			String notes, long order_shopId, String provinceId, long order_staffId, String order_staffName, long modify_staffId, String modify_staffName,
			long approver_staffId, String order_shopName, String paymentMode, String bankName, String bankBranch, String bankDepositReference,
			double bankDepositValue, String depositSlip, double totalGrossValue, double totalDiscountvalue, double totalNetValue)
	{
		this.poCode = poCode;
		this.channel = channel;
		this.orderType = orderType;
		this.orderDate = orderDate;
		this.modifiedDate = modifiedDate;
		this.aprroveDate = aprroveDate;
		this.rejectDate = rejectDate;
		this.status = status;
		this.notes = notes;
		this.order_shopId = order_shopId;
		this.provinceId = provinceId;
		this.order_staffName = order_staffName;
		this.order_staffId = order_staffId;
		this.modify_staffName = modify_staffName;
		this.modify_staffId = modify_staffId;
		this.approver_staffId = approver_staffId;
		this.order_shopName = order_shopName;
		this.paymentMode = paymentMode;
		this.bankName = bankName;
		this.bankBranch = bankBranch;
		this.bankDepositReference = bankDepositReference;
		this.bankDepositValue = bankDepositValue;
		this.depositSlip = depositSlip;
		this.totalGrossValue = totalGrossValue;
		this.totalDiscountvalue = totalDiscountvalue;
		this.totalNetValue = totalNetValue;
	}

	public long getOrderId()
	{
		return orderId;
	}

	public void setOrderId(long orderId)
	{
		this.orderId = orderId;
	}

	public String getPoCode()
	{
		return poCode;
	}

	public void setPoCode(String poCode)
	{
		this.poCode = poCode;
	}

	public String getChannel()
	{
		return channel;
	}

	public void setChannel(String channel)
	{
		this.channel = channel;
	}

	public String getOrderType()
	{
		return orderType;
	}

	public void setOrderType(String orderType)
	{
		this.orderType = orderType;
	}

	public String getOrderDate()
	{
		return orderDate;
	}

	public void setOrderDate(String orderDate)
	{
		this.orderDate = orderDate;
	}

	public String getModifiedDate()
	{
		return modifiedDate;
	}

	public void setModifiedDate(String modifiedDate)
	{
		this.modifiedDate = modifiedDate;
	}

	public String getAprroveDate()
	{
		return aprroveDate;
	}

	public void setAprroveDate(String aprroveDate)
	{
		this.aprroveDate = aprroveDate;
	}

	public String getRejectDate()
	{
		return rejectDate;
	}

	public void setRejectDate(String rejectDate)
	{
		this.rejectDate = rejectDate;
	}

	public int getStatus()
	{
		return status;
	}

	public void setStatus(int status)
	{
		this.status = status;
	}

	public String getNotes()
	{
		return notes;
	}

	public void setNotes(String notes)
	{
		this.notes = notes;
	}

	public long getOrder_shopId()
	{
		return order_shopId;
	}

	public void setOrder_shopId(long order_shopId)
	{
		this.order_shopId = order_shopId;
	}

	public String getProvinceId()
	{
		return provinceId;
	}

	public void setProvinceId(String provinceId)
	{
		this.provinceId = provinceId;
	}

	public String getOrder_staffName()
	{
		return order_staffName;
	}

	public void setOrder_staffName(String order_staffName)
	{
		this.order_staffName = order_staffName;
	}

	public long getOrder_staffId()
	{
		return order_staffId;
	}

	public void setOrder_staffId(long order_staffId)
	{
		this.order_staffId = order_staffId;
	}

	public String getModify_staffName()
	{
		return modify_staffName;
	}

	public void setModify_staffName(String modify_staffName)
	{
		this.modify_staffName = modify_staffName;
	}

	public long getModify_staffId()
	{
		return modify_staffId;
	}

	public void setModify_staffId(long modify_staffId)
	{
		this.modify_staffId = modify_staffId;
	}

	public long getApprover_staffId()
	{
		return approver_staffId;
	}

	public void setApprover_staffId(long approver_staffId)
	{
		this.approver_staffId = approver_staffId;
	}

	public String getOrder_shopName()
	{
		return order_shopName;
	}

	public void setOrder_shopName(String order_shopName)
	{
		this.order_shopName = order_shopName;
	}

	public String getPaymentMode()
	{
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode)
	{
		this.paymentMode = paymentMode;
	}

	public String getBankName()
	{
		return bankName;
	}

	public void setBankName(String bankName)
	{
		this.bankName = bankName;
	}

	public String getBankBranch()
	{
		return bankBranch;
	}

	public void setBankBranch(String bankBranch)
	{
		this.bankBranch = bankBranch;
	}

	public String getBankDepositReference()
	{
		return bankDepositReference;
	}

	public void setBankDepositReference(String bankDepositReference)
	{
		this.bankDepositReference = bankDepositReference;
	}

	public double getBankDepositValue()
	{
		return bankDepositValue;
	}

	public void setBankDepositValue(double bankDepositValue)
	{
		this.bankDepositValue = bankDepositValue;
	}

	public String getDepositSlip()
	{
		return depositSlip;
	}

	public void setDepositSlip(String depositSlip)
	{
		this.depositSlip = depositSlip;
	}

	public double getTotalGrossValue()
	{
		return totalGrossValue;
	}

	public void setTotalGrossValue(double totalGrossValue)
	{
		this.totalGrossValue = totalGrossValue;
	}

	public double getTotalDiscountvalue()
	{
		return totalDiscountvalue;
	}

	public void setTotalDiscountvalue(double totalDiscountvalue)
	{
		this.totalDiscountvalue = totalDiscountvalue;
	}

	public double getTotalNetValue()
	{
		return totalNetValue;
	}

	public void setTotalNetValue(double totalNetValue)
	{
		this.totalNetValue = totalNetValue;
	}

	public List<ProductOrderDetailMPV> getProductOrderDetail()
	{
		return productOrderDetail;
	}

	public void setProductOrderDetail(List<ProductOrderDetailMPV> productOrderDetail)
	{
		this.productOrderDetail = productOrderDetail;
	}

	public List<AttachmentDataObject> getAttachmentData()
	{
		return attachmentData;
	}

	public void setAttachmentData(List<AttachmentDataObject> attachmentData)
	{
		this.attachmentData = attachmentData;
	}

	public long getVersionId()
	{
		return versionId;
	}

	public void setVersionId(long versionId)
	{
		this.versionId = versionId;
	}

	public String getOrderShopMasterId()
	{
		return orderShopMasterId;
	}

	public void setOrderShopMasterId(String orderShopMasterId)
	{
		this.orderShopMasterId = orderShopMasterId;
	}

	public String getOrderShopMasterName()
	{
		return orderShopMasterName;
	}

	public void setOrderShopMasterName(String orderShopMasterName)
	{
		this.orderShopMasterName = orderShopMasterName;
	}

}
