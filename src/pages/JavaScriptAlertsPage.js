"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class JavaScriptAlertsPage extends BasePage_1.default {
    get open() {
        return browser.url('/javascript_alerts');
    }
    get clickForAlert() {
        return browser.$('button=Click for JS Alert').click();
    }
    get result() {
        return $('#result').getText();
    }
}
exports.default = new JavaScriptAlertsPage();
//# sourceMappingURL=JavaScriptAlertsPage.js.map