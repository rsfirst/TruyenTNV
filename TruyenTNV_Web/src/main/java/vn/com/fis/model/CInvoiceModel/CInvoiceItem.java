package vn.com.fis.model.CInvoiceModel;


import vn.com.fis.model.css.CustomerObject;
import vn.com.fis.model.css.ShopObject;
import vn.com.fis.model.css.StaffObject;

import java.io.Serializable;

/**
 * Created by vumin on 12/10/2018.
 */
public class CInvoiceItem implements Serializable {

    private static final long serialVersionUID = -8644258708597710613L;
    private String sohoadon;
    private String ngaytao;
    private String tongtien;
    private String trangthai;
    private ShopObject shopObject;
    private StaffObject staffObject;

    public String getSohoadon() {
        return this.sohoadon;
    }

    public void setSohoadon(String sohoadon) {
        this.sohoadon = sohoadon;
    }

    public String getNgaytao() {
        return this.ngaytao;
    }

    public void setNgaytao(String ngaytao) {
        this.ngaytao = ngaytao;
    }

    public String getTongtien() {
        return this.tongtien;
    }

    public void setTongtien(String tongtien) {
        this.tongtien = tongtien;
    }

    public String getTrangthai() {
        return this.trangthai;
    }

    public void setTrangthai(String trangthai) {
        this.trangthai = trangthai;
    }

    public ShopObject getShopObject() {
        return this.shopObject;
    }

    public void setShopObject(ShopObject shopObject) {
        this.shopObject = shopObject;
    }

    public StaffObject getStaffObject() {
        return this.staffObject;
    }

    public void setStaffObject(StaffObject staffObject) {
        this.staffObject = staffObject;
    }

    public CustomerObject getCustomerObject() {
        return this.customerObject;
    }

    public void setCustomerObject(CustomerObject customerObject) {
        this.customerObject = customerObject;
    }

    public Company getCompany() {
        return this.company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getHttt() {
        return this.httt;
    }

    public void setHttt(String httt) {
        this.httt = httt;
    }

    public String getTygia() {
        return this.tygia;
    }

    public void setTygia(String tygia) {
        this.tygia = tygia;
    }

    public String getInvoiceAmount() {
        return this.invoiceAmount;
    }

    public void setInvoiceAmount(String invoiceAmount) {
        this.invoiceAmount = invoiceAmount;
    }

    public String getKhuyenmai() {
        return this.khuyenmai;
    }

    public void setKhuyenmai(String khuyenmai) {
        this.khuyenmai = khuyenmai;
    }

    public String getChietkhau() {
        return this.chietkhau;
    }

    public void setChietkhau(String chietkhau) {
        this.chietkhau = chietkhau;
    }

    public String getTienthue() {
        return this.tienthue;
    }

    public void setTienthue(String tienthue) {
        this.tienthue = tienthue;
    }

    public String getNguyente() {
        return this.nguyente;
    }

    public void setNguyente(String nguyente) {
        this.nguyente = nguyente;
    }

    public String getTienphaitra() {
        return this.tienphaitra;
    }

    public void setTienphaitra(String tienphaitra) {
        this.tienphaitra = tienphaitra;
    }

    public String getGhichu() {
        return this.ghichu;
    }

    public void setGhichu(String ghichu) {
        this.ghichu = ghichu;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private CustomerObject customerObject;
    private Company company;
    private String httt;// hinh thuc thanh toan
    private String tygia;
    private String invoiceAmount;
    private String khuyenmai;
    private String chietkhau;
    private String tienthue;
    private String nguyente;
    private String tienphaitra;
    private String ghichu;
    private String email;
}
