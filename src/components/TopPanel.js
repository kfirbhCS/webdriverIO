"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefineSubMenu_1 = __importDefault(require("/src/components/DefineSubMenu"));
const AnalyseSubMenu_1 = __importDefault(require("./AnalyseSubMenu"));
const PerformanceSubMenu_1 = __importDefault(require("./PerformanceSubMenu"));
class TopPanel {
    getSubMenuContainer(parentTab) {
        return parentTab.$(".sub-menu-wrapper");
    }
    get getPanel() {
        return $("#cs-main-nav").$(".nav-wrapper");
    }
    get getAnalyseTab() {
        return this.getPanel.$(".analyze");
    }
    get getDefineTab() {
        return this.getPanel.$(".define");
    }
    get getPerformanceTab() {
        return this.getPanel.$(".performance ");
    }
    /**
     * will click on the define option in the top panel
     */
    clickOnDefineTab() {
        let tab = this.getDefineTab;
        tab.click();
        return new DefineSubMenu_1.default(this.getSubMenuContainer(tab));
    }
    /**
     * will click on the analyes option in the top panel
     */
    clickOnAnalyseTab() {
        let tab = this.getAnalyseTab;
        tab.click();
        let container = this.getSubMenuContainer(tab);
        return new AnalyseSubMenu_1.default(container);
    }
    /**
     * will click on the performance option in the top panel
     */
    clickOnPerformanceTab() {
        let tab = this.getPerformanceTab;
        tab.click();
        return new PerformanceSubMenu_1.default(this.getSubMenuContainer(tab));
    }
}
exports.default = TopPanel;
//# sourceMappingURL=TopPanel.js.map