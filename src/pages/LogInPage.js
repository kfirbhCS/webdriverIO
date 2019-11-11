"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class LoginPage extends BasePage_1.default {
    get username() {
        return $('#username');
    }
    get password() {
        return $('#password');
    }
    get submit() {
        return $('#login > button');
    }
    get flash() {
        return $('#flash').getText();
    }
    get open() {
        return browser.url('/login');
    }
    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}
exports.default = new LoginPage();
//# sourceMappingURL=LogInPage.js.map