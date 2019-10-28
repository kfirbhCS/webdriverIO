import BasePage from 'src/pages/BasePage'
import {config} from 'src/config';
export default class CsBasePage extends BasePage {
  private genGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  get navigateToHomePage(){
    console.log(config)
    return browser.url(config.csHomePage)
  }

  get takeScreeshot(){
    const filename = 'ScreenShots/' +this.genGUID()+".png"; 
    browser.saveScreenshot(filename);
    return filename;
  }

}