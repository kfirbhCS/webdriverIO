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
        return $('.zoning-creation-modal__right-panel');
    }
    get rightPanelHeader() {
        return this.rightPanel.$('zoning-creation-modal__right-panel-title').getText();
    }
    get pagefilterIcon() {
        return this.rightPanel.$('.zoning-creation-modal__right-panel-filter-page-icon');
    }
    get mappingPanel() {
        return $('.mapping-page-select__panel');
    }
    get mappingsPanelResults() {
        return this.mappingPanel.$$('.mapping-page-select__result-name');
    }
    get pageResultsPanel() {
        return $$('.mapping-page-select__panel')[1];
    }
    get pageResultsRows() {
        return $$('.mapping-page-select__page-section');
    }
    get letsGoBtn() {
        return $('.zoning-creation-modal__right-panel-buttons-confirm');
    }
    selectMappingAndPageByText(mappingText, pagesText) {
        this.clickOnMappingsByText(mappingText);
        this.clickOnPageRowByText(pagesText);
    }
    selectPageByMappingAndPageIndex(mappingIndex, pageIndex) {
        const pageResults = this.clickOnMappingByIndex(mappingIndex);
        this.selectPageRowByIndex(pageIndex);
    }
    clickOnAnalyseGroupCB() {
        this.rightPanel.$$('.zoning-creation-modal__right-panel-analysis-choice-item-content-selection-checkbox')[0].click();
    }
    clickOnAnalyseASingle() {
        this.rightPanel.$$('.zoning-creation-modal__right-panel-analysis-choice-item-content-selection-checkbox')[1].click();
    }
    selectDeviceType(type) {
        browser.waitUntil(() => {
            return $('.device-selector-container').isEnabled();
        }, 5000, 'Failed to find device container');
        const container = $('.device-selector-container').$('.device-selector-item');
        const panel = new DeviceTypePanel_1.default(container);
        panel.clickOnDeviceByType(type);
    }
    clickOnLetsGoBtn() {
        this.letsGoBtn.click();
    }
    clickOnSerarch() {
        this.pagefilterIcon.click();
        return this.mappingPanel;
    }
    clickOnMappingByIndex(index) {
        this.pagefilterIcon.click();
        const mappings = this.mappingsPanelResults;
        const mapping = mappings[index];
        mapping.click();
        return this.pageResultsRows;
    }
    clickOnMappingsByText(text) {
        this.pagefilterIcon.click();
        browser.waitUntil(() => {
            return this.mappingsPanelResults.length > 0;
        }, 5000, 'results were not loaded');
        const rows = this.mappingsPanelResults;
        console.log('number of results :' + rows.length);
        const row = rows.find((row) => {
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
                return this.pageResultsPanel.$$('.mapping-page-select__page-section').length > 0;
            }, 5000, 'failed to select page');
        }
        catch (error) {
            console.log('failed to select page');
        }
        const rows = this.pageResultsPanel.$$('.mapping-page-select__page-section');
        const row = rows.find((row) => {
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
        const rows = this.pageResultsPanel.$$('.mapping-page-select__page-section');
        rows[index].click();
    }
}
exports.default = ZoningModal;
//# sourceMappingURL=ZoningModal.js.map