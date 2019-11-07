import CsBasePage from 'src/pages/CS/CsBasePage'
import CsDashboardPage from 'src/pages/CS/CsDashboardPage'

export default class CsLoginPage extends CsBasePage {
  constructor() {
    super();
    //console.log("Creating instance of login page")
  }
  private loadLoginPage() {
    return this.navigateToHomePage;
  }

  public test1(): String {
    return "Hello"
  }

  private getLoginButton(): WebdriverIO.Element {
    return $('.login-form__submit')
  }

  private getEmailTB(): WebdriverIO.Element {
    return $('.login-form__username-input')
  }

  private getPasswordTB() {
    return $(".login-form__password-input")
  }

  private setEmailAddress(email) {
    this.getEmailTB().setValue(email)
  }

  private setPassWord(password) {
    this.getPasswordTB().setValue(password)
  }

  private clickOnLoginButton() {
    this.getLoginButton().click
  }

  /**
   * This function will load the login page and commit login and return the dashbord page
   * @param {String} email 
   * @param {String} password 
   */
  public loadPageAndLogin(email: string, password: string): CsDashboardPage {
    this.loadLoginPage();
    browser.waitUntil(() => {
      return this.getEmailTB().isDisplayed()
    }, 15000, "Email text was not loaded");
    this.getEmailTB().setValue(email);
    this.getLoginButton().click()
    browser.waitUntil(() => {
      return this.getPasswordTB().isDisplayed()
    }, 30000, "Password text box was not loaded");

    this.getPasswordTB().setValue(password)
    this.getLoginButton().click()
    return new CsDashboardPage();
  }

}