"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const DeviceTypePanel_1 = require("src/components/DeviceTypePanel");
const config_1 = require("src/config");
const ClientZoningPage_1 = __importDefault(require("src/pages/CS/ClientZoningPage"));
const CsLoginPage_1 = __importDefault(require("src/pages/cs/CsLoginPage"));
describe('TEST-559', () => {
    it('should create new zoning', () => {
        const loginPage = new CsLoginPage_1.default();
        const currentPage = loginPage.loadPageAndLogin(config_1.config.CSEmail, config_1.config.CSPassword);
        const zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
        const zoningModal = zoningPage.clickOnNewZoningButton();
        zoningModal.selectMappingAndPageByText(config_1.config.ZoningGroup, config_1.config.ZoningPage);
        // $(".device-selector-container").$(".device-selector-item")
        zoningModal.selectDeviceType(DeviceTypePanel_1.DeviceType.Mobile);
        zoningModal.selectDeviceType(DeviceTypePanel_1.DeviceType.Desktop);
        zoningModal.clickOnLetsGoBtn();
        ////////////////////////////
        zoningPage.moveToNewWindow();
        const clientZonnigPage = new ClientZoningPage_1.default();
        clientZonnigPage.clickOnAcceptButton();
        clientZonnigPage.closeClientWindow();
        zoningPage.backToOriginalWindow();
        zoningModal.clickOnLetsGoBtn();
        zoningPage.moveToNewWindow();
        clientZonnigPage.clickOnClientSiteEmailTB();
        clientZonnigPage.clickOnSaveInClientWebSite();
        clientZonnigPage.setZoningName('Automation_');
        clientZonnigPage.clickOnSaveToContentSquare();
        zoningPage.backToOriginalWindow();
        const isloaded = zoningPage.isZoningLoaded();
        chai_1.expect(isloaded).to.eq(true, 'Zoning wasn\'t loaded');
    });
    it('should load saved zoning', () => {
        const loginPage = new CsLoginPage_1.default();
        const currentPage = loginPage.loadPageAndLogin(config_1.config.CSEmail, config_1.config.CSPassword);
        const zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
        zoningPage.clickOnRowByZoneName('Automation_');
        const isloaded = zoningPage.isZoningLoaded();
        chai_1.expect(isloaded).to.eq(true, "Zonning wasn't loaded");
    });
    it('should delete all zonings by name', () => {
        const loginPage = new CsLoginPage_1.default();
        const currentPage = loginPage.loadPageAndLogin(config_1.config.CSEmail, config_1.config.CSPassword);
        const zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
        zoningPage.deleteAllRowsByName('Automation_');
    });
});
//# sourceMappingURL=CsZoning.spec.js.map