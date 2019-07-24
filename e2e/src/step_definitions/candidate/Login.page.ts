import { browser, element, by, ElementFinder, ExpectedConditions as EC } from 'protractor';

export class LoginForm{

    openLoginPage(mode = 'web') {
        if(mode.toLowerCase() == 'mobile') {
            browser.manage().window().setSize(375, 812);
        } else {
            browser.manage().window().maximize();
        }
        return browser.get('http://localhost:4200/#/login');
    }
    get() {
        return browser.get('http://localhost:4200/#/login');
    }

    getLoginButton() {
        return element(by.cssContainingText('span', 'Login'));
    }

    getRememberMeCheckbox() {
        return element(by.cssContainingText('span', 'Remember me'));
    }

    getPasswordInput() {
        return element(by.css('input[formcontrolname="password"]'));
    }

    getUsernameInput() {
        return element(by.css('input[formcontrolname="userName"]'));
    }

    getForgotPasswordLink() {
        return element(by.linkText('Forgot Password'));
    }

    waitForSearchInputToClickable() {
        return browser.wait(EC.elementToBeClickable(element(by.css('input[placeholder="Search within table for..."]'))), 8000);
    }
}