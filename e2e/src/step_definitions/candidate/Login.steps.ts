import { browser, element, by, protractor } from 'protractor';
import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { LoginForm } from './Login.page';
import { async } from 'q';

chai.use(chaiAsPromised);
const expect = chai.expect;

let loginForm: LoginForm = new LoginForm();

When('User will open login page in {string} mode', async(mode) => {
    if(mode == '') {
        mode = 'web';
    }
    return loginForm.openLoginPage(mode);
});

Then('User will see login button', async () => {
    await expect(loginForm.getLoginButton().isDisplayed()).eventually.to.be.true;
});

Then('User will see remember me checkbox', () => {
    return expect(loginForm.getRememberMeCheckbox().isDisplayed()).eventually.to.be.true;
});

Then('User will see password input field', () => {
    return expect(loginForm.getPasswordInput().isDisplayed()).eventually.to.be.true;
});

Then('User will see username input field', () => {
    return expect(loginForm.getUsernameInput().isDisplayed()).eventually.to.be.true;
});

Then('User will see forgot password link', () => {
    return expect(loginForm.getForgotPasswordLink().isDisplayed()).eventually.to.be.true;
});

When('User will enter username as {string}', (username) => {
    return loginForm.getUsernameInput().sendKeys(username);
});

When('User will enter password as {string}', (password) => {
    return loginForm.getPasswordInput().sendKeys(password);
});

When('User will click on login button', () => {
    return loginForm.getLoginButton().click();
});

Then('User will verify login is success', () => {
    return expect(loginForm.waitForSearchInputToClickable()).eventually.to.be.true;
});

