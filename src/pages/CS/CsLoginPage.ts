import CsBasePage from 'src/pages/CS/CsBasePage'
import CsDashboardPage from 'src/pages/CS/CsDashboardPage'
import allureReporter from '@wdio/allure-reporter'
export default class CsLoginPage extends CsBasePage {
	constructor() {
		super();
	}

	private get dashboard() {
		return $("#dashboard-chart")
	}

	private loadLoginPage() {
		allureReporter.startStep("loading login page")
		this.navigateToHomePage;
		allureReporter.endStep();
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
		if (this.dashboard.isDisplayed()) {
			console.log("dashboard page is allready loaded")
			return new CsDashboardPage();
		} else {
			
			allureReporter.startStep("Authentication")

			browser.waitUntil(() => {
				return this.getEmailTB().isDisplayed()
			}, 15000, "Email text was not loaded");
			
			allureReporter.startStep("Set user name")
			this.getEmailTB().setValue(email);
			allureReporter.endStep()

			this.getLoginButton().click();

			browser.waitUntil(() => {
				return this.getPasswordTB().isDisplayed()
			}, 30000, "Password text box was not loaded");

			allureReporter.startStep("set password")
			this.getPasswordTB().setValue(password)
			allureReporter.endStep()
			allureReporter.endStep()
			this.getLoginButton().click()
			return new CsDashboardPage();
		}
	}

}