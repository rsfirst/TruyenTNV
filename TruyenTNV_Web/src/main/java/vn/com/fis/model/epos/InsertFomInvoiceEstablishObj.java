package vn.com.fis.model.epos;

import java.util.List;

public class InsertFomInvoiceEstablishObj
{
	private String vtTransId;
			/*private String InvoiceNo;//;//Số hóa đơn
			private String CreateDate;//Ngày tạo
			private String Status;//Trạng thái
			private String StatusCode;//Mã
			private String StatusName;//Tên
			private String Shop;//Cửa hàng
			private String Staff;//Nhân viên
			private String TransactionType;//Loại giao dịch
			private String Name;//Tên KH
			private String Company;//Công ty
			private String Address;//Địa chỉ
			private String PayMethod;//HTTT
			private String Rate;//Tỷ giá
			private String PayCode;//Mã
			private String PayName;//Tên
			private String Amount;//Tiền chưa thuế
			private String Tax;//Tiền thuế
			private String AmountTax;//Tiền có thuế
			private String OrgAmount;//Nguyên tệ
			private String Discount;//Chiết khấu
			private String Promotion;//Khuyến mại
			private String GrantAmount;//Tiền phải trả
			private String Notes;//Ghi chú
			private String Tin;//Mã số thuế
			private String Account;//Số TK
			private String Email;//Email
*/			
			List<InputEstablishservice> inputEstablishservice;
			List<InputEstablishGoodsEntity> inputEstablishGoodsEntity;
			private String shopCode;
			private String invoiceNo;//;//Số hóa đơn
			private String strShopID;
			private String strStaffID;
			private String strPayShopID;
			private String strName;
			private String strCompany;
			private String strAddress;
			private String strAccount;
			private String strTin;
			private String strNote;
			private String strPayMethod;
			private String strAmount;
			private String strTax;
			private String strOrgTotal;
			private String strAmountTax;
			private String strDiscount;
			private String strPromotion;
			private String strGrandTotal;
			private String strCreateDate;
			private String strUserName;
			private String strStatus;
			private String strBlockNo;
			private String strSerialNo;
			private String strInvoiceNumber;
			private String strTaxRate;
			private String strInvoiceType;
			private String strTransId;
			private String strEmail;
			
			public String getInvoiceNo()
			{
				return invoiceNo;
			}
			public void setInvoiceNo(String invoiceNo)
			{
				this.invoiceNo = invoiceNo;
			}
			public String getShopCode()
			{
				return shopCode;
			}
			public void setShopCode(String shopCode)
			{
				this.shopCode = shopCode;
			}
			public String getStrEmail()
			{
				return strEmail;
			}
			public void setStrEmail(String strEmail)
			{
				this.strEmail = strEmail;
			}
			public String getVtTransId()
			{
				return vtTransId;
			}
			public void setVtTransId(String vtTransId)
			{
				this.vtTransId = vtTransId;
			}
			public List<InputEstablishservice> getInputEstablishservice()
			{
				return inputEstablishservice;
			}
			public void setInputEstablishservice(List<InputEstablishservice> inputEstablishservice)
			{
				this.inputEstablishservice = inputEstablishservice;
			}
			public List<InputEstablishGoodsEntity> getInputEstablishGoodsEntity()
			{
				return inputEstablishGoodsEntity;
			}
			public void setInputEstablishGoodsEntity(List<InputEstablishGoodsEntity> inputEstablishGoodsEntity)
			{
				this.inputEstablishGoodsEntity = inputEstablishGoodsEntity;
			}
			public String getStrShopID()
			{
				return strShopID;
			}
			public void setStrShopID(String strShopID)
			{
				this.strShopID = strShopID;
			}
			public String getStrStaffID()
			{
				return strStaffID;
			}
			public void setStrStaffID(String strStaffID)
			{
				this.strStaffID = strStaffID;
			}
			public String getStrPayShopID()
			{
				return strPayShopID;
			}
			public void setStrPayShopID(String strPayShopID)
			{
				this.strPayShopID = strPayShopID;
			}
			public String getStrName()
			{
				return strName;
			}
			public void setStrName(String strName)
			{
				this.strName = strName;
			}
			public String getStrCompany()
			{
				return strCompany;
			}
			public void setStrCompany(String strCompany)
			{
				this.strCompany = strCompany;
			}
			public String getStrAddress()
			{
				return strAddress;
			}
			public void setStrAddress(String strAddress)
			{
				this.strAddress = strAddress;
			}
			public String getStrAccount()
			{
				return strAccount;
			}
			public void setStrAccount(String strAccount)
			{
				this.strAccount = strAccount;
			}
			public String getStrTin()
			{
				return strTin;
			}
			public void setStrTin(String strTin)
			{
				this.strTin = strTin;
			}
			public String getStrNote()
			{
				return strNote;
			}
			public void setStrNote(String strNote)
			{
				this.strNote = strNote;
			}
			public String getStrPayMethod()
			{
				return strPayMethod;
			}
			public void setStrPayMethod(String strPayMethod)
			{
				this.strPayMethod = strPayMethod;
			}
			public String getStrAmount()
			{
				return strAmount;
			}
			public void setStrAmount(String strAmount)
			{
				this.strAmount = strAmount;
			}
			public String getStrTax()
			{
				return strTax;
			}
			public void setStrTax(String strTax)
			{
				this.strTax = strTax;
			}
			public String getStrOrgTotal()
			{
				return strOrgTotal;
			}
			public void setStrOrgTotal(String strOrgTotal)
			{
				this.strOrgTotal = strOrgTotal;
			}
			public String getStrAmountTax()
			{
				return strAmountTax;
			}
			public void setStrAmountTax(String strAmountTax)
			{
				this.strAmountTax = strAmountTax;
			}
			public String getStrDiscount()
			{
				return strDiscount;
			}
			public void setStrDiscount(String strDiscount)
			{
				this.strDiscount = strDiscount;
			}
			public String getStrPromotion()
			{
				return strPromotion;
			}
			public void setStrPromotion(String strPromotion)
			{
				this.strPromotion = strPromotion;
			}
			public String getStrGrandTotal()
			{
				return strGrandTotal;
			}
			public void setStrGrandTotal(String strGrandTotal)
			{
				this.strGrandTotal = strGrandTotal;
			}
			public String getStrCreateDate()
			{
				return strCreateDate;
			}
			public void setStrCreateDate(String strCreateDate)
			{
				this.strCreateDate = strCreateDate;
			}
			public String getStrUserName()
			{
				return strUserName;
			}
			public void setStrUserName(String strUserName)
			{
				this.strUserName = strUserName;
			}
			public String getStrStatus()
			{
				return strStatus;
			}
			public void setStrStatus(String strStatus)
			{
				this.strStatus = strStatus;
			}
			public String getStrBlockNo()
			{
				return strBlockNo;
			}
			public void setStrBlockNo(String strBlockNo)
			{
				this.strBlockNo = strBlockNo;
			}
			public String getStrSerialNo()
			{
				return strSerialNo;
			}
			public void setStrSerialNo(String strSerialNo)
			{
				this.strSerialNo = strSerialNo;
			}
			public String getStrInvoiceNumber()
			{
				return strInvoiceNumber;
			}
			public void setStrInvoiceNumber(String strInvoiceNumber)
			{
				this.strInvoiceNumber = strInvoiceNumber;
			}
			public String getStrTaxRate()
			{
				return strTaxRate;
			}
			public void setStrTaxRate(String strTaxRate)
			{
				this.strTaxRate = strTaxRate;
			}
			public String getStrInvoiceType()
			{
				return strInvoiceType;
			}
			public void setStrInvoiceType(String strInvoiceType)
			{
				this.strInvoiceType = strInvoiceType;
			}
			public String getStrTransId()
			{
				return strTransId;
			}
			public void setStrTransId(String strTransId)
			{
				this.strTransId = strTransId;
			}
			
}
