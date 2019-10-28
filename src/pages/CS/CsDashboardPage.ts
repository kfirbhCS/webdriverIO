import CsBasePage from 'src/pages/CS/CsBasePage'

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
      },30000,"waiting for chart")
  
    }catch(err){
      console.error(err)
      console.log(browser.getPageSource())
    }
    
    console.log("loading dashboard : ${pageHeaderText}")
   }

   public clickOnVisitsCB(){
     this.getVisitsCB().$('..').click();
   }
}