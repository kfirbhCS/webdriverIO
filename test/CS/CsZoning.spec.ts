import {expect} from 'chai';
import {DeviceType} from 'src/components/DeviceTypePanel';
import {config} from 'src/config';
import ClientZonnigPage from 'src/pages/CS/ClientZoningPage';
import CsLoginPage from 'src/pages/cs/CsLoginPage';
describe('TEST-559', () => {
	it('should create new zoning', () => {
		const loginPage = new CsLoginPage();
		const currentPage = loginPage.loadPageAndLogin(config.CSEmail, config.CSPassword);
		const zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
		const zoningModal = zoningPage.clickOnNewZoningButton();
		zoningModal.selectMappingAndPageByText(config.ZoningGroup, config.ZoningPage);
		// $(".device-selector-container").$(".device-selector-item")
		zoningModal.selectDeviceType(DeviceType.Mobile);
		zoningModal.selectDeviceType(DeviceType.Desktop);
		zoningModal.clickOnLetsGoBtn();
		////////////////////////////
		zoningPage.moveToNewWindow();
		const clientZonnigPage = new ClientZonnigPage();
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
		expect(isloaded).to.eq(true, 'Zoning wasn\'t loaded');
	});
	it('should load saved zoning', () => {
		const loginPage = new CsLoginPage();
		const currentPage = loginPage.loadPageAndLogin(config.CSEmail, config.CSPassword);
		const zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
		zoningPage.clickOnRowByZoneName('Automation_');
		const isloaded = zoningPage.isZoningLoaded();
		expect(isloaded).to.eq(true, "Zonning wasn't loaded");
	});
	it('should delete all zonings by name', () => {
		const loginPage = new CsLoginPage();
		const currentPage = loginPage.loadPageAndLogin(config.CSEmail, config.CSPassword);
		const zoningPage = currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
		zoningPage.deleteAllRowsByName('Automation_');
	});
});