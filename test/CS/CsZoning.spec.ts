import CsLoginPage from 'src/pages/cs/CsLoginPage'
import {config} from 'src/config'
import {DeviceType} from 'src/components/DeviceTypePanel'
import ClientZonnigPage from 'src/pages/CS/ClientZoningPage'
import {expect} from 'chai';


describe('TEST-559',() =>{
 
  it('should create new zonning', ()=>{
    
    let loginPage = new CsLoginPage()
    let currentPage = loginPage.loadPageAndLogin(config.CSEmail,config.CSPassword )
    let zoningPage =currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
    let zoningModal = zoningPage.clickOnNewZoningButton();
    zoningModal.selectMappingAndPageByText(config.ZoningGroup,config.ZoningPage)
    //$(".device-selector-container").$(".device-selector-item")
    zoningModal.selectDeviceType(DeviceType.Mobile)
    zoningModal.selectDeviceType(DeviceType.Desktop)
    zoningModal.clickOnLetsGoBtn();
    ////////////////////////////
    zoningPage.moveToNewWindow()
    let clientZonnigPage = new ClientZonnigPage();
    clientZonnigPage.clickOnAcceptButton();
    clientZonnigPage.closeClientWindow();
    zoningPage.backToOriginalWindow();
    zoningModal.clickOnLetsGoBtn();
    zoningPage.moveToNewWindow()
    clientZonnigPage.clickOnClientSiteEmailTB()
    clientZonnigPage.clickOnSaveInClientWebSite();
    clientZonnigPage.setZoningName("Automation_")
    clientZonnigPage.clickOnSaveToContentSquare()
    zoningPage.backToOriginalWindow();
    let isloaded = zoningPage.isZoningLoaded()
    expect(isloaded).to.eq(true, "Zonning wasn't loaded")
  })

  it('should load saved zoning' , () => {
    let loginPage = new CsLoginPage()
    let currentPage = loginPage.loadPageAndLogin(config.CSEmail,config.CSPassword )
    let zoningPage =currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
    zoningPage.clickOnRowByZoneName("Automation_")
    let isloaded = zoningPage.isZoningLoaded()
    expect(isloaded).to.eq(true, "Zonning wasn't loaded")
  })

  it('should delete all zonings by name', () =>{
    let loginPage = new CsLoginPage()
    let currentPage = loginPage.loadPageAndLogin(config.CSEmail,config.CSPassword )
    let zoningPage =currentPage.getTopPanel().clickOnAnalyseTab().clickOnZoningAnalysisOption();
    zoningPage.deleteAllRowsByName("Automation_")
  })

})