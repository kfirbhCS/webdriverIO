"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class KeyPressPage extends BasePage_1.default {
    get open() {
        var details = browser.sessionId;
        console.log(details);
        return browser.url('/key_presses');
    }
    get result() {
        return $('#result').getText();
    }
    submitKeyPress(value) {
        // Supported values are here: https://w3c.github.io/webdriver/#keyboard-actions
        return browser.keys(value);
    }
}
exports.default = new KeyPressPage();
//# sourceMappingURL=KeyPressPage.js.map