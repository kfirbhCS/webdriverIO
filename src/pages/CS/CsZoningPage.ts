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
      return $("zoning-iframe").isDisplayed()
    }, 10000, "waiting for i frame")

    browser.switchToFrame("zoning-iframe")
    let innerFrame = $("iframe")
    browser.switchToFrame(innerFrame)
    browser.switchToFrame
    try {
      browser.waitUntil(() => {
        return $('div.llBlk').isDisplayed()
      }, 10000, "Zoning shadow container was not loaded")
      return $('div.llBlk').shadow$("app-zone-elements").isDisplayed()
    } finally  {
      browser.switchToParentFrame()
    }

  }

  public clickBackToZoningLink() {
    $(".zoning-editor-navbar__back").click()
  }

  public clickOnRowByZoneName(name: string) {
    let rows = $("zoning-list").$$(".cs-table__row")
    let row = rows.find((currentRow) => {
      return currentRow.$$("cs-table-cell")[1].getText() === name
    })
    if (row != undefined)
      row.click()

  }


}