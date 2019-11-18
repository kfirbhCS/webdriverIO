"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allure_reporter_1 = __importDefault(require("@wdio/allure-reporter"));
const CsBasePage_1 = __importDefault(require("src/pages/CS/CsBasePage"));
const CsDashboardPage_1 = __importDefault(require("src/pages/CS/CsDashboardPage"));
class CsLoginPage extends CsBasePage_1.default {
    constructor() {
        super();
    }
    get dashboard() {
        return $('#dashboard-chart');
    }
    test1() {
        return 'Hello';
    }
    /**
        * This function will load the login page and commit login and return the dashbord page
        * @param {String} email
        * @param {String} password
        */
    loadPageAndLogin(email, password) {
        this.loadLoginPage();
        try {
            browser.waitUntil(() => {
                return this.dashboard !== undefined && this.dashboard.isDisplayed();
            }, 5000);
            return new CsDashboardPage_1.default();
        }
        catch (err) {
            console.log('waiting for dashboard');
        }
        allure_reporter_1.default.startStep('Authentication');
        browser.waitUntil(() => {
            return this.getEmailTB().isDisplayed();
        }, 15000, 'Email text was not loaded');
        allure_reporter_1.default.startStep('Set user name');
        this.getEmailTB().setValue(email);
        allure_reporter_1.default.endStep();
        this.getLoginButton().click();
        browser.waitUntil(() => {
            return this.getPasswordTB().isDisplayed();
        }, 60000, 'Password text box was not loaded');
        allure_reporter_1.default.startStep('set password');
        this.getPasswordTB().setValue(password);
        allure_reporter_1.default.endStep();
        allure_reporter_1.default.endStep();
        this.getLoginButton().click();
        return new CsDashboardPage_1.default();
    }
    loadLoginPage() {
        allure_reporter_1.default.startStep('loading login page');
        this.navigateToHomePage;
        allure_reporter_1.default.endStep();
    }
    getLoginButton() {
        return $('.login-form__submit');
    }
    getEmailTB() {
        return $('.login-form__username-input');
    }
    getPasswordTB() {
        return $('.login-form__password-input');
    }
    clickOnLoginButton() {
        this.getLoginButton().click();
    }
}
exports.default = CsLoginPage;
//# sourceMappingURL=CsLoginPage.js.map