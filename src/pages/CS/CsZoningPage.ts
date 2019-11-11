import CsBasePage from 'src/pages/CS/CsBasePage'
import TopPanel from '/src/components/TopPanel'
import ZoningCreationModal from 'src/components/ZoningModal'

export default class CsDashboardPage extends CsBasePage {
  private originalWindowHanlde
  private newWindowHandle
  public constructor() {
    super();
    this.originalWindowHanlde = browser.getWindowHandle();
  }

  private get newZoningBtn() {
    return $('//cs-button[@data-cy="new"]/button')
  }

  private get zoningCreationModalContainer() {
    return $("zoning-creation-modal")
  }

  private get zoningIframeWrapper(){
   
    return $("#zoning-iframe")
  }

  private get zoningInnerFrame(){
 
    return $("iframe")
  }
  private get zoningsTopLevelContainer(){
    //return $('body').shadow$('div.llBlk')
    return $('div.llBlk')
  }

  private get firstZoningElement(){
    return this.zoningsTopLevelContainer.shadow$("app-zone-elements")
  }

  private get backToZoningLink(){
    return $(".zoning-editor-navbar__back")
  }

  private get ZoningsTableRows(){
    return $("zoning-list").$$(".cs-table__row")
  }

  public clickOnNewZoningButton(): ZoningCreationModal {
    this.newZoningBtn.click();
    return new ZoningCreationModal(this.zoningCreationModalContainer);
  }

  public moveToNewWindow() {
    browser.waitUntil(() => {
      return browser.getWindowHandles().length > 1
    }, 120000, "New window did not opened ")
    this.newWindowHandle = browser.getWindowHandles().filter((value) => {
      return value !== this.originalWindowHanlde
    })[0]
    browser.switchToWindow(this.newWindowHandle)
  }

  public backToOriginalWindow() {
    browser.getWindowHandles().forEach((value) => console.log(value))
    browser.switchToWindow(this.originalWindowHanlde)
  }

  public getTopPanel() {
    return new TopPanel();
  }


  public isZoningLoaded() {   
    browser.waitUntil(() => {
     return this.zoningIframeWrapper.isDisplayed()
    }, 10000, "waiting for i frame wrapper")

    ///switch to the frame
    browser.switchToFrame("zoning-iframe")
    
  
    browser.waitUntil(() => {
      return this.zoningInnerFrame.isDisplayed()
    }, 10000, "waiting for i frame")


    browser.switchToFrame(this.zoningInnerFrame)

    try {
      browser.waitUntil(() => {
        return this.zoningsTopLevelContainer.isEnabled()
      }, 20000, "Zoning shadow container was not loaded")

      browser.waitUntil(() => {
        return  this.firstZoningElement.isEnabled()
      }, 20000, "Zoning first element was not loaded")

      let result : boolean =  this.firstZoningElement.isDisplayed()
      return result;
    } finally  {
      browser.switchToParentFrame()
    }

  }

  public clickBackToZoningLink() {
    this.backToZoningLink.click()
  }

  public clickOnRowByZoneName(name: string) {
    let rows = this.ZoningsTableRows;

    let row = rows.find((currentRow) => {
      return currentRow.$$("cs-table-cell")[1].getText() === name
    })
    if (row != undefined){
      $$("cs-table-cell")[1].click()
    }
    

  }


}