import TopPanel from 'src/components/TopPanel';
import CsBasePage from 'src/pages/CS/CsBasePage';

export default class CsDashboardPage extends CsBasePage {

   private get getChart() {
     return $('#dashboard-chart');
   }

   get pageHeaderText() {
     return this.getPageHeader().getText();
   }
  public constructor() {
    super();
    this.waitForLoad();

   }

   public clickOnVisitsCB() {
    try {
      this.getVisitsCB().$('..').$('.cs-checkbox-styled').click();
    } catch(err) {
      console.log('Failed to click on cb');
    }

   }

   public clickOnConversionCB() {
    try {
      this.getConversionCB().$('..').$('.cs-checkbox-styled').click();
    } catch(err) {
      console.log('Failed to click on cb');
    }
  }

  public getTopPanel() {
    return new TopPanel();
  }
   private getVisitsCB() {
     return $('.visits-checkbox');
   }

   private getConversionCB() {
    return $('.conversion-rate-checkbox');
   }
   private getPageHeader() {
     return $('.analysis-context-header__title');
   }

   private waitForLoad() {
    try {
      browser.waitUntil(() => {
        return this.getChart.isDisplayed();
      },60000,'waiting for chart');

    } catch(err) {
      console.error('Chart loading took too long');
    }
   }
}