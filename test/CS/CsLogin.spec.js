"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsLoginPage_1 = __importDefault(require("src/pages/cs/CsLoginPage"));
const config_1 = require("src/config");
const DeviceTypePanel_1 = require("src/components/DeviceTypePanel");
const ClientZoningPage_1 = __importDefault(require("src/pages/CS/ClientZoningPage"));
const chai_1 = require("chai");
describe('TEST-559', () => {
    it('should creat new zonning', () => {
        let loginPage = new CsLoginPage_1.default();
        let currentPage = loginPage.loadPageAndLogin(config_1.config.CSEmail, config_1.config.CSPassword);
        let zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
        let zoningModal = zoningPage.clickOnNewZoningButton();
        zoningModal.selectMappingAndPageByText(config_1.config.ZoningGroup, config_1.config.ZoningPage);
        //$(".device-selector-container").$(".device-selector-item")
        zoningModal.selectDeviceType(DeviceTypePanel_1.DeviceType.Mobile);
        zoningModal.selectDeviceType(DeviceTypePanel_1.DeviceType.Desktop);
        zoningModal.clickOnLetsGoBtn();
        ////////////////////////////
        zoningPage.moveToNewWindow();
        let clientZonnigPage = new ClientZoningPage_1.default();
        clientZonnigPage.clickOnAcceptButton();
        clientZonnigPage.closeClientWindow();
        zoningPage.backToOriginalWindow();
        zoningModal.clickOnLetsGoBtn();
        zoningPage.moveToNewWindow();
        clientZonnigPage.clickOnClientSiteEmailTB();
        clientZonnigPage.clickOnSaveInClientWebSite();
        clientZonnigPage.setZoningName("Automation_");
        clientZonnigPage.clickOnSaveToContentSquare();
        zoningPage.backToOriginalWindow();
        let isloaded = zoningPage.isZoningLoaded();
        chai_1.expect(isloaded).to.eq(true, "Zonning wasn't loaded");
    });
    it('should load saved zoning', () => {
        let loginPage = new CsLoginPage_1.default();
        let currentPage = loginPage.loadPageAndLogin(config_1.config.CSEmail, config_1.config.CSPassword);
        let zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
        zoningPage.clickOnRowByZoneName("Automation_");
        let isloaded = zoningPage.isZoningLoaded();
        chai_1.expect(isloaded).to.eq(true, "Zonning wasn't loaded");
    });
});
//# sourceMappingURL=CsLogin.spec.js.map