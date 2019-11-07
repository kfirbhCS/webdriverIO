export default class TopPanelSubMenu {
 protected browser ;
 
 public constructor(parent){
    this.browser=parent;
  }

  protected getOptions(){
   return this.browser.$$(".sub-menu-item")
  }
 }