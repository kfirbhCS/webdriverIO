"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsBasePage_1 = __importDefault(require("src/pages/CS/CsBasePage"));
const TopPanel_1 = __importDefault(require("/src/components/TopPanel"));
class CsDashboardPage extends CsBasePage_1.default {
    constructor() {
        super();
        this.waitForLoad();
    }
    getVisitsCB() {
        return $(".visits-checkbox");
    }
    get getChart() {
        return $("#dashboard-chart");
    }
    getConversionCB() {
        return $(".conversion-rate-checkbox");
    }
    getPageHeader() {
        return $(".analysis-context-header__title");
    }
    get pageHeaderText() {
        return this.getPageHeader().getText();
    }
    waitForLoad() {
        try {
            browser.waitUntil(() => {
                return this.getChart.isDisplayed();
            }, 60000, "waiting for chart");
        }
        catch (err) {
            console.error("Chart loading took too long");
        }
    }
    clickOnVisitsCB() {
        try {
            this.getVisitsCB().$('..').$(".cs-checkbox-styled").click();
        }
        catch (err) {
            console.log("Failed to click on cb");
        }
    }
    clickOnConversionCB() {
        try {
            this.getConversionCB().$('..').$(".cs-checkbox-styled").click();
        }
        catch (err) {
            console.log("Failed to click on cb");
        }
    }
    getTopPanel() {
        return new TopPanel_1.default();
    }
}
exports.default = CsDashboardPage;
//# sourceMappingURL=CsDashboardPage.js.map