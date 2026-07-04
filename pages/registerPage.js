class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerLink = page.locator('a.register');
        this.loginInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.confirmationInput = page.locator('#user_password_confirmation');
        this.firstnameInput = page.locator('#user_firstname');
        this.lastnameInput = page.locator('#user_lastname');
        this.emailInput = page.locator('#user_mail');
        this.submitButton = page.locator('input[name="commit"]');
        this.flashSuccess = page.locator('#flash_notice');
    }

    async navigateToRegister() {
        await this.page.goto('/');
        await this.registerLink.click();
    }

    async registerUser(username, password, firstname, lastname, email) {
        await this.loginInput.fill(username);
        await this.passwordInput.fill(password);
        await this.confirmationInput.fill(password);
        await this.firstnameInput.fill(firstname);
        await this.lastnameInput.fill(lastname);
        await this.emailInput.fill(email);
        await this.submitButton.click();
    }
}
module.exports = { RegisterPage };