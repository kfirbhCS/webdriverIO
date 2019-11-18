import TopPanelSubMenu from 'src/components/TopPanelSubMenu';
import CsZoningPage from 'src/pages/CS/CsZoningPage';
export default class AnalyseSubMenu extends TopPanelSubMenu {
	public constructor(parent) {
		super(parent);
	}
	public clickOnJourneyAnalysisOption() {
		this.getOptions()[0].click();
	}
	public clickOnPageComparatorOption() {
		this.getOptions()[1].click();
	}
	public clickOnZoningAnalysisOption() {
		browser.waitUntil(() => {
			return this.getOptions()[2].isEnabled();
		},5000,'Waiting for analysis ');
		browser.pause(2000);
		this.getOptions()[2].click();
		console.log("Zoning option was selected")
		return new CsZoningPage();
	}
	public clickOnSessioReplatOption() {
		this.getOptions()[3].click();
	}
}