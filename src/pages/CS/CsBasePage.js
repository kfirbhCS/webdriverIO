"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
const config_1 = require("src/config");
class CsBasePage extends BasePage_1.default {
    genGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    get navigateToHomePage() {
        return browser.url(config_1.config.csHomePage);
    }
    get takeScreeshot() {
        const filename = 'ScreenShots/' + this.genGUID() + ".png";
        browser.saveScreenshot(filename);
        return filename;
    }
}
exports.default = CsBasePage;
//# sourceMappingURL=CsBasePage.js.map