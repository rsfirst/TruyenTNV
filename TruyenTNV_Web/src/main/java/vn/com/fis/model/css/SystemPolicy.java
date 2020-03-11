package vn.com.fis.model.css;

/**
 * vn.com.fis.branded_shop.model.SystemPolicy
 * by sondt18
 * at 21/02/2019 9:52 AM
 */
public class SystemPolicy {
    private int passwordExpireDuration;
    private int maximumLoginFailure;
    private int minimumPasswordLength;
    private int diffFromPreviousPassword;
    private int minimumNumberUppercase;
    private int minimumNumberDigits;
    private int minimumNumberLowercase;

    public int getPasswordExpireDuration() {
        return passwordExpireDuration;
    }

    public void setPasswordExpireDuration(int passwordExpireDuration) {
        this.passwordExpireDuration = passwordExpireDuration;
    }

    public int getMaximumLoginFailure() {
        return maximumLoginFailure;
    }

    public void setMaximumLoginFailure(int maximumLoginFailure) {
        this.maximumLoginFailure = maximumLoginFailure;
    }

    public int getMinimumPasswordLength() {
        return minimumPasswordLength;
    }

    public void setMinimumPasswordLength(int minimumPasswordLength) {
        this.minimumPasswordLength = minimumPasswordLength;
    }

    public int getDiffFromPreviousPassword() {
        return diffFromPreviousPassword;
    }

    public void setDiffFromPreviousPassword(int diffFromPreviousPassword) {
        this.diffFromPreviousPassword = diffFromPreviousPassword;
    }

    public int getMinimumNumberUppercase() {
        return minimumNumberUppercase;
    }

    public void setMinimumNumberUppercase(int minimumNumberUppercase) {
        this.minimumNumberUppercase = minimumNumberUppercase;
    }

    public int getMinimumNumberDigits() {
        return minimumNumberDigits;
    }

    public void setMinimumNumberDigits(int minimumNumberDigits) {
        this.minimumNumberDigits = minimumNumberDigits;
    }

    public int getMinimumNumberLowercase() {
        return minimumNumberLowercase;
    }

    public void setMinimumNumberLowercase(int minimumNumberLowercase) {
        this.minimumNumberLowercase = minimumNumberLowercase;
    }
}
