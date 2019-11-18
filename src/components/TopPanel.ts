import DefineSubMenu from 'src/components/DefineSubMenu';
import AnalyseSubMenu from './AnalyseSubMenu';
import PerformanceSubMenu from './PerformanceSubMenu';
export default class TopPanel {
	private get getPanel() {
		return $('#cs-main-nav').$('.nav-wrapper');
	}
	private get getAnalyseTab() {
		return this.getPanel.$('.analyze');
	}
	private get getDefineTab() {
		return this.getPanel.$('.define');
	}
	
	private get getPerformanceTab() {
		return this.getPanel.$('.performance ');
	}
	
	/**
		* will click on the define option in the top panel
		*/
	public clickOnDefineTab(): DefineSubMenu {
		const tab = this.getDefineTab;
		tab.click();
		return new DefineSubMenu(this.getSubMenuContainer(tab));
	}
	
	/**
		* will click on the analyes opton in the top panel
		*/
	public clickOnAnalyseTab(): AnalyseSubMenu {
		const tab = this.getAnalyseTab;
		browser.waitUntil(() => {
			return tab.isDisplayed();
		},5000,'Analysis tab is not displayed');
		tab.click();
		console.log("Analyse Tab Clicked");
		const container = this.getSubMenuContainer(tab);
		return new AnalyseSubMenu(container);
	}
	
	/**
		* will click on the performance option in the top panel
		*/
	public clickOnPerformanceTab(): PerformanceSubMenu {
		const tab = this.getPerformanceTab;
		tab.click();
		return new PerformanceSubMenu(this.getSubMenuContainer(tab));
	}
	private  getSubMenuContainer(parentTab) {
		return parentTab.$('.sub-menu-wrapper');
	}
}