"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TopPanelSubMenu_1 = __importDefault(require("/src/components/TopPanelSubMenu"));
const CsZoningPage_1 = __importDefault(require("src/pages/CS/CsZoningPage"));
class AnalyseSubMenu extends TopPanelSubMenu_1.default {
    constructor(parent) {
        super(parent);
    }
    clickOnJourneyAnalysisOption() {
        this.getOptions()[0].click();
    }
    clickOnPageComparatorOption() {
        this.getOptions()[1].click();
    }
    clickOnZoningAnalysisOption() {
        this.getOptions()[2].click();
        return new CsZoningPage_1.default();
    }
    clickOnSessioReplatOption() {
        this.getOptions()[3].click();
    }
}
exports.default = AnalyseSubMenu;
//# sourceMappingURL=AnalyseSubMenu.js.map