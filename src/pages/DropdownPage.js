"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class DropdownPage extends BasePage_1.default {
    get open() {
        return browser.url('/dropdown');
    }
    get dropdownElement() {
        return $('#dropdown');
    }
}
exports.default = new DropdownPage();
//# sourceMappingURL=DropdownPage.js.map