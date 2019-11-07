import TopPanelSubMenu from '/src/components/TopPanelSubMenu'
import CsZoningPage from 'src/pages/CS/CsZoningPage'
export default class AnalyseSubMenu extends TopPanelSubMenu {
  public constructor(parent) {
    super(parent)
  }

  public clickOnJourneyAnalysisOption() {
    this.getOptions()[0].click();
  }
  
  public clickOnPageComparatorOption() {
    this.getOptions()[1].click();
  }

  public clickOnZoningAnalysisOption() {
    this.getOptions()[2].click();
    return new CsZoningPage();
  }

  public clickOnSessioReplatOption() {
    this.getOptions()[3].click();
  }
}