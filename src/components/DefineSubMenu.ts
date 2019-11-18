import TopPanelSubMenu from 'src/components/TopPanelSubMenu';
import CsDashboardPage from 'src/pages/CS/CsDashboardPage';
export default class DefineSubMenu extends TopPanelSubMenu {
  public constructor(parent) {
    super(parent);
  }

  public clickOnMappingOption() {
    this.getOptions()[0].click();
    return new CsDashboardPage();
  }

  public clickOnGoalsOption() {
    this.getOptions()[1].click();
    return new CsDashboardPage();
  }

  public clickOnSegmentsOption() {
     this.getOptions()[2].click();
     return new CsDashboardPage();
  }
}