"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class DynamicLoadingPage extends BasePage_1.default {
    get open() {
        return browser.url('/dynamic_loading');
    }
    get elementExistsButIsHidden() {
        return $('[href="/dynamic_loading/1"]').click();
    }
    get elementIsRenderedAfterLoading() {
        return $('[href="/dynamic_loading/2"]').click();
    }
    get start() {
        return $('#start > button').click();
    }
    get finishElement() {
        return $('#finish > h4');
    }
    get finishText() {
        return this.finishElement.getText();
    }
    waitUntilElementIsDisplayed() {
        browser.waitUntil(() => {
            return this.finishElement.isDisplayed();
        });
    }
}
exports.default = new DynamicLoadingPage();
//# sourceMappingURL=DynamicLoadingPage.js.map