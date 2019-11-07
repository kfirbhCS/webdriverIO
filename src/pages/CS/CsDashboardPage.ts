import CsBasePage from 'src/pages/CS/CsBasePage'
import TopPanel from '/src/components/TopPanel'

export default class CsDashboardPage extends CsBasePage {
  public constructor(){
    super();
    this.waitForLoad();
    
   }
   private getVisitsCB(){
     return $(".visits-checkbox")
   }

   private get getChart(){
     return $("#dashboard-chart")
   }

   private getConversionCB(){
    return $(".conversion-rate-checkbox")
   }
   private getPageHeader(){
     return $(".analysis-context-header__title")
   }

   get pageHeaderText(){
     return this.getPageHeader().getText();
   }
   
   private waitForLoad(){
    try{
      browser.waitUntil(() => {
        return this.getChart.isDisplayed()
      },60000,"waiting for chart")
  
    }catch(err){
      console.error("Chart loading took too long")
    }
   }

   public clickOnVisitsCB(){
    try{
      this.getVisitsCB().$('..').$(".cs-checkbox-styled").click();
    } catch(err){
      console.log("Failed to click on cb")
    }
    
   }

   public clickOnConversionCB(){
    try{
      this.getConversionCB().$('..').$(".cs-checkbox-styled").click();
    }
    catch(err){
      console.log("Failed to click on cb")
    }
  }

  public getTopPanel(){
    return new TopPanel();
  }
}