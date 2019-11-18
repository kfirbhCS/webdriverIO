import allureReporter from '@wdio/allure-reporter';
import CsBasePage from 'src/pages/CS/CsBasePage';
import CsDashboardPage from 'src/pages/CS/CsDashboardPage';

export default class CsLoginPage extends CsBasePage {

	constructor() {
		super();
	}

	private get dashboard() {
		return $('#dashboard-chart');
	}

	public test1(): string {
		return 'Hello';
	}

	/**
		* This function will load the login page and commit login and return the dashbord page
		* @param {String} email
		* @param {String} password
		*/
	public loadPageAndLogin(email: string, password: string): CsDashboardPage {
		this.loadLoginPage();
		try {
			browser.waitUntil(() => {
				return this.dashboard !== undefined && this.dashboard.isDisplayed();
			}, 5000);
			return new CsDashboardPage();
		} catch (err) {
			console.log('waiting for dashboard');
		}
		allureReporter.startStep('Authentication');
		browser.waitUntil(() => {
			return this.getEmailTB().isDisplayed();
		}, 15000, 'Email text was not loaded');
		allureReporter.startStep('Set user name');
		this.getEmailTB().setValue(email);
		allureReporter.endStep();
		this.getLoginButton().click();
		browser.waitUntil(() => {
			return this.getPasswordTB().isDisplayed();
		}, 60000, 'Password text box was not loaded');
		allureReporter.startStep('set password');
		this.getPasswordTB().setValue(password);
		allureReporter.endStep();
		allureReporter.endStep();
		this.getLoginButton().click();
		return new CsDashboardPage();
	}
		private loadLoginPage() {
		allureReporter.startStep('loading login page');
		this.navigateToHomePage;
		allureReporter.endStep();
	}
	private getLoginButton(): WebdriverIO.Element {
		return $('.login-form__submit');
	}
	private getEmailTB(): WebdriverIO.Element {
		return $('.login-form__username-input');
	}
	private getPasswordTB()	{
		return $('.login-form__password-input');
	}
	private clickOnLoginButton() {
		this.getLoginButton().click();
	}
}