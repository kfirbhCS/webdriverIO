import TopPanelSubMenu from 'src/components/TopPanelSubMenu';
export default class PerformanceSubMenu extends TopPanelSubMenu {
  public constructor(parent) {
    super(parent);
  }

  public clickOnDashboardOption() {
    this.getOptions()[0].click();
  }

  public clickOnAIAlertsOption() {
    this.getOptions()[1].click();
  }
}