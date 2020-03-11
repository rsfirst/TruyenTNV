package vn.com.fis.common.css;

import vn.com.fis.entity.ProductOrderEnrity.ProductOrder;
import vn.com.fis.entity.ProductOrderEnrity.ProductOrderMPV;
import vn.com.fis.ftu.vnm.wrapper.StringUtilEx;
import vn.com.fis.model.css.*;
import vn.com.fis.tibco.model.entity.Mdn;
import vn.com.fis.tibco.model.entity.PreCustomer;
import vn.com.fis.tibco.model.entity.PreSubscriber;
import vn.com.fis.utils.css.CommonConstant;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class CommonConvert {
    public void fetchSubscriber(ResultSet rs, PreCustomer cust, List subscribers, PreSubscriber preSub) throws Exception, SQLException {
        subscribers.add(preSub);

        preSub.setSubscriberId(rs.getString("subscriber_id"));
        if (rs.getString("mdn") != null && !rs.getString("mdn").equals("") && rs.getString("mdn").length() >= 9) {
            Mdn mdn = new Mdn();
            mdn.setMdn(rs.getString("mdn"));
            preSub.setMdn(mdn);
        }
        preSub.setSerial(StringUtilEx.nvl(rs.getString("serial"), ""));
        preSub.setStatus(StringUtilEx.nvl(rs.getString("status"), ""));
        preSub.setStockCreated(StringUtilEx.nvl(rs.getString("stock_created"), ""));
        preSub.setStockModified(StringUtilEx.nvl(rs.getString("stock_modified"), ""));
        preSub.setDateCreated(StringUtilEx.nvl(rs.getString("date_created"), ""));
        preSub.setLastModify(StringUtilEx.nvl(rs.getString("last_modify"), ""));
        preSub.setCOS(StringUtilEx.nvl(rs.getString("cos_code"), ""));
        preSub.setProvisionning(StringUtilEx.nvl(rs.getString("provisioning"), ""));
        preSub.setSvProductInstanceId(StringUtilEx.nvl(rs.getString("sv_product_instance_id"), ""));
        preSub.setFile_id(StringUtilEx.nvl(rs.getString("FILE_ID"), ""));
        preSub.setFile_id_2(StringUtilEx.nvl(rs.getString("FILE_ID2"), ""));
        preSub.setContract_img1(StringUtilEx.nvl(rs.getString("CONTRACT_IMG1"), ""));
        preSub.setContract_img2(StringUtilEx.nvl(rs.getString("CONTRACT_IMG2"), ""));
        preSub.setSub_payment_type(StringUtilEx.nvl(rs.getString("sub_payment_type"), ""));
        preSub.setSub_user_type(StringUtilEx.nvl(rs.getString("sub_use_type"), ""));
        preSub.setCreateUser(StringUtilEx.nvl(rs.getString("staff_code"), ""));
        preSub.setShopCode(StringUtilEx.nvl(rs.getString("shop_code"), ""));
    }

    public static Date convert(String date) throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        Date converted = format.parse(date);
        return converted;
    }

    public static Date convert(String date, String format) throws ParseException {
        SimpleDateFormat fm = new SimpleDateFormat(format);
        Date converted = fm.parse(date);
        return converted;
    }

    public static String convertDateSQLToUtil(String date) throws ParseException {
        Date tmp = convert(date, "yyyy-MM-dd");
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        return format.format(tmp);
    }

    public static CustomerObject convertRegistrationByBatch(PrePaidCusSubBatch input) {
        CustomerObject output = new CustomerObject();
        String[] name = null;
        if (input.getFullName() != null && !CommonConstant.EMPTY.equals(input.getFullName())) {
            name = input.getFullName().split(" ");
        }
        output.setDob(StringUtilEx.nvl(input.getDob(), CommonConstant.EMPTY));
        output.setIdCard(StringUtilEx.nvl(input.getIdCard(), CommonConstant.EMPTY));
        if (CommonConstant.CUSTOMER_TYPE_FOREIGNER.equals(input.getCustomerType())) {
            output.setCountry(StringUtilEx.nvl(input.getCountry(), CommonConstant.EMPTY));
        } else {
            output.setCountry("Vietnam");
        }
        output.setProvince(StringUtilEx.nvl(input.getProvince(), CommonConstant.EMPTY));
        output.setDistrict(StringUtilEx.nvl(input.getDistrict(), CommonConstant.EMPTY));
        output.setAddress(StringUtilEx.nvl(input.getAddress(), CommonConstant.EMPTY));
        output.setCompanyName(StringUtilEx.nvl(input.getCompanyName(), CommonConstant.EMPTY));
        if (input.getFullName() != null && !CommonConstant.EMPTY.equals(input.getFullName())) {
            output.setFirstName(name[0]);
            String tmp = CommonConstant.EMPTY;
            for (int i = 1; i < name.length; i++) {
                tmp = tmp + " " + name[i];
                output.setLastName(tmp);
            }
        } else {
            output.setFirstName(CommonConstant.EMPTY);
            output.setLastName(CommonConstant.EMPTY);
        }

        output.setPlaceOfIssue(StringUtilEx.nvl(input.getPlaceOfIssue(), CommonConstant.EMPTY));
        output.setDateOfIssue(StringUtilEx.nvl(input.getDateOfIssue(), CommonConstant.EMPTY));
        output.setCustomerType(StringUtilEx.nvl(input.getCustomerType(), CommonConstant.EMPTY));
        output.setTaxCode(StringUtilEx.nvl(input.getTaxCode(), CommonConstant.EMPTY));
        output.setGender(StringUtilEx.nvl(input.getGender(), CommonConstant.EMPTY));
        output.setRegion(StringUtilEx.nvl(input.getRegion(), CommonConstant.EMPTY));
        output.setAddress_company(StringUtilEx.nvl(input.getAddressCompany(), CommonConstant.EMPTY));

        //DatBD2
        output.setType_card(StringUtilEx.nvl(input.getType_card(), CommonConstant.EMPTY));
        output.setType_card_company(StringUtilEx.nvl(input.getType_Card_Company(), CommonConstant.EMPTY));
        output.setSubUseType(StringUtilEx.nvl(input.getSub_use_type(), CommonConstant.EMPTY));
        //end

        for (int i = 0; i < input.getAttachmentDataObject().size(); i++) {
            switch (input.getAttachmentDataObject().get(i).getAttachmentType()) {
                case CommonConstant.AUTHORIZED_IMG:

//				output.setAuthorized_img(input.getAttachmentDataObject().get(i).getFileName());
                    output.setAuthorized_img(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.BUS_PERMIT_NO_IMG1:
//				output.setBus_permit_no_img1(input.getAttachmentDataObject().get(i).getFileName());
                    output.setBus_permit_no_img1(input.getAttachmentDataObject().get(i).getFileIdInserted());

                    break;
                case CommonConstant.CONTRACT_IMG1:
//				output.setContract_img1(input.getAttachmentDataObject().get(i).getFileName());
                    output.setContract_img1(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.CONTRACT_IMG2:
//				output.setContract_img2(input.getAttachmentDataObject().get(i).getFileName());
                    output.setContract_img2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.CUST_IMG:
//				output.setCust_img(input.getAttachmentDataObject().get(i).getFileName());
                    output.setCust_img(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.IMG_ID:
//				output.setImg_id(input.getAttachmentDataObject().get(i).getFileName());
                    output.setImg_id(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.IMG_ID_2:
                    //output.setImg_id_2(input.getAttachmentDataObject().get(i).getFileName());
                    output.setImg_id_2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                //DatBD2
                case CommonConstant.FILE_ID:
                    output.setFile_id1(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.FILE_ID_2:
                    output.setFile_id2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.BUS_PERMIT_NO_IMG2:
                    output.setBus_permit_no_img2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.PARENT_IMG:
                    output.setParent_img(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                //end

                default:
                    break;
            }
        }
        return output;
    }

    //DatBD2 create
    public static RegisterByBatchObject convertRegisterByBatch(PrePaidCusSubBatch input) {
        RegisterByBatchObject output = new RegisterByBatchObject();

        output.setTenKh(StringUtilEx.nvl(input.getFullName(), CommonConstant.EMPTY));
        output.setNgaySinh(StringUtilEx.nvl(input.getDob(), CommonConstant.EMPTY));
        output.setLoaiGtCn(StringUtilEx.nvl(input.getType_card(), CommonConstant.EMPTY));
        output.setSoGtCn(StringUtilEx.nvl(input.getIdCard(), CommonConstant.EMPTY));
        output.setGioiTinh(StringUtilEx.nvl(input.getGender(), CommonConstant.EMPTY));
        output.setLoaiKh(StringUtilEx.nvl(input.getCustomerType(), CommonConstant.EMPTY));
        output.setDoiTuongSd(StringUtilEx.nvl(input.getSub_use_type(), CommonConstant.EMPTY));
        output.setTenCongty(StringUtilEx.nvl(input.getCompanyName(), CommonConstant.EMPTY));
        output.setLoaiGtTc(StringUtilEx.nvl(input.getType_Card_Company(), CommonConstant.EMPTY));
        output.setSoGtTc(StringUtilEx.nvl(input.getTaxCode(), CommonConstant.EMPTY));
        output.setDiaChi(StringUtilEx.nvl(input.getAddress(), CommonConstant.EMPTY));
        output.setDiaChiCongty(StringUtilEx.nvl(input.getAddressCompany()));
        output.setTinhThanh(StringUtilEx.nvl(input.getProvince(), CommonConstant.EMPTY));
        output.setQuanHuyen(StringUtilEx.nvl(input.getDistrict(), CommonConstant.EMPTY));
        output.setSoThueBao(StringUtilEx.nvl(input.getMdn(), CommonConstant.EMPTY));
        output.setIccid(StringUtilEx.nvl(input.getSerial(), CommonConstant.EMPTY));
        output.setNoiCapGt(StringUtilEx.nvl(input.getPlaceOfIssue(), CommonConstant.EMPTY));
        output.setNgayCapGt(StringUtilEx.nvl(input.getDateOfIssue(), CommonConstant.EMPTY));
        output.setQuocTinh(StringUtilEx.nvl(input.getCountry(), CommonConstant.EMPTY));
        output.setTransId(StringUtilEx.nvl(input.getTransId(), CommonConstant.EMPTY));
        output.setFileExcute(StringUtilEx.nvl(input.getFileExcute(), CommonConstant.EMPTY));
        output.setUserExcute(StringUtilEx.nvl(input.getUserExcute(), CommonConstant.EMPTY));
        output.setShopId(StringUtilEx.nvl(input.getShopId(), CommonConstant.EMPTY));
        output.setShopCode(StringUtilEx.nvl(input.getShopCode(), CommonConstant.EMPTY));
        output.setUserExcute(StringUtilEx.nvl(input.getCreate_user(), CommonConstant.EMPTY));
        for (int i = 0; i < input.getAttachmentDataObject().size(); i++) {
            switch (input.getAttachmentDataObject().get(i).getAttachmentType()) {
                case CommonConstant.AUTHORIZED_IMG:
                    output.setAnhGiayUyQuyen(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.BUS_PERMIT_NO_IMG1:
                    output.setAnhGpkd1(input.getAttachmentDataObject().get(i).getFileIdInserted());

                    break;
                case CommonConstant.CONTRACT_IMG1:
                    output.setAnhHd1(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.CONTRACT_IMG2:
                    output.setAnhHd2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.CUST_IMG:
                    output.setAnhChanDung(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.IMG_ID:
                    output.setAnhCmt1(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.IMG_ID_2:
                    output.setAnhCmt2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;

                case CommonConstant.FILE_ID:
                    output.setAnhHs1(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.FILE_ID_2:
                    output.setAnhHs2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.BUS_PERMIT_NO_IMG2:
                    output.setAnhGpkd2(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                case CommonConstant.PARENT_IMG:
                    output.setAnhDscnTc(input.getAttachmentDataObject().get(i).getFileIdInserted());
                    break;
                default:
                    break;
            }
        }
        return output;
    }
    //end

    public static PreCustomer converToPreCus(CustomerObject input, String shopId) {
        PreCustomer output = new PreCustomer();

        output.setCustomerId(input.getCustomerId());
        output.setFirstName(input.getFirstName());
        output.setLastName(input.getLastName());
        output.setFullName(input.getFirstName() + input.getLastName());
        output.setDob(input.getDob());
        output.setIdCard(input.getIdCard());
        output.setPlaceOfIssue(input.getPlaceOfIssue());
        output.setDateOfIssue(input.getDateOfIssue());
        output.setCountry(input.getCountry());
        output.setRegion(input.getRegion());
        output.setProvince(input.getProvince());
        output.setDistrict(input.getDistrict());
        output.setAddress(input.getAddress());
        output.setCustomerType(input.getCustomerType());
        output.setCompanyName(input.getCompanyName());
        output.setStockCreated(shopId);
        output.setStockModified(shopId);
        output.setTaxCode(input.getTaxCode());
        output.setGender(input.getGender());
        output.setCust_img(input.getCust_img());
        output.setBus_permit_no_img1(input.getBus_permit_no_img1());
        output.setContract_img1(input.getContract_img1());
        output.setContract_img2(input.getContract_img2());
        output.setAuthorized_img(input.getAuthorized_img());
        output.setImg_id(input.getImg_id());
        output.setImg_id_2(input.getImg_id_2());

        //DatBD2
        output.setType_card(input.getType_card());
        output.setType_card_company(input.getType_card_company());
        output.setAddress_company(input.getAddress_company());
        output.setParent_img(input.getParent_img());
        output.setBus_permit_no_img2(input.getBus_permit_no_img2());

        return output;
    }

    public static CustomerObject convertRegisterSubInfoToCusObject(RegisterSubInfoObject input) {
        CustomerObject output = new CustomerObject();

        output.setDob(input.getDob());
        output.setIdCard(input.getIdCard());
        output.setCountry(input.getCountry());
        output.setProvince(input.getProvince());
        output.setDistrict(input.getDistrict());
        output.setAddress(input.getAddress());
        output.setCompanyName(input.getCompanyName());
        output.setFirstName(input.getFirstName());
        output.setLastName(input.getLastName());
        output.setPlaceOfIssue(input.getPlaceOfIssue());
        output.setDateOfIssue(input.getDateOfIssue());
        output.setCustomerType(input.getCustomerType());
        output.setTaxCode(input.getTaxCode());
        output.setGender(input.getGender());
        output.setCust_img(input.getCust_img());
        output.setBus_permit_no_img1(input.getBus_permit_no_img1());
        output.setContract_img1(input.getContract_CUS_img1());
        output.setContract_img2(input.getContract_CUS_img2());
        output.setAuthorized_img(input.getAuthorized_img());
        output.setImg_id(input.getImg_id());
        output.setImg_id_2(input.getImg_id_2());
        output.setShopId(input.getShopid());
        output.setRegion(input.getRegion());

        output.setOld_idno_img(input.getOld_idno_img());
        output.setOld_idno_2_img(input.getOld_idno_2_img());
        output.setCk_img(input.getCk_img());
        output.setImgCmgs(input.getImgCmgs());
        output.setType_card(input.getType_card());
        output.setType_card_company(input.getType_card_company());
        output.setAddress_company(input.getAddress_company());
        output.setParent_img(input.getParent_img());
        output.setBus_permit_no_img2(input.getBus_permit_no_img2());
        return output;
    }

    public static PreCustomer convertCusObToPreCustomer(CustomerObject output) {
        PreCustomer preCust = new PreCustomer();

        preCust.setDob(output.getDob());
        preCust.setIdCard(output.getIdCard());
        preCust.setCountry(output.getCountry());
        preCust.setProvince(output.getProvince());
        preCust.setDistrict(output.getDistrict());
        preCust.setAddress(output.getAddress());
        preCust.setCompanyName(output.getCompanyName());
        preCust.setFirstName(output.getFirstName());
        preCust.setLastName(output.getLastName());
        preCust.setPlaceOfIssue(output.getPlaceOfIssue());
        preCust.setDateOfIssue(output.getDateOfIssue());
        preCust.setCustomerType(output.getCustomerType());
        preCust.setTaxCode(output.getTaxCode());
        preCust.setGender(output.getGender());
        preCust.setCust_img(output.getCust_img());
        preCust.setBus_permit_no_img1(output.getBus_permit_no_img1());
        preCust.setContract_img1(output.getContract_img1());
        preCust.setContract_img2(output.getContract_img2());
        preCust.setAuthorized_img(output.getAuthorized_img());
        preCust.setImg_id(output.getImg_id());
        preCust.setImg_id_2(output.getImg_id_2());
        preCust.setRegion(output.getRegion());
        preCust.setCustomerId(output.getCustomerId());
        preCust.setFullName(output.getLastName() + " " + output.getFirstName());
        preCust.setType_card(output.getType_card());
        preCust.setType_card_company(output.getType_card_company());
        preCust.setAddress_company(output.getAddress_company());

        preCust.setParent_img(output.getParent_img());
        preCust.setBus_permit_no_img2(output.getBus_permit_no_img2());
        return preCust;
    }

    public static ConnectObject convertRegSubToConObj(RegisterSubInfoObject input) {
        ConnectObject conObject = new ConnectObject();

        conObject.setIdCard(input.getIdCard());
        conObject.setShopid(input.getShopid());
        conObject.setMdn(input.getMdn());
        conObject.setSerial(input.getSerial());
        conObject.setContract_img1(input.getContract_SUB_img1());
        conObject.setContract_img2(input.getContract_SUB_img2());
        conObject.setFileID(input.getFileID());
        conObject.setFile_id_2(input.getFile_id_2());
        conObject.setCos(input.getCos());
        conObject.setSubPaymentType(input.getSubPaymentType());
        conObject.setSubUserType(input.getSubUserType());

        return conObject;
    }

    public static ChangeSoveInput convertRegSubToChangeSove(RegisterSubInfoObject input) {
        ChangeSoveInput changeSolveOut = new ChangeSoveInput();

        changeSolveOut.setShopid(input.getShopid());
        changeSolveOut.setContract_img1(input.getContract_SUB_img1());
        changeSolveOut.setContract_img2(input.getContract_SUB_img2());
        changeSolveOut.setFileID(input.getFileID());
        changeSolveOut.setFile_id_2(input.getFile_id_2());
        changeSolveOut.setImgCmgs(input.getImgCmgs());
        changeSolveOut.setSubUseType(input.getSubUserType());
        changeSolveOut.setShopCode(input.getShopCode());
        changeSolveOut.setStaffCode(input.getStaffCode());
        return changeSolveOut;
    }

    public static ProductOrder convertToProductOrder(ProductOrderMPV input) {
        ProductOrder output = new ProductOrder();
        output.setOrderId(input.getOrderId());
        output.setPoCode(input.getPoCode());
        output.setChannel(input.getChannel());
        output.setOrderType(input.getOrderType());
        output.setOrderDate(input.getOrderDate());
        output.setModifiedDate(input.getModifiedDate());
        output.setAprroveDate(input.getAprroveDate());
        output.setRejectDate(input.getRejectDate());
        output.setStatus(input.getStatus());
        output.setNotes(input.getNotes());
        output.setOrder_shopId(input.getOrder_shopId());
        output.setProvinceId(input.getProvinceId());
        output.setOrder_staffName(input.getOrder_staffName());
        output.setOrder_staffId(input.getOrder_staffId());
        output.setModify_staffName(input.getModify_staffName());
        output.setModify_staffId(input.getModify_staffId());
        output.setApprover_staffId(input.getApprover_staffId());
        output.setOrder_shopName(input.getOrder_shopName());
        output.setPaymentMode(input.getPaymentMode());
        output.setBankName(input.getBankName());
        output.setBankBranch(input.getBankBranch());
        output.setBankDepositReference(input.getBankDepositReference());
        output.setBankDepositValue(input.getBankDepositValue());
        output.setDepositSlip(input.getDepositSlip());
        output.setTotalGrossValue(input.getTotalGrossValue());
        output.setTotalDiscountvalue(input.getTotalDiscountvalue());
        output.setTotalNetValue(input.getTotalNetValue());
        return output;
    }

    public static PreCustomer convertCusObToPreCustomerNiceNum(CustomerObject output, boolean checkNiceNum) {
        PreCustomer preCust = new PreCustomer();

        preCust.setDob(output.getDob());
        if (checkNiceNum == false) {
            preCust.setIdCard(output.getIdCard());
        }
        preCust.setCountry(output.getCountry());
        preCust.setProvince(output.getProvince());
        preCust.setDistrict(output.getDistrict());
        preCust.setAddress(output.getAddress());
        preCust.setCompanyName(output.getCompanyName());
        preCust.setFirstName(output.getFirstName());
        preCust.setLastName(output.getLastName());
        preCust.setPlaceOfIssue(output.getPlaceOfIssue());
        preCust.setDateOfIssue(output.getDateOfIssue());
        preCust.setCustomerType(output.getCustomerType());
        preCust.setTaxCode(output.getTaxCode());
        preCust.setGender(output.getGender());
        preCust.setCust_img(output.getCust_img());
        preCust.setBus_permit_no_img1(output.getBus_permit_no_img1());
        preCust.setContract_img1(output.getContract_img1());
        preCust.setContract_img2(output.getContract_img2());
        preCust.setAuthorized_img(output.getAuthorized_img());
        preCust.setImg_id(output.getImg_id());
        preCust.setImg_id_2(output.getImg_id_2());
        preCust.setRegion(output.getRegion());
        preCust.setCustomerId(output.getCustomerId());
        preCust.setFullName(output.getLastName() + " " + output.getFirstName());

//		preCust.setParent_img(output.getParent_img());
//		preCust.setBus_permit_no_img2(output.getBus_permit_no_img2());

        return preCust;
    }
}
