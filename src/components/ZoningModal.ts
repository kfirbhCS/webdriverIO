import DeviceTypePanel, {
  DeviceType
} from './DeviceTypePanel'

export default class ZoningModal {

  parent
  public constructor(parent) {
    this.parent =parent;
  }

  private get rightPanel() {
    return $(".zoning-creation-modal__right-panel")
  }

  public get rightPanelHeader(): String {
    return this.rightPanel.$("zoning-creation-modal__right-panel-title").getText();
  }

  private get pagefilterIcon() {
    return this.rightPanel.$(".zoning-creation-modal__right-panel-filter-page-icon")
  }

  private get mappingPanel() {
    return $(".mapping-page-select__panel");
  }

  private get mappingsPanelResults(): WebdriverIO.Element[] {
    return this.mappingPanel.$$(".mapping-page-select__result-name");
  }

  private clickOnSerarch(): WebdriverIO.Element {
    this.pagefilterIcon.click()
    return this.mappingPanel
  }

  private get pageResultsPanel() {
    return $$(".mapping-page-select__panel")[1]
  }

  private get pageResultsRows() {
    return $$(".mapping-page-select__page-section")
  }

  private clickOnMappingByIndex(index: number) {
    this.pagefilterIcon.click()
    let mappings = this.mappingsPanelResults
    let mapping = mappings[index]
    mapping.click()
    return this.pageResultsRows;
  }

  private get letsGoBtn() {
    return $('.zoning-creation-modal__right-panel-buttons-confirm')
  }

  private clickOnMappingsByText(text: String) {
    this.pagefilterIcon.click()
    let rows = this.mappingsPanelResults
    let row = rows.find((row) => {
      return (row.getText() === `${text}`)
    })
    if (row) {
      row.click()
    } else {
      console.error(`Failed to find ${text} in mapping options`)
    }
  }

  private clickOnPageRowByText(text) {
    try{
      browser.waitUntil(() => {
        return this.pageResultsPanel.$$(".mapping-page-select__page-section").length > 0
      }, 5000, "failed to select page")
    }catch(error){
      console.log("failed to select page")
    }
   
    
    let rows = this.pageResultsPanel.$$(".mapping-page-select__page-section")
    let row = rows.find((row) => {
      return (row.getText() === `${text}`)
    })
    if (row) {
      row.click()
    } else {
      console.error(`Failed to find ${text} in pages options`)
    }
  }

  private selectPageRowByIndex(index: number) {
    let rows = this.pageResultsPanel.$$(".mapping-page-select__page-section")
    rows[index].click()
  }

  public selectMappingAndPageByText(mappingText: String, pagesText: string) {
    this.clickOnMappingsByText(mappingText)
    this.clickOnPageRowByText(pagesText)
  }

  public selectPageByMappingAndPageIndex(mappingIndex: number, pageIndex: number) {
    let pageResults = this.clickOnMappingByIndex(mappingIndex)
    this.selectPageRowByIndex(pageIndex)
  }

  public clickOnAnalyseGroupCB(): void {
    this.rightPanel.$$(".zoning-creation-modal__right-panel-analysis-choice-item-content-selection-checkbox")[0].click()
  }

  public clickOnAnalyseASingle(): void {
    this.rightPanel.$$(".zoning-creation-modal__right-panel-analysis-choice-item-content-selection-checkbox")[1].click()
  }

  public selectDeviceType(type: DeviceType) {
    browser.waitUntil(() => {
      return $(".device-selector-container").isEnabled()
    }, 5000, "Failed to find device container")

    let container = $(".device-selector-container").$(".device-selector-item")
    let panel = new DeviceTypePanel(container);
    panel.clickOnDeviceByType(type)
  }

  public clickOnLetsGoBtn() {
    this.letsGoBtn.click()
  }
}