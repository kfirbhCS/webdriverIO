import CsBasePage from 'src/pages/CS/CsBasePage'
import CsDashboardPage from 'src/pages/CS/CsDashboardPage'

export default class CsLoginPage extends CsBasePage {
  constructor(){
    super();
    //console.log("Creating instance of login page")
  }
  private loadLoginPage() {
    return this.navigateToHomePage;
  }

  private getLoginButton() {
    return $('.login-form__submit')
  }

  private getEmailTB(){
    return  $('.login-form__username-input')
  }

  private getPasswordTB(){
    return $(".login-form__password-input")
  }
  
  private setEmailAddress(email) {
    this.getEmailTB().setValue(email)
  }

  private setPassWord(password) {
    this.getPasswordTB().setValue(password)
  }

  private clickOnLoginButton(){
    this.getLoginButton().click
  }

  /**
   * This function will load the login page and commit login and return the dashbord page
   * @param {String} email 
   * @param {String} passeword 
   */
  public loadPageAndLogin(email: string,passeword: string): CsDashboardPage{
    this.loadLoginPage();
    browser.waitUntil(() => {
      return this.getEmailTB().isDisplayed()
    },5000,"Email text was not loaded");
    this.getEmailTB().setValue(email);
    this.getLoginButton().click()
    browser.waitUntil(() => {
      return this.getPasswordTB().isDisplayed()
    },5000,"Password text box was not loaded")
    this.getPasswordTB().setValue(passeword)
    this.getLoginButton().click()
    return new CsDashboardPage();
  }
 
}