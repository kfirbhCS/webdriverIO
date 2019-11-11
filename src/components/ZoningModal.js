"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeviceTypePanel_1 = __importDefault(require("./DeviceTypePanel"));
class ZoningModal {
    constructor(parent) {
        this.parent = parent;
    }
    get rightPanel() {
        return $(".zoning-creation-modal__right-panel");
    }
    get rightPanelHeader() {
        return this.rightPanel.$("zoning-creation-modal__right-panel-title").getText();
    }
    get pagefilterIcon() {
        return this.rightPanel.$(".zoning-creation-modal__right-panel-filter-page-icon");
    }
    get mappingPanel() {
        return $(".mapping-page-select__panel");
    }
    get mappingsPanelResults() {
        return this.mappingPanel.$$(".mapping-page-select__result-name");
    }
    clickOnSerarch() {
        this.pagefilterIcon.click();
        return this.mappingPanel;
    }
    get pageResultsPanel() {
        return $$(".mapping-page-select__panel")[1];
    }
    get pageResultsRows() {
        return $$(".mapping-page-select__page-section");
    }
    clickOnMappingByIndex(index) {
        this.pagefilterIcon.click();
        let mappings = this.mappingsPanelResults;
        let mapping = mappings[index];
        mapping.click();
        return this.pageResultsRows;
    }
    get letsGoBtn() {
        return $('.zoning-creation-modal__right-panel-buttons-confirm');
    }
    clickOnMappingsByText(text) {
        this.pagefilterIcon.click();
        let rows = this.mappingsPanelResults;
        let row = rows.find((row) => {
            return (row.getText() === `${text}`);
        });
        if (row) {
            row.click();
        }
        else {
            console.error(`Failed to find ${text} in mapping options`);
        }
    }
    clickOnPageRowByText(text) {
        try {
            browser.waitUntil(() => {
                return this.pageResultsPanel.$$(".mapping-page-select__page-section").length > 0;
            }, 5000, "failed to select page");
        }
        catch (error) {
            console.log("failed to select page");
        }
        let rows = this.pageResultsPanel.$$(".mapping-page-select__page-section");
        let row = rows.find((row) => {
            return (row.getText() === `${text}`);
        });
        if (row) {
            row.click();
        }
        else {
            console.error(`Failed to find ${text} in pages options`);
        }
    }
    selectPageRowByIndex(index) {
        let rows = this.pageResultsPanel.$$(".mapping-page-select__page-section");
        rows[index].click();
    }
    selectMappingAndPageByText(mappingText, pagesText) {
        this.clickOnMappingsByText(mappingText);
        this.clickOnPageRowByText(pagesText);
    }
    selectPageByMappingAndPageIndex(mappingIndex, pageIndex) {
        let pageResults = this.clickOnMappingByIndex(mappingIndex);
        this.selectPageRowByIndex(pageIndex);
    }
    clickOnAnalyseGroupCB() {
        this.rightPanel.$$(".zoning-creation-modal__right-panel-analysis-choice-item-content-selection-checkbox")[0].click();
    }
    clickOnAnalyseASingle() {
        this.rightPanel.$$(".zoning-creation-modal__right-panel-analysis-choice-item-content-selection-checkbox")[1].click();
    }
    selectDeviceType(type) {
        browser.waitUntil(() => {
            return $(".device-selector-container").isEnabled();
        }, 5000, "Failed to find device container");
        let container = $(".device-selector-container").$(".device-selector-item");
        let panel = new DeviceTypePanel_1.default(container);
        panel.clickOnDeviceByType(type);
    }
    clickOnLetsGoBtn() {
        this.letsGoBtn.click();
    }
}
exports.default = ZoningModal;
//# sourceMappingURL=ZoningModal.js.map