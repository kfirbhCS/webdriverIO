"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = __importDefault(require("src/pages/BasePage"));
class BasicAuthPage extends BasePage_1.default {
    get message() {
        return $('#content > div > p').getText();
    }
}
exports.default = new BasicAuthPage();
//# sourceMappingURL=BasicAuthPage.js.map