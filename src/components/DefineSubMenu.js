"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TopPanelSubMenu_1 = __importDefault(require("src/components/TopPanelSubMenu"));
const CsDashboardPage_1 = __importDefault(require("src/pages/CS/CsDashboardPage"));
class DefineSubMenu extends TopPanelSubMenu_1.default {
    constructor(parent) {
        super(parent);
    }
    clickOnMappingOption() {
        this.getOptions()[0].click();
        return new CsDashboardPage_1.default();
    }
    clickOnGoalsOption() {
        this.getOptions()[1].click();
        return new CsDashboardPage_1.default();
    }
    clickOnSegmentsOption() {
        this.getOptions()[2].click();
        return new CsDashboardPage_1.default();
    }
}
exports.default = DefineSubMenu;
//# sourceMappingURL=DefineSubMenu.js.map