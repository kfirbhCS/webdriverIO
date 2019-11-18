"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TopPanelSubMenu_1 = __importDefault(require("src/components/TopPanelSubMenu"));
class PerformanceSubMenu extends TopPanelSubMenu_1.default {
    constructor(parent) {
        super(parent);
    }
    clickOnDashboardOption() {
        this.getOptions()[0].click();
    }
    clickOnAIAlertsOption() {
        this.getOptions()[1].click();
    }
}
exports.default = PerformanceSubMenu;
//# sourceMappingURL=PerformanceSubMenu.js.map